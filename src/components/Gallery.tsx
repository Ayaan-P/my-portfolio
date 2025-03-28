import { Box, Grid, Typography, CircularProgress, Container, IconButton, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { PhotoLibrary as PhotoLibraryIcon, Close as CloseIcon, ZoomIn as ZoomInIcon } from '@mui/icons-material';
import ProfileCard from './ProfileCard';
// import { DriveService, DriveImage } from '../services/driveService'; // Removed DriveService import

const GalleryContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(3),
  width: '100%',
  margin: 0,
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
}));

const ImageCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // 1:1 Aspect ratio
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  backgroundColor: 'rgba(26, 26, 26, 0.6)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
    '& .overlay': {
      opacity: 1,
    },
    '& .zoom-icon': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: theme.spacing(1.5),
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
}));

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '300px',
  width: '100%',
  '& .MuiCircularProgress-root': {
    color: theme.palette.primary.main,
  },
}));

const ImageModal = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: 'white',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    top: theme.spacing(1),
    right: theme.spacing(1),
    padding: '4px',
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem',
    },
  },
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '90%',
  maxHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '95%',
    maxHeight: '85vh',
  },
}));

const ModalImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '70vh',
  objectFit: 'contain',
  borderRadius: theme.spacing(1),
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.down('sm')]: {
    maxHeight: '60vh',
    borderRadius: theme.spacing(0.5),
  },
}));

const ModalCaption = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  backgroundColor: 'rgba(26, 26, 26, 0.8)',
  borderRadius: theme.spacing(1),
  width: '100%',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5),
  },
}));

const Image = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const ZoomIconOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0.8)',
  opacity: 0,
  transition: 'all 0.3s ease-in-out',
  backgroundColor: 'rgba(197, 165, 114, 0.2)',
  borderRadius: '50%',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0.75),
    '& .MuiSvgIcon-root': {
      fontSize: '1.5rem',
    },
  },
}));

interface LocalImage {
  id: string;
  src: string;
  title: string;
  description?: string;
}

const localImages: LocalImage[] = [
  { id: '1', src: 'src/images/Chicago.png', title: 'Chicago' },
  { id: '2', src: 'src/images/Chicago1.jpg', title: 'Chicago 1' },
  { id: '3', src: 'src/images/Cliff.png', title: 'Cliff' },
  { id: '4', src: 'src/images/CT.png', title: 'CT' },
  { id: '5', src: 'src/images/DTI.png', title: 'DTI' },
  { id: '6', src: 'src/images/epigen.png', title: 'Epigen' },
  { id: '7', src: 'src/images/epigeneres.png', title: 'Epigen Res' },
  { id: '8', src: 'src/images/Karsun.png', title: 'Karsun' },
  { id: '9', src: 'src/images/Network.png', title: 'Network' },
  { id: '10', src: 'src/images/Northwestern.png', title: 'Northwestern' },
  { id: '11', src: 'src/images/Northwestern1.png', title: 'Northwestern 1' },
  { id: '12', src: 'src/images/uiuc.png', title: 'UIUC' },
  { id: '13', src: 'src/images/Washington.png', title: 'Washington' },
  { id: '14', src: 'src/images/Boston.png', title: 'Boston' },
  { id: '15', src: 'src/images/Cathedral.png', title: 'Cathedral' },
];


export default function Gallery(): JSX.Element {
  const [images, setImages] = useState<LocalImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<LocalImage | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        // const driveService = new DriveService(); // Removed DriveService
        // const fetchedImages = await driveService.listFolderContents(); // Removed DriveService call
        // setImages(fetchedImages); // Removed DriveService call
        setImages(localImages); // Use local images instead
        setLoading(false); // Set loading to false after setting local images
      } catch (err) {
        setError('Failed to load images. Please try again later.');
        console.error('Error loading images:', err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleImageClick = (image: LocalImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="lg" className="fade-in">
      <GalleryContainer>
        <ProfileCard
          icon={PhotoLibraryIcon}
          sectionTitle="Gallery"
          sections={[{
            id: 1,
            sectionTitle: 'My Work',
            aboutText: 'A collection of my projects and achievements. Click on any image to view details.',
            date: '',
            imgSrc: '',
            subtitle: '',
          }]}
          about={false}
        />

        {loading ? (
          <LoadingContainer>
            <CircularProgress size={60} thickness={4} />
          </LoadingContainer>
        ) : error ? (
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mt: 4,
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              borderRadius: 2,
              border: '1px solid rgba(255, 0, 0, 0.2)'
            }}
          >
            <Typography color="error" align="center" variant="h6">
              {error}
            </Typography>
          </Paper>
        ) : (
          <ImageGrid container>
            {images.map((image, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={image.id}
                sx={{
                  opacity: 0,
                  animation: 'fadeIn 0.5s ease-out forwards',
                  animationDelay: `${0.1 + (index * 0.1)}s`
                }}
              >
                <ImageCard elevation={4} onClick={() => handleImageClick(image)}>
                  <Image
                    src={image.src} // Updated to use local image src
                    alt={image.title}
                  />
                  <ImageOverlay className="overlay">
                    <Typography variant="subtitle1" color="white" fontWeight="bold">
                      {image.title}
                    </Typography>
                    {image.description && (
                      <Typography variant="body2" color="rgba(255,255,255,0.8)">
                        {image.description}
                      </Typography>
                    )}
                  </ImageOverlay>
                  <ZoomIconOverlay className="zoom-icon">
                    <ZoomInIcon sx={{ color: 'white', fontSize: '2rem' }} />
                  </ZoomIconOverlay>
                </ImageCard>
              </Grid>
            ))}
          </ImageGrid>
        )}

        {selectedImage && (
          <ImageModal onClick={handleCloseModal}>
            <CloseButton onClick={(e) => {
              e.stopPropagation();
              handleCloseModal();
            }}>
              <CloseIcon />
            </CloseButton>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalImage
                src={selectedImage.src} // Updated to use local image src
                alt={selectedImage.title}
              />
              <ModalCaption>
                <Typography variant="h6" color="primary" gutterBottom>
                  {selectedImage.title}
                </Typography>
                {selectedImage.description && (
                  <Typography variant="body1" color="text.secondary">
                    {selectedImage.description}
                  </Typography>
                )}
              </ModalCaption>
            </ModalContent>
          </ImageModal>
        )}
      </GalleryContainer>
    </Container>
  );
}
