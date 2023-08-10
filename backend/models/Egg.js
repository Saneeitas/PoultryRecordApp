const mongoose = require("mongoose");

const eggSchema = new mongoose.Schema(
  {
  qty_produced: Number,
  qty_sold: Number,
  qty_spoiled: Number,
  }, 
  {timestamps: true}
);


module.exports = new mongoose.model("Egg", eggSchema);