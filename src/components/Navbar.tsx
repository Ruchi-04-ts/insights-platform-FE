import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Insight<span className="text-violet-600">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-black"
          >
            About
          </a>

          <Link
            to="/signup"
            className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile */}
        <Link
          to="/signup"
          className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white md:hidden"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}