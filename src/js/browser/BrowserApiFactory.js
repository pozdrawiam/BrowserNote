import ChromeBrowserApi from './ChromeBrowserApi';

export default class BrowserApiFactory {
    static create() {
        if (typeof chrome !== "undefined" && chrome.action) {
            return new ChromeBrowserApi();
        } 
        /* else if (typeof browser !== "undefined" && browser.action) {
            return new FirefoxBrowserApi();
        } */ 
        else {
            throw new Error("Unsupported browser");
        }
    }
}
