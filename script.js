// defining var and interval for auto updating date and time
var currentDay = document.getElementById('currentDay');
setInterval(() => {
    var now = moment();
    var humanReadable = now.format('MMMM Do, YYYY h:mm a');
    currentDay.textContent = humanReadable;
}, 1000);

//bg color change for past present and future
//defining var
var currentHour = moment().format('HH');

//function
function pastPresentFuture() {
    if (currentHour > 8) {
        $('#8am-text').toggleClass('past');
    } else if (currentHour == 8) {
        $('#8am-text').addClass('present');
    } else if (currentHour < 8) {
        $('#8am-text').addClass('future');
    }

    if (currentHour > 9) {
        $('#9am-text').toggleClass('past');
    } else if (currentHour == 9) {
        $('#9am-text').addClass('present');
    } else if (currentHour < 9) {
        $('#9am-text').addClass('future');
    }

    if (currentHour > 10) {
        $('#10am-text').toggleClass('past');
    } else if (currentHour == 10) {
        $('#10am-text').addClass('present');
    } else if (currentHour < 10) {
        $('#10am-text').addClass('future');
    }

    if (currentHour > 11) {
        $('#11am-text').toggleClass('past');
    } else if (currentHour == 11) {
        $('#11am-text').addClass('present');
    } else if (currentHour < 11) {
        $('#11am-text').addClass('future');
    }

    if (currentHour > 12) {
        $('#12pm-text').toggleClass('past');
    } else if (currentHour == 12) {
        $('#12pm-text').addClass('present');
    } else if (currentHour < 12) {
        $('#12pm-text').addClass('future');
    }

    if (currentHour > 13) {
        $('#1pm-text').toggleClass('past');
    } else if (currentHour == 13) {
        $('#1pm-text').addClass('present');
    } else if (currentHour < 13) {
        $('#1pm-text').addClass('future');
    }

    if (currentHour > 14) {
        $('#2pm-text').toggleClass('past');
    } else if (currentHour == 14) {
        $('#2pm-text').addClass('present');
    } else if (currentHour < 14) {
        $('#2pm-text').addClass('future');
    }

    if (currentHour > 15) {
        $('#3pm-text').toggleClass('past');
    } else if (currentHour == 15) {
        $('#3pm-text').addClass('present');
    } else if (currentHour < 15) {
        $('#3pm-text').addClass('future');
    }

    if (currentHour > 16) {
        $('#4pm-text').toggleClass('past');
    } else if (currentHour == 16) {
        $('#4pm-text').addClass('present');
    } else if (currentHour < 16) {
        $('#4pm-text').addClass('future');
    }

    if (currentHour > 17) {
        $('#5pm-text').toggleClass('past');
    } else if (currentHour == 17) {
        $('#5pm-text').addClass('present');
    } else if (currentHour < 17) {
        $('#5pm-text').addClass('future');
    }
}
pastPresentFuture();

//clearing storage while work hours are inactive
if (currentHour === 24) {
    localStorage.clear();
}

//console logging to make sure things work
// console.log(currentHour);

//defining js dom var globally
var tb8 = $('#8am-text')
var tb9 = $('#9am-text')
var tb10 = $('#10am-text')
var tb11 = $('#11am-text')
var tb12 = $('#12pm-text')
var tb13 = $('#1pm-text')
var tb14 = $('#2pm-text')
var tb15 = $('#3pm-text')
var tb16 = $('#4pm-text')
var tb17 = $('#5pm-text')

//save data from tb to local storage
$('#8am-btn').on('click', function() {
    var tb8 = $('#8am-text').val();
    localStorage.setItem('8am-text', tb8);
});

$('#9am-btn').on('click', function() {
    var tb9 = $('#9am-text').val();
    localStorage.setItem('9am-text', tb9);
});

$('#10am-btn').on('click', function() {
    var tb10 = $('#10am-text').val();
    localStorage.setItem('10am-text', tb10);
});

$('#11am-btn').on('click', function() {
    var tb11 = $('#11am-text').val();
    localStorage.setItem('11am-text', tb11);
});

$('#12pm-btn').on('click', function() {
    var tb12 = $('#12pm-text').val();
    localStorage.setItem('12pm-text', tb12);
});

$('#1pm-btn').on('click', function() {
    var tb13 = $('#1pm-text').val();
    localStorage.setItem('1pm-text', tb13);
});

$('#2pm-btn').on('click', function() {
    var tb14 = $('#2pm-text').val();
    localStorage.setItem('2pm-text', tb14);
});

$('#3pm-btn').on('click', function() {
    var tb15 = $('#3pm-text').val();
    localStorage.setItem('3pm-text', tb15);
});

$('#4pm-btn').on('click', function() {
    var tb16 = $('#4pm-text').val();
    localStorage.setItem('4pm-text', tb16);
});

$('#5pm-btn').on('click', function() {
    var tb17 = $('#5pm-text').val();
    localStorage.setItem('5pm-text', tb17);
});
//return local storage to corresponding text box
// if(!localStorage.getItem("8am-text")){
//     tb8.value = "";
// } else {
    
// }
if (typeof(Storage) !== "undefined") {
    // Store
    $("#8am-text").val(localStorage.getItem("8am-text"));
  } else {
    $("#8am-text").val("Undefined");
  }

if (typeof(Storage) !== "undefined") {
    // Store
    $("#9am-text").val(localStorage.getItem("9am-text"));
  } else {
    $("#9am-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#10am-text").val(localStorage.getItem("10am-text"));
  } else {
    $("#10am-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#11am-text").val(localStorage.getItem("11am-text"));
  } else {
    $("#11am-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#12pm-text").val(localStorage.getItem("12pm-text"));
  } else {
    $("#12pm-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#1pm-text").val(localStorage.getItem("1pm-text"));
  } else {
    $("#1pm-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#2pm-text").val(localStorage.getItem("2pm-text"));
  } else {
    $("#2pm-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#3pm-text").val(localStorage.getItem("3pm-text"));
  } else {
    $("#3pm-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#4pm-text").val(localStorage.getItem("4pm-text"));
  } else {
    $("#4pm-text").val("Undefined");
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    $("#5pm-text").val(localStorage.getItem("5pm-text"));
  } else {
    $("#5pm-text").val("Undefined");
  }

//TO DO:have text remain when page is refreshed