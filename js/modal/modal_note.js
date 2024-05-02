
function modal_note(){}
modal_note.NAME         = "modal_note";
modal_note.VERSION      = "1.2";
modal_note.DESCRIPTION  = "Class modal_note";

modal_note.prototype.constructor = modal_note;
modal_note.prototype = {
    init: function(){
        $('#note-modal #save-notes').unbind('click').bind('click',function(){
            var note_id=$("#note-modal #notes-id").val();
            md_note.save_note_update(note_id,'','');

        })
    },

    init_note:function(note_id,me){
        if(note_id ==''){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy +' '+today.getHours() + ":" + today.getMinutes();

            $('#note-modal #note_date').text(today);
            $('#note-modal #note_type').html(note_type_option)

            var note_created_by =$('#login_UniqueID').val();
            $('#note-modal #note_created_by').val(note_created_by)
            var note_created_name =$('#login_display_name').val();
            $('#note-modal #note_created_name').val(note_created_name)
       }else{
            today = me.closest('.row').find('.date-time').text();

            $('#note-modal #note_date').text(today);
            $('#note-modal #note_type').html(note_type_option)

            var note_type =me.find('.note-type').val();
            $('#note-modal #note_type').val(note_type);

            var description =me.closest('.row').find('.description').text();
            $('#note-modal #note_description').val(description)

            var note_note =me.closest('.row').find('.note-note').text();
            $('#note-modal #note_note').val(note_note)

            var note_created_by =me.find('.created-id').val();
            $('#note-modal #note_created_by').val(note_created_by)

            var note_created_name =me.closest('.row').find('.created-name').text();
            $('#note-modal #note_created_name').val(note_created_name)

            var note_id =me.find('.note-id').val();
            $("#note-modal #notes-id").val(note_id)

            var doctor_only1 =me.find('.doctor-only').val();
            var doctor_only=false
            if(doctor_only1=='true'){
                doctor_only =true
            }

            $('#note-modal #only_doctor').prop("checked",doctor_only);

            var office_only1 =me.find('.office-only').val();
            var office_only=false
            if(office_only1=='true'){
                office_only =true
            }
            $('#note-modal #only_administrative').prop("checked",office_only);

            var printable_only1 =me.find('.printable-only').val();
            var printable_only=false
            if(printable_only1=='true'){
                printable_only =true
            }
            $('#note-modal #only_print').prop("checked",printable_only);

            $('#note-modal #update-notes').unbind('click').bind('click',function(){
                var note_id=$("#note-modal #notes-id").val();
                md_note.save_note_update(note_id,me,'');

            })
        }

    },



    save_note_update:function(note_id,$me,tabnote){
        var doctor_only_boolean =$('#note-modal #only_doctor').is(':checked')
        var office_only =$('#note-modal #only_administrative').is(':checked')
        var printable_boolean =$('#note-modal #only_print').is(':checked')

        var note_type_option_note_typte =$('#note-modal #note_type').val()
        var created_by_user =$('#note-modal #note_created_by').val()
        var description_text =$('#note-modal #note_description').val()
        var note_text =$('#note-modal #note_note').val()
        var attachment_id_text ='';

        var patient_id='';
        if(window.location.pathname.includes('appointment_edit.php')){
            patient_id =$('#patient-id').val()
        }

        if(window.location.pathname.includes('patient_appointment.php')){
            patient_id =$('#patient-id').val()
        }


        var id = getUrlParameter1('id');

        if(id!=undefined){
            attachment_id_text =id
        }
        var attachment_to_option_note_attachment=''
        if(window.location.pathname.includes('appointment_edit.php')){
            attachment_to_option_note_attachment='Appointment'
        }

        if(window.location.pathname.includes('patient_appointment.php')){
            attachment_to_option_note_attachment='Appointment'
        }

        var _data={
            doctor_only_boolean:doctor_only_boolean,
            printable_boolean:printable_boolean,
            note_type_option_note_typte:note_type_option_note_typte,
            created_by_user:created_by_user,
            description_text:description_text,
            note_text:note_text,
            attachment_id_text:attachment_id_text,
            attachment_to_option_note_attachment:attachment_to_option_note_attachment,
            profile_user:patient_id,
            private_boolean:office_only,
            id:note_id,
            token:_token
        }

        var link3 =link._noteAddOrUpdate_sql
        var ajax_type ='POST';

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": ajax_type,
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error==''){
                    if(note_id==''){
                        $('#note-modal #notes-id').val(res.id)
                        note_id = res.id;
                        $('#note-modal').modal('hide');
                        var el = '';

                        if(window.location.pathname.includes('appointment_edit.php')){
                            el ='.appointment-edit #Notes-history'
                        }
                        if(window.location.pathname.includes('patient_appointment.php')){
                            el='#patient-content #Notes-history'
                        }

                        var data = {
                            CreatedDate:$('#note-modal #note_date').text(),
                            description_text:description_text,
                            note_text:note_text,
                            created_name:$('#note-modal #note_created_name').val(),
                            doctor_only_boolean:doctor_only_boolean,
                            private_boolean:office_only,
                            printable_boolean:printable_boolean,
                            note_type_option_note_typte:note_type_option_note_typte,
                            id:res.id,
                            created_by_user:created_by_user
                        }

                        md_note.display_notes(el,data,'add-note');
                    }else{
                        $('#note-modal').modal('hide');
                        if(tabnote ==1){
                            if(office_only ==true){
                                $me.closest('tr').remove();
                            }else{
                                $me.closest('tbody').find('.bg-l-b').removeClass('bg-l-b')
                                $me.closest('tr').addClass('bg-l-b')
                                $me.closest('tr').find('.doctor_only').val(doctor_only_boolean)
                                $me.closest('tr').find('.private_only').val(office_only)
                                $me.closest('tr').find('.printable_only').val(printable_boolean)
                                $me.closest('tr').find('.note_type').val(note_type_option_note_typte)
                                $me.closest('tr').find("td:eq(2)").text(description_text)
                                $me.closest('tr').find("td:eq(3)").text(note_text)

                                $me.closest('tr').find(".note_type_option option").attr("selected", false);
                                $me.closest('tr').find('.note_type_option option[value="'+note_type_option_note_typte+'"]').prop("selected", true);
                            }
                        }else{
                            $me.closest('#Notes-history').find('.bg-l-b').removeClass('bg-l-b')
                            $me.closest('.row').addClass('bg-l-b')
                            $me.closest('.row').find('.doctor-only').val(doctor_only_boolean)
                            $me.closest('.row').find('.office-only').val(office_only)
                            $me.closest('.row').find('.printable-only').val(printable_boolean)
                            $me.closest('.row').find('.note-type').val(note_type_option_note_typte)
                            $me.closest('.row').find('.description').text(description_text)
                            $me.closest('.row').find('.note-note').text(note_text)
                        }
                    }

                    pdf_ex.prototype.export_note("is_send_email");
                }
            }
        });
    },


    display_notes:function(el,data,add_note){

        var class_n ='';
        if(add_note=="add-note"){
            class_n ='bg-l-b';
        }

        var row ='<div class="padding_l5 m-t10 row '+class_n+'">' +
            '<div class="col-3 padding_rl date-time">'+data.CreatedDate+'</div>' +
            '<div class="col-2 padding_rl description">'+data.description_text+'</div>' +
            '<div class="col-3 padding_rl note-note">'+data.note_text+'</div>' +
            '<div class="col-3 padding_rl created-name">'+data.created_name+'</div>' +
            '<div class="col-1 edit" style="cursor: pointer">' +
                '<i class="fa fa-edit color_blue"></i>' +
                '<input type="hidden" class="doctor-only" value="'+data.doctor_only_boolean+'">  ' +
                '<input type="hidden" class="office-only" value="'+data.private_boolean+'">  ' +
                '<input type="hidden" class="printable-only" value="'+data.printable_boolean+'"> ' +
                '<input type="hidden" class="note-type" value="'+data.note_type_option_note_typte+'"> ' +
                '<input type="hidden" class="note-id" value="'+data.id+'" >' +
                '<input type="hidden" class="created-id" value="'+data.created_by_user+'" >' +
            '</div>' +
        '</div> '
        if(add_note=="add-note" && $(el + ' .row').length >0){
            $(el).find('.row').removeClass('add-note');
            $(row).insertBefore($(el + ' .row:first'))
        }else{
            $(el).append(row)
        }

    },

    get_note_by_attachmentto_attchmentID:function(){
        var attachment_id_text =''
        var attachment_to_option_note_attachment=''
        var el=''
        var id = getUrlParameter1('id');

        if(id!=undefined){
            attachment_id_text =id
        }

        if(window.location.pathname.includes('appointment_edit.php')){
            attachment_to_option_note_attachment='Appointment';
            el='.appointment-edit #Notes-history'
        }

        if(window.location.pathname.includes('patient_appointment.php')){
            attachment_to_option_note_attachment='Appointment';
            el='#patient-content #Notes-history'
        }

        if(attachment_id_text=='' || attachment_to_option_note_attachment=='') return

        var _data ={token:_token,attachment_to_option_note_attachment:attachment_to_option_note_attachment,
            attachment_id_text:attachment_id_text}

        var link3 =link._notes;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "post",
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                var data=res.notes;
                data.forEach(function(item){
                    if(item.CreatedDate == null) item.CreatedDate=''
                    item.doctor_only_boolean =(item.doctor_only_boolean==1)?true:false;
                    item.private_boolean =(item.private_boolean==1)?true:false;
                    item.printable_boolean =(item.printable_boolean==1)?true:false;

                    var data = {
                        CreatedDate:item.CreatedDate,
                        description_text:item.description_text,
                        note_text:item.note_text,
                        created_name:item.create_by_display_name_text,
                        doctor_only_boolean:item.doctor_only_boolean,
                        private_boolean:item.private_boolean,
                        printable_boolean:item.printable_boolean,
                        note_type_option_note_typte:item.note_type_option_note_typte,
                        id:item.id,
                        created_by_user:item.created_by_user
                    }

                    md_note.display_notes(el,data);
                });

                //
            }
        });

    },

    reset_modal_note:function(note_id){
        $("#note-modal #notes-id").val('')
        $('#note-modal #only_doctor').prop('checked',false);
        $('#note-modal #only_administrative').prop('checked',false);
        $('#note-modal #only_print').prop('checked',false);

        $('#note-modal #note_description').val('');
        $('#note-modal #note_note').val('');

        if(note_id !=''){
            $('#note-modal #save-notes-btn').css({'display':"none"});
            $('#note-modal #save-notes').prop('disabled', true);
            $('#note-modal #update-notes-btn').css({'display':""});
            $('#note-modal #update-notes').prop('disabled', false);

        }else{
            $('#note-modal #save-notes-btn').css({'display':""});
            $('#note-modal #save-notes').prop('disabled', false)
            $('#note-modal #update-notes').prop('disabled', true);
            $('#note-modal #update-notes-btn').css({'display':"none"});
        }
    },

    //FOR SQL
    add_update_Notes_sql:function(data){
        Object.assign(data,{ "token": _token});

        var link3 =link._noteAddOrUpdate_sql;
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
    }

}
var md_note = new modal_note();
$(function(){
    md_note.init();
});