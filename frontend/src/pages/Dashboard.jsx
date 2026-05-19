import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa"

const Dashboard = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">

      {/* TITLE */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-800">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to Hospital Management System
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* PATIENTS */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">
                Patients
              </p>

              <h2 className="text-4xl font-bold mt-2">
                120
              </h2>
            </div>

            <FaUserInjured size={45} />
          </div>
        </div>

        {/* DOCTORS */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">
                Doctors
              </p>

              <h2 className="text-4xl font-bold mt-2">
                25
              </h2>
            </div>

            <FaUserMd size={45} />
          </div>
        </div>

        {/* APPOINTMENTS */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">
                Appointments
              </p>

              <h2 className="text-4xl font-bold mt-2">
                54
              </h2>
            </div>

            <FaCalendarCheck size={45} />
          </div>
        </div>

        {/* REVENUE */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg">
                Revenue
              </p>

              <h2 className="text-4xl font-bold mt-2">
                ₹50K
              </h2>
            </div>

            <FaMoneyBillWave size={45} />
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-white mt-10 rounded-3xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-3">
            <p>
              New patient registered
            </p>

            <span className="text-sm text-gray-500">
              2 mins ago
            </span>
          </div>

          <div className="flex items-center justify-between border-b pb-3">
            <p>
              Appointment booked
            </p>

            <span className="text-sm text-gray-500">
              10 mins ago
            </span>
          </div>

          <div className="flex items-center justify-between border-b pb-3">
            <p>
              Doctor added
            </p>

            <span className="text-sm text-gray-500">
              30 mins ago
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard