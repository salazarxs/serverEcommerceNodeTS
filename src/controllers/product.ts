const controller = {};
import { Request, Response } from "express";
type Product = {
  productName: string;
  categoryID: number;
  productDescription: string;
  price: number;
  productImage?: string;
};

const CreateProduct = async (req: Request, res: Response) => {
  const product: Product = req.body;
  try {
    await ProductModel.create(product);
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports = { CreateProduct };
