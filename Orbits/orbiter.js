class Orbiter {
  
    constructor(rad, orbitAlt, x = 0, y = 0, orbitAngle = 0, orbitAngleMod = 1, colorR=255, colorG=255, colorB=255, colorA=255){
        this.orbitAngle = orbitAngle;
        this.orbitAngleMod = orbitAngleMod;
        this.rad = rad;
        this.orbitAlt = orbitAlt;
        this.x = x;
        this.y = y;
        this.colorR = colorR;
        this.colorG = colorG;
        this.colorB = colorB;
        this.colorA = colorA;
    }

    orbit(object){
        this.x = object.x + this.orbitAlt * cos(Math.radians(this.orbitAngle));
        this.y = object.y + this.orbitAlt * sin(Math.radians(this.orbitAngle));
        this.orbitAngle = this.orbitAngle + this.orbitAngleMod;
        if(this.orbitAngle >= 360){
            this.orbitAngle = 0;
        }
    }

    display(){
        noStroke();
        fill(this.colorR, this.colorG, this.colorB, this.colorA);
        return ellipse(this.x, this.y, this.rad, this.rad);
    }


}