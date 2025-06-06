# AutoScrollExtension

A simple Chrome extension that automatically scrolls web pages at a user-defined speed.

## Features

- Start and stop automatic scrolling on any page.
- Set custom scroll speed (pixels per second) from the popup.
- Clean and modern popup UI.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select this extension's folder.

## Usage

1. Click the extension icon in the Chrome toolbar.
2. Enter your desired scroll speed (in px/s).
3. Click **Start** to begin auto-scrolling the current tab.
4. Click **Stop** to halt scrolling.

## Files

- `content.js` – Handles scrolling logic injected into web pages.
- `popup/popup.html` – Popup UI.
- `popup/popup.js` – Popup logic and communication with content script.
- `popup/popup.css` – Popup styling.
- `manifest.json` – Extension manifest and permissions.
- `icons/` – Extension icons.

## Permissions

- `activeTab`, `scripting`, `storage`, and access to all URLs for scrolling functionality.

---

**Made for learning and productivity!**
