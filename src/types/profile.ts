import { SvgIconComponent } from '@mui/icons-material';

export type ProfileSectionKey = 'about' | 'education' | 'work' | 'projects';

export interface ProfileSection {
  id: number;
  sectionTitle: string;
  subtitle?: string;
  aboutText: string;
  date: string;
  imgSrc: string;
  about?: boolean;
  expandedDetails?: {
    fullDescription?: string;
    skills?: string[];
    achievements?: string[];
    links?: Array<{label: string, url: string}>;
  };
}

export type ProfileData = {
  [K in ProfileSectionKey]: ProfileSection[];
};

export interface ProfileCardProps {
  icon: SvgIconComponent;
  sectionTitle: string;
  sections: ProfileSection[];
  about?: boolean;
}

export interface SectionContentProps {
  sectionTitle: string;
  subtitle?: string;
  aboutText: string;
  date: string;
  imgSrc: string;
  about?: boolean;
  index?: number;
  expandedDetails?: {
    fullDescription?: string;
    skills?: string[];
    achievements?: string[];
    links?: Array<{label: string, url: string}>;
  };
}
export interface SocialLink {
  key: number;
  label: string;
  url: string;
  icon?: string;
}
