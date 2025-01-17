import * as React from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function ExportDefaultToolbar() {
const [Provice,setProvice]=React.useState();
const API="http://localhost:9000/api";
  React.useEffect(() => {
    return () => {

      fetch(`http://localhost:9000/api/Provice/read`)
      .then((res) => res.json())
      .then((data) => setProvice(data));
    };
  }, [input])

  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });
  
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  return (
    <>
        <div style={{ height: 500, width: '100%' }}>
      <DataGrid {...data} loading={loading} slots={{ toolbar: GridToolbar }} 
      
      checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
          console.log(newRowSelectionModel)
        }}
        rowSelectionModel={rowSelectionModel}/>
    </div>
    </>

  )
}