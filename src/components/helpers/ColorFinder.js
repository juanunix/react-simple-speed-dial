import ColorLibrary from './ColorLibrary.js';
class ColorFinder {
    constructor() {
        this.nonExistingSiteColor = "#000000"
        this.colorLibrary = ColorLibrary;
    }
    parseUrl(urlToParse) {
        if (urlToParse.indexOf('https://') > -1) {
            return urlToParse.replace('https://', '');
        }
        else if (urlToParse.indexOf('http://') > -1) {
            return urlToParse.replace('http://', '');
        }
        return urlToParse;
    }
    getColorFromUrl(urlToFind) {
        let parsedUrl = this.parseUrl(urlToFind);
        let foundSite = this.colorLibrary.find((site) => {
           return site.url === parsedUrl
       })
        return foundSite ? foundSite.color : this.nonExistingSiteColor;
    }

    getEncodedUrl(urlToFind) {
        return urlToFind + '?color=' + this.getColorFromUrl(urlToFind);
    }

}

export default new ColorFinder