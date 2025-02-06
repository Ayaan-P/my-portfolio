import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { PhotoLibrary as PhotoLibraryIcon } from '@mui/icons-material';
import ProfileCard from './ProfileCard';
import { DriveService, DriveImage } from '../services/driveService';

const GalleryContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
}));

// interface GalleryImage {
//   id: string;
//   url: string;
//   title: string;
//   description?: string;
//   date?: string;
// }



const ImageGrid = styled(Grid)(({ theme }) => ({
  gap: theme.spacing(2),
  width: '100%',
  margin: 0,
}));

const ImageCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '100%', // 1:1 Aspect ratio
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    '& .overlay': {
      opacity: 1,
    },
  },
}));
const LoadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
});

const ImageModal = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: theme.zIndex.modal,
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
  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
}));

export default function Gallery(): JSX.Element {
  const [images, setImages] = useState<DriveImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<DriveImage | null>(null); // Add this line


  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const driveService = new DriveService();
        const fetchedImages = await driveService.listFolderContents(); // Remove the argument
        setImages(fetchedImages);
      } catch (err) {
        setError('Failed to load images. Please try again later.');
        console.error('Error loading images:', err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const handleImageClick = (image: DriveImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };


    return (
      <GalleryContainer>
        <ProfileCard
          icon={PhotoLibraryIcon}
          sectionTitle="Gallery"
          sections={[{
            id: 1,
            sectionTitle: 'My Work',
            aboutText: 'A collection of my projects and achievements',
            date: '', // Add empty string or actual date
            imgSrc: '', // Add empty string or actual image path
            subtitle: '', // If subtitle is also required, add it
          }]}
          about={false}
        />

      {loading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <ImageGrid container>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <ImageCard onClick={() => handleImageClick(image)}>
                <Image 
                  src={image.thumbnailUrl || image.url} 
                  alt={image.title}
                />
                <ImageOverlay className="overlay">
                  <Typography variant="subtitle1" color="white">
                    {image.title}
                  </Typography>
                  {image.description && (
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">
                      {image.description}
                    </Typography>
                  )}
                </ImageOverlay>
              </ImageCard>
            </Grid>
          ))}
        </ImageGrid>
      )}

      {selectedImage && (
        <ImageModal onClick={handleCloseModal}>
          <Box
            component="img"
            sx={{
              maxWidth: '90%',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
            src={selectedImage.url}
            alt={selectedImage.title}
          />
        </ImageModal>
      )}
    </GalleryContainer>
  );
}