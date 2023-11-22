//code structure

alert('Hello'); alert('World');


alert('Hello')
alert('World')
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}

//That’s called “automatic semicolon insertion”. Sometimes it doesn’t work, for instance:

alert("There will be an error after this message")

[1, 2].forEach(alert)


function f() {
  // no semicolon needed after function declaration
}

for(;;) {
  // no semicolon needed after the loop
} 