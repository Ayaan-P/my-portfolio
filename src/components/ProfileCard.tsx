
import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProfileCardProps } from '../types/profile';
import SectionContent from './SectionContent';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  marginBottom: theme.spacing(4),
  overflow: 'hidden',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 30px rgba(197, 165, 114, 0.15)`,
  },
  
  '&:hover::before': {
    opacity: 1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
    borderRadius: '12px',
  },
}));

const ProfileCardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(1),
  borderBottom: `2px solid ${theme.palette.primary.main}`,
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
  },
}));

const SectionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export default function ProfileCard({
  icon: Icon,
  sectionTitle,
  sections,
  about,
}: ProfileCardProps): JSX.Element {
  return (
    <StyledCard elevation={4}>
      <ProfileCardHeader>
        <Icon />
        <Typography variant="h6" color="primary" sx={{ fontWeight: 600, letterSpacing: '0.02em' }}>
          {sectionTitle}
        </Typography>
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
