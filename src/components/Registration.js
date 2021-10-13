import React, {useEffect, useState} from 'react';
import {Container, Typography} from "@mui/material";
import {getRegistrationKey} from "../config";
import {useHistory} from "react-router";
import {getAllInvitations} from "../services/invitation.service";
import LinearProgress from "@mui/material/LinearProgress";
import Guests from "./Guests";

function Registration() {
    const [registration, setRegistration] = useState();
    const [error, setError] = useState("");
    const history = useHistory();
    const registrationKey = getRegistrationKey();

    useEffect(() => {
        getAllInvitations().then(r => {
            setRegistration(r);
        }).catch(e => setError("Invitation not found"))
    }, []);

    if (registrationKey && registrationKey != "") {
        if (registration) return (
            <Container>
                <Typography variant="h1">Registration</Typography>
                <br/>
                <Typography><span className="label--left">Invitation name:</span> {registration.name}</Typography>
                <Typography><span className="label--left">Registration key:</span> {registration.registration_key}</Typography>
                <Typography><span className="label--left">Guest limit:</span> {registration.guest_count}</Typography>
                <br/>
                <Guests/>
            </Container>
        )
        else if (error != "") return (
            <Container>
                <Typography variant="h1">{error}</Typography>
            </Container>
        )
        return (
            <LinearProgress/>
        )
    }
    else {
        history.push(`/search`);
        return (
            <Container>
                <Typography variant="h1">Registration not found</Typography>
            </Container>
        )
    }
}

export default Registration;