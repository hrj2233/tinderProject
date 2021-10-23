import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tinder-sv.herokuapp.com/',
});

export default instance;
