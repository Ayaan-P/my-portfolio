import { SvgIconComponent } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import CodeIcon from '@mui/icons-material/Code';


import { ProfileSectionKey } from '../types/profile';

interface ProfileSectionConfig {
  key: ProfileSectionKey;
  label: string;
  icon: SvgIconComponent;
}

export const PROFILE_SECTIONS: ProfileSectionConfig[] = [
  // {
  //   key: 'about',
  //   label: 'About',
  //   icon: PersonIcon,
  // },
  {
    key: 'education',
    label: 'Education',
    icon: SchoolIcon,
  },
  {
    key: 'work',
    label: 'Experience',
    icon: WorkIcon,
  },
  {
    key: 'projects',
    label: 'Projects',
    icon: CodeIcon,
  },
];

interface SocialLink {
  key: string;
  label: string;
  url: string;
}


export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: 'github',
    label: 'GitHub',
    url: 'https://github.com/Ayaan-P',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/ayaanpupala',
  },
  {
    key: 'email',
    label: 'Email',
    url: 'mailto:pupalaayaan@gmail.com',
  },
  {
    key: 'resume',
    label: 'Resume',
    url: 'https://drive.google.com/file/d/12c8YP5NtWkrYvrORo3Oeg45AXddtceAM/',
  },
  {
    key: 'build',
    label: 'dytto.app',
    url: 'https://www.dytto.app',
  },
];

export const ABOUT_CHIPS = [
  { 
    key: "biotech", 
    label: 'ML for Cancer Detection', 
    url: 'https://linkedin.com/in/ayaanpupala',

  },
  { 
    key: "work", 
    label: 'Computer Engineer', 
    url: 'https://linkedin.com/in/ayaanpupala',

  },
  { 
    key: "dytto.app", 
    label: 'Building dytto.app',
    url: 'https://www.dytto.app', 

  },
  { 
    key: "ai", 
    label: 'Artificial Intelligence', 
    url: 'https://www.mccormick.northwestern.edu/artificial-intelligence/people/students/2024-2025/',

  },
];