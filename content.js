let scrollInterval = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    const speed = message.speed;
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      window.scrollBy(0, 1); // scroll down by 1 pixel
    }, 1000 / speed);
  }

  if (message.action === "stop") {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
});
