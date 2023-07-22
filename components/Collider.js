AFRAME.registerComponent("flying-birds",{
    init:function(){
        for(var i=1 ;i<=20;i++){
            var id=`hurdle${i}`
            var posx=Math.floor(Math.random()*3000+(-1000))
            var posy=Math.floor(Math.random()*2+(-1))
            var posz=Math.floor(Math.random()*3000+(-1000))
            var position={x:posx,y:posy,z:posz}
            this.flyingBirds(id,position)
        }
    },
    flyingBirds:(id,position)=>{
        var terrainel=document.querySelector("#terrain")
        var birdel=document.createElement("a-entity")
        birdel.setAttribute("id",id)
        birdel.setAttribute("position",position)
        birdel.setAttribute("scale",{x:500,y:500,z:500})

        birdel.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdel.setAttribute("animation-mixer",{})

        terrainel.appendChild(birdel)
    }
})