import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'

function SubmitProposal() {
  const { id } = useParams()

  const [coverLetter, setCoverLetter] = useState('')
  const [bid, setBid] = useState('')
  const [timeline, setTimeline] = useState('')
  const [error, setError] = useState('')

  // Temporary project data.
  // This will eventually come from:
  // GET /projects/:id
  const project = {
    id,
    title: 'Build a responsive business website',
    category: 'Web & Software Development',
    budget: 'KES 50,000',
    budgetType: 'Fixed Price',
    duration: '1–4 weeks',
    skills: [
      'React',
      'JavaScript',
      'CSS',
      'Responsive Design',
    ],
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!coverLetter.trim()) {
      setError('Please write a short proposal to the client.')
      return
    }

    if (!bid || Number(bid) <= 0) {
      setError('Please enter a valid bid.')
      return
    }

    if (!timeline.trim()) {
      setError('Please provide your estimated timeline.')
      return
    }

    setError('')

    // This will eventually send the proposal to the backend.
    // Example:
    // POST /projects/:id/proposals

    console.log({
      projectId: project.id,
      coverLetter,
      bid,
      timeline,
    })
  }

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Back navigation */}
        <Link
          to={`/freelancer/projects/${project.id}`}
          className="
            font-quicksand
            text-sm font-semibold
            text-purple
            hover:underline
          "
        >
          ← Back to Project
        </Link>

        {/* Page header */}
        <header className="
          mt-10
          border-b border-gold/20
          pb-10
        ">
          <p className="
            font-quicksand
            text-sm font-semibold
            uppercase tracking-wider
            text-teal
          ">
            Submit Proposal
          </p>

          <h1 className="
            mt-3
            font-basic
            text-4xl font-bold
            text-purple
            md:text-5xl
          ">
            Apply for this project
          </h1>

          <p className="
            mt-5
            max-w-3xl
            font-quicksand
            text-lg
            leading-8
            text-muted
          ">
            Tell the client why you're a good fit, what you'll
            charge, and how long the project will take.
          </p>
        </header>

        <div className="
          grid gap-10
          py-12
          lg:grid-cols-[1fr_360px]
        ">

          {/* Proposal form */}
          <section className="
            rounded-2xl
            border border-gold/20
            bg-white
            p-8 md:p-10
          ">

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* Cover letter */}
              <div>
                <label
                  htmlFor="coverLetter"
                  className="
                    font-basic
                    text-xl font-bold
                    text-purple
                  "
                >
                  Your Proposal
                </label>

                <p className="
                  mt-3
                  font-quicksand
                  leading-7
                  text-muted
                ">
                  Explain how you would approach the project and
                  why your skills make you a good fit.
                </p>

                <textarea
                  id="coverLetter"
                  value={coverLetter}
                  onChange={(event) =>
                    setCoverLetter(event.target.value)
                  }
                  placeholder="Write your proposal here..."
                  rows={9}
                  className="
                    mt-6
                    w-full
                    resize-y
                    rounded-xl
                    border border-gold/30
                    bg-champagne/20
                    px-5 py-4
                    font-quicksand
                    leading-7
                    text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                />
              </div>

              {/* Bid */}
              <div>
                <label
                  htmlFor="bid"
                  className="
                    font-basic
                    text-xl font-bold
                    text-purple
                  "
                >
                  Your Bid
                </label>

                <p className="
                  mt-3
                  font-quicksand
                  leading-7
                  text-muted
                ">
                  Enter the amount you would charge for this
                  project.
                </p>

                <div className="
                  mt-6
                  flex
                  overflow-hidden
                  rounded-xl
                  border border-gold/30
                  bg-champagne/20
                  focus-within:border-purple
                  focus-within:ring-2
                  focus-within:ring-purple/20
                ">
                  <span className="
                    flex
                    items-center
                    border-r border-gold/30
                    px-5
                    font-quicksand
                    font-semibold
                    text-muted
                  ">
                    KES
                  </span>

                  <input
                    id="bid"
                    type="number"
                    min="1"
                    step="1"
                    value={bid}
                    onChange={(event) =>
                      setBid(event.target.value)
                    }
                    placeholder="50000"
                    className="
                      w-full
                      bg-transparent
                      px-5 py-4
                      font-quicksand
                      text-ink
                      outline-none
                    "
                  />
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label
                  htmlFor="timeline"
                  className="
                    font-basic
                    text-xl font-bold
                    text-purple
                  "
                >
                  Estimated Timeline
                </label>

                <p className="
                  mt-3
                  font-quicksand
                  leading-7
                  text-muted
                ">
                  Tell the client how long you expect the project
                  to take.
                </p>

                <input
                  id="timeline"
                  type="text"
                  value={timeline}
                  onChange={(event) =>
                    setTimeline(event.target.value)
                  }
                  placeholder="e.g. 2 weeks"
                  className="
                    mt-6
                    w-full
                    rounded-xl
                    border border-gold/30
                    bg-champagne/20
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
              </div>

              {/* Error */}
              {error && (
                <div className="
                  rounded-xl
                  border border-red-200
                  bg-red-50
                  px-5 py-4
                ">
                  <p className="
                    font-quicksand
                    text-sm font-semibold
                    text-red-600
                  ">
                    {error}
                  </p>
                </div>
              )}

              {/* Submit */}
              <div className="
                border-t border-gold/20
                pt-8
              ">
                <button
                  type="submit"
                  className="
                    w-full
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
                  Submit Proposal
                </button>

                <p className="
                  mt-4
                  text-center
                  font-quicksand
                  text-sm
                  leading-6
                  text-muted
                ">
                  Make sure your proposal and bid are accurate
                  before submitting.
                </p>
              </div>

            </form>

          </section>

          {/* Project summary */}
          <aside>
            <section className="
              rounded-2xl
              border border-gold/20
              bg-white
              p-8
            ">
              <p className="
                font-quicksand
                text-sm font-semibold
                text-teal
              ">
                {project.category}
              </p>

              <h2 className="
                mt-3
                font-basic
                text-2xl font-bold
                text-purple
              ">
                {project.title}
              </h2>

              <div className="
                mt-8
                space-y-7
                border-t border-gold/20
                pt-7
              ">

                <div>
                  <p className="
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    Client Budget
                  </p>

                  <p className="
                    mt-2
                    font-quicksand
                    text-lg font-bold
                    text-purple
                  ">
                    {project.budget}
                  </p>

                  <p className="
                    mt-1
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    {project.budgetType}
                  </p>
                </div>

                <div>
                  <p className="
                    font-quicksand
                    text-sm
                    text-muted
                  ">
                    Expected Duration
                  </p>

                  <p className="
                    mt-2
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
                    text-sm
                    text-muted
                  ">
                    Skills Required
                  </p>

                  <div className="
                    mt-4
                    flex flex-wrap
                    gap-2
                  ">
                    {project.skills.map((skill) => (
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

              </div>

              <Link
                to={`/freelancer/projects/${project.id}`}
                className="
                  mt-8
                  block
                  text-center
                  font-quicksand
                  text-sm font-semibold
                  text-purple
                  hover:underline
                "
              >
                View Full Project →
              </Link>

            </section>
          </aside>

        </div>

      </div>
    </main>
  )
}

export default SubmitProposal
