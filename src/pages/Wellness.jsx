import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  wellnessActivities,
  wellnessCategories,
  workshops,
} from "../data/wellnessActivities";

function Wellness() {
  const [latestMood, setLatestMood] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [workshopFilter, setWorkshopFilter] = useState("All");

  const [selectedActivity, setSelectedActivity] = useState(null);

  // ---------------------------------------------------------
  // LOAD LATEST MOOD CHECK-IN
  // ---------------------------------------------------------

  useEffect(() => {
    const savedMood = localStorage.getItem("hugme_latest_mood");

    if (savedMood) {
      try {
        setLatestMood(JSON.parse(savedMood));
      } catch (error) {
        console.error("Unable to read saved mood:", error);
      }
    }
  }, []);

  // ---------------------------------------------------------
  // PERSONALIZED ACTIVITIES
  // ---------------------------------------------------------

  const personalizedActivities = useMemo(() => {
    if (!latestMood) {
      return wellnessActivities.slice(0, 4);
    }

    const text =
      `${latestMood.mood || ""} ${latestMood.issue || ""}`.toLowerCase();

    let preferredCategories = [];

    if (
      text.includes("study") ||
      text.includes("exam") ||
      text.includes("college") ||
      text.includes("work") ||
      text.includes("pressure")
    ) {
      preferredCategories = ["Calm", "Move", "Reset"];
    } else if (
      text.includes("lonely") ||
      text.includes("alone") ||
      text.includes("friend") ||
      text.includes("isolated")
    ) {
      preferredCategories = ["Connect", "Create", "Move"];
    } else if (
      text.includes("relationship") ||
      text.includes("breakup") ||
      text.includes("partner")
    ) {
      preferredCategories = ["Reflect", "Connect", "Create"];
    } else if (
      text.includes("stress") ||
      text.includes("stressed") ||
      text.includes("anxious") ||
      text.includes("overwhelm") ||
      text.includes("pressure")
    ) {
      preferredCategories = ["Calm", "Move", "Reset"];
    } else if (
      text.includes("sad") ||
      text.includes("low") ||
      text.includes("upset") ||
      text.includes("cry")
    ) {
      preferredCategories = ["Reflect", "Create", "Connect"];
    } else if (
      text.includes("angry") ||
      text.includes("frustrated") ||
      text.includes("irritated")
    ) {
      preferredCategories = ["Move", "Create", "Calm"];
    } else if (
      text.includes("tired") ||
      text.includes("exhausted") ||
      text.includes("sleep")
    ) {
      preferredCategories = ["Reset", "Calm", "Move"];
    } else {
      preferredCategories = ["Calm", "Create", "Reflect"];
    }

    const matched = wellnessActivities.filter((activity) =>
      preferredCategories.includes(activity.category)
    );

    return matched.slice(0, 4);
  }, [latestMood]);

  // ---------------------------------------------------------
  // FILTER ACTIVITIES
  // ---------------------------------------------------------

  const filteredActivities = useMemo(() => {
    if (selectedCategory === "All") {
      return wellnessActivities;
    }

    return wellnessActivities.filter(
      (activity) => activity.category === selectedCategory
    );
  }, [selectedCategory]);

  // ---------------------------------------------------------
  // FILTER WORKSHOPS
  // ---------------------------------------------------------

  const filteredWorkshops = useMemo(() => {
    if (workshopFilter === "All") {
      return workshops;
    }

    return workshops.filter(
      (workshop) => workshop.format === workshopFilter
    );
  }, [workshopFilter]);

  // ---------------------------------------------------------
  // OPEN ACTIVITY GUIDE
  // ---------------------------------------------------------

  const openActivity = (activity) => {
    setSelectedActivity(activity);
  };

  // ---------------------------------------------------------
  // CLOSE ACTIVITY GUIDE
  // ---------------------------------------------------------

  const closeActivity = () => {
    setSelectedActivity(null);
  };

  return (
    <div className="wellness-page">

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header className="wellness-header">

        <Link to="/dashboard" className="wellness-back">
          ← Dashboard
        </Link>

        <Link to="/dashboard" className="wellness-logo">
          Hug<span>Me</span> 🌿
        </Link>

      </header>


      {/* =====================================================
          MAIN
          ===================================================== */}

      <main className="wellness-container">


        {/* ===================================================
            HERO
            =================================================== */}

        <section className="wellness-hero">

          <div className="wellness-hero-content">

            <p className="wellness-eyebrow">
              YOUR WELLNESS SPACE
            </p>

            <h1>
              Take care of
              <br />
              <span>yourself today.</span>
            </h1>

            <p>
              You don't have to do everything at once.
              Choose one small thing that feels right for you
              and start there.
            </p>

          </div>


          <div className="wellness-hero-art">

            <div className="wellness-art-circle">
              🌱
            </div>

            <span className="wellness-floating wellness-float-one">
              🧘
            </span>

            <span className="wellness-floating wellness-float-two">
              🎨
            </span>

            <span className="wellness-floating wellness-float-three">
              🌤️
            </span>

          </div>

        </section>


        {/* ===================================================
            PERSONALIZED WELLNESS
            =================================================== */}

        {latestMood && (

          <section className="personalized-wellness">

            <div className="personalized-header">

              <div className="personalized-avatar">
                {latestMood.emoji || "🌿"}
              </div>

              <div>

                <p>
                  YOUR CHECK-IN
                </p>

                <h2>
                  We hear you. 🌿
                </h2>

              </div>

            </div>


            <div className="personalized-message">

              <p className="personalized-mood">
                You're feeling{" "}
                <strong>
                  {latestMood.mood?.toLowerCase()}
                </strong>.
              </p>

              <p className="personalized-issue">
                You shared:
              </p>

              <blockquote>
                "{latestMood.issue}"
              </blockquote>

              <p className="personalized-explanation">
                Based on what you've shared, here are a few
                gentle activities you could try. Choose whatever
                feels manageable today.
              </p>

            </div>


            {/* RECOMMENDED ACTIVITIES */}

            <div className="personalized-activities">

              {personalizedActivities.map((activity) => (

                <article
                  className="personalized-activity"
                  key={activity.id}
                  onClick={() => openActivity(activity)}
                >

                  <div className="personalized-icon">
                    {activity.icon}
                  </div>

                  <div>

                    <h3>
                      {activity.title}
                    </h3>

                    <p>
                      {activity.description}
                    </p>

                    <span>
                      ⏱ {activity.duration}
                    </span>

                  </div>

                  <button
                    type="button"
                    className="personalized-explore"
                    onClick={(event) => {
                      event.stopPropagation();
                      openActivity(activity);
                    }}
                  >
                    Explore activity →
                  </button>

                </article>

              ))}

            </div>


            {/* PROFESSIONAL SUPPORT */}

            <div className="personalized-doctor">

              <div className="doctor-note-icon">
                🩺
              </div>

              <div>

                <p>
                  NEED MORE SUPPORT?
                </p>

                <h3>
                  You don't have to handle everything alone.
                </h3>

                <span>
                  If you'd like to speak with a qualified
                  professional, you can explore psychologists
                  and psychiatrists through HugMe.
                </span>

              </div>

              <Link to="/professionals">
                Talk to a Professional →
              </Link>

            </div>

          </section>

        )}


        {/* ===================================================
            CATEGORY SELECTOR
            =================================================== */}

        <section className="wellness-choice-section">

          <div className="wellness-section-heading">

            <div>

              <p>
                CHOOSE WHAT YOU NEED
              </p>

              <h2>
                What would feel good right now?
              </h2>

            </div>

            <span>
              Pick anything that speaks to you.
            </span>

          </div>


          <div className="wellness-category-grid">

            {wellnessCategories.map((category) => (

              <button
                type="button"
                key={category.id}
                className={`wellness-category ${
                  selectedCategory === category.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedCategory(category.id)
                }
              >

                <span className="category-icon">
                  {category.icon}
                </span>

                <span className="category-label">
                  {category.label}
                </span>

              </button>

            ))}

          </div>

        </section>


        {/* ===================================================
            ACTIVITIES
            =================================================== */}

        <section className="wellness-activities-section">

          <div className="wellness-section-heading">

            <div>

              <p>
                GENTLE IDEAS
              </p>

              <h2>
                Things you can try
              </h2>

            </div>

            <span>
              {filteredActivities.length} ideas
            </span>

          </div>


          <div className="wellness-activity-grid">

            {filteredActivities.map((activity) => (

              <article
                className="wellness-activity-card"
                key={activity.id}
              >

                <div className="activity-top">

                  <div className="activity-icon">
                    {activity.icon}
                  </div>

                  <span className="activity-category">
                    {activity.category}
                  </span>

                </div>


                <h3>
                  {activity.title}
                </h3>

                <p>
                  {activity.description}
                </p>


                <div className="activity-details">

                  <span>
                    ⏱ {activity.duration}
                  </span>

                  <span>
                    📍 {activity.format}
                  </span>

                </div>


               <button
  type="button"
  className="activity-button"
  onClick={() => openActivity(activity)}
>
  View Details →
</button>

              </article>

            ))}

          </div>

        </section>


        {/* ===================================================
            WORKSHOPS
            =================================================== */}

        <section className="workshops-section">

          <div className="workshops-header">

            <div>

              <p className="wellness-eyebrow">
                🌍 DISCOVER TOGETHER
              </p>

              <h2>
                Workshops around
                <br />
                <span>the world.</span>
              </h2>

              <p>
                Find online and in-person activities where
                you can learn, create, move, and connect.
              </p>

            </div>


            <div className="workshop-globe">
              🌎
            </div>

          </div>


          {/* WORKSHOP FILTER */}

          <div className="workshop-filters">

            <button
              type="button"
              className={
                workshopFilter === "All"
                  ? "active"
                  : ""
              }
              onClick={() => setWorkshopFilter("All")}
            >
              All workshops
            </button>

            <button
              type="button"
              className={
                workshopFilter === "Online"
                  ? "active"
                  : ""
              }
              onClick={() => setWorkshopFilter("Online")}
            >
              💻 Online
            </button>

            <button
              type="button"
              className={
                workshopFilter === "Offline"
                  ? "active"
                  : ""
              }
              onClick={() => setWorkshopFilter("Offline")}
            >
              📍 In person
            </button>

          </div>


          {/* WORKSHOP CARDS */}

          <div className="workshop-grid">

            {filteredWorkshops.map((workshop) => (

              <article
                className="workshop-card"
                key={workshop.id}
              >

                <div className="workshop-icon">
                  {workshop.icon}
                </div>

                <div className="workshop-card-content">

                  <div className="workshop-tags">

                    <span>
                      {workshop.type}
                    </span>

                    <span>
                      {workshop.format}
                    </span>

                  </div>


                  <h3>
                    {workshop.title}
                  </h3>

                  <p>
                    {workshop.description}
                  </p>


                  <div className="workshop-info">

                    <span>
                      📅 {workshop.date}
                    </span>

                    <span>
                      🕐 {workshop.time}
                    </span>

                    <span>
                      🌎 {workshop.location}
                    </span>

                  </div>


                  <button
                    type="button"
                    className="workshop-button"
                  >
                    View Workshop →
                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* ===================================================
            SUPPORT NOTE
            =================================================== */}

        <section className="wellness-support-note">

          <div className="support-note-icon">
            💛
          </div>

          <div>

            <p className="support-note-label">
              A LITTLE REMINDER
            </p>

            <h3>
              Wellness isn't about doing everything.
            </h3>

            <p>
              Choose what feels manageable today.
              And if you feel like you need more support,
              HugMe can also help you explore professional care.
            </p>

          </div>

          <Link to="/professionals">
            Find professional support →
          </Link>

        </section>

      </main>


      {/* =====================================================
          ACTIVITY GUIDE MODAL
          ===================================================== */}

      {selectedActivity && (

        <div
          className="activity-modal-overlay"
          onClick={closeActivity}
        >

          <div
            className="activity-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="activity-modal-close"
              onClick={closeActivity}
              aria-label="Close activity"
            >
              ×
            </button>


            {/* MODAL HEADER */}

            <div className="activity-modal-header">

              <div className="activity-modal-icon">
                {selectedActivity.icon}
              </div>

              <div>

                <span>
                  {selectedActivity.category}
                </span>

                <h2>
                  {selectedActivity.title}
                </h2>

                <p>
                  ⏱ {selectedActivity.duration}
                </p>

              </div>

            </div>


            {/* DESCRIPTION */}

            <p className="activity-modal-description">
              {selectedActivity.description}
            </p>


            {/* GUIDE */}

            <div className="activity-guide">

              <p className="activity-guide-label">
                TRY THIS
              </p>

              <h3>
                A simple way to begin
              </h3>


              <div className="activity-steps">

                {selectedActivity.guide?.map(
                  (step, index) => (

                    <div
                      className="activity-step"
                      key={`${selectedActivity.id}-${index}`}
                    >

                      <div className="activity-step-number">
                        {index + 1}
                      </div>

                      <p>
                        {step}
                      </p>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* REFLECTION */}

            <div className="activity-reflection">

              <span>
                💭
              </span>

              <div>

                <strong>
                  A little reflection
                </strong>

                <p>
                  {selectedActivity.prompt}
                </p>

              </div>

            </div>


            {/* MODAL FOOTER */}

            <div className="activity-modal-footer">

              <button
                type="button"
                className="activity-done-button"
                onClick={closeActivity}
              >
                Done for now ✓
              </button>

              <Link
                to="/professionals"
                className="activity-professional-link"
                onClick={closeActivity}
              >
                Need more support? Talk to a professional →
              </Link>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Wellness;