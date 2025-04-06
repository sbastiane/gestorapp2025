import React, { useState, useEffect } from "react";
import "./Calendar.css";
import { calendar, zones } from "../../../data/data.js";

const Calendar = ({ zoneId, zoneName }) => {
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setDays(calendar[0]);
    setHours(calendar[1]);
    
    // Obtener reservas de la zona específica
    const zone = zones.find(z => z.id === Number(zoneId));
    setReservations(zone?.reservas || []);
  }, [zoneId]);

  const reserve = (day, hour) => {
    const newReservation = { day, hour, zone: zoneId };
    alert(`Reserva confirmada para ${zoneName} el ${day} a las ${hour}`);
    
    // Aquí deberías actualizar el estado y posiblemente enviar a un backend
    setReservations([...reservations, newReservation]);
  };

  const isReserved = (day, hour) => {
    return reservations.some(r => r.day === day && r.hour === hour);
  };

  return (
    <div className="calendar-container">
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
                <td key={`${day}-${hour}`} className="calendar-table-hour">
                  {isReserved(day, hour) ? (
                    <span className="reserved-badge">Reservado</span>
                  ) : (
                    <button 
                      onClick={() => reserve(day, hour)}
                      className="reserve-button"
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