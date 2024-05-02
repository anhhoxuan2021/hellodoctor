
function modal_leave_page(){}
modal_leave_page.NAME         = "modal_leave_page";
modal_leave_page.VERSION      = "1.2";
modal_leave_page.DESCRIPTION  = "Class modal_leave_page";

modal_leave_page.prototype.constructor = modal_leave_page;
modal_leave_page.prototype = {
    init: function(){
        $(' #modal-leave-page #leave-page').unbind('click').bind('click',function(){
            if(window.location.pathname.includes('dashboard.php')){
                profile.prototype.was_changed =0;
            }else{
                appointment_edit.prototype.was_changed =0;
            }

            var apt_id = $('#modal-leave-page #open-id').val()

            $('#modal-leave-page').modal("hide");  //
            var open_id = $('#modal-leave-page #open-id').val()
            var iswhatpage = $('#modal-leave-page #what-page').val()

            if(iswhatpage =='appointment_edit'){
                document.location.href = host2 + 'appointment_edit.php?id='+open_id;
            }else if(iswhatpage =='invoice'){
                document.location.href = host2 + 'invoice.php?id='+open_id;
            }


        })

        $(' #modal-leave-page #save-before-leave').unbind('click').bind('click',function(){
            var open_id = $('#modal-leave-page #open-id').val()
            var iswhatpage = $('#modal-leave-page #what-page').val()

            if(window.location.pathname.includes('dashboard.php')){
                profile.prototype.was_changed =0;
                if($('#guardian_user').val() !=''){
                    profile.prototype.updateUser_id(1,open_id,iswhatpage);
                }else{
                    if($('#patient-id').val() !=patient_login) return
                    profile.prototype.updateUser_id('',open_id,iswhatpage);
                }
            }else{
                var id = getUrlParameter1('id');
                if(id==undefined) return;
                //appointment_edit.prototype.was_changed =0;

                //update appointment
                var date =$('.appointment-edit #date').val();
                var hour =$('.appointment-edit #time-2').val();
                var dateFull = date +' '+hour;
                var dateFullTemp = dateFull;

                dateFull = new Date(dateFull);

                var flag_dateFull =false;
                if(dateFull !='Invalid Date'){
                    flag_dateFull =true;
                }else{
                    dateFullTemp='';
                }

                var disposition_option_apt_disposition =$('.appointment-edit #Disposition').val();
                var vital_id = $('#clinical-modal-center #vital_id').val();
                var type_option_appointment_types =$('.appointment-edit #Type').val();
                var chief_complaint_option_chief_complaint=$('.appointment-edit #ChiefComplaint').val();
                var description_text=$('.appointment-edit #Description').val();
                var webmeeting_text=$('.appointment-edit #Webmeeting').val()
                var assigned_doctor_user =$('.appointment-edit #AssignedDoctor').val();
                var triage_staff_user =$('.appointment-edit #TriageStaff').val();

                var attachments_list_file = '';
                $('#appointment-attachement .exsiting-file-name').each(function(){
                    attachments_list_file =(attachments_list_file=='')? $(this).text():attachments_list_file+','+$(this).text()
                })

                var data_sql ={
                    apt_date_date:dateFullTemp,
                    type_option_appointment_types:type_option_appointment_types,
                    disposition_option_apt_disposition:disposition_option_apt_disposition,
                    chief_complaint_option_chief_complaint:chief_complaint_option_chief_complaint,
                    description_text:description_text,
                    //webmeeting_text:webmeeting_text,
                    assigned_doctor_user:assigned_doctor_user,
                    triage_staff_user:triage_staff_user,
                    invoice_custom_invoice:$('#appointment_inv').val(),
                    attachments_list_file:attachments_list_file
                }

                if(disposition_option_apt_disposition == 'Complete'){
                    $("#Disposition option").attr("selected", false);
                    $('#Disposition').find("option[value='Complete']").prop("selected", true);

                    $('#diposition-complete-modal').modal('show')
                }else{
                    appt_e.updateAppoint_sql(id,data_sql,$('#appt-name1').text(),open_id,iswhatpage);
                }
            }

        })
    },

    reset_model_leave_page:function(){
        $('#modal-leave-page #open-id').val('')
        $('#modal-leave-page #what-page').val('')
    }

}
var md_l_page = new modal_leave_page();
$(function(){
    md_l_page.init();
});