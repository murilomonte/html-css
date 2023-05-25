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

* ``place-content; <align-*> <justify-*>`` \
    é uma shorthand para as propiedades ``aling-content`` e ``justify-content``, respectivamente (sim, as mesmas do flexbox).

### Ítem

* ``grid-column: <start> <end> ;`` \
    Informa onde o item deve, respectivamente, iniciar e onde terminar, de acordo com as linhas do grid.
  * ``span <n>`` \
        É uma forma de dizer quantas colunas o ítem deve ocupar. Pode ser lido como: "expanda N colunas"
