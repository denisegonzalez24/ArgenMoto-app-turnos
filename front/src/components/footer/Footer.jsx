import React from 'react'; 
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p className={styles.copyRight}>Derechos de autor © 2024 ArgenMoto SA</p>
                
                <p className={styles.contact}>
                    Para consultas, contáctanos en 
                    <a href="mailto:info@argenmoto.com" className={styles.contactLink}>info@argenmoto.com</a>
                </p>
                
                <p className={styles.contact}>
                    Teléfono: <a href="tel:+541234567890" className={styles.contactLink}>+54 123 456 7890</a>
                </p>
                
                <p className={styles.contact}>
                    Dirección: Calle Ficticia 123, Ciudad, País
                </p>
            </div>
        </div>
    );
}
