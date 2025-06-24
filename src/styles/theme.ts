import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#C5A572', // Gold accent
      light: '#D4BC8B',
      dark: '#97783B',
    },
    secondary: {
      main: '#8B795E',
    },
    background: {
      default: '#0A0A0A', // Deeper black for better contrast
      paper: '#1A1A1A',
      card: 'rgba(26, 26, 26, 0.8)', // Slightly more opaque
      profile: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.8)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '0.02em',
      marginBottom: '0.5rem',
      background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 2px 10px rgba(197, 165, 114, 0.3)',
      '@media (max-width:600px)': {
        fontSize: '2.2rem',
      },
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.01em',
      opacity: 0.9,
      fontSize: '1.3rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#C5A572',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 500,
      opacity: 0.8,
    },
    body1: {
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    body2: {
      lineHeight: 1.6,
      fontSize: '0.9rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'radial-gradient(circle at 50% 0%, #1a1a1a 0%, #0A0A0A 70%)',
          backgroundAttachment: 'fixed',
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '2rem',
          paddingBottom: '2rem',
          '@media (max-width:600px)': {
            paddingTop: '1rem',
            paddingBottom: '1rem',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(197, 165, 114, 0.1)',
          borderRadius: '16px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'rgba(197, 165, 114, 0.4)',
            boxShadow: '0 12px 40px rgba(197, 165, 114, 0.15)',
            transform: 'translateY(-6px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(15px)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 32px rgba(197, 165, 114, 0.2)',
          border: '3px solid rgba(197, 165, 114, 0.3)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(197, 165, 114, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(197, 165, 114, 0.2)',
          },
        },
        icon: {
          color: '#C5A572',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(197, 165, 114, 0.25)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #C5A572 30%, #D4BC8B 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #D4BC8B 30%, #C5A572 90%)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
    '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
    '0px 6px 10px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
    '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
    '0px 12px 17px -8px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
    '0 8px 16px 0 rgba(0,0,0,0.2)',
    '0 12px 20px 0 rgba(0,0,0,0.2)',
    '0 16px 24px 0 rgba(0,0,0,0.2)',
    '0 20px 28px 0 rgba(0,0,0,0.2)',
    '0 24px 32px 0 rgba(0,0,0,0.2)',
    '0 28px 36px 0 rgba(0,0,0,0.2)',
    '0 32px 40px 0 rgba(0,0,0,0.2)',
    '0 36px 44px 0 rgba(0,0,0,0.2)',
    '0 40px 48px 0 rgba(0,0,0,0.2)',
    '0 44px 52px 0 rgba(0,0,0,0.2)',
    '0 48px 56px 0 rgba(0,0,0,0.2)',
    '0 52px 60px 0 rgba(0,0,0,0.2)',
    '0 56px 64px 0 rgba(0,0,0,0.2)',
    '0 60px 68px 0 rgba(0,0,0,0.2)',
    '0 64px 72px 0 rgba(0,0,0,0.2)',
    '0 68px 76px 0 rgba(0,0,0,0.2)',
    '0 72px 80px 0 rgba(0,0,0,0.2)',
  ],
});

// Declare the custom background types
declare module '@mui/material/styles' {
  interface TypeBackground {
    card: string;
    profile: string;
  }
}