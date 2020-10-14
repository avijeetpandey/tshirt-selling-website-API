const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let productSchema = new mongoose.Schema(
  {
    name: {
      type: Strinq,
      required: true,
      trim: true,
      maxlength: 32,
    },
    description: {
      type: Strinq,
      required: true,
      trim: true,
      maxlength: 1000,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    stock: {
      type: String,
    },
    sold: {
      type: Number,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
