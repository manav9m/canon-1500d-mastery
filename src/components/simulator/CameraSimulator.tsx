import { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Camera, Sun, Moon, User, Mountain, Zap, Baby, RotateCcw, Info } from 'lucide-react';

const ISO_VALUES = [100, 200, 400, 800, 1600, 3200, 6400];
const APERTURE_VALUES = [3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16, 18, 20, 22];
const SHUTTER_VALUES = ['30', '15', '8', '4', '2', '1', '1/2', '1/4', '1/8', '1/15', '1/30', '1/60', '1/125', '1/250', '1/500', '1/1000', '1/2000', '1/4000'];

const scenarios = [
  { id: 'portrait', name: 'Portrait', icon: User, baseEV: 12, hasMotion: false, hasDOF: true },
  { id: 'landscape', name: 'Landscape', icon: Mountain, baseEV: 14, hasMotion: false, hasDOF: true },
  { id: 'lowlight', name: 'Low Light', icon: Moon, baseEV: 6, hasMotion: false, hasDOF: true },
  { id: 'action', name: 'Action', icon: Zap, baseEV: 13, hasMotion: true, hasDOF: false },
  { id: 'indoor', name: 'Indoor', icon: Baby, baseEV: 8, hasMotion: false, hasDOF: true },
  { id: 'sunny', name: 'Sunny Day', icon: Sun, baseEV: 15, hasMotion: false, hasDOF: true },
];

function shutterToEV(shutter: string): number {
  const map: Record<string, number> = {
    '30': -5, '15': -4, '8': -3, '4': -2, '2': -1, '1': 0,
    '1/2': 1, '1/4': 2, '1/8': 3, '1/15': 4, '1/30': 5, '1/60': 6,
    '1/125': 7, '1/250': 8, '1/500': 9, '1/1000': 10, '1/2000': 11, '1/4000': 12
  };
  return map[shutter] ?? 6;
}

function apertureToEV(aperture: number): number {
  return Math.log2(aperture * aperture);
}

function isoToEV(iso: number): number {
  return Math.log2(iso / 100);
}

export function CameraSimulator() {
  const [iso, setIso] = useState(3); // Index: 800
  const [aperture, setAperture] = useState(4); // Index: f/5.6
  const [shutter, setShutter] = useState(11); // Index: 1/60
  const [scenario, setScenario] = useState(scenarios[0]);

  const currentISO = ISO_VALUES[iso];
  const currentAperture = APERTURE_VALUES[aperture];
  const currentShutter = SHUTTER_VALUES[shutter];

  // Calculate exposure value
  const exposureValue = shutterToEV(currentShutter) + apertureToEV(currentAperture) - isoToEV(currentISO);
  const targetEV = scenario.baseEV;
  const exposureDiff = exposureValue - targetEV;

  // Calculate visual effects
  const brightness = Math.max(0, Math.min(100, 50 - (exposureDiff * 15)));
  const noiseLevel = currentISO >= 1600 ? (currentISO - 1600) / 100 : 0;
  const depthOfField = scenario.hasDOF ? (currentAperture - 3.5) / 18.5 : 0;
  
  // Motion blur based on shutter speed
  const shutterIndex = SHUTTER_VALUES.indexOf(currentShutter);
  const hasMotionBlur = scenario.hasMotion && shutterIndex < 13; // Slower than 1/250

  const resetSettings = () => {
    setIso(3);
    setAperture(4);
    setShutter(11);
  };

  const getExposureFeedback = () => {
    if (Math.abs(exposureDiff) < 0.5) return { text: 'Perfect exposure!', color: 'text-success' };
    if (exposureDiff > 2) return { text: 'Very underexposed', color: 'text-destructive' };
    if (exposureDiff > 0.5) return { text: 'Slightly underexposed', color: 'text-warning' };
    if (exposureDiff < -2) return { text: 'Very overexposed', color: 'text-destructive' };
    return { text: 'Slightly overexposed', color: 'text-warning' };
  };

  const feedback = getExposureFeedback();

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Preview Area */}
      <div className="space-y-4">
        <Card className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
          {/* Simulated Image */}
          <div 
            className="absolute inset-0 transition-all duration-300"
            style={{
              background: scenario.id === 'lowlight' 
                ? 'linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(220 40% 4%) 100%)'
                : scenario.id === 'sunset' || scenario.id === 'portrait'
                ? 'linear-gradient(135deg, hsl(35 70% 40%) 0%, hsl(25 80% 30%) 100%)'
                : 'linear-gradient(135deg, hsl(200 60% 50%) 0%, hsl(180 40% 40%) 100%)',
              filter: `brightness(${brightness / 50})`,
            }}
          >
            {/* Subject simulation */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                filter: hasMotionBlur ? 'blur(8px)' : 'none',
              }}
            >
              <div 
                className="w-32 h-32 rounded-full bg-foreground/20 flex items-center justify-center"
                style={{
                  boxShadow: scenario.hasDOF 
                    ? `0 0 ${Math.max(0, 30 - depthOfField * 30)}px ${Math.max(0, 15 - depthOfField * 15)}px hsl(var(--background) / 0.5)`
                    : 'none',
                }}
              >
                <scenario.icon className="w-12 h-12 text-foreground/50" />
              </div>
            </div>

            {/* Background blur simulation */}
            {scenario.hasDOF && (
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backdropFilter: `blur(${(1 - depthOfField) * 10}px)`,
                  WebkitBackdropFilter: `blur(${(1 - depthOfField) * 10}px)`,
                  mask: 'radial-gradient(circle at center, transparent 20%, black 60%)',
                  WebkitMask: 'radial-gradient(circle at center, transparent 20%, black 60%)',
                }}
              />
            )}

            {/* Noise overlay */}
            {noiseLevel > 0 && (
              <div 
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  opacity: Math.min(0.4, noiseLevel * 0.1),
                }}
              />
            )}
          </div>

          {/* Histogram */}
          <div className="absolute bottom-4 right-4 w-32 h-16 bg-background/80 backdrop-blur rounded p-2">
            <div className="flex items-end h-full gap-px">
              {Array.from({ length: 32 }).map((_, i) => {
                const height = Math.max(10, Math.min(100, 
                  50 + Math.sin((i - 16 + exposureDiff * 4) * 0.3) * 40 + Math.random() * 20
                ));
                return (
                  <div 
                    key={i} 
                    className="flex-1 bg-foreground/60 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Warning badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {noiseLevel > 0.5 && (
              <Badge variant="destructive" className="text-xs">
                High ISO Noise
              </Badge>
            )}
            {hasMotionBlur && (
              <Badge variant="destructive" className="text-xs">
                Motion Blur
              </Badge>
            )}
          </div>
        </Card>

        {/* Exposure Meter */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Exposure Meter</span>
            <span className={cn('text-sm font-medium', feedback.color)}>{feedback.text}</span>
          </div>
          <div className="exposure-meter h-6 relative">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/50 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/50 to-transparent" />
            <div 
              className="absolute top-1 bottom-1 w-2 bg-primary rounded transition-all duration-300"
              style={{ 
                left: `${Math.max(5, Math.min(95, 50 + exposureDiff * 15))}%`,
                transform: 'translateX(-50%)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-between text-xs text-muted-foreground px-2">
              <span>-3</span>
              <span>-2</span>
              <span>-1</span>
              <span>0</span>
              <span>+1</span>
              <span>+2</span>
              <span>+3</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        {/* Scenario Selection */}
        <Card className="p-4">
          <h3 className="font-display text-lg mb-3">Scenario</h3>
          <div className="grid grid-cols-3 gap-2">
            {scenarios.map(s => (
              <Button
                key={s.id}
                variant={scenario.id === s.id ? 'default' : 'secondary'}
                className="flex flex-col h-auto py-3 gap-1"
                onClick={() => setScenario(s)}
              >
                <s.icon className="w-5 h-5" />
                <span className="text-xs">{s.name}</span>
              </Button>
            ))}
          </div>
        </Card>

        {/* Camera Controls */}
        <Card className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg">Camera Settings</h3>
            <Button variant="ghost" size="sm" onClick={resetSettings}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* ISO */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">ISO</label>
              <Badge variant={currentISO >= 1600 ? 'destructive' : 'secondary'}>
                {currentISO}
              </Badge>
            </div>
            <Slider
              value={[iso]}
              onValueChange={([v]) => setIso(v)}
              max={ISO_VALUES.length - 1}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>100</span>
              <span>6400</span>
            </div>
            {currentISO >= 1600 && (
              <p className="text-xs text-warning flex items-center gap-1">
                <Info className="w-3 h-3" />
                High ISO introduces noise/grain
              </p>
            )}
          </div>

          {/* Aperture */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Aperture</label>
              <Badge variant="secondary">f/{currentAperture}</Badge>
            </div>
            <Slider
              value={[aperture]}
              onValueChange={([v]) => setAperture(v)}
              max={APERTURE_VALUES.length - 1}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>f/3.5 (wide)</span>
              <span>f/22 (narrow)</span>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Info className="w-3 h-3" />
              {currentAperture <= 5.6 ? 'Shallow depth of field (blurry background)' : 'Deep depth of field (sharp throughout)'}
            </p>
          </div>

          {/* Shutter Speed */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Shutter Speed</label>
              <Badge variant={hasMotionBlur ? 'destructive' : 'secondary'}>
                {currentShutter}s
              </Badge>
            </div>
            <Slider
              value={[shutter]}
              onValueChange={([v]) => setShutter(v)}
              max={SHUTTER_VALUES.length - 1}
              step={1}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>30s (slow)</span>
              <span>1/4000s (fast)</span>
            </div>
            {hasMotionBlur && (
              <p className="text-xs text-warning flex items-center gap-1">
                <Info className="w-3 h-3" />
                Shutter too slow for moving subjects
              </p>
            )}
          </div>
        </Card>

        {/* Tips Card */}
        <Card className="p-4 bg-primary/5 border-primary/20">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Camera className="w-4 h-4 text-primary" />
            {scenario.name} Tips
          </h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {scenario.id === 'portrait' && (
              <>
                <li>• Use wide aperture (f/4-5.6) for background blur</li>
                <li>• Keep ISO low for clean skin tones</li>
                <li>• 1/125s minimum to avoid camera shake</li>
              </>
            )}
            {scenario.id === 'landscape' && (
              <>
                <li>• Use f/8-11 for maximum sharpness</li>
                <li>• Keep ISO at 100 for cleanest image</li>
                <li>• Use a tripod for slow shutter speeds</li>
              </>
            )}
            {scenario.id === 'lowlight' && (
              <>
                <li>• Increase ISO to allow faster shutter</li>
                <li>• Open aperture as wide as possible</li>
                <li>• Accept some noise for sharp images</li>
              </>
            )}
            {scenario.id === 'action' && (
              <>
                <li>• Use 1/500s or faster to freeze motion</li>
                <li>• Increase ISO if needed for speed</li>
                <li>• Pre-focus where action will happen</li>
              </>
            )}
            {scenario.id === 'indoor' && (
              <>
                <li>• Use window light when possible</li>
                <li>• ISO 800-1600 is acceptable</li>
                <li>• Wide aperture helps in dim rooms</li>
              </>
            )}
            {scenario.id === 'sunny' && (
              <>
                <li>• Start with Sunny 16 rule: f/16, 1/ISO</li>
                <li>• Use low ISO for best quality</li>
                <li>• Watch for harsh shadows at midday</li>
              </>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
}
