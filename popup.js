document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(["hyperlinks"], function(result) {
        const hyperlinks = result.hyperlinks || [];
        const sites = new Set(hyperlinks.map(link => link.url));
        document.getElementById('total-sites').innerText = sites.size;
        document.getElementById('total-links').innerText = hyperlinks.length;
        console.log('Retrieved hyperlinks:', hyperlinks); // Add this line for debugging
    });

    document.getElementById('details-button').addEventListener('click', () => {
        chrome.tabs.create({url: chrome.runtime.getURL("details.html")});
    });
});
