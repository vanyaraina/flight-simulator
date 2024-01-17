AFRAME.registerComponent("terrain-rotation",{
    schema:{
        speedofRotation:{type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown", (e)=>{
           console.log("hi")
           
            if(e.key == "ArrowRight"){
                if(this.data.speedofRotation<0.1){
                    this.data.speedofRotation+=0.1
                }
            }

            if(e.key == "ArrowLeft"){
                if(this.data.speedofRotation>-0.1){
                    this.data.speedofRotation-=0.1
                }
            }
        })
    },
    tick:function(){
       
       
        var terrainRotation = this.el.getAttribute("rotation")
        terrainRotation.y+=this.data.speedofRotaion;
        this.el.setAttribute("rotation",{
            x: terrainRotation.x, y:terrainRotation.y, z: terrainRotation.z,
        })
    }

})

// AFRAME.registerComponent("rotationofplane",{})

