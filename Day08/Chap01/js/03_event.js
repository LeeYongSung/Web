$(function() {

    // 이벤트 처리 메소드
    // -on('이벤트 타입', 이벤트핸들러(콜백함수) { })
    // * 이벤트 타입 : click, keyup, change ...
    // * 이벤트 핸들러 : 이벤트 발생 시, 실행될 콜백 함수

    /* 
        콜백함수
        - function()    : $(this) 사용가능
        - () => {}      : $(this) 사용불가
    */


    // $('#item1').on('click', function() {
    //     $('#item1').css('color', 'hotpink');
    // });
    $('#item1').hover(function() {
        $('#item1').css('color', 'hotpink');
    }, function() {
        $('#item1').css('color', 'white');
    });

    // this     : 현재 속한 블록의 객체
    //            현재 선택한 요소를 가리키는 키워드
    $('#item2').on('click', function() {
        $(this).css('color', 'hotpink');
    });

    // mouseover    : 마우스 올렸을 때 이벤트
    $('#item3').on('mouseover', function() {
        $(this).css('color', 'yellow');
        $(this).css('background-color', 'cornflowerblue');
    });

    // mouseout     : 마우스 벗어날 때 이벤트
    $('#item4').on('mouseout', function() {
        $(this).css('color', 'white');
        $(this).css('background-color', 'red');
    });

    // 메서드 체인
    // : 하나의 jQuery 객체에 여러 메서드를 연결하는 기법
    $('#item4').on('mouseover', function() {
                $(this).css('color', 'yellow');
                $(this).css('background-color', 'cornflowerblue');
    })
                .on('mouseout', function() {
                $(this).css('color', 'white');
                $(this).css('background-color', 'red');
    });

        $('#item5')
                .on('mouseover', function() {
                    $(this).css('color', 'yellow');
                    $(this).css('background-color', 'cornflowerblue');
    })
                .on('mouseout', function() {
                    $(this).css('color', 'white');
                    $(this).css('background-color', 'red');
    })
                .on('click', function() {
                    $(this).css('board', '10px solid yellow');
    })
                .on('dblclick', function() {
                    $(this).css('transform', 'translate(45px, 45px;)');
    });
    
});