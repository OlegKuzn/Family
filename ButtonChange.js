function Mybutton_onclick(){
    if(Mybutton.value == "Edit"){
        Mybutton.value = "Save";
       document.getElementById("FirstName").style.visibility="hidden";
       document.getElementById("FNInput").style.visibility="visibile";
       document.getElementById("LastName").style.visibility="hidden";
       document.getElementById("LNInput").style.visibility="visibile";
       document.getElementById("PhoneNumber").style.visibility="hidden";
       document.getElementById("PhoneInput").style.visibility="visibile";
    }
    else{
        Mybutton.value="Edit";
    }
}