import Product from "./Product/Product";

export default function Products({ products }) {
  return (
    <div className="space-y-4 mt-4">
      <p className="text-2xl font-semibold font-serif"> Products </p>
      <hr />
      <div className="grid grid-flow-row xs:grid-cols-1 sm : grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
