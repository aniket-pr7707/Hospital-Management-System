import { useState } from "react"

const Pharmacy = () => {
  const [medicines, setMedicines] =
    useState([])

  const [formData, setFormData] =
    useState({
      medicine: "",
      quantity: "",
      price: "",
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

    const newMedicine = {
      id: Date.now(),
      ...formData,
    }

    setMedicines([
      ...medicines,
      newMedicine,
    ])

    setFormData({
      medicine: "",
      quantity: "",
      price: "",
    })
  }

  const deleteMedicine = (
    id
  ) => {
    setMedicines(
      medicines.filter(
        (medicine) =>
          medicine.id !== id
      )
    )
  }

  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-800">
          Pharmacy
        </h1>

        <p className="text-gray-500 mt-2">
          Manage medicines and stock
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          Add Medicine
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          <input
            type="text"
            name="medicine"
            placeholder="Medicine Name"
            value={
              formData.medicine
            }
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={
              formData.quantity
            }
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-2xl p-4"
          />

          <button
            type="submit"
            className="md:col-span-3 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-2xl font-bold"
          >
            Add Medicine
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold text-blue-700">
            Medicine Records
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4 text-left">
                Medicine
              </th>

              <th className="p-4 text-left">
                Quantity
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {medicines.length ===
            0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-10 text-gray-500"
                >
                  No Medicines Found
                </td>
              </tr>
            ) : (
              medicines.map(
                (medicine) => (
                  <tr
                    key={
                      medicine.id
                    }
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">
                      {
                        medicine.medicine
                      }
                    </td>

                    <td className="p-4">
                      {
                        medicine.quantity
                      }
                    </td>

                    <td className="p-4">
                      ₹
                      {
                        medicine.price
                      }
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          deleteMedicine(
                            medicine.id
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
  )
}

export default Pharmacy