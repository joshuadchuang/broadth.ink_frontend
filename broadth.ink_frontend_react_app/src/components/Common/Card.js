
import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material-next/Chip';
import Stack from '@mui/material/Stack';

export default function ActionAreaCard() {
  return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://htmlcolorcodes.com/assets/images/colors/pastel-purple-color-solid-background-1920x1080.png"
            alt="book"
          />
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Chip label="Python" size="medium" variant="filled"/>
              <Chip label="CSS" size="medium" variant="filled"/>
              <Chip label="JS" size="medium" variant="filled"/>
            </Stack>
            <Typography gutterBottom variant="h5" component="div">
              Course Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Course Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae euismod elit. Maecenas auctor purus at est semper cursus
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
