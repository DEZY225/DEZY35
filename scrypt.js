function openGift() {
    document.getElementById("gift-button").style.display = "none";
    var message = document.getElementById("message");
    message.style.display = "block";
    setTimeout(() => { message.style.opacity = "1"; }, 100);
}