import mongoose from "mongoose";

const ExampleScheme = new mongoose.Schema({
  atributo: { type: String, required: false },
});

export default mongoose.model("Example", ExampleScheme);
