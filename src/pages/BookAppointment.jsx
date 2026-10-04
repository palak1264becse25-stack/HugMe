
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const doctors = [
  {
    id: "ananya-sharma",
    name: "Dr. Ananya Sharma",
    role: "Clinical Psychologist",
    experience: "8 years",
    fee: "₹800",
    availability: "Available today",
    emoji: "👩‍⚕️",
  },
  {
    id: "riya-mehta",
    name: "Dr. Riya Mehta",
    role: "Psychologist",
    experience: "6 years",
    fee: "₹700",
    availability: "Available tomorrow",
    emoji: "👩‍⚕️",
  },
  {
    id: "arjun-kapoor",
    name: "Dr. Arjun Kapoor",
    role: "Psychiatrist",
    experience: "10 years",
    fee: "₹1000",
    availability: "Available today",
    emoji: "👨‍⚕️",
  },
  {
    id: "meera-singh",
    name: "Dr. Meera Singh",
    role: "Counselling Psychologist",
    experience: "5 years",
    fee: "₹600",
    availability: "Available this week",
    emoji: "👩‍⚕️",
  },
];

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
  "7:00 PM",
];

function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((doctor) => doctor.id === id);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!doctor) {
    return (
      <div className="booking-error">
        <h1>Professional not found</h1>

        <p>
          We couldn't find the professional you're looking for.
        </p>

        <Link to="/professionals">
          ← Back to Professionals
        </Link>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();

    // Make sure date and time are selected
    if (!date || !time) {
      alert("Please select a date and time.");
      return;
    }

    // Create temporary appointment details
    const appointmentDetails = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorRole: doctor.role,
      doctorEmoji: doctor.emoji,
      date,
      time,
      fee: doctor.fee,
    };

    // Save temporarily until payment is completed
    localStorage.setItem(
      "hugme_pending_appointment",
      JSON.stringify(appointmentDetails)
    );

    // Go to payment page
    navigate("/payment");
  };

  return (
    <div className="booking-page">

      {/* ================= HEADER ================= */}

      <header className="booking-header">

        <Link
          to={`/professional-profile/${doctor.id}`}
          className="booking-back"
        >
          ← Back to Profile
        </Link>

        <Link
          to="/dashboard"
          className="booking-logo"
        >
          Hug<span>Me</span> 🌿
        </Link>

      </header>


      {/* ================= MAIN ================= */}

      <main className="booking-container">

        {/* HEADING */}

        <div className="booking-heading">

          <p>BOOK A SESSION</p>

          <h1>
            Choose a time
            <br />
            <span>that works for you.</span>
          </h1>

          <span>
            Take a moment for yourself. We're here when you're ready.
          </span>

        </div>


        <div className="booking-layout">

          {/* ================= PROFESSIONAL CARD ================= */}

          <section className="booking-doctor-card">

            <div className="booking-avatar">
              {doctor.emoji}
            </div>

            <div className="booking-doctor-info">

              <p>{doctor.role}</p>

              <h2>{doctor.name}</h2>

              <span>
                {doctor.experience} experience
              </span>

              <div className="booking-availability">
                🌿 {doctor.availability}
              </div>

            </div>

            <div className="booking-fee">

              <small>SESSION FROM</small>

              <strong>{doctor.fee}</strong>

            </div>

          </section>


          {/* ================= BOOKING FORM ================= */}

          <form
            className="appointment-form"
            onSubmit={handleBooking}
          >

            {/* DATE */}

            <div className="booking-field">

              <label>
                Select a date
              </label>

              <input
                type="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
              />

            </div>


            {/* TIME */}

            <div className="booking-field">

              <label>
                Select a time
              </label>

              <div className="time-grid">

                {timeSlots.map((slot) => (

                  <button
                    type="button"
                    key={slot}
                    className={
                      time === slot
                        ? "time-slot selected"
                        : "time-slot"
                    }
                    onClick={() => setTime(slot)}
                  >
                    {slot}
                  </button>

                ))}

              </div>

            </div>


            {/* ================= SUMMARY ================= */}

            <div className="booking-summary">

              <div className="summary-title">
                Appointment summary
              </div>


              <div className="summary-row">

                <span>
                  Professional
                </span>

                <strong>
                  {doctor.name}
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Session fee
                </span>

                <strong>
                  {doctor.fee}
                </strong>

              </div>


              {date && (
                <div className="summary-row">

                  <span>
                    Date
                  </span>

                  <strong>
                    {date}
                  </strong>

                </div>
              )}


              {time && (
                <div className="summary-row">

                  <span>
                    Time
                  </span>

                  <strong>
                    {time}
                  </strong>

                </div>
              )}

            </div>


            {/* ================= PAYMENT BUTTON ================= */}

            <button
              type="submit"
              className="confirm-booking-button"
            >
              Proceed to Payment →
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default BookAppointment;


