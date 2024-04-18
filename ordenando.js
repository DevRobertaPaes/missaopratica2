// Função para ordenar uma matriz usando o algoritmo Bubble Sort
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca os elementos se estiverem fora de ordem
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// Função para ordenar uma matriz usando o algoritmo Selection Sort
function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // Troca os elementos se estiverem fora de ordem
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

// Função para ordenar uma matriz usando o algoritmo Quick Sort
function quickSort(arr, left, right) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      // Troca os elementos se estiverem fora de ordem
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // Troca o pivô para sua posição correta
  const temp = arr[i + 1];
  arr[i + 1] = arr[right];
  arr[right] = temp;
  return i + 1;
}

const inputValorEsquerda = document.getElementById("valorEsquerda");
const inputValorDireita = document.getElementById("valorDireita");
const listaValoresEsquerda = document.getElementById("valoresEsquerda");
const listaValoresDireita = document.getElementById("valoresDireita");
const selectAlgoritmoEsquerda = document.getElementById("algoritmoEsquerda");
const selectAlgoritmoDireita = document.getElementById("algoritmoDireita");
const btnAdicionarEsquerda = document.getElementById("btnAdicionarEsquerda");
const btnAdicionarDireita = document.getElementById("btnAdicionarDireita");
const btnOrdenarEsquerda = document.getElementById("btnOrdenarEsquerda");
const btnOrdenarDireita = document.getElementById("btnOrdenarDireita");
const btnMisturarEsquerda = document.getElementById("btnMisturarEsquerda");
const btnMisturarDireita = document.getElementById("btnMisturarDireita");

btnAdicionarEsquerda.addEventListener("click", () =>
  adicionarValor(inputValorEsquerda, listaValoresEsquerda)
);
btnAdicionarDireita.addEventListener("click", () =>
  adicionarValor(inputValorDireita, listaValoresDireita)
);
btnOrdenarEsquerda.addEventListener("click", () =>
  ordenarValores(listaValoresEsquerda, selectAlgoritmoEsquerda)
);
btnOrdenarDireita.addEventListener("click", () =>
  ordenarValores(listaValoresDireita, selectAlgoritmoDireita)
);
btnMisturarEsquerda.addEventListener("click", () =>
  misturarValores(listaValoresEsquerda)
);
btnMisturarDireita.addEventListener("click", () =>
  misturarValores(listaValoresDireita)
);

function adicionarValor(input, lista) {
  const valor = parseInt(input.value);
  if (!isNaN(valor)) {
    if (valor >= 1 && valor <= 8) {
      const novoItem = document.createElement("li");
      const textoItem = document.createTextNode("." + valor);
      novoItem.appendChild(textoItem);
      lista.appendChild(novoItem);
      input.value = "";
      alert("Valor válido.");
    } else {
      alert("Valor inválido. Digite um número entre 1 e 8.");
    }
  }
}

function ordenarValores(lista, selectAlgoritmo) {
  const algoritmo = selectAlgoritmo.value;
  const valores = Array.from(lista.children).map((item) =>
    parseInt(item.innerHTML.slice(1))
  );

  // Sort the array using the chosen algorithm
  if (algoritmo === "bubbleSort") {
    bubbleSort(valores);
  } else if (algoritmo === "selectionSort") {
    selectionSort(valores);
  } else if (algoritmo === "quickSort") {
    quickSort(valores, 0, valores.length - 1);
  }

  // Update the list with the sorted values
  lista.innerHTML = valores.map((valor) => `<li>.${valor}</li>`).join("");
}

function misturarValores(lista) {
  const valores = Array.from(lista.children).map((item) =>
    parseInt(item.innerHTML.slice(1))
  );
  shuffle(valores);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  lista.innerHTML = valores.map((valor) => `<li>.${valor}</li>`).join("");
}
