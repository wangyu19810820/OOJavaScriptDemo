// 将对象用于创建命名空间
var MYAPP = MYAPP || {}
MYAPP.dom = {};
MYAPP.dom.Element = function (type, properties) {
    var tmp = document.createElement(type);
    for(var i in properties) {
        tmp.setAttribute(i, properties[i]);
    }
    return tmp;
}
MYAPP.dom.Text = function (txt) {
    return document.createTextNode(txt);
}

// 创建层级命名空间
MYAPP.namespace = function (pattern) {
    var seg = pattern.split(".")
    var cur = MYAPP;
    for (var i = 0; i < seg.length; i++) {
        if (!cur[seg[i]]) {
            cur[seg[i]] = {}
        }
        cur = cur[seg[i]]
    }
}
MYAPP.namespace('style.event')
MYAPP.namespace('myevent')
console.log(JSON.stringify(MYAPP))

// 自改写函数，实现懒加载
MYAPP.myevent.addEvent = function (el, type, fn) {
    if (el.addEventListener) {
        console.log("init addEventListener")
        el.addEventListener(type, fn, false);
        MYAPP.myevent.addEvent = function (el, type, fn) {
            console.log("add addEventListener")
            el.addEventListener(type, fn, false);
        }
    } else if (el.attachEvent) {
        console.log("init attachEvent")
        el.attachEvent('on' + type, fn);
        MYAPP.myevent.addEvent = function (el, type, fn) {
            console.log("add attachEvent")
            el.attachEvent('on' + type, fn);
        }
    } else {
        console.log("init on")
        el['on' + type] = fn;
        MYAPP.myevent.addEvent = function (el, type, fn) {
            console.log("add on")
            el['on' + type] = fn;
        }
    }
}

// 如果参数过多，且参数独立，可放到对象中，以简化代码
MYAPP.dom.fancyButton = function (text, conf) {
    var btn = document.createElement('input')
    btn.value = text;
    btn.type = conf.type || 'submit';
    btn.style.width = conf.width || '100px';
    btn.height = conf.height || '100';
    return btn;
}

// 私有属性和方法
MYAPP.dom.fancyButton1 = function (text, conf) {
    var styles = {
        border:'1px solid red',
        width:'100px',
        color:'black',
        'background-color':'grey'
    }
    function setStyle(input) {
        for (var p in styles) {
            if (styles.hasOwnProperty(p)) {
                input.style[p] = conf[p] || styles[p];
            }
        }
    }
    var btn = document.createElement('input')
    btn.value = text;
    btn.type = conf.type || 'submit';
    setStyle(btn);
    return btn;
}

// 私有函数的公有化
MYAPP.dom1 = (function () {
    function _setStyle() {
        console.log("_setStyle")
    }
    function _getStyle() {
        console.log("_getStyle")
    }
    return {
        setStyle:_setStyle,
        getStyle:_getStyle,
        anotherFun:_setStyle
    }
}());
MYAPP.dom1.setStyle();
MYAPP.dom1.setStyle = function () {
    console.log("MYAPP.dom1.setStyle")
}
MYAPP.dom1.setStyle();
MYAPP.dom1.anotherFun();