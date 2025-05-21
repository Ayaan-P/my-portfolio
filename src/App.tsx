import { Container, CssBaseline, ThemeProvider, Box, styled, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { theme } from './styles/theme';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const MenuButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: 10,
  left: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '12px', // Increased padding for better visibility
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  zIndex: 1201, // Ensure button is above drawer
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: '#121212',
    color: 'white',
    width: 240,
    paddingTop: theme.spacing(4), // Add padding to top of drawer
  },
  '& .MuiList-root': {
    paddingTop: theme.spacing(8), // Add padding to the top of the list
  }
}));


function App(): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>
      <Router>
        <div className="App">
          <MenuButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </MenuButton>
          <StyledDrawer
            open={drawerOpen}
            onClose={handleDrawerToggle}
          >
            <List>
              {['Profile', 'Blog'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton component={Link} to={text === 'Profile' ? '/' : `/${text.toLowerCase()}`}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </StyledDrawer>
          <Box sx={{ pt: 0 }}>
            <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
              </Routes>
            </Container>
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
