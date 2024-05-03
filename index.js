import express from "express";
import ProvinciasRouter from "./src/controllers/province-controller.js"
import cors from "cors";
const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
app.use("/api/province",ProvinciasRouter)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    }
)


//Router
//provincias-controller.jd
/*import {router} from "expresss"
const router = Router();

router.put('/:id', async (req,res)=> {
let id = req.params.id;
let entidad = req.body;
const registrosAfectados = await svc.update(id, entidad);
return res.status(StatusCodes.OK).json(registrosAfectados);
})

router.get("/llamada", (req, res));

export default ProvinciasRouter;

router.put


//index
*/

