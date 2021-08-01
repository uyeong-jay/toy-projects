import React, { Component } from 'react';

class WordRelayClass extends Component {
  state = {
    word: '',
    newWord: '',
    result: '',
    score: 0,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { word, newWord } = this.state;
    if(!newWord) {
      this.setState((prevState) => {
        return {
          newWord: prevState.word,
          word: '',
        };
      }) ;
      this.$input.focus();
    } else if( newWord && newWord[newWord.length-1] === word[0]) {
      this.setState((prevState) => {
        return {
          newWord: prevState.word,
          result: '정답입니다!',
          score: prevState.score + 1,
          word: '',
        };
      });
      this.$input.focus();
    } else {
      this.setState({
        result: '올바르지 않은 단어 입니다!',
      });
    }
  }

  onChangeValue = (e) => {
    this.setState({
      word: e.currentTarget.value,
    });
  }

  $input;
  onRefInput = (c) => {
    this.$input = c;
  }

  render() {
    const { word, newWord, result, score } = this.state;

    return(
      <>
        <form onSubmit={this.onSubmit}>
          <div>제시어 : {newWord}</div>
          <input ref={this.onRefInput} type='text' value={word} onChange={this.onChangeValue} />
          <button type="submit">입력</button>
        </form>
        <div>결과: {result}</div>
        <div>점수: {score}</div>
      </>
    );
  }
}

export default WordRelayClass;