import { useState } from "react"

const Patients = () => {
  const [patients, setPatients] =
    useState([])

  const [formData, setFormData] =
    useState({
      name: "",
      age: "",
      gender: "",
      disease: "",
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

    const newPatient = {
      id: Date.now(),
      ...formData,
    }

    setPatients([
      ...patients,
      newPatient,
    ])

    setFormData({
      name: "",
      age: "",
      gender: "",
      disease: "",
    })
  }

  const deletePatient = (id) => {
    setPatients(
      patients.filter(
        (patient) =>
          patient.id !== id
      )
    )
  }

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-800">
          Patients
        </h1>

        <p className="text-gray-500 mt-2">
          Manage patient records
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Add Patient
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* AGE */}
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* GENDER */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>
          </select>

          {/* DISEASE */}
          <input
            type="text"
            name="disease"
            placeholder="Disease"
            value={
              formData.disease
            }
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 hover:bg-blue-800 transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            Add Patient
          </button>
        </form>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-700">
            Patient Records
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
                  Age
                </th>

                <th className="p-4 text-left">
                  Gender
                </th>

                <th className="p-4 text-left">
                  Disease
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>

              {patients.length ===
              0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No Patients Found
                  </td>
                </tr>
              ) : (
                patients.map(
                  (patient) => (
                    <tr
                      key={
                        patient.id
                      }
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        {
                          patient.name
                        }
                      </td>

                      <td className="p-4">
                        {
                          patient.age
                        }
                      </td>

                      <td className="p-4">
                        {
                          patient.gender
                        }
                      </td>

                      <td className="p-4">
                        {
                          patient.disease
                        }
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() =>
                            deletePatient(
                              patient.id
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

export default Patients