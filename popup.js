document.addEventListener("DOMContentLoaded", function () {
  const cursorOptions = document.getElementById("cursorOptions");
  const applyCursorButton = document.getElementById("applyCursor");
  const resetCursorButton = document.getElementById("resetCursor");

  applyCursorButton.addEventListener("click", function () {
    const selectedCursor = cursorOptions.value;
    applyCursor(selectedCursor);
  });

  resetCursorButton.addEventListener("click", function () {
    applyCursor("default");
    cursorOptions.value = "default";
  });

  function applyCursor(cursor) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { cursor });
    });
  }
});
