import { NavLink } from 'react-router-dom'

function Sidebar({ role = 'client' }) {
  const basePath = role === 'freelancer'
    ? '/freelancer'
    : '/client'

  const items = role === 'freelancer'
    ? [
        { label: 'Home', path: basePath },
        { label: 'Projects', path: `${basePath}/projects` },
        { label: 'Proposals', path: `${basePath}/proposals` },
        { label: 'Profile', path: `${basePath}/profile` },
      ]
    : [
        { label: 'Home', path: basePath },
        { label: 'Projects', path: `${basePath}/projects` },
        { label: 'Profile', path: `${basePath}/profile` },
      ]

  return (
    <aside className="
      w-full
      border-r border-gold/20
      bg-white
      p-6
      lg:min-h-screen
      lg:w-64
    ">
      <div className="mb-10">
        <p className="
          font-basic
          text-2xl font-bold
          text-purple
        ">
          GR
        </p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === basePath}
            className={({ isActive }) =>
              `
                block
                rounded-xl
                px-5 py-4
                font-quicksand
                text-sm font-semibold
                transition
                ${
                  isActive
                    ? 'bg-purple text-white'
                    : 'text-ink hover:bg-purple/5'
                }
              `
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
