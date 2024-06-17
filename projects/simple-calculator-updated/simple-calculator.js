let buttons = document.querySelectorAll(".btn")
let screen = document.querySelector("display")

buttons.forEach(function(selectedButton){
    selectedButton.addEventListener("click", function(event){
        let value = event.target.dataset.value;
        screen.value += value;
    })
});