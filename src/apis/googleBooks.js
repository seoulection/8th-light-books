import axios from 'axios';

const API_KEY = 'AIzaSyCuK81MFUkBvZP6bnMnPF3WmqA5S0iUsA0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    key: API_KEY
  }
});
