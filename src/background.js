/**
 * Created by belothar on 19.07.17.
 */
chrome.runtime.onInstalled.addListener((reason) => {
    chrome.bookmarks.search('Simple Speed Dial', (bookmarks) => {
        if (bookmarks.length === 0)
            chrome.bookmarks.create({
                'title' : 'Bookmarks from Simple Speed Dial extension'
            }, (result) => {
                chrome.storage.local.set(

                )
            });
        else alert('bookmarks folder already created!');
    })
});