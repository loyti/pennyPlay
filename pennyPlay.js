var initialInvestment = 1;
var bank = [];
var day = 30;
var penny = 1 / 100;
function pennyPlan (){
    document.write("<h1>This is my Initial Investment $"  + penny + " </h1>");
    for (var i = 0; i <= day; i++){
        penny *= initialInvestment * 2;
        bank.push(penny)
        document.write("<p>In the beginning, I only had a penny $.01, however, today I have $" + bank[i] + " and it has been " + i + " days :)</p><br>");
    }
}
function check (test){
    console.log(test = document.write("<p class=\"penny\">Welcome to the Penny Plan<p>"));
}
check();
pennyPlan();