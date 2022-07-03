//task1
function verifyAge (age) {
    if (age >=18 && age <=90) {
        return('typed age is correct');
    } 
    else {
        return('typed age is not valid'); 
    }
}
console.log((verifyAge(89)));

//task2
function calcYear(res, yearBirth) {
    //let res = prompt("Please, enter your first name");
    if (_.isNumber(res) || res == null || res == "" ) {
        return('Please, type a valid name value ');
        //alert('Please, type a valid year');
    } else {
    let currentYear = new Date().getFullYear();
    //let yearBirth = prompt('Hello, '+ res +', nice to meet you. -> Please enter your birthday year');
    if (_.isString(yearBirth) || yearBirth == null || yearBirth <= 1899 || yearBirth > currentYear ) {
    return('Please, type a valid year value ');
    //alert('Please, type a valid year');
        } else {
           let ageYear = currentYear - yearBirth;
           return(res + ', your age is: '+ ageYear);
           }
       }
}
console.log(calcYear ("Mykola", 1992));

//task3
let mark = 29 ;
if (mark > 0 && mark <= 60) {
    console.log("F");
} else if (mark > 60 && mark <=70) {
    console.log("D");
} else if (mark > 70 && mark <=80) {
    onsole.log("C");
} else if (mark > 80 && mark <=90) {
    console.log("B");
} else if (mark > 90 && mark <=100) {
    console.log("A");
} else {
  console.log("Type mark from 0 to 100");
}
//task4
function basicOp(operation, value1, value2) {
    if (operation == "*") {
        return(value1*value2);
    } else if (operation == "/") {
        return(value1/value2);
    } else if (operation == "+") {
        return(value1+value2);
    } else if (operation == "-") {
        return(value1-value2);
    } else {
      console.log("Type correct values");
    return;
    }
} 
console.log(basicOp("/",4,8))

//task5
function testEven (n){  
    if( n % 2 == 0) {
        return ("True: the number is even");
    } else {
        return ("False: The number is not even");
    }
}
console.log(testEven(0));
console.log(testEven(0.5));
console.log(testEven(1));
console.log(testEven(2));
console.log(testEven(-4));

//task6
function updateLight(current) {
    switch (current) {
        case "green":
            return('yellow');
            case 'yellow':
            return('red');
        case 'red':
            return('green');
        default:
            return('Please type a light state');
    }
}
console.log(updateLight("green"));

//task7
function century(year) {
    return Math.ceil(year/100);
}
console.log(century(201))

//task8
function fromAmerFlorToEur (floor){
    if(floor <= 0){
        return floor;
    } else if (floor >=13) {
      return floor-2
    } else {
      return floor -1
    }
}
console.log(fromAmerFlorToEur(11));

//loops
//task 9
let numb = '';
for (let i = 0; i < 100 ; i++){
    if( i % 7 == 0 || i % 0 == 0) {
            numb = numb+' '+i;
        }
}
console.log(numb.slice(0,8))

//task10
let j = 0
let count = 0;
while (j < 10) {
    j = count * Math.floor(Math.random() * 2)
    count++;
    console.log(j)
    if (j > 3){
        console.log(j);
        break;
    }   
}

//task11
let counter = 0;
let str = '';
do {
    str=str+counter
    counter++;
} while (str.length < 20);
console.log(str)

//task12
for (let i = 10; i > 0; i--) {
	for (let j = 0; j < i; j++) {
	    console.log(i/j);
	}
}
