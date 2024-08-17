const serviceID = "service_4s2e14l";
const templateID = "template_y8i2dif";

function sendMail(){
    var params = {
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value, 
        message: document.getElementById("message").value,
    };

    emailjs.send(serviceID, templateID, params).then(
        (response) => {
        //console.log('SUCCESS!', response.status, response.text);
        //document.getElementById("name").value = "",
        //document.getElementById("email").value = "",
        //console.log("mail sent");
        //document.getElementById("message").value = "";
        //console.log(response);
        alert("Message Has Been Sent!");
    })
}
