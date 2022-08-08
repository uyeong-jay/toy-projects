import Product from "../../../../components/SSG/Product/Product";

function Products({ products }) {
  return (
    <>
      <h3>List of products</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}

export default Products;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 30,
  };
}
