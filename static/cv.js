function thankyou() {
    document.getElementById("Button").innerHTML = "Thank you";
}

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

console.log("Ziv Jakobovits");


    function validateEmail() {
        var emailID = document.ContactForm.EMail.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");

        if (atpos < 1 || ( dotpos - atpos < 2 )) {
           alert("Enter a correct email ID")
           document.myForm.EMail.focus() ;
           return false;
        }
        return( true );
     }

     function getUsers(id){
    console.log('clicked')
        link= 'https://reqres.in/api/users/' + id
         console.log(link)
    fetch(link).then(
    response => response.json()
    ).then(
        response_object => put_users_inside_html(response_object.data)
    ).catch(
        err=> console.log(err)
    )
}

function  put_users_inside_html(response_obj_data){
       console.log(response_obj_data);
    const curr_main = document.querySelector("body");
    user = response_obj_data
        const section = document.createElement('section');
        section.innerHTML = `
        <img src="${user.avatar}" alt="Profile Picture"/>
        <div>
            <span>${user.first_name} ${user.last_name}</span>
            <br>
            <a href="mailto:${user.email}">Send Email</a>
        </div>
        `;
    curr_main.appendChild(section)


}