import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { setUserData } from '../../redux/userSlice';
const POSTUSER_URL = "http://localhost:3000/users/login";


function Login() {
  const initialState = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateUser = ({ username, password }) => {
    const errors = {};
    if (!username) errors.username = "Ingresar un nombre de usuario";
    if (!password) errors.password = "Ingresar una contraseña";
    return errors;
  };

  const formData = [
    { label: "Username", name: "username", type: "text" },
    { label: "Password", name: "password", type: "password" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);
    setErrors(validateUser(updatedUser));
  };
const navigate = useNavigate();
const dispatch= useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: user.username,
      password: user.password
    };

    axios.post(POSTUSER_URL, userData)
      .then(({ data }) => {
       dispatch(setUserData(data))
        alert("Usuario logeado");
        setUser(initialState);
        navigate("/home")

      })
      .catch(error => alert("Credenciales incorrectas"));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar Sesión</h2>
      <hr />
      <form onSubmit={handleSubmit} className={styles.form}>
        {formData.map(({ label, name, type }) => (
          <div key={name} className={styles.formGroup}>
            <label className={styles.label}>{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              value={user[name]}
              placeholder={`Ingresar ${label.toLowerCase()}`}
              onChange={handleChange}
              className={styles.input}
            />
            {errors[name] && (
              <span className={styles.error}>{errors[name]}</span>
            )}
          </div>
        ))}
        <button type="submit" className={styles.button} disabled={Object.keys(user).some(e => !user[e])}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
