import React from "react";
import { Link } from "react-router-dom";
import qs from "qs";
import faker from "faker";

const Detail = ({ location, match }) => {
  console.log(location);

  // qurey 사용해보기

  // 1. URLSearchParams 사용
  // let urlSearchParams = new URLSearchParams(location.search.slice(1))
  // const value = urlSearchParams.get('more');
  // const more = value === 'true';
  // console.log(typeof value);//string

  // 2. qs 라이브러리 사용
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const more = query.more === "true";
  const page1 = query.page === "1";
  const page2 = query.page === "2";
  //console.log(typeof query.more); //string

  return (
    <div>
      {more && (
        <div>
          {page1 && <p>{faker.lorem.paragraph()}</p>}
          {page2 && <p>{faker.lorem.paragraph()}</p>}
          <Link to="/details?more=true&page=1">
            <button>Page1</button>
          </Link>
          <Link to="/details?more=true&page=2">
            <button>Page2</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Detail;
