var x = prompt("Напишите число x которое нужно возвести в степень");
var n = prompt("Напишите степень n в которую нужно возвести число");

parseInt("x", 10);
parseInt("n", 10);

console.log(x);
console.log(n);

var result = Math.pow(x, n);
var resultText = 'Result of x = ' + x + ' in power of n = ' + n + ' equals ' + result;
console.log(result);

var h2Result = document.getElementById('result_output');

h2Result.innerHTML += resultText;

alert(resultText);