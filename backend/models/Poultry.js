const mongoose = require("mongoose");

const poultrySchema = new mongoose.Schema(
  {
    qtyproduced: Number,
    qtysold: Number,
    qtydead: Number,
    breed: String,
  }, 
  {timestamps: true}
);


module.exports = new mongoose.model("Poultry", poultrySchema);