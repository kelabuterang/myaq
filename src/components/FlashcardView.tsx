import React, { useState, useEffect } from 'react';
import { GrammarRule, SRSAction } from '../types';
import { getBoxLabel, playTTS } from '../utils/srsLogic';
import { Volume2, Sparkles, RotateCcw, ArrowRight, ArrowLeft, Eye } from 'lucide-react';

interface FlashcardViewProps {
  rule: GrammarRule;
  currentIndex: number;
  totalQuestions: number;
  onEvaluate: (action: SRSAction) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const FlashcardView: React.FC<FlashcardViewProps> = ({
  rule,
  currentIndex,
  totalQuestions,
  onEvaluate,
  onNext,
  onPrev,
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [rule.matrix_id]);

  const boxInfo = getBoxLabel(rule.current_box);

  return (
    <div className="space-y-3">
      {/* Progress & Box Status */}
      <div className="flex items-center justify-between text-xs px-1">
        <span className="font-extrabold text-slate-500">
          Kartu {currentIndex + 1} dari {totalQuestions}
        </span>
        <span
          className={`px-3 py-1 rounded-2xl font-bold border ${boxInfo.bgClass} ${boxInfo.textClass} ${boxInfo.borderClass}`}
        >
          {boxInfo.label}
        </span>
      </div>

      {/* Flashcard Container */}
      <div className="bg-[var(--bg-card)] rounded-[32px] border-2 border-[var(--border-frame)] p-6 shadow-sm min-h-[360px] flex flex-col justify-between transition-colors">
        {/* Top bar with Matrix ID & Topic */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-[var(--text-primary)] bg-[var(--bg-subtle)] px-3 py-1 rounded-xl border border-[var(--border-subtle)]">
            #{rule.matrix_id} • {rule.topic}
          </span>
          <button
            onClick={() => playTTS(rule.question.replace('___', rule.correct_answer))}
            className="p-1.5 rounded-xl bg-[var(--bg-subtle)] hover:opacity-80 text-[var(--text-primary)] transition"
            title="Dengarkan pengucapan kalimat"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        {/* Card Body */}
        <div className="my-auto py-6 text-center">
          <div className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] leading-relaxed">
            {rule.question}
          </div>

          {!isFlipped ? (
            <div className="mt-8">
              <button
                onClick={() => setIsFlipped(true)}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-600 to-[#1e293b] hover:from-sky-700 hover:to-slate-900 text-white font-black text-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition"
              >
                <Eye className="w-4 h-4" />
                <span>Buka Jawaban & Trik Cepat</span>
              </button>
            </div>
          ) : (
            <div className="mt-6 space-y-4 animate-in fade-in duration-200 text-left">
              {/* Answer display */}
              <div className="text-center p-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <span className="text-xs font-black tracking-wider text-emerald-800 uppercase block">
                  Jawaban:
                </span>
                <span className="text-2xl font-black text-emerald-600">
                  {rule.correct_answer}
                </span>
              </div>

              {/* Memory Trick Yellow Card */}
              <div className="bg-[#fef9c3] border-2 border-[#fef08a] rounded-2xl p-4 shadow-xs">
                <div className="flex items-center gap-2 text-[#854d0e] font-black text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>TRIK INGATAN CEPAT:</span>
                </div>
                <div className="text-xs text-amber-950 font-medium whitespace-pre-line leading-relaxed">
                  {rule.memory_trick.replace('TRIK INGATAN CEPAT:\n', '')}
                </div>
              </div>

              {/* Flip back button */}
              <div className="text-center">
                <button
                  onClick={() => setIsFlipped(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Sembunyikan Jawaban</span>
                </button>
              </div>

              {/* SRS Evaluation Buttons */}
              <div className="pt-2">
                <div className="text-center text-[11px] font-black tracking-widest text-slate-500 uppercase mb-3">
                  BAGAIMANA INGATANMU?
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onEvaluate('lupa')}
                    className="p-3 rounded-2xl border-2 border-rose-300 bg-rose-50/50 hover:bg-rose-100 text-rose-800 transition active:scale-95 text-center"
                  >
                    <span className="block font-black text-sm">LUPA</span>
                    <span className="block text-[10px] font-bold text-rose-500">&lt; 10 MENIT</span>
                  </button>

                  <button
                    onClick={() => onEvaluate('sulit')}
                    className="p-3 rounded-2xl border-2 border-amber-300 bg-amber-50/50 hover:bg-amber-100 text-amber-800 transition active:scale-95 text-center"
                  >
                    <span className="block font-black text-sm">SULIT</span>
                    <span className="block text-[10px] font-bold text-amber-600">1 HARI</span>
                  </button>

                  <button
                    onClick={() => onEvaluate('bagus')}
                    className="p-3 rounded-2xl border-2 border-sky-300 bg-sky-50/50 hover:bg-sky-100 text-sky-800 transition active:scale-95 text-center"
                  >
                    <span className="block font-black text-sm">BAGUS</span>
                    <span className="block text-[10px] font-bold text-sky-600">3–7 HARI</span>
                  </button>

                  <button
                    onClick={() => onEvaluate('mudah')}
                    className="p-3 rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 hover:bg-emerald-100 text-emerald-800 transition active:scale-95 text-center"
                  >
                    <span className="block font-black text-sm">MUDAH</span>
                    <span className="block text-[10px] font-bold text-emerald-600">14+ HARI</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between px-2 pt-1 text-xs">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 font-bold text-slate-500 hover:text-slate-900 disabled:opacity-40 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex >= totalQuestions - 1}
          className="flex items-center gap-1 font-bold text-slate-500 hover:text-slate-900 disabled:opacity-40 transition"
        >
          <span>Selanjutnya</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
