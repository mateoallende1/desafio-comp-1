// let numero = 10;

// while (numero){
//     alert(numero);
//     numero--;
// }

let state = prompt("Insert state");

while (state != "Florida"){
    switch(state){
        case "California":
            alert("Born in California");
            break;
        
        case "New York":
            alert("Born in New York");
            break;
        
        case "Illinois":
            alert("Born in Illinois");
            break;

        case "Colorado":
            alert("Born in Colorado");
            break;
        
        case "Massachussets":
            alert("Born in Massachussets");
            break;
        
        default:
            alert("Your state is not valid")
            break;
    }
    state = prompt("Insert state");
}

