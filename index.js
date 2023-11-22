//functions 
function Test(params) {
  const quote ='We think that if we’re successful in public, we will be happy in private. But it’s actually the other way around. When you’re happy in private, you will be successful in public.” – Jay Shetty '
}


//Local variables

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


//outer variables

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John


//The function has full access to the outer variable. It can modify it as well.

//For instance:
let user = 'John';

function showMessage() {
  user = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + user;
  alert(message);
}

alert( user ); // John before the function call

showMessage();

alert( user ); // Bob, the value was modified by the function




let user2 = 'John';

function showMessage() {
  let user2 = "Bob"; // declare a local variable

  let message = 'Hello, ' + user2; // Bob
  alert(message);
}

// the function will create and use its own user2
showMessage();

alert( user2 ); // John, unchanged, the function did not access the outer variable