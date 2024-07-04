import { Router } from "express";
import { auth } from "./middleware";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/example", auth, (req, res) => {
  res.json({ message: "This is a example route" });
});

export default router;
