const express = require("express")

const router = express.Router()

const Doctor = require("../models/Doctor")

// GET ALL DOCTORS
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find()

    res.json(doctors)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// CREATE DOCTOR
router.post("/", async (req, res) => {
  try {
    const doctor = await Doctor.create(
      req.body
    )

    res.status(201).json(doctor)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// DELETE DOCTOR
router.delete("/:id", async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message: "Doctor Deleted",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// UPDATE DOCTOR
router.put("/:id", async (req, res) => {
  try {
    const updatedDoctor =
      await Doctor.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )

    res.json(updatedDoctor)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router