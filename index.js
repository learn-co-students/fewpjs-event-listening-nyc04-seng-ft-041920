// binds an event listener in addingEventListener():
// ReferenceError: ainput is not defined
const input = document.querySelector('input');

function addingEventListener() {
    input.addEventListener('click', function(input){
        return "clicked"
    });
}