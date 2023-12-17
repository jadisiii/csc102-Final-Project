// Ray Arbizu //

// I have set these global variables to be used in different functions throughout this script
var rollCounter = 0;
var point = 0;
var randomNumber1 = 0;
var randomNumber2 = 0;

// This is the beginning of the "roll" function, when the Role Dice button is pressed on the page
function roll()
{   // I start out checking the rollCounter. If it is 0 then it will update the 'turn' id on the page with 'This is the COME OUT Roll'
    // It will then increase the rollCounter variable by one and run the rollCount function including the paramater of the rollCounter variable
    // If the rollCounter is greater than 0, then it will update the 'turn' id with 'The point is' and what the point value is and start the 
    // rollCount function with the rollCounter variable as the parameter passed to the function
    if (rollCounter == 0) 
    {
        document.getElementById("turn").innerHTML = "This is the COME OUT Roll";
        rollCounter++;
        rollCount(rollCounter)
    }
    else if (rollCounter > 0)
    {
        document.getElementById("turn").innerHTML = "The point is " + point;
        rollCount(rollCounter)
    }

    // The secction is part of the roll function handles the dice image animation
    // I declare three local varibles, one for the 'die1' image element from the html page
    // counter1 for the 
    var die1 = document.getElementById('die1');
    var counter1 = 0;
    var interval1 = setInterval(function () {
        randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a number between 1 and 6
        die1.src = 'Dice-' + randomNumber1 + '.png';
        
        counter1++;
        if (counter1 > 15) { // Adjust the number for longer/shorter animation
            clearInterval(interval1); // Stop the interval
            // The dice will show the final random number
        }
    }, 200); // 200 milliseconds for each image change

    var die2 = document.getElementById('die2');
    var counter2 = 0;
    var interval2 = setInterval(function () {
        randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a number between 1 and 6
        die2.src = 'Dice-' + randomNumber2 + '.png';
        //lastNumber2 = randomNumber2
        counter2++;
        if (counter2 > 15) { // Adjust the number for longer/shorter animation
            clearInterval(interval2); // Stop the interval
            // The die will show the final random number
        }
    }, 200); // 200 milliseconds for each image change

    // This whole block of code is intended to run after the the Timeout has finished
    // This is a JavaScript function set to execute after 4 seconds

    setTimeout(function() {
        var regex = /\d+/; // This is declaring regex as a regular expression which is indicated with the two foward slashes 
                            // The '/' is signifies the start of the regular expression being matched, the '\d+' refers to any digit and the last '/' closes the match
        var die1Img = document.getElementById('die1');
        var die2Img = document.getElementById('die2');
        var die1Scr = die1Img.getAttribute('src'); // These 'src' variables are to get the name of the image file
        var die2Scr = die2Img.getAttribute('src');
        var dieOne = die1Scr.match(regex); // These match regex variables are to get the number from each die after the animation has finished
        var dieTwo = die2Scr.match(regex);
    
        var die1Value = parseInt(dieOne, 10);  // The parseInt turns the digit taken from the regex and converts it to an integer, on number with no decimel 
        var die2Value = parseInt(dieTwo, 10);
    
        rollCount(rollCounter) // runs the rollCount function to check the rollCounter

        // In this if statement I first check to see if the rollCounter is equal to 1, if so then it sets the 'turn' id to 'This is the COME OUT Roll' 
        // And initiates the comeOut function sending the die1 and die2 values as parameters
        // Next, if the rollCounter is greater that 0 then the hitPoint function is called with the die1 and die2 values as parameters 
        if (rollCounter == 1)
        {
            document.getElementById("turn").innerHTML = "This is the COME OUT Roll";
            comeOut(die1Value, die2Value)
        }
        else if (rollCounter > 0)
        {
            var diceSum = die1Value + die2Value;
            hitPoint(die1Value, die2Value)
        }
    }, 4000);
    
    // The sound is set here to execute during the roll function so that the sound from the html page is played when the button is clicked
    var myaudio = document.getElementById('clickSound');
    myaudio.play();
}

// This is the code that sets the player up in the html page to play the source audio set in the audio element 
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play()
    }
 
}


// This function is the logic and code for the COME OUT roll
// The parameters are passed in num1 and num2, they are added in the sum variable
// If the sum is 7 or 11 on the come out roll the pass line wins, the status element is updated and the roll counter is reset to 0
// If the sum is 2, 2 or 12 (CRAPS), then the pass line be looses, the status element is updated and the roll counter is reset to 0
// If the is 4, 5, 6, 8, 9 or 10 then the point is established, the tun and status elements are updated and the rollCounter goes up one and the rollCount is run again
function comeOut(num1, num2)
{
    var sum =(num1 + num2);

    if ((sum == 7) || (sum == 11))
    {
        document.getElementById("status").innerHTML = "Winner!<br>You rolled a " + sum;
        rollCounter = 0;
    }
    else if ((sum == 2) || (sum==3) || (sum==12))
    {
        document.getElementById("status").innerHTML = "CRAPS! You loose!<br>You rolled a " + sum;
        rollCounter = 0;
        rollCount(rollCounter)
    }
    else if ((sum == 4) || (sum == 5) || (sum == 6) || (sum == 8) || (sum == 9) || (sum == 10))
    {
        document.getElementById("turn").innerHTML = "The point is " + sum;
        point = sum;
        //document.getElementById("point").innerHTML = "ON";
        document.getElementById("status").innerHTML = "The point is established";
        rollCounter++;
        rollCount(rollCounter)
    }
}

// In this function if the sum is equal to the point then the point wins, the counter is reset, and rollcount function runs
// If the sum value is 7 then the passline loses, status element is updated, rollCounter is reset and updated
// If it's anything else, then the status shows what you rolled, the rollcounter increases and the rollcount is updated
function hitPoint(num1, num2)
{
    
    var sum =(num1 + num2);

    if ((sum == point))
    {
        document.getElementById("status").innerHTML = "Winner!<br>You hit the point before rolling a 7.";
        rollCounter = 0;
        rollCount(rollCounter)
    }
    else if (sum == 7)
    {
        document.getElementById("status").innerHTML = "7 OUT, LINE AWAY!<br>PASS LINE bet looses.";
        document.getElementById("turn").innerHTML = "The point is 0";
        rollCounter = 0;
        rollCount(rollCounter)
    }
    else{
        document.getElementById("status").innerHTML = "You rolled, " + sum + " roll again.";
        rollCounter++;
        rollCount(rollCounter)
    }

} 

// This function gets the number passed a parameter to this rollCount function and sets the rollCounter element to the parameter passed
function rollCount(roll)
{
    document.getElementById("rollCounter").innerHTML = "The roll count is " + roll;
}

function logoff(){ // Creating a function called 'logOff'
    location.replace("logInPage.html"); 
}