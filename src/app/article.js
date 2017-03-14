"use strict";
var Article = (function () {
    function Article(title, link, votes) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    Article.prototype.voteUp = function () {
        this.votes += 1;
        return false;
    };
    Article.prototype.voteDown = function () {
        if (this.votes > 0) {
            this.votes -= 1;
        }
        else {
            this.votes = 0;
        }
        return false;
    };
    Article.prototype.domain = function () {
        try {
            var link = this.link.split('//')[1];
            return link.split('/')[0];
        }
        catch (err) {
            return null;
        }
    };
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=article.js.map