import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  alpha,
  useTheme,
} from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const OUR_APPROACH = [
  {
    icon: '🧠',
    title: 'Psychological, Not Supernatural',
    desc: 'We interpret planetary patterns in terms of personality traits, behavioural tendencies, and developmental themes — not destiny or fate.',
  },
  {
    icon: '🔬',
    title: 'Pattern-Based Thinking',
    desc: 'Astrology maps correlations between astronomical cycles and observed human patterns. It is a symbolic system, not a causal one.',
  },
  {
    icon: '📐',
    title: 'Precise Interpretation',
    desc: 'We focus on what is actually derivable from a birth chart — not vague platitudes. Sun sign, Moon sign, Ascendant, and planet placements each tell a specific story.',
  },
  {
    icon: '🌱',
    title: 'Growth-Oriented',
    desc: 'Every challenging placement in a chart is a growth edge, not a curse. We frame astrology as a tool for self-development.',
  },
];

const WHAT_WE_BELIEVE = [
  'Astrology describes patterns, not fixed destinies',
  'The same planetary placement can express differently based on awareness and choices',
  'Understanding your chart is a starting point for self-reflection, not an ending point',
  'Astrology works alongside psychology, not instead of it',
  'Your birth chart is a symbolic map — you are not your chart',
];

const WHAT_WE_REJECT = [
  'Fear-based predictions ("your Saturn will destroy your career")',
  'Deterministic thinking ("Scorpios are always manipulative")',
  'Paid rituals or remedies to "fix" your chart',
  'Superstition dressed as astrology',
  'Astrology as a replacement for professional mental health support',
];

const ASTROLOGY_TIMELINE = [
  { period: '3000 BCE', event: 'Babylonian astronomers track planetary cycles and correlate them with earthly events' },
  { period: '400 BCE', event: 'Greek philosophers integrate Babylonian star lore with philosophy, creating Western horoscopic astrology' },
  { period: '200 CE', event: 'Claudius Ptolemy codifies Western astrology in Tetrabiblos, blending astronomy and symbolic interpretation' },
  { period: '500–1500 CE', event: 'Indian (Vedic) astrology flourishes, introducing the sidereal zodiac and detailed house systems' },
  { period: '1900s', event: 'Carl Jung explores astrology as symbolic psychology; his synchronicity framework provides a non-causal model' },
  { period: 'Today', event: 'Astrology is used as a self-reflection and psychological exploration tool by millions worldwide' },
];

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: isDark
            ? 'linear-gradient(135deg, #080814 0%, #1a0a2e 100%)'
            : 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 100%)',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Chip
            label="Our Philosophy"
            sx={{
              mb: 3,
              background: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              fontWeight: 600,
            }}
          />
          <Typography
            variant="h3"
                        sx={{
              fontWeight: 800,
              mb: 3,
              background: isDark
                ? 'linear-gradient(135deg, #e2e8f0, #a78bfa)'
                : 'linear-gradient(135deg, #1e1b4b, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Astrology as a Pattern System,
            <br />
            Not a Prediction Machine
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, fontSize: '1.05rem' }}>
            AstroInsight was built on a single belief: that astrology is most useful when treated
            as a symbolic language for self-understanding — not a oracle of fixed outcomes.
            Planets don't control your life. But their patterns in your chart can illuminate
            tendencies, drives, and growth edges with remarkable precision.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* ── What Astrology Is ──────────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            What Is Astrology, Really?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 3 }}>
            Astrology began as one of humanity's earliest attempts to find meaning in patterns.
            Ancient astronomers noticed that certain planetary configurations coincided with
            seasonal changes, agricultural cycles, and shifts in collective mood. Over thousands
            of years, this evolved into an elaborate symbolic system mapping celestial cycles
            to human experience.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85, mb: 3 }}>
            The philosopher Carl Jung proposed the concept of <strong>synchronicity</strong> to
            describe meaningful coincidences between outer events and inner states — without
            claiming one caused the other. This is the most intellectually honest model for
            understanding how astrology might work: not that Mars causes aggression, but that
            when Mars is prominent in a chart or transit, themes of drive and conflict tend to
            surface simultaneously in internal and external life.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.85 }}>
            Whether this is causal, acausal, or purely symbolic is an open question. What is
            undeniable is that astrology has helped millions of people recognize patterns in
            themselves that they struggled to articulate otherwise.
          </Typography>
        </Box>

        {/* ── Our Approach ──────────────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            Our Approach
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Four principles guide how we present astrology on this platform.
          </Typography>
          <Grid container spacing={3}>
            {OUR_APPROACH.map((item) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 36, mb: 2 }}>{item.icon}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* ── What We Believe / Reject ────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
            What We Stand For
          </Typography>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  border: `1px solid ${alpha('#22c55e', 0.25)}`,
                  background: isDark
                    ? alpha('#12122a', 0.95)
                    : alpha('#22c55e', 0.02),
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: '#22c55e', fontWeight: 700 }}>
                    We Believe
                  </Typography>
                  <List dense disablePadding>
                    {WHAT_WE_BELIEVE.map((item) => (
                      <ListItem key={item} disablePadding sx={{ mb: 1, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.3 }}>
                          <CheckCircleOutlineOutlinedIcon sx={{ color: '#22c55e', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          slotProps={{ primary: { style: { fontSize: '0.875rem', lineHeight: 1.65 } } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  border: `1px solid ${alpha('#ef4444', 0.25)}`,
                  background: isDark
                    ? alpha('#12122a', 0.95)
                    : alpha('#ef4444', 0.02),
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: '#ef4444', fontWeight: 700 }}>
                    We Reject
                  </Typography>
                  <List dense disablePadding>
                    {WHAT_WE_REJECT.map((item) => (
                      <ListItem key={item} disablePadding sx={{ mb: 1, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 32, mt: 0.3 }}>
                          <CancelOutlinedIcon sx={{ color: '#ef4444', fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          slotProps={{ primary: { style: { fontSize: '0.875rem', lineHeight: 1.65 } } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* ── Historical Timeline ──────────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            A Brief History of Astrology
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Astrology has evolved over 5,000 years across multiple cultures.
          </Typography>
          <Box sx={{ position: 'relative', pl: 3 }}>
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 2,
                background: 'linear-gradient(180deg, #7c3aed, #ec4899)',
                borderRadius: 1,
              }}
            />
            {ASTROLOGY_TIMELINE.map((item) => (
              <Box
                key={item.period}
                sx={{
                  position: 'relative',
                  mb: 3,
                  '&:last-child': { mb: 0 },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: -22,
                    top: 4,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, #7c3aed, #ec4899)`,
                    border: `2px solid ${theme.palette.background.default}`,
                  }}
                />
                <Chip
                  label={item.period}
                  size="small"
                  sx={{
                    mb: 0.5,
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    fontSize: '0.72rem',
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {item.event}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <Card
          sx={{
            p: 2,
            textAlign: 'center',
            background: isDark
              ? 'linear-gradient(135deg, #1a0a2e, #12122a)'
              : 'linear-gradient(135deg, #ede9fe, #fdf2f8)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
          }}
        >
          <CardContent sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
              Ready to Explore Your Chart?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
              Generate your free Kundali and see how these principles apply to your own
              planetary pattern — no superstition, just self-reflection.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/kundali"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4 }}
              >
                Free Kundali
              </Button>
              <Button
                component={Link}
                to="/blog"
                variant="outlined"
                size="large"
                sx={{ px: 4 }}
              >
                Read the Blog
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
