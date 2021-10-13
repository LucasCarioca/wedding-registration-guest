import React from 'react';
import {Container, TextField, Button} from "@mui/material";
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
                        <TextField
                            {...formik.getFieldProps('firstName')}
                            label="First Name"
                            variant="outlined"
                            style={{margin: "1rem"}}
                        />
                        <TextField
                            {...formik.getFieldProps('lastName')}
                            label="Last Name"
                            variant="outlined"
                            style={{margin: "1rem"}}
                        />
                        <TextField
                            {...formik.getFieldProps('email')}
                            label="Email"
                            variant="outlined"
                            style={{margin: "1rem"}}
                        />
                        <TextField
                            {...formik.getFieldProps('phone')}
                            label="Phone"
                            variant="outlined"
                            style={{margin: "1rem"}}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{margin: "1.5rem"}}
                        >
                            Add
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default NewGuestForm;