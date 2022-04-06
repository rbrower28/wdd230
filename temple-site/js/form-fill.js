// fills the form with whatever parameters were taken from a previous page

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// sets start date, if applicable

var st = getParameterByName('st_date');
document.getElementById("st-date").setAttribute("value", st)

// sets end date, if applicable

var end = getParameterByName('end_date');
document.getElementById("end-date").setAttribute("value", end)

// sets number of rooms, if applicable

var rooms = getParameterByName('rooms')
document.getElementById("num-rooms").setAttribute("value", rooms)