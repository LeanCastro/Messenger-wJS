// ========== Messaging App ==========
let sent = document.getElementById("sentBtn");

sent.addEventListener("click", function () {
    let inputText = document.getElementById("text").value;
    document.getElementById("displayText").innerHTML += inputText + "<br>";
});
