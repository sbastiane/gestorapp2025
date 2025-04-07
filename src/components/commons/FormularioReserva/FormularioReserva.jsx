import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiCalendar, FiClock, FiMapPin, FiUser, FiMail, FiPhone, FiCheck } from 'react-icons/fi';
import './FormularioReserva.css';

const FormularioReserva = () => {
    const [reservationDay, setReservationDay] = useState("");
    const [reservationHour, setReservationHour] = useState("");
    const [reservationZone, setReservationZone] = useState("");
    const [reservationEmail, setReservationEmail] = useState("");   
    const [reservationPhone, setReservationPhone] = useState("");
    const [reservationName, setReservationName] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const { day, hour, zoneName } = location.state || {};

    useEffect(() => {
        if (day && hour && zoneName) {
            setReservationDay(day);
            setReservationHour(hour);
            setReservationZone(zoneName);
        }
    }, [day, hour, zoneName]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevaReserva = {
            zona: reservationZone,
            dia: reservationDay,
            hora: reservationHour,
            nombre: reservationName,
            contacto: reservationPhone,
            email: reservationEmail,
        };

        try {
            const res = await fetch('http://localhost:3000/reservar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevaReserva)
            });

            const data = await res.json();

            if (res.ok) {
                alert("✅ Successful reservation.");
                navigate("/dashboard");
            } else {
                alert(`⚠️ The reservation could not be made: ${data.mensaje}`);
            }
        } catch (error) {
            console.error("❌ Error when making the reservation:", error);
            alert("An error occurred while making the reservation.");
        }
    };

    return (
        <div className="form-reserva-container">
            <div className="form-reserva-card">
                <h2 className="form-reserva-title">
                    <FiCheck className="icon-title" /> Confirm Reservation
                </h2>
                
                <div className="reservation-details">
                    <div className="detail-item">
                        <FiMapPin className="detail-icon" />
                        <span><strong>Zone:</strong> {reservationZone}</span>
                    </div>
                    <div className="detail-item">
                        <FiCalendar className="detail-icon" />
                        <span><strong>Day:</strong> {reservationDay}</span>
                    </div>
                    <div className="detail-item">
                        <FiClock className="detail-icon" />
                        <span><strong>Hour:</strong> {reservationHour}</span>
                    </div>
                </div>

                <form className='formulario-reserva' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='form-label'>
                            <FiUser className="input-icon" /> Name
                        </label>
                        <input
                            type="text"
                            className='form-input'
                            placeholder='Enter your name'
                            value={reservationName}
                            onChange={(e) => setReservationName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='form-label'>
                            <FiMail className="input-icon" /> Email
                        </label>
                        <input
                            type="email"
                            className='form-input'
                            placeholder='youremail@example.com'
                            value={reservationEmail}
                            onChange={(e) => setReservationEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className='form-label'>
                            <FiPhone className="input-icon" /> Phone
                        </label>
                        <input
                            type="tel"
                            className='form-input'
                            placeholder='phone number'
                            value={reservationPhone}
                            onChange={(e) => setReservationPhone(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className='submit-button'>
                        Confirm reservation
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioReserva;