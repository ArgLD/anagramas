const alphabetize = (a) => {
  return a.toLowerCase().split("").sort().join("").trim();
}

const getAnagramsOf = (typedText) => {
  let output = [];
  for (let i = 0; i < palavras.length; i++) {
    if (alphabetize(typedText) === alphabetize(palavras[i])) {
      output.push(palavras[i]);
    }
  }
  return output.join(" ");
}

// BOTÃO ENCONTRAR ANAGRAMA
const button = document.getElementById("btnFind");

button.addEventListener("click", () => {
  if (input.value.length < 1) {
      window.location.reload();
  }

  let typedText = document.getElementById("input").value;
  const outputanagram = document.getElementById("anagramas");
  const output = document.createElement("p");
  output.classList.add("words");
  const outputs = document.getElementsByClassName("words");
    if (outputs.length < 1) {
        output.innerText = getAnagramsOf(typedText);
    }
    
  outputanagram.appendChild(output);
});

// BOTÃO LIMPAR PALAVRA / ATUALIZAR PÁGINA
clear = document.getElementById("btnClear");
clear.addEventListener("click", () => {
  window.location.reload();
});