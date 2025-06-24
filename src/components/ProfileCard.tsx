import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProfileCardProps } from '../types/profile';
import SectionContent from './SectionContent';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(26, 26, 26, 0.85)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(197, 165, 114, 0.15)',
  borderRadius: '20px',
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  marginBottom: theme.spacing(5),
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(197, 165, 114, 0.5), transparent)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  
  '&:hover': {
    borderColor: 'rgba(197, 165, 114, 0.4)',
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px rgba(197, 165, 114, 0.15)',
    
    '&::before': {
      opacity: 1,
    },
  },
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(4),
    borderRadius: '16px',
  },
}));

const ProfileCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  padding: theme.spacing(1.5),
  borderBottom: `2px solid rgba(197, 165, 114, 0.2)`,
  position: 'relative',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, #C5A572, #D4BC8B)',
    borderRadius: '1px',
  },
  
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '2rem',
    filter: 'drop-shadow(0 2px 4px rgba(197, 165, 114, 0.3))',
  },
  
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
    
    '& .MuiSvgIcon-root': {
      fontSize: '1.6rem',
    },
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: '0.02em',
  background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '1.4rem',
  textShadow: '0 2px 8px rgba(197, 165, 114, 0.2)',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
}));

const SectionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export default function ProfileCard({
  icon: Icon,
  sectionTitle,
  sections,
  about,
}: ProfileCardProps): JSX.Element {
  return (
    <StyledCard elevation={8}>
      <ProfileCardHeader>
        <Icon />
        <SectionTitle variant="h6">
          {sectionTitle}
        </SectionTitle>
      </ProfileCardHeader>
      <SectionsContainer>
        {sections.map((section, index) => (
          <SectionContent
            key={section.id}
            sectionTitle={section.sectionTitle}
            subtitle={section.subtitle}
            aboutText={section.aboutText}
            date={section.date}
            imgSrc={section.imgSrc}
            about={about}
            index={index}
            expandedDetails={section.expandedDetails}
          />
        ))}
      </SectionsContainer>
    </StyledCard>
  );
}