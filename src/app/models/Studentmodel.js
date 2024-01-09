import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    birthday: {
      type: String,
      require: true,
    },
    mssv: {
      type: String,
      require: true,
      unique: true,
    },
    class: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model("Student", StudentSchema);
