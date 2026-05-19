import {
  FaHome,
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaMoneyBill,
  FaSignOutAlt,
  FaCapsules,
} from "react-icons/fa"

import {
  Link,
  useLocation,
} from "react-router-dom"

const Sidebar = () => {
  const location = useLocation()

  const role =
    localStorage.getItem("role")

  const name =
    localStorage.getItem("name")

  const activeLink = (path) =>
    location.pathname === path
      ? "flex items-center gap-3 bg-white text-blue-700 px-5 py-4 rounded-2xl font-semibold shadow-md"
      : "flex items-center gap-3 text-white hover:bg-white hover:text-blue-700 transition duration-300 px-5 py-4 rounded-2xl"

  const handleLogout = () => {
    localStorage.clear()

    window.location.href =
      "/login"
  }

  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-blue-800 to-indigo-900 text-white p-6 flex flex-col justify-between shadow-2xl">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="mb-12">

          <h1 className="text-5xl font-extrabold tracking-wide">
            HMS
          </h1>

          <p className="text-blue-200 mt-2">
            Hospital Management
          </p>
        </div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-4">

          {/* DASHBOARD */}
          <Link
            to="/"
            className={activeLink("/")}
          >
            <FaHome />
            <span>Dashboard</span>
          </Link>

          {/* PATIENTS */}
          {(role === "admin" ||
            role ===
              "receptionist") && (
            <Link
              to="/patients"
              className={activeLink(
                "/patients"
              )}
            >
              <FaUserInjured />
              <span>Patients</span>
            </Link>
          )}

          {/* DOCTORS */}
          {role === "admin" && (
            <Link
              to="/doctors"
              className={activeLink(
                "/doctors"
              )}
            >
              <FaUserMd />
              <span>Doctors</span>
            </Link>
          )}

          {/* APPOINTMENTS */}
          {(role === "admin" ||
            role === "doctor" ||
            role ===
              "receptionist" ||
            role ===
              "patient") && (
            <Link
              to="/appointments"
              className={activeLink(
                "/appointments"
              )}
            >
              <FaCalendarCheck />
              <span>
                Appointments
              </span>
            </Link>
          )}

          {/* BILLING */}
          {(role === "admin" ||
            role ===
              "receptionist") && (
            <Link
              to="/billing"
              className={activeLink(
                "/billing"
              )}
            >
              <FaMoneyBill />
              <span>Billing</span>
            </Link>
          )}

          {/* PHARMACY */}
          {(role === "admin" ||
            role ===
              "pharmacist") && (
            <Link
              to="/pharmacy"
              className={activeLink(
                "/pharmacy"
              )}
            >
              <FaCapsules />
              <span>Pharmacy</span>
            </Link>
          )}
        </nav>
      </div>

      {/* BOTTOM */}
      <div>

        {/* USER INFO */}
        <div className="bg-white/10 rounded-2xl p-5 mb-5 text-center backdrop-blur-sm">

          <p className="text-blue-200 text-sm">
            Logged in as
          </p>

          <h2 className="text-2xl font-bold mt-2">
            {name}
          </h2>

          <p className="text-blue-100 capitalize mt-1">
            {role}
          </p>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition duration-300 py-4 rounded-2xl font-bold shadow-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar