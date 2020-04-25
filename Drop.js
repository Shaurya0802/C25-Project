class Drop{
    constructor(x,y,yspeed){ 
        this.x = x;
        this.y = y;
        this.yspeed = yspeed;
    }
    
    fall(){
        this.y = this.y + this.yspeed;

        if(this.y > height){
            this.y =(-200,-100);
        }
    }

    display(){
        stroke(0,0,255);
        line(this.x,this.y,this.x,this.y + 20);
    }
}