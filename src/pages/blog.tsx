import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Avatar, Chip, Stack } from '@mui/material';
import fm from 'front-matter';

import { FormControl, OutlinedInput, TextField, InputLabel, MenuItem, ListItemText, Checkbox } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Hero from '../sections/Heros';
import Logo from '../components/Logo';

import { GITHUB_ARTICLE } from '../libs/constant';

// Fonction utilitaire pour charger dynamiquement les articles markdown côté client
async function fetchArticlesFromGitHub() {
  const files = await fetch(GITHUB_ARTICLE).then(res => res.json());
  return Promise.all(
    files.map(async (file: any) => {
      const text = await fetch(file.download_url).then(res => res.text());
      const { attributes, body } = fm(text);
      return { ...(attributes || {}), body };
    })
  );
}

export default function Blog(props: { disableCustomTheme?: boolean }) {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    fetchArticlesFromGitHub().then(setBlogPosts);
  }, []);

  // Extraire toutes les catégories uniques pour le select
  const categories = Array.from(new Set(blogPosts.map(p => p.category).filter(Boolean)));

  // Filtrage combiné
  const filteredPosts = blogPosts.filter(post => {
    if (post.collected !== true) return false;
    // Mot-clé libre (dans titre, excerpt, body)
    const q = search.trim().toLowerCase();
    if (q && !(
      (post.title || '').toLowerCase().includes(q) ||
      (post.excerpt || '').toLowerCase().includes(q) ||
      (post.body || '').toLowerCase().includes(q)
    )) return false;
    // Catégorie
    if (category.length > 0 && !category.includes(post.category)) return false;
    // Plage de dates
    if (startDate && new Date(post.date) < new Date(startDate)) return false;
    if (endDate && new Date(post.date) > new Date(endDate)) return false;
    return true;
  });

  return (
    <Container>
        <Hero
            title='Blog'
            subtitle='Retrouvez ici mes articles, tutoriels et actualités autour de la programmation, des statistiques et de l’innovation numérique.'
            image={
            <Logo
                alt='Blog Logo'
                dimension={0.05625}
                src='/images/C841_fibonacci_plein_20251218.svg'
                strokeWidth={1000}
            />
            }
            ctaText=''
        />
        {/* Barre de filtres */}
        <FormControl sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mb: 4,
        }}>
            <TextField // recherche par mot-clé
                onChange={(e) => setSearch(e.target.value)}
                id="outlined-basic"
                label="Recherche"
                variant="outlined"
                value={search}
            />
            <Select // filtre par catégorie
                multiple
                value={category}
                onChange={(e) => {
                  const value = e.target.value;
                  setCategory(typeof value === 'string' ? value.split(',') : value);
                }}
                input={<OutlinedInput label="Tags" />}
                label="Tags"
                renderValue={(selected) => (selected as string[]).join('; ')}
                sx={{ minWidth: 150 }}
            >
                {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                    <Checkbox checked={category.indexOf(cat) > -1} />
                    <ListItemText primary={cat} />
                    </MenuItem>
                ))}
            </Select>
            {/* Filtre par plage de date */}
            <TextField
              type="date"
              label="Début"
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              sx={{ mx: 1, minWidth: 120 }}
            />
            <TextField
              type="date"
              label="Fin"
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              sx={{ mx: 1, minWidth: 120 }}
            />
        </FormControl>
      <Stack maxWidth="md" spacing={4} alignItems="center" mx="auto">
        {filteredPosts.map((post, idx) =>
          post && (
            <Card
              key={idx}
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                boxShadow: 2,
              }}
            >
              <CardMedia
                component='img'
                image={post.image}
                alt={post.title}
                sx={{
                  width: { xs: '100%', sm: 180 },
                  height: 180,
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Stack
                  direction='row'
                  spacing={2}
                  alignItems='center'
                  mb={1}
                >
                  <Typography variant='body2'>{post.date}</Typography>
                  <Chip label={post.category} size='small' color='primary' />
                </Stack>
                <Typography variant='h6' mb={1}>{post.title}</Typography>
                <Typography variant='body2' mb={2}>{post.excerpt}</Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                  <Avatar src={post.author.avatar} alt={post.author.name} />
                  <Box>
                    <Typography variant='body2' fontWeight={500}>{post.author.name}</Typography>
                    <Typography variant='caption'>{post.author.role}</Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          )
        )}
      </Stack>
    </Container>
  );
}
