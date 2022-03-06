// changes the view from card to list view

function cardView() {
    document.getElementById("cards").classList.remove("list");
    console.log("grid")
};

function listView() {
    document.getElementById("cards").classList.add("list");
    console.log("list")
};

const k = document.getElementById("gridView");
k.onclick = cardView;

const j = document.getElementById("listView");
j.onclick = listView;