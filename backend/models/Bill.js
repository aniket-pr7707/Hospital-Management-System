const mongoose = require("mongoose")

const billSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },

    doctorName: {
      type: String,
      required: true,
    },

    consultationFee: {
      type: Number,
      required: true,
    },

    medicineCharge: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model(
  "Bill",
  billSchema
)