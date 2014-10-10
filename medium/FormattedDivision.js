/**
 * 1. Split by decimal.
 * 2. If afterDec is 0 / undefined we manually create our four trailing digits.
 * 3. Regexp to format commas.  We use a positive lookahead with a capture group.
 * 4. Concat adding the decimal we stripped earlier.
 */

function FormattedDivision(num1, num2) {
  var result = (num1 / num2).toString().split(".");
  var beforeDec = result[0];
  var afterDec = result[1] || "0000";

  beforeDec = beforeDec.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  afterDec = "." + afterDec.substr(0, 4);

  return beforeDec + afterDec;
}

// console.log(FormattedDivision(123456789, 10000));  // 12,345.6789
// console.log(FormattedDivision(2, 3));  // 0.6666
// console.log(FormattedDivision(10, 10));  // 1.0000