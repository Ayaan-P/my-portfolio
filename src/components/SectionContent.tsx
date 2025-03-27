import { Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionContentProps } from '../types/profile';

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1),
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.02)', // Very subtle hover effect
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 96,
  height: 96,
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: 'transparent',
  borderRadius: theme.spacing(1), // Rounded square
}));

const TextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  '& > *:not(:last-child)': {
    marginBottom: theme.spacing(0.5),
  },
}));

export default function SectionContent({
  sectionTitle,
  subtitle,
  aboutText,
  date,
  imgSrc,
  about,
}: SectionContentProps): JSX.Element {
  return (
    <ContentContainer>
      {!about && imgSrc && (
        <StyledAvatar
          src={imgSrc}
          alt={sectionTitle}
        />
      )}
      <TextContent>
        <Typography variant="subtitle1" fontWeight="bold" color="primary">
          {sectionTitle}
        </Typography>
        {subtitle && (
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500 
            }}
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          variant="body2"
          component={about ? 'pre' : 'p'}
          sx={{ 
            whiteSpace: about ? 'pre-line' : 'normal',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.85)'
          }}
        >
          {aboutText}
        </Typography>
        {date && (
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              display: 'block',
              marginTop: 1 
            }}
          >
            {date}
          </Typography>
        )}
      </TextContent>
    </ContentContainer>
  );
}
