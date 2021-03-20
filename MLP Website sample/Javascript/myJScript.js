(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#register').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
})()

function myfunction(){
    if(document.myform.firstname.value ==""){
        alert("Please provide your Firstname!");
        document.myform.firstname.focus();
        return false;
    }

    if(document.myform.lastname.value ==""){
        alert("Please provide your Lastname!");
        document.myform.lastname.focus();
        return false;
    }
    if(document.myform.phnumb.value ==""){
        alert("Please provide your Number!");
        document.myform.phnumb.focus();
        return false;
    }

    var emailID = document.myform.email.value;
    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos = atpos < 2)) {
        alert("Please enter correct email ID")
        document.myform.email.focus();
        return false;
    }else{
        return(true);
    }
    
}

function myphoneUpdate(){
    let n = document.getElementById("phnumb");
    let set1 = n.value.slice(0,3);
    let set2 = n.value.slice(3,6);
    let set3 = n.value.slice(6,10);
    let number = set1 +"-"+ set2 +"-"+ set3;
    document.getElementById("phnumb").value = number;
}