import React from 'react';
import { AppModule } from '../types';

interface FilterBarProps {
  module: AppModule;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedRange: string;
  onSelectRange: (range: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  module,
  selectedCategory,
  onSelectCategory,
  selectedRange,
  onSelectRange,
}) => {
  const grammarCategories = [
    { id: 'Semua', label: 'Semua' },
    { id: 'Noun', label: 'Noun' },
    { id: 'Pronoun', label: 'Pronoun' },
    { id: 'Adjective', label: 'Adjective' },
    { id: 'Verb', label: 'Verb' },
    { id: 'Adverb', label: 'Adverb' },
    { id: 'Conjunction', label: 'Conjunction' },
    { id: 'Preposition', label: 'Preposition' },
    { id: 'Passive', label: 'Passive' },
    { id: 'Gerund', label: 'Gerund' },
    { id: 'Concord', label: 'Concord' },
    { id: 'Word Order', label: 'Word Order' },
  ];

  const tensesCategories = [
    { id: 'Semua', label: 'Semua' },
    { id: 'Present Tense', label: 'Present' },
    { id: 'Past Tense', label: 'Past' },
    { id: 'Future Tense', label: 'Future' },
    { id: 'Past Future', label: 'Past Future' },
    { id: 'Time Signals', label: 'Time Signals' },
  ];

  const grammarRanges = [
    { id: '1-10', label: '1–10 (Dasar)' },
    { id: '11-20', label: '11–20 (Belasan)' },
    { id: '21-50', label: '21–50 (Menengah)' },
    { id: '51-100', label: '51–100 (Lanjutan)' },
    { id: '101-200', label: '101–200 (Mahir)' },
    { id: '201-300', label: '201–300 (Master)' },
    { id: '301-500', label: '301–500 (Expert)' },
    { id: '1-500', label: '1–500 (Semua)' },
  ];

  const tensesRanges = [
    { id: '1-10', label: '1–10 (Dasar)' },
    { id: '11-20', label: '11–20 (Belasan)' },
    { id: '21-50', label: '21–50 (Menengah)' },
    { id: '51-100', label: '51–100 (Lanjutan)' },
    { id: '101-200', label: '101–200 (Mahir)' },
    { id: '1-200', label: '1–200 (Semua)' },
  ];

  const categories = module === 'tenses' ? tensesCategories : grammarCategories;
  const ranges = module === 'tenses' ? tensesRanges : grammarRanges;

  return (
    <div className="space-y-2 text-xs">
      {/* Category Row */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        <span className="font-extrabold text-[var(--text-secondary)] uppercase shrink-0 text-[11px] tracking-wide">
          KATEGORI:
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {categories.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`px-3 py-1 rounded-2xl font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[var(--border-frame)] text-white shadow-xs'
                    : 'bg-[var(--pill-bg)] border border-[var(--border-subtle)] text-[var(--pill-text)] hover:opacity-85'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Range Row */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
        <span className="font-extrabold text-[var(--text-secondary)] uppercase shrink-0 text-[11px] tracking-wide">
          RENTANG:
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {ranges.map((r) => {
            const isSelected = selectedRange === r.id;
            return (
              <button
                key={r.id}
                onClick={() => onSelectRange(r.id)}
                className={`px-3 py-1 rounded-2xl font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[var(--border-frame)] text-white shadow-xs'
                    : 'bg-[var(--pill-bg)] border border-[var(--border-subtle)] text-[var(--pill-text)] hover:opacity-85'
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

