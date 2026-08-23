import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Layouts
import AuthLayout from './layouts/AuthLayout'
import ClientLayout from './layouts/ClientLayout'
import FreelancerLayout from './layouts/FreelancerLayout'

// Authentication pages
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'

// Client pages
import ClientHome from './pages/client/ClientHome'
import ClientProfile from './pages/client/ClientProfile'
import ClientProjects from './pages/client/ClientProjects'
import CreateProject from './pages/client/CreateProject'
import ProjectDetails from './pages/client/ProjectDetails'

// Freelancer pages
import FreelancerHome from './pages/freelancer/FreelancerHome'
import FreelancerProfile from './pages/freelancer/FreelancerProfile'
import FreelancerProjects from './pages/freelancer/FreelancerProjects'
import FreelancerProposals from './pages/freelancer/FreelancerProposals'
import SubmitProposal from './pages/freelancer/SubmitProposal'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =========================
            Authentication
        ========================== */}
        <Route element={<AuthLayout />}>
          <Route
            path="/"
            element={<Welcome />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
        </Route>

        {/* =========================
            Client
        ========================== */}
        <Route
          path="/client"
          element={<ClientLayout />}
        >
          <Route
            index
            element={<ClientHome />}
          />

          <Route
            path="profile"
            element={<ClientProfile />}
          />

          <Route
            path="projects"
            element={<ClientProjects />}
          />

          <Route
            path="projects/create"
            element={<CreateProject />}
          />

          <Route
            path="projects/:id"
            element={<ProjectDetails />}
          />
        </Route>

        {/* =========================
            Freelancer
        ========================== */}
        <Route
          path="/freelancer"
          element={<FreelancerLayout />}
        >
          <Route
            index
            element={<FreelancerHome />}
          />

          <Route
            path="profile"
            element={<FreelancerProfile />}
          />

          <Route
            path="projects"
            element={<FreelancerProjects />}
          />

          <Route
            path="projects/:id"
            element={<ProjectDetails />}
          />

          <Route
            path="projects/:id/proposal"
            element={<SubmitProposal />}
          />

          <Route
            path="proposals"
            element={<FreelancerProposals />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
