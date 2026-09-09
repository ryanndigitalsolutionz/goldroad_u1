import { Link } from 'react-router-dom'

function FreelancerProfile() {
  const freelancer = {
    name: 'Ryan Da Lion',
    title: 'Full Stack Software Engineer',
    location: 'Kenya',
    bio:
      'Software engineer focused on building useful, scalable digital experiences. I enjoy turning ideas into functional products and solving practical problems with technology.',
    skills: [
      'JavaScript',
      'React',
      'Python',
      'HTML',
      'CSS',
      'Git',
    ],
    availability: 'Available',
    experienceLevel: 'Intermediate',
    completedProjects: 0,
    rating: 'New',
  }

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Profile header */}
        <section className="
          overflow-hidden
          rounded-3xl
          border border-gold/20
          bg-white
          shadow-sm
        ">

          {/* Cover */}
          <div className="
            h-10
            bg-gold
            md:h-42
          ">
          </div>

          <div className="px-8 pb-12 md:px-10">

            {/* Identity + action */}
            <div className="
              flex flex-col
              gap-7
              md:flex-row
              md:items-end
              md:justify-between
            ">

              <div className="
                -mt-16
                flex flex-col
                gap-5
                md:flex-row
                md:items-end
              ">

                {/* Profile image */}
                <div className="
                  flex h-32 w-32
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border-4 border-white
                  bg-champagne
                  shadow-md
                ">
                  <span className="
                    font-basic
                    text-3xl font-bold
                    text-purple
                  ">
                    GR
                  </span>
                </div>

                {/* Identity */}
                <div className="pb-1">

                  <p className="
                    font-quicksand
                    text-sm font-semibold
                    uppercase tracking-widest
                    text-teal
                  ">
                    Freelancer
                  </p>

                  <h1 className="
                    mt-2
                    font-basic
                    text-3xl font-bold
                    text-purple
                    md:text-4xl
                  ">
                    {freelancer.name}
                  </h1>

                  <p className="
                    mt-2
                    font-quicksand
                    text-lg font-semibold
                    text-ink
                  ">
                    {freelancer.title}
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    {freelancer.location}
                  </p>

                </div>
              </div>

              {/* Edit profile */}
              <Link
                to="/freelancer/profile/edit"
                className="
                  inline-flex
                  items-center justify-center
                  rounded-xl
                  border border-gold/40
                  bg-white
                  px-6 py-4
                  font-quicksand
                  font-semibold
                  text-purple
                  shadow-sm
                  transition
                  hover:border-purple/40
                  hover:bg-champagne
                  hover:shadow-md
                "
              >
                Edit Profile
              </Link>

            </div>

            {/* Status */}
            <div className="
              mt-8
              flex flex-wrap
              items-center
              gap-3
              border-t border-gold/20
              pt-7
            ">

              <span className="
                inline-flex items-center gap-2
                rounded-xl
                border border-teal/20
                bg-teal/10
                px-4 py-2.5
                font-quicksand
                text-sm font-semibold
                text-teal
              ">
                <span className="text-xs">●</span>
                {freelancer.availability}
              </span>

              <span className="
                rounded-xl
                border border-gold/20
                bg-champagne
                px-4 py-2.5
                font-quicksand
                text-sm font-semibold
                text-purple
              ">
                {freelancer.experienceLevel}
              </span>

              <span className="
                rounded-xl
                border border-gold/20
                bg-champagne
                px-4 py-2.5
                font-quicksand
                text-sm font-semibold
                text-purple
              ">
                {freelancer.rating} Rating
              </span>

            </div>

          </div>
        </section>

        {/* Profile content */}
        <div className="
          mt-10
          grid gap-8
          lg:grid-cols-[1fr_340px]
        ">

          {/* Main column */}
          <div className="space-y-8">

            {/* About */}
            <section className="
              rounded-3xl
              border border-gold/20
              bg-white
              p-8
              shadow-sm
              md:p-10
            ">
              <div className="flex items-center justify-between gap-4">

                <h2 className="
                  font-basic
                  text-2xl font-bold
                  text-purple
                ">
                  About
                </h2>

                <span className="
                  font-borel
                  text-sm
                  text-gold
                ">
                  A little about me
                </span>

              </div>

              <p className="
                mt-6
                font-quicksand
                text-lg
                leading-9
                text-ink
              ">
                {freelancer.bio}
              </p>
            </section>

            {/* Skills */}
            <section className="
              rounded-3xl
              border border-gold/20
              bg-white
              p-8
              shadow-sm
              md:p-10
            ">
              <h2 className="
                font-basic
                text-2xl font-bold
                text-purple
              ">
                Skills
              </h2>

              <p className="
                mt-2
                font-quicksand
                text-sm
                text-muted
              ">
                Technologies and tools I work with.
              </p>

              <div className="
                mt-7
                flex flex-wrap
                gap-3
              ">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border border-gold/20
                      bg-champagne
                      px-5 py-3
                      font-quicksand
                      text-sm font-semibold
                      text-purple
                      transition
                      hover:border-gold/50
                      hover:bg-gold/10
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="
              rounded-3xl
              border border-gold/20
              bg-white
              p-8
              shadow-sm
              md:p-10
            ">
              <h2 className="
                font-basic
                text-2xl font-bold
                text-purple
              ">
                Experience
              </h2>

              <div className="
                mt-8
                border-l-2 border-gold/30
                pl-6
              ">
                <h3 className="
                  font-basic
                  text-xl font-bold
                  text-purple
                ">
                  Software Engineering
                </h3>

                <p className="
                  mt-2
                  font-quicksand
                  font-semibold
                  text-teal
                ">
                  Full Stack Development
                </p>

                <p className="
                  mt-4
                  font-quicksand
                  leading-8
                  text-ink
                ">
                  Building web applications, APIs, and user
                  interfaces using modern development tools.
                </p>
              </div>
            </section>

            {/* Completed work */}
            <section className="
              rounded-3xl
              border border-gold/20
              bg-white
              p-8
              shadow-sm
              md:p-10
            ">
              <div className="
                flex flex-col
                gap-3
                sm:flex-row
                sm:items-end
                sm:justify-between
              ">
                <div>
                  <h2 className="
                    font-basic
                    text-2xl font-bold
                    text-purple
                  ">
                    Completed Work
                  </h2>

                  <p className="
                    mt-3
                    font-quicksand
                    leading-7
                    text-muted
                  ">
                    Projects completed through GoldRoad.
                  </p>
                </div>

                <span className="
                  rounded-xl
                  border border-teal/20
                  bg-teal/10
                  px-4 py-2
                  font-quicksand
                  text-sm font-semibold
                  text-teal
                ">
                  {freelancer.completedProjects} projects
                </span>
              </div>

              <div className="
                mt-8
                rounded-2xl
                border border-gold/20
                bg-champagne/40
                px-6 py-12
                text-center
              ">
                <p className="
                  font-borel
                  text-lg
                  text-purple/70
                ">
                  Your work will live here.
                </p>

                <p className="
                  mt-2
                  font-quicksand
                  leading-7
                  text-muted
                ">
                  Completed projects will appear here.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Overview */}
            <section className="
              rounded-3xl
              border border-gold/20
              bg-white
              p-8
              shadow-sm
            ">
              <h2 className="
                font-basic
                text-xl font-bold
                text-purple
              ">
                Freelancer Overview
              </h2>

              <div className="mt-8 space-y-6">

                <div className="
                  border-b border-gold/15
                  pb-6
                ">
                  <p className="
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    Experience Level
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    font-semibold
                    text-ink
                  ">
                    {freelancer.experienceLevel}
                  </p>
                </div>

                <div className="
                  border-b border-gold/15
                  pb-6
                ">
                  <p className="
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    Availability
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    font-semibold
                    text-teal
                  ">
                    {freelancer.availability}
                  </p>
                </div>

                <div>
                  <p className="
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    Completed Projects
                  </p>

                  <p className="
                    mt-2
                    font-basic
                    text-2xl font-bold
                    text-purple
                  ">
                    {freelancer.completedProjects}
                  </p>
                </div>

              </div>
            </section>

            {/* Workspace */}
            <section className="
              rounded-3xl
              border border-gold/20
              bg-white
              p-8
              shadow-sm
            ">
              <h2 className="
                font-basic
                text-xl font-bold
                text-purple
              ">
                My Workspace
              </h2>

              <nav className="mt-6 space-y-2">

                <Link
                  to="/freelancer"
                  className="
                    flex items-center
                    justify-between
                    rounded-xl
                    border border-transparent
                    px-4 py-3
                    font-quicksand
                    font-semibold
                    text-purple
                    transition
                    hover:border-gold/20
                    hover:bg-champagne
                  "
                >
                  <span>Home</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/freelancer/projects"
                  className="
                    flex items-center
                    justify-between
                    rounded-xl
                    border border-transparent
                    px-4 py-3
                    font-quicksand
                    font-semibold
                    text-purple
                    transition
                    hover:border-gold/20
                    hover:bg-champagne
                  "
                >
                  <span>Discover Projects</span>
                  <span>→</span>
                </Link>

                <Link
                  to="/freelancer/proposals"
                  className="
                    flex items-center
                    justify-between
                    rounded-xl
                    border border-transparent
                    px-4 py-3
                    font-quicksand
                    font-semibold
                    text-purple
                    transition
                    hover:border-gold/20
                    hover:bg-champagne
                  "
                >
                  <span>My Proposals</span>
                  <span>→</span>
                </Link>

              </nav>
            </section>

          </aside>

        </div>

      </div>
    </main>
  )
}

export default FreelancerProfile
