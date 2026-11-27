import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] text-[#171717]">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">

          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
              Market Research • Survey • Insights
            </span>

            <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-2px] md:text-6xl">
              Turn research data into
              <span className="block text-violet-600">
                meaningful insights.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Build powerful surveys, collect responses from your audience,
              analyze market trends and discover insights that help you make
              better business decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="rounded-lg bg-black px-7 py-3.5 text-center text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Start Your Research →
              </Link>

              <a
                href="#how-it-works"
                className="rounded-lg border border-gray-300 bg-white px-7 py-3.5 text-center text-sm font-bold transition hover:bg-gray-50"
              >
                See How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-500">
              <span>✓ Easy Survey Builder</span>
              <span>✓ Real-time Analytics</span>
              <span>✓ AI-ready Insights</span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-violet-300/20 blur-3xl" />

            <div className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl">

              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">
                    Research Dashboard
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Market Overview
                  </h2>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  ● Live
                </span>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">

                <DashboardCard
                  title="Total Responses"
                  value="24,892"
                  change="+18.4%"
                />

                <DashboardCard
                  title="Active Surveys"
                  value="18"
                  change="+4 this month"
                />

                <DashboardCard
                  title="Completion Rate"
                  value="82.4%"
                  change="+6.2%"
                />

                <DashboardCard
                  title="Audience Reach"
                  value="91.2K"
                  change="+12.8%"
                />

              </div>

              {/* Chart */}
              <div className="mt-4 rounded-xl border border-gray-100 p-5">

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-gray-400">
                      Response Trend
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      82%
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-green-600">
                    ↑ 12.4%
                  </span>
                </div>

                <div className="mt-7 flex h-32 items-end gap-2">
                  {[40, 55, 48, 70, 58, 82, 68, 93].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-violet-500"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="border-y border-gray-200 bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[2px] text-violet-600">
              PLATFORM
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Everything you need for modern research.
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              From creating surveys to analyzing thousands of responses,
              InsightHub brings the complete research workflow into one
              platform.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <FeatureCard
              number="01"
              title="Build Surveys"
              description="Create surveys using multiple question types, ratings, rankings, text responses and conditional logic."
            />

            <FeatureCard
              number="02"
              title="Collect Responses"
              description="Share surveys through links, QR codes, email, embeds and other distribution channels."
            />

            <FeatureCard
              number="03"
              title="Analyze Data"
              description="Understand demographics, trends, response patterns and audience preferences through analytics."
            />

            <FeatureCard
              number="04"
              title="Audience Segmentation"
              description="Compare different audience groups and discover how preferences change between segments."
            />

            <FeatureCard
              number="05"
              title="Research Reports"
              description="Turn survey results into structured reports that your team can use for decision making."
            />

            <FeatureCard
              number="06"
              title="AI Insights"
              description="Use AI to summarize open-ended responses, identify topics and discover meaningful patterns."
            />

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#f8f8f6] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-bold tracking-[2px] text-violet-600">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              From question to insight.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-500">
              A simple research workflow designed to take you from your
              first question to actionable market insights.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <Step
              number="01"
              title="Create Research"
              text="Define your research objective and target audience."
            />

            <Step
              number="02"
              title="Build Survey"
              text="Create questions and customize your research flow."
            />

            <Step
              number="03"
              title="Collect Data"
              text="Share your survey and collect audience responses."
            />

            <Step
              number="04"
              title="Discover Insights"
              text="Analyze responses and turn data into useful insights."
            />

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-4">

          <Stat number="100K+" label="Potential Respondents" />
          <Stat number="10K+" label="Research Projects" />
          <Stat number="1M+" label="Survey Responses" />
          <Stat number="99.9%" label="Platform Availability" />

        </div>
      </section>

      {/* CTA */}
      <section
        id="about"
        className="bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl rounded-3xl bg-violet-600 px-8 py-16 text-center text-white md:px-16">

          <p className="text-xs font-bold tracking-[2px] text-violet-200">
            START TODAY
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to understand your market?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-violet-100">
            Build your first research project and start turning audience
            responses into meaningful insights.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-violet-700 transition hover:bg-gray-100"
          >
            Create Your Account →
          </Link>

        </div>
      </section>

      <Footer />
    </div>
  );
}

function DashboardCard({
  title,
  value,
  change,
}: {
  title: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 p-4">
      <p className="text-[11px] text-gray-400">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-green-600">
        {change}
      </p>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xs font-bold text-violet-600">
        {number}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-500">
        {description}
      </p>

    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {text}
      </p>

    </div>
  );
}

function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div>
      <p className="text-4xl font-bold">
        {number}
      </p>

      <p className="mt-2 text-sm text-gray-400">
        {label}
      </p>
    </div>
  );
}

export default Home;