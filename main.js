noseX = 0;
noseY = 0;
function preload()
{
    img = loadImage('m.png');
}
function setup()
{
    c =  createCanvas(500,500);
   c.center()
   video = createCapture(500,500);
   video.size(500,500)
   video.hide()
   d = ml5.poseNet(video,modelLoaded);
   d.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log('poseNet has been loaded');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log('nose x value = '+results[0].pose.nose.x);
        console.log('nose y value = '+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function draw()
{
    background('white');
    image(video,0,0,500,500)
    image(img, noseX-20, noseY+5,45,45)
}
function si()
{
    save('filter.png')
}