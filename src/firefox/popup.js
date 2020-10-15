const toggleText = async () => {
    let el = document.getElementById("btn")
    if (el.firstChild.data == "OFF") {
        el.firstChild.data = "ON"
        document.body.style.backgroundColor = "#f5bff0" // pink
        backgroundPage.enable = !backgroundPage.enable
    } else {
        el.firstChild.data = "OFF"
        document.body.style.backgroundColor = "#158c0f" // green
        backgroundPage.enable = !backgroundPage.enable
    }
}

let el = document.getElementById("btn")
document.getElementById("btn").addEventListener("click", toggleText)
var backgroundPage = browser.extension.getBackgroundPage();

console.log(backgroundPage.enable)
if (backgroundPage.enable) {
    document.body.style.backgroundColor = "#158c0f" // green
    el.firstChild.data = "OFF"
}
else {
    document.body.style.backgroundColor = "#f5bff0" // pink
    el.firstChild.data = "ON"
}