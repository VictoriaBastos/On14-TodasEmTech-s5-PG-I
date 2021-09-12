console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')


// String X Template string


//Atribua a uma variavel templateString a farase com concatenação.


// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia utilize o metodo function
// let soma = (num1,num2) => {
//     return num1 + num2
// }


// let sum = (n1,n2) => n1 + n2

let greetings = () => 'Bem vindo ao nosso site!'
console.log(greetings())


let dobro = (num) => num*2

console.log(dobro(4))


// Vamos refatorar essas funções para a sintaxe de Arrow function



//Pronto, ja refatoramos para o javascript mais moderno!
console.log('-----------------------------------------------------')
console.log('Callback')
// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
/*
function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b){
    return a / b
}

function ordenar(a, b) {
    if (a <= b) {
        return [a, b]
    } else {
        return [b, a]
    }
}
*/

// refatore as funções na sintaxe ES6


// Crie uma função chamada resultado que receberá como parâmetro: dois números e uma função de callback


// Refatore a função resultado na sintaxe ES6


// Faça a soma de dois números usando a função resultado e chamada callback 



// Faça a subtração de dois números usando a função resultado e chamada callback 

let subtrair = (num1,num2) => num1-num2

let resultado = (num1, num2, callback) => callback(num1,num2)

console.log(resultado(10,5,subtrair))

// Faça a multiplicação de dois números usando a função resultado e chamada callback 



// Faça a divisão de dois números usando a função resultado e chamada callback 



// Faça a ordenação crescente de dois números usando a função resultado e chamada callback 

const ordenar = (num1,num2) => (num1 < num2) ?  [num1,num2] : [num2,num1]

console.log(ordenar(56,34))

 
console.log('-----------------------------------------------------')
console.log('Condicionais')
// CONDICIONAIS e Operador Condicional Ternário
// Uma estudante obteve as seguinte notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 6

// Verifique se a estudante foi aprovada, utilizando a função calcularMedia. 

function calcularMedia (n1,n2,n3) {
    let media = (n1+n2+n3)/3
    if(media >= 7){
         console.log( 'Parabéns, você foi aprovado!')
    }else{
         console.log('Infelizmente você não foi aprovado.')
    }
    return media
}

const resultadoMedia = calcularMedia()

console.log(resultadoMedia)

//Se a média das notas for maior ou igual a 7, a estudante passou!



//volte e refatore a função ordenar

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos

const alunaReprograma = {
    nomeCompleto:'Samila Rodrigues',
    id: 85641,
    turma:'On14',
    apresentacao: () => `Ola, ${alunaReprograma.nomeCompleto} - turma ${alunaReprograma.turma},seu id é ${alunaReprograma.id}`
}

console.log(alunaReprograma.apresentacao())

class AlunasDaReprograma{
    constructor(nomeCompleto,id,turma,...hobbies){
    this.nome = nomeCompleto
    this.id = id
    this.turma = turma
    this.hobbies = hobbies
    }
}

const aluna2 = new AlunasDaReprograma('Victoria',19371373,'reprograma','futebol','musica','chá');

const aluna1 = new AlunasDaReprograma('Hanna', 65471373, 'reprograma' );

console.log(aluna1)
console.log(aluna2);





// Declare um objeto aluna com as propriedades, Nome Completo, turma e ID

let aluna = {nome:'Victoria Bastos', turma:'TodasEmTech5', id:19371373}

//acessando o valor nome completo

console.log(aluna.nome);
console.log(aluna.turma);
console.log(aluna.id);

let animal = new Object();
animal._tipo = 'cachorro'
animal.cor = 'caramelo'
animal.tamanho = 'pequeno'

console.log(animal)

//desestruturando alunas


console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')


// Vamos criar a classe Alunas


console.log('-----------------------------------------------------')
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
 const frutas = new Array('uva','maça', 'pera', 'batata')
 console.log(frutas)
console.log(frutas.indexOf('pera'))
// Acessando elementos pela posição do array


// Informe o tamanho de cada array

// Faça a desestruturação do array



console.log('-----------------------------------------------------')

// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')


console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map