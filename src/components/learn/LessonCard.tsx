import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock, Lock, Play } from 'lucide-react';
import { Lesson } from '@/data/curriculum';
import { useProgress } from '@/contexts/ProgressContext';

interface LessonCardProps {
  lesson: Lesson;
  locked?: boolean;
}

export function LessonCard({ lesson, locked = false }: LessonCardProps) {
  const { getLessonProgress } = useProgress();
  const progress = getLessonProgress(lesson.id);
  const isCompleted = progress?.completed;

  const categoryColors = {
    foundation: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    portrait: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    landscape: 'bg-green-500/10 text-green-400 border-green-500/20',
    lowlight: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    action: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  };

  return (
    <Card 
      className={cn(
        'group relative overflow-hidden transition-all duration-300',
        locked ? 'opacity-50' : 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5',
        isCompleted && 'border-success/30 bg-success/5'
      )}
    >
      {/* Completion badge */}
      {isCompleted && (
        <div className="absolute top-3 right-3 z-10">
          <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-success-foreground" />
          </div>
        </div>
      )}

      {/* Lock overlay */}
      {locked && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="text-center">
            <Lock className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Complete previous lessons</p>
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={cn(
            'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
            isCompleted ? 'bg-success/20' : 'bg-primary/10 group-hover:bg-primary/20'
          )}>
            <lesson.icon className={cn(
              'w-6 h-6',
              isCompleted ? 'text-success' : 'text-primary'
            )} />
          </div>

          <div className="flex-1 min-w-0">
            {/* Category & Duration */}
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={cn('text-xs', categoryColors[lesson.category])}>
                {lesson.category === 'foundation' ? 'Foundation' : lesson.category.charAt(0).toUpperCase() + lesson.category.slice(1)}
              </Badge>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {lesson.duration}
              </span>
            </div>

            {/* Title & Description */}
            <h3 className="font-display text-xl mb-1 group-hover:text-primary transition-colors">
              {lesson.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {lesson.description}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-4 flex justify-end">
          <Link to={`/learn/${lesson.id}`}>
            <Button 
              variant={isCompleted ? 'secondary' : 'default'}
              size="sm"
              disabled={locked}
              className="gap-2"
            >
              {isCompleted ? (
                <>Review Lesson</>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Lesson
                </>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
