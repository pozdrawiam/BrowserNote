export default class BrowserApi {
    BrowserApi() { }

    getLocalStorageValue(keys, callback) {
        throw new Error("getLocalStorageValue not implemented");
    }

    getSessionStorageValue(keys, callback) {
        throw new Error("getSessionStorageValue not implemented");
    }

    setBadgeText(text) {
        throw new Error("setBadgeText not implemented");
    }

    setLocalStorageValue(data) {
        throw new Error("setLocalStorageValue not implemented");
    }

    setSessionStorageValue(data) {
        throw new Error("setLocalStorageValue not implemented");
    }
}
