import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const ToDo = ({ dispatchDeleteToDo }) => {


  return(
    <>
      ToDo
    </>
  );
}

//disptach 기능 추가
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchDeleteToDo: () => {
      dispatch(actionCreators.deleteToDo(ownProps.id))
    }
  }
}

//connect로 store.js에 접근
export default connect(null, mapDispatchToProps) (ToDo);