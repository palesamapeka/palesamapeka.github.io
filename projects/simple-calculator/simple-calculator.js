function simpleCalculator(){
    let screen = document.querySelector(".screen")
    let buttons = document.querySelectorAll(".btn")
    let equal = document.querySelector(".btn-equal")
    let clear = document.querySelector(".btn-clear")

    buttons.forEach(function(buttonPressed){
        buttonPressed.addEventListener("click", function(event){
            let value = event.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener("click", function(event){
        if(screen.value === ""){
            screen.value = "";
        }else{
            let answer = 0;
            answer = evaluateExpression(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click", function(event){
        screen.value = ""
    })
}

function evaluateExpression(expression){
    try{
        return eval(expression);
    }catch (error){
        console.error("Evaluation Error:", error);
        //return 'Error'; // Display 'Error' if evaluation fails
    }
}

simpleCalculator();