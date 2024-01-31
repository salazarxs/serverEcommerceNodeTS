import { Request, Response } from "express";
import ProductModel from "../models/product";

type Product = {
  productName: string;
  categoryID: number;
  productDescription: string;
  price: number;
  productImage?: string;
};

export const CreateProduct = async (req: Request, res: Response) => {
  const product: Product = req.body;
  try {
    const newProduct = await ProductModel.create(product);
    if (newProduct) {
      res.status(200).json({
        message: "Product created successful",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
