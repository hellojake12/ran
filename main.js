song1="";
song2="";

song1status="";

song2status="";
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload(){
	song1=loadSound("music.mp3");
	song2=loadSound("music2.mp3");
}

function setup(){
	canvas=createCanvas(600,500);
	canvas.center();
	video=createCapture(VIDEO);
	video.hide();
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log('poseNet is Initialized');
}

function draw(){
	image(video,0,0,600,500);
}

function play(){
	song.play();
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);

		leftWristX=results[0].pose.leftWristX.x;
		leftWristY=results[0].pose.leftWristY.y;
		console.log("leftWristX ="+leftWristX+"leftWristY ="+leftWristY);

		rightWristX=results[0].pose.rightWristX.x;
		rightWristY=results[0].pose.rightWristY.y;
		console.log(" RightWristX = "+rightWristX+"rightWristY ="+rightWristY);
	}
}