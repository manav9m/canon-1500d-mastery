import { Link, useLocation } from 'react-router-dom';
import { Camera, BookOpen, Sliders, GitCompare, FileText, Target, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useProgress } from '@/contexts/ProgressContext';

const navItems = [
  { to: '/learn', label: 'Learn', icon: BookOpen },
  { to: '/simulator', label: 'Simulator', icon: Sliders },
  { to: '/compare', label: 'Compare', icon: GitCompare },
  { to: '/cheatsheets', label: 'Cheat Sheets', icon: FileText },
  { to: '/challenges', label: 'Challenges', icon: Target },
];

export function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getOverallProgress } = useProgress();
  const progress = getOverallProgress();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Camera className="w-5 h-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl tracking-wide">Canon 1500D</div>
              <div className="text-xs text-muted-foreground -mt-1">Mastery Academy</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.to} to={item.to}>
                <Button
                  variant={location.pathname === item.to ? 'secondary' : 'ghost'}
                  size="sm"
                  className={cn(
                    'gap-2',
                    location.pathname === item.to && 'bg-primary/10 text-primary'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Progress Badge */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
                {progress}%
              </div>
              <span className="text-sm text-muted-foreground">Complete</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button
                    variant={location.pathname === item.to ? 'secondary' : 'ghost'}
                    className={cn(
                      'w-full justify-start gap-2',
                      location.pathname === item.to && 'bg-primary/10 text-primary'
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="pt-2 border-t border-border/50 mt-2">
                <div className="flex items-center gap-2 px-4 py-2">
                  <span className="text-sm text-muted-foreground">Progress:</span>
                  <span className="text-primary font-semibold">{progress}%</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
