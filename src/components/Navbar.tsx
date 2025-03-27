import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,

  Drawer,

  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

interface NavbarProps {
  window?: () => Window;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(18, 18, 18, 0.75)',
  backdropFilter: 'blur(15px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
  borderBottom: '1px solid rgba(197, 165, 114, 0.2)',
  transition: 'all 0.3s ease',
  minHeight: '48px',
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  borderRadius: '30px',
  padding: '6px 12px',
  color: theme.palette.text.primary,
  fontWeight: 500,
  textTransform: 'none',
  letterSpacing: '0.5px',
  transition: 'all 0.3s ease',
  border: '1px solid transparent',
  fontSize: '0.9rem',
  '&:hover': {
    backgroundColor: 'rgba(197, 165, 114, 0.1)',
    transform: 'translateY(-2px)',
    border: '1px solid rgba(197, 165, 114, 0.3)',
  },
  '&.active': {
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: 'rgba(197, 165, 114, 0.08)',
    border: '1px solid rgba(197, 165, 114, 0.3)',
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.02em',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: 'rgba(18, 18, 18, 0.95)',
    backdropFilter: 'blur(15px)',
    borderRight: 'none',
    boxShadow: theme.shadows[12],
  },
}));


function HideOnScroll(props: NavbarProps & { children: React.ReactElement }) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);


  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const handleCloseDrawer = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const mobileMenu = (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Box sx={{ px: 2, py: 2 }}>
        <Typography variant="subtitle2" color="primary" fontWeight="bold">
          Navigation
        </Typography>
      </Box>
      <Divider sx={{ my: 1, opacity: 0.1 }} />
      <List component="nav">
        <ListItem 
          button 
          component={Link} 
          to="/" 
          onClick={handleCloseDrawer}
          selected={location.pathname === '/'}
        >
          <ListItemIcon>
            <HomeIcon sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/gallery" 
          onClick={handleCloseDrawer}
          selected={location.pathname === '/gallery'}
        >
          <ListItemIcon>
            <PhotoLibraryIcon sx={{ color: theme.palette.primary.main }} />
          </ListItemIcon>
          <ListItemText primary="Gallery" />
        </ListItem>
      </List>
    </Box>
  );


  return (
    <HideOnScroll {...props} children={
      <StyledAppBar 
        position="fixed"
        sx={{
          py: 0.25,
          boxShadow: scrolled ? 3 : 0,
          borderBottom: scrolled 
            ? '1px solid rgba(197, 165, 114, 0.2)' 
            : '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <LogoContainer onClick={isMobile ? handleDrawerToggle : handleLogoClick}>
              <LogoText variant="h6">
                Ayaan Pupala
              </LogoText>
            </LogoContainer>

            {isMobile ? (
              <StyledDrawer
                  anchor="left"
                  open={mobileMenuOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  {mobileMenu}
                </StyledDrawer>
             ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <NavButton
                    className={isActive('/')}
                    startIcon={<HomeIcon />}
                    disableElevation
                  >
                    Home
                  </NavButton>
                </Link>
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
                  <NavButton
                    className={isActive('/gallery')}
                    startIcon={<PhotoLibraryIcon />}
                    disableElevation
                  >
                    Gallery
                  </NavButton>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
    } />
  );
}
