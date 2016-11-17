var myImg = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    var img = new Image;
    img.onload = function(){
        imgNode.setSrc(img.src);
    }

    return {
        setSrc: function(src) {
            imgNode.setSrc('loading.gif');
            img.src = src;
        }
    }
})();




// 

var myImg = (function(){
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();


var proxyImage = (function(){
    var img = new Image;
    img.onload = function(){
        myImg.setSrc(this.src);
    }

    return {
        setSrc: function(src) {
            myImg.setSrc('loading.gif');
            img.src = src;
        }
    }
})();



proxyImage.setSrc('image.png');