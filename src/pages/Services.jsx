
import { useState } from 'react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [message, setMessage] = useState('');

  const services = [
    { name: 'Electrical Repair', price: '₹299', image: '/WhatsApp Image 2026-09-24 at 6.56.04 PM.jpeg' },
    { name: 'Plumbing', price: '₹249', image: '/WhatsApp Image 2026-09-24 at 6.56.05 PM.jpeg' },
    { name: 'Home Cleaning', price: '₹499', image: '/WhatsApp Image 2026-09-24 at 6.56.04 PM (1).jpeg' },
    { name: 'AC Repair', price: '₹449', image: '/WhatsApp Image 2026-09-24 at 7.10.34 PM.jpeg' },
    { name: 'Painting', price: '₹799', image: '/WhatsApp Image 2026-09-24 at 7.05.06 PM.jpeg' },
    { name: 'Carpentry', price: '₹399', image: '/WhatsApp Image 2026-09-24 at 7.10.34 P.jpeg' }
  ];

  function handleBooking(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const booking = {
      ...Object.fromEntries(formData.entries()),
      service: selectedService.name,
      price: selectedService.price
    };

    const bookings = JSON.parse(
      localStorage.getItem('homeease_bookings') || '[]'
    );

    bookings.push(booking);

    localStorage.setItem('homeease_bookings', JSON.stringify(bookings));

    setMessage('Booking submitted successfully!');
    setSelectedService(null);
  }

  return (
    <div className="home-container">
      <section className="services">
        <h2>Our Home Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.price}</p>

              <button onClick={() => {
                setSelectedService(service);
                setMessage('');
              }}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedService && (
        <div className="auth-container">
          <h2>Book {selectedService.name}</h2>
          <p>Price: {selectedService.price}</p>

          <form onSubmit={handleBooking}>
            <input name="name" placeholder="Your Name" required />
            <input name="phone" placeholder="Phone Number" required />
            <input name="address" placeholder="Full Address" required />
            <input name="district" placeholder="District" required />
            <input name="pincode" placeholder="Pincode" required />
            <label>Select Date</label>
            <input name="date" type="date" required />
            <label>Select Time</label>
            <input name="time" type="time" required />

            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={() => setSelectedService(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {message && <h3>{message}</h3>}
    </div>
  );
}

export default Services;
