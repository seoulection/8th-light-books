import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1';

export default axios.create({
  baseURL: API_URL,
  params: {
    key: process.env.API_KEY
  }
});
