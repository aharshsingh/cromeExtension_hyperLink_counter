document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(["hyperlinks"], function(result) {
        const hyperlinks = result.hyperlinks || [];
        const table = document.getElementById('details-table');
        const linkCount = {};

        hyperlinks.forEach(link => {
            if (linkCount[link.href]) {
                linkCount[link.href].count += 1;
            } else {
                linkCount[link.href] = { url: link.url, count: 1 };
            }
        });

        console.log('Link count:', linkCount); // Add this line for debugging

        Object.keys(linkCount).forEach(href => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${linkCount[href].url}</td>
                <td>${href}</td>
                <td>${linkCount[href].count}</td>
            `;
            table.appendChild(row);
        });
    });
});
