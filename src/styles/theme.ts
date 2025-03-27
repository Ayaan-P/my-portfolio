import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
      default: '#121212', // Slightly darker for better contrast
      paper: '#1A1A1A',
      card: 'rgba(26, 26, 26, 0.7)', // Semi-transparent for depth
      profile: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '0.02em',
      marginBottom: '0.5rem',
      background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 2px 10px rgba(197, 165, 114, 0.2)',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.01em',
      opacity: 0.9,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: '#C5A572',
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
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'radial-gradient(circle at 50% 0%, #2a2a2a 0%, #121212 70%)',
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
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: '#C5A572',
            boxShadow: '0 8px 32px rgba(197, 165, 114, 0.1)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.7)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(197, 165, 114, 0.3)',
          border: '3px solid #C5A572',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(197, 165, 114, 0.2)',
            transform: 'translateY(-2px)',
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
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          padding: '8px 16px',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(197, 165, 114, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #C5A572 30%, #D4BC8B 90%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 18, 18, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
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
