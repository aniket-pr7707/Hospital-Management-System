import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "patient",
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    })
  }

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault()

    try {
      await axios.post(
        "https://hospital-management-system-backend-n05b.onrender.com/api/auth/register",
        formData
      )

      alert(
        "User Registered Successfully"
      )

      navigate("/login")
    } catch (error) {
      console.log(error)

      alert("Registration Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-900 p-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-extrabold text-blue-700">
            HMS
          </h1>

          <p className="text-gray-500 mt-3">
            Hospital Management
            System
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Register
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={
              formData.password
            }
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* ROLE */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="admin">
              Admin
            </option>

            <option value="doctor">
              Doctor
            </option>

            <option value="receptionist">
              Receptionist
            </option>

            <option value="patient">
              Patient
            </option>

            <option value="pharmacist">
              Pharmacist
            </option>
          </select>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">

          Already have an account?

          <span
            onClick={() =>
              navigate("/login")
            }
            className="text-blue-700 font-semibold cursor-pointer ml-2"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Register