import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  const { product = [] } = router.query;

  //localhost:3000/routes/products2/hat/color/red
  // console.log(product); //(3) ['hat', 'color', 'red']
  if (product.length === 3) {
    return (
      <div>
        Product: {product[0]} + {product[1]} + {product[2]}
      </div>
    );
  } else if (product.length === 2) {
    return (
      <div>
        Product: {product[0]} + {product[1]}
      </div>
    );
  }

  //localhost:3000/routes/products2 >> index.js 파일이 있는 것과 동일한 효과
  return <div>Products2 Page</div>;
};

export default Product;
