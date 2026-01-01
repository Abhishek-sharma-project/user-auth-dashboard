import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-teal-500 to-cyan-500">
      <div className="relative w-80 bg-[#24314d] rounded-xl shadow-2xl pt-12 pb-8 px-6">
        {/* SIGN IN tab */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-teal-300 px-8 py-2 rounded-md text-[#1e2a45] font-semibold">
          SIGN IN
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full border-4 border-teal-300 flex items-center justify-center text-teal-200 text-3xl">
            U
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="email"
            className="w-full bg-[#4b5870] text-white px-4 py-2 rounded-md outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full bg-[#4b5870] text-white px-4 py-2 rounded-md outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember / Forgot */}
        <div className="flex justify-between text-xs text-teal-200 mt-3">
          <span>☑ Remember me</span>
          <span className="cursor-pointer">Forgot password?</span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-teal-300 py-2 rounded-md text-[#1e2a45] cursor-pointer font-semibold"
        >
          LOGIN
        </button>

        <p className="text-center text-xs text-white mt-4">
          New user?{" "}
          <Link to="/register" className="text-teal-300">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
