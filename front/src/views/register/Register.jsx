import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';

const POSTUSER_URL = "http://localhost:3000/users/register";
const emailRegExp = /\S+@\S+\.\S+/;

function Register() {
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: ""
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateUser = ({ name, email, birthdate, nDni, username, password, confirmPassword }) => {
    const errors = {};
    if (!name) errors.name = "Ingresar un nombre";
    if (!email) errors.email = "Ingresar un email";
    else if (!emailRegExp.test(email)) errors.email = "Ingresar un email válido";
    if (!birthdate) errors.birthdate = "Ingresar fecha de nacimiento";
    if (!nDni) errors.nDni = "Ingresar su DNI";
    if (!username) errors.username = "Ingresar un nombre de usuario";
    if (!password) errors.password = "Ingresar una contraseña";
    if (password !== confirmPassword) errors.confirmPassword = "Password y confirmación deben ser iguales";

    return errors;
  };

  const formData = [
    { label: "Nombre", name: "name", type: "text" },
    { label: "Username", name: "username", type: "text" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirmar Password", name: "confirmPassword", type: "password" },
    { label: "Email", name: "email", type: "email" },
    { label: "Fecha de nacimiento", name: "birthdate", type: "date" },
    { label: "Numero de DNI", name: "nDni", type: "text" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value };
    setUser(updatedUser);
    setErrors(validateUser(updatedUser));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: user.nDni,
      username: user.username,
      password: user.password
    };

    axios.post(POSTUSER_URL, userData)
      .then(({ data }) => {
        console.log(data);
        alert("Usuario creado con éxito");
      })
      .catch(error => alert(error.message));
  };

  const handleReset = () => {
    setUser(initialState);
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registro</h2>
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
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button} disabled={Object.keys(user).some(e => !user[e])}>
            Registrar
          </button>
          <button type="button" className={styles.button} onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
