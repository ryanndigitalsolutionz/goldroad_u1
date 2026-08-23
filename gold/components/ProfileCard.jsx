import { Link } from 'react-router-dom'

function ProfileCard({
  profile,
  showLink = true,
}) {
  if (!profile) return null

  return (
    <article className="
      rounded-2xl
      border border-gold/20
      bg-white
      p-8
    ">
      <div className="
        flex
        items-start
        gap-5
      ">
        <div className="
          flex h-16 w-16
          shrink-0
          items-center justify-center
          rounded-full
          bg-gold
          font-basic
          text-xl font-bold
          text-purple
        ">
          {profile.initials || 'GR'}
        </div>

        <div className="min-w-0">
          <h2 className="
            font-basic
            text-xl font-bold
            text-purple
          ">
            {profile.name}
          </h2>

          {profile.title && (
            <p className="
              mt-2
              font-quicksand
              font-semibold
              text-teal
            ">
              {profile.title}
            </p>
          )}

          {profile.location && (
            <p className="
              mt-2
              font-quicksand
              text-sm
              text-muted
            ">
              {profile.location}
            </p>
          )}
        </div>
      </div>

      {profile.bio && (
        <p className="
          mt-6
          font-quicksand
          leading-8
          text-ink
        ">
          {profile.bio}
        </p>
      )}

      {showLink && profile.id && (
        <Link
          to={`/profile/${profile.id}`}
          className="
            mt-6
            inline-block
            font-quicksand
            text-sm font-semibold
            text-purple
            hover:underline
          "
        >
          View Profile →
        </Link>
      )}
    </article>
  )
}

export default ProfileCard
