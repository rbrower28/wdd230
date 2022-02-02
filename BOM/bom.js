
const input = document.querySelector("input");
const button = document.querySelector("button");
const refList = document.querySelector("ul");

button.onclick = function() {
    let item = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(listButton);
    listButton.textContent = "❌";
    refList.appendChild(listItem);

    listButton.onclick = function() {
        refList.removeChild(listItem);
    }

    input.focus
}