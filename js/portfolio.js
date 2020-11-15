var cursorDotEl = document.querySelector("#cursor-dot"),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress");
    viewEl = document.querySelectorAll(".img-wrapper > img");
    // titEl = document.querySelector(".project-tit > span");
    // listEl = document.querySelectorAll("#list"),
    // btnListEl = listEl.querySelectorAll(".view-item");


// btnListEl = Array.prototype.slice.call(btnListEl);
function onMouseMove(e){
    var posX = e.clientX, posY = e.clientY;

    gsap.to(cursorDotEl,{
        "top": posY, 
        "left": posX,
        "duration": 0.5, 
        "ease" : "sine.out" 
    });
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.3, ease: "sine.out"});
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25, ease: "sine.out"});
}
function onMouseEnterList() {
    // console.log("enter");
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList() {
    // console.log("leave");
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}

window.addEventListener("mousemove", onMouseMove);
for(var i = 0; i < viewEl.length; i++){
    viewEl[i].addEventListener("mouseenter", onMouseEnterList);
    viewEl[i].addEventListener("mouseleave", onMouseLeaveList);
}
console.log(viewEl);
// viewEl.addEventListener("mouseenter", onMouseEnterList);
// viewEl.addEventListener("mouseleave", onMouseLeaveList);


// 마우스 이미지 커서
// function onMouseMoveFigure(e) {
//     var x = e.clientX - figureEl.getBoundingClientRect().left + window.pageXOffset,
//         y = e.clientY - figureEl.getBoundingClientRect().top + window.pageYOffset,
//         rotX = getRange(y, 0, e.currentTarget.getBoundingClientRect().height, degree * -1, degree),
//         rotY = getRange(x, 0, e.currentTarget.getBoundingClientRect().width, degree * -1, degree);
//     gsap.killTweensOf(figureImgEl);
//     gsap.to(figureImgEl, {rotationX: rotX, rotationY: rotY, duration: 0.2});
// }
// function onMouseLeaveFigure(e) {
//     gsap.killTweensOf(figureImgEl);
//     gsap.to(figureImgEl, {rotationX: 0, rotationY: 0, duration: 0.4, ease: "sine.out"});
// }

// function getRange(value, inMin, inMax, outMin, outMax) {
//     return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

// function addEvent() {
//     figureEl.addEventListener("mousemove", onMouseMoveFigure);
//     figureEl.addEventListener("mouseleave", onMouseLeaveFigure);
// }
// function init() {
//     addEvent();
// }
// init();