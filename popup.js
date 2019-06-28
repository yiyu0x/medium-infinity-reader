let isOn = false
document.getElementById("btn").addEventListener("click", toggle);

function toggle(){
	isOn = !isOn
	
	if (isOn) {
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
		)
	} else {
		alert('debug')
	}

}

// function getCurrentTabUrl(callback) {  
//   var queryInfo = {
//     active: true, 
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) {
//     var tab = tabs[0]; 
//     var url = tab.url;
//     callback(url);
//   });
// }

