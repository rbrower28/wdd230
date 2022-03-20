// changes the view from card to list view

function cardView() {
    document.getElementById("cards").classList.remove("list");
};

function listView() {
    document.getElementById("cards").classList.add("list");
};

const k = document.getElementById("gridView");
k.onclick = cardView;

const j = document.getElementById("listView");
j.onclick = listView;