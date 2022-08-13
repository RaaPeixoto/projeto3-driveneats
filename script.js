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

function pedido (){
    //buscar nome do prato com a tag selecionado
    const escolhaPrato= document.querySelector(".cardapio-prato .selecionado h3");
    // buscar nome da bebida com a tag selecionado
    const escolhaBebida= document.querySelector(".cardapio-bebida .selecionado h3");
    //buscar nome da sobbremesa com a tag selecionado
    const escolhaSobremesa= document.querySelector(".cardapio-sobremesa .selecionado h3");
    
    //buscar preço prato
    const precoPrato= document.querySelector(".cardapio-prato .selecionado .preco .numero").innerHTML;
    //buscar preço bebida
    const precoBebida= document.querySelector(".cardapio-bebida .selecionado .preco .numero").innerHTML;
    //buscar preço sobremesa
    const precoSobremesa= document.querySelector(".cardapio-sobremesa .selecionado .preco .numero").innerHTML;

    // preço prato como number
    const precoPratoNumb = Number(precoPrato);
    //preço bebida como number
    const precoBebidaNumb = Number(precoBebida);
    //preço sobremesa como number
    const precoSobremesaNumb = Number(precoSobremesa);

    //calcular a soma
    let somaPedido = precoPratoNumb + precoBebidaNumb + precoSobremesaNumb;
    somaPedido = somaPedido.toFixed(2);

    let mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${escolhaPrato.innerHTML}
    - Bebida: ${escolhaBebida.innerHTML}
    - Sobremesa: ${escolhaSobremesa.innerHTML}
    Total: R$ ${somaPedido}`

    mensagem = encodeURIComponent(mensagem);
    let linkWpp = "https://wa.me/5531991723724?text="+ mensagem ;
    //alert (linkWpp);
    window.location.replace(linkWpp)
   
    
}

