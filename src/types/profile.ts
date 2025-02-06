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
}
export interface SocialLink {
  key: number;
  label: string;
  url: string;
  icon?: string;
}

