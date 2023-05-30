# Anotações brabas

Essas são minhas anotações pontuais sobre alguns assuntos que irei me aprofundar daqui em diante sobre HTML e CSS.

(Anteriormente havia um arquivo markdown para as anotações, porém baseado somente no curso do curso em vídeo, disponível [aqui](/estudos/curso-em-video/anotacoes-cev.md).)

## Disclaimer

Anoto as coisas do jeito que entendo. Caso tenha algo errado, por favor, abra uma issue informando o problema. Irei agradecer muito :)

## Sumário

ToDo

## HTML

Assuntos relacionados ao HTML. \
WIP

## CSS

Assuntos relacionados ao CSS

## Decobertas css

"Descobertas" que fiz durante meus estudos/pesquisas, incluindo funções, curiosidades etc.

* ``text-transform: <valor>``\
    Usado para transformar um texto de um elemento. Podendo, por exemplo, transformar um texto em letras maiúsculas, utilizando o valor ``uppercase``.

## display

Todo elemento pode receber a propiedade ``display``, que indica como o elemento deve ser tratado, seja ele na forma de bloco ou inline.

Há algumas formas de tratar o elemento além das convencionais ``block``, ``inline`` e ``none``. Também é possível utilizar as seguintes:

* ``inline-block`` \
Quando um elemento recebe essa propiedade, ele se torna um elemento **inline**, porém, com características do box model, como **margin**, **padding**, entre outras.

## img

### Informações úteis

* ``display: block;`` \
    Por padrão uma imagem é um ``inline-block``. O que por padrão deixa o elemento com uma margem.

* ``max-width: 100%;`` \
    Utiliza-se essa propiedade para que a imagem não creça além do elemento pai.

## grid

### Container

Guias rápidos (sempre bom consultar): [CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/), [Origamid](https://origamid.com/projetos/grid/) 

* ``display: grid;`` \
    informa que o container irá utilizar o grid layout.

* ``grid-template-columns: ;`` \
    Informa quantas colunas terá o grid, ex: \

    ```css
    container {
        grid-template-columns: 20px 20px;
        /* informa que terá duas colunas de 20 pixels */
    }
    ```

* ``place-content; <align-content> <justify-content>;`` \
    Alinha a grid no container externo verticalmente e horizontalmente, respectivamente; E é uma shorthand para as propiedades ``aling-content`` e ``justify-content``, respectivamente (sim, as mesmas do flexbox).

* ``place-items: <align-content> <justify-content>;`` \
    Alinha os ítems dentro da grid verticalmente e horizontalmente, respectivamente; E é uma shorthand para as propiedades ``align-items`` e ``justify-content``, respectivamente.

### item

* ``grid-column: <start> <end> ;`` \
    Informa onde o item deve, respectivamente, iniciar e onde terminar, de acordo com as linhas do grid.
  * ``span <n>`` \
        É uma forma de dizer quantas colunas o ítem deve ocupar. Pode ser lido como: "expanda N colunas"

* ``place-self: <align-content> <justify-content>`` \
    Alinha o conteúdo de uma caixa da grid verticalmente e horizontalmente, respectivamente; E é uma shorthand para as propiedades ``align-self`` e ``justify-self``, respectivamente.

## Position (revisar)

A propiedade position tem a função de manipular o fluxo pdrão dos elementos em um documento. Por padrão um elemento é definido como ``static``, mas pode ser definido com outros atributos, como:

* ``fixed`` \
    Torna o elemento **fixo na tela** e relativo ao elemento pai (por padrão, o  ``<body>`` *revisar). **Obs:** Útil em pop-up de cookies, por exemplo.

* ``relative`` \
    Remove o elemento do fluxo e torna-o relativo a posição inicial do elemento. **Obs**: mesmo movendo o elemento, o espaço inicial é ocupado.

* ``absolute`` \
    Remove o elemento do fluxo inicial e torna-o relativo ao ``<body>``. **obs:** para torná-lo relativo ao elemento pai, é preciso adicionar o atributo ``position: relative;`` no elemento pai.

### Manipulação de itens

Um ítem com o atributo ``position`` customizado pode ser manipulado pelos seguintes atrbutos:

* ``top: <valor>; bottom: <valor>;`` \
    define a posição refente ao topo e base do elemento pai.

* ``left: <valor>; right: <valor>;`` \
    definte a posição referente a esquerda e direita do elemento pai.

#### Observações

É preciso omitir um dos atributos (``top`` ou ``bottom``) a depender do conteúdo. Ex: Caso seja um pop-up de cookie, é interessante que seja omitido o atributo ``top`` para que o pop-up fique alinhado em baixo.
