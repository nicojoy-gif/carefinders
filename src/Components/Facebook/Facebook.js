"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize the Facebook SDK
window.fbAsyncInit = function () {
    window.FB.init({
        appId: '2243896112481945',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0', // Replace with the desired Facebook Graph API version
    });
};
// Load the Facebook SDK asynchronously
(function (d, s, id) {
    var _a;
    var js = d.createElement('script');
    var fjs = d.getElementsByTagName(s)[0];
    if (js && fjs) {
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        (_a = fjs.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(js, fjs);
    }
})(document, 'script', 'facebook-jssdk');
