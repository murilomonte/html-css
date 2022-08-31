# Anotações legais
Quando as coisas não fizrem sentido é só olhar o código fonte do .md
alguns erros de acentuação podem ocorrer :|
***

## ex002
### simbolos
Para mostrar aguns simbolos em HTML, é preciso usar códigos, como por exemplo para mostrar os simbolos < e > é preciso referencialos como &lt; e &gt;
### emojis
```
&#x1F351; &#x1F31A; peach and mew moon face
```
&#x1F351; &#x1F31A; <!--peach and mew moon face--> pera e lua safada do zap <br>
Para adicionar um emoji é preeciso adicionar seu código hexadecimal depois da tag &#x, que pode ser conseguido em <a href="https://emojipedia.org">emojipedia</a>

## ex004
### favicon
para adicionar favicons no site, usa-se &lt;link rel="shortcut icon" href="favicon.ico" type="image/x-icon"&gt;

## ex008b
### formatações
Código fonte / Pré formatado <br>
Usa-se  &lt;code&gt; para mostrar códigos
> O comando <code>document.getElementById('teste')</code> é escrito em javascript

Usa-se &lt;pre&gt; para mostrar textos pré formatados
<pre>
<code>num = int(input('Digite um número'))
if num % 2 == 0:
    print(f'O numero {num} é par')
else:
    print(f'O numero {num} é ímpar')
print('Fim do programa')</code>
</pre>

### citações
Usa-se &lt;q&gt; para mostrar citações (com asas duplas)
> Como diria o pai do amigo do professor: <q>o computador é um burro muito rápido</q>

## ex009
### Listas
Para usar lista é usado &lt;ol&gt; (para lista ordenadas) e &lt;ul&gt; (para listas não ordernadas) sendo usado os parâmetros: <br>
> <code>type=""</code> para escolher o tipo de representação da lista. ex: <code>1, A, a, I, i.</code> (somente listas ordenadas) ou <code>disc, square ou circle.</code> (somente listas não ordenadas) <br>
<code>start=""</code> para escolher em qual posição a lista vai começar (somente ol)

## ex16.1

### gradientes em css

``` css
body {
    /*background-image: radial-gradient(circle, #5b52c9, #d63086, #fed272);*/
    background-image: linear-gradient(-45deg, #5b52c9, #d63086, #fed272);
    background-attachment: fixed;
}
```
## ex017

### fontes

### medidas

Medidas absolutas:
> cm, mm, in, px, pt, pc

Medidas relativas: 
> em, ex, rem, vm, vh, %

Recomendação da W3C:
> px, em

Detalhes importantes
> 16px - tamanho padrão da fonte <br>
1em - tamanho padrão da fonte <br>
2em - dobro do tamanho padrão (e assim por diante)

### Shorthand

É possível usar o atributo 'font' como shorthand. <br>
sintáxe:
```css
font: {font-style} {font-weight} {font-size} {font-family}
```

### Fontes externas

Para usarmos fontes externas no css, usa-se o seguinte trecho de código: <br>
``` css
@font-face {
    font-family: 'London'; /*Nome da fonte importada*/
    src: url(Olondon_.otf), url(OldLondon.ttf); /*Localização*/
    font-weight: normal; /*Tamanho*/
    font-style: normal; /*Estilo*/
    /*
        Tipos de format()
        - opentype (quando é otf);
        - truetype (quando é ttf);
        - embedded-opentype;
        - truetype-aat (Apple Advanced Typography)
        - svg
    */
}
```

## ex022

### backgrounds em css

o elemento background tem os seguintes atributos: <br>

```css
background-color: black;
background-image: url('imagens/wallpaper002.jpg'); 
background-position: center center;
background-repeat: no-repeat; 
background-size: cover; 
background-attachment: fixed; 

```

Que podem ser usados em maneira menor com uma shorthand:

```css
background: {color} {image} {position} {repeat} {size} {attachment};
```
## ex023

### tabelas

hierarquia de uma tabela simples: <br>

<pre>
TABLE = tabela
        TABLE ROW = linha de tabela
            TABLE HEADER = cabeçalho da tabela
            TABLE DATA = dado da tabela
</pre>

## ex025

### formulários

sintáxe:

```html
<form action="" method="">
    <label for=""></label>
    <input type="">
<form>
```
****

### Inputs importantes e algumas caracteristicas:

Para adicionar checkbox de seleção única, é preciso usar: <br>
> <code>input:radio</code> <br>

sendo importante que <code>name=""</code> de ambos os inputs devem ter o mesmo valor

Para adicionar checkbox, usa-se: <br>
> <code>input:checkbox</code>

para adicionar cores, usa-se o input:
> <code>input:color</code>

para adicionar uma barra de avaliação, por exemplo, usa-se o input:
> <code>input:range</code>

para adicionar uma lista de estados (por exemplo), usa-se o elemento/input com a seguinte sintáxe:
```html
<label for=""></label>
<select name="" id="">
    <optgroup label=""> <!-- para fazer um grupo de opções -->
        <option value=""></option>
    </optgroup>
</select>
```
para adicionar uma lista de profissões (por exemplo), usa-se o elemento/input com a seguinte sintáxe:
```html
<label for=""></label>
<input type="text" name="" id="" list="id-da-lista">
<datalist id="id-da-lista">
    <option value=""></option>
</datalist>
```
para adicionar uma caixa de mensagens, usa-se o elemento/input com a seguinte sintáxe:
> ao usar, é recomendado que se use o method post. Pois nele não há limite e bytes
```html
<label for=""></label>
<textarea name="" id="" cols="30" rows="10" placeholder=""></textarea>
```
o comando output serve para devolver resultados de um input automaticamente. usa-se a seguinte sintáxe:
```html
<label for=""></label>
<input type="number" name="" id="" oninput="codigo-ou-funcão-javascript">

<!-- valor onde será mostrado a saída do input -->
<label for=""></label>
<output id=""></output>
```
****

### Observações: <br>

method <code>GET</code> ou <code>POST</code>?
> no method get os dados são acessados pela url, já no post os dados podem ser acessados pelos cabeçalhos

então

<code>GET</code> para quando os dados não forem confidenciais: <br>
> não envia arquivos e tem limite até 3mil bytes

<code>POST</code> para quando os dados forem confidenciais e precisarem de segurança.
> envia arquivos e não tem limite

****

label serve para dar uma relação do título ao input

for = id do input

Name = mais útil  o php e Id = mais útil no javascript

****

### atributos para formulários
Para alguns formulários é possível usar atributos para customizá-los. Exemplos:

para que o input seja necessário para o envio do formulário

> <code>required</code>

quantidade mínima de caracteres para que seja enviado

> <code>minlength=""</code>

quantidade máxima de caracteres para que seja enviado

> <code>maxlength=""</code>

texto que aparecerá dentro do input

> <code>placeholder=""</code>

para que o navegador use a função de autocompletar as informações

> <code>autocomplete=""</code>

número máximo para o input (somente <code>type="number"</code>)

> <code>max=""</code>

a quantidade que será adicionada ao clicar na setinha do input <code>type="number"</code> 

> <code>step=""</code>

valor padrão para o input <code>type="month"</code> (parecido com o <code>placeholder=""</code>)

> <code>value=""</code>

algo como "um padrão para os dados do input" (Estudar mais sobre RegEx)

> <code>partern=""</code>

para que os input de <code>checkbox</code> e <code>radio</code> já tenham algo marcado por padrão

> <code>checked</code>

## ex026

### media queries

media queries servem para mostrar diferentes conteúdos web em telas e formatos direfentes. Por exemplo, o site que é visto no celular tende a ser diferente do visto no computador, assim como a impressão do mesmo.

### media types

sintáxe:
```html
<link rel="stylesheet" href="style.css" media="">
```
nesse exemplo, para fazer um site ligeiramente diferente na impressão, é preciso especificar o atributo <code>media=""</code>:
```html
<link rel="stylesheet" href="style.css" media="print">
```
já no caso de uma versão  para telas convencionais (de todos os tipos), usa-se <code>media="screen"</code>

para fazer com que as declaraçãoes "genéricas" sejam usadas por todos os estilos css, usa-se <code>media="all"</code>

### media features

dentro do atributo <code>media=""</code>, é possível adicionar media fetures, que são caracteristicas para os media types. por exemplo:

```html
<link rel="stylesheet" href="style.css" media="screen and (orientation: landcape)">
```

a declaração <code>media="screen and (orientation: lansdcape)</code> indica que aquele estilo css será usado quando a oritenação do dispositivo for paisagem. Onde também pode ser no modo retrado caso defina <code>orientation</code> como <code>potrait</code>

### devices breakpoints

para tornar sites reposiveis em diferentes tamanhos de tela usa-se o seguinte código css:
```css
@media screen and (min-width: ;) and (min-width: ;) {
    ...
}
```

### tipicos devices breakpoints

eles podem mudar com o tempo, então pesquise antes de usar.

pequenas telas: <code>até 600px</code>

celular: <code>600px até 768px</code>

tablet: <code>768px até 992px</code>

desktop: <code>992px até 1200px</code>

grandes telas: <code>acima de 1200px</code>


### Google icons

Para usar icones que seguem o material design:
https://fonts.google.com/icons?selected=Material+Icons

para ter noção de como usar os icones:
https://developers.google.com/fonts/docs/material_icons