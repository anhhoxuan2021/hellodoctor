
function modal_clinical(){}
modal_clinical.NAME         = "modal_clinical";
modal_clinical.VERSION      = "1.2";
modal_clinical.DESCRIPTION  = "Class modal_clinical";

modal_clinical.prototype.constructor = modal_clinical;
modal_clinical.prototype = {
    init: function(){

        /*$('#clinical-modal-center #diagnostic-name').change(function(){
            var diagnostic_id = $(this).find("option:selected").val();
            var diagnostic_name = $(this).find("option:selected").text();
            md_clinical.clinical_add_diagnostic_row(diagnostic_id,diagnostic_name);

        });*/

        $('#clinical-modal-center #diagnostic-code').change(function(){
            var diagnostic_code = $(this).find("option:selected").val();
            var diagnostic_name = $(this).find("option:selected").text();

           var continuing = false;
           $('#clinical-diagnostic-selected .diagnostic-row').each(function(){
                var diagnostic_id =$(this).find('.diagnostic-id').val();
               if(diagnostic_id ==diagnostic_code){
                   continuing = true;
               }
           })

            if(!continuing) md_clinical.clinical_add_diagnostic_row(diagnostic_code,diagnostic_name);

        });

        $('#clinical-modal-center #modal-clinical-save').unbind('click').bind('click',function(){
            var vital_id = $('#clinical-modal-center #vital_id').val()

            //clinical paraclinical 1
            var history_description_text= $('#clinical-modal-center #HistoryDescription').val();
            //2.1
            var pulse_text = $('#clinical-modal-center #Pulse').val();
            var WaistCircumference = $('#clinical-modal-center #WaistCircumference').val()

            var temperature_number = $('#clinical-modal-center #Temperature').val();
            var blood_pressure___systolic_number = $('#clinical-modal-center #BloodPressure-Systolic').val();
            var blood_pressure___diastolic_number = $('#clinical-modal-center #BloodPressure-Diastolic').val();
            var respiratory_rate_number = $('#clinical-modal-center #RespiratoryRate').val();
            var weight_number = $('#clinical-modal-center #Weight').val();
            var height_number = $('#clinical-modal-center #Height').val();
            var bmi_number = $('#clinical-modal-center #IBM').val();
            var heart_rate_number = ($('#page-content #HeartRate').val()=='')?0:$('#page-content #HeartRate').val();
            var o2_staturation_number = ($('#page-content #O2Staturation').val()=='')?0:$('#page-content #O2Staturation').val();
            var glucose_number =  ($('#page-content #Glucose').val()=='')?0:$('#page-content #Glucose').val();
            var pain_level_number = ($('#page-content #PainLevel').val()=='')?0:$('#page-content #PainLevel').val();


            if(blood_pressure___diastolic_number =='') blood_pressure___diastolic_number=0
            if(blood_pressure___systolic_number =='') blood_pressure___systolic_number=0
            if(respiratory_rate_number =='') respiratory_rate_number=0
            if(bmi_number =='') bmi_number=0
            if(temperature_number =='') temperature_number=0
            if(weight_number =='') weight_number=0
            if(height_number =='') height_number=0
            //2.2
            var right_eye___not_glasses_text = $('#clinical-modal-center #Righteye-Notglasses').val();
            var left_eye___not_glasses_text = $('#clinical-modal-center #Lefteye-Notglasses').val();
            var right_eye___glasses_text = $('#clinical-modal-center #Righteye-Glasses').val();
            var left_eye___glasses_text = $('#clinical-modal-center #Lefteye-Glasses').val();
            //2.3.1
            var fullbody___skin_mucosa_text = $('#clinical-modal-center #Fullbody-SkinMucosa').val();
            var fullbody___others_text = $('#clinical-modal-center #Fullbody-Others').val();
            //2.3.2
            var organs___cardiology_text = $('#clinical-modal-center #Organs-Cardiology').val();
            var organs___respiratory_system_text = $('#clinical-modal-center #Organs-Respiratorysystem').val();
            var organs___digestive_system_text = $('#clinical-modal-center #Organs-Digestivesystem').val();
            var organs___urinary_tract_text = $('#clinical-modal-center #Organs-Urinarytract').val();
            var organs___musculoskeletal_system_text = $('#clinical-modal-center #Organs-Musculoskeletalsystem').val();
            var organs___endocrine_system_text = $('#clinical-modal-center #Organs-Endocrinesystem').val();
            var organs___nervous_system_text = $('#clinical-modal-center #Organs-Nervoussystem').val();
            var organs___mental_text = $('#clinical-modal-center #Organs-Mental').val();
            var organs___surgical_system_text = $('#clinical-modal-center #Organs-Surgicalsystem').val();
            var organs___obstetricians_and_gynecologists_text = $('#clinical-modal-center #Organs-ObstetriciansandGynecologists').val();
            var organs___ears_nose_throat_text = $('#clinical-modal-center #Organs-Earsnosethroat').val();
            var organs___eyes_text = $('#clinical-modal-center #Organs-Eyes').val();
            var organs___dermatology_text = $('#clinical-modal-center #Organs-Dermatology').val();
            var organs___nutrition_text = $('#clinical-modal-center #Organs-Nutrition').val();
            var organs___physical_system_text = $('#clinical-modal-center #Organs-Physicalsystem').val();
            var organs___others_text = $('#clinical-modal-center #Organs-Others').val();
            var organs___evaluation_of_physical_text = $('#clinical-modal-center #Organs-Evaluationofphysical').val();
            //3
            var hematolofy_result_text = $('#clinical-modal-center #HematolofyResult').val();
            var serum_biochemistry_result_text = $('#clinical-modal-center #SerumBiochemistryResult').val();
            var urine_biochemistry_result_text = $('#clinical-modal-center #UrineBiochemistryResult').val();
            var abdominal_ultrasound_result_text = $('#clinical-modal-center #AbdominalUltrasoundResult').val();
            //5
            var notes_text = $('#clinical-modal-center #Notes').val();

            var appt_id = $('.appointment-edit #appointment-id').val();
            var patient_id = $('.appointment-edit #patient-id').val();
            var diagnostic_list_custom_diagnostic=[];
            $('#clinical-diagnostic-selected .diagnostic').each(function(){
                diagnostic_list_custom_diagnostic.push($(this).find('.diagnostic-id').val());
            })

            var _data ={
                Vital_ID:vital_id,
                appointment_custom_appointment:appt_id,
                patient_user:patient_id,
                HistoryDescription:history_description_text,
                Pulse:pulse_text,
                WaistCircumference:WaistCircumference,
                Temperature:temperature_number,
                BloodPressureSystolic:blood_pressure___systolic_number,
                BloodPressureDiastolic:blood_pressure___diastolic_number,
                RespiratoryRate:respiratory_rate_number,
                Weight:weight_number,
                Height:height_number,
                BMI:bmi_number,

                HeartRate:heart_rate_number,
                O2Staturation:o2_staturation_number,
                Glucose:glucose_number,
                PainLevel:pain_level_number,

                RightEyeNotGlasses:right_eye___not_glasses_text,
                LeftEyeNotGlasses:left_eye___not_glasses_text,
                RightEyeGlasses:right_eye___glasses_text,
                LeftEyeGlasses:left_eye___glasses_text,
                FullbodySkinMucosa:fullbody___skin_mucosa_text,
                FullbodyOthers:fullbody___others_text,
                OrgansCardiology:organs___cardiology_text,
                OrgansRespiratorySystem:organs___respiratory_system_text,
                OrgansDigestiveSystem:organs___digestive_system_text,
                OrgansUrinaryTract:organs___urinary_tract_text,
                OrgansMusculoskeletalSystem:organs___musculoskeletal_system_text,
                OrgansEndocrineSystem:organs___endocrine_system_text,
                OrgansNervousSystem:organs___nervous_system_text,
                OrgansMental:organs___mental_text,
                OrgansSurgicalSystem:organs___surgical_system_text,
                OrgansObstetriciansAndGynecologists:organs___obstetricians_and_gynecologists_text,
                OrgansEarsNoseThroat:organs___ears_nose_throat_text,
                OrgansEyes:organs___eyes_text,
                OrgansDermatology:organs___dermatology_text,
                OrgansNutrition:organs___nutrition_text,
                OrgansPhysicalSystem:organs___physical_system_text,
                OrgansOthers:organs___others_text,
                OrgansEvaluationOfPhysical:organs___evaluation_of_physical_text,
                HematolofyResult:hematolofy_result_text,
                SerumBiochemistryResult:serum_biochemistry_result_text,
                UrineBiochemistryResult:urine_biochemistry_result_text,
                AbdominalUltrasoundResult:abdominal_ultrasound_result_text,
                Notes:notes_text,
                diagnostic_list_custom_diagnostic:diagnostic_list_custom_diagnostic
            }

            md_clinical.newUpdateVital_sql(_data)

        })

        $("#clinical-modal-center #clinical-print").unbind('click').bind('click',function(){
            var vital_id = $('#clinical-modal-center #vital_id').val()
            pdf_ex.prototype.print_para_clinical(vital_id,"print");
        })

        $("#clinical-modal-center #clinical-pdf").unbind('click').bind('click',function(){
            var vital_id = $('#clinical-modal-center #vital_id').val()
            pdf_ex.prototype.export_para_clinical(vital_id,"pdf");
        })
    },


    get_vital_apptID:function(apptID){
        var link3 =link._vitals_user;
        var _data ={token:_token,appointment_custom_appointment:apptID}

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                var data=res.vital;
                //console.log(data);
                if(data.Vital_ID !=undefined && data.Vital_ID !=null ) {
                    if(data.blood_pressure___diastolic_number ==null) data.blood_pressure___diastolic_number ='';
                    if(data.blood_pressure___systolic_number ==null) data.blood_pressure___systolic_number ='';
                    if(data.heart_rate_number ==null) data.heart_rate_number ='';
                    if(data.respiratory_rate_number ==null) data.respiratory_rate_number ='';
                    if(data.bmi_number ==null) data.bmi_number ='';
                    if(data.temperature_number ==null) data.temperature_number ='';
                    if(data.o2_staturation_number ==null) data.o2_staturation_number ='';
                    if(data.glucose_number ==null) data.glucose_number ='';
                    if(data.pain_level_number ==null) data.pain_level_number ='';
                    if(data.weight_number ==null) data.weight_number ='';
                    if(data.height_number ==null) data.height_number ='';
                    if(data.WaistCircumference ==null) data.WaistCircumference ='';

                    $('#page-content #BloodPressureDiastolic').val(data.blood_pressure___diastolic_number);
                    $('#page-content #BloodPressureSystolic').val(data.blood_pressure___systolic_number);
                    $('#page-content #HeartRate').val(data.heart_rate_number);
                    $('#page-content #RespiratoryRate').val(data.respiratory_rate_number);
                    $('#page-content #BMI').val(data.bmi_number);
                    $('#page-content #Temperature').val(data.temperature_number);
                    $('#page-content #O2Staturation').val(data.o2_staturation_number);
                    $('#page-content #Glucose').val(data.glucose_number);
                    $('#page-content #PainLevel').val(data.pain_level_number);
                    $('#page-content #Weight').val(data.weight_number);
                    $('#page-content #Height').val(data.height_number);
                    //clinical paraclinical 1
                    if(data.HistoryDescription ==null) data.HistoryDescription ='';
                    $('#clinical-modal-center #HistoryDescription').val(data.HistoryDescription);
                    //2.1
                    if(data.pulse_text ==null) data.pulse_text ='';
                    if(data.waist_circumference_text ==null) data.waist_circumference_text ='';


                    $('#clinical-modal-center #Pulse').val(data.pulse_text);
                    $('#clinical-modal-center #Temperature').val(data.temperature_number);
                    $('#clinical-modal-center #BloodPressure-Systolic').val(data.blood_pressure___systolic_number);
                    $('#clinical-modal-center #BloodPressure-Diastolic').val(data.blood_pressure___diastolic_number);
                    $('#clinical-modal-center #RespiratoryRate').val(data.respiratory_rate_number);
                    $('#clinical-modal-center #Weight').val(data.weight_number);
                    $('#clinical-modal-center #Height').val(data.height_number);
                    $('#clinical-modal-center #IBM').val(data.bmi_number);
                    $('#clinical-modal-center #WaistCircumference').val(data.WaistCircumference);
                    //2.2
                    if(data.right_eye___not_glasses_text ==null) data.right_eye___not_glasses_text ='';
                    if(data.left_eye___not_glasses_text ==null) data.left_eye___not_glasses_text ='';
                    if(data.right_eye___glasses_text ==null) data.right_eye___glasses_text ='';
                    if(data.left_eye___glasses_text ==null) data.left_eye___glasses_text ='';

                    $('#clinical-modal-center #Righteye-Notglasses').val(data.right_eye___not_glasses_text);
                    $('#clinical-modal-center #Lefteye-Notglasses').val(data.left_eye___not_glasses_text);
                    $('#clinical-modal-center #Righteye-Glasses').val(data.right_eye___glasses_text);
                    $('#clinical-modal-center #Lefteye-Glasses').val(data.left_eye___glasses_text);
                    //2.3.1
                    if(data.fullbody___skin_mucosa_text ==null) data.fullbody___skin_mucosa_text ='';
                    if(data.fullbody___others_text ==null) data.fullbody___others_text ='';

                    $('#clinical-modal-center #Fullbody-SkinMucosa').val(data.fullbody___skin_mucosa_text);
                    $('#clinical-modal-center #Fullbody-Others').val(data.fullbody___others_text);
                    //2.3.2
                    if(data.organs___cardiology_text ==null) data.organs___cardiology_text ='';
                    if(data.organs___respiratory_system_text ==null) data.organs___respiratory_system_text ='';
                    if(data.organs___digestive_system_text ==null) data.organs___digestive_system_text ='';
                    if(data.organs___urinary_tract_text ==null) data.organs___urinary_tract_text ='';
                    if(data.organs___musculoskeletal_system_text ==null) data.organs___musculoskeletal_system_text ='';
                    if(data.organs___endocrine_system_text ==null) data.organs___endocrine_system_text ='';
                    if(data.organs___nervous_system_text ==null) data.organs___nervous_system_text ='';
                    if(data.organs___mental_text ==null) data.organs___mental_text ='';
                    if(data.organs___surgical_system_text ==null) data.organs___surgical_system_text ='';
                    if(data.organs___obstetricians_and_gynecologists_text ==null) data.organs___obstetricians_and_gynecologists_text ='';
                    if(data.organs___ears_nose_throat_text ==null) data.organs___ears_nose_throat_text ='';
                    if(data.organs___eyes_text ==null) data.organs___eyes_text ='';
                    if(data.organs___dermatology_text ==null) data.organs___dermatology_text ='';
                    if(data.organs___nutrition_text ==null) data.organs___nutrition_text ='';
                    if(data.organs___physical_system_text ==null) data.organs___physical_system_text ='';
                    if(data.organs___others_text ==null) data.organs___others_text ='';
                    if(data.organs___evaluation_of_physical_text ==null) data.organs___evaluation_of_physical_text ='';

                    $('#clinical-modal-center #Organs-Cardiology').val(data.organs___cardiology_text);
                    $('#clinical-modal-center #Organs-Respiratorysystem').val(data.organs___respiratory_system_text);
                    $('#clinical-modal-center #Organs-Digestivesystem').val(data.organs___digestive_system_text);
                    $('#clinical-modal-center #Organs-Urinarytract').val(data.organs___urinary_tract_text);
                    $('#clinical-modal-center #Organs-Musculoskeletalsystem').val(data.organs___musculoskeletal_system_text);
                    $('#clinical-modal-center #Organs-Endocrinesystem').val(data.organs___endocrine_system_text);
                    $('#clinical-modal-center #Organs-Nervoussystem').val(data.organs___nervous_system_text);
                    $('#clinical-modal-center #Organs-Mental').val(data.organs___mental_text);
                    $('#clinical-modal-center #Organs-Surgicalsystem').val(data.organs___surgical_system_text);
                    $('#clinical-modal-center #Organs-ObstetriciansandGynecologists').val(data.organs___obstetricians_and_gynecologists_text);
                    $('#clinical-modal-center #Organs-Earsnosethroat').val(data.organs___ears_nose_throat_text);
                    $('#clinical-modal-center #Organs-Eyes').val(data.organs___eyes_text);
                    $('#clinical-modal-center #Organs-Dermatology').val(data.organs___dermatology_text);
                    $('#clinical-modal-center #Organs-Nutrition').val(data.organs___nutrition_text);
                    $('#clinical-modal-center #Organs-Physicalsystem').val(data.organs___physical_system_text);
                    $('#clinical-modal-center #Organs-Others').val(data.organs___others_text);
                    $('#clinical-modal-center #Organs-Evaluationofphysical').val(data.organs___evaluation_of_physical_text);
                    //3
                    if(data.hematolofy_result_text ==null) data.hematolofy_result_text ='';
                    if(data.serum_biochemistry_result_text ==null) data.serum_biochemistry_result_text ='';
                    if(data.urine_biochemistry_result_text ==null) data.urine_biochemistry_result_text ='';
                    if(data.abdominal_ultrasound_result_text ==null) data.abdominal_ultrasound_result_text ='';

                    $('#clinical-modal-center #HematolofyResult').val(data.hematolofy_result_text);
                    $('#clinical-modal-center #SerumBiochemistryResult').val(data.serum_biochemistry_result_text);
                    $('#clinical-modal-center #UrineBiochemistryResult').val(data.urine_biochemistry_result_text);
                    $('#clinical-modal-center #AbdominalUltrasoundResult').val(data.abdominal_ultrasound_result_text);
                    //5
                    if(data.notes_text ==null) data.notes_text ='';

                    $('#clinical-modal-center #Notes').val(data.notes_text);

                    $('#clinical-modal-center #vital_id').val(data.Vital_ID);
                }

            }
        });

        getDiagnostic(apptID,'#clinical-modal-center #clinical-diagnostic-selected','clinical')

    },

    clinical_add_diagnostic_row:function(code_text,name){
        var row ='<div class="diagnostic row col-12 m_b10">' +
            '<div class="col-1 diagnostic-delete-row" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div> ' +
            '<div class="col-9 diagnostic-row padding_l">' +
                '<input type="hidden" class="diagnostic-id" value="'+code_text+'">' +
                '<span>'+name+'</span>' +
            '</div>' +
         '</div>';

        $('#clinical-modal-center #clinical-diagnostic-selected').append(row);

        $('#clinical-modal-center .diagnostic-delete-row').unbind('click').bind('click',function(){
            $(this).closest('.diagnostic').remove();
        })
    },

    get_basic_vital_id:function(Vital_ID){
        var link3 =link._vitals_id

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,Vital_ID:Vital_ID},

            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(data);
                if(data=res.vital==undefined) return
                var data=res.vital;

                if(data.temperature_number ==null) data.temperature_number ='';
                if(data.blood_pressure___diastolic_number ==null) data.blood_pressure___diastolic_number ='';
                if(data.blood_pressure___systolic_number ==null) data.blood_pressure___systolic_number ='';
                if(data.respiratory_rate_number ==null) data.respiratory_rate_number ='';
                if(data.weight_number ==null) data.weight_number ='';
                if(data.height_number ==null) data.height_number ='';
                if(data.bmi_number ==null) data.bmi_number ='';

                $('#page-content #Temperature').val(data.temperature_number);
                $('#page-content #BloodPressureSystolic').val(data.blood_pressure___systolic_number);
                $('#page-content #BloodPressureDiastolic').val(data.blood_pressure___diastolic_number);
                $('#page-content #RespiratoryRate').val(data.respiratory_rate_number);
                $('#page-content #Weight').val(data.weight_number);
                $('#page-content #Height').val(data.height_number);
                $('#page-content #BMI').val(data.bmi_number);

                $('#clinical-modal-center #Temperature').val(data.temperature_number);
                $('#clinical-modal-center #BloodPressure-Systolic').val(data.blood_pressure___systolic_number);
                $('#clinical-modal-center #BloodPressure-Diastolic').val(data.blood_pressure___diastolic_number);
                $('#clinical-modal-center #RespiratoryRate').val(data.respiratory_rate_number);
                $('#clinical-modal-center #Weight').val(data.weight_number);
                $('#clinical-modal-center #Height').val(data.height_number);
                $('#clinical-modal-center #IBM').val(data.bmi_number);

            }
        });
    },

    //////////////////////for SQL
    newUpdateVital_sql:function(data){
        Object.assign(data,{ "token": _token});

        var link3 =link._appointmentNewUpdateVital_sql;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error==''){
                    if(data.Vital_ID !=''){
                        var vital_id = data.Vital_ID
                        modal_clinical.prototype.get_basic_vital_id(data.Vital_ID)
                    }else if(res.Vital_ID !=''){
                        var vital_id = res.Vital_ID
                        modal_clinical.prototype.get_basic_vital_id(res.Vital_ID)
                    }

                    pdf_ex.prototype.export_para_clinical(vital_id,"send_email");

                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');

                    },3000)
                }else{
                    $('#modal-error').modal('show')
                    $('#modal-error #err-message').text(res.Error)
                    setTimeout(function(){
                        $('#modal-error').modal('hide');

                    },3000)
                }

                //
            }
        });
    },

    new_update_vital_base_sql:function(data,el,open_id,iswhatpage){
        Object.assign(data,{ "token": _token});

        var link3 =link._appointmentNewUpdateVital_basic_sql;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(open_id !='' && iswhatpage !='iswhatpage'){
                    if(iswhatpage =='invoice'){
                        document.location.href = host2 + 'invoice.php?id='+open_id;
                    }else if(iswhatpage =='appointment_edit'){
                        document.location.href = host2 + 'appointment_edit.php?id='+open_id;
                    }
                }

                if(data.Vital_ID==''){
                    if(res.Vital_ID !='' && res.Vital_ID !=undefined){
                        $(el).val(res.Vital_ID)
                        modal_clinical.prototype.get_basic_vital_id(res.Vital_ID)
                    }
                }else{
                    modal_clinical.prototype.get_basic_vital_id(data.Vital_ID)
                }

                //
            }
        });
    },

}
var md_clinical = new modal_clinical();
$(function(){
    md_clinical.init();
});