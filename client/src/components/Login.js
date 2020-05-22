import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/login`, formState)
      .then((response) => {
        //saving token to localstorate
        localStorage.setItem('token', JSON.stringify(response.data.payload));
        history.push('/BubblePage');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="welcome">
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Username
          <input name="username" value={formState.username} onChange={handleChange} />
        </label>
        <label>
          {' '}
          Password
          <input name="password" value={formState.password} onChange={handleChange} />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
