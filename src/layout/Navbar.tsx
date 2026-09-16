import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  alpha,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Kundali', path: '/kundali' },
  { label: 'Blog', path: '/blog' },
  { label: 'Insights', path: '/insights' },
  { label: 'About', path: '/about' },
];

export default function Navbar({ mode, toggleMode }: NavbarProps) {
  const theme = useTheme();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const trigger = useScrollTrigger({ threshold: 10 });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar position="fixed" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ py: 0.5 }}>
              {/* Logo */}
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
                  flexGrow: { xs: 1, md: 0 },
                  mr: { md: 4 },
                }}
              >
                <AutoAwesomeIcon
                  sx={{
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    borderRadius: '8px',
                    p: 0.4,
                    fontSize: 28,
                    color: '#fff',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.5px',
                  }}
                >
                  AstroInsight
                </Typography>
              </Box>

              {/* Desktop Nav */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: 0.5,
                  flexGrow: 1,
                }}
              >
                {NAV_LINKS.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Button
                      key={link.path}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: active
                          ? theme.palette.primary.main
                          : theme.palette.text.secondary,
                        fontWeight: active ? 700 : 500,
                        fontSize: '0.875rem',
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 2,
                        backgroundColor: active
                          ? alpha(theme.palette.primary.main, 0.08)
                          : 'transparent',
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.06),
                          color: theme.palette.primary.main,
                        },
                        transition: 'all 0.2s',
                      }}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Box>

              {/* Right Actions */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  component={Link}
                  to="/kundali"
                  variant="contained"
                  size="small"
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                  Free Kundali
                </Button>
                <IconButton onClick={toggleMode} size="small" sx={{ ml: 0.5 }}>
                  {mode === 'dark' ? (
                    <Brightness7Icon fontSize="small" />
                  ) : (
                    <Brightness4Icon fontSize="small" />
                  )}
                </IconButton>
                <IconButton
                  onClick={() => setDrawerOpen(true)}
                  size="small"
                  sx={{ display: { md: 'none' } }}
                >
                  <MenuIcon fontSize="small" />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>

      {/* Toolbar spacer */}
      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: 260,
              pt: 2,
              backgroundColor: theme.palette.background.paper,
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            pb: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <AutoAwesomeIcon
            sx={{
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              borderRadius: '8px',
              p: 0.4,
              fontSize: 24,
              color: '#fff',
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AstroInsight
          </Typography>
        </Box>
        <List sx={{ pt: 1 }}>
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.path;
            return (
              <ListItem key={link.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    backgroundColor: active
                      ? alpha(theme.palette.primary.main, 0.08)
                      : 'transparent',
                    color: active
                      ? theme.palette.primary.main
                      : theme.palette.text.primary,
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{ primary: { style: { fontWeight: active ? 700 : 500 } } }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Box sx={{ px: 2, pt: 2 }}>
          <Button
            component={Link}
            to="/kundali"
            variant="contained"
            fullWidth
            onClick={() => setDrawerOpen(false)}
          >
            Free Kundali
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
