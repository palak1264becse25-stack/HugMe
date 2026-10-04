import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Hug<span>Me</span> 🌿
        </div>

        <div className="nav-links">
          <Link to="/login">Log In</Link>

          <Link to="/signup" className="nav-signup">
            Create Account
          </Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            YOUR MIND DESERVES CARE
          </p>

          <h1>
            A safe space
            <br />
            <span>to understand yourself.</span>
          </h1>

          <p className="hero-description">
            HugMe helps you understand your emotions, reflect on
            your wellbeing, and connect with professional mental
            health support when you need it.
          </p>

          <div className="hero-buttons">

            <Link to="/signup" className="primary-button">
              Begin Your Journey →
            </Link>

            <Link to="/login" className="secondary-button">
              I already have an account
            </Link>

          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="hero-circle">
            🌱
          </div>

          <div className="floating-card card-one">
            💛
            <span>You matter.</span>
          </div>

          <div className="floating-card card-two">
            🌤️
            <span>Take a breath.</span>
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="section-heading">
          <p>HOW HUGME HELPS</p>

          <h2>
            Your wellbeing,
            <br />
            one step at a time.
          </h2>
        </div>


        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🪞</div>

            <h3>Understand Yourself</h3>

            <p>
              Reflect on your mood and emotions through
              simple, thoughtful check-ins.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🌱</div>

            <h3>Grow at Your Pace</h3>

            <p>
              Explore wellness activities designed to help
              you build healthier everyday habits.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🩺</div>

            <h3>Find Professional Support</h3>

            <p>
              Explore qualified mental health professionals
              and discover support options.
            </p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="logo">
          Hug<span>Me</span> 🌿
        </div>

        <p>
          Your wellbeing matters.
        </p>
      </footer>

    </div>
  );
}

export default Home;