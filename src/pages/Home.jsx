
function Home() {
  return (
    <div className="home-container">

      <section className="hero">
        <img
          src="/Image1.png"
          alt="HomeEase banner"
          className="hero-image"
        />
       
        <h1>Book Professional Home Services</h1>
        <p>Your Trusted Home Services Partner</p>
      </section>

      <section className="services">
        <h2>Our Popular Services</h2>

       <div className="services-grid">

  <div className="service-card">
    <img src="/WhatsApp Image 2026-09-24 at 6.56.04 PM (1).jpeg" alt="Cleaning" />
    <h3>Home Cleaning</h3>
    <p>₹499</p>
  </div>

  <div className="service-card">
    <img src="/WhatsApp Image 2026-09-24 at 6.56.04 PM.jpeg" alt="Electrician" />
    <h3>Electrical Repair</h3>
    <p>₹299</p>
  </div>

  <div className="service-card">
    <img src="/WhatsApp Image 2026-09-24 at 6.56.05 PM.jpeg" alt="Plumbing" />
    <h3>Plumbing</h3>
    <p>₹249</p>
  </div>

  <div className="service-card">
    <img src="/WhatsApp Image 2026-09-24 at 7.05.06 PM.jpeg" alt="Painting" />
    <h3>Painting</h3>
    <p>₹799</p>
  </div>

  <div className="service-card">
    <img src="/WhatsApp Image 2026-09-24 at 7.10.34 P.jpeg" alt="Carpentry" />
    <h3>Carpentry</h3>
    <p>₹399</p>
  </div>

  <div className="service-card">
    <img src="/WhatsApp Image 2026-09-24 at 7.10.34 PM.jpeg" alt="AC Repair" />
    <h3>AC Repair</h3>
    <p>₹449</p>
  </div>

</div>
      </section>

      <section className="why-choose">
        <h2>Why Choose HomeEase?</h2>
        <p>Trusted professionals, affordable prices and reliable services.</p>
      </section>

    </div>
  );
}

export default Home;
