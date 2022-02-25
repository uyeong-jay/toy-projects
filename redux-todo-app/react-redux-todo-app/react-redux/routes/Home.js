import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, dispatchAddToDo }) => {

  const [text, setText] = useState('');
  const onRefInput = useRef(null);

  const onSubmitText = (e) => {
    e.preventDefault();
    dispatchAddToDo(text);
    onRefInput.current.focus();
    setText('');
  }

  const onChangeText = (e) => {
    setText(e.currentTarget.value);
  }

  return(
    <>
      <h3>To Do</h3>

      <form onSubmit={onSubmitText}>
        <input type="text" name="todo" value={text} onChange={onChangeText} ref={onRefInput} />
        <button type="submit" >입력</button>
      </form>
      
      <ul>{toDos.map((v,i) => (<ToDo key={v.id} toDoText={v.text} toDoId={v.id} />))}</ul>
    </>
  )
}

//state 받아오기
const mapStateToProps = (state) => {
  return { toDos: state };
}

//dispatch 기능 추가
//첫 사용자의 text를 보낸땐 ownProps를 쓰지 않음
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddToDo: (text) => dispatch(actionCreators.addToDo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
