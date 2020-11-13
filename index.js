var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var servicesCont = document.getElementById('servicesCont');
var website = document.getElementById('website');
var webApp = document.getElementById('webApp');
var hosting = document.getElementById('hosting');
var seo = document.getElementById('seo');
var cPannel = document.getElementById('cPannel');
var android = document.getElementById('android');

var whichOne = 0;

function changeSlide(){
    whichOne+=1;
    console.log(whichOne);
    if(whichOne==1){
        img1.style.opacity=1;
        img2.style.opacity=0;
        img3.style.opacity=0;
        img4.style.opacity=0;
    }
    else if(whichOne==2){
        img1.style.opacity=0;
        img2.style.opacity=1;
        img3.style.opacity=0;
        img4.style.opacity=0;
    }
    else if(whichOne==3){
        img1.style.opacity=0;
        img2.style.opacity=0;
        img3.style.opacity=1;
        img4.style.opacity=0;
    }
    else{
        whichOne=0;
        img1.style.opacity=0;
        img2.style.opacity=0;
        img3.style.opacity=0;
        img4.style.opacity=1;
    }
    setTimeout(changeSlide, 5000);
}


setTimeout(changeSlide,0);


function buttonPress(whichButton){
    if(whichButton=='Services'){
        servicesCont.scrollIntoView();
        website.style.marginLeft='0%';
        webApp.style.marginLeft='0%';
        hosting.style.marginLeft='0%';
        seo.style.marginLeft='0%';
        cPannel.style.marginLeft='0%';
        android.style.marginLeft='0%';
    }
}



function bodyScroll(){
    if(window.pageYOffset>100){
        website.style.marginLeft='0%';
        webApp.style.marginLeft='0%';
        hosting.style.marginLeft='0%';
        seo.style.marginLeft='0%';
        cPannel.style.marginLeft='0%';
        android.style.marginLeft='0%';
    }
    else{
        website.style.marginLeft='-100%';
        webApp.style.marginLeft='-100%';
        hosting.style.marginLeft='-100%';
        seo.style.marginLeft='-100%';
        cPannel.style.marginLeft='-100%';
        android.style.marginLeft='-100%';
    }
}