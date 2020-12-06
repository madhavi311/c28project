class const1{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 1
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(myWorld,this.chain);
    }

    display(){
        if(this.chain.bodyA){
        line(this.pointB.x,this.pointB.y,this.chain.bodyA.position.x,this.chain.bodyA.position.y);
        }
    }

    fly(){
        this.chain.bodyA=null;
    }

    launch(body){
        this.chain.bodyA=body;
    }
}