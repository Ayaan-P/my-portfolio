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
      default: '#1A1A1A',
      paper: '#1A1A1A',
      card: 'transparent', // Make cards transparent
      profile: '#1A1A1A',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          border: '1px solid rgba(255, 255, 255, 0.05)', // Very subtle border
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: '#C5A572',
            boxShadow: '0 8px 32px rgba(197, 165, 114, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
  
    MuiAvatar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 14px rgba(197, 165, 114, 0.3)', // Gold-tinted shadow
          border: '3px solid #C5A572',
        },
      },
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '0.02em',
      marginBottom: '0.5rem',
      background: 'linear-gradient(45deg, #D4BC8B 30%, #97783B 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '0.01em',
      opacity: 0.9,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
});

// Declare the custom background types
declare module '@mui/material/styles' {
  interface TypeBackground {
    card: string;
    profile: string;
  }
}