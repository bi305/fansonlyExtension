const btn = document.querySelector('#checkbox');

btn.addEventListener('click', async () => {
    console.log(btn.value);
    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // chrome.scripting.executeScript(
    //     {
    //         target: { tabId: tab.id },
    //         function: pickColor,
    //     },
    //     async () => {


    //     }
    // );
});

// async function pickColor() {
//     try {

//     } catch (err) {
//         console.error(err);
//     }
// }