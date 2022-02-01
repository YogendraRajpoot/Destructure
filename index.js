// Destructure

/***************************************************************************************************************/

// destructure the name and password from
// {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }
console.log(`First Problem :- 1`);
let data = {
  name: "masai",
  password: "admin@123",
  hostname: "masaischool",
  client: "chrome",
};

let { name, password } = data;
console.log(`Name : ${name}\nPassword : ${password} `);
console.log(`***********************`);
/***************************************************************************************************************/
console.log(`First Problem :- 2`);
// destructure the pincode and rename to pin
// {  name: 'masai', address: {  pincode: 560095 }  }
data = { 
    name: "masai",
    address: { 
        pincode: 560095 
    }
};
let {address:{pincode : pin}} = data
console.log(`Pin : ${pin} `);
console.log(`***********************`);


/***************************************************************************************************************/
// destructure the first value and second value of the array
// [ 100, 200, 500, 600 ]
console.log(`First Problem :- 3`);
var [a,b,c,d] = [ 100, 200, 500, 600 ]
console.log(a,b);
console.log(`***********************`);


/***************************************************************************************************************/

// destructure to get the value 50 from this array
// [ 100, [  50, 60, 70  ]   ]
console.log(`First Problem :- 4`);
var [a,[b,c,d]] = [ 100, [  50, 60, 70  ]   ]
console.log(b);
console.log(`***********************`);
/***************************************************************************************************************/
// destructure to get the value 2,3 into a new array
// [  1, {
//      arr: [ 1, 2, 3 ]
//    }
//  ]
console.log(`First Problem :- 5`);

var [a,{arr:[b,c,d]}] = [  1, {arr: [ 1, 2, 3 ] } ] 
console.log(c,d);
console.log(`***********************`);



/***************************************************************************************************************/