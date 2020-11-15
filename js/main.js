var galleryEl = document.querySelector('.main-visual'),
    viewEl = galleryEl.querySelector('.view'),
    viewContainerEl = viewEl.querySelector('.view-container'),
    viewItemEls = viewContainerEl.querySelectorAll('.view-item'),
    viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img'),

    _isAni = false,
    _galleryW = 650,
    _cuId = 0,
    _exId = null,
    _max = null;
    _duration = 400,
    _addDuration = 200;

    btnPaddleNavEls = galleryEl.querySelectorAll("button.arrow"),
    btnPaddleNavEl = galleryEl.querySelector('button.arrow.next');
function onClickPaddleNav(e){
    e.preventDefault();
    var el = e.currentTarget; //이벤트가 바인딩된 div 요소를 반환

    if(el.classList.contains("next")) { 
        console.log("다음") 
        _cuId++; 
        // h1SpanEl.innerHTML("Rulu");

        // _max값이 되었을 때 거기서 -1한 값으로 강제 변경.
        if(_cuId > _max - 1) {
            _cuId = _max - 1;
        }
    }
    // 갤러리슬라이드 함수 불러옴
    gallerySlide();
}

function galleryResize() {
    viewEl.style.width = _galleryW + "px"; 
    viewContainerEl.style.width = _galleryW * _max + "px"; 
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
    }
    gallerySlide(true);
}

function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
}

function gallerySlide(static) {
    var left = _galleryW * _cuId * -1,
        duration = _duration + _addDuration * Math.abs(_cuId - _exId),
        bool = (static) ? static : false;
    viewContainerEl.style.transform = "translate3d(" + left + "px, 0, 0) translateY(-9%)";
    if(!bool) {
        _isAni = true;
        viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        _exId = _cuId;
    }else{
        viewContainerEl.style.removeProperty("transition");
        _isAni = false;
    }
}



//------------------
// 이벤트가 바인딩되는 기능들.
////...............
function addEvent() {
    // 트렌지션 끝내는 이벤트 바인딩 기능
    // viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    // 이미지슬라이드 버튼 클릭 이벤트 바인딩 기능
    for(var j = 0; j < btnPaddleNavEls.length; j++){
        btnPaddleNavEls[j].addEventListener("click", onClickPaddleNav);
    }
}
// 초기화 기능.
function init() {
    _max = viewItemEls.length;
    _exId = _cuId;
    addEvent();
    galleryResize();
}
init();