var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var containerDays = document.querySelectorAll('.containerDay');

containerDays.forEach(function(containerDay, index) {
    var dateString = containerDay.querySelector('.lineDate').innerHTML.trim().split(',');
    var monthAndDay = dateString[1].trim();
    var day = monthAndDay.substring(monthAndDay.length - 2, monthAndDay.length).trim();
    var month = monthAndDay.substring(0, 3);
    var year = dateString[2].trim();
    // 23, 59 is time of day this day is considered to be in the past
    var date = new Date(year, months.indexOf(month), day, 23, 59);
    date.toLocaleString('en-GB', {timeZone: 'Europe/London'});
    var currentDate = new Date();
    currentDate.toLocaleString('en-GB', {timeZone: 'Europe/London'});
    if(date < currentDate) {
        /* 
        *
        *  This is what runs if the day is in the past
        *
        *  By default it's set to add the class 'day-past' which you can then style
        *  with the rest of your css.
        * 
        *  Alternatively you can add the styles here with javascript by uncommenting
        *  out the second line which adds the background-color 'lightgray' and
        *  sets the opiacty to 0.65
        * 
        */
        containerDay.classList.add('dayPast');
        // containerDay.style.cssText = 'background-color: lightgray; opacity: 0.65';
    } 
});