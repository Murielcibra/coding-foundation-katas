function extractClassName(sessionTitle) {
  // Add you solution here
  let result = "";

  const month = [
    "January",
    "Januar",
    "February",
    "Februar",
    "March",
    "März",
    "Maerz",
    "April",
    "May",
    "Mai",
    "June",
    "Juni",
    "July",
    "Juli",
    "August",
    "September",
    "October",
    "Oktober",
    "November",
    "December",
    "Dezember",
  ];

  if (!sessionTitle.includes("Class")) {
    return null;
  } else {
    let date = sessionTitle.substring(19).split(" ");
    if (isNumber(date[0]) && date[0].length === 4) {
      result = date[0];
    } else {
      return null;
    }
    if (month.includes(date[1])) {
      let monthNumber = getMonthFromString(date[1]);
      if (monthNumber <= "9") {
        result = date[0] + "-" + "0" + monthNumber;
      }
    } else {
      return null;
    }
  }
  return result;
}
function isNumber(value) {
  const conv = +value;
  if (conv) {
    return true;
  } else {
    return false;
  }
}
function getMonthFromString(mon) {
  return new Date(Date.parse(mon + " 1, 2012")).getMonth() + 1;
}
