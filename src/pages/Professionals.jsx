import { Link } from "react-router-dom";

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

function Professionals() {
  return (
    <div className="professionals-page">

      {/* HEADER */}
      <header className="professionals-header">
        <Link to="/dashboard" className="back-dashboard">
          ← Dashboard
        </Link>

        <Link to="/dashboard" className="professionals-logo">
          Hug<span>Me</span> 🌿
        </Link>
      </header>

      {/* HERO */}
      <section className="professionals-hero">
        <div>
          <p className="professionals-tag">
            PROFESSIONAL SUPPORT
          </p>

          <h1>
            Someone to talk to,
            <br />
            <span>when you need it.</span>
          </h1>

          <p className="professionals-description">
            Explore mental health professionals and find someone
            whose experience and speciality match your needs.
          </p>
        </div>

        <div className="professional-hero-card">
          <span>🩺</span>
          <div>
            <strong>Professional care</strong>
            <p>
              Support from qualified mental health professionals.
            </p>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="professionals-section">

        <div className="professionals-section-heading">
          <div>
            <p>OUR PROFESSIONALS</p>
            <h2>Find the right support for you.</h2>
          </div>

          <span>{doctors.length} professionals</span>
        </div>

        <div className="professionals-grid">

          {doctors.map((doctor) => (
            <article
              className="professional-card"
              key={doctor.id}
            >

              {/* TOP */}
              <div className="professional-card-top">

                <div className="doctor-avatar">
                  {doctor.emoji}
                </div>

                <div className="availability">
                  <span></span>
                  {doctor.availability}
                </div>

              </div>

              {/* MAIN */}
              <div className="professional-card-content">

                <p className="doctor-role">
                  {doctor.role}
                </p>

                <h3>{doctor.name}</h3>

                <div className="doctor-experience">
                  <strong>{doctor.experience}</strong>
                  <span>experience</span>
                </div>

                <p className="doctor-about">
                  {doctor.about}
                </p>

                <div className="speciality-list">
                  {doctor.speciality.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </div>

              {/* BOTTOM */}
              <div className="professional-card-bottom">

                <div>
                  <p>SESSION FROM</p>
                  <strong>{doctor.fee}</strong>
                </div>

                <Link
                  to={`/professional-profile/${doctor.id}`}
                  className="profile-button"
                >
                  View Profile →
                </Link>

              </div>

            </article>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Professionals;