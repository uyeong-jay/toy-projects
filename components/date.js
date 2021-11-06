import { format, parseISO } from 'date-fns';

export default function Date({ dateString }) {
  //parseISO 는 format에 넣어주기
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'yyyy. M. d')}
    </time>
  );
};