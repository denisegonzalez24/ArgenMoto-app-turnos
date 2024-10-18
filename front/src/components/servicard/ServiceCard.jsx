import React from "react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard() {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.content}>
                <h2 className={styles.title}>Servicios de Garantía y Revisión Técnica</h2>
                <ul className={styles.servicesList}>
                    <li><strong>Revisión técnica anual:</strong> Realizamos una inspección completa de tu moto para garantizar su buen funcionamiento y seguridad en la carretera, conforme a las normativas vigentes.</li>
                    <li><strong>Mantenimiento preventivo:</strong> Ofrecemos servicios de mantenimiento preventivo que incluyen cambios de aceite, revisión de frenos, ajuste de suspensiones y más, para prolongar la vida útil de tu moto.</li>
                    <li><strong>Diagnóstico de sistemas electrónicos:</strong> Contamos con tecnología avanzada para diagnosticar y solucionar problemas en los sistemas electrónicos de tu moto, asegurando un rendimiento óptimo.</li>
                    <li><strong>Reparación y ajuste:</strong> Si detectamos cualquier anomalía durante la revisión, nos encargamos de reparar y ajustar las piezas necesarias con repuestos originales de la más alta calidad.</li>
                    <li><strong>Garantía de un año:</strong> Todos nuestros servicios incluyen una garantía de un año que cubre revisiones técnicas y correcciones para asegurar que tu moto siempre esté en perfectas condiciones.</li>
                </ul>
            </div>
        </div>
    );
}
