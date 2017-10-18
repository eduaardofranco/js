"use strict";

var helloworld = function() {
	return function() {
		return "Hello World";
	}
};
//retorna a função
console.log(helloworld);
//invoca duas vezes pra ter o resultado da função que está dentro da outra função
//retorna o "Hello World"
console.log(helloworld()());


// aplly, call, arguments.....
var getIdade = function(extra){
	//retorna os argumentos acessiveis da função
	//console.log(arguments);
	return this.idade + extra;
}
var pessoa = {
	nome: 'Eduardo',
	sexo: 'Masculino',
	idade: 20,
	getIdade: getIdade
}

console.log(pessoa.getIdade(2));
console.log(getIdade.call(pessoa, 2));
//apply se eu passar parametros a mais que vão ser ignorados
console.log(getIdade.apply(pessoa, [2,3,4,5]));


//Funções Fábrica

var criarPessoa = function(nome,idade){
	return {
		nome: nome,
		idade: idade
	};
};
console.log(criarPessoa('Pedro', 20));
console.log(criarPessoa('Maria', 50));


// Funções construtoras(devem começar com letra maiúscula para lembrar que deve conter o "new")

var Pessoa =  function(nome, idade) {
	this.nome;
	this.idade;
};
console.log(new Pessoa('Pedro', 20));
console.log(new Pessoa('Maria', 30));

var pedro = {};

Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);


// closures -  retornando uma function dentro de outra function

var ola = function() {
	var mensagem = "olá";
	return function(){
		return mensagem;
	}
}

var result = ola();
console.log(result());



var counter = (function() {
	var value = 0;
	return {
		add: function() {
			return ++value;
		}
	}
})();


console.log(counter.value)
console.log(counter.add())
console.log(counter.add())
console.log(counter.add())


//arrays
var carros = ["Ka", "Palio", "Corsa", "Fusca"];

// forEach 
carros.forEach( function(elemento) {
	console.log(elemento)
})

//filter
var carros2 = [];
carros2[0] = {marca: "Ford", modelo: "Ka"};
carros2[1] = {marca: "Fiat", modelo: "Palio"};
carros2[2] = {marca: "Chevrolet", modelo: "Corsa"};
carros2[3] = {marca: "Wolks", modelo: "Fusca"};

//joga o carro com marca = Ford e joga num novo array
var carrosFord = carros2.filter(function(elemento) {
	return elemento.marca === "Ford";
});
console.log(carrosFord);

//verifica se todos os elementos sao da marca ford
var verificaTodos = carros2.every(function(element) {
	return element.marca === "Ford";
});
console.log(verificaTodos);

//verifica se tem algum carro da marca ford
var verificaAlgum = carros2.some(function(element) {
	return element.marca === "Ford";
});
console.log(verificaAlgum);

//deriva um novo array com a marca dos carros
var rMarca = carros2.map(function(element) {
	return element.marca;
});
console.log(rMarca);

//retorna o numero de caracteres de cada modelo
var marcaCh = carros2.map(function(element) {
	return element.modelo.length;
});
console.log(marcaCh);

carros2[0] = {marca: "Ford", modelo: "Ka", preco: 10};
carros2[1] = {marca: "Fiat", modelo: "Palio", preco: 20};
carros2[2] = {marca: "Chevrolet", modelo: "Corsa", preco: 30};
carros2[3] = {marca: "Wolks", modelo: "Fusca", preco: 40};

//com o reduce eu consigo somar os valores, prev é o ultimo elemento
//e cur é o elemento atual
var reducePreco = carros2.reduce(function(prev,cur){
	return prev + cur.preco;
},0);
console.log(reducePreco)

// array de pessoas
var myFriends = [
    { name: "John", gender: "male" },
    { name: "Kate", gender: "female" },
    { name: "Mike", gender: "male" },
    { name: "Sophie", gender: "female" },
    { name: "Richard", gender: "male" },
    { name: "Keith", gender: "male" }
];

// filtro baseado no gênero
var isMale = function(x){
    return x.gender == "male";
}
//retorna todos os homens
console.log(myFriends.filter(isMale)); // John, Mike, Richard, Keith

// aray medicos passo fundo
let medicos = [
    { nome: "ELISANGELA DE QUEVEDO WELTER", telefone: "(54) 3045-4070"},
    { nome: "FLAVIA PEREIRA REGINATTO", telefone: "(54) 3632-1044"},
    { nome: "GILVANA APARECIDA BONELLA", telefone: "(54) 3311-6244"},
    { nome: "JOYCE BENCK UTZIG", telefone: "(54) 3632-2010"},
    { nome: "JUSSARA LUCIA FERRAZ", telefone: "(54) 3311-6377"},
    { nome: "LIGIA MARIA FERNANDES SAGGIN", telefone: "(54) 3311-8038"},
    { nome: "MARGARET PASQUALOTTO OLIANI", telefone: "(54) 3313-4951"},
    { nome: "MARILENE DONATO", telefone: "3313-6452"},
    { nome: "MARINA MUNEROLI MARIN", telefone: "(54) 3632-1044"},
    { nome: "RODRIGO MALHEIROS MENDONCA", telefone: "(54) 3312-3977"},
    { nome: "SAIONARA ZAGO", telefone: "(54) 3311-3326"},
    { nome: "SANDRA JOVINA MALHEIROS MENDONCA", telefone: "(54) 3312-3977"}
];
// pegar um médico randomicamente
Array.prototype.medicoRandom = function () {
    return this[Math.floor(Math.random() * this.length)]
}
let resultado = medicos.medicoRandom();
console.log(resultado);


// operadores #12

//comparando se dois objetos são iguais
var x = {};
var y = {};
console.log( x == y ? 'x == y' : 'x != y' );

// função que retorna um número aleatório num inteervalo passado por parametro
var generateSerial = function(max) {
	//se o max vir diferente de um número eu atribuo 1000 pra ele
	//1º forma
	// if(!max) {
	// 	max = 1000;
	// }
	//2º forma - se o max vir diferente de zero atribui 1000 pra ele, se ele vir com um valor passa esse valor pro max
	max = max || 1000;
	return Math.floor(Math.random() * max);
}
console.log(generateSerial(1000));
console.log(generateSerial());

//cria objeto pessoa
var Pessoa = function(nome,idade) {
	this.nome = nome;
	this.idade = idade;
}
//cria um novo objeto com instancia de pessoa
var pedro = new Pessoa('Pedro', 20);
console.log(pedro);
// compara se pedro é um instancia de pessoa
console.log(pedro instanceof Pessoa);
// compara se pedro é um instancia de Date
console.log(pedro instanceof Date);
// verifica se tem 'nome' no objeto pedro
console.log("nome" in pedro);
// verifica se tem 'peso' no objeto pedro
console.log("peso" in pedro);
//deleta a idade
delete pedro.idade;
//verifica se tem idade no objeto pedro
console.log("idade" in pedro);

//cria um objeto pessoa2
var pessoa2 = function(nome, email){
    return {
        nome : nome,
        email: email,
        fala: function(){
            console.log("Olá, meu nome é "+this.nome+" e meu email é "+this.email);
        }
    };
};
//Deste modo, para obter uma pessoa, basta chamar a função acima:

//cria um novo objeto leo estendido do objeto pessoa
var leo = pessoa2("Leonardo", "leonardo.wolter@caelum.com.br");
//chama a função fala() que está dentro do objeto pessoa
leo.fala(); // Olá, meu nome é Leonardo e meu email é leonardo.wolter@caelum.com.br

/** statements */

//cria um objeto pra definir o erro
var HackerError = function(message) {
	this.message = message;
	this.name = "HackerErro"
}

var toHackText = function(text) {
	//verifica se o tipo de entrada é string se não for dispara o erro 
	if (typeof text !== "string") throw new HackerError("Invalid Type");
}
try {
	toHackText(10);
} catch (error) {
	console.log('Error: '+ error.message);
}
//HERANÇA

var homem = {
	sexo: 'Masculino'
};
var joao = {
	nome: "João",
	idade: 20,
	//seta o proto homem pro joão
	__proto__: homem
};
var pedro = {
	nome: "Pedro",
	idade: 10
};
//seta o  proto homem pro pedro
Object.setPrototypeOf(pedro, homem);

console.log(pedro.nome +': ' +pedro.sexo);
console.log(joao.nome +': ' +joao.sexo);
/** __proto__ não é padrão e pode não funcionar em algumas engines */

var claudio = {
	nome: 'Claudio',
	idade: 13,
	sexo: 'Feminino'
}
Object.setPrototypeOf(claudio, homem);

console.log(claudio.nome +": " +claudio.sexo); // Claudio: Feminino
//vai retornar feminino pq primeiro é verificado se existe a propriedade sexo no objeto,
//se existir ele exibe senão vai procurar no prototype

//deleta o sexo 
delete claudio.sexo;

//retorna as propriedades do objeto
console.log(Object.keys(claudio));

//percorre as propriedades do objeto e imprimi
for( let property in joao) {
	//verifica se a propriedade faz parte ou não do objeto
	if (!joao.hasOwnProperty(property)) continue;
	console.log(property);
}
//no for in vai trazer o sexo pq ele percorre também os proto's do objeto

function Lutador(){
    this.attackPlayer = function(){
    return true;
    }
} 

function Habilidades(){
    this.esquivaPlayer = function(){
        console.log("esquivou");
    }
}

//fazendo Lutador herdar de Habilidades
Lutador.prototype = new Habilidades();
let lutador1 = new Lutador();

//verificando
console.log(lutador1 instanceof Lutador); // true - lutador1 herdou Lutador
console.log(lutador1 instanceof Habilidades); // true - lutador1 herdou habilidades

//ARROW FUNCTIONS

//parametros default
const multiply = (x, y = 1) => x * y
console.log(multiply(4,2)) //8;
console.log(multiply(4)); //4

const sum = (...numbers) => 
  numbers.reduce((acc, current) => acc + current,0)

console.log(sum(1,2,3,4,5)); //15