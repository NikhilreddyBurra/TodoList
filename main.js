function addItem() {
    var ul = document.getElementById("myList");
    var candidate = document.getElementById("inputField");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));

    var span = document.createElement("span");
    var span2 = document.createElement("span2")
    var span3 = document.createElement("span3")
    var txt = document.createTextNode("\u2713");
    var undo = document.createTextNode("\u238C");
    var del = document.createTextNode("\u00D7");
    span.className = "close";
    span2.className = "close2";
    span3.className = "close3";
    inputField.value = "";
    span.appendChild(txt);
    span2.appendChild(undo);
    span3.appendChild(del);
    span.addEventListener('click', () => {
        li.style.textDecorationLine = "line-through";
        // span.innerText = "\u00D7"
        
    });
    span2.addEventListener('click', () => {
        li.style.textDecorationLine ="none";
    });
    span3.addEventListener('click', () => {
        li.remove();
    })

    li.appendChild(span);
    li.appendChild(span2);
    li.appendChild(span3);
    ul.appendChild(li);
}