// ClientProfile.jsx
import { Link } from 'react-router-dom'

function ClientProfile() {
  return (
    <main className="min-h-screen bg-champagne">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Profile header */}
        <section className="border-b border-gold/20 pb-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end">

            {/* Profile image */}
            <div className="
              flex h-32 w-32 shrink-0 items-center justify-center
              rounded-full
              border-2 border-gold
              bg-white
              shadow-sm
            ">
              <span className="font-borel text-3xl text-purple">
                GR
              </span>
            </div>

            {/* Identity */}
            <div className="flex-1">
              <div className="inline-flex items-center rounded-full border border-gold/30 bg-white px-4 py-2">
                <span className="font-quicksand text-xs font-bold uppercase tracking-wider text-teal">
                  Client
                </span>
              </div>

              <h1 className="mt-4 font-borel text-4xl text-purple md:text-5xl">
                Your Name
              </h1>

              <p className="mt-3 font-quicksand text-lg text-muted">
                Your professional headline
              </p>

              <p className="mt-4 font-quicksand leading-7 text-ink">
                Your location · Your industry
              </p>
            </div>

            {/* Edit profile */}
            <Link
              to="/client/profile/edit"
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-gold/40
                bg-white
                px-6 py-4
                font-quicksand font-semibold text-purple
                shadow-sm
                transition
                hover:border-purple/40
                hover:bg-purple/5
              "
            >
              Edit Profile
            </Link>

          </div>
        </section>

        {/* Profile content */}
        <div className="grid gap-10 py-12 lg:grid-cols-3">

          {/* Main information */}
          <div className="space-y-10 lg:col-span-2">

            {/* About */}
            <section>
              <h2 className="font-basic text-2xl font-bold text-purple">
                About
              </h2>

              <p className="mt-5 font-quicksand leading-8 text-ink">
                Tell freelancers and service providers about yourself,
                your business, your goals, and the kind of work you need
                completed.
              </p>
            </section>

            {/* Projects */}
            <section>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <h2 className="font-basic text-2xl font-bold text-purple">
                    Projects
                  </h2>

                  <p className="mt-2 font-quicksand leading-7 text-muted">
                    Projects you've posted on GoldRoad.
                  </p>
                </div>

                <Link
                  to="/client/projects"
                  className="
                    rounded-lg
                    border border-transparent
                    px-3 py-2
                    font-quicksand text-sm font-semibold text-purple
                    transition
                    hover:border-gold/30
                    hover:bg-white
                  "
                >
                  View all
                </Link>
              </div>

              <div className="
                mt-5 rounded-2xl
                border border-gold/20
                bg-white
                p-8
              ">
                <div className="flex min-h-28 items-center justify-center text-center">
                  <p className="font-quicksand leading-8 text-muted">
                    Your posted projects will appear here.
                  </p>
                </div>
              </div>
            </section>

            {/* Activity */}
            <section>
              <h2 className="font-basic text-2xl font-bold text-purple">
                GoldRoad Activity
              </h2>

              <div className="
                mt-5 rounded-2xl
                border border-gold/20
                bg-white
                p-8
              ">
                <div className="flex min-h-28 items-center justify-center text-center">
                  <p className="font-quicksand leading-8 text-muted">
                    Your marketplace activity will appear here.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Profile sidebar */}
          <aside className="space-y-6">

            {/* Account information */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-7
            ">
              <h2 className="font-basic text-xl font-bold text-purple">
                Profile Information
              </h2>

              <div className="mt-7 divide-y divide-gold/10">

                <div className="py-4 first:pt-0">
                  <p className="font-quicksand text-sm text-muted">
                    Account Type
                  </p>

                  <p className="mt-1 font-quicksand font-semibold text-ink">
                    Client
                  </p>
                </div>

                <div className="py-4">
                  <p className="font-quicksand text-sm text-muted">
                    Member Since
                  </p>

                  <p className="mt-1 font-quicksand font-semibold text-ink">
                    —
                  </p>
                </div>

                <div className="py-4 last:pb-0">
                  <p className="font-quicksand text-sm text-muted">
                    Projects Posted
                  </p>

                  <p className="mt-1 font-quicksand font-semibold text-ink">
                    0
                  </p>
                </div>

              </div>
            </section>

            {/* Preferences */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-7
            ">
              <h2 className="font-basic text-xl font-bold text-purple">
                Preferences
              </h2>

              <p className="mt-4 font-quicksand leading-7 text-muted">
                Your marketplace preferences and settings will appear here.
              </p>
            </section>

          </aside>

        </div>

      </div>
    </main>
  )
}

export default ClientProfile
