const palindromes = function(str) {
    const parsedString = str.toLowerCase().match(/[a-z]/g);
    return (parsedString.join("") == parsedString.reverse().join(""));
}

module.exports = palindromes
