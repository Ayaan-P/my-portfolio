import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Container,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
  Button,
  Avatar,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ProfilePic from "../images/profile.jpg";

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

const MobileMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'rgba(18, 18, 18, 0.95)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    marginTop: theme.spacing(1),
    minWidth: '200px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
  '& .MuiMenuItem-root': {
    padding: '12px 20px',
    borderRadius: '8px',
    margin: '4px 8px',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(197, 165, 114, 0.1)',
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(197, 165, 114, 0.15)',
      '&:hover': {
        backgroundColor: 'rgba(197, 165, 114, 0.2)',
      },
    },
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = Boolean(anchorEl);

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

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLogoClick = () => {
    window.location.href = '/';
  };

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
            <LogoContainer onClick={handleLogoClick}>
              <LogoText variant="h6">
                Ayaan Pupala
              </LogoText>
            </LogoContainer>

            {isMobile ? (
              <>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <MobileMenu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography variant="subtitle2" color="primary" fontWeight="bold">
                      Navigation
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 1, opacity: 0.1 }} />
                  <MenuItem 
                    component={Link} 
                    to="/" 
                    onClick={handleClose}
                    selected={location.pathname === '/'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <HomeIcon sx={{ mr: 1.5, color: theme.palette.primary.main }} />
                    Home
                  </MenuItem>
                  <MenuItem 
                    component={Link} 
                    to="/gallery" 
                    onClick={handleClose}
                    selected={location.pathname === '/gallery'}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <PhotoLibraryIcon sx={{ mr: 1.5, color: theme.palette.primary.main }} />
                    Gallery
                  </MenuItem>
                </MobileMenu>
              </>
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
