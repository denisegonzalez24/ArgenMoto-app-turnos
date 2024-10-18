import React from 'react';
import styles from './Abaut.module.css'; // Importa los estilos

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Acerca de Nosotros</h1>
      <p className={styles.description}>
        En ArgenMoto te ofrecemos los mejores servicios para tu moto. Nuestro equipo está formado por profesionales altamente capacitados y comprometidos con tu bienestar.
      </p>
      <h2 className={styles.servicesTitle}>Nuestros Servicios</h2>
      <ul className={styles.servicesList}>
        <li>Revisión técnica anual</li>
        <li>Mantenimiento preventivo</li>
        <li>Diagnóstico de sistemas electrónicos: </li>
        <li>Reparación y ajuste</li>
        <li>Garantía de un año</li>
      </ul>
      <h2 className={styles.doctorsTitle}>Nuestros Equipo de Técnicos especialistas</h2>
      <ul className={styles.doctorsList}>
        <li>Juan Pérez</li>
        <li>Martin García</li>
        <li>Carlos Martínez</li>
        <li>Laura Rodríguez</li>
      </ul>
    </div>
  );
}

export default About;
