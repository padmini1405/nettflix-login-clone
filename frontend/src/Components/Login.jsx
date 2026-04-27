import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../Assets/Images/bgImg.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("All fields are required");
            return;
        }

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    email,
                    password,
                }
            );

            if (res.data.success) {
                navigate("/dashboard");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div
            className="hero-container"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="navbar">
                <h1 className="logo">NETTFLEX</h1>
            </div>

            <div className="hero-content">
                <h1 className="main-heading">
                    Unlimited movies, shows, and more
                </h1>

                <h3 className="sub-heading">
                    Starts at ₹149. Cancel at any time.
                </h3>

                <p className="desc">
                    Ready to watch? Enter your email and password to continue.
                </p>

                <form className="login-form" onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">Sign In</button>
                </form>
                <div>
                    <p>Email: test@gmail.com <br></br>Password: 123456</p>
                </div>
            </div>
        </div>
    );
}

export default Login;