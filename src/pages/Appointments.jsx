import { Link } from "react-router-dom";

function Appointments() {
  const appointments =
    JSON.parse(localStorage.getItem("hugme_appointments")) || [];

  return (
    <div className="appointments-page">

      {/* HEADER */}
      <header className="appointments-header">

        <Link to="/dashboard" className="appointments-back">
          ← Dashboard
        </Link>

        <Link to="/dashboard" className="appointments-logo">
          Hug<span>Me</span> 🌿
        </Link>

      </header>


      {/* MAIN */}
      <main className="appointments-container">

        <div className="appointments-intro">

          <p>YOUR WELLBEING JOURNEY</p>

          <h1>
            Your appointments
            <br />
            <span>all in one place.</span>
          </h1>

          <p className="appointments-description">
            Keep track of your upcoming and previous sessions
            with mental health professionals.
          </p>

        </div>


        {appointments.length === 0 ? (

          /* EMPTY STATE */

          <section className="appointments-empty">

            <div className="empty-icon">
              📅
            </div>

            <h2>No appointments yet</h2>

            <p>
              When you book a session with a professional,
              it will appear here.
            </p>

            <Link
              to="/professionals"
              className="find-professional-button"
            >
              Find a Professional →
            </Link>

          </section>

        ) : (

          /* APPOINTMENT HISTORY */

          <section className="appointments-list">

            <div className="appointments-list-heading">

              <div>
                <p>APPOINTMENT HISTORY</p>
                <h2>Your sessions</h2>
              </div>

              <span>
                {appointments.length}{" "}
                {appointments.length === 1
                  ? "appointment"
                  : "appointments"}
              </span>

            </div>


            {appointments
              .slice()
              .reverse()
              .map((appointment) => (

                <article
                  className="appointment-history-card"
                  key={appointment.id}
                >

                  <div className="history-doctor">

                    <div className="history-avatar">
                      {appointment.doctorEmoji || "🩺"}
                    </div>

                    <div>

                      <p>
                        {appointment.doctorRole}
                      </p>

                      <h3>
                        {appointment.doctorName}
                      </h3>

                    </div>

                  </div>


                  <div className="history-details">

                    <div>
                      <span>DATE</span>
                      <strong>
                        {appointment.date}
                      </strong>
                    </div>

                    <div>
                      <span>TIME</span>
                      <strong>
                        {appointment.time}
                      </strong>
                    </div>

                    <div>
                      <span>SESSION</span>
                      <strong>
                        {appointment.fee}
                      </strong>
                    </div>

                    <div>
                      <span>STATUS</span>

                      <strong className="appointment-status">
                        ✓ {appointment.status}
                      </strong>
                    </div>

                  </div>

                </article>

              ))}

          </section>

        )}

      </main>

    </div>
  );
}

export default Appointments;