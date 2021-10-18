import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ toDo }) => {
  return(
    <>
      {toDo?.text}
    </>
  )
}

//state 가져오기
const mapStateToProps = (state, ownProps) => {

  //match에서 주소 옵션 가져오기
  const { id } = ownProps.match.params;

  return {
    toDo: state.find((toDo) => toDo.id === parseInt(id)),
  };
}

export default connect(mapStateToProps)(Detail);