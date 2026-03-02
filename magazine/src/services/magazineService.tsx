import type { Magazine } from "../types/magazine";
import magazinesData from "../data/magazine.json";

export const fetchMagazines = async (): Promise<Magazine[]> => {
  // TODO: Replace with actual API call
  // Example:
  // const response = await fetch('/api/magazines');
  // if (!response.ok) throw new Error('Failed to fetch magazines');
  // return response.json();

  // Temporary dummy data with simulated delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return magazinesData as Magazine[];
};
