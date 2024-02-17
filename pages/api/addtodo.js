import Todo from "@/models/Todos";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    let p = new Todo({
      todo: req.body.username,
    });
    await p.save();
    res.status(200).json({ message: "Success" });
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
