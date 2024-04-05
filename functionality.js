function setBoard(){
    const button = document.querySelector("#button");
    button.onclick = ()=>{
        for (let i = 0; i< 506; i++){
            const board = document.querySelector(".board");
            let pixel = document.createElement("div");
            pixel.setAttribute("id", "pixels");
            board.appendChild(pixel);
        }
    }
}
function changeColor(){
    let color = document.getElementById("pixels");
    color.style.backgroundColor = "#00FF00";
}
setBoard();
const pixeeel = document.getElementById("pixels");
    pixeeel.onclick = () =>{
         changeColor();
    }