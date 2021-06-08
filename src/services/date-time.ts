import Moment from 'moment';

export function formatDateTimeString(dateTimeString: string, format: string) {
  const momentObject = Moment(dateTimeString);
  return momentObject.format(format);
}

export function secondsToMinutesFormat(seconds: number) {
  const minutesPartNumber = Moment.duration(seconds, 'seconds').minutes();
  const minutesPartString = minutesPartNumber < 10 ? `0${minutesPartNumber}` : `${minutesPartNumber}`;

  const secondsPartNumber = Moment.duration(seconds, 'seconds').seconds();
  const secondsPartString = secondsPartNumber < 10 ? `0${secondsPartNumber}` : `${secondsPartNumber}`;

  const formatted = minutesPartString + ':' + secondsPartString;
  return formatted;
}
