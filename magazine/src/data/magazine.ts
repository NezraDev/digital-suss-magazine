import type { Magazine } from '../types/magazine';

export const magazines: Magazine[] = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: `Lorem ipsum dolor sit amet consectetur adipisicing.`,
  issueNumber: i + 1,
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium dolore architecto maxime repellat maiores. Libero laboriosam harum labore magni debitis.`,
  imageUrl: `https://picsum.photos/seed/${i + 100}/400/400`,
}));