function formValidate()
{

    var passid = document.RegForm.fpass;
    var cpassid = document.RegForm.frpass;
    var uname = document.RegForm.fname;
    var luname = document.RegForm.lname;
    var ucontact = document.RegForm.fnum;
    var uemail = document.RegForm.femail;
    var uagree  = document.RegForm.fagree;

    if(name_validation(uname)){
        if(lname_validation(lname)){
            if(email_validation(uemail)){
                if(phone_validation(ucontact)){
                    if(pass_validation(passid,7)){
                        if(confpass_validation(cpassid,passid)){
                            if(agree_validation(uagree))
                            {
                                alert("Registered successfully!")
                                return true;

                            }
                            
                        }
                    }
                }

            }

        }
    
       
        
    }
    alert("Something went wrong!")
    return false;
}

function name_validation(uid)
{
    var uid_len = uid.value.length;
    
    if (uid_len == 0)
    {
        alert("First Name should not be empty");
        uid.focus();
        return false;
    }
    
    var letters = /^[A-Za-z]+$/;
    if(uid.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('First Name must have alphabet characters only');
        uid.focus();
        return false;
    }


}

function lname_validation(uid)
{
    var uid_len = uid.value.length;
    
    if (uid_len == 0)
    {
        alert("Last Name should not be empty");
        uid.focus();
        return false;
    }
    var letters = /^[A-Za-z]+$/;
    if(uid.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Last Name must have alphabet characters only');
        uid.focus();
        return false;
    }
}

function email_validation(euid)
{
    var euid_len = euid.value.length;
    
    if (euid_len == 0)
    {
        alert("Email should not be empty");
        euid.focus();
        return false;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(euid.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        euid.focus();
        return false;
    }
}

function phone_validation(puid)
{
    var puid_len = puid.value.length;
    
    if (puid_len == 0)
    {
        alert("Contact should not be empty");
        puid.focus();
        return false;
    }
    var phoneno = /^\d{10}$/;
    if(puid.value.match(phoneno))
    {
        return true;
    }
    else
    {
        alert("Please enter correct phone number");
        return false;
    }
}

function pass_validation(puid,my)
{
    var puid_len = puid.value.length;
    if (puid_len == 0 ||puid_len <= my)
    {
        console.log(puid_len);
        alert("Password should not be empty / length should be greater 7");
        puid.focus();
        return false;
    }
    return true;
}

function confpass_validation(puid,cpuid)
{
    var puid_len = puid.value.length;
    if (puid_len == 0)
    {
        alert("Confirm Password cannot be empty");
        puid.focus();
        return false;
    }

    if(puid.value != cpuid.value)
    {
        alert("Password doesn't match")
        puid.focus();

        return false;
    }
    return true;
}

function agree_validation(uid)
{
    console.log(uid.value);
    if (uid.checked == false)
    {
        alert("Please agree the terms and conditions");
        uid.focus();
        return false;
    }
    return true;
}