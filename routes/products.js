import express from "express";
import ProductController from "../controller/products.js";

const router = express.Router();

router.get("/", (req, res) => res.send("hello"));
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getById);
router.post("/create", ProductController.create);
router.put("/update/:id", ProductController.update);
router.delete("/delete/:id", ProductController.delete);

export default router;
