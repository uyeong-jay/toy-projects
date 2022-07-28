import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//Navigation - Link, router
const Routes = ({ productId = 100, reviewId = 100 }) => {
  const router = useRouter();

  const onClick = () => {
    console.log("redirect");
    router.push("/routes/products2");
    //push, reload, replace, back
  };

  return (
    <>
      <h3>Routes</h3>
      <ul>
        <li>
          {/* 일반 링크 */}
          <Link href="/routes/products1">products1</Link>
        </li>
        <li>
          {/* 백틱 사용 */}
          <Link href={`/routes/products1/${productId}/review/${reviewId}`}>
            products1 review
          </Link>
        </li>
        <li>
          <button onClick={onClick}>products2(redirect)</button>
        </li>
      </ul>
    </>
  );
};

export default Routes;
