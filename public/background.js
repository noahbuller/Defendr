const STORAGE_KEY = "cookiesBlocked";
let cookiesBlockedCache = false;

/**
 * Initialize blocking state from storage when the service worker starts
 */
chrome.storage.local.get([STORAGE_KEY], (result) => {
  cookiesBlockedCache = result[STORAGE_KEY] === true;
});

/**
 * Watch for changes to the blocking state and update our cache
 */
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes[STORAGE_KEY]) {
    cookiesBlockedCache = changes[STORAGE_KEY].newValue === true;
  }
});

/**
 * Handle messages from the React UI (e.g. toggle or get status)
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleCookieBlocker") {
    const updated = !cookiesBlockedCache;
    chrome.storage.local.set({ [STORAGE_KEY]: updated }, () => {
      sendResponse({ status: updated ? "enabled" : "disabled" });
    });
    return true; // keep sendResponse alive for async
  }

  if (request.action === "getCookieBlockerStatus") {
    sendResponse({ status: cookiesBlockedCache ? "enabled" : "disabled" });
    return true;
  }
});

/**
 * Intercepts outgoing HTTP requests and removes the "cookie" header if blocking is enabled
 */
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    if (!cookiesBlockedCache) return;

    const headers = details.requestHeaders.filter(
      (h) => h.name.toLowerCase() !== "cookie"
    );
    return { requestHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);

/**
 * Intercepts incoming HTTP responses and removes the "Set-Cookie" header if blocking is enabled
 */
chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    if (!cookiesBlockedCache) return;

    const headers = details.responseHeaders.filter(
      (h) => h.name.toLowerCase() !== "set-cookie"
    );
    return { responseHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);