import { Paper, Avatar, Typography, Box, Container, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import SocialLinks from './SocialLinks';
import ProfileContent from './ProfileContent';
import AboutChips from './AboutChips';
import ProfilePic from "../images/profile.jpg";

const ProfileContainer = styled(Paper)(({ theme }) => ({
  maxWidth: '100%',
  minHeight: 275,
  padding: theme.spacing(5),
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: 'none',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '200px',
    zIndex: -1,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3, 2),
    minHeight: 200,
  },
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  marginBottom: theme.spacing(3),
  border: '4px solid rgba(197, 165, 114, 0.3)',
  boxShadow: '0 8px 32px rgba(197, 165, 114, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(197, 165, 114, 0.3)',
    border: '4px solid rgba(197, 165, 114, 0.5)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 140,
    height: 140,
    marginBottom: theme.spacing(2),
    border: '3px solid rgba(197, 165, 114, 0.3)',
  },
}));

const NameContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  animation: 'fadeIn 0.8s ease-out forwards',
  width: '100%',
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(76, 175, 80, 0.1)',
  color: '#4CAF50',
  border: '1px solid rgba(76, 175, 80, 0.3)',
  fontWeight: 600,
  fontSize: '0.85rem',
  marginTop: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
  },
}));

const SubtitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export default function Profile(): JSX.Element {
  return (
    <Container maxWidth="lg" className="fade-in">
      <ProfileContainer elevation={0} sx={{ alignItems: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <ProfileAvatar
            alt="Ayaan Pupala"
            src={ProfilePic}
            className="fade-in"
          />
          <NameContainer>
            <Typography variant="h2" color="primary" className="fade-in-delay-1">
              Ayaan Pupala
            </Typography>
            <SubtitleContainer className="fade-in-delay-2">
              <Typography 
                variant="h5" 
                color="textSecondary" 
                sx={{ 
                  opacity: 0.9, 
                  fontWeight: 500,
                  textAlign: 'center',
                  lineHeight: 1.3
                }}
              >
                AI Engineer & Product Builder
              </Typography>
              <StatusChip 
                label="🎓 MS AI Student at Northwestern" 
                size="small"
              />
            </SubtitleContainer>
          </NameContainer>
          
          <Box className="fade-in-delay-2" sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 2 }}>
            <SocialLinks />
          </Box>
          
          <Box className="fade-in-delay-3" sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 3 }}>
            <AboutChips />
          </Box>
        </Box>
        
        <Box className="fade-in-delay-3" sx={{ width: '100%', mt: 2 }}>
          <ProfileContent />
        </Box>
      </ProfileContainer>
    </Container>
  );
}