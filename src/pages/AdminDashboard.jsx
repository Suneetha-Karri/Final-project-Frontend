
import { useState } from 'react';

function AdminDashboard() {
  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem('homeease_bookings') || '[]')
  );

  function updateStatus(index, status) {
    const updated = [...bookings];
    updated[index].status = status;

    setBookings(updated);
    localStorage.setItem('homeease_bookings', JSON.stringify(updated));
  }

  return (
    <div className="home-container">
      <h2>Admin Dashboard</h2>
      <h3>Customer Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div className="services-grid">
          {bookings.map((booking, index) => (
            <div className="service-card" key={index}>
              <h3>{booking.service}</h3>
              <p>Name: {booking.name}</p>
              <p>Phone: {booking.phone}</p>
              <p>Price: {booking.price}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>

              <label>Booking Status:</label>
              <select
                value={booking.status || 'Pending'}
                onChange={(e) => updateStatus(index, e.target.value)}
              >
                <option>Pending</option>
                <option>Confirmed</option>
                <option>Completed</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
