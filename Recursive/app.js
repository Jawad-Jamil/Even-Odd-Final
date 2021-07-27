const even = (num1,num2) =>{
        num1++
        if(num1%2==0){
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(num1);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("even").appendChild(node);
        }

    if (num1<num2) {
        even(num1++,num2)
    }
}


const odd = (num1,num2) =>{
        num1++
        if(num1%2!=0){
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(num1);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("odd").appendChild(node);
        }

    if (num1<num2) {
        odd(num1++,num2)
    }
}