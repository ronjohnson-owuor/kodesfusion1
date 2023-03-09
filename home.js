var newsletterButton = document.getElementById("subscribe");
newsletterButton.addEventListener("click", function(event) {
event.preventDefault();
SEND_NEWSLETTER();
});

var messageButton = document.getElementById("send");
messageButton.addEventListener("click", function(event) {
event.preventDefault()
SEND_USER_MESSAGE();
});

function SEND_NEWSLETTER(newsletter) {
    e.preventDefault();
var newsletterEmail = document.getElementById("email").value;
$.ajax({
url: "newsletter.php",
type: "POST",
data: { message: newsletterEmail },
success: function(response) {
console.log(response);
}
});
}


function SEND_USER_MESSAGE(){
    e.preventDefault();
let option = 1;
var username = document.getElementById("username").value;
var phonenumber = document.getElementById("phonenumber").value;
var message = document.getElementById("message").value;  
$.ajax({
url: "newsletter.php",
type: "POST",
data: { username:username,phone:phonenumber,messagecontact:message,option:option},
success: function(response) {
console.log(response);
}
});

}

var openCSS =document.getElementById("beginCSS");
openCSS.addEventListener("click",()=>{
    window.location.href = "../css_course/index.html";
})


var openPHP =document.getElementById("beginPHP");
openPHP.addEventListener("click",()=>{
    window.location.href = "../php_course/index.html";
})


var openJS =document.getElementById("beginJS");
openJS.addEventListener("click",()=>{
    window.location.href = "../javascript_tutorials/index.html";
})