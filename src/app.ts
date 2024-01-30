import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import router from "./routes/user.js";
import dotenv from "dotenv";

dotenv.config();

const myapp = express();

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

myapp.use(express.static("public"));

/* myapp.use((req: Request, res: Response, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
}); */
myapp.use(express.json());
myapp.use(fileUpload());
// Configuración de codificación en el backend (Node.js / Express)
myapp.use(express.json());

// routes
myapp.use("/api/v1", router);

export default myapp;
