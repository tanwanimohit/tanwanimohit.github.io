var viewportWidth = $(window).width();
var global_speed = 1;
var global_speed_val = 1;
animate();
// flagAnimation();
function animate() {
    $("#avtar").animate({ left: '9vw' }, global_speed * 2000);
    $("#avtar").animate({ top: '38vh' }, global_speed * 1000, () => {
        $(".coin").fadeOut(0, () => {
            $(".name").fadeIn(global_speed * 500);
            setTimeout(() => {
                $(".name").hide();
                $(".name").html("Welcome to my Portfolio");
                $(".name").fadeIn(global_speed * 500);
                setTimeout(() => {
                    $(".name").fadeOut(global_speed * 500);
                    if (viewportWidth > 1100) {
                        $("#avtar").animate({ left: '40vw' }, global_speed * 2000);
                        $("#avtar").animate({ top: '20.5vh', left: '51.5vw' }, global_speed * 500);
                    } else {
                        $("#avtar").animate({ left: '25vw' }, global_speed * 1000);
                        $("#avtar").animate({ top: '20.5vh', left: '55vw' }, global_speed * 500);
                    }
                    $("#avtar").animate({ top: '40vh' }, global_speed * 1000, () => {
                        $("#avtar").fadeOut(global_speed * 100);
                        setTimeout(() => {
                            $(".header").fadeOut(global_speed * 1000);
                            setTimeout(() => {
                                $(".aboutme").show();
                                $("body").css({ 'background': 'black', 'background-image': 'none' });
                                $("header").css({ "display": "flex" });
                                $(".dig-avatar").fadeIn(global_speed * 500);
                                $(".heading").fadeIn(global_speed * 500);
                                setTimeout(() => {

                                    $(".aboutme").fadeIn(global_speed * 500);
                                    $("body").effect("shake", { times: 2 }, global_speed * 500);
                                    setTimeout(() => {
                                        $(".aboutme").hide("explode", { pieces: 50 }, global_speed * 2000);
                                        setTimeout(() => {
                                            typeWriter();
                                        }, global_speed * 2100);
                                    }, global_speed * 500);
                                }, global_speed * 1000);
                            }, global_speed * 1000);
                        }, global_speed * 500);
                    });
                }, global_speed * 2000);
            }, global_speed * 1200);
        });
    });
}
$("#avtar").animate({ top: '50vh' }, global_speed * 1000);
$(window).scroll(function() {
    var value = window.screenY;
    $("#avtar").css({ "left": "+={value}" })
});
var i = 0;
var j = 0;
var speed = 50;
function typeWriter() {
    var txt = '/ <"name" : "Mohit Tanwani",/<"introduction" : "I am a full stack developer and I have a Masters Degree in Information and Technology. I am currently working on MERN stack",/<"email" : "iammohittanwani@gmail.com",/<"location" : "Ahmedabad, India",/<"hobbies" : "Photography and Cinematography"  //';
    if (i == 0)
        document.getElementById("myself").innerHTML += "{<p class='tab' id='tab'> ";
    if (i < txt.length) {
        if (txt.charAt(i) == '/')
            document.getElementById("tab").innerHTML += "<br>";
        else if (txt.charAt(i) == '<')
            document.getElementById("tab").innerHTML += "<br>";
        else
            document.getElementById("tab").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, global_speed * speed);
        if (i == txt.length)
            document.getElementById("myself").innerHTML += "} </p> <br><button onclick='gotoProjects()' id='projects-btn' value='&gt;  Show Projects'>&gt;  Show Projects</button> <br><button onclick='opemResume()' id='resume-btn' value='&gt;  Resume'>&gt;  Resume</button> ";
    }
}
function gotoProjects() {
    $("#projects-btn").fadeOut(global_speed * 50);
    $("#resume-btn").fadeOut(global_speed * 50);
    $(".dig-avatar").fadeOut(global_speed * 500);
    $(".pipe2").fadeIn(global_speed * 500);
    $(".avtar2").fadeIn(global_speed * 500);
    $("#avtar2").animate({ right: '0vh' }, global_speed * 2000);
    setTimeout(() => {
        $(".avtar2").fadeOut(global_speed * 200);
        $("#aboutme-page").fadeOut(global_speed * 500);
        setTimeout(() => {
            projects();
        }, global_speed * 500);
    }, global_speed * 1700);
}
function projects() {
    $(".water").fadeIn(global_speed * 500);
    $(".pipe3").fadeIn(global_speed * 500);
    setTimeout(() => {

        $(".pipe3").effect("bounce", { times: 3 }, global_speed * 1000);
        $(".avtar3").fadeIn(global_speed * 50);
        $(".avtar3").animate({ top: '80vh' }, global_speed * 1000);
        setTimeout(() => {
            $(".pipe3").fadeOut(global_speed * 500);
            $(".project-title").fadeIn(global_speed * 1000);
            $("#project-wrapper").fadeIn(global_speed * 1000);
            setTimeout(() => {

                $(".next-btn2").effect("pulsate", { times: 4 }, global_speed * 500);
                $(".next-btn").effect("pulsate", { times: 4 }, global_speed * 500);
            }, global_speed * 1200);
        }, global_speed * 1000);
    }, global_speed * 500);
}
function opemResume() {
    window.open("https://www.tinyfor.me/mohitresume", "_blank");
}
function floating() {
    if (j == 0) {
        $(".avtar3").animate({ left: '70vw' }, global_speed * 300);
        j = 1;
    } else {
        $(".avtar3").animate({ right: '70vw' }, global_speed * 300);
        j = 0;
    }
}
function openLink(str) {
    window.open(str, "_blank");
}
function gotoSocialLinks() {
    $(".next-btn2").fadeOut(global_speed * 10);
    $(".next-btn").fadeOut(global_speed * 10);
    $("#avtar-last").attr("src", "images/avtar-pole.png");
    $(".avtar3").animate({ left: '90vw' }, global_speed * 1500);
    setTimeout(() => {

        $("body").css({ 'background': 'brown', 'background-image': 'url(images/brick.png)', 'background-size': '10vh' });
        $(".water").fadeOut(global_speed * 500);
        $("#page3").fadeIn(global_speed * 500);
        $("#avtar-last").attr("src", "images/avatar.png");
        setTimeout(() => {
            flagAnimation();
        }, global_speed * 600);
    }, global_speed * 1300);
}
function flagAnimation() {
    var animationSpeed = global_speed * 700;
    if (viewportWidth > 1100) {
        $("#avtar-last").animate({ left: '25vh' }, animationSpeed);
        $("#avtar-last").animate({ top: '30vh', left: '42vh' }, global_speed * 300);
        setTimeout(() => {
            $("#avtar-last").attr("src", "images/avtar-pole.png");
            $("#avtar-last").animate({ top: '60vh' }, global_speed * 400);
            setTimeout(() => {
                $("#avtar-last").attr("src", "images/avatar.png");
                $(".flag").fadeIn(global_speed * 500);
                $(".flag-text").fadeIn(global_speed * 500);
                $("#avtar-last").animate({ left: '50vh' }, global_speed * 300);
                $(".name2").fadeIn(global_speed * 500);
                setTimeout(() => {
                    $(".social-links").css({ "display": "flex" });
                }, global_speed * 500);
            }, global_speed * 400);
        }, global_speed * 1000);
    } else {
        $("#avtar-last").animate({ left: '1vh' }, animationSpeed);
        $("#avtar-last").animate({ top: '44vh', left: '10vh' }, global_speed * 300);
        setTimeout(() => {
            $("#avtar-last").attr("src", "images/avtar-pole.png");
            $("#avtar-last").animate({ top: '70vh' }, global_speed * 400);
            setTimeout(() => {
                $("#avtar-last").attr("src", "images/avatar.png");
                $(".pole").animate({ height: '60vh', left: '1vh' }, global_speed * 500);
                $("#avtar-last").animate({ left: '5vh' }, global_speed * 400);
                setTimeout(() => {
                    $(".flag").fadeIn(global_speed * 500);
                    $(".flag-text").fadeIn(global_speed * 500);
                    $(".name2").fadeIn(global_speed * 500);
                    setTimeout(() => {
                        $(".social-links").css({ "display": "flex" });
                    }, global_speed * 500);
                }, global_speed * 500);
            }, global_speed * 400);
        }, global_speed * 1000);
    }
}

function updateGlobalSpeed() {
    globalThis.global_speed = global_speed / 2;
    globalThis.global_speed_val = global_speed_val * 2;
    document.getElementById("speed-btn").innerHTML = globalThis.global_speed_val + "x 🚀";
}