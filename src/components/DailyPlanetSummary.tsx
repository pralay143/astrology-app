import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  alpha,
  useTheme,
} from '@mui/material';
import { getDailyPlanets } from '../services/kundaliService';

const ENERGY_COLORS: Record<string, string> = {
  High: '#22c55e',
  Medium: '#f59e0b',
  Low: '#6b7280',
};

export default function DailyPlanetSummary() {
  const theme = useTheme();
  const planets = getDailyPlanets();
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Today's Planetary Energies
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {today}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {planets.map((p) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={p.name}>
            <Card
              sx={{
                height: '100%',
                background:
                  theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${alpha('#12122a', 0.9)}, ${alpha('#1e1b4b', 0.5)})`
                    : alpha(theme.palette.primary.main, 0.02),
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Typography
                      sx={{
                        fontSize: 28,
                        lineHeight: 1,
                        filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.4))',
                      }}
                    >
                      {p.symbol}
                    </Typography>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {p.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {p.signSymbol} {p.sign}
                      </Typography>
                    </Box>
                  </Box>
                  <Chip
                    label={p.energy}
                    size="small"
                    sx={{
                      backgroundColor: alpha(ENERGY_COLORS[p.energy], 0.15),
                      color: ENERGY_COLORS[p.energy],
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      height: 22,
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {p.message}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
