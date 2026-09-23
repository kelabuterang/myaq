import React from 'react';
import { Volume2, ChevronLeft, Waves, Clock, BookOpen } from 'lucide-react';
import { AppModule, EyeTheme } from '../types';

interface HeaderProps {
  activeModule: AppModule;
  onModuleChange: (module: AppModule) => void;
  onSpeak: () => void;
  currentTheme: EyeTheme;
  onThemeChange: (theme: EyeTheme) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeModule,
  onModuleChange,
  onSpeak,
  currentTheme,
  onThemeChange,
}) => {
  return (
    <header className="w-full bg-[var(--bg-header)] border-b border-[var(--border-subtle)] sticky top-0 z-30 transition-colors">
      {/* Top Bar with CLOVERAIT Brand Badge & Eye Theme Selector */}
      <div className="max-w-md mx-auto px-4 pt-3 pb-2 flex items-center justify-between">
        <div className="bg-[#1e293b] text-white px-3.5 py-1.5 rounded-2xl flex items-center gap-2 shadow-sm border border-[#0f172a]">
          <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-300">
            <Waves className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold tracking-wider text-xs sm:text-sm">CLOVERAIT</span>
        </div>

        {/* Eye-Friendly Theme Switcher (Teduh, Sejuk, Malam) */}
        <div className="flex items-center gap-1 p-1 rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[11px] font-bold">
          <button
            onClick={() => onThemeChange('warm')}
            className={`px-2 py-0.5 rounded-xl flex items-center gap-1 transition-all ${
              currentTheme === 'warm'
                ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            title="Mode Kertas Teduh (Warm Paper / Anti-Silau)"
          >
            <span>🌿</span>
            <span className="text-[11px]">Teduh</span>
          </button>
          <button
            onClick={() => onThemeChange('sage')}
            className={`px-2 py-0.5 rounded-xl flex items-center gap-1 transition-all ${
              currentTheme === 'sage'
                ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            title="Mode Hijau Relaksasi Mata (Sage Tea)"
          >
            <span>🍵</span>
            <span className="text-[11px]">Sejuk</span>
          </button>
          <button
            onClick={() => onThemeChange('dark')}
            className={`px-2 py-0.5 rounded-xl flex items-center gap-1 transition-all ${
              currentTheme === 'dark'
                ? 'bg-[var(--bg-card)] text-[var(--text-primary)] shadow-xs border border-[var(--border-subtle)]'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            title="Mode Gelap / Malam (Dark Mode)"
          >
            <span>🌙</span>
            <span className="text-[11px]">Malam</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs - Grammar & Tenses */}
      <div className="max-w-md mx-auto px-4 py-1 flex items-center gap-2">
        <button
          onClick={() => onModuleChange('grammar')}
          className={`flex-1 py-1.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeModule === 'grammar'
              ? 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xs'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Grammar (500)</span>
        </button>

        <button
          onClick={() => onModuleChange('tenses')}
          className={`flex-1 py-1.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeModule === 'tenses'
              ? 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] shadow-xs'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Tenses (200)</span>
        </button>
      </div>

      {/* Subheader: SPACED REPETITION - GRAMMAR / TENSES with Sound */}
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between border-t border-[var(--border-subtle)] mt-1">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onModuleChange(activeModule === 'grammar' ? 'tenses' : 'grammar')}
            className="w-9 h-9 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] shadow-xs active:scale-95 transition"
            title={`Beralih ke modul ${activeModule === 'grammar' ? 'Tenses' : 'Grammar'}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <span className="text-[10px] font-extrabold tracking-widest text-[var(--text-secondary)] uppercase block leading-none">
              Spaced Repetition
            </span>
            <h1 className="text-xl font-black text-[var(--text-primary)] leading-tight tracking-tight">
              {activeModule === 'grammar' ? 'GRAMMAR' : '16 TENSES'}
            </h1>
            <p className="text-[11px] text-[var(--text-secondary)] leading-tight">
              {activeModule === 'grammar'
                ? 'Hafal Otomatis 500 Aturan Tata Bahasa (Matrix 1-500)'
                : 'Kuasai Pola Waktu & Rumus Kata Kerja (Matrix 1-200)'}
            </p>
          </div>
        </div>

        {/* Pronunciation Sound Button */}
        <button
          onClick={onSpeak}
          title="Dengarkan pengucapan kalimat (TTS)"
          className="w-10 h-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] shadow-xs active:scale-95 transition"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

