import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const ToDo = () => {


  return(
    <>
      ToDo
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(null, mapDispatchToProps) (ToDo);