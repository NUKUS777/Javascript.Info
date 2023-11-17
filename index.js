alert('I am God');
let n = 2;
n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

// -if variable = 0;
// and we say: ++variable and variable++ and we output both of them with alert(value) they both show 1.
// -but if we assign them to a new variable such as:
// x=++variable// Here if we output x it will equal to 1 because the increment is before the operation ends.
// x=variable++ //But here if we output x it will equal to 0 and if we output x it will equal to 1 because it is also incremented but after the operation is ended. and that is the difference is that one is before operation ends and one is after.