import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
  InputAdornment,
  alpha,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useMemo } from 'react';
import { BLOG_POSTS } from '../services/kundaliService';

const CATEGORIES = ['All', 'Foundations', 'Planets', 'Houses', 'Transits', 'Zodiac'];

export default function Blog() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

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
            Astrology Blog
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
            Articles on planets, houses, zodiac signs, and transits — explained through
            real-life patterns and psychology.
          </Typography>

          {/* Search */}
          <TextField
            placeholder="Search articles…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ maxWidth: 480, width: '100%' }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        {/* Category Filters */}
        <Box sx={{ display: 'flex', gap: 1, mb: 4, flexWrap: 'wrap' }}>
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              clickable
              onClick={() => setActiveCategory(cat)}
              variant={activeCategory === cat ? 'filled' : 'outlined'}
              color={activeCategory === cat ? 'primary' : 'default'}
              sx={{ fontWeight: activeCategory === cat ? 700 : 500 }}
            />
          ))}
        </Box>

        {/* Count */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {search && ` matching "${search}"`}
        </Typography>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <Box
            sx={{
              textAlign: 'center',
              py: 10,
              color: 'text.secondary',
            }}
          >
            <Typography sx={{ fontSize: 48, mb: 2 }}>🔍</Typography>
            <Typography variant="h6">No articles found</Typography>
            <Typography variant="body2">Try a different search or category</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((post, i) => (
              <Grid
                size={{ xs: 12, sm: i === 0 ? 12 : 6, md: i === 0 ? 8 : 4 }}
                key={post.id}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    {/* Meta */}
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap', alignItems: 'center' }}>
                      <Chip
                        label={post.category}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 600, fontSize: '0.72rem' }}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                        <AccessTimeIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">
                          {post.readTime} read
                        </Typography>
                      </Box>
                      <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          day: 'numeric', month: 'short', year: 'numeric',
                        })}
                      </Typography>
                    </Box>

                    {/* Title */}
                    <Typography
                      variant={i === 0 ? 'h5' : 'h6'}
                      gutterBottom
                      sx={{ fontWeight: 700, lineHeight: 1.35 }}
                    >
                      {post.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.75, flex: 1, mb: 2 }}
                    >
                      {post.excerpt}
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{
                            fontSize: '0.65rem',
                            height: 20,
                            borderColor: alpha(theme.palette.primary.main, 0.2),
                            color: 'text.secondary',
                          }}
                        />
                      ))}
                    </Box>

                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ alignSelf: 'flex-start', px: 0, fontWeight: 600 }}
                    >
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Newsletter CTA */}
        <Card
          sx={{
            mt: 8,
            p: 2,
            background: isDark
              ? 'linear-gradient(135deg, #1a0a2e, #12122a)'
              : 'linear-gradient(135deg, #ede9fe, #fdf2f8)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            textAlign: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700 }} gutterBottom>
              Go Deeper with Your Chart
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Generate your free Kundali and see how these planetary concepts apply specifically to you.
            </Typography>
            <Button
              component="a"
              href="/kundali"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              Generate Free Kundali
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
