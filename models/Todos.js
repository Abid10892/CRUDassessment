import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    todo: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model("Todo", TodoSchema);
