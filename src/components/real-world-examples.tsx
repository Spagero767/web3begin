'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getRealWorldExamplesAction } from '@/app/actions';
import { Wand2, Loader2, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RealWorldExamplesProps {
  conceptName: string;
}

export default function RealWorldExamples({ conceptName }: RealWorldExamplesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [examples, setExamples] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerateExamples = async () => {
    setIsLoading(true);
    setError(null);
    setExamples([]);

    const result = await getRealWorldExamplesAction(conceptName);

    if (result.success && result.data) {
      setExamples(result.data);
    } else {
      setError(result.error || 'An unknown error occurred.');
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Could not generate examples.',
      });
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-muted-foreground">
            Curious how this concept is used in practice? Let our AI generate some real-world examples for you.
          </p>
          <Button onClick={handleGenerateExamples} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate Examples
              </>
            )}
          </Button>

          {error && (
            <div className="mt-6 w-full text-destructive-foreground bg-destructive/90 p-4 rounded-md flex items-center justify-center">
              <AlertTriangle className="mr-2 h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          {examples.length > 0 && (
            <div className="mt-6 w-full text-left space-y-4">
              {examples.map((example, index) => (
                <div key={index} className="p-4 rounded-lg border bg-secondary/50">
                  <p className="text-secondary-foreground">{example}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
