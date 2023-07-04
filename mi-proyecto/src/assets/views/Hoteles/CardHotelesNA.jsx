import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { Grid, Paper } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import casino from './casino.jpg'

export default function BasicCard3({nombre, ubicacion, precio, img}) {
  const Color = ["#00aeef", "#00aeef", "#009bef", "#00d3ee"];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
            {nombre}
          </Typography>
          <Typography level="body2">{ubicacion}</Typography>
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: 'absolute', top: '1rem', right: '1rem' }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
            <img
              src= {casino} 
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid>
              <Typography level="body3">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                1234
              </Typography>
            </Grid>
            <Link to="/Reservar" style={{ textDecoration: 'none' }}>
              <Button
                variant="solid"
                size="sm"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ fontWeight: 600, bgcolor: Color[1] }}
              >
                Reservar
              </Button>
            </Link>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
