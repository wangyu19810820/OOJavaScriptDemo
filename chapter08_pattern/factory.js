var MYAPP = {}
MYAPP.dom = {};
MYAPP.dom.Text = function (url) {
    this.url = url;
    this.insert = function (where) {
        var txt = document.createTextNode(this.url)
        where.appendChild(txt);
    }
}

MYAPP.dom.Link = function (url) {
    this.url = url;
    this.insert = function (where) {
        var a = document.createElement('a')
        a.href = this.url;
        var txt = document.createTextNode(this.url)
        a.appendChild(txt)
        where.appendChild(a);
    }
}

MYAPP.dom.Img = function (url) {
    this.url = url;
    this.insert = function (where) {
        var img = document.createElement('img')
        img.src = this.url;
        where.appendChild(img)
    }
}

MYAPP.dom.getElement = function (type, url) {
    return new MYAPP.dom[type](url)
}