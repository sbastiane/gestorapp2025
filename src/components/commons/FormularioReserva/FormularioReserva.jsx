import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
                alert("✅ Reserva realizada exitosamente.");
                navigate("/"); // Redirige al dashboard u otra vista si deseas
            } else {
                alert(`⚠️ No se pudo hacer la reserva: ${data.mensaje}`);
            }
        } catch (error) {
            console.error("❌ Error al realizar la reserva:", error);
            alert("Ocurrió un error al hacer la reserva.");
        }
    };

    return (
        <div>
            <h3 className='formulario-reserva__title'>Formulario de Reserva</h3>
            <form className='formulario-reserva' onSubmit={handleSubmit}>
                <label className='formulario-reserva__label'>Nombre:</label>
                <input
                    type="text"
                    className='formulario-reserva__input'
                    placeholder='Nombre'
                    value={reservationName}
                    onChange={(e) => setReservationName(e.target.value)}
                    required
                />
                <br />

                <label className='formulario-reserva__label'>Email:</label>
                <input
                    type="email"
                    className='formulario-reserva__input'
                    placeholder='Email'
                    value={reservationEmail}
                    onChange={(e) => setReservationEmail(e.target.value)}
                    required
                />
                <br />

                <label className='formulario-reserva__label'>Teléfono:</label>
                <input
                    type="tel"
                    className='formulario-reserva__input'
                    placeholder='Teléfono'
                    value={reservationPhone}
                    onChange={(e) => setReservationPhone(e.target.value)}
                    required
                />
                <br />

                <label>Zona a reservar: </label>
                <input type="text" readOnly value={reservationZone} />
                <br />

                <label>Hora de la reserva</label>
                <input type="text" readOnly value={reservationHour} />
                <br />

                <label>Día de la reserva</label>
                <input type="text" readOnly value={reservationDay} />
                <br />

                <button type="submit" className='formulario-reserva__button'>Reservar</button>
            </form>
        </div>
    );
};

export default FormularioReserva;
