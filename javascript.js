var index=0;
var i = 0;
var slider=document.getElementsByClassName("slider");
var line=document.getElementsByClassName("line");

auto();

function show(n){
    for ( i= 0; i < slider.length; i++) { //slider.length=4
        slider[i].style.display="none";
    }
    for (i = 0; i < line.length; i++) { //line.length =4
        line[i].className=line[i].className.replace("active");
    }
    slider[n-1].style.display=("block");
    line[n-1].className +=" active"; //add space
}

function auto(){
    index++;
    if(index>slider.length){ //to from last slide to first
        index = 1;
    }
    show(index); //calling show
    setTimeout(auto,5000); //next slide will appear after 5s
}
function plusSlide(n){
    index+=n; //n=i or n=-1
    if(index>slider.length){ //to from last slide to first
        index = 1;
    }
    if(index<1){  //to move from first to last
        index=slider.length;
    }
    show(index);
}

function currentSlide(n){
    index=n;
    show(index);
}
