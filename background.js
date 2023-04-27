chrome.action.onClicked.addListener((tab) =>{
 chrome.scripting.executeScript({
  target: { tabId: tab.id },
  files: ['desc_ja.js']
});
});