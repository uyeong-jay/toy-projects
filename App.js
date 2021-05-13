import React from 'react';

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getLocation = async () => {
    try {
      
    } catch (error) {

    }
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const {isLoading} = this.state;
    return(
      isLoading ? <Loading /> : <Weather />
    );
  }
}