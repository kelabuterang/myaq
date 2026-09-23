import React, { useState, useMemo, useEffect } from 'react';
import { GrammarRule, StudyMode, SRSAction, AppModule, EyeTheme } from './types';
import {
  getStoredRules,
  saveStoredRules,
  resetRulesToDefault,
  evaluateSRS,
  calculateStats,
  playTTS,
} from './utils/srsLogic';
import { Header } from './components/Header';
import { StatsCard } from './components/StatsCard';
import { ModeSelector } from './components/ModeSelector';
import { FilterBar } from './components/FilterBar';
import { QuizCard } from './components/QuizCard';
import { FlashcardView } from './components/FlashcardView';
import { MatrixGrid } from './components/MatrixGrid';
import { ImportExportModal } from './components/ImportExportModal';

export default function App() {
  const [activeModule, setActiveModule] = useState<AppModule>('grammar');
  const [rules, setRules] = useState<GrammarRule[]>(() => getStoredRules('grammar'));
  const [currentMode, setCurrentMode] = useState<StudyMode>('quiz');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedRange, setSelectedRange] = useState<string>('1-10');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isImportModalOpen, setIsImportModalOpen] = useState<boolean>(false);
  const [dueOnly, setDueOnly] = useState<boolean>(false);
  const [eyeTheme, setEyeTheme] = useState<EyeTheme>(() => {
    return (localStorage.getItem('cloverait_eye_theme') as EyeTheme) || 'warm';
  });

  // Apply theme data-theme attribute on root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', eyeTheme);
    localStorage.setItem('cloverait_eye_theme', eyeTheme);
  }, [eyeTheme]);

  // Switch between Grammar and Tenses
  const handleModuleChange = (newModule: AppModule) => {
    setActiveModule(newModule);
    const moduleRules = getStoredRules(newModule);
    setRules(moduleRules);
    setSelectedCategory('Semua');
    setSelectedRange('1-10');
    setCurrentIndex(0);
    setDueOnly(false);
  };

  // Sync state changes to storage
  const updateRules = (newRules: GrammarRule[]) => {
    setRules(newRules);
    saveStoredRules(newRules, activeModule);
  };

  // Filter rules according to Category and Range (or dueOnly)
  const filteredRules = useMemo(() => {
    const now = new Date();
    return rules.filter((rule) => {
      // Due filter if active
      if (dueOnly) {
        if (!rule.next_review) return false;
        return now >= new Date(rule.next_review);
      }

      // Category filter
      if (selectedCategory !== 'Semua' && rule.category !== selectedCategory) {
        return false;
      }

      // Range filter
      if (selectedRange === '1-10') {
        return rule.matrix_id >= 1 && rule.matrix_id <= 10;
      }
      if (selectedRange === '11-20') {
        return rule.matrix_id >= 11 && rule.matrix_id <= 20;
      }
      if (selectedRange === '21-50') {
        return rule.matrix_id >= 21 && rule.matrix_id <= 50;
      }
      if (selectedRange === '51-100') {
        return rule.matrix_id >= 51 && rule.matrix_id <= 100;
      }
      if (selectedRange === '101-200') {
        return rule.matrix_id >= 101 && rule.matrix_id <= 200;
      }
      if (selectedRange === '201-300') {
        return rule.matrix_id >= 201 && rule.matrix_id <= 300;
      }
      if (selectedRange === '301-500') {
        return rule.matrix_id >= 301 && rule.matrix_id <= 500;
      }
      return true; // '1-500', '1-200', or all
    });
  }, [rules, selectedCategory, selectedRange, dueOnly]);

  // Ensure currentIndex stays within bounds when filter changes
  useEffect(() => {
    if (currentIndex >= filteredRules.length) {
      setCurrentIndex(0);
    }
  }, [filteredRules.length, currentIndex]);

  const currentRule = filteredRules[currentIndex] || rules[0];

  // Stats
  const stats = useMemo(() => calculateStats(rules), [rules]);

  // SRS Evaluation handler
  const handleEvaluate = (action: SRSAction) => {
    if (!currentRule) return;
    const { updatedRule } = evaluateSRS(currentRule, action);
    const newRules = rules.map((r) =>
      r.matrix_id === updatedRule.matrix_id ? updatedRule : r
    );
    updateRules(newRules);

    // Auto navigate to next question if available
    if (currentIndex < filteredRules.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 400);
    }
  };

  // Matrix item click handler
  const handleSelectRuleFromMatrix = (rule: GrammarRule) => {
    const targetRange =
      rule.matrix_id <= 10
        ? '1-10'
        : rule.matrix_id <= 20
        ? '11-20'
        : rule.matrix_id <= 50
        ? '21-50'
        : rule.matrix_id <= 100
        ? '51-100'
        : rule.matrix_id <= 200
        ? '101-200'
        : rule.matrix_id <= 300
        ? '201-300'
        : rule.matrix_id <= 500
        ? '301-500'
        : activeModule === 'grammar'
        ? '1-500'
        : '1-200';

    setSelectedRange(targetRange);
    setSelectedCategory('Semua');
    setDueOnly(false);

    // Find index of this rule in updated list
    const foundIdx = rules
      .filter((r) => {
        if (targetRange === '1-10') return r.matrix_id >= 1 && r.matrix_id <= 10;
        if (targetRange === '11-20') return r.matrix_id >= 11 && r.matrix_id <= 20;
        if (targetRange === '21-50') return r.matrix_id >= 21 && r.matrix_id <= 50;
        if (targetRange === '51-100') return r.matrix_id >= 51 && r.matrix_id <= 100;
        if (targetRange === '101-200') return r.matrix_id >= 101 && r.matrix_id <= 200;
        if (targetRange === '201-300') return r.matrix_id >= 201 && r.matrix_id <= 300;
        if (targetRange === '301-500') return r.matrix_id >= 301 && r.matrix_id <= 500;
        return true;
      })
      .findIndex((r) => r.matrix_id === rule.matrix_id);

    setCurrentIndex(foundIdx >= 0 ? foundIdx : 0);
    setCurrentMode('quiz');
  };

  const handleNext = () => {
    if (currentIndex < filteredRules.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSpeakCurrent = () => {
    if (currentRule) {
      playTTS(currentRule.question.replace('___', currentRule.correct_answer));
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-amber-200 transition-colors duration-200">
      {/* Header with Grammar and Tenses tabs & Eye-Care theme toggle */}
      <Header
        activeModule={activeModule}
        onModuleChange={handleModuleChange}
        onSpeak={handleSpeakCurrent}
        currentTheme={eyeTheme}
        onThemeChange={setEyeTheme}
      />

      {/* Main Content Area (Max width phone-first view, centered) */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 py-3 space-y-3 pb-12">
        {/* Due Only notification filter banner */}
        {dueOnly && (
          <div className="p-2.5 bg-rose-500/10 border border-rose-300 dark:border-rose-800 rounded-2xl text-xs text-rose-800 dark:text-rose-200 flex items-center justify-between">
            <span>Menampilkan hanya kartu yang <strong>DUE</strong> untuk diulang.</span>
            <button
              onClick={() => setDueOnly(false)}
              className="px-2 py-0.5 bg-rose-200 dark:bg-rose-900 hover:bg-rose-300 text-rose-900 dark:text-rose-100 rounded-lg font-bold text-[11px]"
            >
              Hapus Filter
            </button>
          </div>
        )}

        {/* 1. Stats Counter Card (DUE, BELAJAR, HAFAL) */}
        <StatsCard
          stats={stats}
          onFilterDueOnly={() => setDueOnly(!dueOnly)}
        />

        {/* 2. Mode Selector (Kuis Pilihan, Flashcard, Matriks) */}
        <ModeSelector
          currentMode={currentMode}
          onModeChange={(mode) => setCurrentMode(mode)}
          matrixLabel={activeModule === 'grammar' ? 'MATRIKS 1-500' : 'MATRIKS 1-200'}
        />

        {/* 3. Category & Range Filter (only for quiz and flashcard modes) */}
        {currentMode !== 'matrix' && (
          <FilterBar
            module={activeModule}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
            }}
            selectedRange={selectedRange}
            onSelectRange={(rng) => {
              setSelectedRange(rng);
              setCurrentIndex(0);
            }}
          />
        )}

        {/* 4. Active View */}
        {currentMode === 'matrix' ? (
          <MatrixGrid
            module={activeModule}
            rules={rules}
            onSelectRule={handleSelectRuleFromMatrix}
          />
        ) : filteredRules.length === 0 ? (
          <div className="bg-[var(--bg-card)] rounded-3xl border-2 border-[var(--border-frame)] p-8 text-center space-y-3 transition-colors">
            <p className="text-sm font-bold text-[var(--text-secondary)]">
              Tidak ada kartu {activeModule === 'grammar' ? 'grammar' : 'tenses'} yang cocok dengan filter saat ini.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSelectedRange('1-10');
                setDueOnly(false);
              }}
              className="px-4 py-2 bg-[var(--border-frame)] text-white rounded-xl text-xs font-bold hover:opacity-90 transition"
            >
              Reset Filter ke 1–10 (Dasar)
            </button>
          </div>
        ) : currentMode === 'quiz' ? (
          <QuizCard
            rule={currentRule}
            currentIndex={currentIndex}
            totalQuestions={filteredRules.length}
            onEvaluate={handleEvaluate}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        ) : (
          <FlashcardView
            rule={currentRule}
            currentIndex={currentIndex}
            totalQuestions={filteredRules.length}
            onEvaluate={handleEvaluate}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </main>

      {/* Footer with database & backup access */}
      <footer className="max-w-md w-full mx-auto px-4 py-3 text-center text-xs text-[var(--text-secondary)] border-t border-[var(--border-subtle)] mt-auto transition-colors">
        <button
          onClick={() => setIsImportModalOpen(true)}
          className="hover:text-[var(--text-primary)] underline underline-offset-4 transition font-medium"
        >
          Database JSON & Cadangan Data ({activeModule === 'grammar' ? 'Grammar' : 'Tenses'})
        </button>
      </footer>

      {/* Database Import/Export Modal */}
      <ImportExportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        module={activeModule}
        rules={rules}
        onImportRules={(newRules) => {
          updateRules(newRules);
          setCurrentIndex(0);
        }}
        onResetProgress={() => {
          const fresh = resetRulesToDefault(activeModule);
          setRules(fresh);
          setCurrentIndex(0);
        }}
      />
    </div>
  );
}

