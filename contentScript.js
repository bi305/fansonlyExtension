const siteImages = document.getElementsByTagName('img');
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'checked') {
        for (let i = 0; i < siteImages.length; i++) {
            siteImages[i].style.filter = 'blur(15px)';
        }
    }
    else if (request.message === 'unchecked') {
        for (let i = 0; i < siteImages.length; i++) {
            siteImages[i].style.filter = 'blur(0px)';
        }
    }
    sendResponse({ status: true });
    return true;

})