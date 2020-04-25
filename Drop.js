class Drop{
    constructor(x1,y1,x2,y2){
        this.body = line(x1,y1,x2,y1+10); 
        this.x = random(width);
        this.y = random(-100,-50);
        this.yspeed = random(10,20);
        this.rand = random(10,20);
    }
    
    fall(){
        this.y = this.y + this.yspeed;

        if(this.y > height){
            this.y = random(-100,-50);
        }
    }

    display(){
        stroke(0,0,255);
        line(this.x,this.y,this.x,this.y + this.rand);
    }
}