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

function updateBadge(note) {
    const nonEmptyLinesCount = note.split('\n').filter(line => line.trim() !== '').length;
    const badgeText = nonEmptyLinesCount > 0 ? nonEmptyLinesCount.toString() : '';

    chrome.action.setBadgeText({ text: badgeText });
}
