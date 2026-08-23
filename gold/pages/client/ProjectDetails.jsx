import { Link, useParams } from 'react-router-dom'

function ProjectDetails() {
  const { id } = useParams()

  const project = {
    id,
    title: 'Build a responsive business website',
    category: 'Web & Software Development',
    description:
      'I am looking for a developer to build a modern, responsive business website. The website should work well across desktop and mobile devices and provide a clean experience for visitors.',
    skills: [
      'React',
      'JavaScript',
      'CSS',
      'Responsive Design',
    ],
    budget: 'KES 50,000',
    budgetType: 'Fixed Price',
    duration: '1–4 weeks',
    experienceLevel: 'Intermediate',
    status: 'Open',
    posted: '2 days ago',
    requirements:
      'The freelancer should have experience building responsive websites and should be able to communicate clearly throughout the project.',
  }

  const proposals = []

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Back navigation */}
        <Link
          to="/client/projects"
          className="
            font-quicksand text-sm font-semibold
            text-purple transition hover:underline
          "
        >
          ← Back to My Projects
        </Link>

        {/* Project header */}
        <header className="mt-10 border-b border-gold/20 pb-10">

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

            <div className="max-w-4xl">

              <p className="
                font-quicksand text-sm font-semibold
                uppercase tracking-wider text-teal
              ">
                {project.category}
              </p>

              <h1 className="
                mt-4
                font-basic text-4xl font-bold
                leading-tight text-purple
                md:text-5xl
              ">
                {project.title}
              </h1>

              <div className="
                mt-6 flex flex-wrap
                items-center gap-4
                font-quicksand text-sm text-muted
              ">
                <span
                  className="
                    rounded-full
                    bg-teal/10
                    px-4 py-2
                    font-semibold text-teal
                  "
                >
                  {project.status}
                </span>

                <span>
                  Posted {project.posted}
                </span>
              </div>

            </div>

            <div className="flex shrink-0 gap-3">

              <Link
                to={`/client/projects/${project.id}/edit`}
                className="
                  rounded-xl
                  border border-gold/40
                  bg-white
                  px-6 py-4
                  font-quicksand font-semibold text-purple
                  transition hover:bg-white/70
                "
              >
                Edit Project
              </Link>

            </div>

          </div>
        </header>

        {/* Main content */}
        <div className="
          grid gap-10
          py-12
          lg:grid-cols-[1fr_360px]
        ">

          {/* Left column */}
          <div className="space-y-10">

            {/* Description */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8 md:p-10
            ">
              <h2 className="
                font-basic text-2xl
                font-bold text-purple
              ">
                About This Project
              </h2>

              <p className="
                mt-6
                whitespace-pre-line
                font-quicksand
                text-lg
                leading-9
                text-ink
              ">
                {project.description}
              </p>
            </section>

            {/* Skills */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8 md:p-10
            ">
              <h2 className="
                font-basic text-2xl
                font-bold text-purple
              ">
                Skills Required
              </h2>

              <div className="
                mt-6 flex flex-wrap gap-3
              ">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      bg-champagne
                      px-5 py-3
                      font-quicksand
                      text-sm font-semibold
                      text-purple
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Additional requirements */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8 md:p-10
            ">
              <h2 className="
                font-basic text-2xl
                font-bold text-purple
              ">
                Additional Requirements
              </h2>

              <p className="
                mt-6
                whitespace-pre-line
                font-quicksand
                text-lg
                leading-9
                text-ink
              ">
                {project.requirements}
              </p>
            </section>

            {/* Proposals */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8 md:p-10
            ">
              <div className="
                flex flex-col
                gap-3
                border-b border-gold/20
                pb-6
                sm:flex-row
                sm:items-end
                sm:justify-between
              ">
                <div>
                  <h2 className="
                    font-basic text-2xl
                    font-bold text-purple
                  ">
                    Proposals
                  </h2>

                  <p className="
                    mt-3
                    font-quicksand
                    leading-7
                    text-muted
                  ">
                    Review freelancers who have submitted proposals
                    for this project.
                  </p>
                </div>

                <span className="
                  font-quicksand
                  text-sm font-semibold
                  text-teal
                ">
                  {proposals.length} proposals
                </span>
              </div>

              {proposals.length === 0 ? (
                <div className="
                  py-14
                  text-center
                ">
                  <div className="
                    mx-auto
                    flex h-16 w-16
                    items-center justify-center
                    rounded-full
                    bg-champagne
                  ">
                    <span className="
                      font-basic
                      text-xl
                      text-purple
                    ">
                      0
                    </span>
                  </div>

                  <h3 className="
                    mt-6
                    font-basic text-xl
                    font-bold text-purple
                  ">
                    No proposals yet
                  </h3>

                  <p className="
                    mx-auto mt-3
                    max-w-md
                    font-quicksand
                    leading-7
                    text-muted
                  ">
                    Freelancers will appear here once they submit
                    proposals for this project.
                  </p>
                </div>
              ) : (
                <div className="mt-8 space-y-6">
                  {proposals.map((proposal) => (
                    <article
                      key={proposal.id}
                      className="
                        rounded-xl
                        border border-gold/20
                        p-6
                      "
                    >
                      {/* Proposal UI will be added later */}
                    </article>
                  ))}
                </div>
              )}
            </section>

          </div>

          {/* Right column */}
          <aside className="space-y-6">

            {/* Project specifications */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8
            ">
              <h2 className="
                font-basic text-xl
                font-bold text-purple
              ">
                Project Details
              </h2>

              <div className="mt-8 space-y-7">

                <div>
                  <p className="
                    font-quicksand
                    text-sm text-muted
                  ">
                    Budget
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    text-lg font-bold text-ink
                  ">
                    {project.budget}
                  </p>

                  <p className="
                    mt-1
                    font-quicksand
                    text-sm text-muted
                  ">
                    {project.budgetType}
                  </p>
                </div>

                <div>
                  <p className="
                    font-quicksand
                    text-sm text-muted
                  ">
                    Expected Duration
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    font-semibold text-ink
                  ">
                    {project.duration}
                  </p>
                </div>

                <div>
                  <p className="
                    font-quicksand
                    text-sm text-muted
                  ">
                    Experience Level
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    font-semibold text-ink
                  ">
                    {project.experienceLevel}
                  </p>
                </div>

                <div>
                  <p className="
                    font-quicksand
                    text-sm text-muted
                  ">
                    Project Status
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    font-semibold text-teal
                  ">
                    {project.status}
                  </p>
                </div>

              </div>
            </section>

            {/* Project actions */}
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8
            ">
              <h2 className="
                font-basic text-xl
                font-bold text-purple
              ">
                Manage Project
              </h2>

              <div className="
                mt-6 space-y-4
              ">

                <Link
                  to={`/client/projects/${project.id}/edit`}
                  className="
                    block w-full
                    rounded-xl
                    bg-gold
                    px-5 py-4
                    text-center
                    font-quicksand
                    font-bold text-purple
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  Edit Project
                </Link>

                <button
                  type="button"
                  className="
                    w-full
                    rounded-xl
                    border border-purple/20
                    px-5 py-4
                    font-quicksand
                    font-semibold text-purple
                    transition
                    hover:bg-purple/5
                  "
                >
                  Close Project
                </button>

              </div>
            </section>

          </aside>

        </div>

      </div>
    </main>
  )
}

export default ProjectDetails
