import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { modeComparisons } from '@/data/curriculum';
import { Camera, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

export function ModeComparison() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const comparison = modeComparisons[currentIndex];

  const nextComparison = () => {
    setCurrentIndex((prev) => (prev + 1) % modeComparisons.length);
    setSliderPosition(50);
  };

  const prevComparison = () => {
    setCurrentIndex((prev) => (prev - 1 + modeComparisons.length) % modeComparisons.length);
    setSliderPosition(50);
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={prevComparison}>
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {modeComparisons.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); setSliderPosition(50); }}
              className={cn(
                'w-2 h-2 rounded-full transition-all',
                i === currentIndex ? 'w-8 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              )}
            />
          ))}
        </div>
        <Button variant="ghost" onClick={nextComparison}>
          Next
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Title */}
      <div className="text-center">
        <Badge variant="secondary" className="mb-2">{comparison.category}</Badge>
        <h2 className="font-display text-3xl mb-2">{comparison.title}</h2>
        <p className="text-muted-foreground">Drag the slider to compare Auto vs Manual mode</p>
      </div>

      {/* Comparison Viewer */}
      <Card className="relative aspect-[16/9] overflow-hidden">
        {/* Auto Mode (Left) */}
        <div 
          className="absolute inset-0 transition-opacity duration-200"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-secondary/20 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                <Camera className="w-8 h-8 text-destructive" />
              </div>
              <Badge variant="outline" className="mb-2">Auto Mode</Badge>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {comparison.autoDescription}
              </p>
            </div>
          </div>
          
          {/* Settings Overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs bg-background/80">
              {comparison.autoSettings.mode}
            </Badge>
            <Badge variant="secondary" className="text-xs bg-background/80">
              ISO {comparison.autoSettings.iso}
            </Badge>
            <Badge variant="secondary" className="text-xs bg-background/80">
              {comparison.autoSettings.aperture}
            </Badge>
            <Badge variant="secondary" className="text-xs bg-background/80">
              {comparison.autoSettings.shutterSpeed}
            </Badge>
          </div>
        </div>

        {/* Manual Mode (Right) */}
        <div 
          className="absolute inset-0"
          style={{
            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <Badge className="mb-2 bg-primary text-primary-foreground">Manual Control</Badge>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {comparison.manualDescription}
              </p>
            </div>
          </div>
          
          {/* Settings Overlay */}
          <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 justify-end">
            <Badge className="text-xs bg-primary/80 text-primary-foreground">
              {comparison.manualSettings.mode}
            </Badge>
            <Badge className="text-xs bg-primary/80 text-primary-foreground">
              ISO {comparison.manualSettings.iso}
            </Badge>
            <Badge className="text-xs bg-primary/80 text-primary-foreground">
              {comparison.manualSettings.aperture}
            </Badge>
            <Badge className="text-xs bg-primary/80 text-primary-foreground">
              {comparison.manualSettings.shutterSpeed}
            </Badge>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-foreground cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground flex items-center justify-center shadow-lg">
            <div className="flex gap-0.5">
              <ChevronLeft className="w-4 h-4 text-background" />
              <ChevronRight className="w-4 h-4 text-background" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4">
          <Badge variant="destructive">Auto</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground">Manual</Badge>
        </div>
      </Card>

      {/* Slider Control */}
      <div className="px-8">
        <Slider
          value={[sliderPosition]}
          onValueChange={([v]) => setSliderPosition(v)}
          min={5}
          max={95}
          step={1}
          className="py-4"
        />
      </div>

      {/* Key Lesson */}
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-display text-xl mb-1">Key Lesson</h4>
            <p className="text-muted-foreground">{comparison.lesson}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
