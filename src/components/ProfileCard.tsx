
import { Card, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ProfileCardProps } from '../types/profile';
import SectionContent from './SectionContent';
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  boxShadow: 'none',
  position: 'relative',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 24px rgba(197, 165, 114, 0.1)`,
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
  },
}));

export default function ProfileCard({
  icon: Icon,
  sectionTitle,
  sections,
  about,
}: ProfileCardProps): JSX.Element {
  return (
    <StyledCard elevation={2}>
      <ProfileCardHeader>
        <Icon />
        <Typography variant="h6" color="primary">
          {sectionTitle}
        </Typography>
      </ProfileCardHeader>
      {sections.map((section) => (
        <SectionContent
          key={section.id}
          sectionTitle={section.sectionTitle}
          subtitle={section.subtitle}
          aboutText={section.aboutText}
          date={section.date}
          imgSrc={section.imgSrc}
          about={about}
        />
      ))}
    </StyledCard>
  );
}