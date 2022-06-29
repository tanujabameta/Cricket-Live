const moment = require("moment");

function getFlagEmoji(countryCode) {
  if (countryCode === "EN") countryCode = "GB";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

function changeDateFormat(inputDate) {
  let date = new Date(inputDate);
  return moment(date).format("DD MMMM hh:mm A");
}

export { getFlagEmoji, changeDateFormat };
