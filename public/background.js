/**
 * Created by belothar on 19.07.17.
 */
/* global chrome */
chrome.runtime.onInstalled.addListener((reason) => {
    chrome.bookmarks.search('Simple Speed Dial', (bookmarks) => {
        if (bookmarks.length === 0)
            chrome.bookmarks.create({
                'title' : 'Bookmarks from Simple Speed Dial extension'
            }, (extensionFolder) => {
                chrome.storage.local.set({
                    'extensionFolder': extensionFolder
                })
            });
        else alert('bookmarks folder already created!');
    })
});