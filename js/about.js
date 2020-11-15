console.log("Script Load");

(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        // Image Slider.
        
        var _this = this;
        
        var _cuId = 0,
            _exId = 0,
            _max = void 0;

        var _isAni = false; // 애니메이션 여부를 판단하는 Boolean 변수 true / false

        function init() {
            // 초기화 함수.
            layout();
            setting();
            addEvent();
            reset();
        }

        function layout() {
            // 셀렉터를 찾아오는 함수.

            _this.$banner = $('.banner');

            // dot navigation
            _this.$dotNav = _this.$banner.find('.dot-nav');
            _this.$dotEl = _this.$dotNav.find('span');

            // banner
            _this.$wrap = _this.$banner.children('.banner-wrap');
            _this.$container = _this.$wrap.children('.banner-container');
            _this.$item = _this.$container.children('.banner-item');
            _this.$bar = $('.fill');
        }
        function setting() {
            // 초기 세팅 함수.
            _cuId = 0;
            _exId = _cuId;
            // 전체 이미지 아이템의 개수.
            _max = _this.$item.length;
        }

        function addEvent() {
            // 이벤트 연결 함수.
            // _this.$btnPaddle.on('click', onClikcBtnPaddle)
            _this.$dotEl.on('click', onClickDotEl);
        }

        function reset() {
            // 세팅과 연결 후 초기화 함수.
            // paddleSet();
            dotSet();
        }

        function onClickDotEl(e){
            if(_isAni) return; // 애니메이션 중이면 클릭이 되지 않는다.
            // var $el = $(e.currentTarget);
            var id = _this.$dotEl.index(e.currentTarget);
            
            if(_exId !== id){
                _cuId = id;
                changeBanner();
            }
        }

        

        function changeBanner() {
            console.log('change Banner');
            _isAni = true; // 애니메이션이 이뤄지는 중. - 클릭 방지

            //console.log(_cuId);
            var left = 1069 * _cuId * -1;
            var right = -212.5 * _cuId;
            var duration = 350 + Math.abs(_exId - _cuId) * 150;
            // 기본 속도는 350 ---- + 이동하려는 ID와의 간격에 따라 150 속도를 추가한다.
            // 1개이동할때 - 350 + 150
            // 2개이동할때 - 350 + 300
            // ...
            // ...
            // console.log(duration); _exId 와 _cuId의 비교값.(절대값 적용)

            // paddleSet();
            dotSet();

            // left 속성 값을 변경.
            // _this.$bar.css({
            //     'left' : right
            // });

            // left 속성 값을 변경하여 0.8초 동안 애니메이션 생성.
            // _this.$container.stop(true).animate({
            //     'left' : left
            // }, 800);

            _this.$bar.stop(true)
                .animate(
                    { 'right' : right},
                    {
                        'complete' : function(){ // complete 함수 - 애니메이션 완료 callback 함수.
                            // console.log('Complete');
                            _exId = _cuId;
                            _isAni = false; // 애니메이션이 완료. - 클릭이 될 수 있는 상태.
                        }
                    });

            _this.$container.stop(true)
                .animate(
                    { 'left' : left }, // 애니메이션이 이뤄질 스타일
                    { // 애니메이션 옵션.
                        'duration' : 800, // duration - 애니메이션 속도.
                        'easing' : 'easeInOutQuad', // easing - 애니메이션 가속도 설정 - jQuery Easing 의 설정값을 받아서 기입.
                        'complete' : function(){ // complete 함수 - 애니메이션 완료 callback 함수.
                            // console.log('Complete');
                            _exId = _cuId;
                            _isAni = false; // 애니메이션이 완료. - 클릭이 될 수 있는 상태.
                        }
                    });
        }
        


        // dot nav 부분의 활성화를 바꿔주는 기능.
        function dotSet(){
            _this.$dotEl.removeClass('selected');
            _this.$dotEl.eq(_cuId).addClass('selected');
        }

        // 전체 호출.
        init();
    });
})(jQuery);
