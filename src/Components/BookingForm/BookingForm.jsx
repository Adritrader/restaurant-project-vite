import React, { useState } from 'react';
import styles from './BookingForm.module.css';

function BookingForm() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    roomType: 'standard'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', bookingData);
    // Here we'll add the booking logic later
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.bookingForm}>
      <h3>Reserva tu estancia</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Fecha de entrada</label>
          <input
            type="date"
            name="checkIn"
            value={bookingData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Fecha de salida</label>
          <input
            type="date"
            name="checkOut"
            value={bookingData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Adultos</label>
            <select name="adults" value={bookingData.adults} onChange={handleChange}>
              {[1,2,3,4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Niños</label>
            <select name="children" value={bookingData.children} onChange={handleChange}>
              {[0,1,2,3].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Tipo habitación</label>
          <select name="roomType" value={bookingData.roomType} onChange={handleChange}>
            <option value="standard">Habitación Estandar</option>
            <option value="deluxe">Habitación Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Comprobar disponibilidad
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
