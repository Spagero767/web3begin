import { glossary } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function GlossaryPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Glossary of Terms</h1>
        <p className="text-lg text-muted-foreground mt-2">Your dictionary for the world of Web3.</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {glossary
          .sort((a, b) => a.term.localeCompare(b.term))
          .map((item) => (
            <AccordionItem value={item.term} key={item.term}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {item.term}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.definition}
              </AccordionContent>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
