function extractClassName(sessionTitle) {
  // Add you solution here
  let result = "";

  const month = [
    {
      name: "Januar",
      id: "1",
    },
    {
      name: "Februar",
      id: "2",
    },
    {
      name: "March",
      id: "3",
    },
    {
      name: "März",
      id: "3",
    },
    {
      name: "Maerz",
      id: "3",
    },
    {
      name: "April",
      id: "4",
    },
    {
      name: "Mai",
      id: "5",
    },
    {
      name: "May",
      id: "5",
    },
    {
      name: "June",
      id: "6",
    },
    {
      name: "Juni",
      id: "6",
    },
    {
      name: "July",
      id: "7",
    },
    {
      name: "Juli",
      id: "7",
    },
    {
      name: "August",
      id: "8",
    },
    {
      name: "September",
      id: "9",
    },
    {
      name: "October",
      id: "10",
    },
    {
      name: "Oktober",
      id: "10",
    },
    {
      name: "November",
      id: "11",
    },
    {
      name: "December",
      id: "12",
    },
    {
      name: "Dezember",
      id: "12",
    },
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
    let monthFound = month.find((e) => e.name === date[1]);
    if (monthFound) {
      let monthNumber = monthFound.id;
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
