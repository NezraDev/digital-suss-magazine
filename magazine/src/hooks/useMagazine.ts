import { useState, useEffect } from "react";
import type { Magazine } from "../types/magazine";
import { fetchMagazines } from "../services/magazineService";

export const useMagazines = () => {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMagazines = async () => {
      try {
        setLoading(true);
        const data = await fetchMagazines();
        setMagazines(data);
        setError(null);
      } catch (err) {
        setError("Failed to load magazines. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMagazines();
  }, []);

  return { magazines, loading, error };
};
