import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1';

export default axios.create({
  baseURL: url,
  params: {
    key: process.env.API_KEY
  }
});
