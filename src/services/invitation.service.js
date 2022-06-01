import {getHost, getRegistrationKey} from '../config';
import axios from 'axios';


export async function getInvitation() {
  const apiKey = getRegistrationKey();
  const host = getHost();
  const res = await axios.get(`${host}/api/v1/invitations?registration_key=${apiKey}`);
  return res.data;
}

export async function searchInvitation(value) {
  const host = getHost();
  const res = await axios.get(`${host}/api/v1/invitations?value=${value}`);
  return res.data;
}
