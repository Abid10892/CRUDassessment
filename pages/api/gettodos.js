import connectDb from "@/middleware/mongoose";
import Todo from "@/models/Todos";

const handler = async (req, res) => {
  let todo = await Todo.find({});
  res.status(200).json({ todo });
};

export default connectDb(handler);
