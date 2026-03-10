      let button = document.getElementById("hamburguer");
      const menu = document.getElementById("menu");

      button.addEventListener("click", function () {
        menu.classList.toggle("ativa");
      });

      const btnSobre = document.getElementById("btn-sobre");
      const textoExtra = document.getElementById("texto-extra");

      btnSobre.addEventListener("click", function () {
        textoExtra.classList.toggle("escondido");

        if (textoExtra.classList.contains("escondido")) {
            btnSobre.textContent = "Ver mais";
        } else {
            btnSobre.textContent = "Ver menos";
        }
      });
