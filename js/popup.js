import { updateBadge } from './helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    const noteElement = document.getElementById('note');

    chrome.storage.local.get(['note'], function (result) {
        noteElement.value = result.note || '';
        updateBadge(result.note);
    });

    noteElement.addEventListener('input', () => {
        chrome.storage.local.set({ note: noteElement.value });
        updateBadge(noteElement.value);
    });

    updateBadge(noteElement.value);
});
