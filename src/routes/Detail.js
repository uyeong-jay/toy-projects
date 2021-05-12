import React from 'react';

class Detail extends React.Component {

  componentDidMount() {
    const {location, history} = this.props;
    if(location.state === undefined) {
      history.push("/home");
    }
  }

  render() {
    const {location : {state}} = this.props;
    if(state) {
      return (
        <div>
          <div>{state.title}</div>
          <div>{state.year}</div>
          <div>{state.genres}</div>
          <img src={state.poster} title={state.title} alt={state.title} />
          <p>{state.summary}</p>
        </div>
      );
    } else {
      return (
        null
      );
    };
  }
}

export default Detail;