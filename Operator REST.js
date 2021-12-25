const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log(2, 3, 5, 6, 7, 8, "basic", "rest");

function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}
calcOrDouble(3);
