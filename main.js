img="";
objects=[];
status="";
function draw()
{
   image(img,0,0,600,400);

   if(status!=""){
       for(i=0;i<objects.length;i++){
           document.getElementById("status").innerHTML="status:object detected";
           fill("#340ECC");
           percent=floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
           noFill();
           stroke("#C340EC");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
   }
}
function preload()
{
       img=loadImage("dog_cat.jpg");
}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="status detecting object";
}
function modelloaded(){
console.log("modelloaded");
status=true;
objectDetector.detect(img,gotResult);

}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }


 console.log(results);
 objects=results;

}
