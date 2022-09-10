function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 525);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResult);
}

function modelLoaded() {
    console.log("Posenet is loaded");
}

function draw() {
    background("grey");
}

function gotResult(results) {
    if(results.length > 0) {
        console.log(results);
    }
}