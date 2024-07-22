import { useAuth } from "../../contexts/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../firebase/auth";
import "../Login/Login.css";
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  // handle form for login
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      if(email == "admin@gmail.com"){
      navigate("/admin");
      } else {
      navigate("/");
      }
      console.log("Successfully logged in as:", email);
      await loginUser(email, password);
    } catch{
      setNotice("Invaild Credentials.");
    }
  }

  const handleSignupClick = () => {
    navigate("/signup");
  }

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  }

  return (
    <>
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="pacifico-regular">EComm</h1>
        { "" !== notice &&
          <div className = "alert alert-warning" role = "alert">
              { notice }    
          </div>
        }       
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
          <p className="signup" onClick={handleSignupClick}>
            Don't have an account? <strong>Sign Up</strong>
          </p>
          <p className="forgotPassword" onClick={handleForgotPasswordClick}>Forgot Password?</p>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
