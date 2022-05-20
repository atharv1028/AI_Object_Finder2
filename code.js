status = "";

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.position(580, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 400, 300)
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    document.getElementById("object_input").value;
}

function modelLoaded()
{
    console.log("Model loaded");
    status = true;
}