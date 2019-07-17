let planets = [];
let sun = new Orbiter(100, 0);

function setup(){
    createCanvas(windowWidth-3, windowHeight-3);
    frameRate(144);
    sun.colorR, sun.colorG, sun.colorB = 100, 100, 0;
    sun.x = windowWidth/2;
    sun.y = windowHeight/2;
    for(i = 0; i < 5; i++){
        planets[i] = new Orbiter(5 + i*15, 110 + i*70)
        planets[i].orbitAngleMod= 1.4 - i/7;
        planets[i].orbitAngle= i*5;
        planets[i].colorR = i * 50 + 5;
        planets[i].colorG = 50 + i *10;
        planets[i].colorB = 255 - planets[i].colorR;
    }
}

function draw(){
    background("white");
    background(0, 20, 100)
    for(planet of planets){
        planet.orbit(sun);
        planet.display();
    sun.display()
    }
    
}