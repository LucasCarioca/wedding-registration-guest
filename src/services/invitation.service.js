import {getHost, getRegistrationKey} from '../config';
import axios from 'axios';


export async function getInvitation() {
  const apiKey = getRegistrationKey();
  const host = getHost();
  const res = await axios.get(`${host}/api/v1/invitations?registration_key=${apiKey}`);
  return res.data;
}
