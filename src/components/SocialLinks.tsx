import { Chip, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SOCIAL_LINKS } from '../constants/profileSections';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const LinksContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2.5),
  backgroundColor: 'transparent',
  width: '100%',
  maxWidth: '700px',
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
    gap: theme.spacing(1),
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(26, 26, 26, 0.8)',
  backdropFilter: 'blur(15px)',
  border: '1px solid rgba(197, 165, 114, 0.2)',
  borderRadius: '16px',
  padding: theme.spacing(1.5, 0.5),
  fontWeight: 600,
  fontSize: '0.9rem',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
    fontSize: '1.2rem',
  },
  
  '& .MuiChip-label': {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 600,
  },
  
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.15)',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(197, 165, 114, 0.25)',
    
    '& .MuiChip-icon': {
      color: theme.palette.primary.light,
      transform: 'scale(1.1)',
    },
    
    '& .MuiChip-label': {
      color: 'white',
    },
  },
  
  [theme.breakpoints.down('sm')]: {
    height: '36px',
    fontSize: '0.8rem',
    padding: theme.spacing(1, 0.5),
    
    '& .MuiChip-icon': {
      fontSize: '1rem',
    },
    
    '& .MuiChip-label': {
      fontSize: '0.8rem',
    },
  },
}));

const getIcon = (label: string) => {
  switch (label.toLowerCase()) {
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'email':
      return <EmailIcon />;
    case 'resume':
      return <DescriptionIcon />;
    case 'dytto.app':
      return <RocketLaunchIcon />;
    default:
      return undefined;
  }
};

export default function SocialLinks(): JSX.Element {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <LinksContainer elevation={0}>
      {SOCIAL_LINKS.map((link, index) => (
        <StyledChip
          key={link.key}
          icon={getIcon(link.label)}
          label={link.label}
          onClick={() => handleClick(link.url)}
          clickable
          sx={{
            animationDelay: `${index * 0.1}s`,
          }}
          className="fade-in-delay-1"
        />
      ))}
    </LinksContainer>
  );
}