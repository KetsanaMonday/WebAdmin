import * as React from 'react';
import Typography from '@mui/material/Typography';
import DataGrid from './datagrid'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

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





export default function Provice() {
  return (<>
  <Typography>Provice</Typography>
  <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Item sx={{ boxShadow: 3 }}>xs=8</Item>
        </Grid>
       
      </Grid>  
      <DataGrid />
    </Box>

  
  </>)
}
