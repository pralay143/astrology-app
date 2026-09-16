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
  alpha,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoopIcon from '@mui/icons-material/Loop';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { PLANETS, ZODIAC_SIGNS } from '../services/kundaliService';

const RETROGRADE_PLANETS = [
  {
    planet: 'Mercury',
    symbol: '☿',
    frequency: '3–4 times/year · ~21 days each',
    effect: 'Communication becomes unclear. Contracts go sideways. Old friends resurface. Best time: revisit, review, and revise — not launch.',
    practical: ['Back up important files before it starts', 'Avoid signing major contracts', 'Reconnect with people from the past', 'Finish lingering creative projects'],
  },
  {
    planet: 'Venus',
    symbol: '♀',
    frequency: 'Every ~18 months · ~40 days',
    effect: 'Relationship patterns surface for review. Past partners resurface. Your values shift. Best time: reassess what you truly want in love and money.',
    practical: ['Avoid major relationship decisions', 'Reflect on your financial values', 'Notice what/who you have been dismissing', 'Reconnect with old creative passions'],
  },
  {
    planet: 'Mars',
    symbol: '♂',
    frequency: 'Every ~2 years · ~60–80 days',
    effect: 'Momentum slows. Aggression turns inward. Motivation is inconsistent. Best time: review strategy, not launch new projects or pick fights.',
    practical: ['Channel energy into fitness or inner work', 'Avoid impulsive arguments', 'Review where your ambition is aligned vs forced', 'Complete unfinished projects'],
  },
  {
    planet: 'Jupiter',
    symbol: '♃',
    frequency: 'Every year · ~4 months',
    effect: 'Expansion becomes more internal. Philosophy and beliefs are reviewed. Overconfidence can mislead. Best time: internalize wisdom already gained.',
    practical: ['Reflect on your beliefs and whether they serve you', 'Avoid over-promising or overspending', 'Study rather than teach', 'Slow expansion of businesses or education plans'],
  },
  {
    planet: 'Saturn',
    symbol: '♄',
    frequency: 'Every year · ~4.5 months',
    effect: 'Structures are tested from within. Rules feel restrictive but meaningful. Karma becomes visible. Best time: strengthen existing foundations.',
    practical: ['Audit your long-term commitments', 'Strengthen systems rather than building new ones', 'Pay attention to health patterns', 'Take responsibility for old decisions'],
  },
];

const ASPECTS = [
  {
    name: 'Conjunction (0°)',
    symbol: '☌',
    nature: 'Intensifying',
    color: '#7c3aed',
    description: 'Two planets merge their energies. The combined effect is amplified — for better or worse depending on the planets involved.',
    example: 'Sun conjunct Jupiter: Boundless optimism, a sense of luck and expansion in identity. Great for entrepreneurship, though watch for overconfidence.',
  },
  {
    name: 'Trine (120°)',
    symbol: '△',
    nature: 'Harmonious',
    color: '#22c55e',
    description: 'Two planets flow together effortlessly. This is a natural talent or area of ease — though it can also represent areas taken for granted.',
    example: 'Moon trine Venus: Emotional warmth flows naturally into relationships. This person creates harmony without trying hard.',
  },
  {
    name: 'Sextile (60°)',
    symbol: '⚹',
    nature: 'Opportunistic',
    color: '#3b82f6',
    description: 'A favorable angle that requires slight effort to activate. Opportunities appear but must be reached for.',
    example: 'Mars sextile Mercury: A person who can think and act quickly. Ideas can be executed with minimal friction if energy is directed.',
  },
  {
    name: 'Square (90°)',
    symbol: '□',
    nature: 'Challenging',
    color: '#ef4444',
    description: 'Two planets in friction. This creates tension that drives growth — but also internal conflict if not consciously managed.',
    example: 'Saturn square Sun: Persistent friction between ambition and authority. Can produce immense discipline once accepted and worked with.',
  },
  {
    name: 'Opposition (180°)',
    symbol: '☍',
    nature: 'Polarizing',
    color: '#f59e0b',
    description: 'Two planets pull in opposite directions. Often shows up as tension in relationships or a need to integrate two opposing life themes.',
    example: 'Venus opposite Mars: The classic push-pull in relationships. Attraction coexists with conflict. Requires conscious integration.',
  },
];

const STRONG_PLANET_FACTORS = [
  { label: 'In its own sign', desc: 'A planet in the sign it rules is at home — its energy is pure and unfiltered.', example: 'Sun in Leo, Moon in Cancer, Mercury in Gemini' },
  { label: 'Exalted', desc: 'A planet in its exaltation sign is exceptionally powerful and expresses its highest qualities.', example: 'Sun in Aries, Moon in Taurus, Saturn in Libra' },
  { label: 'Conjunct benefics', desc: 'Being near Jupiter or Venus amplifies the planet\'s positive expression.', example: 'Mercury conjunct Jupiter: exceptional communication and wisdom' },
  { label: 'Angular house placement', desc: 'Planets in the 1st, 4th, 7th, or 10th houses have the most visible impact on life.', example: 'Mars in the 10th house: career is driven by ambition and direct action' },
];

export default function Insights() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* Header */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: isDark
            ? 'linear-gradient(135deg, #080814 0%, #1a0a2e 100%)'
            : 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 100%)',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
                        sx={{
              fontWeight: 800,
              mb: 2,
              background: isDark
                ? 'linear-gradient(135deg, #e2e8f0, #a78bfa)'
                : 'linear-gradient(135deg, #1e1b4b, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Chart Insights
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Understand the mechanics behind birth chart reading — strong planets, retrograde cycles,
            and planetary aspects — explained practically.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* ── Planet Strength ─────────────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <StarIcon sx={{ color: theme.palette.primary.main }} />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Planet Strength
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Not all planets operate with equal strength in a birth chart. A planet's strength
            determines how clearly and powerfully its qualities express in your life.
          </Typography>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              { label: 'Strong Planets', icon: <TrendingUpIcon />, color: '#22c55e', desc: 'Operate with clarity and power. Their qualities emerge naturally and consistently. These are your innate strengths.' },
              { label: 'Neutral Planets', icon: <StarIcon />, color: '#f59e0b', desc: 'Adequate influence — neither a dominant strength nor a challenge. Express their qualities moderately.' },
              { label: 'Weak Planets', icon: <TrendingDownIcon />, color: '#ef4444', desc: 'Require more conscious effort to express their qualities. Often show up as areas of life requiring the most growth.' },
            ].map(({ label, icon, color, desc }) => (
              <Grid size={{ xs: 12, md: 4 }} key={label}>
                <Card
                  sx={{
                    height: '100%',
                    border: `1px solid ${alpha(color, 0.25)}`,
                    background: isDark
                      ? alpha('#12122a', 0.95)
                      : `linear-gradient(135deg, #ffffff, ${alpha(color, 0.03)})`,
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Box sx={{ color, display: 'flex' }}>{icon}</Box>
                      <Typography variant="h6" sx={{ color, fontWeight: 700 }}>
                        {label}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
            What Makes a Planet Strong?
          </Typography>
          <Grid container spacing={2}>
            {STRONG_PLANET_FACTORS.map((f) => (
              <Grid size={{ xs: 12, sm: 6 }} key={f.label}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                      {f.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1 }}>
                      {f.desc}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      e.g. {f.example}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* ── Retrograde Planets ──────────────────────────────────────── */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <LoopIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Retrograde Planets
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1, lineHeight: 1.8 }}>
            Retrograde is an optical illusion — the planet appears to move backward from Earth's view.
            Astrologically, retrograde planets are said to turn their energy inward, favoring reflection
            over action.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
            In a natal chart, a retrograde planet indicates qualities that are developed through internal
            work rather than expressed instinctively. It often shows areas of deep karmic learning.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {RETROGRADE_PLANETS.map((rp) => (
              <Accordion
                key={rp.planet}
                disableGutters
                elevation={0}
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: '16px !important',
                  '&:before': { display: 'none' },
                  overflow: 'hidden',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ fontSize: 28 }}>{rp.symbol}</Typography>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {rp.planet} Retrograde
                        </Typography>
                        <LoopIcon sx={{ fontSize: 14, color: theme.palette.secondary.main }} />
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {rp.frequency}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75, mb: 2 }}>
                    {rp.effect}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }} gutterBottom>
                    Practical guidance during this period:
                  </Typography>
                  <List dense disablePadding>
                    {rp.practical.map((tip) => (
                      <ListItem key={tip} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                              mt: 0.4,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={tip}
                          slotProps={{ primary: { style: { fontSize: '0.875rem' } } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* ── Planetary Aspects ────────────────────────────────────────── */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            Planetary Aspects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
            Aspects are the angles between planets in a chart. They describe how planetary energies
            interact — whether they flow harmoniously, create friction, or amplify each other.
          </Typography>

          <Grid container spacing={3}>
            {ASPECTS.map((a) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={a.name}>
                <Card
                  sx={{
                    height: '100%',
                    border: `1px solid ${alpha(a.color, 0.25)}`,
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                      <Typography
                        sx={{
                          fontSize: 28,
                          lineHeight: 1,
                          color: a.color,
                          filter: `drop-shadow(0 0 6px ${alpha(a.color, 0.4)})`,
                        }}
                      >
                        {a.symbol}
                      </Typography>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {a.name}
                        </Typography>
                        <Chip
                          label={a.nature}
                          size="small"
                          sx={{
                            background: alpha(a.color, 0.12),
                            color: a.color,
                            fontWeight: 600,
                            fontSize: '0.65rem',
                            height: 20,
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1.5 }}>
                      {a.description}
                    </Typography>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        background: alpha(a.color, 0.06),
                        border: `1px solid ${alpha(a.color, 0.1)}`,
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        <strong>Example:</strong> {a.example}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* ── Planets Quick Reference ──────────────────────────────────── */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            Planet Quick Reference
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            What each planet governs in your birth chart
          </Typography>
          <Grid container spacing={2}>
            {PLANETS.map((p) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.name}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Typography
                        sx={{
                          fontSize: 28,
                          lineHeight: 1,
                          filter: `drop-shadow(0 0 6px ${alpha(theme.palette.primary.main, 0.4)})`,
                          flexShrink: 0,
                        }}
                      >
                        {p.symbol}
                      </Typography>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {p.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Rules {p.rules}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, mb: 1 }}>
                          {p.represents}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                          {p.positiveKeywords.slice(0, 3).map((kw) => (
                            <Chip
                              key={kw}
                              label={kw}
                              size="small"
                              sx={{
                                fontSize: '0.62rem',
                                height: 18,
                                background: alpha(theme.palette.primary.main, 0.08),
                                color: theme.palette.primary.main,
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Zodiac Strengths Quick Grid ─────────────────────────────── */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }} gutterBottom>
            Zodiac Sign Elements
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            The four elements group signs by their fundamental mode of experiencing life
          </Typography>
          {(['Fire', 'Earth', 'Air', 'Water'] as const).map((element) => {
            const elementSigns = ZODIAC_SIGNS.filter((s) => s.element === element);
            const colors: Record<string, string> = {
              Fire: '#ef4444', Earth: '#84cc16', Air: '#3b82f6', Water: '#06b6d4',
            };
            const descriptions: Record<string, string> = {
              Fire: 'Driven by passion, inspiration, and action. Fire signs are initiators who lead through enthusiasm.',
              Earth: 'Grounded in reality and practicality. Earth signs build and sustain through patience and persistence.',
              Air: 'Moved by ideas and social connection. Air signs think, communicate, and analyze.',
              Water: 'Guided by emotion and intuition. Water signs feel deeply and connect through empathy.',
            };
            const color = colors[element];
            return (
              <Box key={element} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Chip
                    label={element}
                    sx={{ background: alpha(color, 0.15), color, fontWeight: 700 }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {descriptions[element]}
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {elementSigns.map((sign) => (
                    <Grid size={{ xs: 12, sm: 4 }} key={sign.name}>
                      <Card sx={{ border: `1px solid ${alpha(color, 0.2)}` }}>
                        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Typography sx={{ fontSize: 28 }}>{sign.symbol}</Typography>
                            <Box>
                              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{sign.name}</Typography>
                              <Typography variant="caption" color="text.secondary">{sign.traits[0]} · {sign.modality}</Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
