Webcam.set({
    height:300,
    width: 310,
    img_format:"png",
    png_quality:90,

    constraints:{
        facingMode:"enviroment"
    }
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function Take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='photo'src='"+data_uri+"'/>"
    })
}

console.log("ML5 Version",ml5.version);
classifier=ml5.imageClassifier('MobileNet', modelLoaded);


function modelLoaded(){
 console.log("Model Loaded");
}

function check(){
img=document.getElementById("photo");
classifier.classify(img , gotresult);
}

function gotresult(error,results){

    if (error) {
        console.error(error);
    }

    else {
   
        console.log(results)
        document.getElementById("finalresult").innerHTML=results[0].label;
        }

}