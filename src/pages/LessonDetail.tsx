import { useParams, Link, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { allLessons } from '@/data/curriculum';
import { useProgress } from '@/contexts/ProgressContext';
import { 
  ChevronLeft, ChevronRight, Clock, CheckCircle2, 
  Lightbulb, Camera, Target, BookOpen 
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LessonDetail() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { getLessonProgress, completeLesson } = useProgress();

  const lesson = allLessons.find(l => l.id === lessonId);
  const lessonIndex = allLessons.findIndex(l => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  const progress = lesson ? getLessonProgress(lesson.id) : undefined;
  const isCompleted = progress?.completed;

  if (!lesson) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="font-display text-4xl mb-4">Lesson Not Found</h1>
          <Link to="/learn">
            <Button>Back to Learning Dashboard</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleComplete = () => {
    completeLesson(lesson.id);
    if (nextLesson) {
      navigate(`/learn/${nextLesson.id}`);
    }
  };

  const categoryColors = {
    foundation: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    portrait: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    landscape: 'bg-green-500/10 text-green-400 border-green-500/20',
    lowlight: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    action: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };

  return (
    <Layout>
      <div className="container px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/learn" className="hover:text-foreground transition-colors">
            Learning Dashboard
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{lesson.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className={cn(categoryColors[lesson.category])}>
              {lesson.category.charAt(0).toUpperCase() + lesson.category.slice(1)}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {lesson.duration}
            </span>
            {isCompleted && (
              <Badge variant="secondary" className="bg-success/10 text-success">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>

          <h1 className="font-display text-4xl md:text-5xl mb-4">{lesson.title}</h1>
          <p className="text-xl text-muted-foreground">{lesson.description}</p>
        </div>

        {/* Introduction */}
        <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl mb-2">Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                {lesson.content.introduction}
              </p>
            </div>
          </div>
        </Card>

        {/* Sections */}
        <div className="space-y-8 mb-10">
          {lesson.content.sections.map((section, i) => (
            <section key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h2 className="font-display text-2xl mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {section.content}
              </p>

              {/* Settings badge */}
              {section.settings && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {section.settings.mode && (
                    <Badge variant="secondary">Mode: {section.settings.mode}</Badge>
                  )}
                  {section.settings.iso && (
                    <Badge variant="secondary">ISO: {section.settings.iso}</Badge>
                  )}
                  {section.settings.aperture && (
                    <Badge variant="secondary">Aperture: {section.settings.aperture}</Badge>
                  )}
                  {section.settings.shutterSpeed && (
                    <Badge variant="secondary">Shutter: {section.settings.shutterSpeed}</Badge>
                  )}
                  {section.settings.focusMode && (
                    <Badge variant="secondary">Focus: {section.settings.focusMode}</Badge>
                  )}
                </div>
              )}

              {/* Tip */}
              {section.tip && (
                <Card className="p-4 bg-gold/10 border-gold/30">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{section.tip}</p>
                  </div>
                </Card>
              )}
            </section>
          ))}
        </div>

        {/* Practice Exercise */}
        <Card className="p-6 mb-8 border-primary/30">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Camera className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl mb-1">Practice Exercise</h3>
              <p className="text-muted-foreground">{lesson.content.practiceExercise.title}</p>
            </div>
          </div>

          <ol className="space-y-3 mb-4">
            {lesson.content.practiceExercise.instructions.map((instruction, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-sm text-primary font-medium">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{instruction}</span>
              </li>
            ))}
          </ol>

          {/* Suggested Settings */}
          <div className="flex flex-wrap gap-2 p-4 bg-secondary/50 rounded-lg">
            <span className="text-sm text-muted-foreground mr-2">Suggested Settings:</span>
            {lesson.content.practiceExercise.suggestedSettings.mode && (
              <Badge>Mode: {lesson.content.practiceExercise.suggestedSettings.mode}</Badge>
            )}
            {lesson.content.practiceExercise.suggestedSettings.iso && (
              <Badge>ISO: {lesson.content.practiceExercise.suggestedSettings.iso}</Badge>
            )}
            {lesson.content.practiceExercise.suggestedSettings.aperture && (
              <Badge>Aperture: {lesson.content.practiceExercise.suggestedSettings.aperture}</Badge>
            )}
          </div>
        </Card>

        {/* Key Takeaways */}
        <Card className="p-6 mb-10">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-display text-2xl">Key Takeaways</h3>
          </div>

          <ul className="space-y-3">
            {lesson.content.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{takeaway}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-border pt-8">
          {prevLesson ? (
            <Link to={`/learn/${prevLesson.id}`}>
              <Button variant="ghost" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                {prevLesson.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}

          <Button 
            size="lg" 
            className="gap-2"
            onClick={handleComplete}
          >
            {isCompleted ? (
              nextLesson ? 'Next Lesson' : 'Review Complete'
            ) : (
              'Mark as Complete'
            )}
            {nextLesson && <ChevronRight className="w-4 h-4" />}
          </Button>

          {nextLesson ? (
            <Link to={`/learn/${nextLesson.id}`}>
              <Button variant="ghost" className="gap-2">
                {nextLesson.title}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </Layout>
  );
}
