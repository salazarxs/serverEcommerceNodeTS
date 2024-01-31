/* const express = require("express");
const { Application } = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv"); */

import Express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import UserRoutes from "./routes/user";

dotenv.config();

const myapp: Application = Express();

myapp.set("port", process.env.PORT || 3005);

// middlewares

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173", // Otras direcciones permitidas si las tienes
  "http://192.168.1.91", // Agrega aquí la dirección IP del NodeMCU
  "*",
  "https://mygrowapp.netlify.app",
  "192.168.1.91:19000",
];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

myapp.use(cors(corsOptions));

myapp.use(Express.static("public"));

/* myapp.use((req: Request, res: Response, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}); */
myapp.use(Express.json());
myapp.use(fileUpload());
// Configuración de codificación en el backend (Node.js / Express)
myapp.use(Express.json());

// routes
myapp.use("/api/v1", UserRoutes);

export default myapp;
