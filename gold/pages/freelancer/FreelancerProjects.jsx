import { Link } from 'react-router-dom'

function FreelancerProjects() {
  const projects = []

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Page header */}
        <header className="
          border-b border-gold/20
          pb-10
        ">
          <p className="
            font-quicksand
            text-sm font-semibold
            uppercase tracking-wider
            text-teal
          ">
            Freelancer Marketplace
          </p>

          <h1 className="
            mt-3
            font-basic
            text-4xl font-bold
            text-purple
            md:text-5xl
          ">
            Discover Projects
          </h1>

          <p className="
            mt-5
            max-w-3xl
            font-quicksand
            text-lg
            leading-8
            text-muted
          ">
            Find projects posted by clients, explore the details,
            and discover opportunities that match your skills.
          </p>
        </header>

        {/* Search and filters */}
        <section className="
          py-10
        ">
          <div className="
            grid gap-4
            lg:grid-cols-[1fr_220px_220px]
          ">

            <input
              type="search"
              placeholder="Search projects by title, skill, or keyword..."
              className="
                rounded-xl
                border border-gold/30
                bg-white
                px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            />

            <select
              defaultValue=""
              className="
                rounded-xl
                border border-gold/30
                bg-white
                px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            >
              <option value="">
                All Categories
              </option>

              <option value="development">
                Web & Software
              </option>

              <option value="design">
                Design & Creative
              </option>

              <option value="writing">
                Writing & Translation
              </option>

              <option value="marketing">
                Marketing & Sales
              </option>

              <option value="business">
                Business & Consulting
              </option>
            </select>

            <select
              defaultValue=""
              className="
                rounded-xl
                border border-gold/30
                bg-white
                px-5 py-4
                font-quicksand
                text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            >
              <option value="">
                Any Budget
              </option>

              <option value="under-10k">
                Under KES 10,000
              </option>

              <option value="10k-50k">
                KES 10,000–50,000
              </option>

              <option value="50k-100k">
                KES 50,000–100,000
              </option>

              <option value="100k-plus">
                KES 100,000+
              </option>
            </select>

          </div>
        </section>

        {/* Results header */}
        <div className="
          flex flex-col
          gap-4
          border-b border-gold/20
          pb-6
          sm:flex-row
          sm:items-center
          sm:justify-between
        ">
          <div>
            <h2 className="
              font-basic
              text-2xl font-bold
              text-purple
            ">
              Available Projects
            </h2>

            <p className="
              mt-2
              font-quicksand
              text-sm
              text-muted
            ">
              {projects.length} projects found
            </p>
          </div>

          <select
            defaultValue="recent"
            className="
              rounded-xl
              border border-gold/30
              bg-white
              px-4 py-3
              font-quicksand
              text-sm
              text-ink
              outline-none
            "
          >
            <option value="recent">
              Most Recent
            </option>

            <option value="budget-high">
              Highest Budget
            </option>

            <option value="budget-low">
              Lowest Budget
            </option>
          </select>
        </div>

        {/* Project results */}
        <section className="py-10">

          {projects.length === 0 ? (
            <div className="
              rounded-2xl
              border border-gold/20
              bg-white
              px-8 py-20
              text-center
            ">

              <div className="
                mx-auto
                flex h-20 w-20
                items-center justify-center
                rounded-full
                bg-champagne
              ">
                <span className="
                  font-basic
                  text-2xl font-bold
                  text-purple
                ">
                  GR
                </span>
              </div>

              <h3 className="
                mt-8
                font-basic
                text-2xl font-bold
                text-purple
              ">
                No projects found
              </h3>

              <p className="
                mx-auto mt-4
                max-w-xl
                font-quicksand
                leading-8
                text-muted
              ">
                There are currently no projects matching your
                search. Check back later for new opportunities.
              </p>

              <Link
                to="/freelancer"
                className="
                  mt-8
                  inline-flex
                  rounded-xl
                  bg-gold
                  px-6 py-4
                  font-quicksand
                  font-bold
                  text-purple
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Back to Freelancer Home
              </Link>

            </div>
          ) : (
            <div className="
              grid gap-6
            ">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="
                    rounded-2xl
                    border border-gold/20
                    bg-white
                    p-8
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* Project information */}
                  <div className="
                    flex flex-col
                    gap-8
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                  ">

                    <div className="max-w-4xl">

                      <p className="
                        font-quicksand
                        text-sm font-semibold
                        text-teal
                      ">
                        {project.category}
                      </p>

                      <h3 className="
                        mt-3
                        font-basic
                        text-2xl font-bold
                        text-purple
                      ">
                        {project.title}
                      </h3>

                      <p className="
                        mt-4
                        font-quicksand
                        leading-8
                        text-ink
                      ">
                        {project.description}
                      </p>

                      {/* Skills */}
                      <div className="
                        mt-6
                        flex flex-wrap
                        gap-2
                      ">
                        {project.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="
                              rounded-full
                              bg-champagne
                              px-4 py-2
                              font-quicksand
                              text-xs font-semibold
                              text-purple
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Budget */}
                    <div className="
                      shrink-0
                      lg:min-w-44
                      lg:text-right
                    ">
                      <p className="
                        font-quicksand
                        text-sm
                        text-muted
                      ">
                        Budget
                      </p>

                      <p className="
                        mt-2
                        font-quicksand
                        text-xl font-bold
                        text-purple
                      ">
                        {project.budget}
                      </p>

                      <p className="
                        mt-2
                        font-quicksand
                        text-sm
                        text-muted
                      ">
                        {project.budgetType}
                      </p>
                    </div>

                  </div>

                  {/* Bottom information */}
                  <div className="
                    mt-8
                    flex flex-col
                    gap-6
                    border-t border-gold/20
                    pt-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                  ">

                    <div className="
                      flex flex-wrap
                      gap-x-8 gap-y-4
                    ">

                      <div>
                        <p className="
                          font-quicksand
                          text-xs
                          text-muted
                        ">
                          Duration
                        </p>

                        <p className="
                          mt-1
                          font-quicksand
                          font-semibold
                          text-ink
                        ">
                          {project.duration}
                        </p>
                      </div>

                      <div>
                        <p className="
                          font-quicksand
                          text-xs
                          text-muted
                        ">
                          Experience
                        </p>

                        <p className="
                          mt-1
                          font-quicksand
                          font-semibold
                          text-ink
                        ">
                          {project.experienceLevel}
                        </p>
                      </div>

                      <div>
                        <p className="
                          font-quicksand
                          text-xs
                          text-muted
                        ">
                          Posted
                        </p>

                        <p className="
                          mt-1
                          font-quicksand
                          font-semibold
                          text-ink
                        ">
                          {project.posted}
                        </p>
                      </div>

                    </div>

                    <Link
                      to={`/freelancer/projects/${project.id}`}
                      className="
                        rounded-xl
                        bg-gold
                        px-6 py-4
                        text-center
                        font-quicksand
                        font-bold
                        text-purple
                        transition
                        hover:-translate-y-1
                        hover:shadow-lg
                      "
                    >
                      View Project
                    </Link>

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

export default FreelancerProjects
