
function history_appointment(){
  this.relative_name ={};
}
history_appointment.NAME         = "history_appointment";
history_appointment.VERSION      = "1.2";
history_appointment.DESCRIPTION  = "Class history_appointment";

history_appointment.prototype.constructor = history_appointment;
history_appointment.prototype = {
    init: function(){
        $("#tab-appt-click").unbind("click").bind("click",function(){
            var patient_id = $("#patient-id").val();
            h_appt.get_appt_history(patient_id);
        })

        $("#history-apt #add-apt").unbind("click").bind("click",function(){
            //console.log("tesr="+type_login);
            if(type_login=='Doctor'){
                history_appointment.prototype.add_apt_from_tab_history();
            }else if(type_login=='Patient'){
                $('#app-modal-lg-center').modal('show');
                $('.app_buoc2').addClass('disabled')
                $('.app_buoc3').addClass('disabled')
                $('.app_buoc4').addClass('disabled')
                $(".app_buoc1 ").click();
                modal_appointment.prototype.reset_modal_appointment()
            }

        })

        $('#tbl-content').on('change','.general-status',function(){
            var $me= $(this);
            //console.log($me.val())
            if($me.val()=="Complete"){
                $('#modal-alert .modal-alert-content').html("<div>Sau khi Cuộc hẹn này được chuyển sang trạng thái Hoàn thành, sẽ không thể chỉnh sửa nó nữa.</div><div>Bạn có muốn chuyển trạng thái không?</div>");
                $("#modal-alert .lab-status-btn").css({"display":"none"});
                $("#modal-alert .pres-status-btn").css({"display":"none"});
                $("#modal-alert .apt-status-btn").css({"display":""});
                $("#modal-alert").modal("show");
                $("#apt-confirm-change").unbind("click").bind("click",function(){
                    history_appointment.prototype.update_appt_changeStatus($me);
                    $("#modal-alert").modal("hide");
                })
            }else{
                //confirm-change
                history_appointment.prototype.update_appt_changeStatus($me);
            }

        })

        $('#tbl-content').on('click','.open-link',function(){
            var was_changed = 0;
            if(window.location.pathname.includes('dashboard.php')){
                was_changed = profile.prototype.was_changed ;
            }else{
                if(type_login !="Patient"){
                    was_changed =  appointment_edit.prototype.was_changed ;
                }
            }

            var apt_id = $(this).closest('tr').find('.appt_id').val();
            if (was_changed ==1) {
                modal_leave_page.prototype.reset_model_leave_page();
                $('#modal-leave-page #what-page').val("appointment_edit")
                $('#modal-leave-page #open-id').val(apt_id)
                $('#modal-leave-page').modal("show");
            }else{
                if(type_login =="Patient"){
                    document.location.href = host2 + 'patient_appointment.php?id='+apt_id;
                }else{
                    document.location.href = host2 + 'appointment_edit.php?id='+apt_id;
                }
            }
        })
    },

    get_appt_history:function(patient_user){
        var link3 =link._history_apts;

        var _data ={token:_token,limit:1,cursor:0,patient_user:patient_user,user_type:type_login}

        if(window.location.pathname.includes('appointment_edit.php') || window.location.pathname.includes('patient_appointment.php')){
            var Appt_id = getUrlParameter1('id');
             _data ={token:_token,limit:1,cursor:0,patient_user:patient_user,user_type:type_login,Appt_id:Appt_id}
        }


        var $pagination = $('#pagination_history_appointment');
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
            //contentType: 'application/json',

            error : function (status,xhr,error) {
            },
            success: function (data) {
                if(data.apts.row_cnt ==0) {
                    $('#tbl-content tbody').html("");
                    return;
                }
                var totalRecords = parseInt(data.apts.row_cnt);

                var remaining = 0
                if(totalRecords%20 >0) remaining=1;

                var totalPages = remaining + (totalRecords -totalRecords%20)/20;

                var currentPage = $pagination.twbsPagination('getCurrentPage');
                $pagination.twbsPagination('destroy');
                $pagination.twbsPagination($.extend({}, defaultOpts, {
                    startPage: currentPage,
                    totalPages: totalPages,
                    visiblePages: 10,
                    onPageClick:function (event, page) {
                        //fetch content and render here
                        var cursor = (page-1)*20

                        var _data ={token:_token,limit:20,cursor:cursor,patient_user:patient_user,user_type:type_login}

                        if(window.location.pathname.includes('appointment_edit.php') || window.location.pathname.includes('patient_appointment.php')){
                            var Appt_id = getUrlParameter1('id');
                            _data ={token:_token,limit:20,cursor:cursor,patient_user:patient_user,user_type:type_login,Appt_id:Appt_id}
                        }
                        //
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": link3,
                            data:_data,
                            "method": "post",
                            dataType: 'json',

                            error : function (status,xhr,error) {
                            },
                            success: function (res) {
                                //
                                var data1=res.apts.results;
                                var tr='';
                                data1.forEach(function (item) {
                                    tr += h_appt.tr_content(item);

                                });//end for each

                                $('#tbl-content tbody').html(tr);

                                $('.general-status').each(function(){
                                    if($(this).val()=="Complete"){
                                        $(this).prop("disabled",true)
                                        $(this).closest('tr').addClass('bg-l-r')
                                    }
                                })
                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
                //
            }
        });
    },


    /*****************************************/
    tr_content:function(appt){
        //console.log(appt);
        var tr ='';
        //date
        var date_hour ='';
        if(appt.apt_date_date!=null){
            //console.log(appt.apt_date_date);
            date_hour = appt.apt_date_date
            /*var d = new Date(appt.apt_date_date);
            var date_t = d.toLocaleString();
            console.log(d);
            var date_arr = date_t.split(',');
            var date1_arr = date_arr[0].split('/');
            var date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);

            var hour_t = date_arr[1].split(':');
            var am_pm_t = hour_t[2].split(' ');
            hour_t[0]= hour_t[0].trim();
            var hour = ("0"+hour_t[0]).slice(-2)+':'+("0"+hour_t[1]).slice(-2)
            if(am_pm_t[1].trim()=='PM'){
                var h= parseInt(hour_t[0]) +12;
                hour = h+':'+("0"+hour_t[1]).slice(-2)
            }

            date_hour = date +", "+hour;
            */
        }

        var appt_link ='<i class="fa fa-edit color6676f2"></i>';
        var appt_link1 =
            '<div class="row padding_l5 text-left color6676f2"><strong>'+appt.aptid_text+'</strong></div>' +
            '<div class="row padding_l5 text-left">'+date_hour+'</div>';

        if($('#patient-type').val()=='Patient'){
            var appt_link ='<a href="patient_appointment.php?id='+appt.Appt_id+'"><i class="fa fa-edit color6676f2"></i></a>';
            var appt_link1 ='<a href="patient_appointment.php?id='+appt.Appt_id+'">' +
                '<div class="row padding_l5 text-left"><strong>'+appt.aptid_text+'</strong></div>' +
                '<div class="row padding_l5 text-left">'+date_hour+'</div>' +
                '</a>';
        }

        var what_pain ='';
        if(appt.chief_complaint_option_chief_complaint!=null){
            //what_pain =appt.chief_complaint_option_chief_complaint
            what_pain =chieft_complain_arr[appt.chief_complaint_option_chief_complaint]

        }

        var deposition =''
        if(appt.disposition_option_apt_disposition!=null){
            //deposition =appt.disposition_option_apt_disposition
            deposition =apt_disposition_arr[appt.disposition_option_apt_disposition]
        }

        var doctor_link =' <div class="row col-12">' +
                            '<i class="fa fa-user-md"></i>'+
                        '</div>';
        if(appt.assigned_doctor_user !=null && appt.assigned_doctor_user !=''){

             doctor_link ='<a href="physician_infomation.php?id='+appt.assigned_doctor_user+'">' +
                 '<div class="row col-12 padding_r">' +
                 '<div class="col-2 padding_l text-left"><i class="fa fa-user-md"></i></div>' +
                 '<div class="col-10 padding_rl text-left"">'+appt.asg_d_display_name+'</div>' +
                 '</div>' +
                 '</a>'
        }

        var triage_link =' <div class="row col-12">' +
                            '<i class="fa fa-ambulance"></i>'+
                             '</div>';

        if(appt.triage_staff_user !=null && appt.triage_staff_user !=''){
            triage_link ='<a href="physician_infomation.php?id='+appt.triage_staff_user+'">' +
                '<div class="row col-12 padding_r">' +
                '<div class="col-2 padding_l text-left"><i class="fa fa-ambulance"></i></div>' +
                '<div class="col-10 padding_rl text-left"">'+appt.u_n_display_name+'</div>' +
                '</div>' +
                '</a>'
        }

        var str_no_blank = appt.status_option_status;

        var option = selectBox(generalStatus,str_no_blank);

        var status ='<select class="general-status form-control">'+option+'</select>'

        var description="";
        if(appt.description_text!=undefined){
            description =appt.description_text;
        }

        var patient_name = appt.u_p_display_name
        //

        tr +='<tr>' +
            '<td class="open-link" style="cursor: pointer">'+appt_link+'<input type="hidden" class="appt_id" value="'+appt.Appt_id +'"></td>' +
            '<td class="open-link" style="cursor: pointer">'+appt_link1+'</td>' +
            '<td>'+patient_name+'</td>' +
            '<td>'+what_pain+'</td>' +
            '<td>'+description+'</td>'+

            '<td>'+triage_link+doctor_link +'</td>' +
            '<td>'+status+'</td>' +
        '</tr>';

        return tr;
    },
    /*****************************************/
    add_apt_from_tab_history:function(){
        //console.log("tesr33");
        var patient = $('#patient-id').val();
        var doctor = user_login;

        var data ={patient_user:patient,assigned_doctor_user:doctor,user_login:user_login,token:_token};

        var link3 =link._apt_new_apt_history;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res)
                //return;
                if(res.Error =='' && res.Appt_id !=''){
                    window.location.href = "appointment_edit.php?id="+res.Appt_id;
                }
                //
            }
        });
    },

    update_appt_changeStatus:function(me){
        var apptID = me.closest('tr').find('.appt_id').val();
        if(apptID =='') return ;

        var status_option_status = me.val();
        var data_upload ={
            token:_token,
            Appt_id:apptID,
            data_post:JSON.stringify({
                status_option_status:status_option_status
            })
        }

        var link3 =link._appointmentUpdateApoinment;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:data_upload,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(me.val()=="Complete"){
                    me.prop("disabled",true);
                    me.closest('tr').addClass('bg-l-r')
                }

                var _data ={
                    "status_option_status": status_option_status
                }

            }
        });

    },
    /////////////////////////////////////////////

}
var h_appt = new history_appointment();
$(function(){
    h_appt.init();
});