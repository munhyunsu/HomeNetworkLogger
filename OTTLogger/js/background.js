var viewTabId = 0;
/**
 * 클릭 이벤트 리스너를 등록
 * 이벤트가 발생할 경우 메인 페이지를 새로운 탭에서 열음
 */
chrome.browserAction.onClicked.addListener(function() {
    var path = chrome.extension.getURL("logger.html");

    // 이미 열린 탭 닫기
    if (viewTabId != 0) {
        try {
            chrome.tabs.remove(viewTabId, function() {})
        } catch (t) {
            console.log(t)
        }
    }

    // 새로운 탭 오픈
    chrome.tabs.create({
        url: path
    })
});

