
function appointment_list(){}
appointment_list.NAME         = "appointment_list";
appointment_list.VERSION      = "1.2";
appointment_list.DESCRIPTION  = "Class appointment_list";

appointment_list.prototype.constructor = appointment_list;
appointment_list.prototype = {
    init:function(){
        $('#search-type').append(apt_disposition)
       /* if($('#login_user_type').val()=='Patient'){
            var user_id =$('#login_UniqueID').val()
            app.get_appt();
        }else{
            app.get_appt();
        }*/

        app.get_appt();

        $('.waiting-triage-list').on('click','.claim-appt',function(){
            var apptID = $(this).attr('apptid')
            $('#claim-modal #modal-claim-appt-id').val(apptID)
            $('#claim-modal').modal('show')
        })

        $('.waiting-physician-list').on('click','.claim-appt',function(){
            var apptID = $(this).attr('apptid')
            $('#claim-modal #modal-claim-appt-id').val(apptID)
            $('#claim-modal').modal('show')
        })

        $('#btn-search').unbind('click').bind('click',function(){
            app.get_appt();
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                app.get_appt();
            }
        })

        $('#search-type').change(function(){
            app.get_appt();
        })
    },

    http_content:function(apt,i,claim){
       // console.log("claim="+claim)
        if(apt.description_text ==null) apt.description_text='';

        if(apt.apt_date_date ==null ){
            apt.apt_date_date = ''
        }


        if(apt.u_p_sex_option_sex ==null){
            apt.u_p_sex_option_sex=''
        }

        var patient_birthdate = '';
        if(apt.u_p_birth_date_date !=null){
            var d = apt.u_p_birth_date_date.split(" ")
            patient_birthdate = d[0].toLocaleString() +" - " +apt.u_p_sex_option_sex;
        }else{
            patient_birthdate = apt.u_p_sex_option_sex;
        }


        var primary_phone_number='';
        if(apt.u_p_primary_phone_number_text!=null){
            primary_phone_number= apt.u_p_primary_phone_number_text;
        }

        var uid=''
        if(apt.u_p_uid_text!==null){
            uid = apt.u_p_uid_text
        }

        var balance='';
        var inv_link='';
        if(apt.balance_number >0){
            balance ='<strong class="color-alert">'+apt.balance_number+' VND</strong>';
        }else if(apt.balance_number <=0){
            balance='<strong style="color:#0c6913">Đã thanh toán</strong>';
        }

        inv_link ='<a href="invoice.php?id='+apt.invoice_custom_invoice+'">'+balance+'</a>'
        if(apt.u_p_display_name !=null){
            var p_name =  apt.u_p_display_name
        }else{
            var first_name_text =(apt.u_p_first_name==null)?'':apt.u_p_first_name
            var middle_name_text =(apt.u_p_middle_name==null)?'':apt.u_p_middle_name
            var family_name_text =(apt.u_p_family_name==null)?'':apt.u_p_family_name
            var p_name = family_name_text+" "+middle_name_text+" "+first_name_text
        }



        //var uid_text=uid +" - "+patient.display_name_text
        var uid_text=uid +" - "+p_name;

        var diposition='';
        var diposition_text='';
        if(apt.disposition_option_apt_disposition !=null){
            diposition=apt.disposition_option_apt_disposition
            diposition_text = apt_disposition_arr[diposition]
        }
        var chief_complaint='';
        if(apt.chief_complaint_option_chief_complaint!=null){
            chief_complaint=chieft_complain_arr[apt.chief_complaint_option_chief_complaint]
        }

        var description='';
        if(apt.description_text!=null){
            description=apt.description_text
        }

        var triageAsign='';
        if(apt.triage_staff_user !=null){
            triageAsign='<a href="physician_infomation.php?id='+apt.triage_staff_user+'">'+apt.u_n_display_name+'</a>'
        }

        var doctorAsign='';
        if(apt.assigned_doctor_user !=null){
            doctorAsign='<a href="physician_infomation.php?id='+apt.assigned_doctor_user+'">'+apt.asg_d_display_name+'</a>'
        }

        var appt_link= '<a href="appointment_edit.php?id='+apt.Appt_id+'"><strong><u>'+apt.aptid_text+'</u></strong></a>';
        var goto_appt ='<div class="col-12 padding_rl">' +
                '<a href="appointment_edit.php?id='+apt.Appt_id+'"><button style="margin-top: 30px" class="form-control btn btn-succ padding-1rem">Xem Lịch hẹn</button></a>' +
            '</div>';

        if($('#login_user_type').val()=='Patient'){
            appt_link= '<a href="patient_appointment.php?id='+apt.Appt_id+'"><strong><u>'+apt.aptid_text+'</u></strong></a>';
            goto_appt ='<div class="col-12 padding_rl">' +
                '<a href="patient_appointment.php?id='+apt.Appt_id+'"><button style="margin-top: 30px" class="form-control btn btn-succ padding-1rem">Xem Lịch hẹn</button></a>' +
            '</div>';
        }

        var print_apt =''

        if(window.location.pathname.includes('appointment_list.php') ||
            window.location.pathname.includes('covid.php')){
            print_apt ='<div class="col-12 padding_rl m-t5">' +
                '<button class="form-control btn btn-succ print_apt_p" user_id="'+apt.patient_user+'" apt_id="'+apt.Appt_id+'" ivn_id="'+apt.invoice_custom_invoice+'">In lịch hẹn</button>' +
                '</div>'
        }

        var claim_btn=''
        if(claim =='triage'){
            claim_btn ='<div class="col-12 padding_rl m-t5">' +
                '<button type="button" class="form-control btn btn-danger padding-1rem claim-appt" style="margin-top: 10px" apptid='+apt.Appt_id+'>Tiếp nhận Xử lý</button>' +
            '</div>'
        }else if(claim=='doctor' ){ //&& diposition=='Complete'
            claim_btn ='<div class="col-12 padding_rl">' +
                '<button type="button" class="form-control btn btn-danger padding-1rem claim-appt" style="margin-top: 10px" apptid='+apt.Appt_id+'>Tiếp nhận Cuộc hẹn</button>' +
                '</div>'
        }

        if(diposition=='Complete'){
            goto_appt ='';
            claim_btn='';
            print_apt =''
        }

        var http='';
        if(i%2==0){
            http +='<div class="row">' +
                '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="height: 265px!important; border: #ff5e39 solid 1px">' +
                    '<div class="row m-t15">' +
                        '<div class="col-4 padding-rl020">'+appt_link+'</div>' +
                        '<div class="col-8"><a href="dashboard.php?id='+apt.patient_user+'"><strong>'+uid_text+'</strong></a></div>' +
                    '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-4 padding-rl020">'+inv_link+'</div>' +
                '<div class="col-8"><a href="dashboard.php?id='+apt.patient_user+'"><strong>'+p_name+'</strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-4 padding-rl020"><strong>'+apt.apt_date_date+'</strong></div>' +
                '<div class="col-8">' +
                ' <div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-paper-plane col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5 ">'+apt.u_p_Email+'</div></div>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="row ">' +
                '<div class="col-4 padding-rl020">' +
                 goto_appt + print_apt+claim_btn+
                '</div>' +
                '<div class="col-8">' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+primary_phone_number+'</div></div>' +

                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-exclamation-triangle col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+diposition_text+'</div></div>' +

                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-heartbeat col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+chief_complaint+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-sticky-note col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table  margin-left5">'+apt.description_text+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-language col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+apt.u_p_language_text+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-address-book col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table  margin-left5">'+triageAsign+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-user-md col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table  margin-left5">'+doctorAsign+'</div></div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->'
        }else{
            http += '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="height: 265px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' +
                '<div class="col-4 padding-rl020">'+appt_link+'</div>' +
                '<div class="col-8"><a href="dashboard.php?id='+apt.patient_user+'"><strong>'+uid_text+'</strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-4 padding-rl020">'+inv_link+'</div>' +
                '<div class="col-8"><a href="dashboard.php?id='+apt.patient_user+'"><strong>'+p_name+'</strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-4 padding-rl020"><strong>'+apt.apt_date_date+'</strong></div>' +
                '<div class="col-8">' +
                ' <div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-paper-plane col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+apt.u_p_Email+'</div></div>' +

                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="row">' +
                '<div class="col-4 padding-rl020">' +
                 goto_appt+print_apt+ claim_btn+
                '</div>' +
                '<div class="col-8">' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i>' +
                    '<div class="col_table  margin-left5">'+primary_phone_number+'</div></div>' +

                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-exclamation-triangle col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table  margin-left5">'+diposition_text+'</div></div>' +

                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-heartbeat col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+chief_complaint+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-sticky-note col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table  margin-left5">'+apt.description_text+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-language col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+apt.u_p_language_text+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12"><i class="fa fa-address-book col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+triageAsign+'</div></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 row_table"><i class="fa fa-user-md col_table p-r10 color6676f2"></i>' +
                    '<div class="col_table margin-left5">'+doctorAsign+'</div></div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->' +
                '</div>' +
                '<!---->'
       }

        return http;
        //
    },

    get_appt: function(){
        var current_user = user_login;
        var user_type = type_login;
        //console.log(user_type);
        var patient_for_doctor ='';
        var disposition = $('#search-type').val();
        var text_search = $('#search-text').val();

        var _link = link._history_apts;
        var claim =''
        if(window.location.pathname.includes('waiting_triage.php')){
            if(user_type =='Nurse'){
                claim ='triage';
            }
            disposition = "Waiting - Triage"
        }else if(window.location.pathname.includes('doctor_waiting.php')){
            if(user_type =='Doctor'){
                claim ='doctor'
            }
            disposition = "Waiting - Physician"
        }else if(window.location.pathname.includes('patient_for_doctor.php')){
            patient_for_doctor =1;
        }

        var _data ={token:_token,limit:1,cursor:0,text_search:text_search,disposition_option_apt_disposition:disposition,
            appointment_list:1,
            patient_user:user_login,
            user_type:type_login,
            patient_for_doctor:patient_for_doctor
        }

        if(window.location.pathname.includes('covid.php')){
            _data ={token:_token,limit:1,cursor:0,text_search:text_search,
                appointment_list:1,
                patient_user:user_login,
                user_type:type_login,
                is_covid:1
            }
        }

        var $pagination = $('#pagination');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (data) {
                //console.log(data)
                if(data.apts.row_cnt ==0) {
                    $('#tbl-content tbody').html("");
                    return;
                }
                var totalRecords = parseInt(data.apts.row_cnt);

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
                        var limit = 10;
                       
                         _data ={token:_token,limit:10,cursor:cursor,text_search:text_search,
                             disposition_option_apt_disposition:disposition,
                             appointment_list:1,
                             patient_user:user_login,
                             user_type:type_login,
                             patient_for_doctor:patient_for_doctor
                         }

                        if(window.location.pathname.includes('covid.php')){
                            _data ={token:_token,limit:10,cursor:0,text_search:text_search,
                                appointment_list:1,
                                patient_user:user_login,
                                user_type:type_login,
                                is_covid:1
                            }
                        }

                        var html='';
                        //
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": _link,
                            "method": "POST",
                            data:_data,
                            dataType: 'json',
                            error : function (status,xhr,error) {
                            },
                            success: function (res) {
                                var data=res.apts.results;
                                //console.log(data);
                                if(data.length==0){
                                    $('#page-content').html("");
                                    return;
                                }
                                var list_length=0;
                                var list ={};
                                var key=[];
                                var j=0;
                                data.forEach(function (item) {
                                    html += app.http_content(item,j,claim);
                                    j++;
                                });//end for each
                                if(j%2 !=0){
                                    html +='</row>';
                                }
                                if(j==0) html +='</row><!--end row-->';

                                $('#page-content').html(html);

                                $('.print_apt_p').unbind('click').bind('click',function(){
                                    var apt_id = $(this).attr('apt_id');
                                    var user_id =$(this).attr('user_id');
                                    var ivn_id = $(this).attr('ivn_id');
                                    pdf_ex.prototype.print_medical_apt_card(apt_id)
                                    pdf_ex.prototype.export_medical_apt_card(apt_id,'is_send_email')
                                })

                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    }
}
var app = new appointment_list();
$(function(){
    app.init();
});