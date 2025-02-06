import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProfileCard from './ProfileCard';
import { profileData } from '../data/profileData';
import { PROFILE_SECTIONS } from '../constants/profileSections';
import { ProfileSectionKey } from '../types/profile';

const ContentContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(4),
  width: '100%',
  margin: 0,
  '& .MuiGrid-item': {
    paddingTop: 0,
    paddingLeft: 0,
  },
}));

export default function ProfileContent(): JSX.Element {
  return (
    <ContentContainer>
      <StyledGrid container>
        {PROFILE_SECTIONS.map((section) => (
          <Grid item xs={12} key={section.key}>
            <ProfileCard
              icon={section.icon}
              sectionTitle={section.label}
              sections={profileData[section.key as ProfileSectionKey]}
              about={section.key === 'about'}
            />
          </Grid>
        ))}
      </StyledGrid>
    </ContentContainer>
  );
}