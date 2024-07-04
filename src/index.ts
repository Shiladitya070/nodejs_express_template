import express from "express";
import { PORT } from "./config";
import router from "./router";

const app = express();
const port = PORT;

app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
