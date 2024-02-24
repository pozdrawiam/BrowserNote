import BrowserApiFactory from './browser/BrowserApiFactory';

export const browserApi = BrowserApiFactory.create();

export function loadBadge() {
    chrome.storage.local.get(['note'], function (result) {
        if (!result) {
            return;
        }

        updateBadge(result.note);
    });
}

export function setCursorPosition(textareaElement, position) {
    textareaElement.focus();

    if (position != null) {
        textareaElement.selectionStart = position;
        textareaElement.selectionEnd = position;
    }
}

export function updateBadge(note) {
    if (!note) {
        browserApi.setBadgeText(null);
        return;
    }

    const nonEmptyLinesCount = note.split('\n').filter(line => line.trim() !== '').length;
    const badgeText = nonEmptyLinesCount > 0 ? nonEmptyLinesCount.toString() : '';

    browserApi.setBadgeText(badgeText);
}
