# Anotações CSS

Essas são minhas anotações pontuais sobre alguns assuntos que irei me aprofundar daqui em diante sobreCSS.

(Anteriormente havia um arquivo markdown para as anotações, porém baseado somente no curso do curso em vídeo, disponível [aqui](/estudos/curso-em-video/anotacoes-cev.md).)

## Disclaimer

Anoto as coisas do jeito que entendo. Caso tenha algo errado, por favor, abra uma issue informando o problema. Irei agradecer muito :)

## Sumário

* [Descibertas](#decobertas-css)
* [Display](#display)
* [Imagens](#imagens)
  * [Informações](#informações-úteis)
* [Grid Layout](#grid-layout)
  * [Informações Úteis](#informações-úteis)
    * [Container](#container)
    * [Item](#item)
* [Position](#position)
  * [Manipulação de itens](#manipulação-de-itens)
    * [Observações](#observações)
* [Unidades](#unidades)
* [Background](#background)
* [Pseudo Classes](#pseudo-classes)
  * [Estados](#estados)
  * [Seletores](#seletores)
* [Pseudo Elementos](#pseudo-elementos)
* [Media Queries](#media-queries)
  * [Modo claro e escuro](#modo-claro-e-escuro)
  * [Responsividade](#responsividade)
    * [Meta Viewport](#meta-viewport)
    * [Breakpoints](#breakpoints)
    * [Grid Responsivo](#grid-responsivo)
      * [object-fit](#object-fit)

## Decobertas css

"Descobertas" que fiz durante meus estudos/pesquisas, incluindo funções, curiosidades etc.

* ``text-transform: <valor>``\
    Usado para transformar um texto de um elemento. Podendo, por exemplo, transformar um texto em letras maiúsculas, utilizando o valor ``uppercase``.

* ``cursor: pointer``\
    Faz com que o cursor vire uma "mãozinha" ao passar por cima do elemento.

## display

Todo elemento pode receber a propiedade ``display``, que indica como o elemento deve ser tratado, seja ele na forma de bloco ou inline.

Há algumas formas de tratar o elemento além das convencionais ``block``, ``inline`` e ``none``. Também é possível utilizar as seguintes:

* ``inline-block`` \
Quando um elemento recebe essa propiedade, ele se torna um elemento **inline**, porém, com características do box model, como **margin**, **padding**, entre outras.

## Imagens

### Informações úteis

* ``display: block;`` \
    Por padrão uma imagem é um ``inline-block``. O que por padrão deixa o elemento com uma margem.

* ``max-width: 100%;`` \
    Utiliza-se essa propiedade para que a imagem não creça além do elemento pai.

## Grid layout

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

### Item

* ``grid-column: <start> <end> ;`` \
    Informa onde o item deve, respectivamente, iniciar e onde terminar, de acordo com as linhas do grid.
  * ``span <n>`` \
        É uma forma de dizer quantas colunas o ítem deve ocupar. Pode ser lido como: "expanda N colunas"

* ``place-self: <align-content> <justify-content>`` \
    Alinha o conteúdo de uma caixa da grid verticalmente e horizontalmente, respectivamente; E é uma shorthand para as propiedades ``align-self`` e ``justify-self``, respectivamente.

## Position

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

## Unidades

Existem diversas unidades de medida no css. Dentre elas temos:

* ``px``

* ``rem`` \
    É uma medida que é relativa a raiz do documento, ou seja, o ``html``, que, na maioria dos browser é igual a ``16px``. Mas, **por que usar ``rem``?** Utilizando ``rem``, os elementos irão respeitar o tamamho da fonte definido pelo o usuário.

* ``em`` \
    É uma medida relativa ao tamamnho do elemento pai.

## Background

Essa propiedade é usada para definir o fundo de um elemento, como imagem, cor, tamanho etc. Temos as seguintes propiedades: (algumas auto explicativas)

* ``background-color: <cor>;``

* ``background-image: <>;`` \
    Utilzado para definir imagens de fundo, com: ``url()`` ou gradientes, seguindo a seguinte sintáxe:
  * ``linear-gradient(<direção>, <primeira cor>, <segunda>, ...)`` \
    A direção poderá ser omitida ou representada por ``deg`` (graus) e ``to right``, ``to left``.

  * ``radial-gradient(<estilo>, <primeira cor>, <segunda>, ...)`` \
    Seguindo o mesmo conceito de um gradiente linear.

* ``background-repeat: <>;`` \
    Tendo como valor ``repeat`` e ``no-repeat``.

* ``background-attachment: <>;`` \
    Indica se o fundo será fixo ou irá se mover de acordo com o elemento. Valores possíveis:
  * ``fixed`` \
    Indica que o fundo será fixo em relação a viewport, e não irá respeitar a rolagem da página.

  * ``scroll`` \
    Indica que o fundo é fixo em relação ao própio elemento, e assim irá acompanhar a rolagem da página.

  * ``local`` \
    Indica que o fundo é fixo em relação ao conteúdo do elemento, ou seja, irá rolar conforme o conteúdo, não com a página.

* ``background-size: <>;`` \
    Aumenta o tamanho da imagem. Tendo os possíveis valores:
  * ``contain`` \
    Aumenta o fundo para ocupar 100% do elemento pai.

  * ``cover`` \
    Corta a imagem para se adequar ao conteúdo.

  * ``px, em, rem...`` \
    Qualquer unidade de valor é aceito.

* ``background-positon: <x> <y>;`` \
    Definie a posição inicial da imagem nos eixos x e y.

## Pseudo classes

todo

### Estados

Permite definir o estilo de diferentes estados do html. Ex:

* ```:hover``` \
    Para quando o elemento for sobreposto pelo cursor.

* ```:focus``` \
    Para quando o elemento for posto em foco (utilizando tab)

* ```:active``` \
    Quando o elemento for clicado.

* ```:visited``` \
    Para links que já foram visitados

### Seletores

* ```:first-child``` \
    Para selecionar o primeiro filho de um elemento.

* ```:last-child``` \
    Para selecionar o último filho de um elemento.

* ```:nth-child(<numero>)``` \
    Para selecionar um filho específico. Aceitando os valores:
  * ``even`` \
    pares
  * ``odd``\
    ímpares
  * ``3n`` \
    De 3 em 3 números (podendo ser colocado outos valores.)

* ``[Atributo]`` \
    Seleciona somente os elementos que tiverem o atributo especificado\
    **Ex:**

    ```css
    [required] {
        background-color: tomato;
    }
    ```

    Selecionando somente os inputs com required e pintando-os na cor tomato.

    **Ex2:**

    ```css
    [href^="#"] {
        background-color: aqua;
    }
    ```

    Isso diz que todos os elementos com o ``href`` que começarem com um ``#`` (**utiliza-se o ``^`` para indicar o começo e ``$`` para o fim**) terão o fundo pintado de aqua

* ``+`` \
    O mais é utilizado para selecionar apenas elementos que são seguidos por outros. \
    **Ex:**

    ```css
    p + p {
        margin-top: 20px;
    }
    ```

    Isso diz para **selecionar todos os ``p`` que são seguidos por outros ``p``**

## Pseudo elementos

todo

* ```::before``` \
    Usado para criar elementos html antes de outros com base no seletor utilizando css.

* ```::after``` \
    Para criar elementos depois.

* ```::first-letter``` \
    Para estilizar a primeira letra de um conteúdo.

## Media queries

Uma media querie é uma função que só permite que o código dentro dela seja executado caso a condição seja verdadeira. Tendo a seguinte sintáxe:

```css
@media (  ) { }
```

### Modo claro e escuro

É possível definir um estilo para o modo claro e escuro do site, com base na preferencia do sistema do usuário, utilizando a propiedade ``prefers-color-scheme``

```css
@media (prefers-color-scheme: dark) {
    /* ... */
}
```

### Responsividade

Para tornar uma página responsiva é preciso

#### Meta Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

A meta tag viewport é uma tag muito útil que padroniza o tamanho dos elementos em difentes telas, ou seja, mesmo que visto em uma tela de alta densidade, ela parecerá a mesma na tela de um celular.

#### Breakpoints

São pontos onde a tela deverá quebrada para ter outra forma. Exemplos:

> O conteúdo só será executado caso a largura da tela seja **menor que 500px**

```css
@media (min-width: 600px) { }
```

> O conteúdo só será executado caso a largura da tela seja **maior que 600px**

```css
@media (min-width: 800px) and (max-width: 900px) {}
```

> O conteúdo só será executado caso seja a largura da tela seja **entre 800px e 900px**

#### Grid responsivo

Para tornar responsivo um container grid, podemos utilizar as seguinte tecnicas:

* Utilizando ``auto-fit``

    ```css
    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    ```

    Onde ``auto-fit`` fará com que seja criado o máximo de colunas possíveis, porém, respeitando o valor seguinte: ``minmax(300px, 1fr)`` que indica que uma coluna terá de ter no mínimo 300px e, se tiver espaço, deverá distribuir igualmente o espaço restante.

##### object-fit

``object-fit`` é um atributo que define que o conteúdo seja ajustado sem distorções conforme a largura e altura do elemento pai. Sendo muito útil com imagens, tendo um efeito parecido ao ``background-size``
