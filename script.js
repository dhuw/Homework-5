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
    } else if (currentHour === 8) {
        $('#8am-text').addClass('present');
    } else if (currentHour < 8) {
        $('#8am-text').addClass('future');
    }

    if (currentHour > 9) {
        $('#9am-text').toggleClass('past');
    } else if (currentHour === 9) {
        $('#9am-text').addClass('present');
    } else if (currentHour < 9) {
        $('#9am-text').addClass('future');
    }

    if (currentHour > 10) {
        $('#10am-text').toggleClass('past');
    } else if (currentHour === 10) {
        $('#10am-text').addClass('present');
    } else if (currentHour < 10) {
        $('#10am-text').addClass('future');
    }

    if (currentHour > 11) {
        $('#11am-text').toggleClass('past');
    } else if (currentHour === 11) {
        $('#11am-text').addClass('present');
    } else if (currentHour < 11) {
        $('#11am-text').addClass('future');
    }

    if (currentHour > 12) {
        $('#12pm-text').toggleClass('past');
    } else if (currentHour === 12) {
        $('#12pm-text').addClass('present');
    } else if (currentHour < 12) {
        $('#12pm-text').addClass('future');
    }

    if (currentHour > 13) {
        $('#1pm-text').toggleClass('past');
    } else if (currentHour === 13) {
        $('#1pm-text').addClass('present');
    } else if (currentHour < 13) {
        $('#1pm-text').addClass('future');
    }

    if (currentHour > 14) {
        $('#2pm-text').toggleClass('past');
    } else if (currentHour === 14) {
        $('#2pm-text').addClass('present');
    } else if (currentHour < 14) {
        $('#2pm-text').addClass('future');
    }

    if (currentHour > 15) {
        $('#3pm-text').toggleClass('past');
    } else if (currentHour === 15) {
        $('#3pm-text').addClass('present');
    } else if (currentHour < 15) {
        $('#3pm-text').addClass('future');
    }

    if (currentHour > 16) {
        $('#4pm-text').toggleClass('past');
    } else if (currentHour === 16) {
        $('#4pm-text').addClass('present');
    } else if (currentHour < 16) {
        $('#4pm-text').addClass('future');
    }

    if (currentHour > 17) {
        $('#5pm-text').toggleClass('past');
    } else if (currentHour === 17) {
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
console.log(currentHour);

//save data from tb to local storage
$('saveBtn').click(function() {
    var tb8 = $('#8am-text').val();
    var tb8JSON = JSON.stringify(tb8);
    localStorage.setItem('8am-textbox', tb8JSON);
});

//retrieve function
var tb8Local = localStorage.getItem('8am-textbox');
var tb8Text = JSON.parse(tb8Local);
$('#8am-text').innerHTML = tb8Text.name;

//TO DO: make text box save on click and have text remain when page is refreshed