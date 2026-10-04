import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const pendingAppointment = JSON.parse(
    localStorage.getItem("hugme_pending_appointment")
  );

  if (!pendingAppointment) {
    return (
      <div className="payment-error">
        <h1>No appointment found</h1>
        <p>Please select a professional and book an appointment first.</p>

        <Link to="/professionals">
          Find a Professional →
        </Link>
      </div>
    );
  }

  const handlePayment = (e) => {
    e.preventDefault();

    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      const paidAppointment = {
        ...pendingAppointment,
        status: "Confirmed",
        paymentStatus: "Paid",
        paymentMethod,
        bookedAt: new Date().toISOString(),
      };

      // Get existing appointments
      const existingAppointments =
        JSON.parse(localStorage.getItem("hugme_appointments")) || [];

      // Add paid appointment
      const updatedAppointments = [
        ...existingAppointments,
        paidAppointment,
      ];

      localStorage.setItem(
        "hugme_appointments",
        JSON.stringify(updatedAppointments)
      );

      // Save latest appointment
      localStorage.setItem(
        "hugme_latest_appointment",
        JSON.stringify(paidAppointment)
      );

      // Remove pending appointment
      localStorage.removeItem("hugme_pending_appointment");

      // Go to confirmation
      navigate(
        `/appointment-confirmed/${pendingAppointment.doctorId}`
      );
    }, 1500);
  };

  return (
    <div className="payment-page">

      {/* HEADER */}
      <header className="payment-header">

        <Link to="/dashboard" className="payment-logo">
          Hug<span>Me</span> 🌿
        </Link>

        <span className="secure-payment">
          🔒 Secure Payment
        </span>

      </header>


      {/* MAIN */}
      <main className="payment-container">

        <div className="payment-heading">

          <p>COMPLETE YOUR BOOKING</p>

          <h1>
            Take care of
            <br />
            <span>yourself today.</span>
          </h1>

          <span>
            You're one step away from your session.
          </span>

        </div>


        <div className="payment-layout">

          {/* LEFT SIDE */}
          <section className="payment-card">

            <div className="payment-card-header">
              <div>
                <p>SESSION WITH</p>

                <h2>
                  {pendingAppointment.doctorName}
                </h2>

                <span>
                  {pendingAppointment.doctorRole}
                </span>
              </div>

              <div className="payment-avatar">
                {pendingAppointment.doctorEmoji}
              </div>
            </div>


            {/* APPOINTMENT DETAILS */}
            <div className="payment-appointment-details">

              <div>
                <span>DATE</span>
                <strong>
                  {pendingAppointment.date}
                </strong>
              </div>

              <div>
                <span>TIME</span>
                <strong>
                  {pendingAppointment.time}
                </strong>
              </div>

            </div>


            <div className="payment-divider"></div>


            {/* PAYMENT METHOD */}
            <div className="payment-method-section">

              <p className="payment-section-title">
                PAYMENT METHOD
              </p>


              <div className="payment-methods">

                <button
                  type="button"
                  className={
                    paymentMethod === "card"
                      ? "payment-method active"
                      : "payment-method"
                  }
                  onClick={() => setPaymentMethod("card")}
                >
                  💳
                  <span>Card</span>
                </button>


                <button
                  type="button"
                  className={
                    paymentMethod === "upi"
                      ? "payment-method active"
                      : "payment-method"
                  }
                  onClick={() => setPaymentMethod("upi")}
                >
                  📱
                  <span>UPI</span>
                </button>


                <button
                  type="button"
                  className={
                    paymentMethod === "netbanking"
                      ? "payment-method active"
                      : "payment-method"
                  }
                  onClick={() =>
                    setPaymentMethod("netbanking")
                  }
                >
                  🏦
                  <span>Net Banking</span>
                </button>

              </div>


              {/* CARD FORM */}
              {paymentMethod === "card" && (

                <form
                  className="card-payment-form"
                  onSubmit={handlePayment}
                >

                  <div className="payment-field">

                    <label>Cardholder name</label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  <div className="payment-field">

                    <label>Card number</label>

                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                    />

                  </div>


                  <div className="payment-row">

                    <div className="payment-field">

                      <label>Expiry date</label>

                      <input
                        type="text"
                        placeholder="MM / YY"
                        required
                      />

                    </div>


                    <div className="payment-field">

                      <label>CVV</label>

                      <input
                        type="password"
                        placeholder="•••"
                        maxLength="3"
                        required
                      />

                    </div>

                  </div>


                  <button
                    type="submit"
                    className="pay-now-button"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing Payment..."
                      : `Pay ${pendingAppointment.fee} →`}
                  </button>

                </form>

              )}


              {/* UPI */}
              {paymentMethod === "upi" && (

                <form
                  className="card-payment-form"
                  onSubmit={handlePayment}
                >

                  <div className="payment-field">

                    <label>UPI ID</label>

                    <input
                      type="text"
                      placeholder="example@upi"
                      required
                    />

                  </div>


                  <button
                    type="submit"
                    className="pay-now-button"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing Payment..."
                      : `Pay ${pendingAppointment.fee} →`}
                  </button>

                </form>

              )}


              {/* NET BANKING */}
              {paymentMethod === "netbanking" && (

                <form
                  className="card-payment-form"
                  onSubmit={handlePayment}
                >

                  <div className="payment-field">

                    <label>Select your bank</label>

                    <select required>

                      <option value="">
                        Choose your bank
                      </option>

                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Punjab National Bank</option>

                    </select>

                  </div>


                  <button
                    type="submit"
                    className="pay-now-button"
                    disabled={loading}
                  >
                    {loading
                      ? "Processing Payment..."
                      : `Pay ${pendingAppointment.fee} →`}
                  </button>

                </form>

              )}

            </div>

          </section>


          {/* RIGHT SIDE */}
          <aside className="payment-summary">

            <div className="summary-icon">
              🌿
            </div>

            <h2>
              Appointment
              <br />
              summary
            </h2>


            <div className="summary-professional">

              <span>
                {pendingAppointment.doctorEmoji}
              </span>

              <div>
                <strong>
                  {pendingAppointment.doctorName}
                </strong>

                <small>
                  {pendingAppointment.doctorRole}
                </small>
              </div>

            </div>


            <div className="payment-summary-details">

              <div>
                <span>Date</span>
                <strong>
                  {pendingAppointment.date}
                </strong>
              </div>

              <div>
                <span>Time</span>
                <strong>
                  {pendingAppointment.time}
                </strong>
              </div>

              <div>
                <span>Consultation</span>
                <strong>
                  {pendingAppointment.fee}
                </strong>
              </div>

            </div>


            <div className="total-row">

              <span>Total</span>

              <strong>
                {pendingAppointment.fee}
              </strong>

            </div>


            <div className="payment-security">

              🔒

              <div>
                <strong>Safe & secure</strong>

                <p>
                  Your payment information is
                  protected and secure.
                </p>
              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default Payment;