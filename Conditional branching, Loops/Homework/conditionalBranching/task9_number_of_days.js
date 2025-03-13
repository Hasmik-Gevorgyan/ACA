function getDaysInMonth(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return "31 days";
        case 4:
        case 6:
        case 9:
        case 11:
          return "30 days";
        case 2:
          return "28/29 days";
        default:
            return "Invalid input! Please enter month number between 1-12.";
    }

}
console.log(getDaysInMonth(2))
console.log(getDaysInMonth(5))
console.log(getDaysInMonth(15))