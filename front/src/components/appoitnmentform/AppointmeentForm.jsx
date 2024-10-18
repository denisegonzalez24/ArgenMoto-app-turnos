import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./AppointmeentForms.module.css";

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm(props) {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.actualUser?.userData.user.id);

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  const initialState = {
    date: "",
    hours: "09",
    minutes: "00",
  };

  const [appointment, setAppointment] = useState(initialState);
  const [error, setError] = useState({
    date: "",
  });

  const validateAppointment = ({ date, hours, minutes }) => {
    const errors = {};
    if (!date) errors.date = "Ingrese una fecha";
    else if (isWeekend(date)) errors.date = "La fecha seleccionada es fin de semana";
    return errors;
  };

  const isWeekend = (date) => {
    const [day, month, year] = date.split("/");
    const formattedDate = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = formattedDate.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;  // Sunday = 0, Saturday = 6
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
    setError(validateAppointment({ ...appointment, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date: appointment.date,  
      time: `${appointment.hours}:${appointment.minutes}`,
      userId,
    };

    axios.post(POSTAPPOINTMENT_URL, newAppointment)
      .then(({ data }) => {
        alert(`Ha sido reservada: la fecha ${data.date}, hora ${data.time}`);
        setAppointment(initialState);
        navigate("/appointment");
      })
      .catch((error) => {
        alert(`Error al realizar la petición POST: ${error.response?.data?.message || error.message}`);
      });
  };

  const validHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
  const validMinutes = ["00", "30"];

  function getTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return formatDateForInput(tomorrow);
  }

  function getFourteenDaysAhead() {
    const today = new Date();
    const fourteenDaysAhead = new Date(today);
    fourteenDaysAhead.setDate(today.getDate() + 14);
    return formatDateForInput(fourteenDaysAhead);
  }

  function formatDateForInput(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  function formatDateForDisplay(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={styles.formContainer}>
      <h2>Nueva reserva</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            min={getTomorrow()}
            max={getFourteenDaysAhead()}
            value={appointment.date}
            onChange={handleChange}
          />
          {error.date && <span className={styles.error}>{error.date}</span>}
        </div>
        <div>
          <label htmlFor="time">Horario</label>
          <select id="hours" name="hours" value={appointment.hours} onChange={handleChange}>
            {validHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select id="minutes" name="minutes" value={appointment.minutes} onChange={handleChange}>
            {validMinutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit" disabled={Object.keys(error).length > 0}>
          Enviar
        </button>
      </form>
    </div>
  );
}
