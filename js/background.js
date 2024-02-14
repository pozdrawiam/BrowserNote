import { loadBadge } from './helpers.js';

chrome.runtime.onInstalled.addListener(() => {
    loadBadge();
});

chrome.runtime.onStartup.addListener(() => {
    loadBadge();
});
