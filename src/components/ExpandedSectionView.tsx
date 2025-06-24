import { Box, Typography, Paper, Modal, Fade, Backdrop, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { SectionContentProps } from '../types/profile';

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '5vh',
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: '85%',
  maxWidth: '1100px',
  maxHeight: '90vh',
  overflow: 'auto',
  outline: 'none',
  borderRadius: theme.spacing(3),
  
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    maxHeight: '85vh',
    top: '7.5vh',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(5),
  borderRadius: theme.spacing(3),
  backgroundColor: 'rgba(26, 26, 26, 0.95)',
  backdropFilter: 'blur(25px)',
  border: `2px solid rgba(197, 165, 114, 0.3)`,
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, transparent, rgba(197, 165, 114, 0.8), transparent)',
  },
  
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2.5),
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: 'rgba(197, 165, 114, 0.1)',
  border: '1px solid rgba(197, 165, 114, 0.3)',
  color: theme.palette.primary.main,
  zIndex: 10,
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.2)',
    transform: 'scale(1.1)',
    boxShadow: '0 4px 15px rgba(197, 165, 114, 0.3)',
  },
  
  [theme.breakpoints.down('sm')]: {
    top: theme.spacing(1.5),
    right: theme.spacing(1.5),
    padding: '6px',
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '0 0 45%',
  marginRight: theme.spacing(4),
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
  border: `3px solid rgba(197, 165, 114, 0.4)`,
  height: 'fit-content',
  
  [theme.breakpoints.down('md')]: {
    flex: '1 1 auto',
    marginRight: 0,
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    border: `2px solid rgba(197, 165, 114, 0.4)`,
  },
}));

const LargeImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 10px rgba(197, 165, 114, 0.3)',
  lineHeight: 1.3,
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.95)',
  fontWeight: 600,
  fontSize: '1.2rem',
  marginTop: '-0.5rem',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginTop: '-0.3rem',
  },
}));

const DateChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '8px 16px',
  borderRadius: '16px',
  fontSize: '0.9rem',
  fontWeight: 600,
  backgroundColor: 'rgba(197, 165, 114, 0.2)',
  color: theme.palette.primary.light,
  border: '1px solid rgba(197, 165, 114, 0.3)',
  marginBottom: theme.spacing(1),
  backdropFilter: 'blur(10px)',
  
  [theme.breakpoints.down('sm')]: {
    padding: '6px 12px',
    fontSize: '0.8rem',
    borderRadius: '12px',
  },
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: 700,
  fontSize: '1.1rem',
  marginBottom: theme.spacing(1.5),
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(1),
  },
}));

const SkillChip = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(197, 165, 114, 0.15)',
  color: 'rgba(255, 255, 255, 0.95)',
  padding: '8px 16px',
  borderRadius: '12px',
  fontSize: '0.9rem',
  fontWeight: 600,
  display: 'inline-block',
  border: '1px solid rgba(197, 165, 114, 0.2)',
  transition: 'all 0.3s ease',
  
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.25)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(197, 165, 114, 0.2)',
  },
  
  [theme.breakpoints.down('sm')]: {
    padding: '6px 12px',
    fontSize: '0.8rem',
    borderRadius: '10px',
  },
}));

interface ExpandedSectionViewProps {
  open: boolean;
  onClose: () => void;
  section: SectionContentProps;
}

export default function ExpandedSectionView({
  open,
  onClose,
  section,
}: ExpandedSectionViewProps): JSX.Element {
  const { sectionTitle, subtitle, aboutText, date, imgSrc, about, expandedDetails } = section;
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{
        backdrop: Backdrop,
      }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' }
        },
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <ContentPaper elevation={12}>
            <CloseButton onClick={onClose} size="medium">
              <CloseIcon />
            </CloseButton>
            
            {imgSrc && (
              <ImageContainer>
                <LargeImage src={imgSrc} alt={sectionTitle} />
              </ImageContainer>
            )}
            
            <ContentContainer>
              <MainTitle>
                {sectionTitle}
              </MainTitle>
              
              {subtitle && (
                <Subtitle>
                  {subtitle}
                </Subtitle>
              )}
              
              {date && !about && (
                <DateChip>
                  {date}
                </DateChip>
              )}
              
              <Typography
                variant="body1"
                component={about ? 'pre' : 'p'}
                sx={{ 
                  whiteSpace: about ? 'pre-line' : 'normal',
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.05rem',
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                  },
                }}
              >
                {aboutText}
              </Typography>
              
              {expandedDetails && !about && (
                <>
                  {expandedDetails.fullDescription && (
                    <Box sx={{ mt: 3 }}>
                      <SectionHeader>
                        Overview
                      </SectionHeader>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.85)', 
                          lineHeight: 1.8,
                          fontSize: '1rem',
                          [theme.breakpoints.down('sm')]: {
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                          },
                        }}
                      >
                        {expandedDetails.fullDescription}
                      </Typography>
                    </Box>
                  )}
                  
                  {expandedDetails.skills && expandedDetails.skills.length > 0 && (
                    <Box sx={{ mt: 4 }}>
                      <SectionHeader>
                        Skills & Technologies
                      </SectionHeader>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                        {expandedDetails.skills.map((skill, index) => (
                          <SkillChip key={index}>
                            {skill}
                          </SkillChip>
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  {expandedDetails.achievements && expandedDetails.achievements.length > 0 && (
                    <Box sx={{ mt: 4 }}>
                      <SectionHeader>
                        Key Achievements
                      </SectionHeader>
                      <Box component="ul" sx={{ pl: 2.5, mt: 0.5 }}>
                        {expandedDetails.achievements.map((achievement, index) => (
                          <Typography 
                            key={index} 
                            component="li" 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.9)',
                              marginBottom: theme.spacing(1),
                              fontSize: '0.95rem',
                              lineHeight: 1.6,
                              '&::marker': {
                                color: theme.palette.primary.main
                              },
                              [theme.breakpoints.down('sm')]: {
                                fontSize: '0.9rem',
                                marginBottom: theme.spacing(0.75),
                                lineHeight: 1.5,
                              },
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  {expandedDetails.links && expandedDetails.links.length > 0 && (
                    <Box sx={{ mt: 4 }}>
                      <SectionHeader>
                        Related Links
                      </SectionHeader>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {expandedDetails.links.map((link, index) => (
                          <Typography 
                            key={index} 
                            variant="body2" 
                            component="a"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ 
                              color: theme.palette.primary.light,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: theme.spacing(0.5),
                              fontWeight: 500,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                color: theme.palette.primary.main,
                                textDecoration: 'underline',
                                transform: 'translateX(4px)',
                              },
                              [theme.breakpoints.down('sm')]: {
                                fontSize: '0.9rem',
                              },
                            }}
                          >
                            {link.label} →
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                </>
              )}
            </ContentContainer>
          </ContentPaper>
        </ModalContainer>
      </Fade>
    </Modal>
  );
}