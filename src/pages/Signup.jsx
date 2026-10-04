import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");


  const handleSignup = (e) => {

    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Temporary signup
    // Real authentication will be added later.

    navigate("/dashboard");
  };


  return (
    <div className="auth-page">

      <div className="auth-left">

        <Link to="/" className="auth-logo">
          Hug<span>Me</span> 🌿
        </Link>

        <div className="auth-message">

          <p>START YOUR JOURNEY</p>

          <h1>
            There is
            <br />
            room for you here.
          </h1>

          <span>
            Create your personal wellbeing space
            with HugMe.
          </span>

        </div>

      </div>


      <div className="auth-right">

        <form className="auth-form" onSubmit={handleSignup}>

          <h2>Create your account 🌱</h2>

          <p>
            Let's create your personal HugMe space.
          </p>


          <label>Name</label>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />


          <label>Email</label>

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <label>I am joining as</label>

          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option>User</option>
            <option>Psychologist</option>
            <option>Psychiatrist</option>
          </select>


          <button type="submit">
            Create My Account →
          </button>


          <div className="auth-footer">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign in
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Signup;