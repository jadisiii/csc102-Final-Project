var interValid = 0;
let changeTop = 0;
let changeLeft = 2;

function startMove()
{
    var memePic = document.getElementById("memeImage");
    interValid = setInterval(function() {
        var currentTop = parseInt(memePic.style.top, 10);
        var currentLeft = parseInt(memePic.style.left, 10);
    
        if (currentTop >= 530)
        {
            changeTop -= 1;
        }
        else if (currentTop <= 200)
        {
            changeTop += 1;
        }
        
        if (currentLeft >= 900)
        {
            changeLeft -=1;
        }
        else if (currentLeft <= 5)
        {
            changeLeft +=1;
        }

        memePic.style.left = (currentLeft + changeLeft) + "px";
        memePic.style.top = (currentTop + changeTop) + "px";

    }, 5);	
}


	function stopMove() 
{
    clearInterval(interValid);
}

function logoff(){ // Creating a function called 'logOff'
    location.replace("logInPage.html"); 
}