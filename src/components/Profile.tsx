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
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 1.5),
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
    width: 120,
    height: 120,
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

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '3rem',
  background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 10px rgba(197, 165, 114, 0.3)',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  opacity: 0.9,
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: 1.3,
  fontSize: '1.3rem',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
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
            <MainTitle className="fade-in-delay-1">
              Ayaan Pupala
            </MainTitle>
            <Subtitle 
              color="textSecondary" 
              gutterBottom
              className="fade-in-delay-2"
            >
              AI Engineer & Product Builder
            </Subtitle>
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