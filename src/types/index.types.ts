// Firestore-serializable news item
export interface NewsArticle {
  id: string;
  author: string;
  category: string;          // e.g. "general", "sports", "tech" …
  country: string;           // ISO-3166 alpha-2, e.g. "us"
  created_at: number;        // epoch ms (converted from Firestore Timestamp)
  description: string;
  image: string;             // absolute HTTPS url
  language: string;          // ISO-639-1, e.g. "en"
  location: { lat: number; lng: number }; // plain object (was Firestore GeoPoint)
  published_at: number;      // epoch ms (converted from Firestore Timestamp)
  source: string;            // human-readable domain name
  status: boolean;           // true = visible
  title: string;
  updated_at: number;        // epoch ms (converted from Firestore Timestamp)
  url: string;               // absolute HTTPS url to original article
}