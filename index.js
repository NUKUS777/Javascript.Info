//Loops


//while Loop

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
  i++;
}


//do.. loop

    let u = 0;
    do {
    //   alert( u );
      u++;
    } while (u < 3);

// This form of syntax should only be 
// used when you want the body of the
// loop to execute at least once regardless of
//  the condition being truthy. Usually,
//  the other form is preferred: while(…) {…}.


 let e = 0;
while (e++ < 5);
console.log(5<5);


let b = 0

while (b<3) {
    b++
    alert( `number ${b}!` );

}

//Switch statement

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}
let note = 'If there is no break then the execution continues with the next case without any checks.'
let c = 2 + 2;

switch (c) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}

  if (browser=='Edge') {
    alert( "You've got the Edge!" );
  }
  else if (browser=='Chrome' || browser=='Firefox' || browser=='Safari '|| browser=='Opera'){
    alert( 'Okay we support these browsers too' );

  }
  else {
    alert( 'We hope that this page looks ok!' );

  }