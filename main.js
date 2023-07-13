// Selecionar elementos
const form = document.querySelector("form");
const input = document.querySelector("#input-add");
const itemList = document.querySelector("#item-list");

// Adicionar item à lista
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio do formulário

  const itemText = input.value.trim();

  if (itemText !== "") {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${itemText}</span><button class="delete">×</button>`;
    itemList.appendChild(listItem);

    input.value = ""; // Limpar o campo de entrada
  }
});

// Excluir item da lista
itemList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const listItem = event.target.closest("li");
    itemList.removeChild(listItem);
  }
});
