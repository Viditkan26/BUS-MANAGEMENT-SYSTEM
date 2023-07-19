// function show_password(){
//     var x=document.getElementById("inputp")
//     var y=document.getElementById("eimg")
//     if(x.type==="password"){
//         x.type="text";
//         y.innerHTML='<img src="eyec.png" style="height: 25px; width:30px;" alt="not found">'
//     }
//     else{
//         x.type="password";
//         y.innerHTML='<img src="eye.png" style="height: 25px; width:30px;" alt="not found">'
//     }
// }
function showpass(){
    let sp=document.getElementById("password");
    if(sp.type==="password"){
        sp.type="text"
    }
    else{
        sp.type="password"
    }
}
function validation(){
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    let wp=document.getElementById("wrongpassord")
    let brwp=document.getElementById("brwp");
    if(username.toLowerCase()=="harsh" && password.toLowerCase()=="harsh"){
        alert("WELCOME HARSH");
        window.location.assign("clone.html")
        return;
    }
    else if(username.toLowerCase()=="tanisha"&& password.toLowerCase()=="tanisha"){
        alert("WELCOME TANISHA")
        window.location.assign("clone.html")
        return;
    }
    else if(username.toLowerCase()=="vidit"&& password.toLowerCase()=="vidit"){
        alert("WELCOME VIDIT")
        // window.location.assign("http://127.0.0.1:5500/newpage.html")
        window.location.assign("clone.html")
        return;
    }
    else{
        wp.hidden=false
        brwp.hidden=true
    }
}
