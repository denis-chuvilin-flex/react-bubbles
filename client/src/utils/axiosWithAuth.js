import axios from 'axios';

function axiosWithAuth() {
  const token = JSON.localStorage.getItem('token');
  axios.create({
    headers: { 'Content-Type': 'application/json', Authorization: token },
    baseURL: 'http://localhost:5000',
  });
}
