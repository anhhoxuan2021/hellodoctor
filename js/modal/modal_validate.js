
function modal_validate(){}
modal_validate.NAME         = "modal_validate";
modal_validate.VERSION      = "1.2";
modal_validate.DESCRIPTION  = "modal_validate";

modal_validate.prototype.constructor = modal_validate;
modal_validate.prototype = {
    init: function(){
        $('#modal-lab-validate #btn-lab-validation').unbind('click').bind('click',function(e){
            if($('#modal-lab-validate #modal_type_login').val()=='Doctor'){
                modal_validate.prototype.lab_validattion_pin_code()
            }else{
                $('#modal-lab-validate #pin-code-incorrect').css({"display":""})
            }

        })

        $('#modal-pres-validate #btn-pres-validation').unbind('click').bind('click',function(e){
            if($('#modal-pres-validate #pres-modal_type_login').val()=='Doctor'){
                modal_validate.prototype.pres_validattion_pin_code()
            }else{
                $('#modal-lab-validate #pin-code-incorrect').css({"display":""})
            }

        })
    },

    lab_validattion_pin_code:function(){
        var _link = link._users_by_pin;

        var doctor_id = user_login //$('#modal-lab-validate #doctor_unique_id').val()
        var pin_text = $('#modal-lab-validate #lab-pin-code').val()
        if(pin_text=='' || doctor_id=='') return false

        var _data ={token:_token,User_id:doctor_id,pin_text:pin_text}

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error ==""){
                    $('#lab-modal #validated-succ').css({"display":""})
                    $('#modal-lab-validate').modal("hide")
                    $('#lab-modal #lab-validation').css({"display":"none"})

                   // $('#modal-lab-validate #lab-modal-signature_image').val(res.signature_url_text);
                    $('#modal-lab-validate #lab-modal-signature_url_text').val(res.signature_url_text);
                    $('#modal-lab-validate #lab-pin-code-after-validate').val(pin_text);

                }else{
                    $('#modal-lab-validate #pin-code-incorrect').css({"display":""})
                    $('#modal-lab-validate #lab-pin-code-after-validate').val('');
                    $('#modal-lab-validate #lab-modal-signature_url_text').val("");
                }
            }
        })
    },


    pres_validattion_pin_code:function(){
        var _link = link._users_by_pin;

        var doctor_id =  user_login//$('#modal-pres-validate #pres-doctor_unique_id').val()
        var pin_text = $('#modal-pres-validate #pres-pin-code').val()
        if(pin_text=='' || doctor_id=='') return false

        var _data ={token:_token,User_id:doctor_id,pin_text:pin_text}

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res)
                if(res.Error==''){
                    $('#prescription-modal #prescription-validated-succ').css({"display":""})
                    $('#modal-pres-validate').modal("hide")
                    $('#prescription-modal #prescription-validation').css({"display":"none"})

                    //$('#modal-pres-validate #pres-modal-signature_image').val(res.signature_url_text);
                    $('#modal-pres-validate #pres-modal-signature_url_text').val(res.signature_url_text);
                    $('#modal-pres-validate #pres-modal-pin-code-after-validate').val(pin_text);
                    //show print

                }else{
                    $('#modal-pres-validate #pres-pin-code-incorrect').css({"display":""})
                    $('#modal-pres-validate #pres-modal-signature_url_text').val("");
                    $('#modal-pres-validate #pres-modal-pin-code-after-validate').val("");
                }
            }
        })
    },

    lab_validate_reset:function(){
        $('#modal-lab-validate #pin-code-incorrect').css({"display":"none"})
        $('#modal-lab-validate #lab-pin-code').val('');
        $('#modal-lab-validate #lab-pin-code-after-validate').val('');
        $('#modal-lab-validate #modal_type_login').val('');

        $('#modal-lab-validate #lab-modal-signature_image').val('');
        $('#modal-lab-validate #lab-modal-signature_url_text').val('');
    },

    pres_validate_reset:function(){
        $('#modal-pres-validate #pres-pin-code-incorrect').css({"display":"none"})
        $('#modal-pres-validate #pres-pin-code').val('');
        $('#modal-pres-validate #pres-modal-pin-code-after-validate').val('');
        $('#modal-pres-validate #pres-modal_type_login').val('');

        $('#modal-pres-validate #pres-modal-signature_image').val('');
        $('#modal-pres-validate #pres-modal-signature_url_text').val('');
    }

}
var vldate = new modal_validate();
$(function(){
    vldate.init();
});