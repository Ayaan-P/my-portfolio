import { Box, Typography, Paper, IconButton, Modal, Fade, Backdrop } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { SectionContentProps } from '../types/profile';

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '1000px',
  maxHeight: '90vh',
  overflow: 'auto',
  outline: 'none',
  borderRadius: theme.spacing(2),
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: 'rgba(26, 26, 26, 0.95)',
  backdropFilter: 'blur(15px)',
  border: `1px solid ${theme.palette.primary.main}`,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(90deg, #C5A572, #D4BC8B)',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(3),
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '0 0 45%',
  marginRight: theme.spacing(4),
  borderRadius: theme.spacing(1.5),
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  border: `2px solid ${theme.palette.primary.main}`,
  height: 'fit-content',
  [theme.breakpoints.down('md')]: {
    flex: '1 1 auto',
    marginRight: 0,
    marginBottom: theme.spacing(3),
    maxHeight: '300px',
  },
}));

const LargeImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.03)',
  },
});

const ContentContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  color: theme.palette.primary.light,
  backgroundColor: 'rgba(26, 26, 26, 0.7)',
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.2)',
  },
}));

const DateChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '12px',
  fontSize: '0.85rem',
  fontWeight: 500,
  backgroundColor: 'rgba(197, 165, 114, 0.15)',
  color: theme.palette.primary.light,
  marginBottom: theme.spacing(1),
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
        },
      }}
    >
      <Fade in={open}>
        <ModalContainer>
          <ContentPaper elevation={6}>
            <CloseButton onClick={onClose} size="medium">
              <CloseIcon />
            </CloseButton>
            
            <ImageContainer>
              <LargeImage src={imgSrc} alt={sectionTitle} />
            </ImageContainer>
            
            <ContentContainer>
              <Typography 
                variant="h5" 
                fontWeight="bold" 
                color="primary"
                sx={{ 
                  fontSize: '1.5rem',
                  background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {sectionTitle}
              </Typography>
              
              {subtitle && (
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    marginTop: '-0.5rem'
                  }}
                >
                  {subtitle}
                </Typography>
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
                  fontSize: '1rem'
                }}
              >
                {aboutText}
              </Typography>
              
              {/* Display expanded details if available */}
              {expandedDetails && !about && (
                <>
                  {expandedDetails.fullDescription && (
                    <Box sx={{ mt: 2 }}>
                      <Typography 
                        variant="subtitle1" 
                        color="primary.light"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        Overview
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8 }}>
                        {expandedDetails.fullDescription}
                      </Typography>
                    </Box>
                  )}
                  
                  {expandedDetails.skills && expandedDetails.skills.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography 
                        variant="subtitle1" 
                        color="primary.light"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        Skills & Technologies
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {expandedDetails.skills.map((skill, index) => (
                          <Box 
                            key={index}
                            sx={{ 
                              backgroundColor: 'rgba(197, 165, 114, 0.15)',
                              color: 'rgba(255, 255, 255, 0.9)',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              fontSize: '0.85rem',
                              fontWeight: 500,
                              display: 'inline-block',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(197, 165, 114, 0.25)',
                                transform: 'translateY(-2px)',
                              }
                            }}
                          >
                            {skill}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  {expandedDetails.achievements && expandedDetails.achievements.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography 
                        variant="subtitle1" 
                        color="primary.light"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        Key Achievements
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mt: 0.5 }}>
                        {expandedDetails.achievements.map((achievement, index) => (
                          <Typography 
                            key={index} 
                            component="li" 
                            variant="body2" 
                            sx={{ 
                              color: 'rgba(255, 255, 255, 0.85)',
                              mb: 0.75,
                              '&::marker': {
                                color: theme.palette.primary.main
                              }
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                  
                  {expandedDetails.links && expandedDetails.links.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography 
                        variant="subtitle1" 
                        color="primary.light"
                        sx={{ mb: 1, fontWeight: 600 }}
                      >
                        Related Links
                      </Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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
                              gap: 0.5,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                color: theme.palette.primary.main,
                                textDecoration: 'underline',
                              }
                            }}
                          >
                            {link.label}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                </>
              )}
              
              {!expandedDetails && !about && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                    Click anywhere outside this window or use the close button to return to the portfolio view.
                  </Typography>
                </Box>
              )}
            </ContentContainer>
          </ContentPaper>
        </ModalContainer>
      </Fade>
    </Modal>
  );
}
