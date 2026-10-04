import { Link } from "react-router-dom";

function Dashboard() {

  return (
    <div className="dashboard">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="dashboard-logo">
          Hug<span>Me</span> 🌿
        </div>


        <nav>

          <Link to="/dashboard">
            🏠 Dashboard
          </Link>

          <Link to="/mood-check">
            🌤️ Mood Check-In
          </Link>

          <Link to="/professionals">
            🩺 Professionals
          </Link>

          <Link to="/appointments">
            📅 Appointments
          </Link>

          <Link to="/wellness">
            🌱 Wellness
          </Link>

        </nav>


        <Link to="/" className="logout">
          Log Out
        </Link>

      </aside>


      {/* MAIN */}

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>
            <p>GOOD TO SEE YOU</p>

            <h1>
              How are you feeling today? 🌿
            </h1>
          </div>

        </header>


        {/* CHECK-IN */}

        <section className="checkin-banner">

          <div>

            <span>DAILY CHECK-IN</span>

            <h2>
              Give yourself a moment.
            </h2>

            <p>
              A quick check-in can help you
              understand how you're feeling today.
            </p>

          </div>

          <Link to="/mood-check">
            Check In →
          </Link>

        </section>


        {/* CARDS */}

        <section className="dashboard-cards">

          <div className="dashboard-card">

            <span>🌤️</span>

            <h3>
              Mood
            </h3>

            <p>
              Not checked in today
            </p>

            <Link to="/mood-check">
              Check your mood →
            </Link>

          </div>


          <div className="dashboard-card">

            <span>🩺</span>

            <h3>
              Professional Support
            </h3>

            <p>
              Find someone to talk to.
            </p>

            <Link to="/professionals">
              Explore professionals →
            </Link>

          </div>


          <div className="dashboard-card">

            <span>🌱</span>

            <h3>
              Wellness
            </h3>

            <p>
              Small steps can matter.
            </p>

            <Link to="/wellness">
              Explore wellness →
            </Link>

          </div>

        </section>


        {/* BOTTOM SECTION */}

        <section className="dashboard-bottom">

          <div className="dashboard-panel">

            <h2>
              Your wellbeing snapshot
            </h2>

            <p>
              Complete your first mood check-in
              to start building your personal
              wellbeing history.
            </p>

            <Link to="/mood-check">
              Start check-in →
            </Link>

          </div>


          <div className="dashboard-panel">

            <h2>
              A little reminder 💛
            </h2>

            <p>
              Let's heal, hug and love ourselves,
              one step is enough. Remember, you are not alone.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;