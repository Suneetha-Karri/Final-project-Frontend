
import { useState } from 'react';

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem('homeease_session') || 'null');

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem('homeease_bookings') || '[]')
  );

  function cancelBooking(index) {
    if (!window.confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    const updated = [...bookings];
    updated.splice(index, 1);

    setBookings(updated);
    localStorage.setItem('homeease_bookings', JSON.stringify(updated));
  }

  return (
    <div className="home-container">
      <h2>Welcome, {user?.name || 'Customer'}!</h2>
      <h3>My Bookings</h3>

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div className="services-grid">
          {bookings.map((booking, index) => (
            <div className="service-card" key={index}>
              <h3>{booking.service}</h3>
              <p>Price: {booking.price}</p>
              <p>Name: {booking.name}</p>
              <p>Phone: {booking.phone}</p>
              <p>Address: {booking.address}</p>
              <p>Date: {booking.date}</p>
              <p>Time: {booking.time}</p>
              <p>Status: {booking.status || 'Pending'}</p>

              <button onClick={() => cancelBooking(index)}>
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
