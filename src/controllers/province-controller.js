import express from 'express';
import ProvinceService from '../services/province-service.js';

const router = express.Router();

router.get("/", async (req, res) => {
  const provinces = await ProvinceService.getAllProvinces();
  res.status(200).send(provinces);
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const province = await ProvinceService.getProvinceById(id);
  if (province) {
    res.status(200).send(province);
  } else {
    res.status(404).send("Provincia no encontrada");
  }
});

router.post("/", async (req, res) => {
  const newProvince = req.body;
  try {
    const result = await ProvinceService.addProvince(newProvince);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/", async (req, res) => {
  const updatedProvince = req.body;
  try {
    const result = await ProvinceService.updateProvince(updatedProvince);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await ProvinceService.deleteProvince(id);
    res.status(200).send("Provincia eliminada correctamente.");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;


