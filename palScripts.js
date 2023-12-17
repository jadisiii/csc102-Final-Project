// Ray Arbizu

// This section is for animating the letters and word when the page loads

document.addEventListener('DOMContentLoaded', (event) => { // This line adds an even listener, that listens for the 'DOMContentLoaded' event.
    const letters = document.querySelectorAll('#animatedText span'); // This code selects elements using 'querySelectorAll' method. It selects the '<span>' elements inside the '<div>' element with the id 'animatedText' and assigns all of the span letters as an array to the consistent (const) variable of 'letters'
    const bouncingWord = document.querySelector('#feverText'); // This code selects the element using 'querySelector' and setting it to the consisten (const) variable of 'bouncingword'

    // Animate letters
    letters.forEach((letter, index) => { // This specifies that for each of the letters in the array 'letters', including the index, or position of each letter in the array, do the following.
      setTimeout(() => { // This is using the 'setTimout' function
        letter.style.opacity = 1; // This line sets each letter to the opacity (transparency) of 1, meaning that it is visable
      }, 200 * index); // This sets the delay for each letter to show up as the index * 200 milliseconds. 
    });

    // Animate the word FEVER bouncing 
    setTimeout(() => {    // This is using the 'setTimout' function
        bouncingWord.style.opacity = 1; //This sets the opacity to 1, or visible, for the bouncingWord variable
        bouncingWord.style.transform = 'translateY(0)'; //This sets the transform (animation) style to travers the Y axis
      }, 200 * letters.length); // This sets the dely so that the bouncing word happens after the letters animation finishes
});


// This section is for checking the Palindrom and displaying results on page

function palindromCheck() // This creates the function called 'palidromCheck'
{
    var palInput = document.getElementById("palindromString").value; // this gets the value of the string 'palindromString' and sets it to the varible called 'palInput'

    palInput = palInput.toLowerCase(); // Transformes all letters in the palInput variable to lowercase

    document.getElementById("wordForward").innerHTML = "Here is the word you input: " + palInput; //This displays the word that was entered as all lowercase in the html page

    var i; // creates a variable called 'i'
    let reversed = ""; // creates a variable called reversed and set's it to a null value
    for (i=palInput.length-1; i >=0;i--) // sets the 'i' variable each letter in the palInput and reverses is
    {
        reversed += palInput[i]; // sets the 'reversed' variable as the reverse of the input
    }

    document.getElementById("wordBackward").innerHTML = "Here is the work backwards: " + reversed; // Display the reversed in the backwords location

    var wordResultElement = document.getElementById("wordResult"); // decalres the variable 'wordResultElement' as the value from the wordResult 

    if (palInput == reversed) //This if statement says that if the palInput is the same as the reversed variable, then exicute the following code as a success
    {
        document.getElementById("wordResult").innerHTML = "Success!<br><br>'" + palInput + "'<br><br>...is the same forward and backward and is therefore a Palindrom!"; // displays the success in the wordResult html field 
        wordResultElement.style.color = "#C5E898"; // Changes the color of the text
    }
    else // if palInput is not the same as reversed then run the following code, stating the it is not a palidrom 
    {
        document.getElementById("wordResult").innerHTML = "Wrong!<br><br>'" + palInput + "'<br><br>...is NOT a Palindrom"; // displays that it is not a palindrom 
        wordResultElement.style.color = "orangered"; // Changes the color of the text to orange-red
    }

    document.getElementById("enterAnother").innerHTML = "Please try another word"; // Displays to try another word. 


}

// Function to reset the page when the reset button is click on
// function reset(){ // declaring the function called 'reset'
//     location.reload(); // reloads the page to the original webpage
// }
    
function logoff(){ // Creating a function called 'logOff'
    location.replace("logInPage.html"); 
}

