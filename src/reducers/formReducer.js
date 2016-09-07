import axios from 'axios';
import { API_KEY, ROOT_URL } from './apiKey.js';

export const EMAIL_SUCCESS = 'email_succes';
export const EMAIL_ERROR = 'email_error';
export const UPDATE_CONTENT = 'update_content';

export function emailError(error){
  return{
    type: EMAIL_ERROR,
    payload: error
  }
}

export function newMessage(name, email, message){
  const newContent = {"plain_text": `SENDER: ${name}, EMAIL: ${email}, MESSAGE: ${message}`};
  const headers = {
    authorization: `apikey ${API_KEY}`
  }
  if(newContent){
    axios
      // .put(`${ROOT_URL}campaigns/b765f10cc5/content`, {data: newContent}, headers );
      .get(`${ROOT_URL}campaigns/b765f10cc5`,  headers );
    return {
      type: UPDATE_CONTENT
    }
  }
}

