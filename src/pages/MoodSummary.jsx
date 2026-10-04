import { Link } from "react-router-dom";
import "./MoodSummary.css";

function MoodSummary() {

  // Get the complete mood record saved by MoodFactors
  const moodRecord =
    JSON.parse(localStorage.getItem("hugme_current_mood")) || {
      mood: "Okay",
      emoji: "😐",
      factors: [],
    };

  // Get all selected factors
  const factors = moodRecord.factors || [];

  const moodMessages = {
    Great:
      "You're feeling great today. Keep noticing the little things that are bringing you joy.",

    Good:
      "You're feeling good today. Keep noticing the small things that are helping you feel balanced.",

    Okay:
      "You're doing okay today. Give yourself space to notice what you need.",

    Low:
      "You're feeling low today. Be gentle with yourself and give yourself some extra care.",

    Struggling:
      "Today feels difficult. Remember that you don't have to handle everything alone.",
  };

  return (
    <div className="mood-summary-page">

      {/* ================= HEADER ================= */}

      <header className="summary-header">

        <Link
          to="/dashboard"
          className="summary-back"
        >
          ← Dashboard
        </Link>

        <div className="summary-logo">
          Hug<span>Me</span> 🌿
        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="summary-container">

        <section className="summary-card">

          <div className="summary-content">

            {/* MOOD EMOJI */}

            <div className="summary-emoji-wrapper">
              {moodRecord.emoji}
            </div>


            {/* LABEL */}

            <p className="summary-label">
              YOUR WELLBEING INSIGHT
            </p>


            {/* MOOD */}

            <h1 className="summary-title">
              Feeling {moodRecord.mood}
            </h1>


            {/* MESSAGE */}

            <p className="summary-message">
              {moodMessages[moodRecord.mood] ||
                "Take a moment to notice how you're feeling today."}
            </p>


            {/* DIVIDER */}

            <div className="summary-divider"></div>


            {/* ================= FACTORS ================= */}

            <section className="summary-factors">

              <h2 className="summary-factors-title">
                Things affecting your mood
              </h2>

              <div className="summary-factor-list">

                {factors.length > 0 ? (

                  factors.map((factor, index) => (

                    <span
                      key={`${factor}-${index}`}
                      className="summary-factor"
                    >
                      {factor}
                    </span>

                  ))

                ) : (

                  <span className="summary-factor">
                    Nothing specific
                  </span>

                )}

              </div>

            </section>


            {/* ================= REMINDER ================= */}

            <div className="summary-reminder">

              <div className="summary-reminder-icon">
                🌱
              </div>

              <div>
                <h3>
                  A gentle reminder
                </h3>

                <p>
                  Your feelings are worth noticing.
                  One small step at a time is enough.
                </p>
              </div>

            </div>


            {/* ================= ACTIONS ================= */}

            <div className="summary-actions">

              <Link
                to="/dashboard"
                className="summary-dashboard-button"
              >
                Back to Dashboard →
              </Link>

              <Link
                to="/mood-check"
                className="summary-check-again"
              >
                Check in again
              </Link>

            </div>

          </div>


          {/* DECORATION */}

          <div className="summary-decoration">
            🌿
          </div>

        </section>

      </main>

    </div>
  );
}

export default MoodSummary;