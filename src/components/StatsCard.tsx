import React from 'react';
import { StudyStats } from '../types';

interface StatsCardProps {
  stats: StudyStats;
  onFilterDueOnly?: () => void;
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats, onFilterDueOnly }) => {
  return (
    <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] shadow-xs p-3 grid grid-cols-3 divide-x divide-[var(--border-subtle)] text-center transition-colors">
      {/* DUE */}
      <div
        onClick={onFilterDueOnly}
        className="cursor-pointer hover:bg-rose-500/10 rounded-2xl py-1 transition"
        title="Klik untuk memprioritaskan kartu yang harus diulang"
      >
        <span className="block text-[11px] font-black tracking-wider text-[var(--text-secondary)] uppercase">
          DUE
        </span>
        <span className="text-2xl font-black text-rose-500 leading-tight">
          {stats.dueCount}
        </span>
      </div>

      {/* BELAJAR */}
      <div className="py-1">
        <span className="block text-[11px] font-black tracking-wider text-[var(--text-secondary)] uppercase">
          BELAJAR
        </span>
        <span className="text-2xl font-black text-amber-500 leading-tight">
          {stats.learningCount}
        </span>
      </div>

      {/* HAFAL */}
      <div className="py-1">
        <span className="block text-[11px] font-black tracking-wider text-[var(--text-secondary)] uppercase">
          HAFAL
        </span>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl font-black text-emerald-600 leading-tight">
            {stats.masteredCount}
          </span>
          <span className="text-xs font-semibold text-[var(--text-secondary)] opacity-70">
            /{stats.totalCount}
          </span>
        </div>
      </div>
    </div>
  );
};
