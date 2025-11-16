export type Concept = {
  slug: string;
  title: string;
  description: string;
  content: string[]; // paragraphs
  quiz: QuizQuestion[];
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
  explanation: string;
};

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export type ForumPost = {
  id: number;
  title: string;
  author: string;
  avatarUrl: string;
  date: string;
  replies: number;
  content: string;
};
