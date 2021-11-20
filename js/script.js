const userNumber = prompt(`Enter any number, please:`);
const exponentUserNumber = prompt(
  `Enter the exponent of the number you entered earlier, please:`
);

function getNumberInExponent(number, exponentNumb = 1) {
  if (number === null || isNaN(+number) || number.trim() === "") {
    return "number is not valid";
  }
  if (exponentNumb === null || isNaN(+exponentNumb) || exponentNumb === "") {
    return "exponentNumb is not valid";
  }
  return Math.pow(number, exponentNumb);
}

const result = getNumberInExponent(userNumber, exponentUserNumber);
alert(result);
