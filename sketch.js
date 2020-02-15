// You could have multiple flags like: start, launch to indicate the state of the game.
var flag="start";




    
    
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1400,700);
    background("white");
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(200,height,100,2500);
    t1=new Tanker(120,600,200,100);
    t2=new Tanker(210,520,160,50,PI/2);    
    options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    
}

function draw() {
// Remember to update the Matter Engine and set the background.
    Engine.update(engine);
    ground.display();
    t1.display();
    circle(100,530,80);
    t2.display();
    circle(380,320,50,options);
    circle(800,520,50,options);
    circle(500,620,50,options);
    

    

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyCode===DOWN_ARROW){
        flag="start";
        
    }

}