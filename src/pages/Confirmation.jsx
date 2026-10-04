import { Link, useLocation } from "react-router-dom";

function AppointmentConfirmed() {
  const location = useLocation();

  const {
    professional,
    date,
    time,
    sessionType,
  } = location.state || {};

  if (!professional) {
    return (
      <div className="booking-error">
        <div>
          <h2>No appointment found 🌿</h2>

          <p>
            Please book an appointment first.
          </p>

          <Link to="/professionals">
            Find a Professional
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(
    date
  ).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        <div className="success-icon">
          ✓
        </div>

        <span className="confirmation-label">
          APPOINTMENT CONFIRMED
        </span>

        <h1>
          Your session is booked. 🌿
        </h1>

        <p className="confirmation-message">
          Your appointment has been scheduled successfully.
          Take a moment to breathe. You've taken a step toward
          caring for yourself.
        </p>


        {/* APPOINTMENT DETAILS */}

        <div className="appointment-details">

          <div className="appointment-professional">

            <div className="confirmation-avatar">
              {professional.emoji}
            </div>

            <div>

              <span>WITH</span>

              <h2>
                {professional.name}
              </h2>

              <p>
                {professional.type}
              </p>

            </div>

          </div>


          <div className="detail-row">

            <div>
              <span>📅</span>

              <div>
                <small>DATE</small>
                <strong>{formattedDate}</strong>
              </div>
            </div>

            <div>
              <span>🕐</span>

              <div>
                <small>TIME</small>
                <strong>{time}</strong>
              </div>
            </div>

          </div>


          <div className="detail-row">

            <div>
              <span>
                {sessionType === "Video Call"
                  ? "📹"
                  : "📞"}
              </span>

              <div>
                <small>SESSION</small>
                <strong>{sessionType}</strong>
              </div>
            </div>

          </div>

        </div>


        {/* BUTTONS */}

        <div className="confirmation-actions">

          <Link
            to="/dashboard"
            className="confirmation-primary"
          >
            Back to Dashboard
          </Link>

          <Link
            to="/professionals"
            className="confirmation-secondary"
          >
            Explore Professionals
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AppointmentConfirmed;