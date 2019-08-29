function HowManyDays() {
    var whichMonth = document.getElementById('month');
    var month = parseInt(whichMonth.value);
    var numberOfDays = 0;

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            numberOfDays = 30;
            break;
        default:
            numberOfDays = 31;
    }
    alert(numberOfDays);
}

function HowManyDays2() {
    var whichMonth = document.getElementById('month2');
    var month = parseInt(whichMonth.value);
    var whichYear = document.getElementById('year');
    var year = whichYear.value;
    var numberOfDays = 0;

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            numberOfDays = 30;
            break;
        case 2:
            if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
                numberOfDays = 29;
            else
                numberOfDays = 28;
            break;
        default:
            numberOfDays = 31;
    }
    alert(numberOfDays);
}