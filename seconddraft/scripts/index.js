$(document).ready(()=>{
    $("button").click(()=>{
        let email = $("#email").val();
        let password = $("#password").val();

        if(validate(email, password)){
            console.log("AUthenticated");
            $("message").html("Authenticated");
        }else{
            console.log("Incorrect credentials");
            $("message").html("Incorrect credentials.");
        };
    });
});