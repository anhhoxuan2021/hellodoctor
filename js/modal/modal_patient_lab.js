
function modal_patient_lab(){}
modal_patient_lab.NAME         = "modal_patient_lab";
modal_patient_lab.VERSION      = "1.2";
modal_patient_lab.DESCRIPTION  = "Class modal_patient_lab";

modal_patient_lab.prototype.constructor = modal_patient_lab;
modal_patient_lab.prototype = {
    init: function(){
        $('#patient-content').on('click','.open-lab',function(){
            md_patient.reset_inv_modal()
            md_patient.get_lab_id($(this).find('.lab_id').val())
            $('#lab-patient-modal').modal('show');
        })
    },

    reset_inv_modal:function(){
        $('#lab-patient-modal #lab-id').val('');
        $('#lab-patient-modal #lab-patient-id').val('');
        $('#lab-patient-modal #lab-doctor-id').val('');
        $('#lab-patient-modal #lab-local').val('');
        $('#lab-patient-modal #lab-appt-id').val('');
        $('#lab-patient-modal #lab-diagnostic').val('');

        $('#lab-patient-modal #lab-appt-text').html('');
        $('#lab-patient-modal #lab-date-time').text('');
        $('#lab-patient-modal #lab-display-patient-name').text('');
        $('#lab-patient-modal #lab-patient-address').text('');
        $('#lab-patient-modal #lab-doctor-assigned-name').text('');
        $('#lab-patient-modal #lab-diagnostic-selected').text('');

        $('#lab-patient-modal #tbl-product-assigned-list >tbody').html('');
        $('#lab-patient-modal #lab-location').html('');
        $('#lab-patient-modal #modal-lab-general-status').html('');

        $('#lab-patient-modal #lab-instructions').val('');
        $('#lab-patient-modal #lab-result').val('');
        $('#lab-patient-modal #modal-lab-date-completed').val('');
        $('#lab-patient-modal #modal-lab-time-completed').val('');

        $('#lab-patient-modal #lab-completed-by').html('');
    },
}
var md_patient = new modal_patient_lab();
$(function(){
    md_patient.init();
});