function setBoard(){
    const button = document.querySelector("#grid");
    button.onclick = ()=>{
        for (let i = 0; i< 506; i++){
            const board = document.querySelector(".board");
            const pixel = document.createElement("div");
            pixel.setAttribute("class", "pixels");
            board.appendChild(pixel);
            
            pixel.onmousedown = ("click", (event) =>{
                changeColor(event.target);
            })
        }
    };t
    const erase = document.getElementById("erase");
    erase.onclick = () =>{
        
    }
}
function changeColor(pixel){
        let color = "black";
        pixel.style.backgroundColor = color;
}
setBoard();
