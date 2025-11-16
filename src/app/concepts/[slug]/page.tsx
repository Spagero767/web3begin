import { notFound } from 'next/navigation';
import { learningPath } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Quiz from '@/components/quiz';
import RealWorldExamples from '@/components/real-world-examples';

interface ConceptPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return learningPath.map((concept) => ({
    slug: concept.slug,
  }));
}

export default function ConceptPage({ params }: ConceptPageProps) {
  const concept = learningPath.find((c) => c.slug === params.slug);

  if (!concept) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">{concept.title}</h1>
        <p className="text-xl text-muted-foreground">{concept.description}</p>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="font-headline">Core Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base md:text-lg text-foreground/90">
          {concept.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>

      <Separator className="my-12" />

      <div className="mb-12">
        <h2 className="text-3xl font-headline font-bold mb-6">Test Your Knowledge</h2>
        <Quiz questions={concept.quiz} />
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-3xl font-headline font-bold mb-6">Real-world Examples</h2>
        <RealWorldExamples conceptName={concept.title} />
      </div>
    </div>
  );
}
