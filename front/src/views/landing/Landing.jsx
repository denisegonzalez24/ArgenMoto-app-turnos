import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css'; // Importamos los estilos CSS

function Landing() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Bienvenido/a!</h1>
      <h2>¿Es tu primera vez en esta app?</h2>
      <Link to="/register" className={styles.buttonLink}>
        <button className={styles.button}>Regístrate</button>
      </Link>

      <h2>¿Ya tienes una cuenta registrada?</h2>
      <Link to="/login" className={styles.buttonLink}>
        <button className={styles.button}>Inicia Sesión</button>
      </Link>
    </div>
  );
}

export default Landing;
