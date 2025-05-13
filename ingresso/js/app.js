function purchase() {
    let selection = document.getElementById("ticket-type"); 
    let ticket = selection.options[selection.selectedIndex].value; 
    let quantity = parseInt(document.getElementById("quantity").value); 
     
    let input = document.getElementById("quantity").value;
    if (input == "") {
        alert("Usuário, preencha a quantidade de produtos que você deseja comprar.");
        return;
    } else if(input < 0) {
        alert("Usuário, a quantidade inserida é negativa e, consequentemente, inválida. Digite uma quantidade positiva.");
        document.getElementById("quantity").value = "";
        return;
    }

    let availableQuantity = parseInt(document.getElementById(`qtd-${ticket}`).textContent);
    
    let finalQuantity = availableQuantity - quantity;
    
    if(finalQuantity >= 0) {
        document.getElementById(`qtd-${ticket}`).textContent = `${finalQuantity}`;
        alert("Compra realizada com sucesso!");
    } else {
        alert(`Quantidade indisponível de ingressos para ${ticket}!`);
    }

    document.getElementById("quantity").value = "";
}
