/* TOGGLE => Significa alternar entre dois estados possivéis.
É frequentemente usado em interfaces de usuário e programação para representar algo que pode ser "Ligado/Desligado" ou "Ativo/Inativo".
*/

//~ Função para alternar a exibição do formulário de cupom
function toggleDiscount() {
  const discountBody = document.getElementById("apply-discount-body");
  const icon = document.getElementById("toggle-icon");


  //^ Alternar a visibilidade do formulário desconto
  const isHidden = discountBody.style.display === "none" || discountBody.style.display === "";
  discountBody.style.display = isHidden ? "block" : "none";

  icon.classList.toggle("bxs-chevron-down");
  icon.classList.toggle("bxs-chevron-up");
}

const discountCupons = {
    DESCONTO10: 0.1, //^ 10% DESCONTO
    DESCONTO20: 0.2, //^ 20% DESCONTO
    DESCONTO50: 0.5, //^ 50% DESCONTO
};

//~ Função para aplicar o desconto
function applyDiscount() {
    const discountCode = document.getElementById("discount-code").value.trim().toUpperCase(); //^ Valor digitado
    const discountMenssageElement = document.getElementById("discount-message"); //* Elemento span para mensagem desconto
    const totalPriceElement = document.getElementById("total-price");

    //? Verificar se o cupom de desconto é válido
    if(discountCupons[discountCode]) {
        const discount = discountCupons[discountCode];
        console.log(discount);
        const originalPrice = 1200;
        const discountPrice = originalPrice * (1 - discount);

        //? Atualizar o preço com desconto
        totalPriceElement.innerText = `Preço total: R$ ${discountPrice.toFixed(2)}`;

        //^ Armazenar o cupom no licalstorage
        localStorage.setItem("discount", discountCode);

        //^ Exibir a mensagem de desconto
        discountMenssageElement.style.color = "green";
        discountMenssageElement.innerText = `Cupom de ${discountCode} aplicado!`;

        //^ Limpar o campo input (elemento)
        document.getElementById("discount-code").value = "";
    } else {
        //^ Se o cupom não for válido
        //^ Limpar a mensagem
        
        discountMenssageElement.style.color = "red";
        discountMenssageElement.innerText = "Cupom Inválido";
    }
}

function checkStoredDiscount() {
    const storedDiscount = document.getElementById("discount");
    const discountMenssageElement = document.getElementById("discount-message");

    //^ Verificar se há cupom no localStorage
    if(storedDiscount) {
        //^ se ele retornar true, Limpar o desconto
        localStorage.removeItem("discount");
    }

    
    discountMenssageElement.innerText = "";
}

window.onload = checkStoredDiscount();