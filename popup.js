document.getElementById('removeModalButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: removeModal
    });
  });
});

function removeModal() {
  const modal = document.getElementById("keywords-modal");
  if (modal) {
    modal.remove();
  } else {
    alert("No 'keywords-modal' found.");
  }
}
