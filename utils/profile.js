//"profile page api requests"
//"getUserProfile - GET user profile from backend"

import axios from 'axios';
import { base_url } from '../utils/constants'

async function profile (){
    const url  = base_url + `/v1/users/65798b945026a7002a24e194`;
    const response = await axios.get(url);
    console.log("Profile Data")
    console.log(response.data)
    return response.data;
}

export function get_profileData(){
    return profile();
}