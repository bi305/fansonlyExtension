const btn = document.querySelector('#checkbox');

btn.addEventListener('click', () => {

    if (btn.checked) {
        let queryOptions = { active: true, currentWindow: true };
        tabs = chrome.tabs.query(queryOptions, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { message: 'checked' },
                (response) => {
                    console.log(response);
                }
            )
        });
    }
    else {
        let queryOptions = { active: true, currentWindow: true };
        tabs = chrome.tabs.query(queryOptions, (tabs) => {
            chrome.tabs.sendMessage(
                tabs[0].id,
                { message: 'unchecked' },
                (response) => {
                    console.log(response);
                }
            )
        });
    }
})