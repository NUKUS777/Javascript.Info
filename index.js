//object


//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

//Should work like that:

// let schedule = {};

// function isEmpty(obj) {
//     for (const key in obj) {
//         return false
//     }
//     return true
// }


// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false



////this property
// let calculator = {
//    sum() {
//     return this.a + this.b
//    },
//    mul() {
//     return this.a*this.b
//    },
//    read() {
//     this.a = +prompt('a?',0);
//     this.b = +prompt('b?',0);

//    }

//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );
// let user = {
//    name: "John",
//    age: 30,
 
//    sayHi() {
//      // "this" is the "current object"
//      name: "Dave",
//      alert(this.name);
//    }
 
//  };
 
//  user.sayHi(); // John


let calculator =  {
   read() {
     this.a = +prompt('A',0)
     this.b = +prompt('B',0)

   },
   sum() {
      return this.a + this.b
   },
   mul() {
      return this.a*this.b
   }
}
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );



// optional channging
let user = {}; // a user without "address" property

alert(user.address.street); // Error!


let user2 = {};

alert(user2.address ? user.address.street : undefined);


let user3 = {}; // user3 has no address

alert( user3.address && user3.address.street && user3.address.street.name ); // undefined (no error)




let key = "firstName";

let userA = {
  firstName: "John"
};

let userB = null;

alert( userA?.[key] ); // John
alert( userB?.[key] ); // undefined


//syntax error

let User = null;

User?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"


