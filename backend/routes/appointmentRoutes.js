const express = require("express")

const router = express.Router()

const Appointment = require("../models/Appointment")

// GET ALL APPOINTMENTS
router.get("/", async (req, res) => {
  try {
    const appointments =
      await Appointment.find()

    res.json(appointments)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// CREATE APPOINTMENT
router.post("/", async (req, res) => {
  try {
    const appointment =
      await Appointment.create(req.body)

    res.status(201).json(appointment)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// DELETE APPOINTMENT
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message:
        "Appointment Deleted Successfully",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// UPDATE APPOINTMENT
router.put("/:id", async (req, res) => {
  try {
    const updatedAppointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )

    res.json(updatedAppointment)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router