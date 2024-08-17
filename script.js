//  make a timer



// add st,nd,rd & th to date
const th = (date) => {
    if (date == 1) {
      date = date + "st"
      return date
    } else if (date == 2) {
      date = date + "nd";
      return date;
    } else if (date == 3) {
      date = date + "rd"
      return date;
    } else {
      date = date + "th"
      return date;
    }
  }
  
  // turn integer values of getDay() to numbers

  const months = (month) => {
  
    switch (month) {
      case 0:
        message = "January";
        break;
      case 1:
        message = "February";
        break;
      case 2:
        message = "March";
        break;
      case 3:
        message = "April";
        break;
      case 4:
        message = "May";
        break;
      case 5:
        message = "June";
        break;
      case 6:
        message = "July";
        break;
      case 7:
        message = "August";
        break;
      case 8:
        message = "September";
        break;
      case 9:
        message = "October";
        break;
      case 10:
        message = "November";
        break;
      case 11:
        message = "December";
        break;
      default:
        message = "Unknown month.";
    }
    return message;
  }
  

  // update hours with 0 as prefix if its less than 10
  const updatedHour = (hour) => {
    if (hour < 10) {
      document.getElementById("hour").innerHTML = "0" + hour;
    } else {
      document.getElementById("hour").innerHTML = hour;
    }
  
  }
  // update mins with 0 as prefix if its less than 10
  const updatedMinutes = (minute) => {
    if (minute < 10) {
      document.getElementById("min").innerHTML = "0" + minute;
    } else {
      document.getElementById("min").innerHTML = minute;
    }
  }
  // update seconds with 0 as prefix if its less than 10
  const updatedSeconds = (seconds) => {
    if (seconds < 10) {
      document.getElementById("sec").innerHTML = "0" + seconds;
    } else {
      document.getElementById("sec").innerHTML = seconds;
    }
  }
  
// create an instance of the Date class


  const time = () => {
    let d = new Date();
    //day
    let date = d.getDate();
  
    let month = d.getMonth();
    let year = d.getFullYear();
    let updatedDate = th(date);
    months(month);
  
    document.getElementById("day").innerHTML = `${updatedDate} ${message} ${year}`
    let hour = d.getHours();
    let minute = d.getMinutes();
    let seconds = d.getSeconds();
  
    updatedHour(hour);
    updatedMinutes(minute)
    updatedSeconds(seconds);
  
  }
  
  setInterval(time, 500)
  