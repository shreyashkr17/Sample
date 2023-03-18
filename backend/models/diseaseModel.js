const mongoose = require("mongoose");

// const remedySchema = new mongoose.Schema({
//   material: {
//     type: String,
//     required: true,
//   },
//   directions_for_use: {
//     type: String,
//     required: true,
//   },
//   Precautions: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   alternative_medicine: {
//     type: String,
//     required: true,
//   },
// });

const diseaseSchema = new mongoose.Schema({
  Disease_Name: {
    type: String,
    required: true,
  },
  Ayurvedic_medicinal_Remedy: [
    {
      material: {
        type: String,
        required: true,
      },
      directions_for_use: {
        type: String,
        required: true,
      },
      Precautions: [
        {
          type: String,
          required: true,
        },
      ],
      alternative_medicine: {
        type: String,
        required: true,
      },
    }
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    }
  ]
});

module.exports = mongoose.model("Disease", diseaseSchema);
