import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  const { product = [] } = router.query;

  //localhost:3000/routes/products2/hat/color/red
  // console.log(product); //(3) ['hat', 'color', 'red']
  if (product.length === 3) {
    return (
      <>
        <h3>Products2</h3>
        <ul>
          <li>
            Product2: {product[0]} + {product[1]} + {product[2]}
          </li>
        </ul>
      </>
    );
  } else if (product.length === 2) {
    return (
      <>
        <h3>Products2</h3>
        <ul>
          <li>
            Product2: {product[0]} + {product[1]}
          </li>
        </ul>
      </>
    );
  }

  //localhost:3000/routes/products2 >> index.js 파일이 있는 것과 동일한 효과
  return (
    <>
      <h3>Products2 Page</h3>
      <ul>
        <li>nothing</li>
      </ul>
    </>
  );
};

export default Product;
