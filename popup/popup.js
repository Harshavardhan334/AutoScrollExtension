document.getElementById("start").addEventListener("click", async () => {
    console.log("Popup or content script running");

  const speed = parseInt(document.getElementById("speed").value);

  if (isNaN(speed) || speed <= 0) {
    alert("Please enter a valid scroll speed.");
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Inject content.js only once
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["./content.js"]
  });

  chrome.tabs.sendMessage(tab.id, { action: "start", speed });
});

document.getElementById("stop").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, { action: "stop" });
});
