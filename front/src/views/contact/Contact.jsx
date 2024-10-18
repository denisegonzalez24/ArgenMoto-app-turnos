import React from 'react';
import styles from './Contac.module.css'; // Importa los estilos

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contáctanos</h1>
      <p className={styles.description}>
        Estamos aquí para ayudarte con todas tus necesidades odontológicas. No dudes en ponerte en contacto con nosotros.
      </p>
      <div className={styles.contactDetails}>
        <h2 className={styles.contactTitle}>Información de Contacto</h2>
        <p className={styles.contactInfo}><strong>Dirección:</strong> Calle reini 123, Buenos Aires, Argentina</p>
        <p className={styles.contactInfo}><strong>Email:</strong> contacto@odontologia.com</p>
        <p className={styles.contactInfo}><strong>Teléfonos:</strong> +1 (555) 123-4567, +1 (555) 765-4321</p>
      </div>
    </div>
  );
}

export default Contact;
