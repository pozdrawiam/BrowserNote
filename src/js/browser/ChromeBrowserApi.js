import BrowserApi from './BrowserApi';

export default class ChromeBrowserApi extends BrowserApi {
    getLocalStorageValue(keys, callback) {
        chrome.storage.local.get(keys, callback);
    }

    getSessionStorageValue(keys, callback) {
        chrome.storage.session.get(keys, callback);
    }

    setBadgeText(text) {
        chrome.action.setBadgeText({ text });
    }

    setLocalStorageValue(data) {
        chrome.storage.local.set(data);
    }

    setSessionStorageValue(data) {
        chrome.storage.session.set(data);
    }
}
