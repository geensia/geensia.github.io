function myFunction() {
    // defining what userInput & message is
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message"); 

    message.innerHTML ="Have an amazing day " + userInput.value + " !";
    // do message.innerText instead to print extact text

}