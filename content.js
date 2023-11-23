chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request)
    document.body.style.cursor = request.cursor;
});