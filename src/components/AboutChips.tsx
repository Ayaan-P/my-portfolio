import { Chip, Paper } from '@mui/material';
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

const LinksContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: 'transparent',
  width: '100%',
  maxWidth: '600px',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
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
    <LinksContainer elevation={0}>
      {ABOUT_CHIPS.map((link) => (
        <StyledChip
          key={link.key}
          icon={getIcon(link.key)}
          label={link.label}
          onClick={() => handleClick(link.url)}
          clickable
        />
      ))}
    </LinksContainer>
  );
}
