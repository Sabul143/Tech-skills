const signinput = document.getElementsByClassName('signinput')

function changeColor(){
    for(const element of signinput) {
        element.style.backgroundColor = 'grey'
    }
}