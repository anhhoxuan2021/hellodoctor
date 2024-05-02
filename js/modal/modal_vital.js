
function modal_vital(){}
modal_vital.NAME         = "modal_vital";
modal_vital.VERSION      = "1.2";
modal_vital.DESCRIPTION  = "Class vitals";

modal_vital.prototype.constructor = modal_vital;
modal_vital.prototype = {
    init: function(){
        $("#vitalsign-modal-center #vital-save").unbind("click").bind("click",function(){
            /*var vitals_id = $('#vitalsign-modal-center #vitals-id').val();
            if(vitals_id !=''){
                md_vitals.create_up_vital(vitals_id);
            }else{
                md_vitals.create_up_vital('');
            }*/
            md_vitals.create_up_vital('');
        });

        if(window.location.pathname.includes('dashboard.php')){
            var id = getUrlParameter1('id');
            var patient_id = patient_login
            if(id!=undefined){
                patient_id =id
            }

            md_vitals.get_vital_userID(patient_id,'');
        }

    },

    /***********************************/
    reset_modal_vital:function(){
        //console.log("test");
        $('#vitalsign-modal-center #vitals-id').val('');
        $('#vitalsign-modal-center #BloodPressureDiastolic').val('');
        $('#vitalsign-modal-center #BloodPressureSystolic').val('');
        $('#vitalsign-modal-center #HeartRate').val('');
        $('#vitalsign-modal-center #RespiratoryRate').val('');
        $('#vitalsign-modal-center #O2Staturation').val('');

        $('#vitalsign-modal-center #Temperature').val('');
        $('#vitalsign-modal-center #Weight').val('');
        $('#vitalsign-modal-center #Height').val('');
        $('#vitalsign-modal-center #Glucose').val('');

        $('#vitalsign-modal-center #PainLevel').val('');
        $('#vitalsign-modal-center #BMI').val('');
        $('#vitalsign-modal-center #Notes').val('');
    },
    /***********************************/
    create_up_vital:function(Vital_ID){
       var blood_pressure___diastolic_number=$('#vitalsign-modal-center #BloodPressureDiastolic').val();
        if(blood_pressure___diastolic_number =='') blood_pressure___diastolic_number=0
       var blood_pressure___systolic_number=$('#vitalsign-modal-center #BloodPressureSystolic').val();
        if(blood_pressure___systolic_number =='') blood_pressure___systolic_number=0
        var heart_rate_number =$('#vitalsign-modal-center #HeartRate').val();
        if(heart_rate_number =='') heart_rate_number=0
       var respiratory_rate_number =$('#vitalsign-modal-center #RespiratoryRate').val();
        if(respiratory_rate_number =='') respiratory_rate_number=0
        var o2_staturation_number =$('#vitalsign-modal-center #O2Staturation').val();
        if(o2_staturation_number =='') o2_staturation_number=0

       var temperature_number =$('#vitalsign-modal-center #Temperature').val();
        if(temperature_number =='') temperature_number=0
       var weight_number =$('#vitalsign-modal-center #Weight').val();
        if(weight_number =='') weight_number=0
       var height_number =$('#vitalsign-modal-center #Height').val();
        if(height_number =='') height_number=0
       var glucose_number =$('#vitalsign-modal-center #Glucose').val();
        if(glucose_number =='') glucose_number=0
       var pain_level_number =$('#vitalsign-modal-center #PainLevel').val();
        if(pain_level_number =='') pain_level_number=0
       var bmi_number=$('#vitalsign-modal-center #BMI').val();
        if(bmi_number =='') bmi_number=0
       var notes_text =$('#vitalsign-modal-center #Notes').val();
       var login_user =$('#patient-id').val();

        //SQL
        var _data ={
            BloodPressureDiastolic:blood_pressure___diastolic_number,
            BloodPressureSystolic:blood_pressure___systolic_number,
            HeartRate:heart_rate_number,
            RespiratoryRate:respiratory_rate_number,
            BMI:bmi_number,
            Temperature:temperature_number,
            O2Staturation:o2_staturation_number,
            Glucose:glucose_number,
            PainLevel:pain_level_number,
            Weight:weight_number,
            Height:height_number,
            appointment_custom_appointment:'',
            patient_user:login_user,
            notes_text:notes_text,
            is_notes_text:1,
            token:_token,
            Vital_ID:Vital_ID
        }


        var link3 =link._appointmentNewUpdateVital_basic_sql;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:_data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                    if(res.Vital_ID !='' && res.Vital_ID !=undefined){
                        $('#vitalsign-modal-center #vitals-id').val(res.Vital_ID);
                        $('#vitalsign-modal-center').modal("hide")
                        $('#modal-success').modal("show")
                        setTimeout(function(){
                            $('#modal-success').modal("hide")
                        },2000)

                        md_vitals.get_vital_userID(login_user,'');
                    }
                //
            }
        });


    },
    /***********************************************/
    get_vital_userID:function(patient_user,appointment_custom_appointment){
        var link3 =link._vitals_user;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,patient_user:patient_user,appointment_custom_appointment:appointment_custom_appointment},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
               if(res.vital.length >0){

                   data=res.vital;
                   //console.log(data);
                   //Glucose
                   var glucose_dataPoints = []
                   var glucose_chart = new CanvasJS.Chart("glucose_display",
                       {
                           axisX: {
                               valueFormatString: "MMM",
                               intervalType: "month"
                           },
                           data: [
                               {
                                   type: "spline",
                                   xValueFormatString:"YY-MM-DD hh:mm:ss",
                                   dataPoints:glucose_dataPoints
                               }
                           ]
                       });
                   //chart heart rate
                   var heart_dataPoints = []
                   var heart_chart = new CanvasJS.Chart("Heart_Rate",
                       {
                           axisX: {
                               valueFormatString: "MMM",
                               intervalType: "month"
                           },
                           data: [
                               {
                                   type: "spline",
                                   xValueFormatString:"YY-MM-DD hh:mm:ss",
                                   dataPoints:heart_dataPoints
                               }
                           ]
                       });

                    //chart blood pressure
                   var blood_pressure_diastolic_number_dataPoints = []
                   var blood_pressure_systolic_number_number_dataPoints = []
                   var blood_pressure_chart = new CanvasJS.Chart("blood_pressure",
                       {
                           axisX: {
                               valueFormatString: "MMM",
                               intervalType: "month"
                           },
                           data: [
                               {
                                   type: "line",
                                   xValueFormatString:"YY-MM-DD hh:mm:ss",
                                   dataPoints:blood_pressure_diastolic_number_dataPoints
                               },
                               {
                                   type: "line",
                                   xValueFormatString:"YY-MM-DD hh:mm:ss",
                                   dataPoints:blood_pressure_systolic_number_number_dataPoints
                               }
                           ]
                       });

                   //chart weight
                   var weight_dataPoints = []
                   var weight_chart = new CanvasJS.Chart("weight-times",
                       {
                           axisX: {
                               valueFormatString: "MMM",
                               intervalType: "month"
                           },
                           data: [
                               {
                                   type: "spline",
                                   xValueFormatString:"YY-MM-DD hh:mm:ss",
                                   dataPoints:weight_dataPoints
                               }
                           ]
                       });
                    //chart bmi
                   var bmi_dataPoints = []
                   var bmi_chart = new CanvasJS.Chart("bmi-times",
                       {
                           axisX: {
                               valueFormatString: "MMM",
                               intervalType: "month"
                           },
                           data: [
                               {
                                   type: "spline",
                                   xValueFormatString:"YY-MM-DD hh:mm:ss",
                                   dataPoints:bmi_dataPoints
                               }
                           ]
                       });

                   if(data.length > 0){
                       data.forEach(function(item){
                           if(item.heart_rate_number != undefined &&
                               item.heart_rate_number !=null && item.heart_rate_number !=''){
                               heart_dataPoints.push({ x: new Date(item.CreatedDate), y: parseInt(item.heart_rate_number)})
                           }

                           if(item.glucose_number != undefined &&
                               item.glucose_number !=null && item.glucose_number !=''){
                               glucose_dataPoints.push({ x: new Date(item.CreatedDate), y: parseInt(item.glucose_number)})
                           }

                           if(item.blood_pressure___diastolic_number != undefined &&
                               item.blood_pressure___diastolic_number !=null && item.blood_pressure___diastolic_number !=''){
                               blood_pressure_diastolic_number_dataPoints.push({ x: new Date(item.CreatedDate), y: parseInt(item.blood_pressure___diastolic_number)})
                           }

                           if(item.blood_pressure___systolic_number != undefined &&
                               item.blood_pressure___systolic_number !=null && item.blood_pressure___systolic_number !=''){
                                blood_pressure_systolic_number_number_dataPoints.push({ x: new Date(item.CreatedDate), y: parseInt(item.blood_pressure___systolic_number)})
                           }

                           if(item.weight_number != undefined &&
                               item.weight_number !=null && item.weight_number !=''){
                               weight_dataPoints.push({ x: new Date(item.CreatedDate), y: parseInt(item.weight_number)})
                           }

                           if(item.weight_number != undefined &&
                               item.weight_number !=null && item.weight_number !=''){
                               bmi_dataPoints.push({ x: new Date(item.CreatedDate), y: parseInt(item.bmi_number)})
                           }


                       })

                       heart_chart.render();
                       glucose_chart.render();
                       blood_pressure_chart.render();
                       weight_chart.render();
                       bmi_chart.render();
                       /*if(glucose_dataPoints.length > 0){

                       }
                       if(heart_dataPoints.length > 0){

                       }
                       if(blood_pressure_diastolic_number_dataPoints.length > 0 || blood_pressure_systolic_number_number_dataPoints.length > 0){

                       }
                       if(weight_dataPoints.length > 0){

                       }
                       if(bmi_dataPoints.length > 0){

                       } */
                   }



                   ////////////////////////////////////////////////

                   /*var vital_id = data.Vital_ID
                   $('#vitalsign-modal-center #vitals-id').val(vital_id);

                   var BloodPressureDiastolic =''
                   if(data.blood_pressure___diastolic_number !=undefined) BloodPressureDiastolic =data.blood_pressure___diastolic_number
                   $('#vitalsign-modal-center #BloodPressureDiastolic').val(BloodPressureDiastolic);

                   var BloodPressureSystolic =''
                   if(data.blood_pressure___systolic_number !=undefined) BloodPressureSystolic =data.blood_pressure___systolic_number
                   $('#vitalsign-modal-center #BloodPressureSystolic').val(BloodPressureSystolic);

                   var respiratory_rate =''
                   if(data.respiratory_rate_number !=undefined) respiratory_rate =data.respiratory_rate_number
                   $('#vitalsign-modal-center #RespiratoryRate').val(respiratory_rate);

                   var HeartRate =''
                   if(data.heart_rate_number !=undefined) HeartRate =data.heart_rate_number
                   $('#vitalsign-modal-center #HeartRate').val(HeartRate);

                   var O2Staturation =''
                   if(data.o2_staturation_number !=undefined) O2Staturation =data.o2_staturation_number
                   $('#vitalsign-modal-center #O2Staturation').val(O2Staturation);

                   var Temperature =''
                   if(data.temperature_number !=undefined) Temperature =data.temperature_number
                   $('#vitalsign-modal-center #Temperature').val(Temperature);

                   var Weight =''
                   if(data.weight_number !=undefined) Weight =data.weight_number
                   $('#vitalsign-modal-center #Weight').val(Weight);

                   var Height =''
                   if(data.height_number !=undefined) Height =data.height_number
                   $('#vitalsign-modal-center #Height').val(Height);

                   var Glucose =''
                   if(data.glucose_number !=undefined) Glucose =data.glucose_number
                   $('#vitalsign-modal-center #Glucose').val(Glucose);

                   var PainLevel =''
                   if(data.pain_level_number !=undefined) PainLevel =data.pain_level_number
                   $('#vitalsign-modal-center #PainLevel').val(PainLevel);

                   var BMI =''
                   if(data.bmi_number !=undefined) BMI =data.bmi_number
                   $('#vitalsign-modal-center #BMI').val(BMI);

                   var Notes =''
                   if(data.notes_text !=undefined) Notes =data.notes_text
                   $('#vitalsign-modal-center #Notes').val(Notes);
                   */
               }
            }
        });
    },
    /***********************************************/
        /*
    newUpdateVitalBasic_sql:function(data){
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
                console.log(res);

                //
            }
        });
    },
    */

}
var md_vitals = new modal_vital();
$(function(){
    md_vitals.init();
});