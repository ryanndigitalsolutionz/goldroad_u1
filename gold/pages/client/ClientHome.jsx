import { Link } from 'react-router-dom'

function ClientHome() {
  return (
    <main className="min-h-screen bg-champagne">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section className="mb-10">
          <p className="font-borel text-base text-purple">
            Client Dashboard
          </p>

          <div className="mt-2 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h1 className="font-basic text-4xl font-bold text-purple md:text-5xl">
                Welcome back.
              </h1>

              <p className="mt-4 max-w-2xl font-quicksand text-lg leading-8 text-ink">
                Find the people and skills you need to move your projects
                forward.
              </p>
            </div>

            <Link
              to="/client/projects/create"
              className="
                inline-flex items-center justify-center
                rounded-xl bg-gold px-6 py-4
                font-quicksand font-bold text-purple
                shadow-sm transition
                hover:bg-gold/90 hover:shadow-md
              "
            >
              + Post a Project
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Active Projects
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Projects currently in progress
            </p>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Proposals Received
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Waiting for your review
            </p>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Completed
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Successfully completed projects
            </p>
          </div>

        </section>

        {/* Main dashboard */}
        <section className="grid gap-8 lg:grid-cols-3">

          {/* Projects */}
          <div className="lg:col-span-2">

            <div className="mb-5 flex items-end justify-between">
              <div>
                <h2 className="font-basic text-2xl font-bold text-purple">
                  Your Projects
                </h2>

                <p className="mt-2 font-quicksand text-sm text-muted">
                  Track your current work and opportunities.
                </p>
              </div>

              <Link
                to="/client/projects"
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
              <div className="flex min-h-64 flex-col items-center justify-center text-center">

                {/* Framed icon */}
                <div className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  border border-gold/30
                  bg-champagne
                  font-basic text-2xl font-bold text-purple
                ">
                  +
                </div>

                <h3 className="mt-5 font-basic text-xl font-bold text-purple">
                  No projects yet
                </h3>

                <p className="mt-3 max-w-md font-quicksand leading-7 text-muted">
                  Post your first project and start connecting with
                  talented freelancers on GoldRoad.
                </p>

                <Link
                  to="/client/projects/create"
                  className="
                    mt-6 rounded-xl bg-gold px-6 py-3
                    font-quicksand text-sm font-bold text-purple
                    transition hover:bg-gold/90 hover:shadow-md
                  "
                >
                  Create Your First Project
                </Link>

              </div>
            </div>
          </div>

          {/* Quick actions */}
          <aside>
            <h2 className="mb-5 font-basic text-2xl font-bold text-purple">
              Quick Access
            </h2>

            <div className="space-y-4">

              <Link
                to="/client/projects/create"
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
                  Post a Project
                </p>

                <p className="mt-2 font-quicksand text-sm leading-6 text-white/70">
                  Tell freelancers what you need.
                </p>

                <span className="mt-5 block font-quicksand text-sm font-bold text-gold">
                  Get started →
                </span>
              </Link>

              <Link
                to="/client/projects"
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
                  My Projects
                </p>

                <p className="mt-2 font-quicksand text-sm leading-6 text-muted">
                  Manage your posted projects.
                </p>
              </Link>

              <Link
                to="/client/profile"
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
                  Manage your GoldRoad profile.
                </p>
              </Link>

            </div>
          </aside>

        </section>

        {/* Activity */}
        <section className="mt-10">

          <div className="mb-5">
            <h2 className="font-basic text-2xl font-bold text-purple">
              Recent Activity
            </h2>

            <p className="mt-2 font-quicksand text-sm text-muted">
              What's happening around your account.
            </p>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
            <div className="flex min-h-32 items-center justify-center text-center">
              <p className="font-quicksand text-muted">
                Your project activity will appear here.
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}

export default ClientHome
