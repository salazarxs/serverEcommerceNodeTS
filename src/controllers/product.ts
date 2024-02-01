import { Request, Response } from "express";
import ProductModel from "../models/product";
import { Product } from "../types/product";
import { ValidateJWT } from "../helpers/JWT";

export const CreateProduct = async (req: Request, res: Response) => {
  const JWT = req.get("JWT");

  let validateJWT;
  if (JWT) {
    validateJWT = await ValidateJWT(JWT.toString());

    if (!validateJWT) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  }

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
  const JWT = req.get("JWT");

  let validateJWT;
  if (JWT) {
    validateJWT = await ValidateJWT(JWT.toString());

    if (!validateJWT) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    try {
      const quantity = req.query.quantity as string | undefined;
      const products = await ProductModel.findAll({
        limit: parseInt(quantity || "10", 10),
      });
      if (products) {
        return res.status(200).json({ products });
      }
    } catch (err) {
      return res.status(500).json({
        message: `Internal server error-> ${err}`,
      });
    }
  }
  return res.status(401).json({
    message: `Unauthorized`,
  });
};
