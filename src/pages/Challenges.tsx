import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { challenges } from '@/data/curriculum';
import { useProgress } from '@/contexts/ProgressContext';
import { 
  Target, CheckCircle2, Camera, Lightbulb, 
  Star, Clock, Play 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Challenges() {
  const { getChallengeProgress, startChallenge, completeChallenge } = useProgress();
  const [selectedChallenge, setSelectedChallenge] = useState<typeof challenges[0] | null>(null);

  const difficultyColors = {
    beginner: 'bg-green-500/10 text-green-400 border-green-500/20',
    intermediate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    advanced: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  const handleStartChallenge = (challengeId: string) => {
    startChallenge(challengeId);
  };

  const handleCompleteChallenge = (challengeId: string) => {
    completeChallenge(challengeId);
    setSelectedChallenge(null);
  };

  return (
    <Layout>
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">Practice Mode</Badge>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Photo Challenges</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Put your skills to the test with these real-world photography challenges. 
            Each one is designed to reinforce what you've learned.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => {
            const progress = getChallengeProgress(challenge.id);
            const isStarted = progress?.started;
            const isCompleted = progress?.completed;

            return (
              <Card 
                key={challenge.id}
                className={cn(
                  'overflow-hidden transition-all duration-300 hover:border-primary/50',
                  isCompleted && 'border-success/30 bg-success/5'
                )}
              >
                {/* Header */}
                <div className="p-5 border-b border-border/50">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className={cn(difficultyColors[challenge.difficulty])}>
                      {challenge.difficulty}
                    </Badge>
                    {isCompleted && (
                      <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-xl mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {challenge.description}
                  </p>
                </div>

                {/* Objectives Preview */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{challenge.objectives.length} Objectives</span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {challenge.objectives.slice(0, 2).map((obj, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{obj}</span>
                      </li>
                    ))}
                    {challenge.objectives.length > 2 && (
                      <li className="text-sm text-muted-foreground">
                        +{challenge.objectives.length - 2} more...
                      </li>
                    )}
                  </ul>

                  <Button 
                    className="w-full gap-2"
                    variant={isCompleted ? 'secondary' : 'default'}
                    onClick={() => setSelectedChallenge(challenge)}
                  >
                    {isCompleted ? (
                      <>Review Challenge</>
                    ) : isStarted ? (
                      <>Continue Challenge</>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        Start Challenge
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Challenge Detail Dialog */}
        <Dialog open={!!selectedChallenge} onOpenChange={() => setSelectedChallenge(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedChallenge && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={cn(difficultyColors[selectedChallenge.difficulty])}>
                      {selectedChallenge.difficulty}
                    </Badge>
                    <Badge variant="secondary">{selectedChallenge.category}</Badge>
                  </div>
                  <DialogTitle className="font-display text-3xl">
                    {selectedChallenge.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedChallenge.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Objectives */}
                  <div>
                    <h4 className="font-display text-lg mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {selectedChallenge.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Settings */}
                  <Card className="p-4 bg-secondary/50">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      Suggested Settings
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedChallenge.suggestedSettings.mode && (
                        <Badge>Mode: {selectedChallenge.suggestedSettings.mode}</Badge>
                      )}
                      {selectedChallenge.suggestedSettings.iso && (
                        <Badge>ISO: {selectedChallenge.suggestedSettings.iso}</Badge>
                      )}
                      {selectedChallenge.suggestedSettings.aperture && (
                        <Badge>Aperture: {selectedChallenge.suggestedSettings.aperture}</Badge>
                      )}
                      {selectedChallenge.suggestedSettings.shutterSpeed && (
                        <Badge>Shutter: {selectedChallenge.suggestedSettings.shutterSpeed}</Badge>
                      )}
                      {selectedChallenge.suggestedSettings.focusMode && (
                        <Badge>Focus: {selectedChallenge.suggestedSettings.focusMode}</Badge>
                      )}
                    </div>
                  </Card>

                  {/* Tips */}
                  <div>
                    <h4 className="font-display text-lg mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-gold" />
                      Pro Tips
                    </h4>
                    <ul className="space-y-2">
                      {selectedChallenge.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <Star className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        handleStartChallenge(selectedChallenge.id);
                        setSelectedChallenge(null);
                      }}
                    >
                      I'll Try This Later
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={() => handleCompleteChallenge(selectedChallenge.id)}
                    >
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Mark Complete
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
