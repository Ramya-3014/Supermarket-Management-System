import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!regName || !regEmail || !regPassword) {
      setError("Please fill all fields.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((user) => user.email === regEmail);
    if (userExists) {
      setError("User already registered with this email.");
      return;
    }

    users.push({ name: regName, email: regEmail, password: regPassword });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login now.");
    setIsLogin(true);
    setRegName("");
    setRegEmail("");
    setRegPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!loginEmail || !loginPassword) {
      setError("Please fill all fields.");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="form">
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Login
            </button>
            <p className="switch-link">
              New user?{" "}
              <span
                onClick={() => {
                  setError("");
                  setIsLogin(false);
                }}
              >
                Register here
              </span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Full Name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Register
            </button>
            <p className="switch-link">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setError("");
                  setIsLogin(true);
                }}
              >
                Login here
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
