import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        {product.id} {product.title} {product.price}
      </h3>
      <p>{product.description}</p>
      <hr />
    </div>
  );
}

export default Product;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }], //빌드시 이 하나만 미리 렌더링 되도록 해당 경로 HTML을 만들어 놓음
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating product: ${params.productId}`);
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
    revalidate: 10, //revalidate(재확인), 10s(데이터 변경 해주고 revalidate에 설정 해준 시간이 지난 뒤 2번 새로고침해야 화면에 반영됨)
    //(왜냐하면 revalidate 시간이 지난 후에는 브라우저가 요청시 일단 이전에 전달한 cached된 html을 그대로 전달 후 next app에서는 변경된 데이터로 페이지 재생성(Regeneration)을 하기 때문에 재설정이 끝나면 한번더 요청을 해줘야 해서 총 2번)
  };
}
