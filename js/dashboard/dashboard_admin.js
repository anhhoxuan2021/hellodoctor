
function dashboard_admin(){}
dashboard_admin.NAME         = "dashboard_admin";
dashboard_admin.VERSION      = "1.2";
dashboard_admin.DESCRIPTION  = "Class dashboard_admin";

dashboard_admin.prototype.constructor = dashboard_admin;
dashboard_admin.prototype = {
    init:function(){
        $('#apt-search-type').append(apt_disposition)
        $('#user-search-type').append(user_type)
        admin.get_appt();
        admin.get_users_list()
        admin.get_invs_list()
        admin.get_payment_list()
        //event
        $('#apt-search').unbind('click').bind('click',function(){
            admin.get_appt();
        })


        $('#apt-reset').unbind('click').bind('click',function(){
            $('#apt-text-search').val('')
            $('#apt-search-type').find("option[value='']").attr("selected", "selected");
            $('#apt-date-to').val('')
            $('#apt-date-from').val('')
            $('#apt-doctor').prop({"checked":false})
            $('#apt-patient').prop({"checked":false})
            admin.get_appt();
        })

        $('#apt-export').unbind('click').bind('click',function(){
            var disposition = $('#apt-search-type').val();
            var text_search = $('#apt-text-search').val();

            var dateto =''
            var dateto_temp = new Date($('#apt-date-to').val())
            var flag_dateto =false
            if(dateto_temp !='Invalid Date'){
                flag_dateto =true
                dateto = $('#apt-date-to').val()
            }

            var datefrom =''
            var datefrom_temp = new Date($('#apt-date-from').val());
            var flag_datefrom=false
            if(datefrom_temp !='Invalid Date'){
                flag_datefrom =true
                datefrom = $('#apt-date-from').val();
            }

            var doctor_name =$('#apt-doctor').is(':checked')
            var patient_name =$('#apt-patient').is(':checked')

            var _data ={token:_token,
                disposition_option_apt_disposition:disposition,text_search:text_search,
                doctor_name:doctor_name,patient_name:patient_name
            }

            Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
            Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

            pdf_ex.prototype.export_apt_report(_data);
        })


        $('#apt-print').unbind('click').bind('click',function(){
            var disposition = $('#apt-search-type').val();
            var text_search = $('#apt-text-search').val();

            var dateto =''
            var dateto_temp = new Date($('#apt-date-to').val())
            var flag_dateto =false
            if(dateto_temp !='Invalid Date'){
                flag_dateto =true
                dateto = $('#apt-date-to').val()
            }

            var datefrom =''
            var datefrom_temp = new Date($('#apt-date-from').val());
            var flag_datefrom=false
            if(datefrom_temp !='Invalid Date'){
                flag_datefrom =true
                datefrom = $('#apt-date-from').val();
            }

            var doctor_name =$('#apt-doctor').is(':checked')
            var patient_name =$('#apt-patient').is(':checked')

            var _data ={token:_token,
                disposition_option_apt_disposition:disposition,text_search:text_search,
                doctor_name:doctor_name,patient_name:patient_name
            }

            Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
            Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

            pdf_ex.prototype.print_apt_report(_data);
        })

        $('#user-search').unbind('click').bind('click',function(){
            admin.get_users_list();
        })

        $('#user-reset').unbind('click').bind('click',function(){
            $('#user-search-type').find("option[value='']").attr("selected", "selected");
            $('#user-text-search').val('');
            $('#user-date-to').val('')
            $('#user-date-from').val('')
            admin.get_users_list();
        })

        $('#user-print').unbind('click').bind('click',function(){
            var text_search = $('#user-text-search').val();
            var user_type = $('#user-search-type').val();
            var dateto_temp = new Date($('#user-date-to').val())
            var dateto =''
            var flag_dateto =false
            if(dateto_temp !='Invalid Date'){
                flag_dateto =true
                dateto = $('#user-date-to').val();
            }

            var datefrom_t = new Date($('#user-date-from').val());
            var datefrom =''
            var flag_datefrom=false
            if(datefrom_t !='Invalid Date'){
                flag_datefrom =true
                datefrom = $('#user-date-from').val();
            }

            var _data ={token:_token,user_type_option_user_type:user_type,text_search:text_search}

            Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
            Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);
            pdf_ex.prototype.print_user_report(_data);
        })

        $('#user-export').unbind('click').bind('click',function(){
            var text_search = $('#user-text-search').val();
            var user_type = $('#user-search-type').val();
            var dateto_temp = new Date($('#user-date-to').val())
            var dateto =''
            var flag_dateto =false
            if(dateto_temp !='Invalid Date'){
                flag_dateto =true
                dateto = $('#user-date-to').val();
            }

            var datefrom_t = new Date($('#user-date-from').val());
            var datefrom =''
            var flag_datefrom=false
            if(datefrom_t !='Invalid Date'){
                flag_datefrom =true
                datefrom = $('#user-date-from').val();
            }

            var _data ={token:_token,user_type_option_user_type:user_type,
                text_search:text_search}

            Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
            Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);
            pdf_ex.prototype.export_user_report(_data);
        })

        $('#inv-search').unbind('click').bind('click',function(){
            admin.get_invs_list();
        })

        $('#inv-print').unbind('click').bind('click',function(){
            var _data = admin.get_invoice_report_parameter()
            pdf_ex.prototype.print_ivn_report(_data);
        })
        $('#inv-export').unbind('click').bind('click',function(){
            var _data = admin.get_invoice_report_parameter()
            pdf_ex.prototype.export_ivn_report(_data);
        })

        $('#inv-reset').unbind('click').bind('click',function(){
            $('#inv-search-type').find("option[value='']").attr("selected", "selected");
            $('#inv-date-to').val('')
            $('#inv-date-from').val('')
            $('#inv-paid-date-from').val('')
            $('#inv-paid-date-to').val()
            admin.get_invs_list()
        })

        $('#payment-search').unbind('click').bind('click',function(){
            admin.get_payment_list();
        })

        $('#payment-print').unbind('click').bind('click',function(){
            var _data =  admin.get_payment_parameter()

            pdf_ex.prototype.print_payment_report(_data);
        })
        $('#payment-export').unbind('click').bind('click',function(){
           var _data =  admin.get_payment_parameter()
            pdf_ex.prototype.export_payment_report(_data);
        })

        $('#payment-reset').unbind('click').bind('click',function(){
            $('#payment-search-type').find("option[value='']").attr("selected", "selected");
            $('#payment-date-to').val('')
            $('#payment-date-from').val('')
            $('#payment-text-search').val('')
            admin.get_payment_list()
        })

    },

    /*****************************************/
    tr_content:function(appt,i){
        //console.log(appt);
        var tr ='';
        //date
        var date_hour ='';
        if(appt.apt_date_date!=null){
            //console.log(appt.apt_date_date);
            var d = new Date(appt.apt_date_date);
            var date_t = d.toLocaleString();
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

            date_hour = date
        }

        var appt_link ='<a target="_blank" href="appointment_edit.php?id='+appt.Appt_id+'"><strong>'+appt.aptid_text+'</strong></a>';
        var appt_link1 ='<a href="appointment_edit.php?id='+appt.Appt_id+'">' +
            '<div class="row padding_l5 text-left"><strong>'+appt.aptid_text+'</strong></div>' +
            '<div class="row padding_l5 text-left">'+date_hour+'</div>' +
            '</a>';


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
        var doctor_name= ''
        if(appt.assigned_doctor_user !=null && appt.assigned_doctor_user !=''){
            doctor_name=appt.asg_d_display_name
            doctor_link ='<a href="physician_infomation.php?id='+appt.assigned_doctor_user+'">' +
                '<div class="row col-12 padding_r">' +
                '<div class="col-2 padding_l text-left"><i class="fa fa-user-md"></i></div>' +
                '<div class="col-10 padding_rl text-left"">'+appt.asg_d_display_name+'</div>' +
                '</div>' +
                '</a>'
        }

        var description="";
        if(appt.description_text!=undefined){
            description =appt.description_text;
        }

        var patient_name = appt.u_p_display_name
        //
        tr +='<tr>' +
            '<td>'+i+'</td>' +
            '<td>'+appt_link+'</td>' +
            '<td>'+deposition+'</td>' +
            '<td>'+doctor_name+'</td>' +
            '<td>'+patient_name+'</td>' +
            '<td>'+what_pain+'</td>' +
            '<td>'+date_hour+'</td>' +
            '</tr>';

        return tr;
    },
    /*****************************************/

    tr_content1:function(appt,doctor,triage,i){
        var tr ='';
        //date
        var date_hour ='';
        if(appt.apt_date_date!=undefined){
            var d = new Date(appt.apt_date_date);
            var date_t = d.toLocaleString();
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
        }

        var appt_link ='<a href="appointment_edit.php?id='+appt._id+'"><i class="fa fa-edit color6676f2"></i></a>';
        var appt_link1 ='<a href="appointment_edit.php?id='+appt._id+'">' +
            '<div class="row padding_l5 text-left"><strong>'+appt.aptid_text+'</strong></div>' +
            '<div class="row padding_l5 text-left">'+date_hour+'</div>' +
            '</a>';


        var what_pain ='';
        if(appt.chief_complaint_option_chief_complaint!=undefined){
            what_pain =chieft_complain_arr[appt.chief_complaint_option_chief_complaint]
        }

        var deposition =''
        if(appt.disposition_option_apt_disposition!=undefined){
            deposition =apt_disposition_arr[appt.disposition_option_apt_disposition]
        }

        var doctor_name='';

        var doctor_link =' <div class="row col-12">' +
            '<i class="fa fa-user-md"></i>'+
            '</div>';
        if(doctor!=''){
            doctor_name =doctor.display_name_text
            doctor_link ='<a href="physician_infomation.php?id='+doctor._id+'">' +
                '<div class="row col-12 padding_r">' +
                '<div class="col-2 padding_l text-left"><i class="fa fa-user-md"></i></div>' +
                '<div class="col-10 padding_rl text-left"">'+doctor.display_name_text+'</div>' +
                '</div>' +
                '</a>'
        }

        var triage_link =' <div class="row col-12">' +
            '<i class="fa fa-ambulance"></i>'+
            '</div>';
        if(triage!=''){
            triage_link ='<a href="physician_infomation.php?id='+triage._id+'">' +
                '<div class="row col-12 padding_r">' +
                '<div class="col-2 padding_l text-left"><i class="fa fa-ambulance"></i></div>' +
                '<div class="col-10 padding_rl text-left"">'+triage.display_name_text+'</div>' +
                '</div>' +
                '</a>'
        }

        //
        i ++;
        tr +='<tr>' +
            '<td>'+i+'</td>' +
            '<td><a href="appointment_edit.php?id='+appt._id+'">'+appt.aptid_text +'</a></td>' +
            '<td>'+deposition+'</td>' +
            '<td>'+doctor_name+'</td>' +
            '<td>'+what_pain+'</td>' +

            '<td>'+date_hour+'</td>' +
          '</tr>';

        return tr;
    },

    get_appt: function(){
        var disposition = $('#apt-search-type').val();
        var text_search = $('#apt-text-search').val();

        var dateto =''
        var dateto_temp = new Date($('#apt-date-to').val())
        var flag_dateto =false
        if(dateto_temp !='Invalid Date'){
            flag_dateto =true
            dateto = $('#apt-date-to').val()
        }

        var datefrom =''
        var datefrom_temp = new Date($('#apt-date-from').val());
        var flag_datefrom=false
        if(datefrom_temp !='Invalid Date'){
            flag_datefrom =true
             datefrom = $('#apt-date-from').val();
        }

        var doctor_name =$('#apt-doctor').is(':checked')
        var patient_name =$('#apt-patient').is(':checked')

        var _data ={token:_token,
            limit:1,cursor:0,
            disposition_option_apt_disposition:disposition,text_search:text_search,
            doctor_name:doctor_name,patient_name:patient_name
        }

        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

        var _link =link._history_apts;

        var $pagination = $('#apt-list-pagination');
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
                var totalRecords = parseInt(data.apts.row_cnt);
                $('#apt-record').text(data.apts.row_cnt)
                if(totalRecords==0){
                    $('#apt-list tbody').html("");
                    return ;
                }

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

                        var _data ={token:_token,
                            limit:10,cursor:cursor,
                            disposition_option_apt_disposition:disposition,text_search:text_search,
                            doctor_name:doctor_name,patient_name:patient_name
                        }

                        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
                        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

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
                                var tr='';
                                //console.log(data);
                                var i =1;
                                data.forEach(function (item) {
                                    tr += dashboard_admin.prototype.tr_content(item,i);
                                    i++;

                                });//end for each

                                $('#apt-list tbody').html(tr);

                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    },

    get_users_list: function(){
        var _link = link._users;
        var text_search = $('#user-text-search').val();
        var user_type = $('#user-search-type').val();
        var dateto_temp = new Date($('#user-date-to').val())
        var dateto =''
        var flag_dateto =false
        if(dateto_temp !='Invalid Date'){
            flag_dateto =true
            dateto = $('#user-date-to').val();
        }

        var datefrom_t = new Date($('#user-date-from').val());
        var datefrom =''
        var flag_datefrom=false
        if(datefrom_t !='Invalid Date'){
            flag_datefrom =true
            datefrom = $('#user-date-from').val();
        }

        var _data ={token:_token,limit:1,cursor:0,user_type_option_user_type:user_type,text_search:text_search}

        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

        var $pagination = $('#users-list-pagination');
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
                var totalRecords = parseInt(data.user.row_cnt);
                $('#user-record').text(data.user.row_cnt)
                if(totalRecords==0){
                    $('#users-list tbody').html("");
                    return;
                }
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
                        var _data ={token:_token,
                            limit:10,cursor:cursor,user_type_option_user_type:user_type,text_search:text_search}

                        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
                        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

                        var tr='';
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
                               // console.log(res);
                                //
                                var data=res.user.results;
                                var i=0
                                data.forEach(function (item) {
                                    var create_date = '';
                                    if(item.CreatedDate!=null){
                                        //console.log(appt.apt_date_date);
                                        var d = new Date(item.CreatedDate);
                                        var date_t = d.toLocaleString();
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

                                        create_date = date
                                    }

                                    var name = item.display_name_text
                                    if(item.display_name_text ==null || item.display_name_text ==''){
                                        var first_name_text =(item.first_name_text==null)?'':item.first_name_text
                                        var middle_name_text =(item.middle_name_text==null)?'':item.middle_name_text
                                        var family_name_text =(item.family_name_text==null)?'':item.family_name_text

                                        name=family_name_text+" "+middle_name_text+" "+first_name_text
                                    }

                                    if(item.primary_phone_number_text ==null){
                                        item.primary_phone_number_text =''
                                    }

                                    i++
                                    tr +='<tr>' +
                                        '<td>'+i+'</td>' +
                                        '<td>'+name +'</td>' +
                                        '<td>'+item.primary_phone_number_text+'</td>' +
                                        '<td>'+item.user_type_option_user_type+'</td>' +
                                        '<td>'+create_date+'</td>' +
                                        '</tr>';

                                });//end for each

                                $('#users-list tbody').html(tr);
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    },

    get_invs_list: function(){
        var _link = link._history_invs;
        var paid = $('#inv-paid').val();
        var text_search = $('#inv-text-search').val();
        var dateto =''
        var datetotemp= new Date($('#inv-date-to').val())

        var flag_dateto =false
        if(datetotemp !='Invalid Date'){
            flag_dateto =true
            dateto = new $('#inv-date-to').val()
        }

        var datefrom = ''
        var datefromtmp = new Date($('#inv-date-from').val());
        var flag_datefrom=false
        if(datefromtmp !='Invalid Date'){
            flag_datefrom =true
            datefrom = $('#inv-date-from').val();
        }

        var paiddateto = ''
        var datedatetotmp = new Date($('#inv-paid-date-to').val());
        var flag_paiddateto=false
        if(datedatetotmp !='Invalid Date'){
            flag_paiddateto =true
            paiddateto = $('#inv-paid-date-to').val();
        }

        var paiddatefrom = ''
        var paiddatefromtmp = new Date($('#inv-paid-date-from').val());
        var flag_paiddatefrom=false
        if(paiddatefromtmp !='Invalid Date'){
            flag_paiddatefrom =true
            paiddatefrom = $('#inv-paid-date-from').val();
        }

        var _data ={token:_token,limit:1,cursor:0,inv_paid:paid,text_search:text_search}

        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);
        Object.assign(_data, flag_paiddateto ? { "date_to_paid": paiddateto } : null);
        Object.assign(_data, flag_paiddatefrom ? { "date_from_paid": paiddatefrom } : null);

        var $pagination = $('#inv-list-pagination');
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
                var totalRecords = parseInt(data.invs.row_cnt);
                $('#inv-record').text(totalRecords)
                if(totalRecords==0){
                    $('#inv-list tbody').html("");
                    return;
                }
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
                        var _data = {token:_token,limit:10,cursor:cursor,inv_paid:paid,text_search:text_search}

                        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
                        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);
                        Object.assign(_data, flag_paiddateto ? { "date_to_paid": paiddateto } : null);
                        Object.assign(_data, flag_paiddatefrom ? { "date_from_paid": paiddatefrom } : null);

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
                                 //console.log(res);
                                //
                                var tr='';
                                var i= 0;
                                var data_inv=res.invs.results;
                                data_inv.forEach(function (item) {
                                    i++
                                    var total =0;
                                    var total_temp =0
                                    if(item.invoice_total_number !=null && item.invoice_total_number !=''){
                                        total = common_f.prototype.convert_str_thousand(item.invoice_total_number.toString()) +' VND'
                                        total_temp = parseFloat(item.invoice_total_number)
                                    }

                                    var remaining =0;
                                    var inv_balance_text =""
                                    if(item.balance_number !=null && item.balance_number !=''){
                                        remaining = parseFloat(item.balance_number)
                                        if( remaining <=0){
                                            inv_balance_text ='<span class="color_green">Đã thanh toán</span>'
                                        }else{
                                            inv_balance_text ='<span class="color-alert">Chưa thanh toán</span>'
                                        }

                                        remaining = common_f.prototype.convert_str_thousand(remaining.toString()) +' VND'

                                    }

                                    var create_date = item.CreatedDate;

                                    tr +='<tr>' +
                                        '<td>'+i+'</td>' +
                                        '<td><a href="invoice.php?id='+item.Inv_id+'">'+item.inv_text+'</a></td>' +
                                        '<td><a href="appointment_edit.php?id='+item.appointment_custom_appointment+'">'+item.aptid_text+'</a></td>' +

                                        '<td>'+total+'</td>' +
                                        '<td>'+remaining+'</td>' +
                                        '<td>'+inv_balance_text+'</td>' +
                                        '<td>'+create_date+'</td>' +
                                        '</tr>';

                                });//end for each

                                $('#inv-list tbody').html(tr);

                            }
                        });//end ajax get at current page


                    } //end onPageClick
                }));
            }
        });
    },

    get_payment_list: function(){
        var _link = link._paymentList;
        var status = $('#payment-search-type').val();
        var dateto = ''
        var datetotemp = new Date($('#payment-date-to').val())

        var flag_dateto =false
        if(datetotemp !='Invalid Date'){
            flag_dateto =true
            dateto = $('#payment-date-to').val()
        }

        var datefrom = ''
        var datefromtemp = new Date($('#payment-date-from').val());
        var flag_datefrom=false
        if(datefromtemp !='Invalid Date'){
            flag_datefrom =true
            datefrom = $('#payment-date-from').val()
        }

        var text_search = $('#payment-text-search').val();

        var _data ={token:_token,
            limit:1,cursor:0,status_option_payment_status:status,text_search:text_search}

        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

        var $pagination = $('#payment-list-pagination');
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
            success: function (res) {
                var data =  res.payments;
                var totalRecords = parseInt(data.row_cnt);
                $('#payment-record').text(data.row_cnt)

                var amount_success =''
                if(data.amount_number_success !=null && data.amount_number_success !=''){
                    amount_success = common_f.prototype.convert_str_thousand(data.amount_number_success.toString()) +' VND'
                }
                var amount_not_success = ''
                if(data.amount_number_not_success !='' && data.amount_number_not_success !=null){
                    amount_not_success =common_f.prototype.convert_str_thousand(data.amount_number_not_success.toString()) +' VND'
                }
                $('#payment-success').text(amount_success)
                $('#payment-not-success').text(amount_not_success)
                if(totalRecords==0){
                    $('#payment-list tbody').html("");
                    return;
                }
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
                        var _data ={token:_token,
                            limit:10,cursor:cursor,status_option_payment_status:status,text_search:text_search}

                        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
                        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

                        var tr='';
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
                                //console.log(res);
                                //return false;
                                var i =0;
                                var data_payment=res.payments.results;
                                data_payment.forEach(function (item) {
                                    var payment_amount = "0VND"
                                    if(item.amount_number !=null && data.amount_number !=''){
                                        payment_amount = common_f.prototype.convert_str_thousand(item.amount_number.toString()) +' VND'
                                    }

                                    var payment_type = ""
                                    if(item.type_option_payment_type !=null && item.type_option_payment_type !=''){
                                        payment_type = item.payment_type_vi_vn
                                    }

                                    var status =''
                                    if(item.payment_status_vi_vn !=null && item.payment_status_vi_vn !=''){
                                        status = item.payment_status_vi_vn
                                    }

                                    var create_date = item.CreatedDate
                                        i++
                                    tr +='<tr>' +
                                        '<td>'+i+'</td>' +
                                        '<td>'+item.transaction_id_text+'</td>' +
                                        '<td><a href="invoice.php?id='+item.invoice_custom_invoice+'">'+item.inv_text+'</a></td>' +

                                        '<td>'+payment_amount+'</td>' +
                                        '<td>'+payment_type+'</td>' +
                                        '<td>'+status+'</td>' +
                                        '<td>'+create_date+'</td>' +
                                        '</tr>';

                                });//end for each

                                $('#payment-list tbody').html(tr);
                            }
                        });//end ajax get at current page


                    } //end onPageClick
                }));
            }
        });
    },

    get_invoice_report_parameter:function(){
        var paid = $('#inv-paid').val();
        var text_search = $('#inv-text-search').val();
        var dateto =''
        var datetotemp= new Date($('#inv-date-to').val())

        var flag_dateto =false
        if(datetotemp !='Invalid Date'){
            flag_dateto =true
            dateto = new $('#inv-date-to').val()
        }

        var datefrom = ''
        var datefromtmp = new Date($('#inv-date-from').val());
        var flag_datefrom=false
        if(datefromtmp !='Invalid Date'){
            flag_datefrom =true
            datefrom = $('#inv-date-from').val();
        }

        var paiddateto = ''
        var datedatetotmp = new Date($('#inv-paid-date-to').val());
        var flag_paiddateto=false
        if(datedatetotmp !='Invalid Date'){
            flag_paiddateto =true
            paiddateto = $('#inv-paid-date-to').val();
        }

        var paiddatefrom = ''
        var paiddatefromtmp = new Date($('#inv-paid-date-from').val());
        var flag_paiddatefrom=false
        if(paiddatefromtmp !='Invalid Date'){
            flag_paiddatefrom =true
            paiddatefrom = $('#inv-paid-date-from').val();
        }

        var _data ={token:_token,inv_paid:paid,text_search:text_search}

        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);
        Object.assign(_data, flag_paiddateto ? { "date_to_paid": paiddateto } : null);
        Object.assign(_data, flag_paiddatefrom ? { "date_from_paid": paiddatefrom } : null);

        return _data;
    },

    get_payment_parameter:function(){
        var status = $('#payment-search-type').val();
        var dateto = ''
        var datetotemp = new Date($('#payment-date-to').val())

        var flag_dateto =false
        if(datetotemp !='Invalid Date'){
            flag_dateto =true
            dateto = $('#payment-date-to').val()
        }

        var datefrom = ''
        var datefromtemp = new Date($('#payment-date-from').val());
        var flag_datefrom=false
        if(datefromtemp !='Invalid Date'){
            flag_datefrom =true
            datefrom = $('#payment-date-from').val()
        }

        var text_search = $('#payment-text-search').val();

        var _data ={token:_token,
            status_option_payment_status:status,text_search:text_search}

        Object.assign(_data, flag_datefrom ? { "date_from": datefrom } : null);
        Object.assign(_data, flag_dateto ? { "date_to": dateto } : null);

        return _data;

    }

}
var admin = new dashboard_admin();
$(function(){
    admin.init();
});