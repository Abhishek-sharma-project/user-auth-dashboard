import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      {
        name,
        dob,
        email,
        password,
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-teal-500 to-cyan-500">
      <div className="relative w-80 bg-[#24314d] rounded-xl shadow-2xl pt-12 pb-8 px-6">
        {/* REGISTER tab */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-teal-300 px-8 py-2 rounded-md text-[#1e2a45] font-semibold">
          REGISTER
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 rounded-full border-4 border-teal-300 flex items-center justify-center text-teal-200 text-3xl">
            U
          </div>
        </div>

        <div className="space-y-3">
          <input
            placeholder="Name"
            className="w-full bg-[#4b5870] text-white px-4 py-2 rounded-md outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            className="w-full bg-[#4b5870] text-white px-4 py-2 rounded-md outline-none"
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#4b5870] text-white px-4 py-2 rounded-md outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#4b5870] text-white px-4 py-2 rounded-md outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleRegister}
          className="mt-6 w-full bg-teal-300 py-2 rounded-md text-[#1e2a45] cursor-pointer font-semibold"
        >
          REGISTER
        </button>

        <p className="text-center text-xs text-white mt-4">
          Already registered?{" "}
          <Link to="/" className="text-teal-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
