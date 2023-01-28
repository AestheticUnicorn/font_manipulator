noseX=0;
nosyY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup() {
   
        canvas = createCanvas(300, 300);
        video = createCapture(VIDEO);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#C9EBFB');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY) 

        leftWristX=results[0].pose.leftWristX.x;
        rightWristX=results[0].pose.rightWristX.x;
        difference=floor(leftWristX - rightWristX);
    
        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference);     }
}

