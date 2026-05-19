import { useState } from "react"

const Doctors = () => {
  const [doctors, setDoctors] =
    useState([])

  const [formData, setFormData] =
    useState({
      name: "",
      specialization: "",
      experience: "",
      fees: "",
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

    const newDoctor = {
      id: Date.now(),
      ...formData,
    }

    setDoctors([
      ...doctors,
      newDoctor,
    ])

    setFormData({
      name: "",
      specialization: "",
      experience: "",
      fees: "",
    })
  }

  const deleteDoctor = (id) => {
    setDoctors(
      doctors.filter(
        (doctor) =>
          doctor.id !== id
      )
    )
  }

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-800">
          Doctors
        </h1>

        <p className="text-gray-500 mt-2">
          Manage doctor records
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Add Doctor
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* SPECIALIZATION */}
          <input
            type="text"
            name="specialization"
            placeholder="Specialization"
            value={
              formData.specialization
            }
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* EXPERIENCE */}
          <input
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={
              formData.experience
            }
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* FEES */}
          <input
            type="number"
            name="fees"
            placeholder="Consultation Fees"
            value={formData.fees}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 hover:bg-blue-800 transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            Add Doctor
          </button>
        </form>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-700">
            Doctor Records
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Specialization
                </th>

                <th className="p-4 text-left">
                  Experience
                </th>

                <th className="p-4 text-left">
                  Fees
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {doctors.length ===
              0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No Doctors Found
                  </td>
                </tr>
              ) : (
                doctors.map(
                  (doctor) => (
                    <tr
                      key={
                        doctor.id
                      }
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        {
                          doctor.name
                        }
                      </td>

                      <td className="p-4">
                        {
                          doctor.specialization
                        }
                      </td>

                      <td className="p-4">
                        {
                          doctor.experience
                        }{" "}
                        Years
                      </td>

                      <td className="p-4">
                        ₹
                        {
                          doctor.fees
                        }
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() =>
                            deleteDoctor(
                              doctor.id
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

export default Doctors