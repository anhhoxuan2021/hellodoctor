
function modal_claim(){}
modal_claim.NAME         = "modal_claim";
modal_claim.VERSION      = "1.2";
modal_claim.DESCRIPTION  = "modal_claim vitals";

modal_claim.prototype.constructor = modal_claim;
modal_claim.prototype = {
    init: function(){
        $('#claim-modal #modal-claim-confirm').unbind('click').bind('click',function(){
             var appt_id = $(this).closest('#claim-modal').find('#modal-claim-appt-id').val();
             var user_id =$('#login_UniqueID').val();

            if(window.location.pathname.includes('waiting_triage.php')){
                md_claim.update_appt_disposition(appt_id,user_id,'Nurse','Triage','In Process')
            }else if(window.location.pathname.includes('doctor_waiting.php')){

                md_claim.update_appt_disposition(appt_id,user_id,'Doctor','Consultation','In Process')
            }

        })
    },

    update_appt_disposition:function(appt_id,user_id,user_type,disposition,status){
        var link3 =link._appointmentUpdateApoinment;

        var _data = {
            token:_token,
            Appt_id:appt_id,
            data_post:JSON.stringify({
                triage_staff_user:user_id,
                disposition_option_apt_disposition:disposition,
                status_option_status:status
            })
        }

        if(user_type=='Doctor'){
            _data = {
                token:_token,
                Appt_id:appt_id,
                data_post:JSON.stringify({
                    assigned_doctor_user:user_id,
                    disposition_option_apt_disposition:disposition,
                    status_option_status:status
                })
            }
        }

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            data:_data,
            "method": "POST",
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error ==''){
                    window.location.href ='appointment_edit.php?id='+appt_id
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
    }


}
var md_claim = new modal_claim();
$(function(){
    md_claim.init();
});