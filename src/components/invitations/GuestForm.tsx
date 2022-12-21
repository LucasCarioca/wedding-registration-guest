import { Alert } from "@mui/lab"
import { Button, Grid, TextField } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { createGuest, readErrorMessage } from "../../services/invitation.service"

type props = {
    registration_key: string,
}

export default function GuestForm({ registration_key }: props) {
    const { reload } = useRouter()
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (values: any) => {
        createGuest(registration_key, values.firstName, values.lastName, values.email, values.phone, values.emailOptIn, values.smsOptIn)
            .catch((error: any) => setError(readErrorMessage(error)))
            .finally(() => reload());
    };
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && (<>
                <br />
                <Alert severity="error">{error}</Alert>
                <br />
            </>)}
            {errors.firstName && <Alert severity={'error'}>The first name field is required</Alert>}
            {errors.lastName && <Alert severity={'error'}>The last name field is required</Alert>}
            <Grid container spacing={2}>
                <Grid item md={6} sm={6} xs={12}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        style={{ width: '100%' }}
                        {...register('firstName', { required: true })}
                    />
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        style={{ width: '100%' }}
                        {...register('lastName', { required: true })}
                    />
                </Grid>
                <Grid item md={9} sm={6} />
                <Grid item md={3} sm={6} xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: '100%' }}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    </>)
}