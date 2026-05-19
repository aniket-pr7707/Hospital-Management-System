const express = require("express")

const router = express.Router()

const Bill = require("../models/Bill")

// GET ALL BILLS
router.get("/", async (req, res) => {
  try {
    const bills = await Bill.find()

    res.json(bills)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// CREATE BILL
router.post("/", async (req, res) => {
  try {
    const bill = await Bill.create(req.body)

    res.status(201).json(bill)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

// DELETE BILL
router.delete("/:id", async (req, res) => {
  try {
    await Bill.findByIdAndDelete(
      req.params.id
    )

    res.json({
      message: "Bill Deleted",
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router