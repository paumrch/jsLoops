// Iteración #1: Usa includes

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

// Bucle que recorre el Array

for (var i = 0; i < products.length; i++){
    
    // Condición para incluir camiseta

    if (products[i].includes("Camiseta")){
    
        // Mostrar las vueltas del bucle con los items que incluyan Camiseta.
        console.log(products[i])
    }
}