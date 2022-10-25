let userAuthorized = false
let commandStage = 0

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'authorize') {
    chrome.tabs.create({ url: 'http://127.0.0.1:5000/api/docs/auth' }).
      then(r => {})
    sendResponse('success')
    return true
  } else if (request.message === 'unauthorize') {
    userAuthorized = false
    sendResponse('success')
    return true
  }
})

chrome.commands.onCommand.addListener((command) => {
  if (command === 'autocomplete') {
    console.log('autocomplete must happen')
    if (commandStage % 2 === 0) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // Since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        let tabURL = tabs[0].url
        fetch('http://127.0.0.1:5000/api/preview-autocomplete?document_id=' +
          tabURL.split('/')[5]).then(r => {})
        commandStage++
      })
    } else if (commandStage % 2 === 1) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tabURL = tabs[0].url
        fetch('http://127.0.0.1:5000/api/confirm-autocomplete?document_id=' +
          tabURL.split('/')[5]).then(r => {})
        commandStage++
      })
    }
  }
})
