import { Request, Response } from "express";
import ProductModel from "../models/product";
import { Product } from "../types/product";

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
      message: `Internal server error-> ${err}`,
    });
  }
};

export const FindProductsByQuantity = async (req: Request, res: Response) => {
  const { quantity } = req.body;

  try {
    const products = await ProductModel.findAll({
      limit: quantity,
    });
    if (products) {
      res.status(200).json({ products });
    }
  } catch (err) {
    res.status(500).json({
      message: `Internal server error-> ${err}`,
    });
  }
};
