# Anotações javascipt

Essas são minhas anotações pontuais sobre alguns assuntos que irei me aprofundar daqui em diante sobre javascipt.

## Disclaimer

Anoto as coisas do jeito que entendo. Caso tenha algo errado, por favor, abra uma issue informando o problema. Irei agradecer muito :)

## Sumário

* [Descobertas](#decobertas-javascipt)
* [Manipulação de DOM](#manipulação-de-dom)
  * [Antes de pôr a mão na massa](#antes-de-pôr-a-mão-na-massa)
  * [Selecionando um elemento](#selecionando-um-elemento)
  * [O que é possível fazer](#o-que-é-possível-fazer)
* [Objetos](#objetos)
  * [Métodos em objetos](#método-em-objetos)
* [Eventos](#eventos)
  * [Tipos de evento](#tipos-de-evento)
  * [Informações de um evento](#informações-de-um-evento)
* [Loops](#loops)
  * [forEach](#foreach)
* [Array](#array)
  * [Métodos em array](#métodos-em-array)

## Decobertas javascipt

"Descobertas" que fiz durante meus estudos/pesquisas, incluindo funções, curiosidades etc.

* ```document.location.href``` \
    Retorna a url do documento. Útil para fazer comparações.

* ```element.setAtributte()``` \
    Serve para selecionar um atributo de um elemento. Útil quando não for possível conseguir acessar o atributo de outras maneiras.

## Manipulação de DOM

### Antes de pôr a mão na massa

Aqui estão perguntas importantes antes de começar a fazer qualquer coisa. Isso ajuda a trabalhar de maneira consciente, principalmente no inicio quando tudo é muito abstrato.

1. Quais elementos serão observados/modificados?

2. Quais eventos serão observados?

3. Quais informações dos elementos/browser precisamos?

4. Quais informações dos elementos/browser serão alteradas?

**Exemplo:**

Ao criar galeria, podemos utilizar as seguintes perguntas:

1. Lista de imagens (li img) e a imagem principal.
    * Como selecionar uma lista de itens?
    * Como selecionar um item?

2. Clique em um dos itens da lista.
    * Como adicionar um evento de click a uma lista de itens?

3. Precisamos do url do item clicado.
    * Como pegar o url de um elemento?

4. Precisamos alterar o url da imagem principal.
    * Como alterar o url de um elemento?

### Selecionando um elemento

Para selecionar um elemento, é possível utilizar:

* ```querySelector()```\
    Seleciona o primeiro elemento correspondente no documento. Exemplo:

    ```js
    let variavel = document.querySelector(/*
        Pela tag -> 'nav'
        Pelo ID -> '#navegacao'
        pela classe -> '.navegacao'
        Pelo filho -> '.navegacao a'
        (A tag 'a' dentro do pai '.navegacao')
    */);
    ```

  * ```.querySelectorAll()``` \
    Seleciona todos os elementos correspondentes no documento.

### O que é possível fazer

Após selecionar o elemento, é possível manipulá-lo com alguns métodos e funções. Seguindo a sintáxe: ```elemento.metodo```ou ```elemento.funcao()```

#### Utilizando métodos

* ```.innerHTML``` \
    Retorna o conteúdo dentro da tag, como o texto.

* ```.href``` \
    Retorna o ```href```de um link.

* ```.style``` \
    Possibilita modificar qualquer estilo css do elemento.

#### Utilizando funções

* ```.remove()``` \
    Remove o elemento.

* ```.classList```
  * ```.classList.add('<classe>')``` \
    Adiciona uma classe a um elemento.

  * ```.classList.toggle('<classe>')``` \
    Verifica se a classe existe no elemento. Caso exista, remove, caso contrário, a adiciona.

## Objetos

Objetos são formas de "organizar variáveis" utilizando adjetivos/propriedades para guardar vavlores (revisar). Exemplo:

```js
const livro = {
    nome: "O senhor dos anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien"
}
```

Para acessar quaisquer prorpriedades, utiliza-se ```objeto.propriedade```. Exemplo:

```js
console.log(livro.nome)
/* >> "O senhor dos anéis" */
```

### Método em objetos

Métodos são funções associadas a um objeto. Exemplo:

```js
const carro = {
    marca: "Fiat",
    modelo: "500",
    ano: 2015,
    ligar () {
        console.log('Ligou')
    }
}
```

O método ```ligar```só pode ser acessado através do objeto, como:

```js
carro.ligar()
/* >> Ligou */
```

#### Dica

Para acessar uma propriedade estando dentro de um objeto, usa-se ```this```. Exemplo:

```js
const carro = {
    marca: "Fiat",
    modelo: "500",
    ano: 2015,
    apresentacao () {
        console.log(this.marca, this.modelo)
    }
}

carro.apresentacao()
/*>> Fiat 500 */
```

## Eventos

É possível ativar funções que serão executadas quando um usuário realizar alguma ação no site. Exemplo:

```js
/* > Pega o elemento */ 
const ativar = document.querySelector('.ativar')

/* > Cria a função */
function ativaAoClicar() {
    console.log('Clicou em:', ativar)
}

/* > Chama a função quando houver um click no elemento */
/* > Utilizar () retorna o resultado da função, que no caso será undefined */
ativar.addEventListener('click', ativaAoClicar)
```

### Tipos de evento

Existem muitos tipos de evento, como:

* ```mousemove``` \
    Aciona quando o mouse é movido na tela.

* ```scroll``` \
    Aciona quando o scroll é utilizado.

### Informações de um evento

Ao executar, o evento passa um objeto como argumento para a função. Sabendo disso, através de métodos e propriedades podemos sabe, informações do evento, como: seu tipo, coordenadas, etc. Exemplo:

```js
...

function ativaAoClicar(event) {
    console.log('Coordenada no eixo x:', event.x)
    console.log('Momento em que aconteceu:', event.timeStamp)
}

ativar.addEventListener('click', ativaAoClicar)
```

Outros métodos e propriedades:

* ```.currentTarget``` \
    Retorna o elemento do evento.

## Loops

### forEach

Esse método permite percorrer de maneira fácil por todos os itens, index, etc de um array. Exemplo:

```js
let array = [
    'HTML',
    'CSS',
    'Javascript',
]

function imprimir(item, indice) {
    console.log(`${item} no indice ${indice}`)
}

/* Chamamos o método e passamos a função como argumento */
array.forEach(imprimir)
```

## Array

### Métodos em array

* ```.pop()``` \
    Remove o último item de um array.

* ```.shift()``` \
    Remove o primeiro item.

* ```.length()``` \
    Retorna o tamanho do array.

* ```.push()``` \
    Adiciona um item ao final.
