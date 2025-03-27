import { Box, Typography, Avatar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SectionContentProps } from '../types/profile';
import { useEffect, useState } from 'react';
import ExpandedSectionView from './ExpandedSectionView';

const ContentContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease',
  backgroundColor: 'rgba(26, 26, 26, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.03)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundColor: 'rgba(26, 26, 26, 0.6)',
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    '& .section-image': {
      transform: 'scale(1.05)',
    },
    '& .section-title': {
      color: theme.palette.primary.light,
    },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 96,
  height: 96,
  border: `2px solid ${theme.palette.primary.main}`,
  backgroundColor: 'transparent',
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
}));

const TextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.75),
}));

const DateChip = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  padding: '4px 10px',
  borderRadius: '12px',
  fontSize: '0.75rem',
  fontWeight: 500,
  backgroundColor: 'rgba(197, 165, 114, 0.15)',
  color: theme.palette.primary.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function SectionContent({
  sectionTitle,
  subtitle,
  aboutText,
  date,
  imgSrc,
  about,
  index = 0,
  expandedDetails,
}: SectionContentProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedViewOpen, setExpandedViewOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + (index * 100));
    
    return () => clearTimeout(timer);
  }, [index]);

  const handleOpenExpandedView = () => {
    setExpandedViewOpen(true);
  };

  const handleCloseExpandedView = () => {
    setExpandedViewOpen(false);
  };

  return (
    <>
      <ContentContainer 
        elevation={0}
        onClick={handleOpenExpandedView}
        sx={{ 
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          cursor: 'pointer',
        }}
      >
      {!about && imgSrc && (
        <StyledAvatar
          src={imgSrc}
          alt={sectionTitle}
          className="section-image"
        />
      )}
      <TextContent>
        <Typography 
          variant="subtitle1" 
          fontWeight="bold" 
          color="primary"
          className="section-title"
          sx={{ fontSize: '1.1rem' }}
        >
          {sectionTitle}
        </Typography>
        {subtitle && (
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 500,
              fontSize: '0.95rem'
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
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.85)',
            mt: 0.5
          }}
        >
          {aboutText}
        </Typography>
      </TextContent>
      
      {date && !about && (
        <DateChip>
          {date}
        </DateChip>
      )}
    </ContentContainer>

      <ExpandedSectionView
        open={expandedViewOpen}
        onClose={handleCloseExpandedView}
        section={{
          sectionTitle,
          subtitle,
          aboutText,
          date,
          imgSrc,
          about,
          expandedDetails,
        }}
      />
    </>
  );
}
