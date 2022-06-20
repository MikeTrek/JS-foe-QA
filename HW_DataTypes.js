//ex 1
let cat = 'cat';
let dog = 'dog';
const revers = cat;
cat = dog;
dog = revers;
console.log(cat);
console.log(dog);
console.log(revers);
//ex 2
const company = 'Softserve';
const position = 'QA Engineer';
console.log(company + ':' + position);
//ex 3
const isProductCompany = false;
let projectName;
console.log(typeof isProductCompany, typeof company, typeof position);
//ex 4
projectName = 'CGM';

//ex 5
const a = "jsfo";
const b = "r.qa";
const sum = a + b;
console.log(sum);

//ex6
let str = "123";
console.log(typeof str);

//ex7
function sumStr(a,b) {
    return Number(a)+Number(b); 
}
console.log(sumStr ("4", "5"));
console.log(sumStr ("34","5"));
console.log(sumStr ("" , ""));
console.log(sumStr ("2",""));
console.log(sumStr ("-5", "3"));

//ex9
function  remainder(a,b) {
  if (a>b) {
    result = a%b;
  } else {
   result= b%a;
 }
 return(result);
}
console.log(remainder(17,5));
console.log(remainder(13,72));
console.log(remainder(1,0));
console.log(remainder(0,0));

//ex9
function opposite(number) {
    return -number; 
}
console.log(opposite ("1"));
console.log(opposite ("14"));
console.log(opposite ("-34"));

//ex10
function numberToString(num) {
    return String(num);
    // num.toString()
    //""+num
    //n+""
}
console.log(numberToString (10));
  