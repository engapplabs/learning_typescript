var WebSite = /** @class */ (function () {
    function WebSite(url, facebookLikes) {
        this.url = url;
        this.facebookLikes = facebookLikes;
    }
    ;
    WebSite.prototype.getLikesInK = function () {
        return this.facebookLikes / 1000;
    };
    WebSite.prototype.setLikes = function () {
        this.facebookLikes++;
    };
    Object.defineProperty(WebSite.prototype, "facebookLikes", {
        get: function () {
            return this.facebookLikes;
        },
        set: function (likes) {
            this.facebookLikes = facebookLikes;
        },
        enumerable: true,
        configurable: true
    });
    return WebSite;
}());
;
console.log(WebSite);
var google = new WebSite("xvideos", 2000);
console.log(google);
