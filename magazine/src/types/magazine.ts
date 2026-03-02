export interface Magazine {
  id: number;
  title: string;
  issueNumber: number;
  description: string;
  imageUrl: string;
  pdfUrl?: File;
  likes: number;
  downloads: number;
  favorites: number;
  clicks: number; // total views/clicks
  avgReadingMinutes: number; // average reading time in minutes
  pages?: string[];
}
