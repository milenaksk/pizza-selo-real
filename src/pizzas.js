//associa as pizzas a um ID para que seja acessível via CartContext.

const productsArray = [
  {
    id: 1,
    name: "Grande 40 cm",
    details: "10 pedaços",
    price: 30.00
  },
  {
    id: 2,
    name: "Médio 30 cm",
    details: "6 pedaços",
    price: 20.00
  },
  {
    id: 3,
    name: "Brotinho 20 cm",
    details: "4 pedaços",
    price: 10.00
  }
];

const getProductData = (id) => {
  return productsArray.find(product => product.id === id);
};

export { productsArray, getProductData };
