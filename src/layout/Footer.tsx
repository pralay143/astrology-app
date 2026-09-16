import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
  IconButton,
  alpha,
  useTheme,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom';

const FOOTER_LINKS = {
  Explore: [
    { label: 'Free Kundali', path: '/kundali' },
    { label: 'Blog', path: '/blog' },
    { label: 'Chart Insights', path: '/insights' },
    { label: 'About', path: '/about' },
  ],
  Learn: [
    { label: 'Sun Signs', path: '/blog' },
    { label: 'Planets', path: '/blog' },
    { label: 'Houses', path: '/blog' },
    { label: 'Transits', path: '/blog' },
  ],
};

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        pt: 6,
        pb: 4,
        borderTop: `1px solid ${theme.palette.divider}`,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? alpha('#12122a', 0.8)
            : alpha('#f8f7ff', 0.8),
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <IconButton
                size="small"
                sx={{
                  background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                  borderRadius: '10px',
                  p: 0.6,
                  '&:hover': { opacity: 0.85 },
                }}
              >
                <AutoAwesomeIcon sx={{ color: '#fff', fontSize: 18 }} />
              </IconButton>
              <Typography
                variant="h6"
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
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.7, maxWidth: 300 }}
            >
              A modern astrology platform that treats planetary patterns as a
              lens for self-understanding — not superstition.
            </Typography>
          </Grid>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={category}>
              <Typography
                variant="overline"
                sx={{ fontWeight: 700, letterSpacing: 1.2, color: 'text.secondary' }}
              >
                {category}
              </Typography>
              <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
                {links.map((link) => (
                  <MuiLink
                    key={link.label}
                    component={Link}
                    to={link.path}
                    underline="none"
                    sx={{
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                      '&:hover': { color: 'primary.main' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}

          {/* Disclaimer */}
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Typography
              variant="overline"
              sx={{ fontWeight: 700, letterSpacing: 1.2, color: 'text.secondary' }}
            >
              Disclaimer
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1.5, lineHeight: 1.7, fontSize: '0.8rem' }}
            >
              Kundali calculations on this platform are for educational and
              self-reflection purposes only. Astrology is a symbolic system —
              it does not predict fixed outcomes. Always use your own judgement
              for life decisions.
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} AstroInsight. For educational purposes only.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Built with React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
