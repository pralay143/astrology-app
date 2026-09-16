import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Tooltip,
  alpha,
  useTheme,
} from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import type { PlanetPosition } from '../services/kundaliService';

interface PlanetCardProps {
  planet: PlanetPosition;
}

const STRENGTH_CONFIG = {
  Strong: { color: '#22c55e', label: 'Strong' },
  Neutral: { color: '#f59e0b', label: 'Neutral' },
  Weak: { color: '#ef4444', label: 'Weak' },
};

export default function PlanetCard({ planet }: PlanetCardProps) {
  const theme = useTheme();
  const strength = STRENGTH_CONFIG[planet.strength];

  return (
    <Card
      sx={{
        height: '100%',
        background:
          theme.palette.mode === 'dark'
            ? alpha('#12122a', 0.95)
            : '#ffffff',
      }}
    >
      <CardContent>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography
              sx={{
                fontSize: 32,
                lineHeight: 1,
                filter: `drop-shadow(0 0 8px ${alpha(theme.palette.primary.main, 0.5)})`,
              }}
            >
              {planet.symbol}
            </Typography>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {planet.planet}
                </Typography>
                {planet.isRetrograde && (
                  <Tooltip title="Retrograde — this planet's energy is turned inward">
                    <LoopIcon
                      sx={{ fontSize: 14, color: theme.palette.secondary.main }}
                    />
                  </Tooltip>
                )}
              </Box>
              <Typography variant="caption" color="text.secondary">
                {planet.signSymbol} {planet.sign} · House {planet.house} · {planet.degree}°
              </Typography>
            </Box>
          </Box>
          <Chip
            label={strength.label}
            size="small"
            sx={{
              backgroundColor: alpha(strength.color, 0.12),
              color: strength.color,
              fontWeight: 700,
              fontSize: '0.65rem',
              height: 22,
              flexShrink: 0,
            }}
          />
        </Box>

        {/* Retrograde badge */}
        {planet.isRetrograde && (
          <Chip
            icon={<LoopIcon sx={{ fontSize: 12 }} />}
            label="Retrograde"
            size="small"
            sx={{
              mb: 1.5,
              backgroundColor: alpha(theme.palette.secondary.main, 0.1),
              color: theme.palette.secondary.main,
              fontWeight: 500,
              fontSize: '0.7rem',
              height: 22,
            }}
          />
        )}

        {/* Interpretation */}
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
          {planet.interpretation}
        </Typography>
      </CardContent>
    </Card>
  );
}
