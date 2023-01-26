import dotenv from "dotenv";
import express from "express";
import appRoutes from "./api";

const app = express();
dotenv.config();

app.use("/api", appRoutes);

app.get("/", (_req, res) => {
  res.send("Hello World Wasssup!!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
