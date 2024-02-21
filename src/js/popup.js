import { setCursorPosition, updateBadge } from './helpers.js';

const noteElement = document.getElementById('note');

chrome.storage.local.get(['note'], function (result) {
    noteElement.value = result.note || '';

    updateBadge(result.note);
});

chrome.storage.session.get(['cursorPosition'], function (result) {
    setCursorPosition(noteElement, result.cursorPosition || null);
});

noteElement.addEventListener('input', () => {
    chrome.storage.local.set({ note: noteElement.value });
    chrome.storage.session.set({ cursorPosition: noteElement.selectionEnd });

    updateBadge(noteElement.value);
});

noteElement.addEventListener('keyup', () => {
    chrome.storage.session.set({ cursorPosition: noteElement.selectionEnd });
});

noteElement.addEventListener('click', () => {
    chrome.storage.session.set({ cursorPosition: noteElement.selectionEnd });
});

updateBadge(noteElement.value);
