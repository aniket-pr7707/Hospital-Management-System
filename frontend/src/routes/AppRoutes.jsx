import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"

import Sidebar from "../components/Sidebar"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import Patients from "../pages/Patients"
import Doctors from "../pages/Doctors"
import Appointments from "../pages/Appointments"
import Billing from "../pages/Billing"
import Login from "../pages/Login"
import Pharmacy from "../pages/Pharmacy"

const Layout = () => {
  const token =
    localStorage.getItem("token")

  const location = useLocation()

  // LOGIN PAGE
  if (location.pathname === "/login") {
    return (
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    )
  }

  // NO TOKEN
  if (!token) {
    return (
      <Navigate to="/login" />
    )
  }

  <Route 
    path="/register"
    element={<Register />}
  />

  // MAIN APP
  return (
    <div className="flex w-full">

      {/* SIDEBAR */}
      <Sidebar />

      {/* PAGES */}
      <div className="flex-1">
        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/pharmacy"
            element={<Pharmacy />}
          />

          <Route
            path="*"
            element={
              <Navigate to="/" />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default AppRoutes