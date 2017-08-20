class ColorExtractor {
    constructor() {
        this._defaultColor = '#000000'
    }
   
    get defaultColor() {
        return this._defaultColor
    }
    extractUrl(url) {
        let urlPattern = /.*\?/g;
        let extractedUrl = urlPattern.exec(url);
        if (url.indexOf('color') < 0) return url;
        if (typeof extractedUrl == 'string') {
            return extractedUrl.replace('?', '');
        } else {
            console.log(`extracted url ${extractedUrl}`);
            extractedUrl = extractedUrl.map((url) => {
                return url.replace('?', '')
            }); 
            return extractedUrl[0]
        }
    }

    extractColor(url) {
        if (url.indexOf('color') < 0) return this.defaultColor
        let colorPattern = new RegExp(/#(.*)/g);
        let extractedColor = '#' + colorPattern.exec(url)[1];
        return extractedColor
    }
}

export default new ColorExtractor