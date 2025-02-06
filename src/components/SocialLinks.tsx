import { Chip, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SOCIAL_LINKS } from '../constants/profileSections';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

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
      {SOCIAL_LINKS.map((link) => (
        <StyledChip
          key={link.key}
          icon={getIcon(link.label)}
          label={link.label}
          onClick={() => handleClick(link.url)}
          clickable
        />
      ))}
    </LinksContainer>
  );
}
