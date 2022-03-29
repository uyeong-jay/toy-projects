// toFixed(소수점 n째 자리 까지 반올림)

const ProcessViewCount = (viewCount) => {
  if (viewCount < 1000) {
    return `조회수 ${viewCount}회`; //ex) 조회수 100회
  } else if (viewCount < 10000) {
    return `조회수 ${(viewCount / 1000).toFixed(1)}천회`; //ex) 조회수 1.1천회
  } else if (viewCount < 100000) {
    return `조회수 ${(viewCount / 10000).toFixed(1)}만회`; //ex) 조회수 1.3만회
  } else if (viewCount < 100000000) {
    return `조회수 ${(viewCount / 10000).toFixed(0)}만회`; //ex) 조회수 103만회
  } else {
    return `조회수 ${(viewCount / 100000000).toFixed(0)}억회`; //ex) 조회수 3억회
  }
};

export { ProcessViewCount };
