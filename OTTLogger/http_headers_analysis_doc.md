## js/background.min.js
- live.html이 열려있는 탭을 호출
- chrome.extension.getURL()을 호출해 live.html의 절대경로를 가져옴
- viewTabId가 0이 아니면(이미 생성되어 있는 탭이 있으면) 그 탭을 닫고
  새로운 live.html 탭을 열음

## live.html
- HTTP Headers의 페이지를 나타내주는 위치


