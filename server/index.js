import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDb from "./mongoose/connectDb.js";
import postsRoutes from "./routes/postsRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postsRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("welcome to server home page");
});

const startServer = () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(port, () => {
      console.log(`server is runnging on port : ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
