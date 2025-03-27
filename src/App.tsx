import { Container, CssBaseline, ThemeProvider, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import './App.css';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="bg-gradient"></div>
      <div className="bg-noise"></div>
      <Router>
        <div className="App">
          <Navbar />
          <Box sx={{ pt: 7 }}> {/* Add padding top to account for fixed navbar */}
            <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Container>
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
