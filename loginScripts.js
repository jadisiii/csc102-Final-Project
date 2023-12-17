// Ray Arbizu

// This section is for animating the letters and word when the page loads

document.addEventListener('DOMContentLoaded', (event) => { // This line adds an even listener, that listens for the 'DOMContentLoaded' event, the page loading.
    const letters = document.querySelectorAll('#animatedText span'); // This code selects elements using 'querySelectorAll' method. It selects the '<span>' elements inside the '<div>' element with the id 'animatedText' and assigns all of the span letters as an array to the consistent (const) variable of 'letters'
    const bouncingWord = document.querySelector('#feverText'); // This code selects the element using 'querySelector' and setting it to the consisten (const) variable of 'bouncingword'

    // Animate letters
    letters.forEach((letter, index) => { // This specifies that for each of the letters in the array 'letters', including the index, or position of each letter in the array, do the following.
      setTimeout(() => { // This is using the 'setTimout' function
        letter.style.opacity = 1; // This line sets each letter to the opacity (transparency) of 1, meaning that it is visable
      }, 200 * index); // This sets the delay for each letter to show up as the index * 200 milliseconds. 
    });

    // Animate the word transision  
    setTimeout(() => {    // This is using the 'setTimout' function
        bouncingWord.style.opacity = 1; //This sets the opacity to 1, or visible, for the bouncingWord variable
        bouncingWord.style.transform = 'translateY(0)'; //This sets the transform (animation) style to traverse the Y axis
      }, 200 * letters.length); // This sets the dely so that the bouncing word happens after the letters animation finishes
});


// This section is for checking the User Input and displaying results on page

function userInfoCheck() // This creates the function called 'userInfoCheck'
{
    var fnameInput = document.getElementById("userFnameString").value; // this gets the value of the string 'userFnameString' and sets it to the varible called 'fmameInput'
    var lnameInput = document.getElementById("userLnameString").value; // this gets the value of the string 'userLnameString' and sets it to the varible called 'LmameInput'
    var zipcodeInput = document.getElementById("zipcodeString").value; // this gets the value of the string 'zipcodeString' and sets it to the varible called 'zipcodeInput'
    
    var fullname = fnameInput + " " + lnameInput; // Decalre fullanme as a variable that is the concatenation of the first name, space and last name
    if (fullname.length < 20) // This if statement checks if the fullname variable is less that 20 characters
    {
        if (zipcodeInput.length == 5) // This if statement checks the zipcode length of 5 characters
        {
            location.replace("memeMove.html"); // If the fullname length is correct and the zipcode length is correct replace this page with the accessGranted.html
        }
        else
        {
            alert("Invalid Zipcode: Zipcode must be numbers and be exactly 5 digits long.") // If the zipcode is invalid, an alert will show and not move on to the accessGranted.html
        }  
    }
    else
    {
        alert("To many letters in First and Last name together, must be under 20 characters long!") // If the fullname variable is more that 20 characters, this alert will show
    }

}

// Function to reset the page when the reset button is click on
// function reset(){ // declaring the function called 'reset'
//    location.reload(); // reloads the page to the original webpage
//}
    
//function logOff(){ // Creating a function called 'logOff'
//    location.replace("strings.html"); // Replaced the webpage with the strings.html
//}
