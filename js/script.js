const userNumber = +prompt(`Enter any number, please:`);
const exponentUserNumber = prompt(
  `Enter the exponent of the number you entered earlier, please:`
);

function getNumberInExponent(number, exponentNumb) {
  if (isNaN(number) || isNaN(exponentNumb)) {
    return `You entered not a number.`;
    /* Ниже в else if () {} обработал значение переменной, отвечающей за возведение в степень,
       как строку, чтобы добраться до пустой строки (нажатие "ок" в prompt без ввода данных)
       или до "null" (escape или отмена) и, в случае успешного выполнения условия,
       применить параметр по умолчанию, равный 1. Использовал вложенность функции, так как
       иначе не смог обработать "0" (а такое значение возведенияв степень должно быть) и
       отдельно: "null" и пустую строку. */
  } else if (exponentNumb === "" || exponentNumb === null) {
    return getNumberInExponent(number, (exponentNumb = 1));
  } else {
    return Math.pow(number, exponentNumb);
  }
}

const result = getNumberInExponent(userNumber, exponentUserNumber);
alert(result);
