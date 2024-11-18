///For homework 10/11, you will be combining arrays, randomness, and user interaction to create a themed drawing machine where users can create compositions. The basic features of the program are:
//A canvas that can be drawn on with both button pressed and mouse interaction.
//At least 2 buttons that draw a specific image on the screen at a random location.
//At least 1 button that draws a randomly selected image on the screen at a random location.
//Mouse click drawing that draws a shape or image at the location of the mouse.
//At least 2 other buttons that draws things on the screen in some way (shapes, more images, lines, a clear screen feature, etc)
//HTML and CSS used to add colors, fonts, and text that explain the drawing machine.
//All of this should be themed/unified in some way!


//at least 2 
//A button to save the canvas as an image
//Music that plays when a button is pressed
//Buttons that change the background color or image while clearing the screen
let song;
let font;
let image1;
let image2;
let image3;
let picture = [];


function preload() {
  //song = loadSound('/folder/music.mp3')
  //font = loadFont('/folder/Oswald-VariableFont_wght.ttf')
  picture[0] = loadImage('/folder/G3.png')
  picture[1] = loadImage('/folder/P1.png')
  picture[2] = loadImage('/folder/R2.png')
  picture[3] = loadImage('/folder/B4.png')
  
  
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  
  var button = createButton('FACE 1')
  button.parent('button-holder')
  button.mousePressed(draw1);
  
  var button2 = createButton('FACE 2')
  button2.parent('button-holder')
  button2.mousePressed(draw2); 
  
  var button3 = createButton('FACE 3')
  button3.parent('button-holder')
  button3.mousePressed(draw3); 
  
  var button4 = createButton('CLEAR')
  button4.parent('button-holder')
  button4.mousePressed(drawclear);
  
  var button5 = createButton('COLOR')
  button5.parent('button-holder')
  button5.mousePressed(colur);
  
  var button6 = createButton('RANDOM FACE')
  button6.parent('button-holder')
  button6.mousePressed(drawr);
  
  var button7 = createButton('SOUND')
  button7.parent('button-holder')
  button7.mousePressed(theme);
  
  var button8 = createButton('SAVE')
  button8.parent('button-holder')
  button8.mousePressed(SAVE);
  
  
  song = loadSound('/folder/music.mp3')
  //imageMode(CENTER);
  background(220);
}

function draw1() {
  image(picture[0], random(width), random(height), 100, 100);
}

function draw2() {
  image(picture[1], random(width), random(height), 100, 100);
}

function draw3(){
  image(picture[2], random(width), random(height), 100, 100);
}

function drawclear() {
  background(220);
}

function colur(){
  background(random(255),random(255),random(255))
}

function drawr() {
   let ranImg = int(random(picture.length));
  image(picture[ranImg], random(width), random(height), 100, 100);
}

function theme() {
    song.play();
}

function SAVE() {
  saveCanvas('EmmanuelCanvas.jpg');
}

function mousePressed(){
  if (mouseX < width && mouseX > 0) {
    if (mouseY < height && mouseY > 0) {
      image(picture[2], mouseX, mouseY, 100, 100);
    }
  }
}