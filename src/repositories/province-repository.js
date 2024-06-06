import provincias from '../entities/province.js';

const getAllProvinces = async () => {
  return provincias;
};

const getProvinceById = async (id) => {
  return provincias.find(provincia => provincia.id === id);
};

export { getAllProvinces, getProvinceById };

