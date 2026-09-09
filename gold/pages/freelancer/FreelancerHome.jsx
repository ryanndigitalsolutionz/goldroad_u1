// FreelancerHome.jsx

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

function FreelancerHome() {
  const [projects, setProjects] = useState([])
  const [proposals, setProposals] = useState([])
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        setError('')

        const [projectsResponse, proposalsResponse, usersResponse] =
          await Promise.all([
            fetch('http://127.0.0.1:5000/projects', {
              credentials: 'include',
            }),

            fetch('http://127.0.0.1:5000/proposals', {
              credentials: 'include',
            }),

            fetch('http://127.0.0.1:5000/users', {
              credentials: 'include',
            }),
          ])

        if (!projectsResponse.ok) {
          throw new Error('Failed to load projects.')
        }

        if (!proposalsResponse.ok) {
          throw new Error('Failed to load proposals.')
        }

        if (!usersResponse.ok) {
          throw new Error('Failed to load users.')
        }

        const projectsData = await projectsResponse.json()
        const proposalsData = await proposalsResponse.json()
        const usersData = await usersResponse.json()

        setProjects(
          Array.isArray(projectsData)
            ? projectsData
            : []
        )

        setProposals(
          Array.isArray(proposalsData)
            ? proposalsData
            : []
        )

        setUsers(
          Array.isArray(usersData)
            ? usersData
            : []
        )
      } catch (error) {
        console.error('Freelancer dashboard error:', error)
        setError(
          error.message || 'Could not load dashboard data.'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [])

  const projectCount = projects.length
  const proposalCount = proposals.length

  const recentProjects = projects.slice(0, 3)
  const recentProposals = proposals.slice(0, 5)

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

        {/* Error */}
        {error && (
          <div className="
            mb-8 rounded-xl
            border border-red-300
            bg-red-50
            px-5 py-4
            font-quicksand text-sm
            text-red-700
          ">
            {error}
          </div>
        )}

        {/* Stats */}
        <section className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Available Projects */}
          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Available Projects
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              {loading ? '...' : projectCount}
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Projects currently listed
            </p>
          </div>

          {/* Proposals */}
          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Proposals
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              {loading ? '...' : proposalCount}
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Proposals in the system
            </p>
          </div>

          {/* Earnings */}
          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Earnings
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              KSh 0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Earnings tracking not available yet
            </p>
          </div>

          {/* Profile Views */}
          <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm">
            <p className="font-quicksand text-sm font-semibold text-muted">
              Profile Views
            </p>

            <p className="mt-3 font-basic text-4xl font-bold text-purple">
              0
            </p>

            <p className="mt-2 font-quicksand text-sm text-muted">
              Profile view tracking not available yet
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

              {loading ? (
                <div className="flex min-h-64 items-center justify-center">
                  <p className="font-quicksand text-muted">
                    Loading projects...
                  </p>
                </div>
              ) : recentProjects.length === 0 ? (
                <div className="flex min-h-64 flex-col items-center justify-center text-center">

                  <div className="
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    border border-gold/30
                    bg-champagne
                    text-2xl text-purple
                  ">
                    <FiSearch />
                  </div>

                  <h3 className="mt-5 font-basic text-xl font-bold text-purple">
                    No projects available
                  </h3>

                  <p className="mt-3 max-w-md font-quicksand leading-7 text-muted">
                    There are currently no projects available.
                    Check back later for new opportunities.
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
              ) : (
                <div className="space-y-4">

                  {recentProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/freelancer/projects/${project.id}`}
                      className="
                        block rounded-xl
                        border border-gold/20
                        bg-champagne
                        p-5
                        transition
                        hover:border-gold/50
                        hover:shadow-md
                      "
                    >
                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h3 className="font-basic text-lg font-bold text-purple">
                            {project.title || 'Untitled Project'}
                          </h3>

                          <p className="mt-2 line-clamp-2 font-quicksand text-sm leading-6 text-muted">
                            {project.description ||
                              'No project description available.'}
                          </p>
                        </div>

                        {project.budget !== undefined &&
                          project.budget !== null && (
                            <span className="
                              whitespace-nowrap
                              rounded-lg
                              bg-gold/20
                              px-3 py-2
                              font-quicksand
                              text-sm
                              font-bold
                              text-purple
                            ">
                              KSh {project.budget}
                            </span>
                          )}

                      </div>

                      {project.category && (
                        <p className="mt-4 font-quicksand text-xs font-semibold text-purple">
                          {project.category}
                        </p>
                      )}
                    </Link>
                  ))}

                </div>
              )}

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

            {loading ? (
              <div className="flex min-h-32 items-center justify-center">
                <p className="font-quicksand text-muted">
                  Loading proposals...
                </p>
              </div>
            ) : recentProposals.length === 0 ? (
              <div className="flex min-h-32 items-center justify-center text-center">
                <p className="font-quicksand text-muted">
                  You haven't submitted any proposals yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">

                {recentProposals.map((proposal) => (
                  <div
                    key={proposal.id}
                    className="
                      rounded-xl
                      border border-gold/20
                      bg-champagne
                      p-5
                    "
                  >
                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="font-basic font-bold text-purple">
                          Proposal #{proposal.id}
                        </p>

                        {proposal.project_id && (
                          <p className="mt-1 font-quicksand text-sm text-muted">
                            Project #{proposal.project_id}
                          </p>
                        )}
                      </div>

                      {proposal.status && (
                        <span className="
                          rounded-lg
                          bg-gold/20
                          px-3 py-2
                          font-quicksand
                          text-xs
                          font-bold
                          text-purple
                        ">
                          {proposal.status}
                        </span>
                      )}

                    </div>
                  </div>
                ))}

              </div>
            )}

          </div>

        </section>

      </div>
    </main>
  )
}

export default FreelancerHome
