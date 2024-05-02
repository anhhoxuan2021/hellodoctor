
function reset_pass(){}
reset_pass.NAME         = "reset_pass";
reset_pass.VERSION      = "1.2";
reset_pass.DESCRIPTION  = "Class reset_pass";

reset_pass.prototype.constructor = reset_pass;
reset_pass.prototype = {

    init: function(){
        $('#reset-pass').unbind('click').bind('click',function(){
            reset_pass.prototype.reset_pass()
        })

    },

    reset_pass:function(){
        var email_confirm = getUrlParameter1('id');
        var data = {
            token:_token,
            new_pass : $("#new-pass").val(),
            confirm_pass : $("#confirm-pass").val(),
            email : $("#email").val(),
            email_confirm : email_confirm
        }

        var link3 =link._confirmed_reset;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error ==''){
                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');

                    },3000)

                }else{
                    $("#modal-error #err-message").text(res.Error);
                    $('#modal-error').modal('show')
                    setTimeout(function(){
                        $('#modal-error').modal('hide');

                    },3000)

                }
            }
        });

    },

}

var ret= new reset_pass();
$(function(){
    ret.init();
});

