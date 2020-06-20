// binds an event listener in addingEventListener():
const input = document.querySelector('input');

function addingEventListener() {
    input.addEventListener('click', function(input){
        return "clicked"
    });
}