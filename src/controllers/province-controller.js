import { Router } from "express";
import provincias from "../entities/province.js"

const router = new Router();

router.get("", (req, res) => { 
    res.status(200).send(provincias);
})


router.get("", (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < provincias.length) {
        const provincia = provincias[id];
        res.status(200).send({ id, provincia });
    } else {
        res.status(404).send("Provincia no encontrada");
    }
});

router.post("", (req, res) => {
    const { name, full_name, latitude, longitude, display_order } = req.body;

    if (!name || name.length < 3) {
        return res.status(400).send("El nombre de la provincia debe tener al menos 3 letras.");
    }
    const nuevaProvincia = {
        name,
        full_name,
        latitude,
        longitude,
        display_order
    };
    res.status(201).send(nuevaProvincia);
});


router.put("", (req, res) => {
    const { id, name, full_name, latitude, longitude, display_order } = req.body;
    const existingProvince = provincias.find(provincia => provincia.id === id);
    if (existingProvince) {
        return res.status(404).send("Ya existe una provincia con ese ID.");
        console.log("entro a esto")
    }
    if (!name || name.length < 3) {
        return res.status(400).send("El nombre de la provincia es requerido y debe tener al menos 3 caracteres.");
    }
    const nuevaProvincia = { id, name, full_name, latitude, longitude, display_order };

    provincias.push(nuevaProvincia);

    res.status(201).send(nuevaProvincia);
});

router.delete(":id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = provincias.findIndex(provincia => provincia.id === id);
    if (index !== -1) {
        provincias.splice(index, 1);
        res.status(200).send("Provincia eliminada correctamente.");
    } else {
        res.status(404).send("Provincia no encontrada.");
    }
});

export default router;