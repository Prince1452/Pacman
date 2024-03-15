var splashScreen; 
var play;
var info;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8, wall9,wall10,wall11;
var gameState = "wait";
function preload(){
    splashScreen = loadImage("assets/manpac.gif");
}

function setup(){
    createCanvas(800,800);
    
    play = createImg("assets/play.png")
    play.position(300,400);
    play.size(80,100);
    play.hide();

    info=createImg("assets/info.png")
    info.position(400,400);
    info.size(80,100);
    info.hide();

    wall1=createSprite(350,100,200,50);
    wall1.shapeColor="blue";
    wall1.visible= false;
    wall2=createSprite()
    wall2.shapeColor="blue"
    wall2.visible= false;
    wall3=createSprite(550,250,200,50)
    wall3.shapeColor="blue"
    wall3.visible=false;
    wall4=createSprite(300,350,200,50)
    wall4.shapeColor="blue"
    wall4.visible=false;
    wall5=createSprite(400,450,200,50)
    wall5.shapeColor="blue"
    wall5.visible=false;
    wall6=createSprite(500,350,200,50)
    wall6.shapeColor="blue"
    wall6.visible=false;
    wall7=createSprite(600,200,200,50)
    wall7.shapeColor="blue"
    wall7.visible=false;
    wall8=createSprite(700,300,200,50)
    wall8.shapeColor="blue"
    wall8.visible=false;
    wall9=createSprite(650,200,200,50)
    wall9.shapeColor="blue"
    wall9.visible=false;
    wall10=createSprite(500,600,200,50)
    wall10.shapeColor="blue"
    wall10.visible=false;
    wall11=createSprite(120,700,200,50)
    wall11.shapeColor="blue"
    wall11.visible=false;





}

function draw(){
    if(gameState == "wait"){
        background(splashScreen);
        play.show();
        info.show();
    }
    

    play.mousePressed(()=>{
        play.hide();
        info.hide();
        gameState = "play";
    })
    info.mousePressed(()=>{
        play.hide();
        info.hide();
        gameState="info"
    })

    if(gameState == "info"){
        abtGame();
    }
    if(gameState == "play"){
        background("black")
        wall1.visible = true;
        wall2.visible = true;
        wall3.visible = true;
        wall4.visible = true;
        wall5.visible = true;
        wall6.visible = true;
        wall7.visible = true;
        wall8.visible = true;
        wall9.visible = true;

    }

    drawSprites();
}

function abtGame(){
    swal({
        title:"About this Game",
        text:"Use keys to collect all the buttons and not get eaten by the enemies goodluck!",
        textAlign:"center",
        imageUrl:"assets/manpac.gif",
        imageSize:"300x300",
        confirmButtonText:"Go back to the mainscreen",
        confirmButtonColor:"blue"
    },
    function(){
        gameState ="wait"
    })
}
