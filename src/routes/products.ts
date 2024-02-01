import { Router } from "express";
import { FindProductsByQuantity } from "../controllers/product";

const router = Router();

router.route("/product/:quantity").get(FindProductsByQuantity);

export default router;
