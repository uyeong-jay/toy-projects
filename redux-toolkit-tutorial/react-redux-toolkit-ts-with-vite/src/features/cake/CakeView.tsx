import React, { useState } from "react";
//+ Add types
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice"; //cakeSlice에서 원하는 액션 가져오기

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes); //useSelector: 리덕스 스토어의 현재 상태를 조회하는 hook
  const dispatch = useAppDispatch(); //useDispatch: 리덕스 스토어의 dispatch를 사용할수 있게 하는 hook
  return (
    <>
      <h2>Number of cake: {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order cake</button>
      <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        //value는 항상 문자열로 담기기 때문에 parseInt로 정수로 변환시킴
      />
    </>
  );
};

export default CakeView;
