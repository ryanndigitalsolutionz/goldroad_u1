import { Link } from 'react-router-dom'

function ProjectCard({
  project,
  role = 'freelancer',
}) {
  if (!project) return null

  const projectPath = role === 'client'
    ? `/client/projects/${project.id}`
    : `/freelancer/projects/${project.id}`

  return (
    <article className="
      rounded-2xl
      border border-gold/20
      bg-white
      p-8
      transition
      hover:-translate-y-1
      hover:shadow-lg
    ">
      <div className="
        flex flex-col
        gap-5
        md:flex-row
        md:items-start
        md:justify-between
      ">
        <div>
          {project.category && (
            <p className="
              font-quicksand
              text-sm font-semibold
              text-teal
            ">
              {project.category}
            </p>
          )}

          <h2 className="
            mt-3
            font-basic
            text-2xl font-bold
            text-purple
          ">
            {project.title}
          </h2>
        </div>

        {project.status && (
          <span className="
            rounded-full
            bg-champagne
            px-4 py-2
            font-quicksand
            text-xs font-semibold
            text-purple
          ">
            {project.status}
          </span>
        )}
      </div>

      {project.description && (
        <p className="
          mt-5
          leading-8
          font-quicksand
          text-ink
        ">
          {project.description}
        </p>
      )}

      {project.skills?.length > 0 && (
        <div className="
          mt-6
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
      )}

      <div className="
        mt-8
        flex flex-col
        gap-5
        border-t border-gold/20
        pt-6
        sm:flex-row
        sm:items-center
        sm:justify-between
      ">
        <div>
          <p className="
            font-quicksand
            text-xs
            text-muted
          ">
            Budget
          </p>

          <p className="
            mt-2
            font-quicksand
            font-bold
            text-purple
          ">
            {project.budget || 'Not specified'}
          </p>
        </div>

        <Link
          to={projectPath}
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
  )
}

export default ProjectCard
