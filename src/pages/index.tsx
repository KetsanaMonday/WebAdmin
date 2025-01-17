import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function DashboardPage() {
  return (<>
  
  <Typography>Welcome to Dashboard!</Typography>
  <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item sx={{ boxShadow: 3 }}>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 3 }}>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{ boxShadow: 3 }}>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item sx={{ boxShadow: 3 }}>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
  
  </>)
  
}
