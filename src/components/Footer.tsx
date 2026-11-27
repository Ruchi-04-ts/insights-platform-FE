import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold">
              Insight<span className="text-violet-400">Hub</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              A modern market research platform that helps teams create
              surveys, collect responses and transform research data into
              meaningful insights.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold">
              Platform
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a href="#features" className="block hover:text-white">
                Features
              </a>

              <a href="#how-it-works" className="block hover:text-white">
                How It Works
              </a>

              <Link to="/signup" className="block hover:text-white">
                Get Started
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a href="#about" className="block hover:text-white">
                About
              </a>

              <a href="#" className="block hover:text-white">
                Privacy
              </a>

              <a href="#" className="block hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-gray-500">
          © 2026 InsightHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

