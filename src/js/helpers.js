export function loadBadge() {
    chrome.storage.local.get(['note'], function (result) {
        if (!result) {
            return;
        }

        updateBadge(result.note);
    });
}

export function updateBadge(note) {
    if (!note) {
        return;
    }

    const nonEmptyLinesCount = note.split('\n').filter(line => line.trim() !== '').length;
    const badgeText = nonEmptyLinesCount > 0 ? nonEmptyLinesCount.toString() : '';

    chrome.action.setBadgeText({ text: badgeText });
}
