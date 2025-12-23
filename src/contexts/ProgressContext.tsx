import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface LessonProgress {
  completed: boolean;
  score?: number;
  completedAt?: string;
}

export interface ChallengeProgress {
  started: boolean;
  completed: boolean;
  submittedAt?: string;
}

export interface ProgressState {
  lessons: Record<string, LessonProgress>;
  challenges: Record<string, ChallengeProgress>;
  simulatorPracticeTime: number;
  totalPoints: number;
  streak: number;
  lastVisit?: string;
}

interface ProgressContextType {
  progress: ProgressState;
  completeLesson: (lessonId: string, score?: number) => void;
  startChallenge: (challengeId: string) => void;
  completeChallenge: (challengeId: string) => void;
  addSimulatorTime: (minutes: number) => void;
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  getChallengeProgress: (challengeId: string) => ChallengeProgress | undefined;
  getCompletedLessonsCount: () => number;
  getTotalLessonsCount: () => number;
  getOverallProgress: () => number;
  resetProgress: () => void;
}

const defaultProgress: ProgressState = {
  lessons: {},
  challenges: {},
  simulatorPracticeTime: 0,
  totalPoints: 0,
  streak: 0,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'canon-1500d-progress';
const TOTAL_LESSONS = 10; // 6 foundations + 4 scenarios

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultProgress;
      }
    }
    return defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastVisit !== today) {
      setProgress(prev => ({
        ...prev,
        lastVisit: today,
        streak: prev.lastVisit === new Date(Date.now() - 86400000).toDateString() 
          ? prev.streak + 1 
          : 1,
      }));
    }
  }, []);

  const completeLesson = (lessonId: string, score?: number) => {
    setProgress(prev => {
      const isNewCompletion = !prev.lessons[lessonId]?.completed;
      return {
        ...prev,
        lessons: {
          ...prev.lessons,
          [lessonId]: {
            completed: true,
            score,
            completedAt: new Date().toISOString(),
          },
        },
        totalPoints: isNewCompletion ? prev.totalPoints + 100 : prev.totalPoints,
      };
    });
  };

  const startChallenge = (challengeId: string) => {
    setProgress(prev => ({
      ...prev,
      challenges: {
        ...prev.challenges,
        [challengeId]: {
          ...prev.challenges[challengeId],
          started: true,
        },
      },
    }));
  };

  const completeChallenge = (challengeId: string) => {
    setProgress(prev => {
      const isNewCompletion = !prev.challenges[challengeId]?.completed;
      return {
        ...prev,
        challenges: {
          ...prev.challenges,
          [challengeId]: {
            started: true,
            completed: true,
            submittedAt: new Date().toISOString(),
          },
        },
        totalPoints: isNewCompletion ? prev.totalPoints + 50 : prev.totalPoints,
      };
    });
  };

  const addSimulatorTime = (minutes: number) => {
    setProgress(prev => ({
      ...prev,
      simulatorPracticeTime: prev.simulatorPracticeTime + minutes,
    }));
  };

  const getLessonProgress = (lessonId: string) => progress.lessons[lessonId];
  const getChallengeProgress = (challengeId: string) => progress.challenges[challengeId];
  
  const getCompletedLessonsCount = () => 
    Object.values(progress.lessons).filter(l => l.completed).length;
  
  const getTotalLessonsCount = () => TOTAL_LESSONS;
  
  const getOverallProgress = () => 
    Math.round((getCompletedLessonsCount() / TOTAL_LESSONS) * 100);

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(defaultProgress);
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      completeLesson,
      startChallenge,
      completeChallenge,
      addSimulatorTime,
      getLessonProgress,
      getChallengeProgress,
      getCompletedLessonsCount,
      getTotalLessonsCount,
      getOverallProgress,
      resetProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
