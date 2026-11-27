import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      console.log("Signup Data:", form);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f6]">

      <Navbar />

      <main className="px-6 py-16 lg:px-8">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-2">

          {/* Left */}
          <div className="hidden bg-[#171717] p-12 text-white lg:block xl:p-16">

            <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-wider text-violet-300">
              START YOUR RESEARCH
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-[-2px]">
              Understand your
              <span className="block text-violet-400">
                market better.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">
              Build surveys, collect audience responses and discover
              insights that help your team make smarter decisions.
            </p>

            <div className="mt-10 space-y-5 text-sm text-gray-300">

              <div className="flex gap-3">
                <span className="text-violet-400">✓</span>
                <span>Create powerful research projects</span>
              </div>

              <div className="flex gap-3">
                <span className="text-violet-400">✓</span>
                <span>Collect structured audience responses</span>
              </div>

              <div className="flex gap-3">
                <span className="text-violet-400">✓</span>
                <span>Analyze market trends</span>
              </div>

              <div className="flex gap-3">
                <span className="text-violet-400">✓</span>
                <span>Generate meaningful insights</span>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="flex items-center p-8 sm:p-12 xl:p-16">

            <div className="w-full">

              <div>
                <p className="text-xs font-bold tracking-[2px] text-violet-600">
                  CREATE ACCOUNT
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Start your research journey
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Create your account and start building your first
                  research project.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex justify-between">
                    <label className="text-sm font-semibold">
                      Password
                    </label>

                    <span className="text-xs text-gray-400">
                      Min. 8 characters
                    </span>
                  </div>

                  <input
                    type="password"
                    required
                    minLength={8}
                    value={form.password}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        password: e.target.value,
                      })
                    }
                    placeholder="Create a password"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                {/* Terms */}
                <label className="flex gap-3 text-xs leading-5 text-gray-500">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                  />

                  <span>
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-semibold text-violet-600"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-semibold text-violet-600"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-black py-3.5 text-sm font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Creating Account..."
                    : "Create Account →"}
                </button>

              </form>

              <div className="mt-7 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-semibold text-violet-600 hover:underline"
                >
                  Sign in
                </Link>
              </div>

              <button
                onClick={() => navigate("/")}
                className="mt-5 block w-full text-center text-xs text-gray-400 hover:text-black"
              >
                ← Back to Home
              </button>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Signup;