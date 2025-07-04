
export interface SocialLink {
  name: string;
  url: string;
}

export interface YouTubeInfo {
  channelName: string;
  channelUrl: string;
  logo: string;
  subscribers: string;
}

export interface PersonalInfo {
  name: string;
  age: number;
  nationality: string;
  passions: string;
  experience: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
  youtube: YouTubeInfo;
}

// Define specific string literals for categories to prevent typos
export type ProjectCategory = 
  | "Corporate Videos"
  | "YouTube Videos"
  | "Promos and Ads"
  | "Shorts and Reels"
  | "Podcasts and Short Films";

export type ProjectFormat = "widescreen" | "portrait" | "square";

export interface Project {
  id: number;
  title: string;
  embedUrl: string | null;
  category: ProjectCategory;
  format: ProjectFormat;
  client?: string; 
}