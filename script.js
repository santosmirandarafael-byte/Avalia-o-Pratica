const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        temaBtn.textContent = "☀️ Tema claro";
    } else {
        temaBtn.textContent = "🌙 Tema escuro";
    }
});