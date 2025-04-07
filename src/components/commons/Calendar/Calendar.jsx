import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { calendar } from "../../../data/data.js";
import { useNavigate } from "react-router-dom";

const Calendar = ({ zoneId, zoneName }) => {
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [reservations, setReservations] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setDays(calendar[0]);
    setHours(calendar[1]);
  }, []);

  useEffect(() => {
    if (zoneName) {
      const fetchReservations = async () => {
        const newReservations = {};

        for (const day of calendar[0]) {
          try {
            const res = await fetch(
              `http://localhost:3000/disponibilidad/${encodeURIComponent(zoneName)}/${day}`
            );
            const data = await res.json();
            newReservations[day] = data.ocupados || [];
          } catch (error) {
            console.error(`Error al cargar reservas para ${day}:`, error);
            newReservations[day] = [];
          }
        }

        setReservations(newReservations);
      };

      fetchReservations();
    }
  }, [zoneName]);

  const reserveZone = (day, hour, zoneName) => {
    navigate("/formulario-reserva", {
      state: { day, hour, zoneName },
    });
  };

  const isReserved = (day, hour) => {
    return reservations[day]?.includes(hour);
  };

  return (
    <div className="calendar-container" id={`calendar-${zoneId}`}>
      <h3 className="calendar-zone">Zona: {zoneName}</h3>
      <table className="calendar-table">
        <thead className="calendar-table__table-head">
          <tr className="calendar-table__days">
            <th className="calendar-table-day">Horas</th>
            {days.map((day) => (
              <th className="calendar-table-day" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="calendar-table__table-body">
          {hours.map((hour) => (
            <tr className="calendar-table__hours" key={hour}>
              <td className="calendar-table-hour">{hour}</td>
              {days.map((day) => (
                <td key={day} className="calendar-table-hour">
                  {isReserved(day, hour) ? (
                    <button className="calendar-button reserved" disabled>
                      Reservado
                    </button>
                  ) : (
                    <button
                      className="calendar-button available"
                      onClick={() => reserveZone(day, hour, zoneName)}
                    >
                      Reservar
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;