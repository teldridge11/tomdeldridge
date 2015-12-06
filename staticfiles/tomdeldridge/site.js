// Show Mobile Navbar Onclick

function MobileMenu (object) {

    var elements={"nav":{title: "nav"}};
    var mobiledisplay = window.getComputedStyle(document.getElementById("nav")).display;

    //Show nav element
    for(var nav in elements) {

        if(object!==nav) {

            document.getElementById(nav).style.display='none';
        }
        if(object==nav && mobiledisplay=='block') {

            document.getElementById(nav).style.display='none';
        }
        else {

            document.getElementById(nav).style.display='block';
            location.hash=pages[nav].title;
            document.title=pages[nav].title;
        }
    }
}

function generateRandNum() {
    var num1 = Math.floor((Math.random() * 9) + 1);
    var num2 = Math.floor((Math.random() * 9) + 1);
    document.getElementById("num1setup").value = num1;
    document.getElementById("num2setup").value = num2;
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}

// Hide Mobile Nav when link is clicked
function HideNav () {

    var screen = window.innerWidth;
    var nav = document.getElementById("nav");

    if (screen < 900) {

        nav.style.display='none';
    }
}


// Change Slide in Slideshow

var  Image_Number = 0;

function change_image (num) {

    var image = ["/static/tomdeldridge/images/eco.png", "/static/tomdeldridge/images/fhlora.png", "/static/tomdeldridge/images/pygamers.png", "/static/tomdeldridge/images/healthrank.png", "/static/tomdeldridge/images/john.png"];

    var  Image_Length = image.length - 1;
    console.log(Image_Length);

    Image_Number = Image_Number + num;
    console.log(Image_Number);

    if (Image_Number > Image_Length) {

        Image_Number = 0;
    }

    if (Image_Number < 0) {

        Image_Number = Image_Length;
    }

    document.slideshow.src=image[Image_Number];

    return false;
}

// Change Slide Automatically - Interval Function

function auto () {

    setInterval(function(){

        change_image(1);

    }, 3000);
}