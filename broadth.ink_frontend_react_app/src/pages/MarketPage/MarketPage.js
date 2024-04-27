 import logo from '../../assets/images/logo.png'
import logo_name from '../../assets/images/logo_name.png'
import ButtonComponent from '../../components/Common/Button.js';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs="auto">
             <img src={logo_name} width = {333} height = {76} alt="logo + name"></img>
        </Grid>
        <Grid item xs="auto" sx={{mt: 3}}>
            <ButtonComponent
              mode="0"
              text="Explore"
              onClick={() => console.log('Explore Clicked')}
              height="40px"
              width="200px"
              fontSize="16px"
              borderRadius="8px"
            />
        </Grid>
        <Grid item xs="auto" sx={{mt: 3}}>
          <ButtonComponent
              mode="1"
              text="Search Bar" 
              onClick={() => console.log('Search Clicked')}
              height="40px"
              width="500px"
              fontSize="16px"
              borderRadius="8px"
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
        </Grid>
        <Grid item xs="auto" sx={{mt: 3}}>
          <Link to="/demographics">
          <ButtonComponent
            mode="0"
            text="Join For Free"
            onClick={() => console.log('Join Clicked')}
            height="40px"
            width="200px"
            fontSize="16px"
            borderRadius="8px"
            />
          </Link>
        </Grid>
      </Grid>
      <Grid
      container
      direction="row"
      justifyContent="flex-start" 
      alignItems="center" 
      sx={{ ml: 15, mt: 15}}
      >
        <Grid item xs={5}> 
          <Grid
            container
            direction="column"
            spacing={2} 
          >
            <Grid item>
              <Typography sx={{ fontSize: 100, fontWeight: 'bold', fontFamily: 'Open Sans', lineHeight: '1.2' }}>
                Think <br /> Broader
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ fontSize: 20, fontFamily: 'Open Sans' }}>
                Start, switch, or advance your career with more than <br />6,800 courses, Professional Certificates, and degrees <br /> from world-class universities and companies.
              </Typography>
            </Grid>
            <Grid item>
              <ButtonComponent
                mode="0"
                text="Join For Free"
                onClick={() => console.log('Join Clicked')}
                height="40px"
                width="150px"
                fontSize="16px"
                borderRadius="8px"
                />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={logo}/>
        </Grid>
    </Grid>
    </Box>
  );
}