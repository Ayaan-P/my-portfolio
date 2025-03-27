import { Chip, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ABOUT_CHIPS } from '../constants/profileSections';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import BiotechIcon from '@mui/icons-material/Biotech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BusinessIcon from '@mui/icons-material/Business';

const LinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  width: '100%',
  maxWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(26, 26, 26, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  padding: '8px 4px',
  transition: 'all 0.3s ease',
  '& .MuiChip-icon': {
    color: theme.palette.primary.main,
  },
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.1)',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    height: '28px',
    fontSize: '0.75rem',
    padding: '4px 2px',
    '& .MuiChip-icon': {
      fontSize: '1rem',
    },
  },
}));

const getIcon = (key: string) => {
  switch (key.toLowerCase()) {
    case "work":
      return <WorkIcon />;
    case "biotech":
      return <BiotechIcon />;
    case 'ai':
      return <PsychologyIcon />;
    case 'resume':
      return <DescriptionIcon />;
    case 'dytto.app':
      return <BuildIcon/>;
    default:
      return undefined;
  }
};

export default function AboutLinks(): JSX.Element {
  const handleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <LinksContainer>
      {ABOUT_CHIPS.map((link, index) => (
        <StyledChip
          key={link.key}
          icon={getIcon(link.key)}
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
