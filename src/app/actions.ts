'use server';

import { generateRealWorldExamples, GenerateRealWorldExamplesInput } from '@/ai/flows/generate-real-world-examples';

export async function getRealWorldExamplesAction(concept: string) {
  try {
    const input: GenerateRealWorldExamplesInput = { web3Concept: concept };
    const result = await generateRealWorldExamples(input);
    return { success: true, data: result.examples };
  } catch (error) {
    console.error('AI generation failed:', error);
    return { success: false, error: 'Failed to generate examples. Please try again.' };
  }
}
