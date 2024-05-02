
function history_note(){}
history_note.NAME         = "history_note";
history_note.VERSION      = "1.2";
history_note.DESCRIPTION  = "Class history_note";

history_note.prototype.constructor = history_note;
history_note.prototype = {
    init: function(){
        $("#tab-note-click").unbind("click").bind("click",function(){
            var patient_id = $("#patient-id").val();

            if(window.location.pathname.includes('dashboard.php')){
                var id = getUrlParameter1('id');

                if(id!=undefined){
                    patient_id =id
                }
            }
            $('#tbl-note-content tbody').html('');
            h_note.get_note_history(patient_id);

        });

        $('#note #tbl-note-content').on('click','.open-modal-note',function(){
            $('#note-modal').modal('show');
            var note_id =$(this).closest('tr').find('.node_id').val()
            modal_note.prototype.reset_modal_note(note_id)
            history_note.prototype.view_note(note_id,$(this))
        });

        $('#note-modal #note-pdf').unbind('click').bind('click',function(){
            pdf_ex.prototype.export_note();
        })
        $('#note-modal #note-print').unbind('click').bind('click',function(){
            pdf_ex.prototype.print_note();
        })
    },

    get_note_history:function(profile_user){
        //get relatives
        var link3 =link._history_notes;
        var _data ={token:_token,limit:1,cursor:0,profile_user:profile_user,user_type:type_login}

        var $pagination = $('#pagination_history_note');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (data) {
                var totalRecords = parseInt(data.row_cnt);
                //console.log("totalRecords= "+totalRecords);
                if(totalRecords == 0) return;
                var remaining = 0
                if(totalRecords%10 >0) remaining=1;

                var totalPages = remaining + (totalRecords -totalRecords%10)/10;

                var currentPage = $pagination.twbsPagination('getCurrentPage');
                $pagination.twbsPagination('destroy');
                $pagination.twbsPagination($.extend({}, defaultOpts, {
                    startPage: currentPage,
                    totalPages: totalPages,
                    visiblePages: 10,
                    onPageClick:function (event, page) {
                        //fetch content and render here
                        var cursor = (page-1)*10
                        _data ={token:_token,limit:10,cursor:cursor,profile_user:profile_user,user_type:type_login}

                        var tr='';
                        // console.log
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
                                // console.log(res);
                                if(res.notes==undefined) return
                                var data=res.notes;

                                data.forEach(function (item) {
                                    tr += h_note.tr_content(item)
                                });//end for each
                                $('#tbl-note-content tbody').html(tr);
                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
                //
            }
        });
    },

    tr_content:function(note){
        //console.log(lab);
        var tr ='';
        //date
        var id = note.id;
        var date_time = ''
        if(note.CreatedDate !=null) date_time = note.CreatedDate
        var description = ''
        if(note.description_text !=null) description = note.description_text
        var note_text = ""
        if(note.note_text !=null) note_text = note.note_text
        var attachment_to =note.attachment_to_option_note_attachment

        var note_type =''
        if(note.note_type_option_note_typte !=undefined) note_type = note.note_type_option_note_typte
        var doctor_only = (note.doctor_only_boolean == 1)? true:false
        var printable_only = (note.printable_boolean ==1)? true:false
        var private_only = (note.private_boolean==1)?true:false

        var option = selectBox(note_type_option_str,note_type);

        var created_by ='';
        if(note.create_by_display_name_text !=null) created_by =note.create_by_display_name_text

        var create_by_id = (note.created_by_user !=null)?note.created_by_user:''
        var patient_id = (note.profile_user !=null)?note.profile_user:''


        var note_type_option ='<select class="note_type_option form-control">'+option+'</select>'
        tr +='<tr>' +
            '<td class="open-modal-note" style="cursor: pointer"><i class="fa fa-edit color6676f2"></i>' +
            '<input type="hidden" class="created_by_name" value="'+created_by+'">' +
            '<input type="hidden" class="create_by_id" value="'+create_by_id+'">' +
            '<input type="hidden" class="patient_id" value="'+patient_id+'">' +
            '<input type="hidden" class="date_time" value="'+date_time+'">' +
            '<input type="hidden" class="description" value="'+description+'">' +
            '<input type="hidden" class="note_text" value="'+note_text+'">' +
            '<input type="hidden" class="attachment_to" value="'+attachment_to+'">' +
            '<input type="hidden" class="note_type" value="'+note_type+'">' +
            '<input type="hidden" class="doctor_only" value="'+doctor_only+'">' +
            '<input type="hidden" class="printable_only" value="'+printable_only+'">' +
            '<input type="hidden" class="private_only" value="'+private_only+'">' +
            '<input type="hidden" class="node_id" value="'+id+'">' +
            '</td>' +
            '<td>'+date_time+'</td>' +
            '<td>'+description+'</td>' +
            '<td>'+note_text+'</td>' +
            '<td>'+created_by+'</td>' +
            '<td>'+attachment_to+'</td>' +
            '<td>'+note_type_option+'</td>' +
         '</tr>';

        return tr;
    },

    view_note:function(note_id,me){
        var today = me.closest('tr').find('.date_time').val();
        //console.log(note_id);
        //console.log(me);
        $('#note-modal #note_date').text(today);
        $('#note-modal #note_type').html(note_type_option)

        var note_type =me.closest('tr').find('.note_type').val();
        $('#note-modal #note_type').val(note_type);

        var description =me.closest('tr').find('.description').val();
        $('#note-modal #note_description').val(description)

        var note_note =me.closest('tr').find('.note_text').val();
        $('#note-modal #note_note').val(note_note)

        var note_created_by =me.closest('tr').find('.create_by_id').val();
        $('#note-modal #note_created_by').val(note_created_by)

        var note_created_name =me.closest('tr').find('.created_by_name').val();
        $('#note-modal #note_created_name').val(note_created_name)

        var note_id =me.closest('tr').find('.node_id').val();
        $("#note-modal #notes-id").val(note_id)

        var doctor_only1 =me.closest('tr').find('.doctor_only').val();
        var doctor_only=false
        if(doctor_only1=='true'){
            doctor_only =true
        }

        $('#note-modal #only_doctor').prop("checked",doctor_only);

        var office_only1 =me.closest('tr').find('.private_only').val();
        var office_only=false
        if(office_only1=='true'){
            office_only =true
        }
        $('#note-modal #only_administrative').prop("checked",office_only);

        var printable_only1 =me.closest('tr').find('.printable_only').val();
        var printable_only=false
        if(printable_only1=='true'){
            printable_only =true
        }
        $('#note-modal #only_print').prop("checked",printable_only);

        $('#note-modal #update-notes').unbind('click').bind('click',function(){
            var note_id=$("#note-modal #notes-id").val();
            md_note.save_note_update(note_id,me,1);

        })


    },

}
var h_note = new history_note();
$(function(){
    h_note.init();
});