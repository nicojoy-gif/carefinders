export {};

// Initialize the Facebook SDK
(window as any).fbAsyncInit = function () {
  (window as any).FB.init({
    appId: '2243896112481945', // Replace with your Facebook App ID
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v12.0', // Replace with the desired Facebook Graph API version
  });
};

// Load the Facebook SDK asynchronously
(function (d: Document, s: string, id: string) {
  let js: HTMLScriptElement | null = d.createElement('script');
  let fjs: HTMLElement | null | undefined = d.getElementsByTagName(s)[0] as HTMLElement;
  if (js && fjs) {
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode?.insertBefore(js, fjs);
  }
})(document, 'script', 'facebook-jssdk');
