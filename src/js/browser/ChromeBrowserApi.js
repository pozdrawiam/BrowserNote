import BrowserApi from './BrowserApi';

export default class ChromeBrowserApi extends BrowserApi {
    setBadgeText(text) {
        chrome.action.setBadgeText({ text });
    }
}
