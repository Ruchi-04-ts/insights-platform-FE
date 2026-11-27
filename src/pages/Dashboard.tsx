import { Link, useNavigate } from "react-router-dom";

interface StoredUser {
  id?: number;
  name?: string;
  email?: string;
}

const getStoredUser = (): StoredUser => {
  try {
    return JSON.parse(localStorage.getItem("user") || "{}") || {};
  } catch {
    return {};
  }
};

function Dashboard() {
  const navigate = useNavigate();
  const user = getStoredUser();

  const firstName = user.name?.trim().split(" ")[0] || "there";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#171717]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            Insight<span className="text-violet-600">Hub</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-gray-50"
            >
              ← Home
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Welcome */}
        <section className="relative overflow-hidden rounded-3xl bg-[#171717] p-8 text-white md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-bold tracking-wider text-violet-300">
              DASHBOARD
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
              Welcome back, {firstName} 👋
            </h1>

            <p className="mt-3 max-w-xl text-gray-400">
              Create surveys, collect responses and turn audience data into
              meaningful insights.
            </p>

            {user.email && (
              <p className="mt-4 text-xs text-gray-500">
                Signed in as {user.email}
              </p>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Surveys" value="0" />
          <StatCard label="Active Surveys" value="0" />
          <StatCard label="Total Responses" value="0" />
          <StatCard label="Completion Rate" value="0%" />
        </section>

        {/* Quick actions */}
        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight">Quick actions</h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <ActionCard
              number="01"
              title="Create Survey"
              text="Start a new research project and build your questions."
            />
            <ActionCard
              number="02"
              title="View Responses"
              text="See what your audience has submitted so far."
            />
            <ActionCard
              number="03"
              title="Analyze Insights"
              text="Explore trends and patterns across your data."
            />
          </div>
        </section>

        {/* Empty state */}
        <section className="mt-10 rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-2xl">
            📊
          </div>

          <h3 className="mt-5 text-lg font-bold">No surveys yet</h3>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
            Your surveys will appear here once you create them. Start with your
            first research project.
          </p>

          <button
            type="button"
            className="mt-6 rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
          >
            Create Your First Survey →
          </button>
        </section>
      </main>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <p className="text-xs font-semibold text-gray-400">{label}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
    </div>
  );
}

function ActionCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xs font-bold text-violet-600">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-bold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
    </div>
  );
}

export default Dashboard;