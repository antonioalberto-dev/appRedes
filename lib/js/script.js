"use strict";

const $form = document.querySelector("form");

const $ip = document.getElementById("ip");
const $mascara = document.getElementById("mascara");
const $mascaraCIDR = document.getElementById("mascaraCIDR");

$form.addEventListener("submit", function (e) {
  e.preventDefault();

  limparCampos();

  try {
    if (!!$mascaraCIDR.value) {
      $mascara.value = notacaoCIDR($mascaraCIDR.value);
    }
    const classe = verificarClasse($ip.value);
    const mascara = verificarMascara($mascara.value, classe);
    const rede = verificarRede($ip.value, $mascara.value);
    const broadcast = verificarBroadcast($ip.value, $mascara.value);
    const host = verificarHost($mascara.value);
    const subrede = verificarSubrede(classe, $mascara.value);

    /* section result */

    const $secaoDeEntrada = document.querySelector(".box");
    $secaoDeEntrada.insertAdjacentHTML(
      "beforeend",
      `<div class="result"></div>`
    );

    /* card */

    const $secaoResultado = document.querySelector(".result");

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard("Classe", classe)
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard(
        "IP",
        ip.value,
        converterDecimalParaBinarioQuatroOctetos($ip.value)
      )
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard(
        "Endereço de Rede",
        rede,
        converterDecimalParaBinarioQuatroOctetos(rede)
      )
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard(
        "Endereço de Broadcast",
        broadcast,
        converterDecimalParaBinarioQuatroOctetos(broadcast)
      )
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard("Binario", converterDecimalParaBinarioQuatroOctetos($ip.value))
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard(
        "Máscara",
        $mascara.value,
        converterDecimalParaBinarioQuatroOctetos($mascara.value)
      )
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard("Quantidade de rede/sub-rede", subrede)
    );

    $secaoResultado.insertAdjacentHTML(
      "beforeend",
      criarCard("Quantidade de host por rede/sub-rede", host)
    );
  } catch (error) {
    // document.querySelector("body").insertAdjacentHTML(
    //   "beforeend",
    //   `<div class="result alert warning">
    //   <p>Verifique os valores inseridos</p>
    // </div>`
    // );
    alert("Verifique os valores inseridos!");
  }
});

function limparCampos() {
  document.querySelector(".result")
    ? document.querySelector(".result").remove()
    : "";
}

function criarCard(texto, valor1, valor2) {
  if (!!valor2) {
    return `
              <p><strong>${texto}: </strong>${valor1}</p>
            `;
  } else {
    return `
              <p><strong>${texto}: </strong>${valor1}</p>
            `;
  }
}
