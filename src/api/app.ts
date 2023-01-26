import { Router } from "express";

const router = Router();

router.use("/", async (_req, res) => {
  try {
    res.send({
      sample: "Sample",
    });
  } catch (err) {
    console.error(err);
  }
});

export default router;
