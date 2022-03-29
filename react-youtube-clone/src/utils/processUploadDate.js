import moment from "moment";
import "moment/locale/ko";

const ProcessUploadDate = (uploadDate) => {
  const date = moment(uploadDate);
  const standard = moment(" 2021-09-16T13:15:02");

  return date.from(standard);
};

export { ProcessUploadDate };
