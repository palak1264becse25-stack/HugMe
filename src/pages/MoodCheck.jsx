import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MoodCheck() {
  const navigate = useNavigate();

  const [mood, setMood] = useState("");
  const [issue, setIssue] = useState("");

  const moods = [
    {
      emoji: "😄",
      label: "Great",
      description: "I'm feeling good today.",
    },
    {
      emoji: "🙂",
      label: "Good",
      description: "Things feel okay.",
    },
    {
      emoji: "😐",
      label: "Okay",
      description: "I'm somewhere in the middle.",
    },
    {
      emoji: "😔",
      label: "Low",
      description: "I'm not feeling my best.",
    },
    {
      emoji: "😞",
      label: "Struggling",
      description: "Today feels difficult.",
    },
  ];

  const handleContinue = (e) => {
    e.preventDefault();

    if (!mood) {
      alert("Please choose how you're feeling today.");
      return;
    }

    if (!issue.trim()) {
      alert("Tell us a little about what is on your mind.");
      return;
    }

    const moodRecord = {
      mood,
      emoji: moods.find((item) => item.label === mood)?.emoji,
      issue: issue.trim(),
      date: new Date().toISOString(),
    };

    // Save latest check-in
    localStorage.setItem(
      "hugme_latest_mood",
      JSON.stringify(moodRecord)
    );

    // Save complete mood history
    const existingHistory =
      JSON.parse(localStorage.getItem("hugme_mood_history")) || [];

    localStorage.setItem(
      "hugme_mood_history",
      JSON.stringify([
        moodRecord,
        ...existingHistory,
      ])
    );

    // Send the user to Wellness
    navigate("/wellness");
  };

  return (
    <div className="mood-check-page">

      {/* HEADER */}
      <header className="mood-check-header">

        <Link to="/dashboard" className="mood-back">
          ← Dashboard
        </Link>

        <Link to="/dashboard" className="mood-logo">
          Hug<span>Me</span> 🌿
        </Link>

      </header>


      {/* MAIN */}
      <main className="mood-check-container">

        <section className="mood-check-card">

          <div className="mood-check-intro">

            <p className="mood-check-label">
              DAILY CHECK-IN
            </p>

            <h1>
              How are you
              <br />
              feeling today?
            </h1>

            <p>
              There is no right or wrong answer.
              Take a moment and choose the option that
              feels closest to you.
            </p>

          </div>


          {/* MOOD OPTIONS */}
          <div className="mood-options">

            {moods.map((item) => (

              <button
                type="button"
                key={item.label}
                className={`mood-option ${
                  mood === item.label ? "selected" : ""
                }`}
                onClick={() => setMood(item.label)}
              >

                <span className="mood-emoji">
                  {item.emoji}
                </span>

                <span className="mood-option-text">
                  <strong>{item.label}</strong>
                  <small>{item.description}</small>
                </span>

                <span className="mood-radio">
                  {mood === item.label ? "✓" : ""}
                </span>

              </button>

            ))}

          </div>


          {/* ISSUE SECTION */}
          <div className="mood-issue-section">

            <div className="mood-question-heading">

              <div className="question-number">
                02
              </div>

              <div>
                <p>WHAT'S ON YOUR MIND?</p>

                <h2>
                  Tell us what you're going through.
                </h2>
              </div>

            </div>


            <p className="mood-issue-description">
              You can write about anything that has been
              bothering you lately. There is no need to
              find the perfect words.
            </p>


            <textarea
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="For example: I've been feeling stressed about my studies and I haven't been able to relax..."
              rows="7"
              maxLength="1000"
            />

            <div className="mood-character-count">
              {issue.length}/1000
            </div>

          </div>


          {/* PRIVACY NOTE */}
          <div className="mood-privacy-note">
            <span>🔒</span>

            <p>
              Your words are used to personalize your
              HugMe experience. They are not a diagnosis.
            </p>
          </div>


          {/* CONTINUE */}
          <form onSubmit={handleContinue}>

            <button
              type="submit"
              className="mood-continue-button"
            >
              Continue to My Wellness Space →
            </button>

          </form>

        </section>

      </main>

    </div>
  );
}

export default MoodCheck;