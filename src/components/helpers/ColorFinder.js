const ColorLibrary = [
    {
        url: 'github.com',
        color: '#000000'
    },
    {
        url: 'facebook.com',
        color: '#abcabc'
    }
]

class ColorFinder {
    constructor() {
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
        return foundSite ? foundSite.color : 'default';
    }

    getEncodedUrl(urlToFind) {
        return urlToFind + '?color=' + this.getColorFromUrl(urlToFind);
    }

}

export default new ColorFinder