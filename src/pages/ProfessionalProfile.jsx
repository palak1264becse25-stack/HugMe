import { Link, useParams } from "react-router-dom";

const doctors = [
  {
    id: "ananya-sharma",
    name: "Dr. Ananya Sharma",
    role: "Clinical Psychologist",
    experience: "8 years",
    fee: "₹800",
    availability: "Available today",
    emoji: "👩‍⚕️",
    languages: ["English", "Hindi", "Punjabi"],
    speciality: [
      "Stress Management",
      "Emotional Wellbeing",
      "Coping Strategies",
      "Self-Esteem",
    ],
    about:
      "Helps people understand their emotions, manage stress, and develop healthier coping strategies.",
    qualification: "M.Phil. Clinical Psychology",
    achievements: [
      "8+ years of professional experience",
      "Specialised in emotional wellbeing",
      "Works with stress and self-esteem concerns",
      "Experienced in individual counselling",
    ],
  },

  {
    id: "riya-mehta",
    name: "Dr. Riya Mehta",
    role: "Psychologist",
    experience: "6 years",
    fee: "₹700",
    availability: "Available tomorrow",
    emoji: "👩‍⚕️",
    languages: ["English", "Hindi"],
    speciality: [
      "Emotional Wellbeing",
      "Self-Esteem",
      "Relationships",
      "Young Adult Support",
    ],
    about:
      "Focuses on emotional wellbeing, self-esteem, relationships, and supporting young adults through difficult periods.",
    qualification: "M.A. Psychology",
    achievements: [
      "6+ years of counselling experience",
      "Focus on young adult wellbeing",
      "Specialised in relationship concerns",
      "Experienced in emotional support sessions",
    ],
  },

  {
    id: "arjun-kapoor",
    name: "Dr. Arjun Kapoor",
    role: "Psychiatrist",
    experience: "10 years",
    fee: "₹1000",
    availability: "Available today",
    emoji: "👨‍⚕️",
    languages: ["English", "Hindi"],
    speciality: [
      "Psychiatric Consultation",
      "Emotional Health",
      "Psychological Concerns",
      "Mental Wellbeing",
    ],
    about:
      "Provides psychiatric consultations and support for emotional and psychological concerns.",
    qualification: "M.D. Psychiatry",
    achievements: [
      "10+ years of professional experience",
      "Experienced in psychiatric consultations",
      "Supports individuals with emotional concerns",
      "Provides personalised mental health guidance",
    ],
  },

  {
    id: "meera-singh",
    name: "Dr. Meera Singh",
    role: "Counselling Psychologist",
    experience: "5 years",
    fee: "₹600",
    availability: "Available this week",
    emoji: "👩‍⚕️",
    languages: ["English", "Hindi", "Punjabi"],
    speciality: [
      "Counselling",
      "Relationships",
      "Personal Growth",
      "Emotional Support",
    ],
    about:
      "Creates a calm and supportive environment where people can talk openly about emotions, relationships, and personal growth.",
    qualification: "M.A. Counselling Psychology",
    achievements: [
      "5+ years of counselling experience",
      "Specialised in personal growth",
      "Focus on relationship support",
      "Creates a supportive counselling environment",
    ],
  },
];

function ProfessionalProfile() {
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === id);

  if (!doctor) {
    return (
      <div className="profile-not-found">
        <div className="not-found-card">
          <div className="not-found-icon">🌿</div>

          <h1>Professional not found</h1>

          <p>
            We couldn't find the professional you're looking for.
          </p>

          <Link to="/professionals" className="back-professionals-button">
            ← Back to Professionals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="professional-profile-page">

      {/* ================= HEADER ================= */}

      <header className="profile-header">
        <Link to="/professionals" className="profile-back">
          ← Back to Professionals
        </Link>

        <Link to="/dashboard" className="profile-logo">
          Hug<span>Me</span> 🌿
        </Link>
      </header>


      {/* ================= MAIN ================= */}

      <main className="profile-container">

        {/* ================= PROFILE HERO ================= */}

        <section className="profile-hero">

          <div className="profile-avatar-wrapper">
            <div className="profile-avatar">
              {doctor.emoji}
            </div>

            <span className="verified-badge">
              ✓ Verified
            </span>
          </div>


          <div className="profile-main-info">

            <p className="profile-role">
              {doctor.role}
            </p>

            <h1>{doctor.name}</h1>

            <p className="profile-about">
              {doctor.about}
            </p>


            {/* QUICK INFORMATION */}

            <div className="profile-stats">

              <div className="profile-stat">
                <span>🕐</span>
                <div>
                  <small>Experience</small>
                  <strong>{doctor.experience}</strong>
                </div>
              </div>

              <div className="profile-stat">
                <span>🎓</span>
                <div>
                  <small>Qualification</small>
                  <strong>{doctor.qualification}</strong>
                </div>
              </div>

              <div className="profile-stat">
                <span>🌿</span>
                <div>
                  <small>Availability</small>
                  <strong>{doctor.availability}</strong>
                </div>
              </div>

            </div>


            {/* LANGUAGES */}

            <div className="profile-languages">

              <strong>Languages</strong>

              <div className="language-tags">
                {doctor.languages.map((language) => (
                  <span key={language}>
                    {language}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </section>


        {/* ================= SPECIALITIES ================= */}

        <section className="profile-section">

          <div className="section-heading-profile">
            <div>
              <p className="section-label">
                AREAS OF SUPPORT
              </p>

              <h2>Specialities</h2>

              <p className="section-description">
                Areas this professional commonly works with.
              </p>
            </div>

            <div className="section-count">
              {doctor.speciality.length}
              <span>areas</span>
            </div>
          </div>


          <div className="specialities-grid">

            {doctor.speciality.map((item, index) => (
              <div
                className="speciality-card"
                key={item}
              >
                <div className="speciality-number">
                  0{index + 1}
                </div>

                <div className="speciality-icon">
                  🌱
                </div>

                <div>
                  <h3>{item}</h3>
                  <p>
                    Personalised support and guidance.
                  </p>
                </div>
              </div>
            ))}

          </div>

        </section>


        {/* ================= ACHIEVEMENTS ================= */}

        <section className="profile-section achievements-section">

          <div className="section-heading-profile">
            <div>
              <p className="section-label">
                EXPERIENCE & ACHIEVEMENTS
              </p>

              <h2>Professional highlights</h2>

              <p className="section-description">
                Experience and professional strengths that define
                their approach to care.
              </p>
            </div>

            <div className="achievement-symbol">
              ✦
            </div>
          </div>


          <div className="achievement-list">

            {doctor.achievements.map((achievement, index) => (
              <div
                className="achievement-item"
                key={achievement}
              >

                <div className="achievement-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="achievement-content">
                  <span>Professional highlight</span>
                  <p>{achievement}</p>
                </div>

                <div className="achievement-check">
                  ✓
                </div>

              </div>
            ))}

          </div>

        </section>


        {/* ================= BOOKING ================= */}

        <section className="profile-booking">

          <div className="booking-content">

            <p className="booking-label">
              READY TO TAKE THE NEXT STEP?
            </p>

            <h2>
              Begin your conversation with{" "}
              <span>{doctor.name}</span>
            </h2>

            <p>
              Choose a convenient appointment and take the
              next step towards professional support.
            </p>

          </div>


          <div className="booking-action">

            <div className="booking-price">
              <span>SESSION FROM</span>
              <strong>{doctor.fee}</strong>
            </div>

            <Link
              to={`/book-appointment/${doctor.id}`}
              className="book-button"
            >
              Book Appointment →
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ProfessionalProfile;