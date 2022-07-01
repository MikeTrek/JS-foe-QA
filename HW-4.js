//task1
const numbers = [1, 2, 3, 4, "5" ];
function getMax(arr) {
    return Math.max.apply(null, arr);
    }
console.log(getMax(numbers));
console.log(getMax([-34,-8,-102,-1]));

//task2.1
const arr = [1,2,3,4,1,4,5,21234,214,23,45,12,11,1,4,0,3,2,11,1];
function count(i, array) {
    let indx = array.indexOf(i);
    let counter = 0;
    while (indx != -1) {
        indx = array.indexOf(i, indx + 1);
        counter++;
    }   
    return counter; 
}
console.log(count(2, arr));

//task2.2
function filtering(i, array) {
    let filteredArray = array.filter((item) => item == i);
    return filteredArray.length;
    }
console.log(filtering(2,arr));

//task2.3
function include(i, array) {
    let newArray = array.includes(i);
    return newArray
    }
console.log(include(0,arr));

// task 3.1  using find()
 let users = [
     { id: 1, name: "John", age: 43 }, // same age
     { id: 2, name: "Pete", age: 43 },
     { id: 3, name: "Mary", age: 37 }
 ];
function checkPresenceFind(i, array) {
    let item = Object.keys(array).find(elem => array[elem].age === i)
    if (item !== undefined ){
        return true
        }
        return false
}
console.log(checkPresenceFind(37, users));

//task 3.2  using some()
function checkPresenceSome(i, array) {
    let item = Object.keys(array).some(elem => array[elem].age === i)
    return item;
}
console.log(checkPresenceSome(37, users));

//task 3.3   using filter() and length
function checkPresenceFilter(i, array) {
    let item = Object.keys(array).filter(elem => array[elem].age === i)
    if (item.length > 0 ){
        return true
        }
        return false
}
console.log(checkPresenceFilter(37, users))

// task 4.1
const arrStr = ['one, two, trhee', 'four, five', 'seven, six'];

function splitArray (array) { 
    return array.join(' ').replace(/,/g,'').split(' ');
}
console.log(splitArray(arrStr));

function arrToString (array) {
    return array.toString();
}
console.log(typeof(arrToString(splitArray(arrStr))) );
console.log((arrToString(splitArray(arrStr))) );

// task5
function gooseFilter (birds) {
   const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return birds.filter(item => !geese.includes(item));
};
let bird = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
console.log(gooseFilter(bird));

let strBird = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"];
console.log(gooseFilter(strBird))







// function aaa(){

// for (let index = 0; index < arrStr.length-1; index++) {
//     const element1 = arrStr[index].split(',');
//     (element1);
//     return element1;
//    }
//    let last = arrStr[2].split(', ').reverse()
//    console.log(last)
//  //  return element1;
// }
// console.log(aaa());

// let last = arrStr[2].split(', ').reverse()
// console.log(last)

// //let result = element 
// //console.log(element);
// let ab = arrStr[0];
// console.log(ab)
// let az = arrStr[2];

// let av = arrStr[1];
// console.log(av)

// console.log((arrStr[2]))

// const res = az.split(', ').reverse();
// console.log(res)




 console.log(arrStr.length)
// let a = []
// for (var i = 0; i < arrStr.length; i++) {
//     var split = arrStr[i].split(",");  // just split once
//   //  array1.push(split[0]); // before the dot
//   //  array2.push(split[1]);
//   //  array3.push(split[2]); // after the dot
// }






// let anm = arrStr.forEach((element) => { (element)
// })
// //  a.push(b);
// console.log(anm)
// //array1.slice(0,1);

// var array1 = []; // better to define using [] instead of new Array();
// var array2 = [];
// var array3 = [];

// for (var i = 0; i < arrStr.length; i++) {
//     var split = arrStr[i].split(",");  // just split once
//     array1.push(split[0]); // before the dot
//     array2.push(split[1]);
//     array3.push(split[2]); // after the dot
// }
// console.log(array1);
// console.log(array2);
// console.log(array3)




// let numbersArr = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8];


//   console.log(arrStr.slice((0,0)));

//   let numCallbackRuns = 0

// let abo = arrStr.forEach((element) => { (element)
// })
  
//  //  numCallbackRuns++

//  console.log(array1)
//   console.log(numCallbackRuns)







// function list() {
//      let a = arrStr.slice(0,1);  

//      a.forEach((value, index) => {
//         console.log(a.slice(index,index+1));
//       });

//      return a; 
//   }
//   console.log(list());

  
//   var list1 = list(1, 2, 3); // [1, 2, 3]


// var array4 = [].concat(array1+array2+array3);

// console.log(split);
// console.log("array2", array2);
// console.log(array3)

// console.log(array4)
// write a function which will return new array with all numbers (srings) as separate elements of array
// expected ['one', 'two',...]
// next, create second function, pass there result of function above and create ONE STRING,
// comma-separated with all the elements of array in it.

    


//console.log(${users.age})

// returns new array that will contain only items for which function returned 'true'

    // Find out if users array has user with age 37 in it using (returning boolean value)
    // 6.1 using find()
    // 6.2 using some()
    // 6.3 using filter() and length
