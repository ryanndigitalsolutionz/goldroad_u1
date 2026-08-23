import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CreateProject() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    skills: '',
    budgetType: 'fixed',
    budget: '',
    duration: '',
    experienceLevel: '',
    requirements: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Backend submission will be added later.
    console.log('Project data:', formData)
  }

  return (
    <main className="min-h-screen bg-champagne px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Page header */}
        <header className="mb-12">
          <Link
            to="/client/projects"
            className="font-quicksand text-sm font-semibold text-purple hover:underline"
          >
            ← Back to Projects
          </Link>

          <p className="mt-10 font-quicksand text-sm font-semibold uppercase tracking-wider text-teal">
            New Project
          </p>

          <h1 className="mt-3 font-basic text-4xl font-bold text-purple">
            Post a Project
          </h1>

          <p className="mt-5 max-w-2xl font-quicksand text-lg leading-8 text-muted">
            Describe what you need and give freelancers enough information
            to understand the opportunity.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-10"
        >

          {/* Basic information */}
          <section className="rounded-2xl bg-white p-8 md:p-10">

            <div className="mb-8">
              <h2 className="font-basic text-2xl font-bold text-purple">
                Project Information
              </h2>

              <p className="mt-3 font-quicksand leading-7 text-muted">
                Start with the basics of the work you need completed.
              </p>
            </div>

            <div className="space-y-8">

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="font-quicksand font-semibold text-ink"
                >
                  Project title
                </label>

                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Build a responsive business website"
                  required
                  className="
                    mt-3 w-full rounded-xl
                    border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="font-quicksand font-semibold text-ink"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the project, goals, expected work, and anything freelancers should know."
                  rows="8"
                  required
                  className="
                    mt-3 w-full resize-y rounded-xl
                    border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand leading-7 text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="font-quicksand font-semibold text-ink"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="
                    mt-3 w-full rounded-xl
                    border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                >
                  <option value="">
                    Select a category
                  </option>

                  <option value="development">
                    Web & Software Development
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

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Skills */}
              <div>
                <label
                  htmlFor="skills"
                  className="font-quicksand font-semibold text-ink"
                >
                  Skills required
                </label>

                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, JavaScript, UI Design"
                  className="
                    mt-3 w-full rounded-xl
                    border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                />

                <p className="mt-3 font-quicksand text-sm leading-6 text-muted">
                  Separate multiple skills with commas.
                </p>
              </div>

            </div>
          </section>

          {/* Budget */}
          <section className="rounded-2xl bg-white p-8 md:p-10">

            <div className="mb-8">
              <h2 className="font-basic text-2xl font-bold text-purple">
                Budget & Timeline
              </h2>

              <p className="mt-3 font-quicksand leading-7 text-muted">
                Give freelancers an idea of the project's financial and
                time expectations.
              </p>
            </div>

            <div className="space-y-8">

              {/* Budget type */}
              <fieldset>
                <legend className="font-quicksand font-semibold text-ink">
                  Budget type
                </legend>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row">

                  <label className="
                    flex cursor-pointer items-center gap-3
                    rounded-xl border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand
                  ">
                    <input
                      type="radio"
                      name="budgetType"
                      value="fixed"
                      checked={formData.budgetType === 'fixed'}
                      onChange={handleChange}
                    />

                    <span>
                      Fixed price
                    </span>
                  </label>

                  <label className="
                    flex cursor-pointer items-center gap-3
                    rounded-xl border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand
                  ">
                    <input
                      type="radio"
                      name="budgetType"
                      value="hourly"
                      checked={formData.budgetType === 'hourly'}
                      onChange={handleChange}
                    />

                    <span>
                      Hourly rate
                    </span>
                  </label>

                </div>
              </fieldset>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="font-quicksand font-semibold text-ink"
                >
                  Budget amount
                </label>

                <div className="mt-3 flex">

                  <span className="
                    flex items-center rounded-l-xl
                    border border-r-0 border-gold/30
                    bg-champagne px-5
                    font-quicksand font-semibold text-purple
                  ">
                    KES
                  </span>

                  <input
                    id="budget"
                    name="budget"
                    type="number"
                    min="0"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="0"
                    required
                    className="
                      w-full rounded-r-xl
                      border border-gold/30
                      bg-champagne px-5 py-4
                      font-quicksand text-ink
                      outline-none
                      transition
                      focus:border-purple
                      focus:ring-2
                      focus:ring-purple/20
                    "
                  />

                </div>
              </div>

              {/* Duration */}
              <div>
                <label
                  htmlFor="duration"
                  className="font-quicksand font-semibold text-ink"
                >
                  Expected duration
                </label>

                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="
                    mt-3 w-full rounded-xl
                    border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                >
                  <option value="">
                    Select a duration
                  </option>

                  <option value="less-than-week">
                    Less than a week
                  </option>

                  <option value="one-four-weeks">
                    1–4 weeks
                  </option>

                  <option value="one-three-months">
                    1–3 months
                  </option>

                  <option value="three-plus-months">
                    3+ months
                  </option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="experienceLevel"
                  className="font-quicksand font-semibold text-ink"
                >
                  Experience level
                </label>

                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                  className="
                    mt-3 w-full rounded-xl
                    border border-gold/30
                    bg-champagne px-5 py-4
                    font-quicksand text-ink
                    outline-none
                    transition
                    focus:border-purple
                    focus:ring-2
                    focus:ring-purple/20
                  "
                >
                  <option value="">
                    Select experience level
                  </option>

                  <option value="entry">
                    Entry level
                  </option>

                  <option value="intermediate">
                    Intermediate
                  </option>

                  <option value="expert">
                    Expert
                  </option>
                </select>
              </div>

            </div>
          </section>

          {/* Additional requirements */}
          <section className="rounded-2xl bg-white p-8 md:p-10">

            <div className="mb-8">
              <h2 className="font-basic text-2xl font-bold text-purple">
                Additional Requirements
              </h2>

              <p className="mt-3 font-quicksand leading-7 text-muted">
                Add anything else freelancers should know before submitting
                a proposal.
              </p>
            </div>

            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Optional requirements, preferences, or additional information..."
              rows="6"
              className="
                w-full resize-y rounded-xl
                border border-gold/30
                bg-champagne px-5 py-4
                font-quicksand leading-7 text-ink
                outline-none
                transition
                focus:border-purple
                focus:ring-2
                focus:ring-purple/20
              "
            />

          </section>

          {/* Actions */}
          <div className="
            flex flex-col-reverse gap-4
            border-t border-gold/20 pt-8
            sm:flex-row sm:items-center sm:justify-between
          ">
            <button
              type="button"
              onClick={() => navigate('/client/projects')}
              className="
                rounded-xl border border-gold/40
                bg-white px-6 py-4
                font-quicksand font-semibold text-purple
                transition
                hover:bg-white/70
              "
            >
              Cancel
            </button>

            <div className="flex flex-col gap-4 sm:flex-row">

              <button
                type="button"
                className="
                  rounded-xl border border-purple/30
                  px-6 py-4
                  font-quicksand font-semibold text-purple
                  transition
                  hover:bg-purple/5
                "
              >
                Save Draft
              </button>

              <button
                type="submit"
                className="
                  rounded-xl bg-gold px-7 py-4
                  font-quicksand font-bold text-purple
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Publish Project
              </button>

            </div>
          </div>

        </form>
      </div>
    </main>
  )
}

export default CreateProject
