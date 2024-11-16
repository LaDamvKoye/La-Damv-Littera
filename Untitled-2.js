document.getElementById("meuBotao").onclick = function() {

    alert("sem novidades por enquanto!");

};


// Selecionando todos os grupos de mensagens
document.querySelectorAll('.grupo-mensagens').forEach(grupo => {
    const container = grupo.querySelector('.mensagens-container');
    const nomeInput = grupo.querySelector('.nomeUsuario');
    const mensagemInput = grupo.querySelector('.mensagemTexto');
    const botao = grupo.querySelector('.adicionarMensagem');

    botao.addEventListener('click', () => {
        const nomeUsuario = nomeInput.value.trim();
        const mensagemTexto = mensagemInput.value.trim();

        if (nomeUsuario === '' || mensagemTexto === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Criando a nova mensagem
        const mensagemDiv = document.createElement('div');
        mensagemDiv.classList.add('mensagem');

        const usuarioDiv = document.createElement('div');
        usuarioDiv.classList.add('usuario');
        usuarioDiv.textContent = nomeUsuario;

        const textoDiv = document.createElement('div');
        textoDiv.classList.add('texto');
        textoDiv.textContent = mensagemTexto;

        mensagemDiv.appendChild(usuarioDiv);
        mensagemDiv.appendChild(textoDiv);

        container.appendChild(mensagemDiv);

        nomeInput.value = '';
        mensagemInput.value = '';
    });
});
    



document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      const bookTitle = this.parentElement.dataset.title;
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      
      if (!favorites.includes(bookTitle)) {
        favorites.push(bookTitle);
        this.textContent = "★";
        this.style.color = "gold"; 
      } else {
        const index = favorites.indexOf(bookTitle);
        favorites.splice(index, 1);
        this.textContent = "☆";
        this.style.color = "black"; 
      }
      
      localStorage.setItem("favorites", JSON.stringify(favorites));
    });
  });


  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  document.querySelectorAll(".book").forEach(book => {
    const btn = book.querySelector(".fav-btn");
    if (favorites.includes(book.dataset.title)) {
      btn.textContent = "★";
      btn.style.color = "gold"; 
    }
  });


  







