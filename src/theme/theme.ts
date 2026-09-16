import { createTheme, alpha } from '@mui/material';
import type { PaletteMode, Theme } from '@mui/material';

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#7c3aed',
        light: '#a78bfa',
        dark: '#5b21b6',
      },
      secondary: {
        main: '#ec4899',
        light: '#f9a8d4',
        dark: '#be185d',
      },
      background: {
        default: mode === 'dark' ? '#080814' : '#f8f7ff',
        paper: mode === 'dark' ? '#12122a' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#e2e8f0' : '#1e1b4b',
        secondary: mode === 'dark' ? '#94a3b8' : '#64748b',
      },
      divider: mode === 'dark' ? 'rgba(124,58,237,0.15)' : 'rgba(124,58,237,0.12)',
    },
    typography: {
      fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.03em' },
      h2: { fontWeight: 700, letterSpacing: '-0.02em' },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { fontWeight: 600, textTransform: 'none' as const },
    },
    shape: { borderRadius: 16 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(124,58,237,0.4) transparent',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            backgroundImage: 'none',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
            },
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            borderRadius: 10,
            fontWeight: 600,
            textTransform: 'none' as const,
            letterSpacing: 0,
            '&.MuiButton-containedPrimary': {
              background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
              boxShadow: 'none',
              '&:hover': {
                background: 'linear-gradient(135deg, #6d28d9 0%, #db2777 100%)',
                boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
              },
            },
            '&.MuiButton-outlinedPrimary': {
              borderColor: alpha(theme.palette.primary.main, 0.4),
              '&:hover': {
                borderColor: theme.palette.primary.main,
                background: alpha(theme.palette.primary.main, 0.06),
              },
            },
          }),
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            backgroundImage: 'none',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha('#12122a', 0.85)
                : alpha('#ffffff', 0.85),
            backdropFilter: 'blur(20px)',
            borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            boxShadow: 'none',
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500, borderRadius: 8 },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            '& .MuiOutlinedInput-root': {
              borderRadius: 10,
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.light,
              },
            },
          }),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            borderColor: alpha(theme.palette.primary.main, 0.12),
          }),
        },
      },
    },
  });
