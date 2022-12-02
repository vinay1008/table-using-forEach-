
var cl = console.log;

// var x = 10;

// cl(x);

// function task(){
//     var y = 20;
//     cl(`variable value inside function is ${y}`);
//     cl(`variable value from global function is ${x}`);
    
// }

// task();
//cl(y);  // not defined


var x = 10;   //number
var flag = true;   
var test;         //undefined
var fname = "aaa";  //string

var r = x + fname;

cl(r, typeof r);

//true >> 1
//false >> 0

r = x + flag; // 11

cl(r, typeof r);

r = x + test;   // 10undefined NaN >> not a number

cl(r,typeof r);

r = 1000 + null; 
cl(r, typeof r);

r = "john" + undefined;  //undefined converted to string

cl(r, typeof r);

r = "john" + null;

cl(r, typeof r);


r = 10 + 10 + true + 10;
cl(r, typeof r);

r = 10 + 10 + 'js' + 100;
cl(r, typeof r);

r = 'js' + true + 100;
cl(r, typeof r);


r = 10 + 10 + true + 'js' + true + 100;
cl(r, typeof r);


// conversion but in reverse direction >> string is converted into number
r = 20 - '10';    // 10 >> number
cl(r, typeof r);

r = 20 * '10';    // 200 >> number
cl(r, typeof r);

r = 20 / '10';   // 2 >> number
cl(r, typeof r);

r = 20 - 'js';   // NaN >> number
cl(r, typeof r);
