
import { Alert, Button, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import Head from "next/head";
import styles from '../../styles/InvitationSearch.module.css'
import { searchInvitation } from "../../src/services/invitation.service";
import { useRouter } from "next/router";
import { NextResponse } from 'next/server'
import { useState } from "react";

export default function InvitationSearch() {
  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const onSubmit = (data: any) => {
    searchInvitation(data.searchText)
      .then((data: any) => {
        if (data.registration_key) {
          return push(`/invitations/${data.registration_key}`)
        }
        throw Error('INVITATION_NOT_FOUND')
      })
      .catch((error) => {
        setError(`Invitation not found using ${data.searchText}`)
      })
  }
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Karen & Lucas Wedding - RSVP</title>
    </Head>
    <div id={'home'}>
      <div className={styles['content-home']}>
        <Container>
          <Typography className={styles['search-title']} variant="h1">RSVP</Typography>
          <hr />
          {error !== '' && (
            <Alert severity={'error'}>{error}</Alert>
          )}
          {errors.searchText && <Alert severity={'error'}>The search field is required</Alert>}
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <input
                className={styles['registration-key-search']}
                placeholder="Email, Phone or Key"
                {...register('searchText', { required: true })}
              />
            </div>
            <br />
            <br />
            <Button type="submit" variant='contained'>FIND RSVP</Button>
          </form>
        </Container>
      </div>
    </div>
  </>)
}