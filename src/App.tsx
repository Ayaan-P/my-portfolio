import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import Profile from './components/Profile';
import Gallery from './components/Gallery';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth={false}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/gallery" element={<Gallery />} />

          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;