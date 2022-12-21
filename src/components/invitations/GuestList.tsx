import { Button, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteGuest } from "../../services/invitation.service";

type props = {
    registration_key: string,
    guests: { first_name: string, last_name: string }[]
}
export default function GuestList({ registration_key, guests }: props) {
    const { reload } = useRouter()
    const [selectedList, setSelectedList] = useState([])
    const columns = [
        { field: 'first_name', headerName: 'First Name', width: 300 },
        { field: 'last_name', headerName: 'Last Name', width: 300 },
    ]
    const handleSelection = (s: any) => {
        setSelectedList(s)
    }

    const deleteSelection = () => {
        selectedList.forEach((i) => {
            deleteGuest(registration_key, i).finally(() => {
                reload()
            })
        })
    }
    return (<>
        <Container style={{ height: '600px', paddingBottom: '150px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
                {selectedList.length > 0 ?
                    <Button
                        data-testid="deleteButton"
                        variant="contained"
                        color="secondary"
                        onClick={deleteSelection}
                    >
                        Remove
                    </Button> :
                    <Button
                        data-testid="deleteButton-disabled"
                        variant="contained"
                        disabled={true}
                    >
                        Remove
                    </Button>
                }
            </div>
            <DataGrid
                rows={guests}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange={handleSelection}
            />
        </Container>
    </>)
}