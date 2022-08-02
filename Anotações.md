# Anotações legais
Quando as coisas não fizrem sentido é só olhar o código fonte do .md
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