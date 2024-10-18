import React from "react";
import foto from "../../assets/FOTO.jpeg";
import styles from "./Card.module.css";

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <img src={foto} alt="foto" className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.title}>ArgenMoto</h2>
                <p className={styles.description}>
                En ArgenMoto, nos dedicamos a ofrecerte las mejores motos del mercado, con modelos para cada estilo y necesidad. Además de una amplia selección de marcas y diseños, te brindamos una garantía de un año que incluye revisiones técnicas para asegurar que siempre estés en movimiento con total confianza. ¡Tu próxima aventura sobre dos ruedas comienza con nosotros!
                </p>
            </div>
        </div>
    );
} 

