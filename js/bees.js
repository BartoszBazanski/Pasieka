var main = function(){
    for(var i = 0; i <= 100; i++){
      var bee = $("<div class='bees left'><img src='images/bee.png'/></div>");
      $("body").append(bee);
    }
    for(var i = 0; i <= 100; i++){
      var bee = $("<div class='bees right'><img src='images/bee.png'/></div>");
      $("body").append(bee);
    }
    $(".bees.left").each(function(){
        var x = Math.random() * $(document).width() * 0.19 + $(document).width() * 0.01;
        var y = Math.random() * $(document).height() * 0.90 + $(document).height() * 0.02;
        var rotateDeg = Math.random() * 360;
        $(this).css({
            transform: "rotate(" + rotateDeg + "deg)",
            top: y,
            left: x
        });
        randomAnimateLeft($(this));
    });
    $(".bees.right").each(function(){
        var x = Math.random() * $(document).width() * 0.15 + $(document).width() * 0.80;
        var y = Math.random() * $(document).height() * 0.90 + $(document).height() * 0.02;
        var rotateDeg = Math.random() * 360;
        $(this).css({
            transform: "rotate(" + rotateDeg + "deg)",
            top: y,
            left: x
        });
        randomAnimateRight($(this));
    });
};
function getRotationDeg(obj){
    var matrix = obj.css("transform");
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var deg = Math.round(Math.atan2(values[1], values[0]) * (180/Math.PI));
    return (deg < 0) ? deg + 360 : deg;
};
function randomAnimateLeft(obj){
        var currentX = parseInt(obj.css("left"), 10);
        var currentY = parseInt(obj.css("top"), 10);
        var x = Math.random() * $(document).width() * 0.19 + $(document).width() * 0.01;
        var y = Math.random() * $(document).height() * 0.90 + $(document).height() * 0.02;
        var animationInterval = Math.random() * 35000 + 5000;
        var rotateInterval = Math.random() * 1000 + 2000;
        var targetX = x - currentX;
        var targetY = y - currentY;
        var distance = Math.pow(Math.pow(targetX, 2) + Math.pow(targetY, 2), 0.5);
        if(targetX >= 0 && targetY < 0){
            var angle = 180 * Math.asin(targetX / distance)/Math.PI;   
        } else if(targetY >= 0 && targetX > 0){
            var angle = 90 + (Math.asin(targetY / distance)*180/Math.PI);
        } else if(targetX <= 0 && targetY > 0){
            var angle = 180 + (180 * Math.asin(Math.abs(targetX) / distance)/Math.PI);
        } else if(targetY <= 0 && targetX < 0){
            var angle = 270 + (180 * Math.asin(Math.abs(targetY) / distance)/Math.PI);
        }
        var start = getRotationDeg(obj);
        $({deg: start}).animate({deg: angle}, {
        duration: rotateInterval,
        ease: "ease-in",
        step: function(now){
            obj.css({
                transform: 'rotate('+ now +'deg)'
            })
        }}).delay(rotateInterval);
        obj.animate({
            top: y,
            left: x
            }, animationInterval, function(){randomAnimateLeft(obj)});
};
function randomAnimateRight(obj){
        var currentX = parseInt(obj.css("left"), 10);
        var currentY = parseInt(obj.css("top"), 10);
        var x = Math.random() * $(document).width() * 0.15 + $(document).width() * 0.80;
        var y = Math.random() * $(document).height() * 0.90 + $(document).height() * 0.02;
        var animationInterval = Math.random() * 35000 + 5000;
        var rotateInterval = Math.random() * 1000 + 2000;
        var targetX = x - currentX;
        var targetY = y - currentY;
        var distance = Math.pow(Math.pow(targetX, 2) + Math.pow(targetY, 2), 0.5);
        if(targetX >= 0 && targetY < 0){
            var angle = 180 * Math.asin(targetX / distance)/Math.PI;   
        } else if(targetY >= 0 && targetX > 0){
            var angle = 90 + (Math.asin(targetY / distance)*180/Math.PI);
        } else if(targetX <= 0 && targetY > 0){
            var angle = 180 + (180 * Math.asin(Math.abs(targetX) / distance)/Math.PI);
        } else if(targetY <= 0 && targetX < 0){
            var angle = 270 + (180 * Math.asin(Math.abs(targetY) / distance)/Math.PI);
        }
        var start = getRotationDeg(obj);
        $({deg: start}).animate({deg: angle}, {
        duration: rotateInterval,
        ease: "ease-in",
        step: function(now){
            obj.css({
                transform: 'rotate('+ now +'deg)'
            })
        }}).delay(rotateInterval);
        obj.animate({
            top: y,
            left: x
            }, animationInterval, function(){randomAnimateRight(obj)});
};
$(document).ready(main);