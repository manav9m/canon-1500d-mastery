import { Layout } from '@/components/layout/Layout';
import { CameraSimulator } from '@/components/simulator/CameraSimulator';
import { Badge } from '@/components/ui/badge';

export default function Simulator() {
  return (
    <Layout>
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4">Practice Lab</Badge>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Camera Settings Simulator</h1>
          <p className="text-muted-foreground text-lg">
            Experiment with ISO, Aperture, and Shutter Speed to understand how they affect your photos. 
            No wasted shots, no frustration - just pure learning.
          </p>
        </div>

        {/* Simulator */}
        <CameraSimulator />
      </div>
    </Layout>
  );
}
