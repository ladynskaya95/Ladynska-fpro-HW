const operation = prompt("Оберіть операцію (add, sub, mult, div):");

const num1 = +prompt("Введіть перше число:");
const num2 = +prompt("Введіть друге число:");

let result, sign;

switch (operation) {
    case "add":
        result = num1 + num2;
        sign = "+";
        break;
    case "sub":
        result = num1 - num2;
        sign = "-";
        break;
    case "mult":
        result = num1 * num2;
        sign = "*";
        break;
    case "div":
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Ділення на нуль неможливе";
        }
        sign = "/";
        break;
    default:
        result = "Невідома операція";
        sign = "";
}


sign ? alert(`${num1} ${sign} ${num2} = ${result}`) : alert(result);








