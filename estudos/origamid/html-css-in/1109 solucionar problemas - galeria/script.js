// 1. Quais elementos serão observados/modificados?
// 2. Quais eventos serão observados?
// 3. Quais informações dos elementos/browser precisamos?
// 4. Quais informações dos elementos/browser serão alteradas?

// Resposta 1. Lista de imagens (li img) e a imagem principal.
const imagens = document.querySelectorAll('#galeria li img')

function galeriaTrocar(event) {
    // Resposta 3: Precisamos do url do item clicado.
    const clicada = event.currentTarget
    
    const principal = document.querySelector('#imagem-principal')
    // Resposta 4: Precisamos alterar o url da imagem principal.
    principal.src = clicada.src
    principal.alt = clicada.alt
}

function galeriaClique(imagem) {
    // Resposta 2: Clique em um dos itens da lista.
    // Para cada imagem, adicione o evento...
    imagem.addEventListener('click', galeriaTrocar)
}

imagens.forEach(galeriaClique)


