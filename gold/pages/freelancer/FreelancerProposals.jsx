// FreelancerProposals.jsx
import { Link } from 'react-router-dom'

function FreelancerProposals() {
  const proposals = []

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Page header */}
        <header className="border-b border-gold/20 pb-10">
          <p className="font-borel text-lg text-teal">
            GoldRoad Proposals
          </p>

          <div className="mt-2 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-basic text-4xl font-bold text-purple md:text-5xl">
                My Proposals
              </h1>

              <p className="mt-4 max-w-2xl font-quicksand text-lg leading-8 text-muted">
                Track the projects you've applied for and manage the
                proposals you've sent to clients.
              </p>
            </div>

            <Link
              to="/freelancer/projects"
              className="
                inline-flex items-center justify-center
                rounded-xl bg-gold px-6 py-4
                font-quicksand font-bold text-purple
                shadow-sm transition
                hover:shadow-lg
              "
            >
              Find More Work
            </Link>
          </div>
        </header>

        {/* Proposal filters */}
        <section className="py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <nav className="flex flex-wrap gap-3">
              <button
                type="button"
                className="
                  rounded-full bg-purple px-5 py-3
                  font-quicksand text-sm font-semibold text-white
                "
              >
                All
              </button>

              <button
                type="button"
                className="
                  rounded-full border border-gold/30 bg-white
                  px-5 py-3
                  font-quicksand text-sm font-semibold text-ink
                  transition hover:border-purple
                "
              >
                Pending
              </button>

              <button
                type="button"
                className="
                  rounded-full border border-gold/30 bg-white
                  px-5 py-3
                  font-quicksand text-sm font-semibold text-ink
                  transition hover:border-purple
                "
              >
                Accepted
              </button>

              <button
                type="button"
                className="
                  rounded-full border border-gold/30 bg-white
                  px-5 py-3
                  font-quicksand text-sm font-semibold text-ink
                  transition hover:border-purple
                "
              >
                Declined
              </button>
            </nav>

            <input
              type="search"
              placeholder="Search your proposals..."
              className="
                w-full rounded-xl
                border border-gold/30
                bg-white px-5 py-4
                font-quicksand text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
                lg:max-w-sm
              "
            />

          </div>
        </section>

        {/* Proposal list */}
        <section>
          {proposals.length === 0 ? (
            <div
              className="
                rounded-2xl
                border border-gold/20
                bg-white
                px-8 py-16
                text-center
              "
            >
              <div className="mx-auto max-w-xl">

                <div
                  className="
                    mx-auto flex h-20 w-20
                    items-center justify-center
                    rounded-full
                    bg-champagne
                  "
                >
                  <span className="font-borel text-2xl text-purple">
                    P
                  </span>
                </div>

                <h2 className="mt-8 font-basic text-2xl font-bold text-purple">
                  No proposals yet
                </h2>

                <p className="mt-5 font-quicksand leading-8 text-muted">
                  Find a project that matches your skills, send a strong
                  proposal, and start building your work on GoldRoad.
                </p>

                <Link
                  to="/freelancer/projects"
                  className="
                    mt-8 inline-flex
                    rounded-xl bg-gold px-6 py-4
                    font-quicksand font-bold text-purple
                    transition hover:shadow-lg
                  "
                >
                  Explore Projects
                </Link>

              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {proposals.map((proposal) => (
                <article
                  key={proposal.id}
                  className="
                    rounded-2xl
                    border border-gold/20
                    bg-white p-8
                    transition
                    hover:shadow-lg
                  "
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                    <div>
                      <span className="font-quicksand text-sm font-semibold text-teal">
                        {proposal.status}
                      </span>

                      <h2 className="mt-3 font-basic text-2xl font-bold text-purple">
                        {proposal.projectTitle}
                      </h2>

                      <p className="mt-3 font-quicksand text-sm text-muted">
                        Client: {proposal.client}
                      </p>

                      <p className="mt-4 max-w-3xl font-quicksand leading-8 text-ink">
                        {proposal.message}
                      </p>
                    </div>

                    <Link
                      to={`/freelancer/proposals/${proposal.id}`}
                      className="
                        shrink-0 rounded-xl
                        border border-gold/40
                        px-5 py-3
                        text-center
                        font-quicksand font-semibold text-purple
                        transition hover:bg-champagne
                      "
                    >
                      View Proposal
                    </Link>

                  </div>

                  <div
                    className="
                      mt-8 flex flex-wrap gap-x-10 gap-y-4
                      border-t border-gold/20 pt-6
                    "
                  >
                    <div>
                      <p className="font-quicksand text-sm text-muted">
                        Your Bid
                      </p>

                      <p className="mt-1 font-quicksand font-semibold text-ink">
                        {proposal.bid}
                      </p>
                    </div>

                    <div>
                      <p className="font-quicksand text-sm text-muted">
                        Delivery
                      </p>

                      <p className="mt-1 font-quicksand font-semibold text-ink">
                        {proposal.delivery}
                      </p>
                    </div>

                    <div>
                      <p className="font-quicksand text-sm text-muted">
                        Submitted
                      </p>

                      <p className="mt-1 font-quicksand font-semibold text-ink">
                        {proposal.submitted}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

      </div>
    </main>
  )
}

export default FreelancerProposals
