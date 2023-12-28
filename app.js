var i = 0;
var txt1 =
    "Hi Shaily.....!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind these days...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't used my work knowledge to anyone like this and I won't do to anyone in future...!                                                     > I Love my small family so much than anything else in this world....!                    << And now I want you to be a part of my small family....!                                                             >Will you marry me??????";
var speed = 55;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {
        if (txt1.charAt(i) == "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (txt1.charAt(i) == ">")
            document.getElementById("text1").innerHTML = "";
        else if (txt1.charAt(i) == "|") {
            $(".bg_heart").css("background-image", "')");
        } else document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}