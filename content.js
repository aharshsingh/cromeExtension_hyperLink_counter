// function logHyperlinks() {
//     const links = document.querySelectorAll('a[href]');
//     links.forEach(link => {
//         chrome.runtime.sendMessage({
//             action: "logHyperlink",
//             hyperlink: {
//                 url: window.location.hostname,
//                 href: link.href,
//                 text: link.textContent
//             }
//         });
//     });
// }

// logHyperlinks();

// // Use MutationObserver to detect dynamically added content
// const observer = new MutationObserver(logHyperlinks);
// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });
function logHyperlinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        const hyperlink = {
            url: window.location.hostname,
            href: link.href,
            text: link.textContent
        };
        console.log('Logging hyperlink:', hyperlink); // Add this line for debugging
        chrome.runtime.sendMessage({
            action: "logHyperlink",
            hyperlink
        });
    });
}

logHyperlinks();

const observer = new MutationObserver(logHyperlinks);
observer.observe(document.body, {
    childList: true,
    subtree: true
});
