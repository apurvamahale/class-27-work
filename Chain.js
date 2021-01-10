class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.Chain=Constraint.create(options)
        World.add(world,this.Chain)
    }
    display(){
        var A=this.Chain.bodyA.position
        var B=this.Chain.bodyB.position
        strokeWeight(6);
        line(A.x,A.y,B.x,B.y)

    }
}