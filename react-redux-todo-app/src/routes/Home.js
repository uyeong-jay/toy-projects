import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../store';

const Home = ({ dispatchAddToDo }) => {
  return(
    <>
      Home
    </>
  )
}

//state 받아오기
const mapStateToProps = (state) => {
  return { toDos: state };
}

//dispatch 기능 추가
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchAddToDo: () => dispatch(actionCreators.addToDo(ownProps.text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
