import { NavLink, Outlet } from 'react-router-dom'

function ClientLayout() {
  const navItems = [
    {
      label: 'Home',
      path: '/client',
    },
    {
      label: 'Projects',
      path: '/client/projects',
    },
    {
      label: 'Profile',
      path: '/client/profile',
    },
  ]

  return (
    <div className="min-h-screen bg-champagne">

      {/* Client navigation */}
      <header className="
        border-b border-gold/20
        bg-white
      ">
        <div className="
          mx-auto
          flex max-w-7xl
          flex-col
          gap-6
          px-6 py-6
          md:flex-row
          md:items-center
          md:justify-between
        ">

          {/* Logo */}
          <NavLink
            to="/client"
            className="
              font-basic
              text-2xl font-bold
              text-purple
            "
          >
            GR
          </NavLink>

          {/* Navigation */}
          <nav className="
            flex flex-wrap
            items-center
            gap-3
          ">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/client'}
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

          {/* User area */}
          <div className="
            flex
            items-center
            gap-4
          ">
            <div className="
              hidden
              text-right
              sm:block
            ">
              <p className="
                font-quicksand
                text-sm font-semibold
                text-purple
              ">
                Client Account
              </p>

              <p className="
                font-quicksand
                text-xs
                text-muted
              ">
                Client
              </p>
            </div>

            <div className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              bg-gold
              font-basic
              font-bold
              text-purple
            ">
              C
            </div>
          </div>

        </div>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default ClientLayout
