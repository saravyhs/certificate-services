import { ref } from "vue";

function formatKhmerNum(num) {
  const khmerDigits = {
    0: "០",
    1: "១",
    2: "២",
    3: "៣",
    4: "៤",
    5: "៥",
    6: "៦",
    7: "៧",
    8: "៨",
    9: "៩",
    "-": "-",
    "/": "-",
    ".": ".",
  };

  let output = "";

  for (let i = 0; i < num.length; i++) {
    const digit = num[i];
    if (khmerDigits.hasOwnProperty(digit)) {
      output += khmerDigits[digit];
    } else {
      output += digit; // retain the character if it's not a recognized digit or dash
    }
  }

  return output;
}

function formatKhmerMonth(month) {
  switch (month) {
    case 1:
      return "មករា";
    case 2:
      return "កុម្ភៈ";
    case 3:
      return "មីនា";
    case 4:
      return "មេសា";
    case 5:
      return "ឧសភា";
    case 6:
      return "មិថុនា";
    case 7:
      return "កក្កដា";
    case 8:
      return "សីហា";
    case 9:
      return "កញ្ញា";
    case 10:
      return "តុលា";
    case 11:
      return "វិច្ឆិកា";
    case 12:
      return "ធ្នូ";
    default:
      return "";
  }
}

const getDayKhmer = (date) => {
  const day = date.getDate().toString();
  return day; //
};
const getYearKhmer = (date) => {
  return date.getFullYear().toString(); // Accessing the Date object inside ref
};
const getMonthKhmer = (date) => {
  return date.getMonth(); // Accessing the Date object inside ref
};

export {
  formatKhmerNum,
  formatKhmerMonth,
  getDayKhmer,
  getYearKhmer,
  getMonthKhmer,
};
