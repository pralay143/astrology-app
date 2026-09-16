import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getTheme } from './theme/theme';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Kundali from './pages/Kundali';
import Blog from './pages/Blog';
import Insights from './pages/Insights';
import About from './pages/About';

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'background.default',
          }}
        >
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kundali" element={<Kundali />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
