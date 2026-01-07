// src/types/index.ts

export type ProjectType = "video" | "graphic" | "social";

export interface BaseProject {
  id: string;
  title: string;
  client?: string;
  description?: string;
  tags: string[];
  thumbnailUrl: string;
  date: string; // ISO string "2025-01-01"
}

export interface VideoProject extends BaseProject {
  type: "video";
  videoUrl: string; // The Embed URL
  format: "widescreen" | "portrait" | "square";
}

export interface GraphicProject extends BaseProject {
  type: "graphic";
  fullImageUrl: string; // High Res
}

export interface SocialProject extends BaseProject {
  type: "social";
  platform: "LinkedIn" | "Instagram" | "Telegram";
  link: string;
  stats?: string;
}

export type Project = VideoProject | GraphicProject | SocialProject;