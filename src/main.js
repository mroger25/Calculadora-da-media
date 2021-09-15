// Conversor de moeda real para dólar
function calcCurrency() {
  // Elementos
  const dolarEmReal = document.getElementById("dolarEmReal");
  const realEmDolar = document.getElementById("realEmDolar");
  const dolarEmBit = document.getElementById("dolarEmBit");
  const bitEmDolar = document.getElementById("bitEmDolar");
  const moeda = document.getElementById("moeda");
  const resultText = document.getElementById("result");

  // cotação no dia 13-09-2021
  const cotDolarReal = 5.23;
  const cotDolarBit = 46961.5;

  let resultValue, text;
  if (moeda.value !== "") {
    if (dolarEmReal.checked) {
      resultValue = Number((moeda.value * cotDolarReal).toFixed(2));
      text = "O resultado em real é R$ " + resultValue;
      resultText.innerHTML = text;
    } else if (realEmDolar.checked) {
      resultValue = Number((moeda.value / cotDolarReal).toFixed(2));
      text = "O resultado em dólar é US$ " + resultValue;
      resultText.innerHTML = text;
    } else if (dolarEmBit.checked) {
      resultValue = Number((moeda.value / cotDolarBit).toFixed(6));
      text = "O resultado em bitcoin é ₿ " + resultValue;
      resultText.innerHTML = text;
    } else if (bitEmDolar.checked) {
      resultValue = Number((moeda.value * cotDolarBit).toFixed(2));
      text = "O resultado em dólar é US$ " + resultValue;
      resultText.innerHTML = text;
    } else {
      text = "Selecione qual conversão deseja fazer";
      resultText.innerHTML = text;
    }
  } else {
    text = "Digite o valor a ser convertido";
    resultText.innerHTML = text;
  }

  document.getElementById("clear").addEventListener("click", function () {
    resultText.innerHTML = "";
  });
}

document
  .getElementById("currencyButton")
  .addEventListener("click", calcCurrency);
