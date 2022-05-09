song1=""
song2=""

leftWristx=0
leftWristy=0

rightWristx=0
rightWristy=0


function preload() {
song1=loadSound("blanspace.mp3")
song2=loadSound("radioactive.mp3")

}
function setup(){
canvas=createCanvas(600,430)
canvas.center()
video=createCapture(VIDEO)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on('pose',gotPoses)

}


function draw(){
image(video,0,0,600,430)


}
function modelLoaded(){
    console.log("posenet is loaded!!")
    
    
    }
    
    function gotPoses(results){
      if (results.length>0) {
        console.log(results)
        leftWristx=results[0].pose.leftWrist.x
        leftWristy=results[0].pose.leftWrist.y
    
        rightWristx=results[0].pose.rightWrist.x
        rightWristy=results[0].pose.rightWrist.y
    
    console.log(leftWristx,leftWristy,rightWristx,rightWristy)
      } 
      
    
    
    
    
    }


