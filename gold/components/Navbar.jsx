import { NavLink } from 'react-router-dom'

function Navbar({ role = 'client' }) {
  const basePath = role === 'freelancer'
    ? '/freelancer'
    : '/client'

  const navItems = role === 'freelancer'
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
    <nav className="flex flex-wrap items-center gap-3">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === basePath}
          className={({ isActive }) =>
            `
              rounded-xl
              px-5 py-3
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
  )
}

export default Navbar
