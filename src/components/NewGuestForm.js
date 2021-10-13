import React from 'react';
import {Container, TextField, Button, Grid} from "@mui/material";
import {Form, Formik} from "formik";
import {createGuest} from "../services/guest.service";

function NewGuestForm({onSubmit}) {
    const submit = (values) => {
        createGuest(values.firstName, values.lastName)
            .catch(error => console.error(error))
            .finally(() => onSubmit());
    }
    return (
        <Container style={{margin: "1rem"}}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''
                }}
                onSubmit={submit}
            >
                {formik => (
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField
                                    {...formik.getFieldProps('firstName')}
                                    label="First Name"
                                    variant="outlined"
                                    style={{width: "90%"}}
                                />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField
                                    {...formik.getFieldProps('lastName')}
                                    label="Last Name"
                                    variant="outlined"
                                    style={{width: "90%"}}
                                />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField
                                    {...formik.getFieldProps('email')}
                                    label="Email"
                                    variant="outlined"
                                    style={{width: "90%"}}
                                />
                            </Grid>
                            <Grid item md={3} sm={6} xs={12}>
                                <TextField
                                    {...formik.getFieldProps('phone')}
                                    label="Phone"
                                    variant="outlined"
                                    style={{width: "90%"}}
                                />
                            </Grid>
                            <Grid item md={9}  sm={6} xs={0}/>
                            <Grid item md={3}  sm={6} xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    style={{width: "90%"}}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default NewGuestForm;