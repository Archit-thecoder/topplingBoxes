class Ground{
 constructor(){
     var option = {
         isStatic:true
        }
        this.ground = Bodies.rectangle(200,390,400,20,option)
        World.add(myWorld,this.ground)
 }
    display(){
        rectMode(CENTER)
        fill("yellow")
        rect(this.ground.position.x,this.ground.position.y,400,20)
    }
}