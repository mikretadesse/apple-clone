
  
import express from "express";
import { getIphones, getSingleIphone } from "../controllers/iphoneController.js";

const router = express.Router();

router.get("/", getIphones);
router.get("/:pid", getSingleIphone);

export default router;
