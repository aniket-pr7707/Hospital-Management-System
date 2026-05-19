import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Patients from "./pages/Patients"
import Doctors from "./pages/Doctors"
import Appointments from "./pages/Appointments"
import Billing from "./pages/Billing"
import Pharmacy from "./pages/Pharmacy"
import Login from "./pages/Login"
import Register from "./pages/Register"

import Sidebar from "./components/Sidebar"
import RoleRoute from "./components/RoleRoute"

function Layout({
  children,
}) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}
        <Route
          path="/"
          element={
            <RoleRoute
              allowedRoles={[
                "admin",
                "doctor",
                "receptionist",
                "patient",
                "pharmacist",
              ]}
            >
              <Layout>
                <Dashboard />
              </Layout>
            </RoleRoute>
          }
        />

        {/* PATIENTS */}
        <Route
          path="/patients"
          element={
            <RoleRoute
              allowedRoles={[
                "admin",
                "receptionist",
              ]}
            >
              <Layout>
                <Patients />
              </Layout>
            </RoleRoute>
          }
        />

        {/* DOCTORS */}
        <Route
          path="/doctors"
          element={
            <RoleRoute
              allowedRoles={[
                "admin",
              ]}
            >
              <Layout>
                <Doctors />
              </Layout>
            </RoleRoute>
          }
        />

        {/* APPOINTMENTS */}
        <Route
          path="/appointments"
          element={
            <RoleRoute
              allowedRoles={[
                "admin",
                "doctor",
                "receptionist",
                "patient",
              ]}
            >
              <Layout>
                <Appointments />
              </Layout>
            </RoleRoute>
          }
        />

        {/* BILLING */}
        <Route
          path="/billing"
          element={
            <RoleRoute
              allowedRoles={[
                "admin",
                "receptionist",
              ]}
            >
              <Layout>
                <Billing />
              </Layout>
            </RoleRoute>
          }
        />

        {/* PHARMACY */}
        <Route
          path="/pharmacy"
          element={
            <RoleRoute
              allowedRoles={[
                "admin",
                "pharmacist",
              ]}
            >
              <Layout>
                <Pharmacy />
              </Layout>
            </RoleRoute>
          }
        />

        {/* UNKNOWN ROUTE */}
        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App