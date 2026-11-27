import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useSignupMutation } from "../services/authApi";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [signup, { isLoading }] = useSignupMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const email = form.email.trim();

    if (name.length < 2) {
      setError("Please enter your full name");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      await signup({
        name,
        email,
        password: form.password,
      }).unwrap();

      navigate("/login", { state: { registered: true } });
    } catch (err: any) {
      setError(
        err?.data?.message || "Something went wrong while creating account"
      );
    }
  };

  return (
    <AuthLayout
      badge="START YOUR RESEARCH"
      title="Understand your"
      highlight="market better."
      description="Build surveys, collect audience responses and discover insights that help your team make smarter decisions."
      points={[
        "Create powerful research projects",
        "Collect structured audience responses",
        "Analyze market trends",
        "Generate meaningful insights",
      ]}
    >
      <div>
        <p className="text-xs font-bold tracking-[2px] text-violet-600">
          CREATE ACCOUNT
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight">
          Start your research journey
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Create your account and start building your first research project.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
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
            htmlFor="name"
            className="mb-2 block text-sm font-semibold"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputClass}
          />
        </div>

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
          <div className="mb-2 flex justify-between">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <span className="text-xs text-gray-400">Min. 8 characters</span>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={8}
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
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

        <label className="flex gap-3 text-xs leading-5 text-gray-500">
          <input type="checkbox" required className="mt-1" />
          <span>
            I agree to the{" "}
            <a href="#" className="font-semibold text-violet-600">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-semibold text-violet-600">
              Privacy Policy
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-black py-3.5 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Creating Account..." : "Create Account →"}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-black hover:underline"
        >
          Sign In
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

export default Signup;