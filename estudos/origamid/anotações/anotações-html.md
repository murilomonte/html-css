# Anotações HTML

Essas são minhas anotações pontuais sobre alguns assuntos que irei me aprofundar daqui em diante sobre HTML.

(Anteriormente havia um arquivo markdown para as anotações, porém baseado somente no curso do curso em vídeo, disponível [aqui](/estudos/curso-em-video/anotacoes-cev.md).)

## Disclaimer

Anoto as coisas do jeito que entendo. Caso tenha algo errado, por favor, abra uma issue informando o problema. Irei agradecer muito :)

## Sumário

* [Semântica](#semântica)
* [Acessibilidade](#acessibilidade)
* [Formulários](#formulários)
  * [Input](#input)
    * [#Atributos](#atributos)

## Semântica

No html existem diversas tags que marcam pontos de referencia no conteúdo, conhecidas como **landmarks**. Visualmente elas têm o mesmo efeito que uma div, porém, dão sentido ao conteúdo.

Temos como exemplo:

* ``<main>`` \
    Indica o conteúdo principal da página

* ``<nav>`` \
    Indica onde fica a navegação do site.

* ``<section>`` \
    Representa uma seção genérica de conteúdo.

* ``<article>`` \
    Representa uma seção indepentente do conteúdo da página. Onde pode ser redistribuído de indepentente ou reutilizável. OU seja, não é um conteúdo ao qual não precisa do restante para fazer sentido.

* ``<aside>`` \
    Indica uma seção não necessáriamente relacionada ao conteúdo principal. Geralmente utilizado como uma aba lateral.

* ``<footer>`` \
    Indica o rodapé do site.

* ``<header>`` \
    Indica o cabeçalho

## Acessibilidade

todo

* ``aria-label=""`` \
    É uma propiedade que define um rótulo para um elemento interativo quando não há texto visível pelo DOM, sendo utilizado por leitores de tela. Fonte: [MDN](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA/Attributes/aria-label)

* ``aria-labelledby=""`` \
    Segue a mesma premissa da propiedade ``aria-label``, porém permite referenciar outro elementos como um rótulo através de um ``id`` pré-estabelecido. Ex:

    ```html
    <article aria-labelledby="titulo">
        <h2 id="titulo">Título</h2>
        <p>Parágrafo</p>
    </article>
    ```

## Formulários

### Input

Tipos de input muito úteis.

* ``input:checkbox`` \
    Utilizado para ter uma checkbox no formulário. Útil ao ter um termos de privacidade que precisa ser aceito, por exemplo.

* ``input:radio`` \
    Utilizado para ter um botões do tipo radio, onde o usuário só poderá selecionar um por vez. \
    Obs: para que somente um seja selecionado, é preciso que os dois tenham o mesmo atributo ``name=""``.

* ``input:select`` \
    Utilizado para criar uma caixa de opções. Tendo a seguinte estrutura:

    ```html
    <select name="" id="">
        <!-- Onde a tag option é referente a uma opção dentro do campo select -->
        <option value="">Opção</option>
    </select>
    ```

* ``input:textarea`` \
    É uma área de texto onde pode ser colocado texto com mais de uma linha. Útil ao fazer áreas para **envio de mensagens**.

#### Atributos

São atributos que indicam um comportamento específico de um **input**

* ``disabled`` \
    Indica que o input deve ser desabilitado. Muito útil quando um campo só deve ser preenchido após outro. Essa intereação pode ser feita com javascript.
