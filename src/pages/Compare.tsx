import { Layout } from '@/components/layout/Layout';
import { ModeComparison } from '@/components/compare/ModeComparison';
import { Badge } from '@/components/ui/badge';

export default function Compare() {
  return (
    <Layout>
      <div className="container px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Badge variant="secondary" className="mb-4">Why Go Manual?</Badge>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Auto vs Manual Mode</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the dramatic difference manual control makes in real photography scenarios.
            These comparisons show why learning to control your camera is worth the effort.
          </p>
        </div>

        {/* Comparison Gallery */}
        <ModeComparison />
      </div>
    </Layout>
  );
}
