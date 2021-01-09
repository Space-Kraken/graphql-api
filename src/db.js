import mongoose from "mongoose";

// ! test
const mongoDB = "mongodb://localhost/ifta-db";

//? DB const
// const mongoDB = "mongo conect String"
const atlas = "atlas clouster string";

//* mongoose conection
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Conection to database Succesfull"))
  .catch((err) => console.log(err));
