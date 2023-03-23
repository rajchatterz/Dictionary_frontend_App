import axios from 'axios';
import {base_url} from '../utils/constants'

async function authenticate_contact(contact) {
  const url = base_url+`/v1/auth/otp/send`;

  const response = await axios.post(url, {
    contact:contact
  });
 console.log(response.data)
  return response.data;
}


async function authenticate_otp(contact,otp) {
  try {
    const url = base_url+`/v1/auth/otp/verify`;

    const response = await axios.post(url, {
      contact:contact,
      otp:otp
    });
    console.log(response.data)
    return response.data;
  }
  catch(error){
    console.log(error.response.data)
    return error.response.data
  }
  
}




//------------------------------------------------------------------------------------
export function send_otp(contact) {
  console.log(contact)
  return authenticate_contact(contact);
}

export function verify_otp(contact , otp) {
  console.log(contact,otp)
  return authenticate_otp(contact , otp);
}

export function logout(){
  return logout()
}