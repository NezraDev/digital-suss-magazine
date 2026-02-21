import type { Magazine } from "../types/magazine";
import { magazines } from "../data/magazine";

export const fetchMagazines = async (): Promise<Magazine[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return dummy data for now
  return magazines;

  // For Backend
  // const response = await fetch('/api/magazines');
  // if (!response.ok) throw new Error('Failed to fetch magazines');
  // return response.json();
};
