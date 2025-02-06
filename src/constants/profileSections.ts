import { SvgIconComponent } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import { ProfileSectionKey } from '../types/profile';

interface ProfileSectionConfig {
  key: ProfileSectionKey;
  label: string;
  icon: SvgIconComponent;
}

export const PROFILE_SECTIONS: ProfileSectionConfig[] = [
  {
    key: 'about',
    label: 'About',
    icon: PersonIcon,
  },
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
    url: 'https://github.com/yourusername',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    key: 'email',
    label: 'Email',
    url: 'mailto:your.email@example.com',
  },
  {
    key: 'resume',
    label: 'Resume',
    url: '/path-to-your-resume.pdf',
  },
];