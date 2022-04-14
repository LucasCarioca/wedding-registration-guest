import {getHost, getRegistrationKey} from '../config';
import axios from 'axios';

export async function getAllGuests() {
  const apiKey = getRegistrationKey();
  const host = getHost();
  const res = await axios.get(`${host}/api/v1/guests?registration_key=${apiKey}`);
  return res.data;
}

export async function deleteGuest(id) {
  const apiKey = getRegistrationKey();
  const host = getHost();
  const res = await axios.delete(`${host}/api/v1/guests/${id}?registration_key=${apiKey}`);
  return res.data;
}

export async function createGuest(firstName, lastName, email, phone, emailOptIn, smsOptIn) {
  const apiKey = getRegistrationKey();
  const host = getHost();
  const res = await axios.post(
    `${host}/api/v1/guests?registration_key=${apiKey}`,
    {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      email_opt_in: emailOptIn,
      sms_opt_in: smsOptIn
    }
  );
  return res.data;
}
