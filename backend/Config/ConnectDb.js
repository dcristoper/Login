import mongoose from "mongoose";

const connectDb = async () => {
  const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  await mongoose
    .connect(process.env.MONGO_URI, config)
    .then(() => {
      console.log("Connected to database".yellow);
    })
    .catch((err) => {
      console.error(`Failed to connect ${err}`.red);
    });
};

export default connectDb;
