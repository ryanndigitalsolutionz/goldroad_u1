// ClientProjects.jsx
import { Link } from 'react-router-dom'

function ClientProjects() {
  const projects = []

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Page header */}
        <header className="flex flex-col gap-6 border-b border-gold/20 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-quicksand text-sm font-semibold uppercase tracking-wider text-teal">
              Client Workspace
            </p>

            <h1 className="mt-3 font-basic text-4xl font-bold text-purple">
              My Projects
            </h1>

            <p className="mt-4 max-w-2xl font-quicksand text-lg leading-8 text-muted">
              Create, manage, and track the projects you've posted on
              GoldRoad.
            </p>
          </div>

          <Link
            to="/client/projects/create"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-gold px-6 py-4
              font-quicksand font-bold text-purple
              shadow-sm transition
              hover:shadow-lg
            "
          >
            + Post a Project
          </Link>
        </header>

        {/* Filters and search */}
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
                  transition
                  hover:border-purple
                "
              >
                Open
              </button>

              <button
                type="button"
                className="
                  rounded-full border border-gold/30 bg-white
                  px-5 py-3
                  font-quicksand text-sm font-semibold text-ink
                  transition
                  hover:border-purple
                "
              >
                In Progress
              </button>

              <button
                type="button"
                className="
                  rounded-full border border-gold/30 bg-white
                  px-5 py-3
                  font-quicksand text-sm font-semibold text-ink
                  transition
                  hover:border-purple
                "
              >
                Completed
              </button>
            </nav>

            <input
              type="search"
              placeholder="Search your projects..."
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

        {/* Project list */}
        <section>
          {projects.length === 0 ? (
            <div
              className="
                min-h-[420px]
                rounded-2xl
                border border-gold/20
                bg-white
                px-8 py-16
                text-center
                shadow-sm
              "
            >
              <div className="
                flex min-h-[288px]
                flex-col items-center justify-center
                mx-auto max-w-xl
              ">

                {/* Empty state icon */}
                <div className="
                  flex h-20 w-20
                  items-center justify-center
                  rounded-full
                  border border-gold/30
                  bg-champagne
                ">
                  <span className="font-borel text-3xl text-purple">
                    +
                  </span>
                </div>

                <h2 className="mt-8 font-basic text-2xl font-bold text-purple">
                  You haven't posted a project yet
                </h2>

                <p className="mt-5 font-quicksand leading-8 text-muted">
                  Describe what you need, publish your project, and let
                  qualified freelancers discover the opportunity.
                </p>

                <Link
                  to="/client/projects/create"
                  className="
                    mt-8 inline-flex
                    rounded-xl bg-gold px-6 py-4
                    font-quicksand font-bold text-purple
                    shadow-sm transition
                    hover:shadow-lg
                  "
                >
                  Create Your First Project
                </Link>

              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="
                    rounded-2xl
                    border border-gold/20
                    bg-white p-8
                    shadow-sm transition
                    hover:border-gold/40
                    hover:shadow-lg
                  "
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                    <div>
                      <span className="font-quicksand text-sm font-semibold text-teal">
                        {project.status}
                      </span>

                      <h2 className="mt-3 font-basic text-2xl font-bold text-purple">
                        {project.title}
                      </h2>

                      <p className="mt-4 max-w-3xl font-quicksand leading-8 text-ink">
                        {project.description}
                      </p>
                    </div>

                    <Link
                      to={`/client/projects/${project.id}`}
                      className="
                        shrink-0
                        rounded-xl border border-gold/40
                        px-5 py-3
                        text-center
                        font-quicksand font-semibold text-purple
                        transition
                        hover:bg-champagne
                      "
                    >
                      View Project
                    </Link>

                  </div>

                  <div className="
                    mt-8 flex flex-wrap gap-x-10 gap-y-4
                    border-t border-gold/20 pt-6
                  ">
                    <div>
                      <p className="font-quicksand text-sm text-muted">
                        Budget
                      </p>

                      <p className="mt-1 font-quicksand font-semibold text-ink">
                        {project.budget}
                      </p>
                    </div>

                    <div>
                      <p className="font-quicksand text-sm text-muted">
                        Proposals
                      </p>

                      <p className="mt-1 font-quicksand font-semibold text-ink">
                        {project.proposals}
                      </p>
                    </div>

                    <div>
                      <p className="font-quicksand text-sm text-muted">
                        Posted
                      </p>

                      <p className="mt-1 font-quicksand font-semibold text-ink">
                        {project.posted}
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

export default ClientProjects
