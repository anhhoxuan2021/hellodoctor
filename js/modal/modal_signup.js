
function modal_signup(){}
modal_signup.NAME         = "modal_signup";
modal_signup.VERSION      = "1.2";
modal_signup.DESCRIPTION  = "modal_signup vitals";

modal_signup.prototype.constructor = modal_signup;
modal_signup.prototype = {
    init: function(){
        $('#signup-modal #modal-patient-save').unbind('click').bind('click',function(e){
            modal_signup.prototype.save_user()
        })

        $('#signup-modal #first_name').change(function(){
            $('#signup-modal #first_name-error').css({"display":"none"})
        })

        $('#signup-modal #last_name').change(function(){
            $('#signup-modal #last_name-error').css({"display":"none"})
        })

        $('#signup-modal #birthday').change(function(){
            $('#signup-modal #birthday-error').css({"display":"none"})
        })

        $('#signup-modal #email').change(function(){
            $('#signup-modal #email-error').css({"display":"none"})
        })
    },

    save_user:function(){
        var err =true;
        if($('#signup-modal #first_name').val() ==""){
            $('#signup-modal #first_name-error').css({"display":""});
            err = false
        }

        if($('#signup-modal #last_name').val() ==""){
            $('#signup-modal #last_name-error').css({"display":""});
            err = false
        }

        var birthday =$('#signup-modal #birthday').val()
        var dateFull = new Date(birthday)

        var flag_dateFull =false
        if(dateFull !='Invalid Date'){
            flag_dateFull =true
        }

        if(!flag_dateFull){
            $('#signup-modal #birthday-error').css({"display":""});
            err = false
        }

        if(!modal_signup.prototype.isValidEmailAddress($('#signup-modal #email').val())){
            $('#signup-modal #email-error').css({"display":""})
            err = false
        }

        if(!err) return false;

        var first_name =$('#signup-modal #first_name').val()
        var last_name =$('#signup-modal #last_name').val()
        //var birthday =$('#signup-modal #birthday').val()
        var identification =$('#signup-modal #identification').val()
        var email =$('#signup-modal #email').val()
        var phone =$('#signup-modal #phone').val()



        var data ={
            FirstName:first_name,
            FamilyName:last_name,
            identification:identification,
            Email:email,
            PrimaryPhoneNumber:phone,
            token:_token
        }

        Object.assign(data, flag_dateFull ? { "birth_date_date": birthday } : null);

        $.ajax({
            url: link._register,
            type: 'post',
            data: data,
            dataType: 'json',
            success: function (res) {
                if(res.Error ==''){
                    $('#signup-modal').modal("hide")
                    patient_list.prototype.get_patients();
                }else{
                    $('#modal-error #err-message').text(res.Error);
                    $('#modal-error').modal("show")
                    setTimeout(function(){
                        $('#modal-error').modal("hide");
                        $('#modal-error #err-message').text('');
                    },2000)
                }
            }
        });

    },

    isValidEmailAddress:function (emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
   },

    reset_modal_signup:function(){
        $('#signup-modal #first_name').val("");
        $('#signup-modal #first_name-error').css({"display":"none"});
        $('#signup-modal #last_name').val("")
        $('#signup-modal #last_name-error').css({"display":"none"});
        $('#signup-modal #birthday').val("")
        $('#signup-modal #email').val("")
        $('#signup-modal #email-error').css({"display":"none"})
        $('#signup-modal #identification').val("")
        $('#signup-modal #phone').val("")
    },

    validate_save_user:function(e){
        $("#form-patient").validate({
            rules: {
                first_name: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                first_name: "Vui lòng nhập họ",
                email: "Nhập email đúng format"
            },
            submitHandler:function(event) {
                //event.preventDefault();
                console.log("toi")
                return false
            },
        }).form();

    },
    //SQL
   add_new_user:function(data){
       var token=localStorage.getItemValue('token');
       Object.assign(data,{ "token": token});

       var _link = link._register;

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
           success: function(xhr){
               console.log(xhr);

           }
       });
       //end
   }

}
var md_sg = new modal_signup();
$(function(){
    md_sg.init();
});