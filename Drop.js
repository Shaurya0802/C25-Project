class Drop{
    constructor(x1,y1,x2,y2,yspeed){
        this.body = line(x1,y1,x2,y2);
        this.x1 = x1;
        this.y1 = y1;
        this.y2 = y2;    
        this.yspeed = yspeed;
    }
    
    fall(){
        this.y = this.y + this.yspeed;
        if(this.y > height){
            this.y = random(this.y-300,this.y-200);
        }
    }

    display(){
        stroke(0,0,255);
        line(this.x1,this.y1,this.x1,this.y1 + 10);
    }
}