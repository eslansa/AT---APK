/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  return (
    <Box sx={{ borderRadius: 1, backgroundColor: 'white', border: '1px solid grey', padding: '16px' }}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        <HomeOutlinedIcon/> 
        </Link>
        <Link underline="hover" color="inherit" href="/Paquetes">
          Paquetes
        </Link>
        <Typography color="text.primary"><PublicOutlinedIcon /></Typography>
      </Breadcrumbs>
    </Box>
  );
}
