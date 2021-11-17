document.getElementById("buttons").addEventListener("click", function(event){
    let numbers = event.target.innerText;
    let answer = document.getElementById("answer");
        
            if(numbers == "C" ){
                answer.innerText = "";
            }
           else if(numbers == "<"){
                answer.innerText = answer.innerText.slice(0, -1);
            }
            else if(numbers == "="){
                answer.innerText = eval(answer.innerText);
            }

        else{
            let previous_number = answer.innerText;
        let new_number = previous_number + numbers;
        answer.innerText = new_number;
        }
        
});