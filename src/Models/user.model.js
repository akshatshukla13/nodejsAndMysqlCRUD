import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    rating: {
      type: Number,
      required: true,
      min: [0, "rating must be at least 0"],
      max: [10, "rating cannot exceed 10"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
