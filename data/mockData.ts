import { Subject, Topic, Quiz, ExamPaper, VideoLesson, Achievement } from '@/types';

export const subjectsData: Record<string, Subject[]> = {
  grade11: [
    {
      id: 'math-11',
      name: 'Mathematics',
      icon: '📐',
      color: '#2563EB',
      topics: 12,
      grade: 'Grade 11',
    },
    {
      id: 'physics-11',
      name: 'Physical Sciences',
      icon: '⚗️',
      color: '#059669',
      topics: 8,
      grade: 'Grade 11',
    },
    {
      id: 'biology-11',
      name: 'Life Sciences',
      icon: '🧬',
      color: '#7C3AED',
      topics: 10,
      grade: 'Grade 11',
    },
    {
      id: 'english-11',
      name: 'English',
      icon: '📚',
      color: '#DC2626',
      topics: 6,
      grade: 'Grade 11',
    },
  ],
  grade12: [
    {
      id: 'math-12',
      name: 'Mathematics',
      icon: '📐',
      color: '#2563EB',
      topics: 14,
      grade: 'Grade 12',
    },
    {
      id: 'physics-12',
      name: 'Physical Sciences',
      icon: '⚗️',
      color: '#059669',
      topics: 10,
      grade: 'Grade 12',
    },
    {
      id: 'biology-12',
      name: 'Life Sciences',
      icon: '🧬',
      color: '#7C3AED',
      topics: 12,
      grade: 'Grade 12',
    },
    {
      id: 'english-12',
      name: 'English',
      icon: '📚',
      color: '#DC2626',
      topics: 8,
      grade: 'Grade 12',
    },
  ],
};

export const topicsData: Record<string, Topic[]> = {
  'math-11': [
    {
      id: 'algebra-basics',
      title: 'Algebraic Expressions',
      description: 'Learn to simplify and manipulate algebraic expressions',
      duration: '45 min',
      completed: true,
    },
    {
      id: 'linear-functions',
      title: 'Linear Functions',
      description: 'Understanding graphs and equations of linear functions',
      duration: '50 min',
      completed: true,
    },
    {
      id: 'quadratic-functions',
      title: 'Quadratic Functions',
      description: 'Solving and graphing quadratic equations',
      duration: '65 min',
      completed: false,
    },
  ],
  'physics-11': [
    {
      id: 'motion-1d',
      title: 'Motion in One Dimension',
      description: 'Kinematics: displacement, velocity, and acceleration',
      duration: '55 min',
      completed: true,
    },
    {
      id: 'forces',
      title: 'Forces and Newton\'s Laws',
      description: 'Understanding force, mass, and acceleration relationships',
      duration: '60 min',
      completed: false,
    },
  ],
};

export const examPapersData: ExamPaper[] = [
  {
    id: 'math-12-2023-final',
    subject: 'Mathematics',
    grade: 'Grade 12',
    year: '2023',
    term: 'Final',
    type: 'Question Paper',
    pages: 8,
  },
  {
    id: 'math-12-2023-final-memo',
    subject: 'Mathematics',
    grade: 'Grade 12',
    year: '2023',
    term: 'Final',
    type: 'Memo',
    pages: 6,
  },
  {
    id: 'physics-12-2023-final',
    subject: 'Physical Sciences',
    grade: 'Grade 12',
    year: '2023',
    term: 'Final',
    type: 'Question Paper',
    pages: 12,
  },
];

export const videoLessonsData: VideoLesson[] = [
  {
    id: 'derivatives-intro',
    title: 'Introduction to Derivatives',
    subject: 'Mathematics',
    grade: 'Grade 12',
    instructor: 'Mr. Johnson',
    duration: '28:45',
    thumbnail: 'https://images.pexels.com/photos/6238119/pexels-photo-6238119.jpeg',
    views: 1240,
  },
  {
    id: 'atomic-structure',
    title: 'Atomic Structure & Bonding',
    subject: 'Physical Sciences',
    grade: 'Grade 11',
    instructor: 'Ms. Patel',
    duration: '35:12',
    thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    views: 987,
  },
];

export const achievementsData: Achievement[] = [
  {
    id: 'quiz-master',
    title: 'Quiz Master',
    description: 'Completed 10 quizzes',
    icon: '🧠',
    earned: true,
  },
  {
    id: 'math-pro',
    title: 'Mathematics Pro',
    description: '90% average in Math quizzes',
    icon: '📐',
    earned: true,
  },
  {
    id: 'study-streak',
    title: 'Study Streak',
    description: '7 days of continuous learning',
    icon: '🔥',
    earned: false,
    requirements: 'Study for 7 consecutive days',
  },
];