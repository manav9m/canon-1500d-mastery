import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, BookOpen, Sliders, GitCompare, FileText, Target, ChevronRight, Play, Award, Zap, CheckCircle2, Aperture, Focus } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/motion-wrapper';
const features = [{
  icon: BookOpen,
  title: '10 In-Depth Lessons',
  description: 'From camera basics to advanced scenarios'
}, {
  icon: Sliders,
  title: 'Settings Simulator',
  description: 'Practice exposure without wasting shots'
}, {
  icon: GitCompare,
  title: 'Mode Comparisons',
  description: 'See why manual control matters'
}, {
  icon: FileText,
  title: 'Cheat Sheets',
  description: 'Quick reference for any situation'
}, {
  icon: Target,
  title: 'Photo Challenges',
  description: 'Put your skills to the test'
}, {
  icon: Award,
  title: 'Progress Tracking',
  description: 'Watch your skills grow over time'
}];
const learningPath = [{
  step: 1,
  title: 'Master Your Camera',
  lessons: 6,
  icon: Camera
}, {
  step: 2,
  title: 'Scenario Mastery',
  lessons: 4,
  icon: Aperture
}, {
  step: 3,
  title: 'Practice & Challenge',
  lessons: 0,
  icon: Focus
}];
export default function Index() {
  const {
    getOverallProgress,
    getCompletedLessonsCount
  } = useProgress();
  const overallProgress = getOverallProgress();
  const completedLessons = getCompletedLessonsCount();
  return <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden hero-gradient">
        <AnimatedBackground />

        <div className="container relative z-10 px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <FadeIn delay={0.1}>
            <Badge variant="outline" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 text-xs md:text-sm border-border/50 text-foreground bg-background/50">
              <Camera className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Canon EOS 1500D Mastery Academy
            </Badge>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.15}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 leading-tight tracking-tight text-white/80">
                Master Your{' '}
                <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent font-bold">Canon 1500D</span>
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-4">
                Transform from complete beginner to confident photographer with our 
                interactive, hands-on learning experience.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.25}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
                <Link to="/learn" className="w-full sm:w-auto">
                  <Button size="lg" className="gap-2 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                    <Play className="w-4 h-4 md:w-5 md:h-5" />
                    Start Learning
                  </Button>
                </Link>
                <Link to="/simulator" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="gap-2 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                    <Sliders className="w-4 h-4 md:w-5 md:h-5" />
                    Try Simulator
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Progress indicator for returning users */}
            {completedLessons > 0 && <FadeIn delay={0.3}>
                <div className="mt-8 md:mt-12 px-4">
                  <Card className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 p-4 glass-card">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg md:text-xl font-bold">{overallProgress}%</span>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs md:text-sm text-muted-foreground">Welcome back!</p>
                      <p className="font-medium text-sm md:text-base">{completedLessons} lessons completed</p>
                    </div>
                    <Link to="/learn">
                      <Button variant="ghost" size="sm" className="gap-1">
                        Continue <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </Card>
                </div>
              </FadeIn>}

            {/* Camera icon */}
            <FadeIn delay={0.35}>
              <div className="mt-12 md:mt-16 flex justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center">
                  <Camera className="w-8 h-8 md:w-10 md:h-10 text-foreground/80" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">Everything You Need</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
                A complete learning system designed specifically for your Canon EOS 1500D
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map(feature => <StaggerItem key={feature.title}>
                <HoverScale>
                  <Card className="p-5 md:p-6 h-full hover:border-foreground/20 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary flex items-center justify-center mb-3 md:mb-4">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h3 className="font-display text-lg md:text-xl mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                  </Card>
                </HoverScale>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">Your Learning Journey</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
                A structured path from complete beginner to confident photographer
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

              {learningPath.map((phase, i) => <FadeIn key={phase.step} delay={i * 0.1} direction="left">
                  <div className="relative flex items-start gap-4 md:gap-6 pb-24 md:pb-28 last:pb-0 mx-0 my-[12px]">
                    {/* Step indicator */}
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border border-border flex items-center justify-center flex-shrink-0">
                      <phase.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    {/* Content */}
                    <Card className="flex-1 p-4 md:p-6">
                      <div className="flex items-center gap-2 mb-1 md:mb-2">
                        <Badge variant="secondary" className="text-xs">Phase {phase.step}</Badge>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl mb-1 md:mb-2">{phase.title}</h3>
                      {phase.lessons > 0 ? <p className="text-muted-foreground text-sm md:text-base">{phase.lessons} comprehensive lessons</p> : <p className="text-muted-foreground text-sm md:text-base">Challenges & real-world practice</p>}
                    </Card>
                  </div>
                </FadeIn>)}
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-8 md:mt-12">
              <Link to="/learn">
                <Button size="lg" className="gap-2">
                  Begin Your Journey
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Manual Control */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10 md:mb-12">
                <Badge variant="outline" className="mb-3 md:mb-4">Why Learn Manual?</Badge>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 px-4">
                  Stop Letting Your Camera Decide
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  See the difference manual control makes in real scenarios
                </p>
              </div>
            </FadeIn>

            <ScaleIn delay={0.1}>
              <Card className="p-5 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <Badge variant="destructive" className="mb-4">Auto Mode</Badge>
                    <ul className="space-y-2 md:space-y-3">
                      {['Flash fires when you don\'t want it', 'Background stays distractingly sharp', 'Moving subjects come out blurry', 'Beautiful light gets washed out'].map((item, i) => <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                          {item}
                        </li>)}
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-4">Manual Control</Badge>
                    <ul className="space-y-2 md:space-y-3">
                      {['Create dreamy background blur', 'Freeze action with precision', 'Capture moody ambient light', 'Consistent, professional results'].map((item, i) => <li key={i} className="flex items-center gap-2 text-sm md:text-base">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0" />
                          {item}
                        </li>)}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 text-center">
                  <Link to="/compare">
                    <Button size="lg" variant="outline" className="gap-2">
                      <GitCompare className="w-5 h-5" />
                      See Side-by-Side Comparisons
                    </Button>
                  </Link>
                </div>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">Ready to Master Your Camera?</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of photographers who have transformed their skills with our Canon 1500D Mastery Academy.
            </p>
            <Link to="/learn">
              <Button size="lg" className="gap-2 text-lg px-8">
                <Zap className="w-5 h-5" />
                Start Free Now
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>;
}