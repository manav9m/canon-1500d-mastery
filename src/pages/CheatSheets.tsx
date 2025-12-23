import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cheatSheets } from '@/data/curriculum';
import { FileText, Download, Printer } from 'lucide-react';

export default function CheatSheets() {
  return (
    <Layout>
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">Quick Reference</Badge>
          <h1 className="font-display text-4xl md:text-5xl mb-4">Cheat Sheets</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Quick reference cards for common photography scenarios. 
            Keep these handy when you're out shooting!
          </p>
        </div>

        {/* Cheat Sheets */}
        <Tabs defaultValue={cheatSheets[0].id} className="space-y-6">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
            {cheatSheets.map(sheet => (
              <TabsTrigger 
                key={sheet.id} 
                value={sheet.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {sheet.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {cheatSheets.map(sheet => (
            <TabsContent key={sheet.id} value={sheet.id}>
              <Card className="overflow-hidden">
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl">{sheet.title}</h2>
                      <p className="text-sm text-muted-foreground">{sheet.items.length} scenarios</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Printer className="w-4 h-4" />
                      Print
                    </Button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-secondary/30">
                        <th className="text-left p-4 font-medium">Scenario</th>
                        <th className="text-left p-4 font-medium">Mode</th>
                        <th className="text-left p-4 font-medium">ISO</th>
                        <th className="text-left p-4 font-medium">Aperture</th>
                        <th className="text-left p-4 font-medium">Shutter</th>
                        <th className="text-left p-4 font-medium">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sheet.items.map((item, i) => (
                        <tr 
                          key={i} 
                          className="border-b border-border/50 hover:bg-secondary/20 transition-colors"
                        >
                          <td className="p-4 font-medium">{item.scenario}</td>
                          <td className="p-4">
                            <Badge variant="secondary">{item.mode}</Badge>
                          </td>
                          <td className="p-4 text-muted-foreground">{item.iso}</td>
                          <td className="p-4 text-muted-foreground">{item.aperture}</td>
                          <td className="p-4 text-muted-foreground">{item.shutterSpeed}</td>
                          <td className="p-4 text-sm text-muted-foreground">{item.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Tips Card */}
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-display text-xl mb-4">Remember the Basics</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium mb-2">ISO</h4>
              <p className="text-sm text-muted-foreground">
                Low (100-400) = Clean, needs more light<br />
                High (800+) = Noisy, works in darkness
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Aperture</h4>
              <p className="text-sm text-muted-foreground">
                Wide (f/4) = Blurry background<br />
                Narrow (f/11) = Sharp throughout
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Shutter Speed</h4>
              <p className="text-sm text-muted-foreground">
                Fast (1/500+) = Freezes motion<br />
                Slow (1/30-) = Motion blur/trails
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
