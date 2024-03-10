let nombre = prompt ("Ingresá tu nombre acá!")

//vinitos

let tinto = 22000;
let vermut = 9500;
let blanco = 10000;
let rosado = 26000;

alert ("Benvenido/a a Bodega Andina " + nombre);

let pedir = prompt ("¿Ya sabés que pedir? Ingresá SI o NO ");

if ((pedir === "no") || (pedir === "No") || (pedir === "no") || (pedir === "nO")){
    alert ("Esperamos que regreses pronto para brindar con nosotros");
} else{
    let orden = prompt ("Ingresá tu pedido: tinto / vermut / blanco / rosado");

    switch (orden){
        case "tinto":
            alert ("Gracias por tu pedido. El total de tu compra es de: $ " + tinto);
        break;

        case "vermut":
            alert ("Gracias por tu pedido. El total de tu compra es de: $ " + vermut);
        break;

        case "blanco":
            alert ("Gracias por tu pedido. El total de tu compra es de: $ " + blanco);
        break;

        case "rosado":
            alert ("Gracias por tu pedido. El total de tu compra es de: $ " + rosado);
        break;

    }
}

function agradecer (){
    alert ( nombre + ", ya procesamos tu pedido. Se encuentra en preparación. Pronto te contactamos!");
}
agradecer();