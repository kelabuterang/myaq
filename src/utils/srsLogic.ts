import { BoxLevel, GrammarRule, SRSAction, StudyStats, AppModule } from '../types';
import { getFull500GrammarRules } from '../data/initialGrammarData';
import { getFull200TensesRules } from '../data/initialTensesData';

const STORAGE_KEYS = {
  grammar: 'cloverait_grammar_srs_data_v1',
  tenses: 'cloverait_tenses_srs_data_v1',
};

export function getStoredRules(module: AppModule = 'grammar'): GrammarRule[] {
  const key = STORAGE_KEYS[module];
  const defaults = module === 'tenses' ? getFull200TensesRules() : getFull500GrammarRules();

  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // If user has old dataset (e.g. 50, 100, 200, 300 items), smoothly merge new items
        if (parsed.length < defaults.length) {
          const existingIds = new Set(parsed.map((p) => p.matrix_id));
          const missing = defaults.filter((d) => !existingIds.has(d.matrix_id));
          const merged = [...parsed, ...missing];
          saveStoredRules(merged, module);
          return merged;
        }
        return parsed;
      }
    }
  } catch (e) {
    console.error(`Error loading rules for ${module} from localStorage`, e);
  }

  saveStoredRules(defaults, module);
  return defaults;
}

export function saveStoredRules(rules: GrammarRule[], module: AppModule = 'grammar'): void {
  const key = STORAGE_KEYS[module];
  try {
    localStorage.setItem(key, JSON.stringify(rules));
  } catch (e) {
    console.error(`Error saving rules for ${module} to localStorage`, e);
  }
}

export function resetRulesToDefault(module: AppModule = 'grammar'): GrammarRule[] {
  const defaults = module === 'tenses' ? getFull200TensesRules() : getFull500GrammarRules();
  saveStoredRules(defaults, module);
  return defaults;
}

/**
 * SRS Logic according to Cloverait specifications:
 * - LUPA (<10 Menit): Turunkan ke Box 1 (atau Box 0) -> Set Next_Review = +5 menit -> Masuk kategori BELAJAR.
 * - SULIT (1 Hari): Tetap di Box yang sama -> Set Next_Review = +1 hari -> Masuk kategori DUE esok hari.
 * - BAGUS (3-7 Hari): Naikkan ke Box 3 (atau naik 1 level jika >= 3) -> Set Next_Review = +4 hari -> Masuk kategori BELAJAR/REVIEW.
 * - MUDAH (14+ Hari): Naikkan ke Box 4 atau 5 (Hafal) -> Set Next_Review = +14 hari -> Masuk kategori HAFAL.
 */
export function evaluateSRS(
  rule: GrammarRule,
  action: SRSAction
): { updatedRule: GrammarRule; nextBox: BoxLevel; nextReviewDate: Date } {
  const now = new Date();
  let nextBox: BoxLevel = rule.current_box;
  let nextReviewDate = new Date(now.getTime());

  switch (action) {
    case 'lupa':
      // Turunkan ke Box 1 (atau Box 0 jika sudah di 0)
      nextBox = rule.current_box === 0 ? 0 : 1;
      nextReviewDate = new Date(now.getTime() + 5 * 60 * 1000); // +5 menit
      break;

    case 'sulit':
      // Tetap di box yang sama (minimal 1 jika tadi 0)
      nextBox = rule.current_box === 0 ? 1 : rule.current_box;
      nextReviewDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // +1 hari
      break;

    case 'bagus':
      // Naikkan ke Box 3 (Mantap) atau naik +1 jika sudah >= 3 tapi < 5
      if (rule.current_box < 3) {
        nextBox = 3;
      } else {
        nextBox = Math.min(5, (rule.current_box + 1)) as BoxLevel;
      }
      nextReviewDate = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000); // +4 hari
      break;

    case 'mudah':
      // Naikkan ke Box 4 atau 5 (Hafal)
      if (rule.current_box < 4) {
        nextBox = 4;
      } else {
        nextBox = 5;
      }
      nextReviewDate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000); // +14 hari
      break;
  }

  const updatedRule: GrammarRule = {
    ...rule,
    current_box: nextBox,
    next_review: nextReviewDate.toISOString(),
    last_reviewed: now.toISOString(),
    total_reviews: (rule.total_reviews || 0) + 1,
  };

  return { updatedRule, nextBox, nextReviewDate };
}

export function calculateStats(rules: GrammarRule[]): StudyStats {
  const now = new Date();
  let dueCount = 0;
  let learningCount = 0;
  let masteredCount = 0;

  for (const r of rules) {
    // Hafal: Box 4-5
    if (r.current_box >= 4) {
      masteredCount++;
    } else if (r.current_box >= 1 && r.current_box <= 3) {
      learningCount++;
    }

    // Due check: jika ada next_review dan waktu sekarang >= next_review
    if (r.next_review) {
      const reviewTime = new Date(r.next_review);
      if (now >= reviewTime) {
        dueCount++;
      }
    } else if (r.current_box === 0) {
      // Optional: Box 0 cards ready for initial study can be counted or left separate
    }
  }

  return {
    dueCount,
    learningCount,
    masteredCount,
    totalCount: rules.length,
  };
}

export function getBoxLabel(box: BoxLevel): { label: string; textClass: string; bgClass: string; borderClass: string } {
  switch (box) {
    case 0:
      return {
        label: 'Belum (Box 0)',
        textClass: 'text-slate-600',
        bgClass: 'bg-slate-100',
        borderClass: 'border-slate-300',
      };
    case 1:
    case 2:
      return {
        label: `Mulai (Box ${box})`,
        textClass: 'text-amber-700',
        bgClass: 'bg-amber-50',
        borderClass: 'border-amber-300',
      };
    case 3:
      return {
        label: 'Mantap (Box 3)',
        textClass: 'text-sky-700',
        bgClass: 'bg-sky-50',
        borderClass: 'border-sky-300',
      };
    case 4:
    case 5:
      return {
        label: `Hafal (Box ${box})`,
        textClass: 'text-emerald-700',
        bgClass: 'bg-emerald-50',
        borderClass: 'border-emerald-300',
      };
  }
}

export function playTTS(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/___+/g, 'blank').replace(/[()]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('TTS playback error', e);
  }
}
