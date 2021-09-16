import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import actionCreators from '../store';

const Home = ({ toDos, dispatchAddToDo }) => {

  const [text, setText] = useState('');
  const onInputRef = useRef(null);

  const onSubmitText = (e) => {
    e.preventDefault();
    dispatchAddToDo(text);
    onInputRef.current.focus();
  }

  const onChangeText = (e) => {
    setText(e.currentTarget.value);
  }

  return(
    <>
      <h3>To Do</h3>
      <form onSubmit={onSubmitText}>
        <input type="text" name="todo" value={text} onChange={onChangeText} ref={onInputRef} />
        <button type="submit" >입력</button>
      </form>
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
