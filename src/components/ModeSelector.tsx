import React from 'react';
import { Layers, LayoutGrid, CheckSquare } from 'lucide-react';
import { StudyMode } from '../types';

interface ModeSelectorProps {
  currentMode: StudyMode;
  onModeChange: (mode: StudyMode) => void;
  matrixLabel?: string;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onModeChange, matrixLabel = 'MATRIKS' }) => {
  return (
    <div className="bg-[var(--bg-subtle)] p-1 rounded-2xl border border-[var(--border-subtle)] grid grid-cols-3 gap-1 transition-colors">
      {/* Quiz Choice */}
      <button
        onClick={() => onModeChange('quiz')}
        className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
          currentMode === 'quiz'
            ? 'bg-[var(--border-frame)] text-white shadow-xs'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
        }`}
      >
        <CheckSquare className="w-3.5 h-3.5" />
        <span>KUIS PILIHAN</span>
      </button>

      {/* Flashcard */}
      <button
        onClick={() => onModeChange('flashcard')}
        className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
          currentMode === 'flashcard'
            ? 'bg-[var(--border-frame)] text-white shadow-xs'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
        }`}
      >
        <Layers className="w-3.5 h-3.5" />
        <span>FLASHCARD</span>
      </button>

      {/* Matrix */}
      <button
        onClick={() => onModeChange('matrix')}
        className={`py-2 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold transition-all ${
          currentMode === 'matrix'
            ? 'bg-[var(--border-frame)] text-white shadow-xs'
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
        }`}
      >
        <LayoutGrid className="w-3.5 h-3.5" />
        <span>{matrixLabel}</span>
      </button>
    </div>
  );
};

