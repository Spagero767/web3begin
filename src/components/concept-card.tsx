import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type Concept } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ConceptCardProps {
  concept: Concept;
  index: number;
}

export function ConceptCard({ concept, index }: ConceptCardProps) {
  return (
    <Card className="flex flex-col h-full transition-transform transform hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-primary/20">
      <CardHeader>
        <div className="flex justify-between items-start">
            <Badge variant="secondary" className="font-mono text-sm">
              {String(index + 1).padStart(2, '0')}
            </Badge>
        </div>
        <CardTitle className="font-headline pt-4">{concept.title}</CardTitle>
        <CardDescription>{concept.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" />
      <CardFooter>
        <Link
          href={`/concepts/${concept.slug}`}
          className="flex items-center text-sm font-semibold text-primary hover:underline"
        >
          Start Learning <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
