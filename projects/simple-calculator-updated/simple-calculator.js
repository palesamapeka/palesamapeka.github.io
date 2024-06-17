let buttons = document.querySelectorAll('input[type="button"]')
let screen = document.getElementsByName("display")

buttons.forEach(function(selectedButton){
    selectedButton.addEventListener("click", function(event){
        let buttonValue = this.value;
        screen.value = buttonValue;
    })
})