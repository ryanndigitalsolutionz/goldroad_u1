import { Link } from 'react-router-dom'

function ProposalCard({
  proposal,
}) {
  if (!proposal) return null

  const statusStyles = {
    Pending: 'bg-champagne text-purple',
    Accepted: 'bg-teal/10 text-teal',
    Rejected: 'bg-red-50 text-red-600',
  }

  return (
    <article className="
      rounded-2xl
      border border-gold/20
      bg-white
      p-8
    ">
      <div className="
        flex flex-col
        gap-5
        md:flex-row
        md:items-start
        md:justify-between
      ">
        <div>
          {proposal.category && (
            <p className="
              font-quicksand
              text-sm font-semibold
              text-teal
            ">
              {proposal.category}
            </p>
          )}

          <h2 className="
            mt-3
            font-basic
            text-2xl font-bold
            text-purple
          ">
            {proposal.projectTitle}
          </h2>
        </div>

        <span
          className={`
            rounded-full
            px-4 py-2
            font-quicksand
            text-xs font-semibold
            ${
              statusStyles[proposal.status]
              || 'bg-champagne text-purple'
            }
          `}
        >
          {proposal.status}
        </span>
      </div>

      {proposal.coverLetter && (
        <p className="
          mt-6
          leading-8
          font-quicksand
          text-ink
        ">
          {proposal.coverLetter}
        </p>
      )}

      <div className="
        mt-8
        grid gap-6
        border-t border-gold/20
        pt-6
        sm:grid-cols-2
        lg:grid-cols-4
      ">
        <div>
          <p className="
            font-quicksand
            text-xs
            text-muted
          ">
            Your Bid
          </p>

          <p className="
            mt-2
            font-quicksand
            font-bold
            text-purple
          ">
            {proposal.bid}
          </p>
        </div>

        <div>
          <p className="
            font-quicksand
            text-xs
            text-muted
          ">
            Timeline
          </p>

          <p className="
            mt-2
            font-quicksand
            font-semibold
            text-ink
          ">
            {proposal.timeline}
          </p>
        </div>

        <div>
          <p className="
            font-quicksand
            text-xs
            text-muted
          ">
            Submitted
          </p>

          <p className="
            mt-2
            font-quicksand
            font-semibold
            text-ink
          ">
            {proposal.submittedAt}
          </p>
        </div>

        <div>
          <p className="
            font-quicksand
            text-xs
            text-muted
          ">
            Client
          </p>

          <p className="
            mt-2
            font-quicksand
            font-semibold
            text-ink
          ">
            {proposal.clientName}
          </p>
        </div>
      </div>

      {proposal.projectId && (
        <div className="
          mt-8
          border-t border-gold/20
          pt-6
        ">
          <Link
            to={`/freelancer/projects/${proposal.projectId}`}
            className="
              font-quicksand
              text-sm font-semibold
              text-purple
              hover:underline
            "
          >
            View Project →
          </Link>
        </div>
      )}
    </article>
  )
}

export default ProposalCard
