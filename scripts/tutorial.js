//FAVOURITE STAR FUNCTIONS
function changeOpacity() {
    x = document.getElementById('changeme');
    x.style.opacity = 1;
}
function changeOpacity2() {
    x = document.getElementById('changeme2');
    x.style.opacity = 1;
}
function changeOpacity3() {
    x = document.getElementById('changeme3');
    x.style.opacity = 1;
}
function changeOpacity4() {
    x = document.getElementById('changeme4');
    x.style.opacity = 1;
}
//FUNCTION FOR POP UP TO FADE OUT
function fadePopup(){
    var s = document.getElementById('popup').style;
    s.visibility = "visible";
    s.opacity = 1;
    (function fade()
     {(s.opacity-=0.1)<0?s.display="none":setTimeout(fade,140)})();

    var y = 1;
    if (y == 1) {
        y = 0;
        $('.popup').toggleClass('show');
        $('.popup').toggleClass('active');
    } else {
        y = 1;
        $('.popup').removeClass('show');
        $('.popup').removeClass('active');
    }
}