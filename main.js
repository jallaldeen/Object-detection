object_status="";
objects=[];
image_objects="";
myImage=localStorage.getItem("image");
function preload(){
    display_image=loadImage(myImage);
    
}
function setup() {
    canvas=createCanvas(600,350);
    canvas.center();
    detector=ml5.objectDetector("cocossd",modelLoaded);
   
   
  }
  function draw() {
    if(myImage=="bedroom2.jpg"){
        image_objects="4";
    }
    else if(myImage=="bottle.jpg"){
      image_objects="6";
    }
    else if(myImage=="desk1.jpg") {
      image_objects="5";
    }
    else if(myImage=="tvandac.jpg") {
      image_objects="5";
    }
    else if(myImage=="fruit1.webp") {
      image_objects="6";
    }
    image(display_image,0,0,600,350);
    if(object_status=="true"){
      detector.detect(display_image,gotResult);
     for(var i=0;i<objects.length; i++){       
      object_x=Math.floor(objects[i].x);      
      object_y=Math.floor(objects[i].y);  
      object_height=Math.floor(objects[i].height); 
      object_width=Math.floor(objects[i].width);  
      object_name=objects[i].label;  
      object_confidence=Math.floor(objects[i].confidence*100)+"%";
      console.log(objects);
     noFill();
     rect(object_x,object_y,object_width,object_height);
      fill("red");
      text(object_name+","+object_confidence,object_x,object_y);
      document.getElementById("objects_number").innerHTML="Number of Objects detected: "+objects.length +" Number of objects in the image: "+image_objects;
    }
      
  }
    
}
  function modelLoaded() {
    console.log("model is loaded");
    document.getElementById("status").innerHTML="Status : objects are being detected";
    object_status="true";
  }
  
  function gotResult(error,results){
    
    if(error){
      console.error(error);
    }
    else {
      //console.log(results);
      objects=results;
      
    }
    
  }

  function back() {
    window.location="index.html";
  }
  