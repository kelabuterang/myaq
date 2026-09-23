export type BoxLevel = 0 | 1 | 2 | 3 | 4 | 5;

export type AppModule = 'grammar' | 'tenses';

export interface GrammarRule {
  matrix_id: number;
  category: string;
  topic: string;
  question: string;
  options: string[];
  correct_answer: string;
  memory_trick: string;
  current_box: BoxLevel;
  next_review: string | null; // ISO string timestamp or null
  last_reviewed?: string | null;
  total_reviews?: number;
}

export type StudyMode = 'quiz' | 'flashcard' | 'matrix';

export type EyeTheme = 'warm' | 'sage' | 'dark';

export type SRSAction = 'lupa' | 'sulit' | 'bagus' | 'mudah';

export interface StudyStats {
  dueCount: number;
  learningCount: number;
  masteredCount: number;
  totalCount: number;
}

