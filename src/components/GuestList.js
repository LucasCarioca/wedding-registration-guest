import React, {useState} from 'react';
import {Container, Button} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import {deleteGuest} from '../services/guest.service';

function GuestList({list, onChange}) {
  const [selectedList, setSelectedList] = useState([]);
  const columns = [
    {field: 'first_name', headerName: 'First Name', width: 100},
    {field: 'last_name', headerName: 'Last Name', width: 100},
  ];
  const handleSelection = (s) => {
    setSelectedList(s);
  };

  const deleteSelection = () => {
    selectedList.forEach((i) => {
      deleteGuest(i).finally(() => {
        onChange();
      });
    });
  };

  return (
    <Container style={{height: '600px'}}>
      <div style={{display: 'flex', justifyContent: 'flex-end', padding: '1rem'}}>
        {selectedList.length > 0 ?
          <Button
            data-testid="deleteButton"
            variant="contained"
            color="secondary"
            onClick={deleteSelection}
          >
            Delete
          </Button> :
          <Button
            data-testid="deleteButton-disabled"
            variant="contained"
            disabled={true}
          >
            Delete
          </Button>
        }
      </div>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={handleSelection}
      />
    </Container>
  );
}

export default GuestList;
