
export enum PostStatus {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  PUBLISHED = 'published',
  ARCHIVED = 'archived'
}

export enum TopicCategory {
  WASTE_MANAGEMENT = 'Waste Management',
  GREEN_ENERGY = 'Green Energy',
  SUSTAINABLE_CEMENT = 'Sustainable Cement'
}

export enum PostLength {
  SHORT = 'Short (400-600 words)',
  MEDIUM = 'Medium (800-1200 words)',
  LONG = 'Long (1500-2000 words)'
}

export enum CTAType {
  LEARN_MORE = 'Learn More',
  CONTACT_US = 'Contact Us',
  DOWNLOAD_REPORT = 'Download Report'
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: TopicCategory;
  status: PostStatus;
  publishDate: string;
  keywords: string[];
  readingTime: number;
}

export interface AgentSettings {
  websiteUrl: string;
  cmsType: 'WordPress' | 'Ghost' | 'Custom' | 'Manual';
  postingDay: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  tone: 'Professional' | 'Educational' | 'Advocacy' | 'Technical';
  targetAudience: string;
}
