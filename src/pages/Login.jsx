import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Temporary login
    // Later we will connect this to real authentication

    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <Link to="/" className="auth-logo">
          Hug<span>Me</span> 🌿
        </Link>

        <div className="auth-message">

          <p>WELCOME BACK</p>

          <h1>
            Your space
            <br />
            is still here.
          </h1>

          <span>
            Take a breath. You're exactly where
            you need to be.
          </span>

        </div>

      </div>


      <div className="auth-right">

        <form className="auth-form" onSubmit={handleLogin}>

          <h2>Welcome back 👋</h2>

          <p>
            Sign in to continue your journey.
          </p>


          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button type="submit">
            Sign In →
          </button>


          <div className="auth-footer">

            <span>Don't have an account?</span>

            <Link to="/signup">
              Create one
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;