let escolha1;
function selecionarPrato(seletor){
    const botaoSelecionado = document.querySelector(".cardapio-prato .selecionado");
    const prato = document.querySelector(seletor);
    if (botaoSelecionado!== null){
        botaoSelecionado.classList.remove("selecionado");
      
     }
        prato.classList.add("selecionado");
       escolha1 = prato.innerHTML;
       botaoConfirmar()
    }
let escolha2;
function selecionarBebida(seletor){
    const botaoSelecionado = document.querySelector(".cardapio-bebida .selecionado");
    
    if (botaoSelecionado!== null){
        botaoSelecionado.classList.remove("selecionado");
    }
     const bebida = document.querySelector(seletor);
     bebida.classList.add("selecionado");
     escolha2 = bebida.innerHTML;
     botaoConfirmar()
    }
let escolha3;
function selecionarSobremesa(seletor){
    const botaoSelecionado = document.querySelector(".cardapio-sobremesa .selecionado");
        
    if (botaoSelecionado!== null){
        botaoSelecionado.classList.remove("selecionado");
    }
    const sobremesa = document.querySelector(seletor);
         sobremesa.classList.add("selecionado");

    escolha3 = sobremesa.innerHTML;
    botaoConfirmar()
    }
    
function botaoConfirmar(){
    
    if(escolha1 !== undefined  &&  escolha2 !== undefined && escolha3 !== undefined ){
            const botaocinza = document.querySelector ('.pedido-incompleto');
            const botaoverde = document.querySelector ('.pedido-completo');
           botaocinza.style.display= "none"
           botaoverde.style.display ="inline"
    }

}
const paginadeConfirmacao = document.querySelector(".pagina-opaca");
let escolhaPrato;
let precoPrato;
let escolhaBebida;
let precoBebida;
let escolhaSobremesa;
let precoSobremesa;
let precoTotal;
let somaPedido ; 
function revisarPedido() {
// ao clicar em fechar "pedido" abre o confirmar pedido 
paginadeConfirmacao.style.display= "flex"
// modificar prato pelo prato escolhido 
escolhaPrato = document.querySelector(".cardapio-prato .selecionado h3");
let confirmacaoPrato = document.querySelector(".prato-escolhido .nome-prato");
confirmacaoPrato.innerHTML = escolhaPrato.innerHTML;
//modificar pre??o pelo pre??o do prato escolhido
precoPrato= document.querySelector(".cardapio-prato .selecionado .preco .numero");
let confirmacaoPrecoPrato = document.querySelector(".prato-escolhido .preco-prato .preco-confirmar");
confirmacaoPrecoPrato.innerHTML = precoPrato.innerHTML;
// modificar bebida pela bebida escolhido 
escolhaBebida = document.querySelector(".cardapio-bebida .selecionado h3");
let confirmacaoBebida = document.querySelector(".bebida-escolhida .nome-bebida");
confirmacaoBebida.innerHTML = escolhaBebida.innerHTML;
//modificar pre??o pelo pre??o da bebiba escolhido
precoBebida= document.querySelector(".cardapio-bebida .selecionado .preco .numero");
let confirmacaoPrecoBebida = document.querySelector(".bebida-escolhida .preco-bebida .preco-confirmar");
confirmacaoPrecoBebida.innerHTML = precoBebida.innerHTML;
// modificar sobremesa pela sobremesa escolhida
escolhaSobremesa = document.querySelector(".cardapio-sobremesa .selecionado h3");
let confirmacaoSobremesa = document.querySelector(".sobremesa-escolhida .nome-sobremesa");
confirmacaoSobremesa.innerHTML = escolhaSobremesa.innerHTML;
//modificar pre??o pelo pre??o da  sobremesa escolhida
precoSobremesa = document.querySelector(".cardapio-sobremesa .selecionado .preco .numero");
let confirmacaoPrecoSobremesa = document.querySelector(".sobremesa-escolhida .preco-sobremesa .preco-confirmar");
confirmacaoPrecoSobremesa.innerHTML = precoSobremesa.innerHTML;
//fazer soma para pre??o total
const precoPratoNumb = Number(precoPrato.innerHTML);
const precoBebidaNumb = Number(precoBebida.innerHTML);
const precoSobremesaNumb = Number(precoSobremesa.innerHTML);

somaPedido = (precoPratoNumb + precoBebidaNumb + precoSobremesaNumb).toFixed(2);



//modificar pre??o total
precoTotal = somaPedido;
let confirmacaoTotal = document.querySelector(".preco-total .preco-confirmar");
confirmacaoTotal.innerHTML = precoTotal;


}

function mensagemWpp(){
//ao clicar em confirmar vai para o whatsapp
    let mensagem = `Ol??, gostaria de fazer o pedido:
    - Prato: ${escolhaPrato.innerHTML}
    - Bebida: ${escolhaBebida.innerHTML}
    - Sobremesa: ${escolhaSobremesa.innerHTML}
    Total: R$ ${somaPedido}`

    mensagem = encodeURIComponent(mensagem);
    let linkWpp = "https://wa.me/5531991723724?text="+ mensagem ;
    window.location.replace(linkWpp)

}

function cancelar (){
// ao clicar em cancelar volta para a tela de escolha (display da pagina opaca volta a ser none)
paginadeConfirmacao.style.display= "none"
}




