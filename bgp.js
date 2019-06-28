chrome.webRequest.onBeforeSendHeaders.addListener ((details) => {
    console.log(JSON.stringify(details))
    let headers = details.requestHeaders
    let blockingResponse = {}

    let haveReferer = false
    for (var i = 0, l = headers.length; i < l; i++ ) {
      if (headers[i].name.toLowerCase() == 'referer') {
        headers[i].value = 'https://t.co/';
        haveReferer = true
      } 
    }
    headers.push({'name': 'referer', 'value': 'https://t.co/'})

    blockingResponse.requestHeaders = headers;
    return blockingResponse;
  },
  {urls: ["<all_urls>"]},
  ['requestHeaders', 'blocking', 'extraHeaders']
);