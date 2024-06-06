import provincias from '../entities/province.js';

const getAllProvinces = async () => {
  return provincias;
};

const getProvinceById = async (id) => {
  return provincias.find(provincia => provincia.id === id);
};

const addProvince = async (newProvince) => {
  provincias.push(newProvince);
  return newProvince;
};

const updateProvince = async (updatedProvince) => {
  const index = provincias.findIndex(provincia => provincia.id === updatedProvince.id);
  if (index !== -1) {
    provincias[index] = updatedProvince;
    return updatedProvince;
  } else {
    throw new Error("Provincia no encontrada");
  }
};

const deleteProvince = async (id) => {
  const index = provincias.findIndex(provincia => provincia.id === id);
  if (index !== -1) {
    const deletedProvince = provincias.splice(index, 1)[0];
    return deletedProvince;
  } else {
    throw new Error("Provincia no encontrada");
  }
};

export default { getAllProvinces, getProvinceById, addProvince, updateProvince, deleteProvince };


