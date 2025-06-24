import { Box, Typography, Avatar, Paper } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { SectionContentProps } from '../types/profile';
import { useEffect, useState } from 'react';
import ExpandedSectionView from './ExpandedSectionView';

const ContentContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2.5),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: 'rgba(26, 26, 26, 0.6)',
  border: '1px solid rgba(197, 165, 114, 0.08)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(197, 165, 114, 0.02) 0%, transparent 50%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  
  '&:hover': {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 30px rgba(197, 165, 114, 0.15)',
    borderColor: 'rgba(197, 165, 114, 0.2)',
    
    '&::before': {
      opacity: 1,
    },
    
    '& .section-image': {
      transform: 'scale(1.08)',
      boxShadow: '0 8px 25px rgba(197, 165, 114, 0.3)',
    },
    
    '& .section-title': {
      color: theme.palette.primary.light,
      textShadow: '0 2px 8px rgba(197, 165, 114, 0.3)',
    },
    
    '& .section-subtitle': {
      color: 'rgba(255, 255, 255, 0.95)',
    },
  },
  
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 110,
  height: 110,
  border: `3px solid rgba(197, 165, 114, 0.3)`,
  backgroundColor: 'transparent',
  borderRadius: theme.spacing(2),
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.4s ease',
  overflow: 'hidden',
  
  [theme.breakpoints.down('sm')]: {
    width: 70,
    height: 70,
    borderRadius: theme.spacing(1.5),
    border: `2px solid rgba(197, 165, 114, 0.3)`,
  },
}));

const TextContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  position: 'relative',
  zIndex: 1,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.2rem',
  lineHeight: 1.3,
  background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  transition: 'all 0.3s ease',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.85)',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'color 0.3s ease',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
  },
}));

const DateChip = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2.5),
  right: theme.spacing(2.5),
  padding: '6px 14px',
  borderRadius: '12px',
  fontSize: '0.8rem',
  fontWeight: 600,
  backgroundColor: 'rgba(197, 165, 114, 0.15)',
  color: theme.palette.primary.light,
  border: '1px solid rgba(197, 165, 114, 0.2)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
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
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedViewOpen, setExpandedViewOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + (index * 150));
    
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
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
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
          <SectionTitle className="section-title">
            {sectionTitle}
          </SectionTitle>
          
          {subtitle && (
            <SectionSubtitle className="section-subtitle">
              {subtitle}
            </SectionSubtitle>
          )}
          
          {about ? (
            <Box
              component="pre"
              sx={{ 
                whiteSpace: 'pre-line',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                marginTop: theme.spacing(0.5),
                fontFamily: 'inherit',
                margin: 0,
                
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                },
              }}
            >
              {aboutText}
            </Box>
          ) : (
            <Typography
              variant="body2"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                marginTop: theme.spacing(0.5),
                
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  // Truncate text on mobile for cleaner look
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                },
              }}
            >
              {aboutText}
            </Typography>
          )}
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