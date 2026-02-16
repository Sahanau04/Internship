document.getElementById("form").onsubmit=function(e) {
    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let age=document.getElementById("age").value;
    let gender=document.querySelector('input[name="gender"]:checked');
    if(name===""||email===""||phone===""||age===""||!gender){
        alert("Please fill all fields");
        return;
    }

    document.getElementById("msg").innerText=
        "Registration Successful!";
    document.getElementById("result").innerHTML=
        "Name:"+name+"<br>"+
        "Email:"+email+"<br>"+
        "Phone:"+phone+"<br>"+
        "Age:"+age+"<br>"+
        "Gender:"+gender.value;
    document.getElementById("form").reset();
};


