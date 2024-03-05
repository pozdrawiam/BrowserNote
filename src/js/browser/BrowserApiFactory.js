import ChromeBrowserApi from './ChromeBrowserApi';
import FirefoxBrowserApi from './FirefoxBrowserApi';

export default class BrowserApiFactory {
    static create() {
        if (typeof chrome !== "undefined" && chrome.action) {
            return new ChromeBrowserApi();
        }
        else if (typeof browser !== "undefined" && browser.runtime) {
            return new FirefoxBrowserApi();
        }
        else {
            throw new Error("Unsupported browser");
        }
    }
}
