export const formatNumber = (value) => {
  let COPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });

  return COPeso.format(value);
};
