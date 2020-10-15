var enable = true
var targetPage = "https://*.medium.com/*";

browser.webRequest.onBeforeSendHeaders.addListener((details) => {

    let headers = details.requestHeaders
    let blockingResponse = {} 
    
    if (enable) {
        for (let i = 0, l = headers.length; i < l; i++ ) {
            if (headers[i].name.toLowerCase() == 'referer') {
                headers[i].value = 'https://t.co/'
            } 
        }
        headers.push({'name': 'referer', 'value': 'https://t.co/'})
    }
    blockingResponse.requestHeaders = headers   
    return blockingResponse 

}, {urls: [targetPage]}, ['requestHeaders', 'blocking'])