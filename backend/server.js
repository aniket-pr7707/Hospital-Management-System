const express = require("express")
const cors = require("cors")
require("dotenv").config()

const connectDB = require("./config/db")
const patientRoutes = require("./routes/patientRoutes")
const authRoutes = require("./routes/authRoutes")
const appointmentRoutes = require("./routes/appointmentRoutes")
const doctorRoutes = require("./routes/doctorRoutes")
const billRoutes = require("./routes/billRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/patients", patientRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/appointments", appointmentRoutes)
app.use("/api/doctors", doctorRoutes)
app.use("/api/bills", billRoutes)
app.get("/", (req, res) => {
  res.send("Hospital Management Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})