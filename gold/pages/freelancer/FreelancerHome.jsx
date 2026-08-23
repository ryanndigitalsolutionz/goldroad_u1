import { Link } from 'react-router-dom'

function FreelancerHome() {
  return (
    <main className="min-h-screen bg-champagne">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section className="mb-10">
          <p className="font-borel text-base text-purple">
            Freelancer Dashboard
          </p>

          <div className="mt-2 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="font-basic text-4xl font-bold text-purple md:text-5xl">
                Welcome back.
              </h1>

              <p className="mt-4 max-w-2xl font-quicksand text-lg leading-8 text-ink">
                Discover projects, send proposals, and build your work
                on GoldRoad.
              </p>
            </div>

            <Link
              to="/freelancer/projects"
              className="
                inline-flex items-center justify-center
                rounded-xl bg-gold px-6 py-4
                font-quicksand font-bold text-purple
                shadow-sm transition
                hover:bg-gold/90 hover:shadow-md
              "
            >
              Find Work
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Active Projects
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Projects you're working on
            </p>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Proposals
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Proposals submitted
            </p>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Earnings
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              KSh 0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Total earnings
            </p>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Profile Views
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Views this month
            </p>
          </div>

        </section>

        {/* Main content */}
        <section className="grid gap-8 lg:grid-cols-3">

          {/* Recommended work */}
          <div className="lg:col-span-2">

            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="font-basic text-2xl font-bold text-purple">
                  Recommended Projects
                </h2>

                <p className="mt-2 font-quicksand text-sm text-muted">
                  Opportunities that may match your skills.
                </p>
              </div>

              <Link
                to="/freelancer/projects"
                className="
                  rounded-lg px-3 py-2
                  font-quicksand text-sm font-bold text-purple
                  transition hover:bg-purple/5
                "
              >
                Browse all
              </Link>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
              <div className="flex min-h-64 flex-col items-center justify-center text-center">

                {/* Framed icon */}
                <div className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  border border-gold/30
                  bg-champagne
                  text-xl text-purple
                ">
                  🔎
                </div>

                <h3 className="mt-5 font-basic text-xl font-bold text-purple">
                  No recommendations yet
                </h3>

                <p className="mt-3 max-w-md font-quicksand leading-7 text-muted">
                  Complete your profile and explore available projects
                  to start discovering opportunities.
                </p>

                <Link
                  to="/freelancer/projects"
                  className="
                    mt-6 rounded-xl bg-gold px-6 py-3
                    font-quicksand text-sm font-bold text-purple
                    transition hover:bg-gold/90 hover:shadow-md
                  "
                >
                  Explore Projects
                </Link>

              </div>
            </div>
          </div>

          {/* Quick access */}
          <aside>
            <h2 className="mb-5 font-basic text-2xl font-bold text-purple">
              Quick Access
            </h2>

            <div className="space-y-4">

              <Link
                to="/freelancer/projects"
                className="
                  block rounded-2xl
                  border border-purple/10
                  bg-purple p-6
                  text-white transition
                  hover:bg-purple/95
                  hover:shadow-lg
                "
              >
                <p className="font-basic text-xl font-bold">
                  Find Projects
                </p>

                <p className="mt-2 font-quicksand text-sm leading-6 text-white/70">
                  Browse new opportunities.
                </p>

                <span className="mt-5 block font-quicksand text-sm font-bold text-gold">
                  Browse work →
                </span>
              </Link>

              <Link
                to="/freelancer/proposals"
                className="
                  block rounded-2xl
                  border border-gold/20
                  bg-white p-6
                  transition
                  hover:border-gold/40
                  hover:shadow-md
                "
              >
                <p className="font-basic text-xl font-bold text-purple">
                  My Proposals
                </p>

                <p className="mt-2 font-quicksand text-sm leading-6 text-muted">
                  Track proposals you've submitted.
                </p>
              </Link>

              <Link
                to="/freelancer/profile"
                className="
                  block rounded-2xl
                  border border-gold/20
                  bg-white p-6
                  transition
                  hover:border-gold/40
                  hover:shadow-md
                "
              >
                <p className="font-basic text-xl font-bold text-purple">
                  My Profile
                </p>

                <p className="mt-2 font-quicksand text-sm leading-6 text-muted">
                  Showcase your skills and experience.
                </p>
              </Link>

            </div>
          </aside>

        </section>

        {/* Proposal Activity */}
        <section className="mt-10">

          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="font-basic text-2xl font-bold text-purple">
                Proposal Activity
              </h2>

              <p className="mt-2 font-quicksand text-sm text-muted">
                Keep track of your latest proposals.
              </p>
            </div>

            <Link
              to="/freelancer/proposals"
              className="
                rounded-lg px-3 py-2
                font-quicksand text-sm font-bold text-purple
                transition hover:bg-purple/5
              "
            >
              View all
            </Link>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
            <div className="flex min-h-32 items-center justify-center text-center">
              <p className="font-quicksand text-muted">
                Your proposal activity will appear here.
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default FreelancerHome
