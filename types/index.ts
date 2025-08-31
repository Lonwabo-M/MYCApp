export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  topics: number;
  grade: 'Grade 11' | 'Grade 12';
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  content?: string;
  resources?: Resource[];
}

export interface Resource {
  id: string;
  type: 'pdf' | 'video' | 'article';
  title: string;
  url: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  grade: string;
  questions: number;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  score?: number;
}

export interface ExamPaper {
  id: string;
  subject: string;
  grade: string;
  year: string;
  term: string;
  type: 'Question Paper' | 'Memo';
  pages: number;
  downloadUrl?: string;
}

export interface VideoLesson {
  id: string;
  title: string;
  subject: string;
  grade: string;
  instructor: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  views: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  requirements?: string;
}

export interface UserProgress {
  userId: string;
  subject: string;
  progress: number;
  quizzesCompleted: number;
  averageScore: number;
  timeSpent: number;
  lastActivity: Date;
}