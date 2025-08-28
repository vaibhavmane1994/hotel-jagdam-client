import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional for fade animations
import './App.css';

function App() {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', people: 1 });
  const [qr, setQR] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/book', form);
    setQR(res.data.qr);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white text-center position-relative" style={{ height: '100vh' }}>
        <img src="https://source.unsplash.com/1600x900/?hotel,luxury" alt="Hero" className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover opacity-50" />
        <div className="position-relative z-1 d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-3 fw-bold fade-in">Hotel Jagdam</h1>
          <p className="lead fade-in delay-1">Where luxury meets comfort</p>
          <a href="#booking" className="btn btn-primary mt-3 btn-lg fade-in delay-2">Reserve a Table</a>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <i className="bi bi-cup-straw fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Fine Dining</h5>
                <p className="card-text">Enjoy curated gourmet dishes in an elegant setting.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <i className="bi bi-house-door fs-1 text-success mb-3"></i>
                <h5 className="card-title">Luxury Rooms</h5>
                <p className="card-text">Unwind in our modern, spacious, and cozy rooms.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow border-0">
              <div className="card-body">
                <i className="bi bi-heart-pulse fs-1 text-danger mb-3"></i>
                <h5 className="card-title">Relaxing Spa</h5>
                <p className="card-text">Indulge in rejuvenating spa treatments and massages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
  <section id="booking" className="bg-light py-5">
  <div className="container">
    <h2 className="text-center mb-4">Booking Form</h2>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <input
              type="date"
              className="form-control"
              required
              value={form.date}
              onChange={e => setForm({ ...form, date: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <input
              type="time"
              className="form-control"
              required
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              min="1"
              className="form-control"
              placeholder="People"
              required
              value={form.people}
              onChange={e => setForm({ ...form, people: e.target.value })}
            />
          </div>

          {/* Price Field */}
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              readOnly
              value={`₹${form.people * 1200 || 1200}`} // Example calculation
            />
          </div>

          {/* Privacy Policy Section */}
          <div className="col-12">
            <h5>Privacy Policy</h5>
            <p className="small text-muted">
              Your data will be used only for booking and communication purposes.
              We respect your privacy and will not share your details with any
              third party.
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="privacy"
                required
                checked={form.privacy || false}
                onChange={e => setForm({ ...form, privacy: e.target.checked })}
              />
              <label className="form-check-label" htmlFor="privacy">
                I agree to the Privacy Policy by <strong>Vaibhav Prakash Mane (vaibhav.pointing@gmail.com Contact:-8237753751 Address:-Konjar road raigad)</strong>.
              </label>
            </div>
          </div>

          {/* Refund Policy Section */}
          <div className="col-12">
            <h5>Refund Policy</h5>
            <p className="small text-muted">
              Cancellations must be made 24 hours before the booking time to
              receive a full refund. No refunds will be issued for late
              cancellations or no-shows.
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="refund"
                required
                checked={form.refund || false}
                onChange={e => setForm({ ...form, refund: e.target.checked })}
              />
              <label className="form-check-label" htmlFor="refund">
                I agree to the Refund Policy.
              </label>
            </div>
          </div>

          {/* Submit */}
          <div className="col-12 text-center">
            <button
              className="btn btn-success px-5"
              disabled={!form.privacy || !form.refund}
            >
              Book Now
            </button>
          </div>
        </form>

        {qr && (
          <div className="text-center mt-4">
            <h5>Scan to Pay</h5>
            <img src={qr} alt="QR Code" className="img-fluid" style={{ width: 200 }} />
          </div>
        )}
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">© {new Date().getFullYear()} Hotel Jagdam. All rights reserved.</p>
         <div className="footer-links mb-3">
          <a
  href={`${process.env.PUBLIC_URL}/Termsandcondition.html`}
  target="_blank"
  rel="noopener noreferrer"
>
  Terms & Conditions
</a>
          |
         <a
  href={`${process.env.PUBLIC_URL}/Refundpolicy.html`}
  target="_blank"
  rel="noopener noreferrer"
>
            Refund Policy
          </a>
          |
            <a
  href={`${process.env.PUBLIC_URL}/Privacypolicy.html`}
  target="_blank"
  rel="noopener noreferrer"
>
  Privacy Policy

          </a>
          
        </div>

      </footer>
    </>
  );
}

export default App;
