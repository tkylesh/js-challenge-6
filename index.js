//sum of squares of number 1-10
var sum = 0;
//sum of number 1-10 squared
var sumo = 0;

for(var i = 1; i<11; i++){
	sum +=Math.pow(i,2);
	sumo += i;
}
console.log(sum);
document.getElementById("sumOfSquares").innerHTML= sum;
sumo *= sumo;
console.log(sumo);
document.getElementById("squareOfSum").innerHTML= sumo;

document.getElementById("diff").innerHTML= (sumo - sum);


