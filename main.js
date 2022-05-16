song = ""

leftWristx = 0
leftWristy = 0

rightWristx = 0
rightWristy = 0

scoreleftwrist = 0
scorerightwrist = 0




function preload() {
  song = loadSound("music.mp3")

}

function setup() {
  canvas = createCanvas(600, 500)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()
  posenet = ml5.poseNet(video, modelLoaded)
  posenet.on('pose', gotPoses)


}


function draw() {
  image(video, 0, 0, 600, 500)

  fill("black")
  stroke("white")

  if (scoreleftwrist > 0.2) {
    circle(leftWristx, leftWristy, 30)

    inno = Number(leftWristy)
    floornum = floor(inno)

    volume = floornum / 500
    song.setVolume(volume)

    document.getElementById("volume").innerHTML = "volume=" + volume


  }

  if (scorerightwrist > 0.2) {
    circle(rightWristx, rightWristy, 30)


    if (rightWristy > 0 && rightWristy <= 100) {
      song.rate(0.5)
      document.getElementById("speed").innerHTML = "speed=0.5x"

    } else if (rightWristy > 100 && rightWristy <= 200) {
      song.rate(1)
      document.getElementById("speed").innerHTML = "speed=1x"

    }

    else if (rightWristy > 200 && rightWristy <= 300) {
      song.rate(1.5)
      document.getElementById("speed").innerHTML = "speed=1.5x"

    }

    else if (rightWristy > 300 && rightWristy <= 400) {
      song.rate(2)
      document.getElementById("speed").innerHTML = "speed=2x"

    }

    else if (rightWristy > 400 && rightWristy <= 500) {
      song.rate(2.5)
      document.getElementById("speed").innerHTML = "speed=2.5x"

    }

   





































  }


}







function songply() {
  song.play()


}

function modelLoaded() {
  console.log("posenet is loaded!!")


}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)
    leftWristx = results[0].pose.leftWrist.x
    leftWristy = results[0].pose.leftWrist.y

    rightWristx = results[0].pose.rightWrist.x
    rightWristy = results[0].pose.rightWrist.y

    scoreleftwrist = results[0].pose.keypoints[9].score
    scorerightwrist = results[0].pose.keypoints[10].score


    console.log(leftWristx, leftWristy, rightWristx, rightWristy)
  }





}