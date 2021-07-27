function even(num1,num2) {
    

    while (num1<num2) {
        num1++

        if(num1%2==0){
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(num1);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("even").appendChild(node);
        }

    }

}



function odd(num1,num2) {

    while (num1<num2) {

        num1++
        if (num1%2!=0) {
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(num1);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("odd").appendChild(node);
        }
    
    }

}