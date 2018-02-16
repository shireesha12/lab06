/*eslint-env browser*/
var futureValue;
var investment;
var rate;
var years;
var i;

investment = parseFloat(window.prompt("enter investment amount as xxxxx.xx"));
rate = parseFloat(window.prompt("enter interest rate as xx.x"));
years = parseInt(window.prompt("enter number of years"), 10);

//calculatate future value

futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}
futureValue = parseInt(futureValue, 10);


//display result
window.document.write("investment amount: $" + investment + "<br>");
window.document.write("rate: " + rate + "%<br>");
window.document.write("years: " + years + "<br>");
window.document.write("futurevalue: $" + futureValue + "<br>");
