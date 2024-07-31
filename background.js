chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "logHyperlink") {
        chrome.storage.local.get(["hyperlinks"], function(result) {
            let hyperlinks = result.hyperlinks || [];
            hyperlinks.push(request.hyperlink);
            console.log('Storing hyperlink:', request.hyperlink); // Add this line for debugging
            chrome.storage.local.set({hyperlinks: hyperlinks}, function() {
                console.log('Hyperlink logged');
            });
        });
    }
    sendResponse({status: "done"});
});
