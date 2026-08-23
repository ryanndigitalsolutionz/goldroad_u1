import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <main className="min-h-screen bg-champagne">
      <div className="min-h-screen">
        <Outlet />
      </div>
    </main>
  )
}

export default AuthLayout
