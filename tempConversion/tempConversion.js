const ftoc = function(tempInF) {
  const tempInC = (tempInF - 32) * (5/9);
  return parseFloat(tempInC.toFixed(1));
}

const ctof = function(tempInC) {
  const tempInF = (tempInC * (9/5)) + 32;
  return parseFloat(tempInF.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
