const express = require("express")
const router = express.Router()

const Patient = require("../models/Patient")

// CREATE PATIENT
router.post("/", async (req, res) => {
  try {
    const patient = await Patient.create(req.body)

    res.status(201).json(patient)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// GET ALL PATIENTS
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find()

    res.json(patients)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// DELETE PATIENT
router.delete("/:id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id)

    res.json({
      message: "Patient deleted successfully",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// UPDATE PATIENT
router.put("/:id", async (req, res) => {
  try {
    const updatedPatient =
      await Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )

    res.json(updatedPatient)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// PATIENT COUNT
router.get("/count/all", async (req, res) => {
  try {
    const count = await Patient.countDocuments()

    res.json({
      count,
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router