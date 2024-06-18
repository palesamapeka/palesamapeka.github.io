let buttons = document.querySelectorAll('input[type="button"]')
let screen = document.getElementsByName("display")[0];

console.log(screen)

buttons.forEach(function(selectedButton){
    selectedButton.addEventListener("click", function(event){
        let buttonValue = this.value;

        if(buttonValue === "DE"){
            screen.value = screen.value.slice(0, -1);
        }else if(buttonValue === "AC"){
            screen.value = "";
        }else if(buttonValue === "="){
            try{
                screen.value = eval(screen.value)
            }catch(error){
                screen.value += error.message
            }
        }else{
            screen.value += buttonValue;
        }
    })
})