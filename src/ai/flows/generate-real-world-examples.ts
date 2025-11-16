// This file is used to generate real world web3 example.
'use server';

/**
 * @fileOverview An AI agent for generating real-world examples of web3 technologies.
 *
 * - generateRealWorldExamples - A function that generates real-world examples of web3 technologies.
 * - GenerateRealWorldExamplesInput - The input type for the generateRealWorldExamples function.
 * - GenerateRealWorldExamplesOutput - The return type for the generateRealWorldExamples function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRealWorldExamplesInputSchema = z.object({
  web3Concept: z.string().describe('The web3 concept for which to generate real-world examples.'),
});
export type GenerateRealWorldExamplesInput = z.infer<typeof GenerateRealWorldExamplesInputSchema>;

const GenerateRealWorldExamplesOutputSchema = z.object({
  examples: z.array(z.string()).describe('Real-world examples of the web3 concept.'),
});
export type GenerateRealWorldExamplesOutput = z.infer<typeof GenerateRealWorldExamplesOutputSchema>;

export async function generateRealWorldExamples(input: GenerateRealWorldExamplesInput): Promise<GenerateRealWorldExamplesOutput> {
  return generateRealWorldExamplesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRealWorldExamplesPrompt',
  input: {schema: GenerateRealWorldExamplesInputSchema},
  output: {schema: GenerateRealWorldExamplesOutputSchema},
  prompt: `You are an expert in web3 technologies. Your task is to provide real-world examples of the following web3 concept:

{{web3Concept}}

Provide at least three distinct examples, explaining how the concept is applied in each case. Each example should be a short paragraph.

Ensure the examples are clear, concise, and easy to understand for someone new to web3. Return the examples as a JSON array of strings.`,
});

const generateRealWorldExamplesFlow = ai.defineFlow(
  {
    name: 'generateRealWorldExamplesFlow',
    inputSchema: GenerateRealWorldExamplesInputSchema,
    outputSchema: GenerateRealWorldExamplesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
