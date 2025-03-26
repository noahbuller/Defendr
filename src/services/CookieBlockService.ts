/***
 * This file handles the logic for the cookie blocking button
*/

// brings ts definitions for chrome.* APIS
/// <reference types="chrome"/>

const STORAGE_KEY = "domainList";

// sends a message to background.js to toggle the cookie blocker
export const toggleCookieBlocker = (): Promise<"enabled" | "disabled"> => {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(
        { action: "toggleCookieBlocker" },  // Message content
        (response) => {
          console.log("Toggle Response:", response)
          resolve(response.status);        // status = "enabled" or "disabled"
        }
      );
    });
};

export const getDomainList = async (): Promise<{
  type: "whitelist" | "blacklist";
  domains: string[];
}> => {
  return new Promise((resolve) => {
    chrome.storage.local.get([STORAGE_KEY], (result) => {
      resolve(result[STORAGE_KEY] || { type: "blacklist", domains: [] });
    });
  });
};

export const saveDomainList = async (
  type: "whitelist" | "blacklist",
  domains: string[]
): Promise<void> => {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEY]: { type, domains } }, resolve);
  });
};

export const getCookieBlockerStatus = (): Promise<"enabled" | "disabled"> => {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage(
      { action: "getCookieBlockerStatus" },
      (response) => {
        resolve(response.status);
      }
    );
  });
}
  