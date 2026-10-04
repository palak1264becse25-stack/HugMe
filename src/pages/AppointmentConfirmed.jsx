import { Link, useParams } from "react-router-dom";

const doctors = {
  "ananya-sharma": {
    name: "Dr. Ananya Sharma",
    role: "Clinical Psychologist",
    emoji: "👩‍⚕️",
    experience: "8 years",
    fee: "₹800",
  },

  "riya-mehta": {
    name: "Dr. Riya Mehta",
    role: "Psychologist",
    emoji: "👩‍⚕️",
    experience: "6 years",
    fee: "₹700",
  },

  "arjun-kapoor": {
    name: "Dr. Arjun Kapoor",
    role: "Psychiatrist",
    emoji: "👨‍⚕️",
    experience: "10 years",
    fee: "₹1000",
  },

  "meera-singh": {
    name: "Dr. Meera Singh",
    role: "Counselling Psychologist",
    emoji: "👩‍⚕️",
    experience: "5 years",
    fee: "₹600",
  },
};

function AppointmentConfirmed() {
  const { id } = useParams();

  const doctor = doctors[id];

  const appointment = JSON.parse(
    localStorage.getItem("hugme_latest_appointment")
  );

  if (!doctor) {
    return (
      <div className="confirmation-page">
        <div className="confirmation-error">
          <h1>Appointment not found</h1>

          <p>
            We couldn't find the appointment details.
          </p>

          <Link to="/professionals" className="confirmation-button">
            Back to Professionals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-page">

      {/* HEADER */}

      <header className="confirmation-header">

        <Link
          to="/dashboard"
          className="confirmation-logo"
        >
          Hug<span>Me</span> 🌿
        </Link>

        <Link
          to="/appointments"
          className="confirmation-history-link"
        >
          My Appointments →
        </Link>

      </header>


      {/* MAIN */}

      <main className="confirmation-container">

        {/* SUCCESS */}

        <section className="confirmation-success">

          <div className="success-icon">
            ✓
          </div>

          <p className="confirmation-label">
            APPOINTMENT CONFIRMED
          </p>

          <h1>
            You're all set. <span>🌿</span>
          </h1>

          <p className="confirmation-subtitle">
            Your session has been successfully scheduled.
            We're glad you took this step for yourself.
          </p>

        </section>


        {/* APPOINTMENT CARD */}

        <section className="appointment-card">

          <div className="appointment-card-top">

            <div className="doctor-avatar-large">
              {doctor.emoji}
            </div>

            <div>

              <p className="doctor-role-small">
                {doctor.role}
              </p>

              <h2>
                {doctor.name}
              </h2>

              <p className="doctor-experience-small">
                {doctor.experience} experience
              </p>

            </div>

            <div className="confirmed-badge">
              <span>●</span>
              Confirmed
            </div>

          </div>


          {/* DETAILS */}

          <div className="appointment-details">

            <div className="appointment-detail">

              <span className="detail-icon">
                📅
              </span>

              <div>
                <small>DATE</small>

                <strong>
                  {appointment?.date || "Not selected"}
                </strong>
              </div>

            </div>


            <div className="appointment-detail">

              <span className="detail-icon">
                🕐
              </span>

              <div>
                <small>TIME</small>

                <strong>
                  {appointment?.time || "Not selected"}
                </strong>
              </div>

            </div>


            <div className="appointment-detail">

              <span className="detail-icon">
                💳
              </span>

              <div>
                <small>SESSION FEE</small>

                <strong>
                  {doctor.fee}
                </strong>
              </div>

            </div>

          </div>


          {/* NOTE */}

          <div className="appointment-note">

            <span>💛</span>

            <p>
              Please make sure you're somewhere comfortable
              and private before your session begins.
            </p>

          </div>

        </section>


        {/* ACTIONS */}

        <section className="confirmation-actions">

          <Link
            to="/appointments"
            className="confirmation-primary-button"
          >
            View My Appointments →
          </Link>

          <Link
            to="/dashboard"
            className="confirmation-secondary-button"
          >
            Return to Dashboard
          </Link>

        </section>


        {/* REMINDER */}

        <div className="confirmation-reminder">

          <span>🌱</span>

          <div>
            <strong>
              Taking the first step matters.
            </strong>

            <p>
              Your wellbeing deserves time, care and attention.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default AppointmentConfirmed;