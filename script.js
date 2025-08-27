// ========== Messaging App ==========
let sent = document.getElementById("sentBtn");

sent.addEventListener("click", function () {
    let inputText = document.getElementById("text").value;
    document.getElementById("displayText").innerHTML += inputText + "<br>";
});

// ========== Modal Name Display ==========
let btnname = document.getElementById("btnName");
let modalBox = document.getElementById("modal");

if (btnname) {
    btnname.addEventListener("click", function () {
        let name = document.getElementById("name").value;
        document.getElementById("displayName").innerHTML = name;
    });
}

function displayBox() {
    if (modalBox) {
        modalBox.classList.add("show");
    }
}
