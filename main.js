img="";
status = "";

function preload() {
 img = loadImage('dog_cat.jpg');
}

function setup() {
 canvas = createCanvas(640,420);
 canvas.center();
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status : Object Detected";
}

function modelLoaded() {
 console.log("Model Loaded!");
 status = true;
 objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
 if (error) {
  console.log(error);
 }
 console.log(results);
}

function draw() {
 image(img, 0, 0, 640, 420);
 text("Dog", 45, 75);
 noFill();
 stroke("#FF0000");
 rect(30, 60, 450, 350 );

text("Cat", 310, 135);
noFill();
stroke("#FF0000");
rect(300, 120, 250, 280 );

text("Bowl", 285, 315);
noFill();
stroke("#FF0000");
rect(280, 300, 130, 100 );
}