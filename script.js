/*let xy=23
let z=xy+128
alert(z)*/
let link=document.querySelector(".header-link")

link.addEventListener("mouseover",changeColor)
function changeColor(){
link.style.color="violet"
}
link.addEventListener("mouseout",changeColor2)
function changeColor2(){
link.style.color="black"
}
