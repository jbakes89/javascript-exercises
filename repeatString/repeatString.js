const repeatString = function(repeatedString, numberOfRepetitions) {
    if (numberOfRepetitions < 0) { return "ERROR" };

    let output = "";

    for (let i = 0; i < numberOfRepetitions; i++) {
        output += repeatedString
    }
    return output;
}

module.exports = repeatString
