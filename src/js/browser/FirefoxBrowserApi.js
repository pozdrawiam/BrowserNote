import BrowserApi from './BrowserApi';

export default class FirefoxBrowserApi extends BrowserApi {
    getLocalStorageValue(keys, callback) {
        browser.storage.local.get(keys).then(result => {
            callback(result);
        });
    }

    getSessionStorageValue(keys, callback) {
        browser.storage.session.get(keys).then(result => {
            callback(result);
        });
    }

    setBadgeText(text) {
        browser.browserAction.setBadgeText({ text });
    }

    setLocalStorageValue(data) {
        browser.storage.local.set(data);
    }

    setSessionStorageValue(data) {
        browser.storage.session.set(data);
    }
}
