class Chain {
    constructor(bodyA,pointB){
        var options= {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.01  
        }
        this.pointB=pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
   
    fly(){
        this.chain.bodyA = null;
    }

    Launch(bodyA){
        this.chain.bodyA=bodyA
    }

    display(){
     
    }
  
}