// ── Types ─────────────────────────────────────────────────────────────────────

export interface ZodiacSign {
  name: string;
  symbol: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  modality: 'Cardinal' | 'Fixed' | 'Mutable';
  ruler: string;
  dates: string;
  traits: string[];
  color: string;
  description: string;
  strengths: string;
  challenges: string;
  career: string;
  relationships: string;
}

export interface PlanetInfo {
  name: string;
  symbol: string;
  represents: string;
  rules: string;
  positiveKeywords: string[];
  negativeKeywords: string[];
}

export interface PlanetPosition {
  planet: string;
  symbol: string;
  sign: string;
  signSymbol: string;
  house: number;
  degree: number;
  isRetrograde: boolean;
  strength: 'Strong' | 'Neutral' | 'Weak';
  interpretation: string;
}

export interface HouseData {
  number: number;
  sign: string;
  signSymbol: string;
  theme: string;
  rulingPlanet: string;
  interpretation: string;
  keywords: string[];
}

export interface KundaliResult {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  location: string;
  sunSign: ZodiacSign;
  moonSign: ZodiacSign;
  ascendant: ZodiacSign;
  planets: PlanetPosition[];
  houses: HouseData[];
  personalityInsight: string;
  careerInsight: string;
  relationshipInsight: string;
  strongPlanets: string[];
  weakPlanets: string[];
  retrogradePlanets: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string;
}

export interface DailyPlanet {
  name: string;
  symbol: string;
  sign: string;
  signSymbol: string;
  message: string;
  energy: 'High' | 'Medium' | 'Low';
}

// ── Static Data ────────────────────────────────────────────────────────────────

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    name: 'Aries', symbol: '♈', element: 'Fire', modality: 'Cardinal',
    ruler: 'Mars', dates: 'Mar 21 – Apr 19',
    traits: ['Bold', 'Pioneering', 'Energetic', 'Competitive'],
    color: '#ef4444',
    description: 'Aries is the first sign of the zodiac, embodying new beginnings, initiative, and raw energy. Aries individuals are natural trailblazers who move headfirst into challenges.',
    strengths: 'Courageous leadership, initiative, enthusiasm, and directness.',
    challenges: 'Impatience, impulsiveness, and difficulty finishing what was started.',
    career: 'Entrepreneurship, sports, emergency services, military, or any role requiring fast decisions.',
    relationships: 'Passionate and direct. Loves the pursuit but needs a partner who can match their energy.',
  },
  {
    name: 'Taurus', symbol: '♉', element: 'Earth', modality: 'Fixed',
    ruler: 'Venus', dates: 'Apr 20 – May 20',
    traits: ['Stable', 'Sensual', 'Patient', 'Determined'],
    color: '#84cc16',
    description: 'Taurus is the builder of the zodiac — grounded, practical, and pleasure-seeking. They create stability through persistence and a strong connection to the material world.',
    strengths: 'Reliability, patience, sensual awareness, and a strong work ethic.',
    challenges: 'Stubbornness, resistance to change, and materialism.',
    career: 'Finance, real estate, culinary arts, design, agriculture, or banking.',
    relationships: 'Loyal and steady. Seeks security and physical affection in partnerships.',
  },
  {
    name: 'Gemini', symbol: '♊', element: 'Air', modality: 'Mutable',
    ruler: 'Mercury', dates: 'May 21 – Jun 20',
    traits: ['Curious', 'Adaptable', 'Witty', 'Communicative'],
    color: '#f59e0b',
    description: 'Gemini is the communicator of the zodiac — curious, quick-witted, and always hungry for new information. They can see multiple sides of any situation.',
    strengths: 'Versatility, communication skills, intellect, and social adaptability.',
    challenges: 'Inconsistency, superficiality, and scattering energy across too many interests.',
    career: 'Journalism, teaching, sales, marketing, writing, or social media.',
    relationships: 'Needs mental stimulation and variety. Bores easily but is endlessly charming.',
  },
  {
    name: 'Cancer', symbol: '♋', element: 'Water', modality: 'Cardinal',
    ruler: 'Moon', dates: 'Jun 21 – Jul 22',
    traits: ['Nurturing', 'Intuitive', 'Loyal', 'Emotional'],
    color: '#06b6d4',
    description: 'Cancer is the nurturer of the zodiac — deeply intuitive, emotionally intelligent, and fiercely protective of loved ones. They lead with the heart.',
    strengths: 'Empathy, intuition, loyalty, and emotional depth.',
    challenges: 'Moodiness, over-sensitivity, and difficulty letting go of the past.',
    career: 'Healthcare, counseling, education, real estate, or hospitality.',
    relationships: 'Devoted and caring. Needs emotional security and a deep sense of belonging.',
  },
  {
    name: 'Leo', symbol: '♌', element: 'Fire', modality: 'Fixed',
    ruler: 'Sun', dates: 'Jul 23 – Aug 22',
    traits: ['Charismatic', 'Creative', 'Generous', 'Confident'],
    color: '#f97316',
    description: 'Leo is the performer of the zodiac — magnetic, generous, and driven by a need to shine. At their best, Leos inspire others through their warmth and creative expression.',
    strengths: 'Charisma, leadership, creativity, and generosity of spirit.',
    challenges: 'Ego, need for validation, and stubbornness when challenged.',
    career: 'Entertainment, politics, executive leadership, teaching, or fashion.',
    relationships: 'Passionate and loyal. Needs admiration and a stage to be themselves.',
  },
  {
    name: 'Virgo', symbol: '♍', element: 'Earth', modality: 'Mutable',
    ruler: 'Mercury', dates: 'Aug 23 – Sep 22',
    traits: ['Analytical', 'Helpful', 'Precise', 'Practical'],
    color: '#10b981',
    description: 'Virgo is the analyst of the zodiac — methodical, helpful, and always seeking to improve. They find meaning in service and have an extraordinary eye for detail.',
    strengths: 'Precision, reliability, work ethic, and genuine desire to help.',
    challenges: 'Perfectionism, over-criticism (of self and others), and anxiety.',
    career: 'Healthcare, data analysis, editing, nutrition, accounting, or engineering.',
    relationships: 'Devoted through acts of service. Needs intellectual connection and order.',
  },
  {
    name: 'Libra', symbol: '♎', element: 'Air', modality: 'Cardinal',
    ruler: 'Venus', dates: 'Sep 23 – Oct 22',
    traits: ['Diplomatic', 'Balanced', 'Social', 'Aesthetic'],
    color: '#ec4899',
    description: 'Libra is the diplomat of the zodiac — charming, fair-minded, and driven by a deep need for harmony. They have a natural gift for seeing all sides of an issue.',
    strengths: 'Diplomacy, social grace, sense of justice, and aesthetic sensibility.',
    challenges: 'Indecisiveness, people-pleasing, and avoiding conflict at all costs.',
    career: 'Law, diplomacy, design, public relations, counseling, or the arts.',
    relationships: 'Partnership-oriented and romantic. Seeks equality and beauty in love.',
  },
  {
    name: 'Scorpio', symbol: '♏', element: 'Water', modality: 'Fixed',
    ruler: 'Mars/Pluto', dates: 'Oct 23 – Nov 21',
    traits: ['Intense', 'Perceptive', 'Transformative', 'Magnetic'],
    color: '#8b5cf6',
    description: 'Scorpio is the transformer of the zodiac — deeply perceptive, psychologically intense, and drawn to uncovering hidden truths. They experience life at full depth.',
    strengths: 'Psychological insight, resilience, loyalty, and transformative power.',
    challenges: 'Jealousy, obsessiveness, and holding onto resentment.',
    career: 'Psychology, research, investigations, medicine, finance, or occult studies.',
    relationships: 'All-or-nothing in love. Seeks deep soul-level connection and absolute loyalty.',
  },
  {
    name: 'Sagittarius', symbol: '♐', element: 'Fire', modality: 'Mutable',
    ruler: 'Jupiter', dates: 'Nov 22 – Dec 21',
    traits: ['Optimistic', 'Adventurous', 'Philosophical', 'Free-spirited'],
    color: '#3b82f6',
    description: 'Sagittarius is the explorer of the zodiac — expansive, optimistic, and always searching for deeper meaning. They are natural philosophers driven by a love of freedom.',
    strengths: 'Optimism, open-mindedness, wisdom, and adventurous spirit.',
    challenges: 'Restlessness, bluntness, and difficulty with commitment.',
    career: 'Travel, academia, law, spirituality, publishing, or international business.',
    relationships: 'Freedom-loving and enthusiastic. Needs a partner who supports growth and adventure.',
  },
  {
    name: 'Capricorn', symbol: '♑', element: 'Earth', modality: 'Cardinal',
    ruler: 'Saturn', dates: 'Dec 22 – Jan 19',
    traits: ['Disciplined', 'Ambitious', 'Structured', 'Responsible'],
    color: '#6b7280',
    description: 'Capricorn is the achiever of the zodiac — strategic, disciplined, and quietly powerful. They build empires through patience and a long-term vision.',
    strengths: 'Ambition, discipline, responsibility, and strategic thinking.',
    challenges: 'Workaholism, emotional coldness, and excessive pessimism.',
    career: 'Business, government, finance, architecture, or corporate management.',
    relationships: 'Cautious but deeply committed. Expresses love through provision and loyalty.',
  },
  {
    name: 'Aquarius', symbol: '♒', element: 'Air', modality: 'Fixed',
    ruler: 'Saturn/Uranus', dates: 'Jan 20 – Feb 18',
    traits: ['Innovative', 'Humanitarian', 'Independent', 'Visionary'],
    color: '#14b8a6',
    description: 'Aquarius is the visionary of the zodiac — forward-thinking, humanitarian, and fiercely independent. They are natural reformers who see the world as it could be.',
    strengths: 'Innovation, humanitarian instincts, intellect, and originality.',
    challenges: 'Emotional detachment, rebelliousness, and aloofness.',
    career: 'Technology, social activism, science, humanitarian work, or media.',
    relationships: 'Needs intellectual compatibility and personal freedom. Values friendship in love.',
  },
  {
    name: 'Pisces', symbol: '♓', element: 'Water', modality: 'Mutable',
    ruler: 'Jupiter/Neptune', dates: 'Feb 19 – Mar 20',
    traits: ['Empathetic', 'Intuitive', 'Creative', 'Compassionate'],
    color: '#a855f7',
    description: 'Pisces is the dreamer of the zodiac — deeply empathetic, spiritually attuned, and boundlessly creative. They experience the world through feeling and imagination.',
    strengths: 'Compassion, creativity, intuition, and spiritual sensitivity.',
    challenges: 'Escapism, boundary issues, and over-idealization of people.',
    career: 'Arts, music, healing professions, film, spirituality, or social work.',
    relationships: 'Romantic and self-sacrificing. Seeks a deep spiritual and emotional union.',
  },
];

export const PLANETS: PlanetInfo[] = [
  {
    name: 'Sun', symbol: '☉',
    represents: 'Identity, ego, life purpose, vitality',
    rules: 'Leo',
    positiveKeywords: ['Confident', 'Purposeful', 'Creative', 'Vital'],
    negativeKeywords: ['Arrogant', 'Domineering', 'Self-absorbed'],
  },
  {
    name: 'Moon', symbol: '☽',
    represents: 'Emotions, instincts, habits, the subconscious',
    rules: 'Cancer',
    positiveKeywords: ['Intuitive', 'Nurturing', 'Receptive', 'Empathetic'],
    negativeKeywords: ['Moody', 'Clingy', 'Over-sensitive'],
  },
  {
    name: 'Mercury', symbol: '☿',
    represents: 'Communication, thought patterns, learning style',
    rules: 'Gemini & Virgo',
    positiveKeywords: ['Analytical', 'Articulate', 'Quick-thinking', 'Adaptable'],
    negativeKeywords: ['Anxious', 'Scattered', 'Dishonest'],
  },
  {
    name: 'Venus', symbol: '♀',
    represents: 'Love, beauty, values, attraction, pleasure',
    rules: 'Taurus & Libra',
    positiveKeywords: ['Loving', 'Artistic', 'Harmonious', 'Charming'],
    negativeKeywords: ['Indulgent', 'Vain', 'Passive'],
  },
  {
    name: 'Mars', symbol: '♂',
    represents: 'Drive, ambition, passion, aggression, action',
    rules: 'Aries',
    positiveKeywords: ['Motivated', 'Courageous', 'Passionate', 'Direct'],
    negativeKeywords: ['Aggressive', 'Impulsive', 'Controlling'],
  },
  {
    name: 'Jupiter', symbol: '♃',
    represents: 'Expansion, wisdom, luck, higher education, beliefs',
    rules: 'Sagittarius',
    positiveKeywords: ['Generous', 'Optimistic', 'Wise', 'Fortunate'],
    negativeKeywords: ['Over-indulgent', 'Excessive', 'Preachy'],
  },
  {
    name: 'Saturn', symbol: '♄',
    represents: 'Discipline, karma, restriction, structure, long-term growth',
    rules: 'Capricorn',
    positiveKeywords: ['Disciplined', 'Responsible', 'Enduring', 'Structured'],
    negativeKeywords: ['Restrictive', 'Cold', 'Pessimistic'],
  },
  {
    name: 'Rahu', symbol: '☊',
    represents: "Soul's desire, obsessions, karmic direction, future growth",
    rules: 'North Node (not a physical planet)',
    positiveKeywords: ['Ambitious', 'Driven', 'Unconventional', 'Bold'],
    negativeKeywords: ['Obsessive', 'Deceptive', 'Manipulative'],
  },
  {
    name: 'Ketu', symbol: '☋',
    represents: 'Past karma, spirituality, detachment, liberation',
    rules: 'South Node (not a physical planet)',
    positiveKeywords: ['Spiritual', 'Detached', 'Wise', 'Intuitive'],
    negativeKeywords: ['Isolated', 'Confused', 'Self-destructive'],
  },
];

export const HOUSE_THEMES = [
  { theme: 'Self & Identity', keywords: ['Personality', 'Appearance', 'First impressions'] },
  { theme: 'Money & Values', keywords: ['Income', 'Possessions', 'Self-worth'] },
  { theme: 'Communication', keywords: ['Siblings', 'Short travel', 'Learning'] },
  { theme: 'Home & Family', keywords: ['Roots', 'Parents', 'Emotional foundation'] },
  { theme: 'Creativity & Romance', keywords: ['Children', 'Hobbies', 'Self-expression'] },
  { theme: 'Health & Service', keywords: ['Daily routines', 'Work environment', 'Wellness'] },
  { theme: 'Partnerships', keywords: ['Marriage', 'Business partners', 'Open enemies'] },
  { theme: 'Transformation', keywords: ['Death & rebirth', 'Shared resources', 'Sexuality'] },
  { theme: 'Philosophy & Travel', keywords: ['Higher education', 'Foreign lands', 'Beliefs'] },
  { theme: 'Career & Legacy', keywords: ['Public image', 'Authority', 'Ambitions'] },
  { theme: 'Community & Ideals', keywords: ['Friends', 'Groups', 'Hopes & wishes'] },
  { theme: 'Spirituality & Secrets', keywords: ['Hidden enemies', 'Subconscious', 'Isolation'] },
];

// ── Utility Functions ──────────────────────────────────────────────────────────

function hashCode(str: string): number {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) ^ str.charCodeAt(i);
  }
  return Math.abs(hash);
}

function getSunSignIndex(dateStr: string): number {
  const d = new Date(dateStr);
  const m = d.getMonth() + 1;
  const day = d.getDate();
  if ((m === 3 && day >= 21) || (m === 4 && day <= 19)) return 0;
  if ((m === 4 && day >= 20) || (m === 5 && day <= 20)) return 1;
  if ((m === 5 && day >= 21) || (m === 6 && day <= 20)) return 2;
  if ((m === 6 && day >= 21) || (m === 7 && day <= 22)) return 3;
  if ((m === 7 && day >= 23) || (m === 8 && day <= 22)) return 4;
  if ((m === 8 && day >= 23) || (m === 9 && day <= 22)) return 5;
  if ((m === 9 && day >= 23) || (m === 10 && day <= 22)) return 6;
  if ((m === 10 && day >= 23) || (m === 11 && day <= 21)) return 7;
  if ((m === 11 && day >= 22) || (m === 12 && day <= 21)) return 8;
  if ((m === 12 && day >= 22) || (m === 1 && day <= 19)) return 9;
  if ((m === 1 && day >= 20) || (m === 2 && day <= 18)) return 10;
  return 11;
}

function getAscendantIndex(timeStr: string): number {
  if (!timeStr) return 0;
  const [h, min] = timeStr.split(':').map(Number);
  const totalMin = (h || 0) * 60 + (min || 0);
  return Math.floor(totalMin / 120) % 12;
}

const PLANET_INTERPRETATIONS: Record<string, Record<string, string>> = {
  Sun: {
    Aries: 'Your identity is powered by initiative. You shine brightest when leading and taking action.',
    Taurus: 'Your core self is grounded and persistent. You build your identity through tangible achievements.',
    Gemini: 'Your identity is formed through ideas and communication. You shine when sharing knowledge.',
    Cancer: 'Your sense of self is deeply tied to family and emotional security.',
    Leo: 'You are in your natural home — confident, creative, and born to express yourself.',
    Virgo: 'Your identity is built on service and precision. You find purpose in being useful.',
    Libra: 'Your core self is shaped by relationships and balance. You shine in partnership.',
    Scorpio: 'Your identity is deep and transformative. You find yourself through intense experiences.',
    Sagittarius: 'Your self is shaped by adventure and philosophy. You need freedom to be who you are.',
    Capricorn: 'Your identity is built through achievement and structure. You are quietly ambitious.',
    Aquarius: 'Your core self is unconventional and visionary. You shine when innovating.',
    Pisces: 'Your identity is fluid and spiritually attuned. You find yourself through creativity and compassion.',
  },
  Moon: {
    Aries: 'Your emotional needs are met through action and independence. You feel best when moving forward.',
    Taurus: 'You need physical comfort and stability to feel emotionally secure. Routine is soothing.',
    Gemini: 'Mental stimulation and variety calm your emotions. Talking through feelings helps.',
    Cancer: 'Your emotions are deep and nurturing. Home and family are your emotional anchors.',
    Leo: 'You need acknowledgment and creative expression to feel emotionally whole.',
    Virgo: 'You feel secure when organized and useful. Overthinking is your emotional pattern.',
    Libra: 'You need harmony and companionship to feel balanced. Conflict is deeply unsettling.',
    Scorpio: 'Your emotional world is intense and private. You feel deeply but share carefully.',
    Sagittarius: 'Freedom and optimism are your emotional fuel. You bounce back quickly from setbacks.',
    Capricorn: 'You process emotions privately and need achievement to feel secure.',
    Aquarius: 'You need intellectual connection and independence. Crowds can drain you.',
    Pisces: 'Your emotions are boundless and empathic. You absorb others\' feelings easily.',
  },
};

function getPlanetInterpretation(planet: string, sign: string): string {
  return (
    PLANET_INTERPRETATIONS[planet]?.[sign] ||
    `${planet} in ${sign} influences how you express ${PLANETS.find((p) => p.name === planet)?.represents?.split(',')[0].toLowerCase() || 'this energy'}.`
  );
}

// ── Main Generator ─────────────────────────────────────────────────────────────

export function generateKundali(
  name: string,
  dateOfBirth: string,
  timeOfBirth: string,
  location: string
): KundaliResult {
  const seed = hashCode(`${name}${dateOfBirth}${timeOfBirth}${location}`);

  const sunIdx = getSunSignIndex(dateOfBirth);
  const moonIdx = (sunIdx + (seed % 5) + 2) % 12;
  const ascIdx = getAscendantIndex(timeOfBirth);

  const sunSign = ZODIAC_SIGNS[sunIdx];
  const moonSign = ZODIAC_SIGNS[moonIdx];
  const ascendant = ZODIAC_SIGNS[ascIdx];

  // Distribute planets across signs and houses
  const planets: PlanetPosition[] = PLANETS.map((p, i) => {
    const signIdx = (sunIdx + i * 3 + (seed % (i + 2))) % 12;
    const house = ((i * 2 + (seed % 3)) % 12) + 1;
    const degree = (seed % 30) + i;
    const isRetro = i >= 6 && (seed % (i + 2)) % 3 === 0;
    const strength: 'Strong' | 'Neutral' | 'Weak' =
      i <= 2 ? 'Strong' : i <= 5 ? 'Neutral' : 'Weak';
    return {
      planet: p.name,
      symbol: p.symbol,
      sign: ZODIAC_SIGNS[signIdx].name,
      signSymbol: ZODIAC_SIGNS[signIdx].symbol,
      house,
      degree: degree % 30,
      isRetrograde: isRetro,
      strength,
      interpretation: getPlanetInterpretation(p.name, ZODIAC_SIGNS[signIdx].name),
    };
  });

  // Generate 12 houses
  const houses: HouseData[] = HOUSE_THEMES.map((h, i) => {
    const signIdx = (ascIdx + i) % 12;
    const sign = ZODIAC_SIGNS[signIdx];
    return {
      number: i + 1,
      sign: sign.name,
      signSymbol: sign.symbol,
      theme: h.theme,
      rulingPlanet: sign.ruler,
      interpretation: `With ${sign.name} ruling your ${i + 1}${
        ['st', 'nd', 'rd'][i] || 'th'
      } house of ${h.theme.toLowerCase()}, you approach this life area with ${sign.traits[0].toLowerCase()} energy. ${sign.description.split('.')[0]}.`,
      keywords: h.keywords,
    };
  });

  const strongPlanets = planets.filter((p) => p.strength === 'Strong').map((p) => p.planet);
  const weakPlanets = planets.filter((p) => p.strength === 'Weak').map((p) => p.planet);
  const retrogradePlanets = planets.filter((p) => p.isRetrograde).map((p) => p.planet);

  return {
    name,
    dateOfBirth,
    timeOfBirth,
    location,
    sunSign,
    moonSign,
    ascendant,
    planets,
    houses,
    personalityInsight: `As a ${sunSign.name} sun with a ${moonSign.name} moon, your outer confidence and inner emotional needs create a distinctive blend. ${sunSign.strengths} While publicly you project ${sunSign.traits[0].toLowerCase()} energy, privately you seek ${moonSign.traits[0].toLowerCase()} connection.`,
    careerInsight: `Your ${sunSign.name} drive combined with a ${ascendant.name} ascendant makes you appear ${ascendant.traits[0].toLowerCase()} to the world. ${sunSign.career}`,
    relationshipInsight: `In relationships, your ${moonSign.name} moon means ${moonSign.relationships} Your ${sunSign.name} sun adds ${sunSign.traits[1].toLowerCase()} energy to how you connect.`,
    strongPlanets,
    weakPlanets,
    retrogradePlanets,
  };
}

// ── Daily Planets ──────────────────────────────────────────────────────────────

export function getDailyPlanets(): DailyPlanet[] {
  // Based on today's date (April 15, 2026) — mock ephemeris
  return [
    { name: 'Sun', symbol: '☉', sign: 'Aries', signSymbol: '♈', message: 'Solar energy in Aries ignites drive and initiative. Act boldly on new ideas today.', energy: 'High' },
    { name: 'Moon', symbol: '☽', sign: 'Libra', signSymbol: '♎', message: 'Moon in Libra calls for balance and harmony. A good day for partnerships and negotiations.', energy: 'Medium' },
    { name: 'Mercury', symbol: '☿', sign: 'Aries', signSymbol: '♈', message: 'Mercury in Aries speeds up thinking. Communicate directly but watch for hasty conclusions.', energy: 'High' },
    { name: 'Venus', symbol: '♀', sign: 'Pisces', signSymbol: '♓', message: 'Venus in Pisces deepens compassion. Romantic gestures carry extra emotional weight now.', energy: 'Medium' },
    { name: 'Mars', symbol: '♂', sign: 'Gemini', signSymbol: '♊', message: 'Mars in Gemini scatters energy across many tasks. Focus is your biggest tool today.', energy: 'Medium' },
    { name: 'Jupiter', symbol: '♃', sign: 'Taurus', signSymbol: '♉', message: 'Jupiter expands material opportunities. Financial planning done now yields long-term returns.', energy: 'High' },
  ];
}

// ── Blog Posts ─────────────────────────────────────────────────────────────────

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'What Is Astrology? A Pattern-Based Perspective',
    excerpt: 'Astrology is not about fate or superstition — it is a symbolic language that maps how planetary cycles correlate with human behaviour patterns.',
    category: 'Foundations',
    readTime: '5 min',
    date: '2026-04-10',
    tags: ['Basics', 'Science', 'Patterns'],
    content: 'Modern astrology is best understood as a symbolic system that correlates astronomical cycles with observable human behavioural patterns. Just as tides are influenced by the Moon, human emotional rhythms show measurable patterns relative to planetary movements. Rather than claiming planets "cause" events, astrology maps symbolic correspondences — a tool for self-reflection, not fortune-telling.',
  },
  {
    id: 2,
    title: 'The Sun Sign: Your Core Identity Engine',
    excerpt: 'Your Sun sign represents the central theme of your life — how you naturally project yourself and what makes you feel most alive.',
    category: 'Planets',
    readTime: '6 min',
    date: '2026-04-08',
    tags: ['Sun', 'Identity', 'Zodiac'],
    content: 'The Sun in your birth chart is the engine of your identity. Unlike the Moon (which governs your private emotional world) or the Ascendant (your social mask), the Sun shows what you are fundamentally trying to become. A Leo Sun does not mean you are always the center of attention — it means you are driven to develop warmth, creativity, and authentic self-expression. A Capricorn Sun is building toward mastery and legacy.',
  },
  {
    id: 3,
    title: 'The Moon Sign: Your Emotional Blueprint',
    excerpt: 'While your Sun sign shapes your public identity, the Moon sign reveals how you process emotions and what you need to feel safe.',
    category: 'Planets',
    readTime: '7 min',
    date: '2026-04-05',
    tags: ['Moon', 'Emotions', 'Psychology'],
    content: 'Your Moon sign is arguably the most important factor for understanding emotional patterns. It describes your default emotional responses, childhood conditioning, and what makes you feel psychologically safe. A Scorpio Moon person processes emotions deeply and privately — they need complete trust before vulnerability. A Sagittarius Moon needs freedom and optimism to feel stable. Understanding your Moon sign is one of the most practical tools in self-understanding.',
  },
  {
    id: 4,
    title: 'Saturn Return: Why Your Late 20s Feel So Intense',
    excerpt: 'Around age 27–30, Saturn returns to the position it occupied when you were born — triggering a major life audit that reshapes your foundations.',
    category: 'Transits',
    readTime: '8 min',
    date: '2026-04-02',
    tags: ['Saturn', 'Transits', 'Life stages'],
    content: 'Saturn takes approximately 29.5 years to complete one orbit of the Sun. When it returns to its natal position — typically between ages 27 and 30 — it acts like a cosmic accountability check. This is when careers built on external pressure rather than genuine calling tend to collapse. Relationships that lack solid foundations face restructuring. The Saturn Return is not a punishment — it is an invitation to build your life on what is actually true for you.',
  },
  {
    id: 5,
    title: 'The 12 Houses: Life\'s Different Arenas',
    excerpt: 'The 12 astrological houses represent specific life areas — from career to relationships to spirituality. The sign on each house cusp reveals your approach to that arena.',
    category: 'Houses',
    readTime: '10 min',
    date: '2026-03-28',
    tags: ['Houses', 'Life areas', 'Interpretation'],
    content: 'In astrology, the horoscope wheel is divided into 12 sections called houses, each representing a specific domain of life experience. The 1st house governs identity, the 7th governs partnerships, the 10th governs career. The sign that sits on the cusp of each house reveals the energy you bring to that life area. Planets inside a house add further texture — Mars in the 10th house indicates career-driven ambition; Venus in the 7th shows someone who deeply values partnership.',
  },
  {
    id: 6,
    title: 'Mercury Retrograde: What Actually Happens?',
    excerpt: 'Mercury retrograde is one of astrology\'s most discussed phenomena. Here\'s what the astronomy means and why communication tends to get complicated.',
    category: 'Planets',
    readTime: '5 min',
    date: '2026-03-25',
    tags: ['Mercury', 'Retrograde', 'Communication'],
    content: 'Mercury retrograde is an optical illusion: Mercury does not actually reverse direction, but from Earth\'s vantage point it appears to move backwards against the star background. Astrologically, retrograde planets are said to function "inwardly" — Mercury retrograde corresponds with revisiting, reviewing, and reconsidering communication patterns. Practically, this period favors editing, reflecting, and finishing incomplete projects rather than launching new initiatives.',
  },
  {
    id: 7,
    title: 'Venus Placement: How You Experience Love',
    excerpt: 'Venus in your birth chart shapes your relationship values, aesthetic sensibility, and what you find genuinely attractive in a partner.',
    category: 'Planets',
    readTime: '6 min',
    date: '2026-03-20',
    tags: ['Venus', 'Relationships', 'Love'],
    content: 'Venus does not just rule romance — it rules everything you value, find beautiful, and want to attract. Venus in Aries loves the excitement of pursuit. Venus in Taurus craves sensory pleasure and loyalty. Venus in Gemini needs mental stimulation. Venus in Scorpio wants depth and intensity. Understanding your Venus placement explains not just who you are attracted to, but why certain relationship dynamics feel satisfying while others leave you depleted.',
  },
  {
    id: 8,
    title: 'Mars in Your Chart: Your Drive and Anger Style',
    excerpt: 'Mars reveals how you pursue goals, handle conflict, and channel anger — understanding it transforms how you use your ambition.',
    category: 'Planets',
    readTime: '6 min',
    date: '2026-03-15',
    tags: ['Mars', 'Ambition', 'Anger'],
    content: 'Mars is your action planet — it shows how you get what you want and how you respond when challenged. Mars in Cancer pursues goals indirectly, taking two steps forward and one back, retreating when threatened. Mars in Capricorn is calculated, patient, and utterly relentless. Mars in Aquarius rebels against convention as its main motivational strategy. Understanding your Mars sign turns your ambition from reactive fuel into a consciously directed force.',
  },
];
