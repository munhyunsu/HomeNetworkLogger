chrome.tabs.getCurrent(function(currentTab) {
    chrome.extension.getBackgroundPage().viewTabId = currentTab.id;
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var requestDiv = document.createElement("div");
        requestDiv.className = "request";
        requestDiv.textContent = Date.now() + " " + details.url;
        document.body.appendChild(requestDiv);
        //console.log(details.url);
    },
    {urls: ["<all_urls>"]},
    ['requestBody']
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type == "title") {
            var titleDiv = document.createElement("div");
            titleDiv.className = "title";
            titleDiv.textContent = Date.now() + " " + request.title;
            document.body.appendChild(titleDiv);
        }
    }
);
