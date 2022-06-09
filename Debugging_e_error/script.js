/** Crie uma função que recebe um array e um número
    * Realize as seguintes validações
        * Se os parâmetros não forem enviados, lance um erro o tipo ReferenceError
        * Se o array não for do tipo 'object', lance um erro do tipo TypeError
        * Se o número não for do tipo 'number', lance um erro do tipo TypeError
        * Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    * Utilize a declaração try...Catch
    * Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function validaArray(arr, num) {                                                    // Declarando a função, recebendo 2 argumentos
    try {                                                                           // Inicio da tratativa de erro
        if (arr == null || num == null) {                                           // Verifica se um dos argumentos venho vazio
            throw new ReferenceError("Envie os parâmetros");                        // Joga na tela novo Erro com uma mensagem
        } else if (typeof arr !== 'object') {                                       // Verifica se um dos argumentos não é objecto (array)
            throw new TypeError("Array, precisa ser do tipo Object");               // Joga na tela novo Erro com uma mensagem
        } else if (typeof num !== 'number') {                                       // Verifica o typo da variavel, se é number
            throw new TypeError("O número não é do tipo number");                   // Joga na tela novo Erro com uma mensagem
        }  else if (arr.length !== num) {                                           // Verifica se o tamanho de arr é diferente de num
            throw new RangeError("O tamanho do array não corresponde com o num");   // Joga na tela novo Erro com uma mensagem
        } else {                                                                    // Caso não entre em nenhuma das opções
            return arr;                                                             // Sem erro, retorna o valor do array
        }
    } catch(e) {                                                                    // Irá pegar o erro throw, e armazenar em e
        if(e instanceof ReferenceError) {                                           // Compara a variavel com o tipo ReferenceError
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);            
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é RangeError");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado"+e);
        }
    }
}

console.log(validaArray([123,142], 2));                                             // Irá invocar a função, passando os parâmetros, e apresentando no console
