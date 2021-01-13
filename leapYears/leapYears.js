const leapYears = function(year) {

    const conditionsMet = (
        (year % 4 == 0) &&
        (year % 100 != 0 || year % 400 == 0)
    );

    return conditionsMet;
}

module.exports = leapYears
