import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  alpha,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Link } from 'react-router-dom';
import DailyPlanetSummary from '../components/DailyPlanetSummary';
import ZodiacCard from '../components/ZodiacCard';
import { ZODIAC_SIGNS, BLOG_POSTS } from '../services/kundaliService';

const FEATURES = [
  {
    icon: '🔮',
    title: 'Free Kundali Generation',
    desc: 'Enter your birth details to get a complete birth chart with planetary positions, houses, and interpretations.',
  },
  {
    icon: '📖',
    title: 'Educational Blog',
    desc: 'Deep-dive articles on planets, zodiac signs, houses, and transits — all explained through real-life patterns.',
  },
  {
    icon: '✨',
    title: 'Chart Insights',
    desc: 'Understand your strong and weak planets, retrograde effects, and what they mean in practical terms.',
  },
  {
    icon: '🌙',
    title: 'Daily Planet Guide',
    desc: "Check today's planetary positions and how current cosmic weather affects your mood and decisions.",
  },
];

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          background: isDark
            ? 'linear-gradient(135deg, #080814 0%, #1a0a2e 50%, #0d0d1a 100%)'
            : 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 50%, #fdf2f8 100%)',
        }}
      >
        {/* Background glows */}
        <Box
          sx={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha('#7c3aed', 0.15)} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha('#ec4899', 0.12)} 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
          <Chip
            icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important' }} />}
            label="Pattern-based astrology education"
            sx={{
              mb: 3,
              background: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              fontWeight: 600,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              lineHeight: 1.1,
              mb: 3,
              background: isDark
                ? 'linear-gradient(135deg, #e2e8f0 30%, #a78bfa 70%, #f9a8d4 100%)'
                : 'linear-gradient(135deg, #1e1b4b 30%, #7c3aed 70%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Understand Yourself
            <br />
            Through the Stars
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 560, mx: 'auto', mb: 5, fontWeight: 400, lineHeight: 1.7 }}
          >
            Explore astrology as a pattern-based system for self-understanding.
            Generate your free Kundali and discover what planetary placements
            reveal about your personality, drives, and life themes.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/kundali"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              Generate Free Kundali
            </Button>
            <Button
              component={Link}
              to="/blog"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
            >
              Explore Blog
            </Button>
          </Box>

          {/* Stats */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 3, md: 6 },
              mt: 7,
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '12', label: 'Zodiac Signs' },
              { value: '9', label: 'Planets Covered' },
              { value: '12', label: 'Houses Explained' },
              { value: '100%', label: 'Free to Use' },
            ].map((stat) => (
              <Box key={stat.label} sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h4"
                                    sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Features ─────────────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 1, fontWeight: 700 }}>
          What You'll Find Here
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 6 }}>
          Tools and knowledge to explore astrology logically
        </Typography>
        <Grid container spacing={3}>
          {FEATURES.map((f) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={f.title}>
              <Card sx={{ height: '100%', p: 0.5 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 36, mb: 2 }}>{f.icon}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {f.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Daily Planets ─────────────────────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: isDark
            ? alpha('#1a0a2e', 0.4)
            : alpha(theme.palette.primary.main, 0.03),
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <DailyPlanetSummary />
        </Container>
      </Box>

      {/* ── Zodiac Signs ─────────────────────────────────────────────── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 5, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
              The 12 Zodiac Signs
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Each sign represents a distinct way of experiencing life
            </Typography>
          </Box>
          <Button component={Link} to="/blog" variant="outlined" endIcon={<ArrowForwardIcon />}>
            Learn More
          </Button>
        </Box>
        <Grid container spacing={2}>
          {ZODIAC_SIGNS.map((sign) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={sign.name}>
              <ZodiacCard sign={sign} compact />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── Featured Blog Posts ───────────────────────────────────────── */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: isDark
            ? alpha('#1a0a2e', 0.4)
            : alpha(theme.palette.primary.main, 0.03),
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', mb: 5, flexWrap: 'wrap', gap: 2 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
                From the Blog
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Practical astrology explained through real life
              </Typography>
            </Box>
            <Button component={Link} to="/blog" variant="outlined" endIcon={<ArrowForwardIcon />}>
              All Articles
            </Button>
          </Box>
          <Grid container spacing={3}>
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip label={post.category} size="small" color="primary" variant="outlined" />
                      <Chip label={`${post.readTime} read`} size="small" variant="outlined" />
                    </Box>
                    <Typography variant="h6" gutterBottom sx={{ lineHeight: 1.4, fontWeight: 700 }}>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, flex: 1 }}>
                      {post.excerpt}
                    </Typography>
                    <Button
                      component={Link}
                      to="/blog"
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ mt: 2, alignSelf: 'flex-start', px: 0 }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Typography
          variant="h3"
                    sx={{
            fontWeight: 800,
            mb: 2,
            background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Ready to Explore Your Birth Chart?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400, lineHeight: 1.7 }}>
          Generate your free Kundali in seconds. No sign-up required.
          Understand your planetary positions and what they mean for your life.
        </Typography>
        <Button
          component={Link}
          to="/kundali"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
          sx={{ px: 5, py: 1.8, fontSize: '1.05rem' }}
        >
          Generate Your Free Kundali
        </Button>
      </Container>
    </Box>
  );
}
