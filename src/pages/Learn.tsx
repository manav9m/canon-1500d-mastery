import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { LessonCard } from '@/components/learn/LessonCard';
import { foundationLessons, scenarioLessons } from '@/data/curriculum';
import { useProgress } from '@/contexts/ProgressContext';
import { BookOpen, Trophy, Flame, Clock } from 'lucide-react';

export default function Learn() {
  const { 
    getOverallProgress, 
    getCompletedLessonsCount, 
    getTotalLessonsCount,
    progress 
  } = useProgress();

  const overallProgress = getOverallProgress();
  const completedLessons = getCompletedLessonsCount();
  const totalLessons = getTotalLessonsCount();

  return (
    <Layout>
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl md:text-5xl mb-2">Learning Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Master your Canon EOS 1500D from the ground up
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-10">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Lessons</p>
                <p className="text-xl font-bold">{completedLessons}/{totalLessons}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Points</p>
                <p className="text-xl font-bold">{progress.totalPoints}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Streak</p>
                <p className="text-xl font-bold">{progress.streak} days</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Practice Time</p>
                <p className="text-xl font-bold">{progress.simulatorPracticeTime}m</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Overall Progress */}
        <Card className="p-6 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-xl">Overall Progress</h3>
            <Badge variant="secondary">{overallProgress}% Complete</Badge>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </Card>

        {/* Foundation Lessons */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="px-3 py-1.5 text-base">Phase 1</Badge>
            <h2 className="font-display text-2xl md:text-3xl">Foundations</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Master the fundamentals of your Canon EOS 1500D before diving into scenarios
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {foundationLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>

        {/* Scenario Lessons */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="px-3 py-1.5 text-base">Phase 2</Badge>
            <h2 className="font-display text-2xl md:text-3xl">Scenario Mastery</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Apply your skills to real-world photography scenarios
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {scenarioLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
