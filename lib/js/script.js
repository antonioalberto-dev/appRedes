document.querySelector("input").addEventListener("input", function () {
  const txt = document.querySelector("input").value;
  let result = document.querySelector(".result");

  let primeiro = parseInt(txt.substring(0, 3));
  let segundo = parseInt(txt.substring(4, 7));
  let terceiro = parseInt(txt.substring(8, 10));
  let quarto = parseInt(txt.substring(11, 13));

  result.innerHTML = "";

  let classeIP = verificarClasse(primeiro);
  let mascaraIP = mostrarMascara(classeIP);

  result.innerHTML += `
    <p>Classe: ${classeIP}</p>
    <p>Mascara: ${mascaraIP}</p>
    <p>Endereco de Rede: </p>
    <p>Endereco de Broadcast: </p>
    <!-- <p>Binario: </p> -->
    `;

  // funcoes

  function verificarClasse(primeiro) {
    let classe =
      primeiro < 126
        ? "A"
        : primeiro >= 128 && primeiro <= 191
        ? "B"
        : primeiro >= 192 && primeiro <= 223
        ? "C"
        : "Especial D ou E";
    return classe;
  }

  function mostrarMascara(classe) {
    let mascara;
    if (classe === "A") {
      mascara = "255.0.0.0";
    } else {
      if (classe === "B") {
        mascara = "255.255.0.0";
      } else {
        if (classe === "C") {
          mascara = "255.255.255.0";
        } else {
          mascara = "Classes especiais";
        }
      }
    }
    return mascara;
  }

  // function mostrarEndRede(endereco, classe) {
  //   let rede;
  //   if(classe === A){

  //   }
  // }
});
