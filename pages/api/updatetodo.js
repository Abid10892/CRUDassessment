import Todo from "@/models/Todos";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "PUT") {
    let p = await Todo.findByIdAndUpdate(req.body.id, {
      todo: req.body.username,
    });
    res.status(200).json({ message: "Success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
