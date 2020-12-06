class stoneClass{
    constructor(x,y,width,height,image){
        var options = {
            restitution : 0,
            density : .2,
            friction : 1,
            isStatic : false
        }

        this.width = width;
        this.height = height;
        this.image = loadImage(image);
        this.body = Bodies.circle(x,y,width/2,options);
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