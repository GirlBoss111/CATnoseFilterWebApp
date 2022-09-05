https://i.postimg.cc/ZR3R2XwF/catimage-removebg-preview.png

noseX = 0;
noseY = 0;

function preload(){
    cat_image = loadImage("https://i.postimg.cc/ZR3R2XwF/catimage-removebg-preview.png");
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is loaded');
}

function draw(){
    image(video, 0, 0, 300, 300)
    image(cat_image, noseX - 22, noseY - 25, 40, 40);
}

function takesnapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}