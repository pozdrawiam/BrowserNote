export function loadBadge() {
    chrome.storage.local.get(['note'], function (result) {
        updateBadge(result.note);
    });
}

export function updateBadge(note) {
    const nonEmptyLinesCount = note.split('\n').filter(line => line.trim() !== '').length;
    const badgeText = nonEmptyLinesCount > 0 ? nonEmptyLinesCount.toString() : '';

    chrome.action.setBadgeText({ text: badgeText });
}
