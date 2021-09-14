// Conversor de moeda real para dólar
function calcCurrency() {
  // Elementos
  const dolarEmReal = document.getElementById("dolarEmReal");
  const realEmDolar = document.getElementById("realEmDolar");
  const moeda = document.getElementById("moeda");
  const resultText = document.getElementById("result");

  const cot = 5.23; // cotação do dólar no dia 13-09-2021

  if (moeda.value !== "") {
    let resultValue, text;
    if (dolarEmReal.checked) {
      resultValue = Number((moeda.value * cot).toFixed(2));
      text = "O resultado em real é R$ " + resultValue;
      resultText.innerHTML = text;
    } else if (realEmDolar.checked) {
      resultValue = Number((moeda.value / cot).toFixed(2));
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
