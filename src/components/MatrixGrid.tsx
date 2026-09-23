import React, { useState } from 'react';
import { GrammarRule, AppModule } from '../types';
import { Volume2, Sparkles, BookOpen } from 'lucide-react';
import { playTTS } from '../utils/srsLogic';

interface MatrixGridProps {
  module?: AppModule;
  rules: GrammarRule[];
  onSelectRule: (rule: GrammarRule) => void;
}

export const MatrixGrid: React.FC<MatrixGridProps> = ({ module = 'grammar', rules, onSelectRule }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [previewRule, setPreviewRule] = useState<GrammarRule | null>(null);

  const categories = ['Semua', ...Array.from(new Set(rules.map((r) => r.category)))];

  const filteredRules = rules.filter((r) => {
    if (selectedCategory === 'Semua') return true;
    return r.category === selectedCategory;
  });

  const getCellClasses = (box: number) => {
    switch (box) {
      case 0:
        return 'bg-[var(--bg-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-frame)]';
      case 1:
      case 2:
        return 'bg-[#fef9c3] border-[#fde047] text-amber-900 hover:border-amber-400';
      case 3:
        return 'bg-[#e0f2fe] border-[#7dd3fc] text-sky-900 hover:border-sky-400';
      case 4:
      case 5:
        return 'bg-[#d1fae5] border-[#6ee7b7] text-emerald-900 hover:border-emerald-400';
      default:
        return 'bg-[var(--bg-subtle)] border-[var(--border-subtle)] text-[var(--text-secondary)]';
    }
  };

  return (
    <div className="bg-[var(--bg-card)] rounded-[32px] border-2 border-[var(--border-frame)] p-5 shadow-sm space-y-4 transition-colors">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-base font-black text-[var(--text-primary)] uppercase tracking-tight">
          {module === 'tenses' ? 'MATRIKS PENGUASAAN 16 TENSES (200 POLA)' : 'MATRIKS PENGUASAAN 500 ATURAN GRAMMAR'}
        </h2>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5">
          {module === 'tenses'
            ? 'Pilih nomor pola tenses (1–200) untuk melihat detail. Klik kotak untuk latihan langsung.'
            : 'Pilih nomor aturan grammar (1–500) untuk melihat detail. Klik kotak untuk latihan langsung.'}
        </p>
      </div>


      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[var(--border-frame)] text-white'
                  : 'bg-[var(--pill-bg)] text-[var(--pill-text)] border border-[var(--border-subtle)] hover:opacity-85'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs pt-1 pb-2 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-subtle)]" />
          <span className="font-semibold text-[var(--text-secondary)] text-[11px]">Belum (Box 0)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-md bg-[#fef9c3] border border-[#fde047]" />
          <span className="font-semibold text-amber-800 text-[11px]">Mulai (Box 1-2)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-md bg-[#e0f2fe] border border-[#7dd3fc]" />
          <span className="font-semibold text-sky-800 text-[11px]">Mantap (Box 3)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded-md bg-[#d1fae5] border border-[#6ee7b7]" />
          <span className="font-semibold text-emerald-800 text-[11px]">Hafal (Box 4-5)</span>
        </div>
      </div>

      {/* Grid of 10 columns */}
      <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
        {rules.map((rule) => {
          const isDimmed = selectedCategory !== 'Semua' && rule.category !== selectedCategory;
          const isSelectedPreview = previewRule?.matrix_id === rule.matrix_id;

          return (
            <button
              key={rule.matrix_id}
              onClick={() => {
                setPreviewRule(rule);
              }}
              onDoubleClick={() => onSelectRule(rule)}
              className={`aspect-square rounded-xl border font-bold text-xs flex items-center justify-center transition-all active:scale-95 ${getCellClasses(
                rule.current_box
              )} ${isDimmed ? 'opacity-25 grayscale' : 'opacity-100'} ${
                isSelectedPreview ? 'ring-2 ring-indigo-600 ring-offset-1 font-black scale-105 z-10' : ''
              }`}
              title={`#${rule.matrix_id}: ${rule.topic} (Box ${rule.current_box})`}
            >
              {rule.matrix_id}
            </button>
          );
        })}
      </div>

      {/* Detail Preview Card if rule is clicked */}
      {previewRule && (
        <div className="mt-4 p-4 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-lg bg-[var(--border-frame)] text-white text-xs font-black">
                #{previewRule.matrix_id}
              </span>
              <span className="font-bold text-[var(--text-primary)] text-sm">
                {previewRule.topic}
              </span>
            </div>
            <button
              onClick={() => playTTS(previewRule.question.replace('___', previewRule.correct_answer))}
              className="p-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:opacity-80"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-card)] p-3 rounded-xl border border-[var(--border-subtle)]">
            {previewRule.question}
          </div>

          {/* Memory trick preview */}
          <div className="bg-[#fef9c3] border border-[#fef08a] rounded-xl p-3 text-xs text-amber-950">
            <div className="flex items-center gap-1.5 font-black text-amber-800 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRIK INGATAN CEPAT:</span>
            </div>
            <div className="whitespace-pre-line leading-relaxed font-medium">
              {previewRule.memory_trick.replace('TRIK INGATAN CEPAT:\n', '')}
            </div>
          </div>

          {/* Action button: Practice this rule */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-slate-500">
              Kunci: <strong className="text-emerald-600 font-extrabold">{previewRule.correct_answer}</strong>
            </span>
            <button
              onClick={() => onSelectRule(previewRule)}
              className="px-4 py-2 rounded-xl bg-[#1e293b] hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Latihan Kartu Ini</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
