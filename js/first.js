var boxLeft= 0;
var boxBottom = 0;
var bulletBottom = 0;
var box  = document.getElementById("box");
var bullet  = document.getElementById("bullet");

document.addEventListener("keydown" , function(e){

    if(e.keyCode== 39) // rightArrow
    {
        boxLeft +=150;
        box.style.left = boxLeft;
    }
    else if(e.keyCode == 37)
    {
        boxLeft -=150;
        box.style.left = boxLeft;
   
    }
    else if(e.keyCode == 38)
    {
        boxBottom +=100;
        box.style.bottom = boxBottom;

    }
    else if(e.keyCode == 40)
    {
        boxBottom -=100;
        box.style.bottom = boxBottom;

    }    
    else if(e.keyCode == 32) // space
    {

        document.getElementById("bulletAudio").play();
        bulletBottom += 400;
        bullet.style.bottom = bulletBottom;

    }
})


document.addEventListener("keyup" , function(e){

    if(e.keyCode == 32)
    {
        bullet.style.bottom = 0;

    }
})