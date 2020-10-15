const toggle_plugin_status = () => {
    return new Promise((reslove, reject) => {
        chrome.runtime.getBackgroundPage((backgroundPage) => {
            backgroundPage.enable = !backgroundPage.enable
            reslove()
        }); 
    })
}

const toggleText = async () => {
    let el = document.getElementById("btn")
    if (el.firstChild.data == "OFF") {
        el.firstChild.data = "ON"
        document.body.style.backgroundColor = "#f5bff0" // pink
        await toggle_plugin_status()
    } else {
        el.firstChild.data = "OFF"
        document.body.style.backgroundColor = "#158c0f" // green
        await toggle_plugin_status()
    }
}

let el = document.getElementById("btn")
document.getElementById("btn").addEventListener("click", toggleText)
chrome.runtime.getBackgroundPage((backgroundPage) => {
    console.log(backgroundPage.enable)
    if (backgroundPage.enable) {
        document.body.style.backgroundColor = "#158c0f" // green
        el.firstChild.data = "OFF"
    } else {
        document.body.style.backgroundColor = "#f5bff0" // pink
        el.firstChild.data = "ON"
    }
})