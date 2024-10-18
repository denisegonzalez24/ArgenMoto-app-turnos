import React from 'react';
import styles from "./CardAppointment.module.css";

export default function CardAppointment({ id, userId, date, time, status, handleAppointmentCancel }) {
  const formattedDate = new Date(date);
  if (isNaN(formattedDate.getTime())) {
    return <div>Error: Fecha inválida</div>;
  }
  const formattedDateString = `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;

  const handleClick = () => {
    if (window.confirm(`¿Desea cancelar el turno del día ${formattedDateString} a las ${time}?`)) {
      handleAppointmentCancel(id)
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.date}>{formattedDateString}</span>
      <span className={styles.time}>{time}</span>
      <span
        className={`${styles.status} ${status === 'scheduled' ? styles.active : styles.cancelled}`}
        onClick={status === 'scheduled' ? handleClick : undefined}
      >
        {status === 'scheduled' ? 'Activo' : 'Cancelado'}
      </span>
    </div>
  );
}
