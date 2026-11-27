import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useLoginMutation } from "../services/authApi";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const justRegistered = Boolean(location.state?.registered);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const email = form.email.trim();

    if (!email || !form.password) {
      setError("Email and password are required");
      return;
    }

    try {
      const response = await login({
        email,
        password: form.password,
      }).unwrap();

      const token = response.data?.token;

      if (!token) {
        setError("Login failed. Token not received from server");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data?.user));

      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      setError(err?.data?.message || "Invalid email or password");
    }
  };

  return (
    <AuthLayout
      badge="WELCOME BACK"
      title="Continue your"
      highlight="research journey."
      description="Sign in to manage your surveys, track responses and keep discovering insights."
      points={[
        "Access all your research projects",
        "Track responses in real time",
        "Pick up right where you left off",
      ]}
    >
      <div>
        <p className="text-xs font-bold tracking-[2px] text-violet-600">
          SIGN IN
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Welcome back
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Enter your credentials to access your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {justRegistered && !error && (
          <div
            role="status"
            className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            Account created successfully. Please sign in.
          </div>
        )}

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`${inputClass} pr-16`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 hover:text-black"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-black py-3.5 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Signing In..." : "Sign In →"}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-black hover:underline"
        >
          Create Account
        </Link>
      </p>

      <Link
        to="/"
        className="mt-5 block text-center text-xs text-gray-400 hover:text-black"
      >
        ← Back to Home
      </Link>
    </AuthLayout>
  );
}

export default Login;