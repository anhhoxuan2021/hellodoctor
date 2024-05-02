
function appointment_edit(){
    this.file_tranfer = new DataTransfer()
    this.was_changed =0;
}
appointment_edit.NAME         = "appointment_edit";
appointment_edit.VERSION      = "1.2";
appointment_edit.DESCRIPTION  = "Class appointment_edit";

appointment_edit.prototype.constructor = appointment_edit;
appointment_edit.prototype = {
    init: function(){
        $('.appointment-edit #Type').html(appointment_types);
        $('.appointment-edit #Disposition').html(apt_disposition);
        $('.appointment-edit #ChiefComplaint').html(chief_complain);

        var id = getUrlParameter1('id');
        if(id==undefined) return;
        appt_e.getAppointment_id(id);

        //history_lab.prototype.get_diagnostic_nane_select2()
        history_lab.prototype.get_diagnostic_code_select2();
        history_lab.prototype.get_location_service();
        history_lab.prototype.get_product_name();
        history_lab.prototype.get_completed_by();
        history_lab.prototype.get_completed_by_lab("#add-lab-result-modal .modal-body","#add-lab-result-modal .modal-body #m-lab-completed-by");
        //prescription
       // getDiagnosticNaneSelect2('#prescription-modal #prescription-diagnostic-name','#prescription-modal .modal-body');
        getDiagnosticCodeSelect2('#prescription-modal #prescription-diagnostic-code','#prescription-modal .modal-body');
        getLocationService('#prescription-modal #prescription-location','#prescription-modal .modal-body','#prescription-modal #prescription-location option','Nhập nơi chỉ định');
        getCompletedBy('#prescription-modal #prescription-completed-by','#prescription-modal .modal-body', 'Nhập tên người hoàn tất','Lab');
        getCompletedBy('#prescription-modal #prescription-delivered-by','#prescription-modal .modal-body','Nhập tên người giao hàng','Delivery');

        //get vital
        modal_clinical.prototype.get_vital_apptID(id);
        //get notes
        modal_note.prototype.get_note_by_attachmentto_attchmentID();

        $('#lab-test-new').unbind('click').bind('click',function(){
            if(type_login =='Patient') return false
            history_lab.prototype.reset_lab_modal();
            $('#lab-modal #save-lab-div').html('<button class="btn btn-succ w100" id="save-lab">L?u</button>')

            getDiagnostic(id,'#lab-modal #lab-diagnostic-selected','lab');

            $('#lab-modal').modal('show');
            //console.log(generalStatus)
            var option = selectBox(generalStatus,'');
            $('#lab-modal #modal-lab-general-status').html(option);
            $('#lab-modal #modal-lab-general-status option[value="New"]').attr("selected","selected")
            var patient_address =  $('#patient-address').val();
            var patient_id =  $('#patient-id').val();
            var patient_name =  $('#patient-name').val();
            var doctor_name =  $('#doctor-assigned-name').val();
            var doctor_id =  $('#doctor-id').val();
            var appointment_id =$('#appointment-id').val();
            var appointment_name =$('#appt-name').text();

            $('#lab-modal #lab-appt-text').text(appointment_name);

            $('#lab-modal #lab-display-patient-name').text(patient_name);
            $('#lab-modal #lab-patient-address').text(patient_address);
            $('#lab-modal #lab-doctor-assigned-name').text(doctor_name);

            $('#lab-modal #lab-patient-id').val(patient_id);
            $('#lab-modal #lab-doctor-id').val(doctor_id);
            $('#lab-modal #lab-appt-id').val(appointment_id);

            //bind save event
            $('#lab-modal #save-lab').unbind('click').bind('click',function(){
                $('#lab-modal #save-lab').prop("disabled",true)
                history_lab.prototype.save_update_lab('','');
            });

            if(type_login =='Doctor'){
                $('#lab-modal #lab-validation').css({"display":""})
            }
        });

        $('.appointment-edit #update-appointment').unbind('click').bind('click',function(){
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
            //var webmeeting_text=$('.appointment-edit #Webmeeting').val()
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
                appt_e.updateAppoint_sql(id,data_sql,$('#appt-name1').text());
                //appt_e.upload_file(id,data_sql,$('#appt-name1').text());
            }
        });

        ///

        $(".appointment-edit #clinical_show").unbind("click").bind("click",function(){
            modal_clinical.prototype.get_vital_apptID(id);
            $('#clinical-modal-center').modal('show')
            getDiagnosticCodeSelect2('#clinical-modal-center #diagnostic-code','#clinical-modal-center .modal-body');
            //getDiagnosticNaneSelect2('#clinical-modal-center #diagnostic-name','#clinical-modal-center .modal-body');

        })

        $('.appointment-edit #AssignedDoctor').change(function(){
            if(($('#login_user_type').val() !='Patient') && ($('#appointment_status') !='Complete')){
                if($('#appointment_deposition').val() == 'Waiting - Physician'){
                    $("#Disposition option").attr("selected", false);
                    $('#Disposition').find("option[value='Consultation']").prop("selected", true);
                }

               /* var disposition_option_apt_disposition =$('.appointment-edit #Disposition').val();
                var webmeeting_text='https://xinchaobacsi.vn/agora_connector?rm='+$('#appt-name1').text();

                var assigned_doctor_user =$('.appointment-edit #AssignedDoctor').val();
                var data ={
                    disposition_option_apt_disposition:disposition_option_apt_disposition,
                    status_option_status:'In Process',
                    webmeeting_text:webmeeting_text,
                    assigned_doctor_user:assigned_doctor_user
                }

                appt_e.update_appointment_id(id,data,"update_webmeeting_to_user");
                */
            }
        });

        /*$('.appointment-edit #Disposition').change(function(){
            if($(this).val() == 'Complete'){
                $("#Disposition option").attr("selected", false);
                $('#Disposition').find("option[value='Complete']").prop("selected", true);

                $('#diposition-complete-modal').modal('show')
            }
        }); */

        $('#diposition-complete-modal #diposition-complete-confirm').unbind('click').bind('click',function(){
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

            var data_sql ={
                apt_date_date:dateFullTemp,
                type_option_appointment_types:type_option_appointment_types,
                disposition_option_apt_disposition:disposition_option_apt_disposition,
                chief_complaint_option_chief_complaint:chief_complaint_option_chief_complaint,
                description_text:description_text,
                webmeeting_text:webmeeting_text,
                assigned_doctor_user:assigned_doctor_user,
                triage_staff_user:triage_staff_user,
                //invoice_custom_invoice:$('#appointment_inv').val()
            }


            appt_e.updateAppoint_sql(id,data_sql,$('#appt-name1').text());
        });

        $('#diposition-complete-modal #diposition-complete-cancel').unbind('click').bind('click',function(){
            $("#Disposition option").attr("selected", false);
            var disposition = $('#appointment_deposition').val()
            $('#Disposition').find("option[value='"+disposition+"']").prop("selected", true);
        });

        $('.appointment-edit #add-note').unbind('click').bind('click',function(){
                $('#note-modal').modal('show');
                 modal_note.prototype.reset_modal_note('')
                 modal_note.prototype.init_note('')
        });

        $('.appointment-edit #Notes-history').on('click','.edit',function(){
            $('#note-modal').modal('show');
            var note_id =$(this).find('.note-id').val()
            modal_note.prototype.reset_modal_note(note_id)
            modal_note.prototype.init_note(note_id,$(this))
        });
        //doing, not work now
        $('#send-invite-email').unbind('click').bind('click',function(){
            common_f.prototype.invite_email(id)
        })

        $('#send-notification-email').unbind('click').bind('click',function(){
            common_f.prototype.send_notification_apt(id)
        })
        /*
        $('.inputfile').unbind('click').bind('click',function(){
            appointment_edit.prototype.choose_files();
        })*/

        //files
        $('#appointment-attachement').on('click','.exsiting-file-delete',function(){
            $(this).closest('.row').remove();
        })

        $("#attachment").on('change', function(e){
            var fileBloc ='';
            for(var i = 0; i < this.files.length; i++){
                fileBloc +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                    '<div class="col-9 file-name">'+this.files.item(i).name+'</div>' +
                    '<div class="col-3 file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                    '</div>'
            };
            $("#files-area").append(fileBloc);

            for (let file of this.files) {
                appt_e.file_tranfer.items.add(file);
            }

            this.files = appt_e.file_tranfer.files;

            $('#files-area .file-delete').click(function(){
                let name = $(this).closest('.row').find('.file-name').text();
                $(this).parent().remove();
                for(let i = 0; i < appt_e.file_tranfer.items.length; i++){
                    // Correspondance du fichier et du nom
                    if(name === appt_e.file_tranfer.items[i].getAsFile().name){
                        appt_e.file_tranfer.items.remove(i);
                        continue;
                    }
                }
                document.getElementById('attachment').files = appt_e.file_tranfer.files;
            });
        });

        //leave page
        $("#apt-modify .was-changed").change(function(){
            appointment_edit.prototype.was_changed =1
        })

        $(window).on('beforeunload', function(){
            if(appointment_edit.prototype.was_changed ==1){
                return "You haven't saved yet!";
            }

        });
    },


    getAppointment_id: function(id){

        var link1 =link._apt_by_aptid;
        $.ajax({
            "async": false,
            "crossDomain": true,
            "url": link1,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,Appt_id:id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res.response)
                var data=res.apt;

                var date='';
                var hour='';
                if(data.apt_date_date!=null){
                    var d = new Date(data.apt_date_date);
                    var date_t = d.toLocaleString();
                    var date_arr = date_t.split(',');
                    var date1_arr = date_arr[0].split('/');
                    date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);

                    var hour_t = date_arr[1].split(':');
                    var am_pm_t = hour_t[2].split(' ');
                    hour_t[0]= hour_t[0].trim();
                    var hour = ("0"+hour_t[0]).slice(-2)+':'+("0"+hour_t[1]).slice(-2)
                    if(am_pm_t[1].trim()=='PM'){
                        var h= parseInt(hour_t[0]) +12;
                        hour = h+':'+("0"+hour_t[1]).slice(-2)
                    }
                }

                $('#date').val(date);
                $('#time-2').val(hour);
                $('#appt-name').text(data.aptid_text);
                $('#appt-name1').text(data.aptid_text);
                $('#Type').find("option[value='"+data.type_option_appointment_types+"']").attr("selected", "selected");
                $('#Disposition').find("option[value='"+data.disposition_option_apt_disposition+"']").attr("selected", true);
                $('#ChiefComplaint').find("option[value='"+data.chief_complaint_option_chief_complaint+"']").attr("selected", "selected");
                $('#Description').val(data.description_text);
                $('#Webmeeting').val(data.webmeeting_text);
                $('#a-weebmeeting').attr('href',data.webmeeting_text)
                $('#appointment_status').val(data.status_option_status)
                $('#appointment_deposition').val(data.disposition_option_apt_disposition)

                $('#patient-id').val(data.patient_user)
                $('#appointment-id').val(id);

                var exsting_file_area = '';
                if(data.attachments_list_file !='' && data.attachments_list_file !=null){
                    data.attachments_list_file.forEach(function(exsiting_file){
                        var temp = exsiting_file.split('/');
                        var index = temp.length;
                        var name_file = temp[index-1];
                        exsting_file_area +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                            '<div class="col-9"> <a href="'+exsiting_file+'" target="_blank" class="exsiting-file-name">'+name_file+'</a></div>' +
                            '<div class="col-3 exsiting-file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                        '</div>'
                    })

                    $('#appointment-attachement').append(exsting_file_area);
                }
                /*
                var diagnostic_list='';
                if(data.diagnostic_list_custom_diagnostic !=null && data.diagnostic_list_custom_diagnostic !='null'){
                    data.diagnostic_list_custom_diagnostic.forEach(function(item){
                        diagnostic_list=(diagnostic_list =='')?item:diagnostic_list+','+item;
                    }) ;

                    $('#diagnostic_list').val(diagnostic_list);
                }*/

                //call user
                var img ='';
                if(data.u_p_avatar_image !=null && data.u_p_avatar_image !=''){
                    img ='<img src="'+data.u_p_avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
                }

                var age ='';
                var date_t ='';
                if(data.u_p_birth_date_date !=null){
                    date_t =new Date(data.u_p_birth_date_date);

                    date_t=date_t.toLocaleString();
                    date_t=date_t.split(',');
                    var d = date_t[0];
                    var age_t = d.split('/')
                    var age =age_t[2];
                    age =new Date().getFullYear() - parseInt(age) +' tuổi';
                }

                var phone =data.u_p_primary_phone_number_text;
                var name =''
                if(data.u_p_display_name !=null){
                    name =  data.u_p_display_name
                }else{
                    var first_name_text =(data.u_p_first_name==null)?'':data.u_p_first_name
                    var middle_name_text =(data.u_p_middle_name==null)?'':data.u_p_middle_name
                    var family_name_text =(data.u_p_family_name==null)?'':data.u_p_family_name

                    name=family_name_text+" "+middle_name_text+" "+first_name_text
                }

                $('#patient-name').val(name);
                //var name = data.display_name_text;
                name ='<a href="dashboard.php?id='+data.patient_user+'"><strong>'+name+'</strong></a>'
                $('#user-image').html(img);
                $('#user-name').html(name);
                $('#user-year').html(d);
                $('#user-age').html(age);
                $('#user-phone').html(phone);

                var address='';
                if(data.u_p_PatientAddress!=null){
                    if(data.u_p_PatientAddress!=null){
                        address =data.u_p_PatientAddress
                    }
                }

                $('#patient-address').val(address);

                //call doctor assiged
                if(data.assigned_doctor_user !=null){

                    common_f.prototype.get_user_metas(data.assigned_doctor_user,"#doctor-degree","#doctor-specialty","#doctor-university")
                    var name ='';

                    var image = '';
                    if(data.u_d_avatar_image !==null && data.u_d_avatar_image !=''){
                        image = '<img src="'+data.u_d_avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
                    }

                    if(data.asg_d_display_name !=null){
                        name= data.asg_d_display_name
                    }else{
                        var first_name_text =(data.asg_d_first_name==null)?'':data.asg_d_first_name
                        var middle_name_text =(data.asg_d_middle_name==null)?'':data.asg_d_middle_name
                        var family_name_text =(data.asg_d_family_name==null)?'':data.asg_d_family_name
                        name=family_name_text+" "+middle_name_text+" "+first_name_text;
                    }


                    var link_doctor ='<a href="dashboard.php?id='+data.assigned_doctor_user+'"><strong>'+name+'</strong></a>';

                    $('#doctor-image').html(image);
                    $('#doctor-name').html(name);
                    $('#doctor-id').val(data.assigned_doctor_user);
                    $('#doctor-assigned-name').val(name);
                    if(data.u_d_pin_text !=null) $('#doctor-pint-text').text(data.u_d_pin_text);
                }

                //call doctor list
                appt_e.doctor_list_appoved(data.assigned_doctor_user,'',appointment_edit.prototype.display_doctor_list);
                //call nurse list
                appt_e.nurse_list(data.triage_staff_user,appointment_edit.prototype.display_nurse_list)

                if(data.invoice_custom_invoice !=null){
                    $('#appointment_inv').val(data.invoice_custom_invoice);
                    appt_e.app_getInvbyID(data.invoice_custom_invoice)
                }

                //call history
                var patientID=$('#page-content #patient-id').val();
                //history_detail.prototype.get_history(patientID);
                //get history
                if(data.disposition_option_apt_disposition=='Complete'){
                    $('.appointment-edit #update-appointment').prop('disabled',true)
                    $('.appointment-edit #add-note').prop('disabled',true)
                    $('.appointment-edit #lab-test-new').prop('disabled',true)
                    $('.appointment-edit #pres-add-new').prop('disabled',true)
                    $('.appointment-edit #Disposition').prop('disabled',true)
                }

                if(data.status_option_status == "Complete"){
                    $('.class-disabled').prop("disabled",true);
                    $('.read-only').prop("readonly",true);
                }
            }
        });

    },

    display_doctor_list:function(data,doctor_assiged){

        var option='<option value=""></option> ';
        data.forEach(function(item){
            var d_name = '';
            if(item.display_name_text !=null){
                d_name = item.display_name_text
            }else{
                if(item.family_name_text !=null) d_name =item.family_name_text;
                if(item.middle_name_text !=null) d_name =d_name +" "+ item.middle_name_text;
                if(item.first_name_text !=null) d_name =d_name +" "+ item.first_name_text;

            }

            option +='<option value="'+item.user_meta_user+'">'+d_name+'</option>';
        });

        $('#AssignedDoctor').append(option);
        $('#AssignedDoctor').find("option[value='"+doctor_assiged+"']").attr("selected", "selected");
    },

    display_nurse_list:function(data,nurse_assiged){
        var option='<option value=""></option> ';
        data.forEach(function(item){
            var n_name = '';
            if(item.family_name_text !=undefined) n_name =item.family_name_text;
            if(item.middle_name_text !=undefined) n_name =n_name +" "+ item.middle_name_text;
            if(item.first_name_text !=undefined) n_name =n_name +" "+ item.first_name_text;

            option +='<option value="'+item._id+'">'+n_name+'</option>';
        });

        $('#TriageStaff').append(option);
        $('#TriageStaff').find("option[value='"+nurse_assiged+"']").attr("selected", "selected");
    },

    display_user:function(data,type){
        if(type=='doctor'){
            //console.log(data);
            var img = ''
            if(data.avatar_image !=null){
                img ='<img src="'+data.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
            }

            var name =''
            if(data.display_name_text !=null){
                 name =  data.display_name_text
            }else{
                var first_name_text =(data.first_name_text==null)?'':data.first_name_text
                var middle_name_text =(data.middle_name_text==null)?'':data.middle_name_text
                var family_name_text =(data.family_name_text==null)?'':data.family_name_text
                   name=family_name_text+" "+middle_name_text+" "+first_name_text;
            }

            //var name = data.display_name_text;
            name ='<a href="dashboard.php?id='+data.User_id+'"><strong>'+name+'</strong></a>';
            $('#doctor-image').html(img);
            $('#doctor-name').html(name);
            $('#doctor-id').val(data.User_id);
            $('#doctor-assigned-name').val(data.display_name_text);
            if(data.pin_text !=null) $('#doctor-pint-text').text(data.pin_text);
            //$('#doctor-apart').html(name);
        }else if(type=='user'){
            var img = ''
            if(data.avatar_image !=null){
                img ='<img src="'+data.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
            }

            var age ='';
            var date_t ='';
            if(data.birth_date_date !=null){
                date_t =new Date(data.birth_date_date);

                date_t=date_t.toLocaleString();
                date_t=date_t.split(',');
                var d = date_t[0];
                var age_t = d.split('/')
                var age =age_t[2];
                age =new Date().getFullYear() - parseInt(age) +' tuổi';
            }

            //console.log(data);
            var phone =data.primary_phone_number_text;
            var name =''
            if(data.display_name_text !=null){
                 name =  data.display_name_text
            }else{
                var first_name_text =(data.first_name_text==null)?'':data.first_name_text
                var middle_name_text =(data.middle_name_text==null)?'':data.middle_name_text
                var family_name_text =(data.family_name_text==null)?'':data.family_name_text

                name=family_name_text+" "+middle_name_text+" "+first_name_text
            }

            $('#patient-name').val(name);
            //var name = data.display_name_text;
            name ='<a href="dashboard.php?id='+data.User_id+'"><strong>'+name+'</strong></a>'
            $('#user-image').append(img);
            $('#user-name').html(name);
            $('#user-year').html(d);
            $('#user-age').html(age);
            $('#user-phone').html(phone);


            var address='';
            if(data.address_geographic_address!=null){
                if(data.address_geographic_address.address!=null){
                    address =data.address_geographic_address
                }
            }

            $('#patient-address').val(address);
        }

    },

   doctor_list_appoved:function(doctor_asigned,text_search,cb){
       //var link3 =link._doctor_list_s;
       var link3 =link._user_meta_approved;
       var _data ={token:_token,text_search:text_search}

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
               //console.log(res);
               cb(res.usermeta_approved,doctor_asigned);
           }
       });
   },

    nurse_list:function(nurse_asigned,cb){
        //var link3 =link._nurse_list_s;
        var link3 =link._users_by_type;
        var _data ={token:_token,user_type_option_user_type:'Nurse'}

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
                cb(res.users.results,nurse_asigned);
            }
        });
    },

    get_user_id:function(User_id,type,cb){
        var link3 =link._user_by_id;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token": _token,User_id:User_id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res)
                cb(res.user,type);
            }
        });
    },



    app_getInvbyID: function(Inv_id){
        var link1 =link._inv_by_id;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link1,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,Inv_id:Inv_id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                if(parseFloat(res.inv.balance_number) >0){
                    $('#appt-inv-id').html('<a href="invoice.php?id='+res.inv.Inv_id+'"><button class="btn btn-danger"><strong>Thanh Toán</strong></button></a>')

                }

            }
        });

    },
    /*********************************************************/
    choose_files:function(){
        var inputs = document.querySelectorAll( '.inputfile' );
        Array.prototype.forEach.call( inputs, function( input )
        {
            var label	 = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener( 'change', function( e )
            {
                var fileName = '';
                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    label.querySelector( 'span' ).innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });
        });


    },
    //////////////SQL
    updateAppoint_sql:function(Appt_id,data1,aptid_text,open_id,iswhatpage){
        //Object.assign(data,{ "token": _token});
        var link3 =link._appointmentUpdateApoinment;
        var data = new FormData();
        var imgData = document.getElementById('attachment');
        if(imgData.files.length  > 0) {
            for (var i = 0; i < imgData.files.length; i++) {
                data.append('file[]', imgData.files[i], imgData.files[i].name);
            }
        }

        data.append('token', _token);
        data.append('Appt_id', Appt_id);
        data.append('aptid_text', aptid_text);
        data.append('data_post',JSON.stringify(data1));


        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data: data,
            dataType: 'json',
           // data:{"token": _token,Appt_id:Appt_id,aptid_text:aptid_text,data_post:data},
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            error : function (status,xhr,error) {
            },
            success: function (res) {
               // var res = $.parseJSON(xhr) when remove dataType: 'json'
                if(res.Error==''){
                    $('#modal-leave-page').modal("hide")
                    appointment_edit.prototype.was_changed =0
                    //attachemnt file
                    if(res.files_save_success.length >0){
                        var exsting_file_area = ''
                        res.files_save_success.forEach(function(exsiting_file){
                            var temp = exsiting_file.split('/');
                            var index = temp.length;
                            var name_file = temp[index-1];
                            exsting_file_area +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                                '<div class="col-9"> <a href="'+exsiting_file+'" target="_blank" class="exsiting-file-name">'+name_file+'</a></div>' +
                                '<div class="col-3 exsiting-file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                                '</div>'
                        })
                        $('#appointment-attachement').append(exsting_file_area);
                    }

                    appt_e.file_tranfer.clearData()
                    $("#files-area").html("");

                    $('#appointment_deposition').val($('#Disposition').val());

                    if($('#Disposition').val()=='Complete'){
                        $('.appointment-edit #update-appointment').prop('disabled',true)
                        $('.appointment-edit #add-note').prop('disabled',true)
                        $('.appointment-edit #lab-test-new').prop('disabled',true)
                        $('.appointment-edit #pres-add-new').prop('disabled',true)
                        $('.appointment-edit #Disposition').prop('disabled',true)
                    }

                    $('#diposition-complete-modal').modal('hide')

                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');

                    },3000)

                    if(res.doctor !=''){
                        $('#Webmeeting').val(res.webmeeting_text);
                        $('#a-weebmeeting').attr('href',res.webmeeting_text)

                        appt_e.get_user_id(data1.assigned_doctor_user,'doctor',appointment_edit.prototype.display_user);
                        common_f.prototype.get_user_metas(data1.assigned_doctor_user,"#doctor-degree","#doctor-specialty","#doctor-university")
                    }

                    //update vital
                    var vital_id = $('#clinical-modal-center #vital_id').val()
                    var blood_pressure___diastolic_number =($('#page-content #BloodPressureDiastolic').val()=='')?0:$('#page-content #BloodPressureDiastolic').val();
                    var blood_pressure___systolic_number =($('#page-content #BloodPressureSystolic').val()=='')?0:$('#page-content #BloodPressureSystolic').val();
                    var heart_rate_number = ($('#page-content #HeartRate').val()=='')?0:$('#page-content #HeartRate').val();
                    var respiratory_rate_number =($('#page-content #RespiratoryRate').val()=='')?0:$('#page-content #RespiratoryRate').val();
                    var bmi_number = ($('#page-content #BMI').val()=='')?0:$('#page-content #BMI').val();
                    var temperature_number =($('#page-content #Temperature').val()=='')?0:$('#page-content #Temperature').val();
                    var o2_staturation_number = ($('#page-content #O2Staturation').val()=='')?0:$('#page-content #O2Staturation').val();
                    var glucose_number =  ($('#page-content #Glucose').val()=='')?0:$('#page-content #Glucose').val();
                    var pain_level_number = ($('#page-content #PainLevel').val()=='')?0:$('#page-content #PainLevel').val();

                    var weight_number = ($('#page-content #Weight').val()=='')?0:$('#page-content #Weight').val();
                    var height_number =($('#page-content #Height').val()=='')?0:$('#page-content #Height').val();

                    var appt_id = $('.appointment-edit #appointment-id').val();
                    var patient_id = $('.appointment-edit #patient-id').val();

                    var _data ={
                        Vital_ID:vital_id,
                        appointment_custom_appointment:appt_id,
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
                        patient_user:patient_id
                    }

                    md_clinical.new_update_vital_base_sql(_data,'#clinical-modal-center #vital_id',open_id,iswhatpage)
                }

                //
            }
        });
    },
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
    upload_file:function(Appt_id,data1,aptid_text){
        var data = new FormData();
        var imgData = document.getElementById('attachment');
        if(imgData.files.length  > 0) {
            for (var i = 0; i < imgData.files.length; i++) {
                data.append('file[]', imgData.files[i], imgData.files[i].name);
            }
        }

        data.append('token', _token);
        data.append('Appt_id', Appt_id);
        data.append('aptid_text', aptid_text);
        data.append('data_post',JSON.stringify(data1));

        //now call ajax
        $.ajax({
            url: link._appointmentUpdateApoinment,
            type: "POST",
            data: data,
            dataType: 'json',
            enctype: 'multipart/form-data',
            processData: false,  // tell jQuery not to process the data
            contentType: false   // tell jQuery not to set contentType
        }).done(function( res ) {
                if(res.Error==''){

                }

                //alert("upload success!")
            });
    }

}
var appt_e = new appointment_edit();
$(function(){
    appt_e.init();
});