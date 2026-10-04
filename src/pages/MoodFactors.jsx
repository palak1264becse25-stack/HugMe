import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoodFactors() {
  const navigate = useNavigate();

  const [selectedFactors, setSelectedFactors] = useState([]);

  const factors = [
    {
      name: "Relationships",
      emoji: "❤️",
    },
    {
      name: "Family",
      emoji: "🏠",
    },
    {
      name: "Studies",
      emoji: "📚",
    },
    {
      name: "Work",
      emoji: "💼",
    },
    {
      name: "Sleep",
      emoji: "😴",
    },
    {
      name: "Health",
      emoji: "🩺",
    },
    {
      name: "Finances",
      emoji: "💰",
    },
    {
      name: "Loneliness",
      emoji: "🌧️",
    },
    {
      name: "Nothing specific",
      emoji: "🌿",
    },
    {
      name: "Something else",
      emoji: "💭",
    },
  ];

  const toggleFactor = (factor) => {
    if (factor === "Nothing specific") {
      setSelectedFactors(["Nothing specific"]);
      return;
    }

    setSelectedFactors((previous) => {
      const updatedFactors = previous.filter(
        (item) => item !== "Nothing specific"
      );

      if (updatedFactors.includes(factor)) {
        return updatedFactors.filter(
          (item) => item !== factor
        );
      }

      return [...updatedFactors, factor];
    });
  };

  const handleContinue = () => {
    if (selectedFactors.length === 0) {
      alert("Please select at least one factor.");
      return;
    }

    const savedMood = localStorage.getItem(
      "hugme_current_mood"
    );

    const moodRecord = savedMood
      ? JSON.parse(savedMood)
      : {};

    const updatedRecord = {
      ...moodRecord,
      factors: selectedFactors,
      completedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "hugme_current_mood",
      JSON.stringify(updatedRecord)
    );

    navigate("/mood-summary");
  };

  return (
    <div className="mood-page">

      {/* HEADER */}

      <header className="mood-header">

        <button
          className="mood-back-button"
          onClick={() => navigate("/mood-check")}
        >
          ← Back
        </button>

        <div className="mood-logo">
          Hug<span>Me</span> 🌿
        </div>

      </header>


      {/* MAIN CONTENT */}

      <main className="mood-container">

        <div className="mood-factor-card">

          {/* PROGRESS */}

          <div className="mood-progress">

            <span className="active"></span>

            <span className="active"></span>

            <span></span>

          </div>


          {/* HEADING */}

          <p className="mood-label">
            A LITTLE MORE ABOUT TODAY
          </p>

          <h1>
            What's affecting
            <br />
            your mood?
          </h1>

          <p className="mood-description">
            Choose anything that feels connected to how
            you're feeling today.
            <br />
            You can select more than one.
          </p>


          {/* FACTORS */}

          <div className="factor-grid">

            {factors.map((factor) => {

              const isSelected =
                selectedFactors.includes(factor.name);

              return (
                <button
                  key={factor.name}
                  type="button"
                  className={`factor-option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() =>
                    toggleFactor(factor.name)
                  }
                >

                  <span className="factor-emoji">
                    {factor.emoji}
                  </span>

                  <span className="factor-name">
                    {factor.name}
                  </span>

                  {isSelected && (
                    <span className="factor-check">
                      ✓
                    </span>
                  )}

                </button>
              );

            })}

          </div>


          {/* CONTINUE */}

          <button
            className="save-mood-button"
            onClick={handleContinue}
          >
            Continue →
          </button>

        </div>

      </main>

    </div>
  );
}

export default MoodFactors;