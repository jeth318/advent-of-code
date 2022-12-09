import { readFileSync } from 'fs';
import { resolve } from 'path';

export const raw = (filename: string): string => {
  return readFileSync(resolve(process.cwd(), filename), 'utf8');
};

export const asArray = (filename: string): string[] => {
  return readFileSync(resolve(process.cwd(), filename), 'utf8').split('\n');
};

export const asArrayBlocks = (filename: string): string[] => {
  return readFileSync(resolve(process.cwd(), filename), 'utf8').split('\n\n\n');
};
