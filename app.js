var i = 0;
var txt1 =
    "Hi Shaily.....!  <<               I want to tell you something. <<<                Please read everything carefully... 🥺!                                                                           > When I saw you for the first time < You seems something Special to me and this is completely a lie.😅  <<                 But, as the days goes < we became frank and besharam in front of each other....! <<                           I don't know the reason why your thoughts always resonates inside my mind these days...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I don't know how exacctly you feel for me but I won't do this to anyone in future...!                                                     > I Love my small family so much than anything else in this world....!                    << And now I want you to be a part of my small family....!                                                             >Would you like to be a part of my small family? << Would you like to be my Patni ??????";
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
