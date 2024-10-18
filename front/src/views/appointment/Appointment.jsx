import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardAppointment from '../../components/cardApointment/CardAppoinitment';  // Corregir nombre del componente
import styles from './Appointment.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserAppointment } from '../../redux/userSlice';  // Asegúrate de importar correctamente la acción

const GETAPPOINTMENTURL = "http://localhost:3000/appointments/";
const GETUSERBYID_URL = "http://localhost:3000/users/";
const PUTcancel_URL = "http://localhost:3000/appointments/cancel/";

export default function Appointment() {
  const actualUserId = useSelector(state => state.actualUser.userData.user.id);
  const loggin = useSelector(state => state.actualUser.userData.loggin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Definir el estado de las citas
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Obtener las citas del usuario desde el servidor
    axios
      .get(GETUSERBYID_URL + actualUserId)
      .then((response) => response.data)
      .then((actualUser) => {
        // Actualizar el estado con las citas recibidas del servidor
        setAppointments(actualUser.appointments);
        dispatch(setUserAppointment(actualUser.appointments));
      })
      .catch(error => console.log(error.message));
  }, [actualUserId, dispatch]);

  // Manejar la cancelación de una cita
  const handleAppointmentCancel = (appointmentId) => {
    axios
  .put(PUTcancel_URL + appointmentId)
  .then(() => {
    // Actualizar las citas después de la cancelación
    axios
      .get(GETUSERBYID_URL + actualUserId)
      .then(response => response.data.appointments)
      .then(appointments => setAppointments(appointments))
      .catch(error => console.log(error.message));
  })
  .catch(error => console.log(error.message));

  }

  // Ordenar las citas por fecha en orden descendente
  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Redireccionar al usuario si no está logueado
  useEffect(() => {
    if (!loggin) {
      navigate("/home");
    }
  }, [loggin, navigate]);

  return (
    <div className={styles.appointmentContainer}>
      <h1 className={styles.title}>Reservas</h1>
      <div className={styles.cardContainer}>
        {appointments.length > 0 ? (
          sortedAppointments.map(appointment => (
            <CardAppointment
              key={appointment.id}
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              userId={appointment.userId}
              status={appointment.status}
              handleAppointmentCancel={handleAppointmentCancel}
            />
          ))
        ) : (
          <p>No hay citas disponibles.</p>
        )}
      </div>
    </div>
  );
}
