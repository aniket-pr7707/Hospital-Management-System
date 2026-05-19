import { useState } from "react"

const Appointments = () => {
  const [
    appointments,
    setAppointments,
  ] = useState([])

  const [formData, setFormData] =
    useState({
      patient: "",
      doctor: "",
      date: "",
      status: "Pending",
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newAppointment = {
      id: Date.now(),
      ...formData,
    }

    setAppointments([
      ...appointments,
      newAppointment,
    ])

    setFormData({
      patient: "",
      doctor: "",
      date: "",
      status: "Pending",
    })
  }

  const deleteAppointment = (
    id
  ) => {
    setAppointments(
      appointments.filter(
        (appointment) =>
          appointment.id !== id
      )
    )
  }

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-bold text-blue-800">
          Appointments
        </h1>

        <p className="text-gray-500 mt-2">
          Manage appointment records
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Book Appointment
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* PATIENT */}
          <input
            type="text"
            name="patient"
            placeholder="Patient Name"
            value={formData.patient}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* DOCTOR */}
          <input
            type="text"
            name="doctor"
            placeholder="Doctor Name"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* DATE */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* STATUS */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>
          </select>

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 hover:bg-blue-800 transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            Add Appointment
          </button>
        </form>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold text-blue-700">
            Appointment Records
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">
                  Patient
                </th>

                <th className="p-4 text-left">
                  Doctor
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {appointments.length ===
              0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No Appointments Found
                  </td>
                </tr>
              ) : (
                appointments.map(
                  (
                    appointment
                  ) => (
                    <tr
                      key={
                        appointment.id
                      }
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        {
                          appointment.patient
                        }
                      </td>

                      <td className="p-4">
                        {
                          appointment.doctor
                        }
                      </td>

                      <td className="p-4">
                        {
                          appointment.date
                        }
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            appointment.status ===
                            "Completed"
                              ? "bg-green-100 text-green-700"
                              : appointment.status ===
                                "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {
                            appointment.status
                          }
                        </span>
                      </td>

                      <td className="p-4">

                        <button
                          onClick={() =>
                            deleteAppointment(
                              appointment.id
                            )
                          }
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Appointments