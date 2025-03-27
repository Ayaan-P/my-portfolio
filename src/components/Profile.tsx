import { Paper, Avatar, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import SocialLinks from './SocialLinks';
import ProfileContent from './ProfileContent';
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
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  marginBottom: theme.spacing(3),
  border: '4px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
  },
}));

const NameContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  animation: 'fadeIn 0.8s ease-out forwards',
  width: '100%',
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
            <Typography 
              variant="h5" 
              color="textSecondary" 
              gutterBottom
              sx={{ opacity: 0.9, mt: 1 }}
              className="fade-in-delay-2"
            >
              Software Engineer & AI Specialist
            </Typography>
          </NameContainer>
          <Box className="fade-in-delay-2" sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <SocialLinks />
          </Box>
        </Box>
        <Box className="fade-in-delay-3" sx={{ width: '100%', mt: 2 }}>
          <ProfileContent />
        </Box>
      </ProfileContainer>
    </Container>
  );
}
