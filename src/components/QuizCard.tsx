import React, { useState, useEffect } from 'react';
import { GrammarRule, SRSAction } from '../types';
import { getBoxLabel, playTTS } from '../utils/srsLogic';
import { Volume2, Sparkles, CheckCircle2, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizCardProps {
  rule: GrammarRule;
  currentIndex: number;
  totalQuestions: number;
  onEvaluate: (action: SRSAction) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  rule,
  currentIndex,
  totalQuestions,
  onEvaluate,
  onNext,
  onPrev,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Reset when rule changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [rule.matrix_id]);

  const boxInfo = getBoxLabel(rule.current_box);

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleReveal = () => {
    setIsAnswered(true);
  };

  // Render question with fill-in blank highlighted
  const renderQuestionText = () => {
    if (rule.question.includes('___')) {
      const parts = rule.question.split('___');
      return (
        <span>
          {parts[0]}
          <span className={`inline-block mx-1 px-3 py-0.5 rounded-lg border-b-2 font-black ${
            isAnswered
              ? 'bg-emerald-100 text-emerald-800 border-emerald-500'
              : 'bg-slate-100 text-slate-400 border-slate-400 min-w-[80px] text-center'
          }`}>
            {isAnswered ? rule.correct_answer : '?'}
          </span>
          {parts[1]}
        </span>
      );
    }
    return <span>{rule.question}</span>;
  };

  return (
    <div className="space-y-3">
      {/* Progress & Box Status Bar */}
      <div className="flex items-center justify-between text-xs px-1">
        <span className="font-extrabold text-slate-500">
          Soal {currentIndex + 1} dari {totalQuestions}
        </span>
        <span
          className={`px-3 py-1 rounded-2xl font-bold border ${boxInfo.bgClass} ${boxInfo.textClass} ${boxInfo.borderClass}`}
        >
          {boxInfo.label}
        </span>
      </div>

      {/* Main Study Card with deep curved frame */}
      <div className="bg-[var(--bg-card)] rounded-[32px] border-2 border-[var(--border-frame)] p-5 shadow-sm relative overflow-hidden transition-colors">
        {/* Topic Tag & Audio button */}
        <div className="flex items-center justify-between mb-4">
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

        {/* Question Text */}
        <div className="my-6 text-center">
          <div className="text-2xl font-extrabold text-[var(--text-primary)] leading-relaxed tracking-tight">
            {renderQuestionText()}
          </div>
        </div>

        {/* Options List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
          {rule.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isCorrect = option === rule.correct_answer;
            const isSelected = selectedOption === option;

            let btnStyle =
              'bg-[var(--bg-subtle)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:opacity-90';
            if (isAnswered) {
              if (isCorrect) {
                btnStyle =
                  'bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-300 ring-2 ring-emerald-500/20';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-rose-500/15 border-rose-400 text-rose-800 dark:text-rose-300';
              } else {
                btnStyle = 'bg-[var(--bg-subtle)] border-[var(--border-subtle)] opacity-40 text-[var(--text-secondary)]';
              }
            }

            return (
              <button
                key={option}
                onClick={() => handleSelectOption(option)}
                disabled={isAnswered}
                className={`p-3.5 rounded-2xl border-2 font-bold text-left text-sm flex items-center justify-between transition-all active:scale-[0.98] ${btnStyle}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-black text-[var(--text-primary)] shrink-0">
                    {letter}
                  </span>
                  <span>{option}</span>
                </div>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action to reveal if not answered yet */}
        {!isAnswered && (
          <div className="text-center pt-1">
            <button
              onClick={handleReveal}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 underline underline-offset-4"
            >
              Lihat Kunci & Trik Langsung
            </button>
          </div>
        )}

        {/* Revealed Section: Correct Answer + Yellow Memory Trick Card + SRS Evaluation */}
        {isAnswered && (
          <div className="mt-6 pt-5 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
            {/* Answer Display */}
            <div className="text-center">
              <span className="text-xs font-black tracking-widest text-slate-400 uppercase block">
                Jawaban Benar
              </span>
              <span className="text-2xl font-black text-emerald-600 leading-tight">
                = {rule.correct_answer}
              </span>
            </div>

            {/* Visual Yellow Memory Trick Card (matches photo #1 and Rule 3) */}
            <div className="bg-[#fef9c3] border-2 border-[#fef08a] rounded-2xl p-4 text-left shadow-xs">
              <div className="flex items-center gap-2 text-[#854d0e] font-black text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>TRIK INGATAN CEPAT:</span>
              </div>
              <div className="text-xs text-amber-950 font-medium whitespace-pre-line leading-relaxed">
                {rule.memory_trick.replace('TRIK INGATAN CEPAT:\n', '')}
              </div>
            </div>

            {/* SRS Evaluation Section: BAGAIMANA INGATANMU? (matches photo #1 & #7) */}
            <div className="pt-2">
              <div className="text-center text-[11px] font-black tracking-widest text-slate-500 uppercase mb-3">
                BAGAIMANA INGATANMU?
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* LUPA */}
                <button
                  onClick={() => onEvaluate('lupa')}
                  className="p-3 rounded-2xl border-2 border-rose-300 bg-rose-50/50 hover:bg-rose-100 hover:border-rose-400 text-rose-800 transition active:scale-95 text-center"
                >
                  <span className="block font-black text-sm tracking-wide">
                    LUPA
                  </span>
                  <span className="block text-[10px] font-bold text-rose-500">
                    &lt; 10 MENIT
                  </span>
                </button>

                {/* SULIT */}
                <button
                  onClick={() => onEvaluate('sulit')}
                  className="p-3 rounded-2xl border-2 border-amber-300 bg-amber-50/50 hover:bg-amber-100 hover:border-amber-400 text-amber-800 transition active:scale-95 text-center"
                >
                  <span className="block font-black text-sm tracking-wide">
                    SULIT
                  </span>
                  <span className="block text-[10px] font-bold text-amber-600">
                    1 HARI
                  </span>
                </button>

                {/* BAGUS */}
                <button
                  onClick={() => onEvaluate('bagus')}
                  className="p-3 rounded-2xl border-2 border-sky-300 bg-sky-50/50 hover:bg-sky-100 hover:border-sky-400 text-sky-800 transition active:scale-95 text-center"
                >
                  <span className="block font-black text-sm tracking-wide">
                    BAGUS
                  </span>
                  <span className="block text-[10px] font-bold text-sky-600">
                    3–7 HARI
                  </span>
                </button>

                {/* MUDAH */}
                <button
                  onClick={() => onEvaluate('mudah')}
                  className="p-3 rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 hover:bg-emerald-100 hover:border-emerald-500 text-emerald-800 transition active:scale-95 text-center"
                >
                  <span className="block font-black text-sm tracking-wide">
                    MUDAH
                  </span>
                  <span className="block text-[10px] font-bold text-emerald-600">
                    14+ HARI
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Prev / Next navigation pills */}
      <div className="flex items-center justify-between px-2 pt-1 text-xs">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="flex items-center gap-1 font-bold text-slate-500 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-500 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Sebelumnya</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex >= totalQuestions - 1}
          className="flex items-center gap-1 font-bold text-slate-500 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-500 transition"
        >
          <span>Selanjutnya</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
