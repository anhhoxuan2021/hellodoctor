
function modal_appointment(){}
modal_appointment.NAME         = "modal_appointment";
modal_appointment.VERSION      = "1.2";
modal_appointment.DESCRIPTION  = "Class login";

modal_appointment.prototype.constructor = modal_appointment;
modal_appointment.prototype = {
    init: function(){
        $('#app-modal-lg-center #ChiefComplaint').html(chief_complain)

        $("#confirm-y").unbind("click").bind("click",function(){
            $("#modal-alert-appointment").modal("show");
        });

        $("#confirm-n").unbind("click").bind("click",function(){
            $(".app_buoc2 ").removeClass('disabled');
            $(".app_buoc2 ").click();

            if($("#guardian_user").val()!='' && $("#guardian_user").val()!=undefined){
                $('#app_for_dependent').prop("checked",true);
                $('#app_for_you').prop("checked",false);
            }else{
                $('#app_for_dependent').prop("checked",false);
                $('#app_for_you').prop("checked",true);
            }

            $('#app-modal-lg-center #Patient').html('');
            var val =$("#patient-id").val();

            var email_attr = $('#login_email').val();
            var id_attr = $('#patient-id').val();

            var name = '';
            if($("#full_name").val() !=undefined && $("#full_name").val() !=''){
                name =  $("#full_name").val()
            }else{
                name = $("#FamilyName").val()+" "+$("#middle_name").val() +" "+$("#first_name").val()
            }

            var option = '<option value="'+val+'">'+name+'</option>'

            $('#app-modal-lg-center #Patient').append(option);

           /* if($('#app_for_you').is(":checked")){
               console.log("test")
            }

            if($('#app_for_dependent').is(":checked")){
                console.log("test2")
               // $('#app-modal-lg-center #Patient').html('');
                //call relative list
            }*/
        });

        $("#confirm-next2").unbind("click").bind("click",function(){
            if($(".app_buoc4").hasClass('disabled')){
                md_app.create_appointment()
                $(".app_buoc1 ").addClass('disabled');
                $(".app_buoc2 ").addClass('disabled');
                $(".app_buoc4").removeClass('disabled');
                $(".app_buoc4").click();
            }
            //$(".app_buoc3").removeClass('disabled');
            //$(".app_buoc3").click();

        });

        /*$("#confirm-next3").unbind("click").bind("click",function(){
            $(".app_buoc4").removeClass('disabled');
            $(".app_buoc4").click();
        });*/

        $('#app_for_you').unbind('click').bind("click",function(){
            $('#app-modal-lg-center #Patient').html('');
                if($("#guardian_user").val()=='' || $("#guardian_user").val()==undefined){
                    var val =$("#patient-id").val();
                    var email_attr = $('#login_email').val();
                    var id_attr = $('#patient-id').val();
                    var name = $("#FamilyName").val()+" "+$("#middle_name").val() +" "+$("#first_name").val()
                    var option = '<option value="'+val+'">'+name+'</option>'

                    $('#app-modal-lg-center #Patient').append(option);
                }

        });

        $('#app_for_dependent').unbind('click').bind("click",function(){
            $('#app-modal-lg-center #Patient').html('');
                if($("#guardian_user").val()!='' && $("#guardian_user").val()!=undefined){
                    var val =$("#patient-id").val();
                    var email_attr = $('#login_email').val();
                    var id_attr = $('#patient-id').val();
                    var name = $("#FamilyName").val()+" "+$("#middle_name").val() +" "+$("#first_name").val()
                    var option = '<option value="'+val+'">'+name+'</option>'

                    $('#app-modal-lg-center #Patient').append(option);
                }else{
                    //call list patient
                    var guardian_id =$("#patient-id").val();
                    modal_appointment.prototype.relative_list_patient(guardian_id)
                }
        });

    },

    relative_list_patient:function(guardian_user){
        let link3 =link._dependent;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token":_token,guardian_user:guardian_user},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                var option ='';
                if(res.results.length >0){
                    res.results.forEach(function(item){
                        var val = item.User_id;
                        var name= ''
                        if(item.display_name_text !=undefined){
                            name= item.display_name_text
                        }else{
                            var first_name_text =(item.first_name_text==undefined)?'':item.first_name_text
                            var middle_name_text =(item.middle_name_text==undefined)?'':item.middle_name_text
                            var family_name_text =(item.family_name_text==undefined)?'':item.family_name_text

                            name=family_name_text+" "+middle_name_text+" "+first_name_text
                        }

                        option += '<option value="'+val+'">'+name+'</option>';
                    })

                }

                $('#app-modal-lg-center #Patient').html(option);

            }
        });

    },

    reset_modal_appointment:function(){
        $('#app-modal-lg-center #Smoker').prop("checked",false);
        $('#app-modal-lg-center #SmokerNotes').val('');

        $('#app-modal-lg-center #StomachProblems').prop("checked",false);
        $('#app-modal-lg-center #StomachProblemNotes').val('');

        $('#app-modal-lg-center #Surgeries').prop("checked",false);
        $('#app-modal-lg-center #SurgeryNotes').val('');
        //
        $('#app-modal-lg-center #AlcoholConsumption').prop("checked",false);
        $('#app-modal-lg-center #AlcoholConsumptionNotes').val('');

        $('#app-modal-lg-center #HeartDisease').prop("checked",false);
        $('#app-modal-lg-center #HeartDiseaseNotes').val('');

        $('#app-modal-lg-center #Diabetes').prop("checked",false);
        $('#app-modal-lg-center #DiabetesNotes').val('');
        //
        $('#app-modal-lg-center #EyeProblems').prop("checked",false);
        $('#app-modal-lg-center #EyeProblemNotes').val('');

        $('#app-modal-lg-center #LiverorKidneyProblems').prop("checked",false);
        $('#app-modal-lg-center #LiverorKidneyProblemNotes').val('');

        $('#app-modal-lg-center #LungDisease').prop("checked",false);
        $('#app-modal-lg-center #LungDiseaseNotes').val('');

        $("#app-modal-lg-center #Description").val('');
    },

    create_appointment:function(){

        var Patient = $("#app-modal-lg-center #Patient").val();
        var Chief = $('#app-modal-lg-center #ChiefComplaint').val();
        var Description = $('#app-modal-lg-center #Description').val();

        var _data ={patient_user:Patient,
            Description:Description,
            ChiefComplaint:Chief,
            token:_token,
            user_login:user_login

        }

        if(window.location.pathname.includes('physician_infomation.php')){
            Object.assign(_data,{ "assigned_doctor_user": $('#doctor').val()});
        }

        var link3 =link._dashboardAddAppointment_sql;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:_data,
            dataType: 'json',
            //contentType: 'application/json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.ERROR ==''){

                    $('#app-modal-lg-center #goto-apptment').attr("href","patient_appointment.php?id="+res.Appt_id)

                    //Set info for step4
                    $('#appointment-id-4').text(res.aptid_text);
                    $('#patient-name-4').text($("#app-modal-lg-center #Patient option:selected").text());
                    $('#chief-complain-4').val($("#app-modal-lg-center #ChiefComplaint option:selected").text());
                    $('#discription-4').val(Description);
                }else{
                    $('#modal-error #err-message').text(res.ERROR);
                    $('#modal-error').modal("show")
                    setTimeout(function(){
                        $('#modal-error').modal("hide");
                        $('#modal-error #err-message').text('');
                    },2000)
                }
                //console.log(res);

                //
            }
        });

    },

    //function of SQL
    create_appointment_SQL:function(data){
        var link3 =link._dashboardAddAppointment_sql;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:data,
            dataType: 'json',
            //contentType: 'application/json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                console.log(res);

                //
            }
        });
    },
    //
}
var md_app = new modal_appointment();
$(function(){
    md_app.init();
});