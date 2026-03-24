// Function Declalration

function square(a)
{
 return a*a;
}

console.log(square(10));

// Function Function Expression

let a=function (a){
    return a*a;
}
console.log(a(10));

//Arrow functions

let add=(a,b)=>{
    return a+b;
}
console.log(add(10,10));
// we can also write this as
// let add=(a,b)=> a+b;

//parameters and return values

// return values
function returnvalu(a)
{
    return a+12;
    console.log("last line")// this will not work
}
console.log(returnvalu(10));

function returnvalue2(a)
{
  return "sachin "+a;
}
console.log(returnvalue2("dubey"));

// parameters
function parameterExample(a, b,c=10){// a,b,c are paramter, c is default if no value is passed it will use 10

    return a+b+c

}
console.log(parameterExample(10,12))
// types of parametre
// required paramter
function requiredParamter(a,b)// a,b are required parameter if value is not passed  it will use undefined
{
    return a+b;
}
console.log()

// Deafult parqameter
function parameterExample(a, b,c=10){// a,b,c are paramter, c is default if no value is passed it will use 10

    return a+b+c

}
console.log(parameterExample(10,12))
// rest paramter
function sum(...numbers)
{
    return numbers.reduce((total,num)=>total+num,0)
}
console.log(sum(1,2,3,4,5));

// Destructured paramters
function user({name, rollno})
{
    return `Roll no of ${name} is ${rollno}`;
}
let detail={name:"Sachin",rollno:192};
console.log(user(detail))

// global scope and locla scope

let x=1; //global variable

function fun(){
    let y=2;
    console.log(x," ", y);
}
fun()

// block scope

{
    let x=0;
    console.log(x);
}
console.log(x);

function fun1()
{
    let z=3;
    function fun2()
    {
        let z1=5;
        console.log(z," ",z1)
    }
    fun2();
}
fun1();

// hoisting

hoisting();
function hoisting(){
    console.log("Hello");
}