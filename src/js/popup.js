import { browserApi, setCursorPosition, updateBadge } from './helpers.js';

const noteElement = document.getElementById('note');

browserApi.getLocalStorageValue(['note'], function (result) {
    noteElement.value = result.note || '';

    updateBadge(result.note);
});

browserApi.getSessionStorageValue(['cursorPosition'], function (result) {
    setCursorPosition(noteElement, result.cursorPosition || null);
});

noteElement.addEventListener('input', () => {
    browserApi.setLocalStorageValue({ note: noteElement.value });
    browserApi.setSessionStorageValue({ cursorPosition: noteElement.selectionEnd });

    updateBadge(noteElement.value);
});

['click', 'keyup'].forEach(event => {
    noteElement.addEventListener(event, () => {
        browserApi.setSessionStorageValue({ cursorPosition: noteElement.selectionEnd });
    });
});

updateBadge(noteElement.value);
