import React, { useState } from 'react';
import { GrammarRule, AppModule } from '../types';
import { X, Copy, Check, Download, Upload, RotateCcw } from 'lucide-react';

interface ImportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: AppModule;
  rules: GrammarRule[];
  onImportRules: (newRules: GrammarRule[]) => void;
  onResetProgress: () => void;
}

export const ImportExportModal: React.FC<ImportExportModalProps> = ({
  isOpen,
  onClose,
  module,
  rules,
  onImportRules,
  onResetProgress,
}) => {
  const [jsonText, setJsonText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; isError?: boolean } | null>(null);

  if (!isOpen) return null;

  const currentJsonString = JSON.stringify(
    rules.map((r) => ({
      matrix_id: r.matrix_id,
      topic: r.topic,
      question: r.question,
      options: r.options,
      correct_answer: r.correct_answer,
      memory_trick: r.memory_trick,
      current_box: r.current_box,
      next_review: r.next_review,
    })),
    null,
    2
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentJsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([currentJsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cloverait_${module}_matrix_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };


  const handleImport = () => {
    try {
      const parsed = JSON.parse(jsonText.trim());
      if (!Array.isArray(parsed)) {
        throw new Error('Format JSON harus berupa Array [...]');
      }
      if (parsed.length === 0) {
        throw new Error('Array JSON kosong');
      }

      // Normalize imported rules
      const imported: GrammarRule[] = parsed.map((item, index) => ({
        matrix_id: Number(item.matrix_id || index + 1),
        category: (item.topic?.split('(')[0]?.trim() as any) || 'Lainnya',
        topic: String(item.topic || `Rule #${index + 1}`),
        question: String(item.question || ''),
        options: Array.isArray(item.options) ? item.options.map(String) : ['A', 'B', 'C', 'D'],
        correct_answer: String(item.correct_answer || ''),
        memory_trick: String(item.memory_trick || ''),
        current_box: (typeof item.current_box === 'number' ? item.current_box : 0) as any,
        next_review: item.next_review || null,
      }));

      onImportRules(imported);
      setStatusMessage({ text: `Berhasil mengimpor ${imported.length} aturan grammar!` });
      setTimeout(() => {
        onClose();
        setStatusMessage(null);
      }, 1200);
    } catch (err: any) {
      setStatusMessage({ text: `Gagal impor: ${err.message}`, isError: true });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-subtle)] shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150 transition-colors">
        {/* Header */}
        <div className="p-4 border-b border-[var(--border-subtle)] flex items-center justify-between bg-[var(--bg-subtle)]">
          <div>
            <h3 className="font-black text-[var(--text-primary)] text-base">
              Database & Pengaturan JSON
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Salin, impor, atau reset basis data aturan grammar Cloverait
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--bg-card)] text-[var(--text-secondary)] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto">
          {statusMessage && (
            <div
              className={`p-3 rounded-xl text-xs font-bold ${
                statusMessage.isError
                  ? 'bg-rose-50 text-rose-800 border border-rose-200'
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin!' : 'Salin Semua JSON'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition"
            >
              <Download className="w-4 h-4" />
              <span>Unduh File .json</span>
            </button>

            <button
              onClick={() => {
                if (confirm('Yakin ingin mereset semua kemajuan memori ke Box 0?')) {
                  onResetProgress();
                  setStatusMessage({ text: 'Kemajuan berhasil direset ke default!' });
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center gap-1.5 transition ml-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Progres</span>
            </button>
          </div>

          {/* Import Textarea */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">
              Tempel JSON Baru untuk Diimpor:
            </label>
            <textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              placeholder="Tempel format array JSON [...] di sini..."
              rows={5}
              className="w-full text-xs font-mono p-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              onClick={handleImport}
              disabled={!jsonText.trim()}
              className="w-full py-2.5 rounded-xl bg-[#1e293b] hover:bg-slate-800 disabled:opacity-40 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Upload className="w-4 h-4" />
              <span>Impor JSON ke Database Aplikasi</span>
            </button>
          </div>

          {/* Preview of current JSON */}
          <div className="space-y-1.5 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-600">
                Pratinjau JSON Aktif ({rules.length} Aturan):
              </span>
            </div>
            <pre className="text-[11px] font-mono bg-slate-900 text-slate-200 p-3 rounded-2xl max-h-48 overflow-y-auto leading-tight">
              {currentJsonString}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
