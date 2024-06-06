import express from "express";
import cors from "cors";
import provinceRouter from "./src/controllers/province-controller.js";

const app = express();
const port = 3000;

// Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.

// Routers
app.use("/api/province", provinceRouter);

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



