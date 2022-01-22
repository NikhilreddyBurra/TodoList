function addItem() {
    var ul = document.getElementById("myList");
    var candidate = document.getElementById("inputField");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    ul.appendChild(li);
}