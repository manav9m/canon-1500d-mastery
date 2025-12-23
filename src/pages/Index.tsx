import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, BookOpen, Sliders, GitCompare, FileText, Target, 
  ChevronRight, Play, Award, Zap, CheckCircle2, Aperture, Focus
} from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';
import { AnimatedBackground, FloatingParticles } from '@/components/ui/animated-background';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, HoverScale, FloatAnimation } from '@/components/ui/motion-wrapper';

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
  { step: 1, title: 'Master Your Camera', lessons: 6, icon: Camera },
  { step: 2, title: 'Scenario Mastery', lessons: 4, icon: Aperture },
  { step: 3, title: 'Practice & Challenge', lessons: 0, icon: Focus },
];

export default function Index() {
  const { getOverallProgress, getCompletedLessonsCount, progress } = useProgress();
  const overallProgress = getOverallProgress();
  const completedLessons = getCompletedLessonsCount();

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden hero-gradient">
        <AnimatedBackground />
        <FloatingParticles />

        <div className="container relative z-10 px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <FadeIn delay={0.1}>
              <Badge variant="secondary" className="mb-4 md:mb-6 px-3 md:px-4 py-1.5 text-xs md:text-sm">
                <Camera className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
                Canon EOS 1500D Mastery Academy
              </Badge>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.2}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-4 md:mb-6 leading-tight">
                Master Your{' '}
                <span className="relative inline-block">
                  <span className="gradient-text">Canon 1500D</span>
                  <motion.span
                    className="absolute -inset-1 bg-primary/20 blur-2xl -z-10"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </span>
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-4">
                Transform from complete beginner to confident photographer with our 
                interactive, hands-on learning experience.
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
                <Link to="/learn" className="w-full sm:w-auto">
                  <HoverScale>
                    <Button size="lg" className="gap-2 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto relative overflow-hidden group">
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      />
                      <Play className="w-4 h-4 md:w-5 md:h-5" />
                      Start Learning
                    </Button>
                  </HoverScale>
                </Link>
                <Link to="/simulator" className="w-full sm:w-auto">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="gap-2 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto backdrop-blur-sm">
                      <Sliders className="w-4 h-4 md:w-5 md:h-5" />
                      Try Simulator
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </FadeIn>

            {/* Progress indicator for returning users */}
            {completedLessons > 0 && (
              <FadeIn delay={0.5}>
                <div className="mt-8 md:mt-12 px-4">
                  <Card className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 p-4 glass-card">
                    <motion.div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-lg md:text-xl font-bold text-primary">{overallProgress}%</span>
                    </motion.div>
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
              </FadeIn>
            )}

            {/* Camera illustration */}
            <FadeIn delay={0.6}>
              <div className="mt-12 md:mt-16 flex justify-center">
                <FloatAnimation>
                  <div className="relative">
                    <motion.div 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-card to-secondary border border-border flex items-center justify-center shadow-2xl"
                      animate={{ rotateY: [0, 10, 0, -10, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Camera className="w-10 h-10 md:w-14 md:h-14 text-primary" />
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Aperture className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                    </motion.div>
                  </div>
                </FloatAnimation>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div 
              className="w-1 h-2 md:w-1.5 md:h-3 rounded-full bg-muted-foreground/50"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-32" />
        
        <div className="container px-4 relative">
          <FadeIn>
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">Everything You Need</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
                A complete learning system designed specifically for your Canon EOS 1500D
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <HoverScale scale={1.03}>
                  <Card className="p-5 md:p-6 h-full hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="relative">
                      <motion.div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </motion.div>
                      <h3 className="font-display text-lg md:text-xl mb-1 md:mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                    </div>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 md:py-20 relative">
        <div className="container px-4">
          <FadeIn>
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4">Your Learning Journey</h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
                A structured path from complete beginner to confident photographer
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <motion.div 
                className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-border"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ originY: 0 }}
              />

              {learningPath.map((phase, i) => (
                <FadeIn key={phase.step} delay={i * 0.2} direction="left">
                  <div className="relative flex items-start gap-4 md:gap-6 pb-8 md:pb-12 last:pb-0">
                    {/* Step indicator */}
                    <motion.div 
                      className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <phase.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>

                    {/* Content */}
                    <HoverScale scale={1.02}>
                      <Card className="flex-1 p-4 md:p-6 hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                          <Badge variant="secondary" className="text-xs">Phase {phase.step}</Badge>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl mb-1 md:mb-2">{phase.title}</h3>
                        {phase.lessons > 0 ? (
                          <p className="text-muted-foreground text-sm md:text-base">{phase.lessons} comprehensive lessons</p>
                        ) : (
                          <p className="text-muted-foreground text-sm md:text-base">Challenges & real-world practice</p>
                        )}
                      </Card>
                    </HoverScale>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.6}>
            <div className="text-center mt-8 md:mt-12">
              <Link to="/learn">
                <HoverScale>
                  <Button size="lg" className="gap-2">
                    Begin Your Journey
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </HoverScale>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Manual Control */}
      <section className="py-16 md:py-20 bg-primary/5 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container px-4 relative">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10 md:mb-12">
                <Badge variant="secondary" className="mb-3 md:mb-4">Why Learn Manual?</Badge>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 px-4">
                  Stop Letting Your Camera Decide
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  See the difference manual control makes in real scenarios
                </p>
              </div>
            </FadeIn>

            <ScaleIn delay={0.2}>
              <Card className="p-5 md:p-8 text-center overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                  <div>
                    <Badge variant="destructive" className="mb-4">Auto Mode</Badge>
                    <ul className="text-left space-y-2 md:space-y-3">
                      {[
                        'Flash fires when you don\'t want it',
                        'Background stays distractingly sharp',
                        'Moving subjects come out blurry',
                        'Beautiful light gets washed out',
                      ].map((item, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center gap-2 text-muted-foreground text-sm md:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Badge className="mb-4 bg-primary">Manual Control</Badge>
                    <ul className="text-left space-y-2 md:space-y-3">
                      {[
                        'Create dreamy background blur',
                        'Freeze action with precision',
                        'Capture moody ambient light',
                        'Consistent, professional results',
                      ].map((item, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center gap-2 text-sm md:text-base"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.4 }}
                        >
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div 
                  className="mt-6 md:mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <Link to="/compare">
                    <HoverScale>
                      <Button size="lg" className="gap-2">
                        <GitCompare className="w-5 h-5" />
                        See Side-by-Side Comparisons
                      </Button>
                    </HoverScale>
                  </Link>
                </motion.div>
              </Card>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        </div>
        
        <div className="container px-4 text-center relative">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-4 px-4">Ready to Master Your Camera?</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of photographers who have transformed their skills with our Canon 1500D Mastery Academy.
            </p>
            <Link to="/learn">
              <HoverScale>
                <Button size="lg" className="gap-2 text-base md:text-lg px-6 md:px-8 relative overflow-hidden group">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <Zap className="w-4 h-4 md:w-5 md:h-5" />
                  Start Free Now
                </Button>
              </HoverScale>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
