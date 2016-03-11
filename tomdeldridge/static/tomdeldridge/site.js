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

    var image = ["/static/tomdeldridge/images/eco.png", "/static/tomdeldridge/images/fhlora.png", "/static/tomdeldridge/images/pygamersImage.png", "/static/tomdeldridge/images/healthrankImg.png", "/static/tomdeldridge/images/john.png"];

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


// OnClick three services view changes
function onclickSectionChange(service) {
    console.log(service);
    var possibleServices = ["serviceswebdevicon", "servicesiosicon", "servicesdesignicon"];

    for (i in possibleServices) {
        if(possibleServices[i] === service) {
            document.getElementById(possibleServices[i]).style.height = "200px";
            document.getElementById(possibleServices[i]).style.width = "200px";
            document.getElementById(possibleServices[i]).style.marginTop = "0px";
            document.getElementById(possibleServices[i] + "label").style.fontSize = "20px";
            document.getElementById(possibleServices[i] + "label").style.borderBottom = "4px solid #3366BB";

            var buttonLabelText = document.getElementById(possibleServices[i] + "label").innerText;
            document.getElementById("threeserviceslabel").innerHTML = buttonLabelText;
        }
        else {
            document.getElementById(possibleServices[i]).style.height = "150px";
            document.getElementById(possibleServices[i]).style.width = "150px";
            document.getElementById(possibleServices[i]).style.marginTop = "25px";
            document.getElementById(possibleServices[i] + "label").style.fontSize = "15px";
            document.getElementById(possibleServices[i] + "label").style.borderBottom = "none";
        }
    }
    if (service === "servicesiosicon") {
        document.getElementById("imageTwo").src =  APPLE_IMAGE;
        document.getElementById("imageTwo").style.opacity =  0.8;
        document.getElementById("secondDescription").innerHTML =  "Apple's new programming language, Swift, makes building iOS apps easier than ever before.";
        document.getElementById("thirdDescription").innerHTML =  "Recently created an app called HealthRank that gives users a daily score on their health.";
        document.getElementById("firstDescription").innerHTML =  "&quot;Tom is an excellent app developer who gets things done quickly. &quot; <br><br>-Chris Trimble";
    }
    else if (service === "serviceswebdevicon") {
        document.getElementById("imageTwo").src =  PYTHON_IMAGE;
        document.getElementById("imageTwo").style.opacity =  1.0;
        document.getElementById("secondDescription").innerHTML =  "HTML, CSS, and JavaScript are used for the client side. Python and Django are used for the server side.";
        document.getElementById("thirdDescription").innerHTML =  "Recent web development projects include EcoQuiet Lawn Care, PyGamers.com, and Fhlora Inc.";
        document.getElementById("firstDescription").innerHTML =  "&quot;Tom is an inredible web developer.  He stay's on schedule and budget.&quot; <br><br> -George P. Carrette";
    }
    else if (service == "servicesdesignicon") {
        document.getElementById("imageTwo").src =  BALSAMIQ_IMAGE;
        document.getElementById("imageTwo").style.opacity =  1.0;
        document.getElementById("secondDescription").innerHTML =  "Balsamiq is used to design every last detail of the UI/UX before development begins.";
        document.getElementById("thirdDescription").innerHTML =  "Recent full-scale design projects include HealthRank and Fhlora.com.";
        document.getElementById("firstDescription").innerHTML =  "&quot;Tom is one of the best designers I've seen, and a user experience wizard.&quot; <br><br> -Chris Trimble";
    }
}