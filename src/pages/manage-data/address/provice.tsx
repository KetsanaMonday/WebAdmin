import * as React from 'react';
import Typography from '@mui/material/Typography';
import { DataGrid, GridToolbar, GridToolbarExport,
   GridToolbarContainer,
  GridCellEditStopReasons
  ,GridActionsCellItem} from '@mui/x-data-grid';
  import Button from '@mui/material/Button';
  import  moment from 'moment';  
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import instance from '../../api/Url.js';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import { green ,red} from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import API from '../../api/Url.js';
import axios from 'axios';
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

  
const [data,dataSet]=React.useState([]);


React.useEffect(()=> {

axios.get(`${API}`+"/Provice/read").then(res => {
  dataSet(res);
  console.log(res);

}).catch(err=> console.log(err));

//    fetch(`${API}`+"/Provice/read",{
//     method:'GET',
// headers: {
//   'Content-Type': 'application/json'
// },
// redirect: 'follow'

//    }).then(res => 
//      res.json()
//    ).then(result=>{
//      dataSet(result.data);
  
//   }).catch(err=> console.log(err))

  

},[data]);

const newData = data.map((item, index) => {

  return {
      id: item._id,
      username:item.username,
      password:item.password,
      user_type_name:  item.user_type_name.map((e)=> e.user_type_name),
      user_online:item.user_online,
      created_date:item.created_date,
      updated_date:item.updated_date,
  }
});

const VISIBLE_FIELDS = ['id'];

const initialState = {
filter: {
  filterModel: {
    items: [
      {
        id: 1,
        columnField: '_id',
        operatorValue: 'contains',
        value: '0',
      },
      {
        id: 2,
        columnField: 'username',
        operatorValue: 'contains',
        value: '0',
      },
      {
        id: 3,
        columnField: 'created_date',
        operatorValue: 'contains',
        value: '0',
        
      },
    ],
  },
},
};


  const columns  =  [

    { field: 'id', headerName: 'id', type:'string', width: 250, headerAlign: 'center',visibility:true},
    { field: 'username', headerName: 'username',type:'string', width: 300,   headerAlign: 'center'},
    { field: 'password', headerName: 'password',type:'string', width: 300,   headerAlign: 'center'},
    { field: 'user_type_name', headerName: 'user_type_name',type:'string', width: 300,   headerAlign: 'center'},

    { field: 'user_online', headerName: 'user_online',type:'string', width: 100,   headerAlign: 'center',
    renderCell:params => <> {(params==true) ? (<Avatar overlap="circular"  variant="dot" sx={{ bgcolor:green[500],width: 10, height: 10 }}/> ):(<Avatar overlap="circular"  variant="dot" sx={{ bgcolor:red[500],width: 10, height: 10 }}/> )} </>},
    { field: 'created_date', headerName: 'created_date',type:'string',  headerAlign: 'center',width: 200,renderCell:(params)=> moment(params.created_date).format("DD-MM-YYYY HH:MM")},
    { field: 'updated_date', headerName: 'updated_date',type:'string', headerAlign: 'center', width: 200 ,renderCell:(params)=> moment(params.updated_date).format("DD-MM-YYYY HH:MM")},
    {field:'actions', headerName:'Action',type:"actions" ,width: 300 ,headerAlign:'center', renderCell: params => <><Edit {...{params}} /> <Delete {...{params}}/> </>}     
   ,
  ] 
  const form = React.useRef();
  const onSubmitForm = (e)=>{

    e.preventDefault();
    const fd = new FormData(form.current);
    const fe = Object.fromEntries(fd.entries());
    console.log(fe)
    fetch(`${API}`+"/users1/create",{
      method:'POST',
    body:JSON.stringify(fe),
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  
  }).then(res=> res.json()).
  then(result => {
    
  if(result.status == true){
  
  console.log(result);

  }
   
  }).catch(err => console.log(err))
  


}
const onDelete = (e)=>{
  e.preventDefault();
  const fd = new FormData(form.current);
  const fe = Object.fromEntries(fd.entries());

  fetch(`${api}`+"/user-type/delete",{
    method:'POST',
  body:JSON.stringify(fe),
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow'

}).then(res=> res.json()).
then(result => {
  
if(result.status == true){

console.log(result)


}



}).catch(err => console.log(err))

}
const onEdite = (e)=>{
  e.preventDefault();
  const fd = new FormData(form.current);
  const fe = Object.fromEntries(fd.entries());




  fetch(`${api}`+"/user-type/update",{
    method:'POST',
  body:JSON.stringify(fe),
  headers: {
    'Content-Type': 'application/json'
  },
  redirect: 'follow'

}).then(res=> res.json()).
then(result => {
  
if(result.status == true){

console.log(result);
setQueryStatus("success");
setMessageQuery("Inset completed");
setAlertStatus(true)

}else{
  console.log(result);
  setQueryStatus("error");
  setMessageQuery("Inset did not complete");
  setAlertStatus(false)

}

}).catch(err => console.log(err))

}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    
    setAge(event.target.value);

  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {

    event.preventDefault();

  };

  const handleMouseUpPassword = (event) => {

    event.preventDefault();


  };

  return (
  <>

  <Typography>Provice</Typography>

  <Box sx={{ flexGrow: 1 }} >

            <form onSubmit={onSubmitForm} ref={form}>   

      <Grid container spacing={3}>

        <Grid item xs={4}>


            











<TextField id="outlined-basic" label="Username" variant="outlined" name='username' fullWidth />
</Grid>
<Grid item xs={4}>

  


<FormControl fullWidth>

<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>


  <OutlinedInput              name='password'   id="outlined-adornment-password"

    type={showPassword ? 'text' : 'password'}
    endAdornment={

      <InputAdornment position="end">
        <IconButton
          aria-label={
            showPassword ? 'hide the password' : 'display the password'
          }
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          onMouseUp={handleMouseUpPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
      
    }
    label="Password"
  />

</FormControl>
</Grid>

<Grid item xs={4}>

<FormControl fullWidth>

<InputLabel id="demo-simple-select-label">User_Type_name</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value={age}
  label="User_Type_name"
  onChange={handleChange}
  name='user_type_id' 
>
  {

    data.map(item=>{
      return  <MenuItem key={item._id} value={item._id}>{item.user_type_name}</MenuItem>
    })
  }

</Select>
</FormControl>






      </Grid>

      <Grid item xs={4}>

     <Button onClick={handleClose} variant="contained" type="submit" fullWidth>Add</Button>
     </Grid>



     <Grid item xs={4}>

<Button onClick={handleClose} variant="contained" type="submit" fullWidth>Edit</Button>
</Grid>

<Grid item xs={4}>

<Button onClick={handleClose} variant="contained" type="submit" fullWidth>Detele</Button>
</Grid>
    

      </Grid>

  </form>  
    
    
<br/>

      <DataGrid

initialState={initialState}

      rows={newData}
      columns={columns}
      pupdated_dateSize={5}
      rowsPerPupdated_dateOptions={[5]}
      disableSelectionOnClick
      componentsProps={{
        filterPanel: {
          // Force usage of "And" operator
          linkOperators: ['and'],
          // Display columns by ascending alphabetical order
          columnsSort: 'asc',
          filterFormProps: {
            // Customize inputs by passing props
            linkOperatorInputProps: {
              variant: 'outlined',
              size: 'small',
            },
            columnInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            operatorInputProps: {
              variant: 'outlined',
              size: 'small',
              sx: { mt: 'auto' },
            },
            valueInputProps: {
              InputComponentProps: {
                variant: 'outlined',
                size: 'small',
              },
            },
            deleteIconProps: {
              sx: {
                '& .MuiSvgIcon-root': { color: '#d32f2f' },
              },
            },
          },
          sx: {
            // Customize inputs using css selectors
            '& .MuiDataGrid-filterForm': { p: 2 },
            '& .MuiDataGrid-filterForm:nth-child(even)': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
            },
            '& .MuiDataGrid-filterFormLinkOperatorInput': { mr: 2 },
            '& .MuiDataGrid-filterFormColumnInput': { mr: 2, width: 150 },
            '& .MuiDataGrid-filterFormOperatorInput': { mr: 2 },
            '& .MuiDataGrid-filterFormValueInput': { width: 200 },
          },
        },
      }}
      
    components={{
        Toolbar: GridToolbar
        // Use custom FilterPanel only for deep modification
        // FilterPanel: MyCustomFilterPanel,
      }}
    />  
          </Box>
  

  </>)
}
