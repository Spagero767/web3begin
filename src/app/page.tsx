import Image from 'next/image';
import { learningPath } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ConceptCard } from '@/components/concept-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card/50">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover z-0 opacity-10"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight">
              Welcome to Web3Begin
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your friendly guide to understanding the world of Web3. Start your journey into the decentralized future, one concept at a time.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="#learning-path">Start Learning</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="learning-path" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Curated Learning Path</h2>
            <p className="text-lg text-muted-foreground mt-2">Follow our structured path from basic to advanced concepts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPath.map((concept, index) => (
              <ConceptCard key={concept.slug} concept={concept} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
