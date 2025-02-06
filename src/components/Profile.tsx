import { Paper, Avatar, Typography } from '@mui/material';
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
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  marginBottom: theme.spacing(3),
  border: `4px solid ${theme.palette.primary.main}`,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

// const NameTitle = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: theme.spacing(3),
// }));

export default function Profile(): JSX.Element {
  return (
    <ProfileContainer elevation={3}>
      <ProfileAvatar
        alt="Ayaan Pupala"
        src={ProfilePic} // Use your actual profile picture
      />
      <Typography variant="h2" color="primary">
        Ayaan Pupala
      </Typography>
      <Typography variant="h5" color="textSecondary" gutterBottom>
      </Typography>
      <SocialLinks />
      <ProfileContent />
    </ProfileContainer>
  );
}
