class objectClass{
    constructor(x,y,width,height,image){
        var options = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage(image);
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}