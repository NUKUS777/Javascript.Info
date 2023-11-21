// //logical operators

// //OR "||" finds first true value

// alert( 1 || 0 ); // 1 (1 is truthy)

// alert( null || 1 ); // 1 (1 is the first truthy value)
// alert( null || 0 || 1 ); // 1 (the first truthy value)

// alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)



// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// //AND "&&" finds first falsy value
// // if the first operand is truthy,
// // AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 1 && 5 ); // 5

// // if the first operand is falsy,
// // AND returns it. The second operand is ignored
// alert( null && 5 ); // null
// alert( 0 && "no matter what" ); // 0

// alert( 1 && 2 && 3 ); // 3, the last one

// //Precedence of AND && is higher than OR ||
// //The precedence of AND && operator is higher than OR ||.
// //So the code a && b || c && d is essentially the same
// // as if the && expressions were in parentheses: (a && b) || (c && d).


// alert( alert(1) || 2 || alert(3) );

// alert( alert(1) && alert(2) );

// //The call to alert does not return a value. Or, in other words, it returns undefined.



//Task

// const user = prompt('Who is there');

// if (user=='Admin') {
//     const password = prompt('Password')
//     if (password=='TheMaster'){
//         alert('Welcome')
//     }
//     else if (password) {
//         alert('Wrong password ')
//     }
//     else (
//         alert('Canceled')
//     )
// }
// else if (user) {
//     alert('I dont know you ')
// }
// else (
//     alert('Canceled')
// )





//Nullish operator

//In other words, ?? returns the first argument
// if it’s not null/undefined. Otherwise, the second one.

let user='Exist';

alert(user ?? "Anonymous"); // Anonymous (user is undefined)






// let height = null;
// let width = null;

// // important: use parentheses
// let area = (height ?? 100) * (width ?? 50);

// alert(area); // 5000

// // without parentheses
// let area = height ?? 100 * width ?? 50;

// // ...works this way (not what we want):
// let area = height ?? (100 * width) ?? 50;




// let x = 1 && 2 ?? 3; // Syntax error

// let x = (1 && 2) ?? 3; // Works

// alert(x); // 2
