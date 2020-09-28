const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  reviews: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      product_name: {
        type: String,
        requires: true,
      },
      product_image_url: {
        type: String,
        required: true,
      },
      review: {
        type: String,
      },
      rating: {
        type: Number,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = User = mongoose.model("user", UserSchema);
