import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Alert,
  CircularProgress,
  alpha,
  useTheme,
  Tabs,
  Tab,
  Paper,
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { generateKundali } from '../services/kundaliService';
import type { KundaliResult } from '../services/kundaliService';
import PlanetCard from '../components/PlanetCard';

interface FormData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  location: string;
}

const ELEMENT_COLORS: Record<string, string> = {
  Fire: '#ef4444',
  Earth: '#84cc16',
  Air: '#3b82f6',
  Water: '#06b6d4',
};

export default function Kundali() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [result, setResult] = useState<KundaliResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      setResult(generateKundali(data.name, data.dateOfBirth, data.timeOfBirth, data.location));
      setLoading(false);
    }, 800);
  };

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
          <Chip
            icon={<AutoAwesomeIcon sx={{ fontSize: '14px !important' }} />}
            label="100% Free · No Sign-up Required"
            sx={{
              mb: 2,
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
              mb: 2,
              background: isDark
                ? 'linear-gradient(135deg, #e2e8f0, #a78bfa)'
                : 'linear-gradient(135deg, #1e1b4b, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Generate Your Free Kundali
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            Enter your birth details below to generate a complete birth chart.
            Discover your planetary positions, houses, and what they reveal about your personality.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* ── Form ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                position: 'sticky',
                top: 80,
                background: isDark ? alpha('#12122a', 0.9) : '#ffffff',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }} gutterBottom>
                  Birth Details
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Accurate time and location give the most precise results.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <TextField
                    label="Full Name"
                    placeholder="e.g. Arjun Sharma"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    {...register('name', { required: 'Please enter your name' })}
                  />
                  <TextField
                    type="date"
                    label="Date of Birth"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                    error={!!errors.dateOfBirth}
                    helperText={errors.dateOfBirth?.message}
                    {...register('dateOfBirth', { required: 'Date of birth is required' })}
                  />
                  <TextField
                    type="time"
                    label="Time of Birth"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                    helperText="Affects ascendant calculation. Approximate is fine."
                    {...register('timeOfBirth')}
                  />
                  <TextField
                    label="Place of Birth"
                    placeholder="e.g. Mumbai, India"
                    fullWidth
                    error={!!errors.location}
                    helperText={errors.location?.message || 'City and country'}
                    {...register('location', { required: 'Birth place is required' })}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={loading}
                    endIcon={loading ? <CircularProgress size={16} color="inherit" /> : <AutoAwesomeIcon />}
                    sx={{ mt: 1, py: 1.5 }}
                  >
                    {loading ? 'Generating…' : 'Generate Kundali'}
                  </Button>
                </Box>

                <Alert severity="info" sx={{ mt: 2.5, fontSize: '0.78rem' }} icon={false}>
                  <strong>Note:</strong> This is an educational tool using simplified calculations.
                  For precise Vedic astrology, consult a professional astrologer.
                </Alert>
              </CardContent>
            </Card>
          </Grid>

          {/* ── Results ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            {!result && !loading && (
              <Box
                sx={{
                  height: '100%',
                  minHeight: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  p: 4,
                  border: `2px dashed ${alpha(theme.palette.primary.main, 0.2)}`,
                  borderRadius: 4,
                  color: 'text.secondary',
                }}
              >
                <Typography sx={{ fontSize: 56, mb: 2 }}>🔮</Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Your Kundali Awaits
                </Typography>
                <Typography variant="body2">
                  Fill in your birth details on the left and click "Generate Kundali" to see your birth chart.
                </Typography>
              </Box>
            )}

            {result && (
              <Box>
                {/* ── Identity Card ── */}
                <Card
                  sx={{
                    mb: 3,
                    background: isDark
                      ? 'linear-gradient(135deg, #1a0a2e, #12122a)'
                      : 'linear-gradient(135deg, #ede9fe, #fdf2f8)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1.5 }}>
                      Birth Chart for
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 0.5, fontWeight: 800 }}>
                      {result.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                      {new Date(result.dateOfBirth).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'long', year: 'numeric',
                      })}
                      {result.timeOfBirth && ` · ${result.timeOfBirth}`}
                      {result.location && ` · ${result.location}`}
                    </Typography>

                    <Grid container spacing={2}>
                      {[
                        { label: 'Sun Sign', sign: result.sunSign, icon: '☉', desc: 'Core identity' },
                        { label: 'Moon Sign', sign: result.moonSign, icon: '☽', desc: 'Emotional self' },
                        { label: 'Ascendant', sign: result.ascendant, icon: '↑', desc: 'Social mask' },
                      ].map(({ label, sign, icon, desc }) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={label}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: 2,
                              textAlign: 'center',
                              background: alpha(theme.palette.background.paper, 0.7),
                              border: `1px solid ${alpha(sign.color, 0.25)}`,
                              borderRadius: 3,
                            }}
                          >
                            <Typography sx={{ fontSize: 28, mb: 0.5 }}>{sign.symbol}</Typography>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              {sign.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: alpha(ELEMENT_COLORS[sign.element] || '#7c3aed', 0.9),
                                fontWeight: 600,
                              }}
                            >
                              {icon} {label}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                              {desc}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>

                {/* ── Tabs ── */}
                <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, mb: 3 }}>
                  <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable" scrollButtons="auto">
                    <Tab label="Planets" />
                    <Tab label="Houses" />
                    <Tab label="Insights" />
                  </Tabs>
                </Box>

                {/* Planets Tab */}
                {tab === 0 && (
                  <Grid container spacing={2}>
                    {result.planets.map((p) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={p.planet}>
                        <PlanetCard planet={p} />
                      </Grid>
                    ))}
                  </Grid>
                )}

                {/* Houses Tab */}
                {tab === 1 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {result.houses.map((house) => (
                      <Card key={house.number}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                flexShrink: 0,
                              }}
                            >
                              {house.number}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', mb: 0.5 }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                  {house.theme}
                                </Typography>
                                <Chip
                                  label={`${house.signSymbol} ${house.sign}`}
                                  size="small"
                                  variant="outlined"
                                  sx={{ fontSize: '0.72rem' }}
                                />
                              </Box>
                              <Box sx={{ display: 'flex', gap: 0.5, mb: 1, flexWrap: 'wrap' }}>
                                {house.keywords.map((kw) => (
                                  <Chip
                                    key={kw}
                                    label={kw}
                                    size="small"
                                    sx={{
                                      fontSize: '0.65rem',
                                      height: 18,
                                      background: alpha(theme.palette.primary.main, 0.08),
                                      color: 'text.secondary',
                                    }}
                                  />
                                ))}
                              </Box>
                              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                                {house.interpretation}
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                )}

                {/* Insights Tab */}
                {tab === 2 && (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {[
                      { icon: <PersonIcon />, label: 'Personality', text: result.personalityInsight, color: theme.palette.primary.main },
                      { icon: <WorkIcon />, label: 'Career & Purpose', text: result.careerInsight, color: '#22c55e' },
                      { icon: <FavoriteIcon />, label: 'Relationships', text: result.relationshipInsight, color: '#ec4899' },
                    ].map(({ icon, label, text, color }) => (
                      <Card key={label}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                            <Box
                              sx={{
                                p: 0.8,
                                borderRadius: 2,
                                background: alpha(color, 0.1),
                                color,
                                display: 'flex',
                              }}
                            >
                              {icon}
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 700 }}>
                              {label}
                            </Typography>
                          </Box>
                          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            {text}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}

                    <Divider />

                    {/* Planet Strength Summary */}
                    <Grid container spacing={2}>
                      {[
                        { label: 'Strong Planets', planets: result.strongPlanets, color: '#22c55e' },
                        { label: 'Weak Planets', planets: result.weakPlanets, color: '#ef4444' },
                        { label: 'Retrograde', planets: result.retrogradePlanets, color: '#f59e0b' },
                      ].map(({ label, planets, color }) => (
                        <Grid size={{ xs: 12, sm: 4 }} key={label}>
                          <Card sx={{ height: '100%' }}>
                            <CardContent>
                              <Typography
                                variant="subtitle2"
                                sx={{ fontWeight: 700, color, mb: 1.5 }}
                              >
                                {label}
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {planets.length === 0 ? (
                                  <Typography variant="caption" color="text.secondary">None</Typography>
                                ) : (
                                  planets.map((p) => (
                                    <Chip
                                      key={p}
                                      label={p}
                                      size="small"
                                      sx={{
                                        background: alpha(color, 0.1),
                                        color,
                                        fontWeight: 600,
                                        fontSize: '0.7rem',
                                      }}
                                    />
                                  ))
                                )}
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
