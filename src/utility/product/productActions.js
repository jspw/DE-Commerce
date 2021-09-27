export function getCategories(products) {
  const categories = [];
  products.forEach(function (product) {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });

  return categories;
}
