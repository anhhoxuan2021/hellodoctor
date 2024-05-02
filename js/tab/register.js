
function register(){}
register.NAME         = "register";
register.VERSION      = "1.2";
register.DESCRIPTION  = "Class register";

register.prototype.constructor = register;
register.prototype = {
    init: function(){
        $("#js-register-btn").unbind('click').bind('click',function(e){
            reg.register_save(e);
        });
    },
    register_save:function(event){
        //verify empty input
        // Fetch form to apply custom Bootstrap validation
        var form = $("#form_register")

        if (form[0].checkValidity() === false)
        {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
        var token=localStorage.getItemValue('token');
        var FirstName = $("#form_register #fname").val();
        var MiddleName = $("#form_register #mname").val();
        var FamilyName = $("#form_register #lname").val();
        var Email = $("#form_register #emailverify").val();
        var Password = $("#form_register #userpassword").val();
        var confirmPassword = $("#form_register #confirmpassword").val();
        //verify form empty
        if(FirstName.lengh==0 || FamilyName.length==0 ||
            Email.length==0 || Password.length==0){
            return
        }

        if(Password!=confirmPassword) return;
        var language=0;
        var  language1='en_us';
        if($("#form_register #customRadio1").is(":checked")){
            language=1;
            language1='vi_vn';
        }

        var PrimaryPhoneNumber=$("#form_register #phonenumber").val();
        var data ={token:token,FirstName:FirstName,MiddleName:MiddleName,
            FamilyName:FamilyName,Email:Email,Password:Password,language:language,
            PrimaryPhoneNumber:PrimaryPhoneNumber,
            UserType:'Patient'
        }
        //add bassi
        //initall page customRadio1
        _link = link._register;

        $.ajax({
            "crossDomain": true,
            asyn:true,
            url: _link,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,

            error : function (status,xhr,error) {
            },
            success: function(res){
                //console.log(res);
                //var rsl = $.parseJSON(xhr)
                if(res.Error==''){
                    ////window.location.href = "login.php";
                    login.prototype.get_option_set();
                    login.prototype.get_product_Consultation_Medication_Package()
                    //login.prototype.get_relative_list(res.User_id);
                    login.prototype.login_sql(Email,'',1);
                } //end success
                else{
                    alert(res.Error)
                }
                //end user into user(bubble)
            }
        });

        ///////////
    },

}
var reg = new register();
$(function(){
    reg.init();
});