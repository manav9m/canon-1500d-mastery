import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, BookOpen, Sliders, GitCompare, FileText, Target, 
  ChevronRight, Play, Award, Zap, CheckCircle2 
} from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';

const features = [
  {
    icon: BookOpen,
    title: '10 In-Depth Lessons',
    description: 'From camera basics to advanced scenarios',
  },
  {
    icon: Sliders,
    title: 'Settings Simulator',
    description: 'Practice exposure without wasting shots',
  },
  {
    icon: GitCompare,
    title: 'Mode Comparisons',
    description: 'See why manual control matters',
  },
  {
    icon: FileText,
    title: 'Cheat Sheets',
    description: 'Quick reference for any situation',
  },
  {
    icon: Target,
    title: 'Photo Challenges',
    description: 'Put your skills to the test',
  },
  {
    icon: Award,
    title: 'Progress Tracking',
    description: 'Watch your skills grow over time',
  },
];

const learningPath = [
  { step: 1, title: 'Master Your Camera', lessons: 6 },
  { step: 2, title: 'Scenario Mastery', lessons: 4 },
  { step: 3, title: 'Practice & Challenge', lessons: 0 },
];

export default function Index() {
  const { getOverallProgress, getCompletedLessonsCount, progress } = useProgress();
  const overallProgress = getOverallProgress();
  const completedLessons = getCompletedLessonsCount();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 animate-fade-up">
              <Camera className="w-4 h-4 mr-2" />
              Canon EOS 1500D Mastery Academy
            </Badge>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-up stagger-1">
              Master Your <span className="gradient-text">Canon 1500D</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
              Transform from complete beginner to confident photographer with our 
              interactive, hands-on learning experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
              <Link to="/learn">
                <Button size="lg" className="gap-2 text-lg px-8 glow-effect">
                  <Play className="w-5 h-5" />
                  Start Learning
                </Button>
              </Link>
              <Link to="/simulator">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                  <Sliders className="w-5 h-5" />
                  Try Simulator
                </Button>
              </Link>
            </div>

            {/* Progress indicator for returning users */}
            {completedLessons > 0 && (
              <div className="mt-12 animate-fade-up stagger-4">
                <Card className="inline-flex items-center gap-4 p-4 glass-card">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{overallProgress}%</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Welcome back!</p>
                    <p className="font-medium">{completedLessons} lessons completed</p>
                  </div>
                  <Link to="/learn">
                    <Button variant="ghost" size="sm">
                      Continue <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Everything You Need</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete learning system designed specifically for your Canon EOS 1500D
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <Card 
                key={feature.title} 
                className="p-6 hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Your Learning Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A structured path from complete beginner to confident photographer
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

              {learningPath.map((phase, i) => (
                <div key={phase.step} className="relative flex items-start gap-6 pb-12 last:pb-0">
                  {/* Step indicator */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-2xl text-primary">{phase.step}</span>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 p-6">
                    <h3 className="font-display text-2xl mb-2">{phase.title}</h3>
                    {phase.lessons > 0 ? (
                      <p className="text-muted-foreground">{phase.lessons} comprehensive lessons</p>
                    ) : (
                      <p className="text-muted-foreground">Challenges & real-world practice</p>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/learn">
              <Button size="lg" className="gap-2">
                Begin Your Journey
                <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Manual Control */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Why Learn Manual?</Badge>
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Stop Letting Your Camera Decide
              </h2>
              <p className="text-muted-foreground text-lg">
                See the difference manual control makes in real scenarios
              </p>
            </div>

            <Card className="p-8 text-center">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="destructive" className="mb-4">Auto Mode</Badge>
                  <ul className="text-left space-y-3">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      Flash fires when you don't want it
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      Background stays distractingly sharp
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      Moving subjects come out blurry
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      Beautiful light gets washed out
                    </li>
                  </ul>
                </div>
                <div>
                  <Badge className="mb-4 bg-primary">Manual Control</Badge>
                  <ul className="text-left space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      Create dreamy background blur
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      Freeze action with precision
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      Capture moody ambient light
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      Consistent, professional results
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/compare">
                  <Button size="lg" className="gap-2">
                    <GitCompare className="w-5 h-5" />
                    See Side-by-Side Comparisons
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Ready to Master Your Camera?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of photographers who have transformed their skills with our Canon 1500D Mastery Academy.
          </p>
          <Link to="/learn">
            <Button size="lg" className="gap-2 text-lg px-8 glow-effect">
              <Zap className="w-5 h-5" />
              Start Free Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
