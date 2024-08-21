
//Data types 

//Task one: create variables 
let studentName = null //string
let studentAge = null; //number 
let studentGrade = null; //number 
let isPresent = null; //Bool 

//Task two: assign values 
studentName = "Alice"; //string
studentAge = 15; //number 
studentGrade = 10; //number 
isPresent = true; //Bool 


//Task three: log all of the student information 
console.log(studentName)

console.log(studentAge)

console.log(studentGrade)

console.log(isPresent)





//Data operators 

//task one: create number array 

let  calcNumbers = [10,2]; 

//task two: assign values and formulas
let  numOne = calcNumbers[0];
let  numTwo = calcNumbers[1];

let addNums = numOne + numTwo;
let subNums = numOne - numTwo ;
let multNums = numOne * numTwo ;
let divNums = numOne / numTwo ;


//task three: print results 
console.log("Sum:", addNums);
console.log("Difference:", subNums);
console.log("Product:", multNums);
console.log("Quotient:", divNums);


// Task 4: Explore assignment operators

calcNumbers = [20, 4]
numOne = calcNumbers[0]; 
numTwo = calcNumbers[1]; 

console.log("Updated num1:", numOne);
console.log("Updated num2:", numTwo);


// Task 5: Use comparison operators
let resultEqual = (numOne == numTwo);
let resultGreater = (numOne>numTwo);
let resultUnequal = (numOne != numTwo);


console.log("Is num1 equal to num2?", resultEqual);
console.log("Is num1 greater than num2?", resultGreater);
console.log("Is num1 not equal to num2?", resultUnequal);



// Task 6: Apply logical operators
let isPositive = numOne > 0 && numTwo>0; 
let isEven = (numOne % 2 == 0) || (numTwo % 2 == 0) ;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);





