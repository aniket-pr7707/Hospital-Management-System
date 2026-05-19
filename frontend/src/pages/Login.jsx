import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
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
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      )

      localStorage.setItem(
        "token",
        res.data.token
      )

      localStorage.setItem(
        "role",
        res.data.user.role
      )

      localStorage.setItem(
        "name",
        res.data.user.name
      )

      navigate("/")

      window.location.reload()
    } catch (error) {
      alert("Login Failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-indigo-800 to-blue-900 px-4">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-10">

        {/* LOGO */}
        <div className="text-center mb-10">

          <h1 className="text-6xl font-extrabold text-blue-700">
            HMS
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Hospital Management System
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Password
            </label>

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
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition duration-300 text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login