"use strict";

var imgElement;

var intervalSpeed = 5;

var speedX = 2;
var speedY = 2;


function Start(){
	imgElement = document.getElementById("img0");
	
	// To READ the image's width, use this
	console.log("Image width: ", imgElement.width);
	
	// To READ the image's height, use this
	console.log("Image height: ", imgElement.height);
	
	// To READ the current left (X) position, use this
	console.log("Image left (read only): ", imgElement.offsetLeft);
	
	// To READ the current top (Y) position, use this
	console.log("Image top (read only): ", imgElement.offsetTop);
	
	// To WRITE TO the current left (X) position, use this
	console.log("Image left (write only): ", imgElement.style.left);
	
	// To WRITE TO the current top (Y) position, use this
	console.log("Image top (write only): ", imgElement.style.top);
	
	// To find the width of the screen window, use this
	console.log("Window width: ", window.visualViewport.width);
	
	// To find the height of the screen window, use this
	console.log("Window height: ", window.visualViewport.height);

	// This line of code starts the timer. Every "intervalSpeed" milliseconds,
	// "Update" is called. 
	setInterval(Update, intervalSpeed);
}



function Update(){
	console.log("This function is executed every " + intervalSpeed + " milliseconds");
	// Add "speedX" pixels to the left (X) position of the image
	imgElement.style.left = imgElement.offsetLeft + speedX + "px";
    imgElement.style.top = imgElement.offsetTop + speedY + "px";

    if (imgElement.offsetLeft + imgElement.width >= window.visualViewport.width || imgElement.offsetLeft <= 0){
        speedX = -speedX;
    } 
    
    if (imgElement.offsetTop + imgElement.height >= window.visualViewport.height || imgElement.offsetTop <= 0){
        speedY = -speedY;
    } 

}