
import express from "express";
import { installTables } from "../controllers/installController.js";

const router = express.Router();

router.get("/", installTables);

export default router;
