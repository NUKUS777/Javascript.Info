

//Task

const user = prompt('Who is there');

if (user=='Admin') {
    const password = prompt('Password')
    if (password=='TheMaster'){
        alert('Welcome')
    }
    else if (password) {
        alert('Wrong password ')
    }
    else (
        alert('Canceled')
    )
}
else if (user) {
    alert('I dont know you ')
}
else (
    alert('Canceled')
)