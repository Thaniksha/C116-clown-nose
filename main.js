nosex=0;
nosey=0;

function preload(){
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center()
    chitti=createCapture(VIDEO);
    chitti.size(300,300);
    chitti.hide();

    poseNet=ml5.poseNet(chitti,modelLoaded);
    poseNet.on('pose',getPoses);
}


function draw(){
image(chitti,0,0,300,300)
image(clown_nose,nosex,nosey,30,30)
}

function getPoses(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y-10;
    }
}

function modelLoaded(){
    console.log("Posenet is initialized successfully")
}

function take_snapshot(){
    save("thaniksha_app.png") 
}