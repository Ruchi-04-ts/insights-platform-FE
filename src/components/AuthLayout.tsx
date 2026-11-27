import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AuthLayoutProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  points: string[];
  children: ReactNode;
}

function AuthLayout({
  badge,
  title,
  highlight,
  description,
  points,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f8f8f6]">
      <Navbar />

      <main className="px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-2">
          {/* Left panel */}
          <div className="relative hidden overflow-hidden bg-[#171717] p-12 text-white lg:block xl:p-16">
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-wider text-violet-300">
                {badge}
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight tracking-[-2px]">
                {title}
                <span className="block text-violet-400">{highlight}</span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">
                {description}
              </p>

              <div className="mt-10 space-y-5 text-sm text-gray-300">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20 text-xs text-violet-300">
                      ✓
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex items-center p-8 sm:p-12 xl:p-16">
            <div className="w-full">{children}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AuthLayout;