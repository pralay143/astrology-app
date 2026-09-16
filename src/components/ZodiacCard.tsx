import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  alpha,
  useTheme,
} from '@mui/material';
import type { ZodiacSign } from '../services/kundaliService';

interface ZodiacCardProps {
  sign: ZodiacSign;
  compact?: boolean;
}

const ELEMENT_COLORS: Record<string, string> = {
  Fire: '#ef4444',
  Earth: '#84cc16',
  Air: '#3b82f6',
  Water: '#06b6d4',
};

export default function ZodiacCard({ sign, compact = false }: ZodiacCardProps) {
  const theme = useTheme();
  const elementColor = ELEMENT_COLORS[sign.element];

  if (compact) {
    return (
      <Card
        sx={{
          cursor: 'default',
          background:
            theme.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${alpha('#12122a', 0.95)}, ${alpha(sign.color, 0.08)})`
              : `linear-gradient(135deg, #ffffff, ${alpha(sign.color, 0.05)})`,
          border: `1px solid ${alpha(sign.color, 0.2)}`,
        }}
      >
        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography
              sx={{ fontSize: 32, lineHeight: 1, filter: `drop-shadow(0 0 6px ${alpha(sign.color, 0.5)})` }}
            >
              {sign.symbol}
            </Typography>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }} noWrap>
                {sign.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {sign.dates}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 0.5, mt: 1.5, flexWrap: 'wrap' }}>
            <Chip
              label={sign.element}
              size="small"
              sx={{
                backgroundColor: alpha(elementColor, 0.12),
                color: elementColor,
                fontWeight: 600,
                fontSize: '0.65rem',
                height: 20,
              }}
            />
            <Chip
              label={sign.modality}
              size="small"
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                fontWeight: 500,
                fontSize: '0.65rem',
                height: 20,
              }}
            />
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        height: '100%',
        background:
          theme.palette.mode === 'dark'
            ? `linear-gradient(135deg, ${alpha('#12122a', 0.98)}, ${alpha(sign.color, 0.06)})`
            : `linear-gradient(135deg, #ffffff, ${alpha(sign.color, 0.04)})`,
        border: `1px solid ${alpha(sign.color, 0.2)}`,
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Typography
            sx={{
              fontSize: 44,
              lineHeight: 1,
              filter: `drop-shadow(0 0 10px ${alpha(sign.color, 0.6)})`,
            }}
          >
            {sign.symbol}
          </Typography>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {sign.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {sign.dates} · ♁ {sign.ruler}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 0.5, mb: 2, flexWrap: 'wrap' }}>
          <Chip
            label={sign.element}
            size="small"
            sx={{
              backgroundColor: alpha(elementColor, 0.12),
              color: elementColor,
              fontWeight: 600,
            }}
          />
          <Chip
            label={sign.modality}
            size="small"
            sx={{
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.main,
              fontWeight: 500,
            }}
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
          {sign.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
          {sign.traits.map((trait) => (
            <Chip
              key={trait}
              label={trait}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.7rem',
                borderColor: alpha(sign.color, 0.3),
                color: 'text.secondary',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
