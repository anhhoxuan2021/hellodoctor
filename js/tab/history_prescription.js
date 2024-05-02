
function history_prescription(){}
history_prescription.NAME         = "history_prescription";
history_prescription.VERSION      = "1.2";
history_prescription.DESCRIPTION  = "Class history_prescription";

history_prescription.prototype.constructor = history_prescription;
history_prescription.prototype = {
    init: function(){
        $("#tab-prescription-click").unbind("click").bind("click",function(){
            var patient_id = $("#patient-id").val();

            if(window.location.pathname.includes('dashboard.php')){
                var id = getUrlParameter1('id');

                if(id!=undefined){
                    patient_id =id
                }
            }

            $('#tbl-prescription-content tbody').html('');
            h_pres.get_pres_history(patient_id);
        });

        /*$('#prescription-modal #add-prescription-line').unbind('click').bind('click',function(){
            h_pres.add_pres_line('','')
        });*/

        //bind event
        $('#prescription-modal #prescription-medication-list').on('change','.pres-amount-m',function(){
            var amount_m =  $(this).closest('.prescription-medication-row').find('.pres-amount-m').val();
            var amount_n =  $(this).closest('.prescription-medication-row').find('.pres-amount-n').val();
            var amount_a =  $(this).closest('.prescription-medication-row').find('.pres-amount-a').val();
            var amount_e =  $(this).closest('.prescription-medication-row').find('.pres-amount-e').val();
            var number_of_day =$(this).closest('.prescription-medication-row').find('.number_of_days').val();
            var pres_line_unit =$(this).closest('.prescription-medication-row').find('.pres_line_unit').val();

            var el = $(this).closest('.prescription-medication-row').find('.total_number')
            h_pres.totalline(amount_m,amount_n,amount_a,amount_e,number_of_day,pres_line_unit,el)
        });

        $('#prescription-modal #prescription-medication-list').on('change','.pres-amount-n',function(){

            var amount_m =  $(this).closest('.prescription-medication-row').find('.pres-amount-m').val();
            var amount_n =  $(this).closest('.prescription-medication-row').find('.pres-amount-n').val();
            var amount_a =  $(this).closest('.prescription-medication-row').find('.pres-amount-a').val();
            var amount_e =  $(this).closest('.prescription-medication-row').find('.pres-amount-e').val();
            var number_of_day =$(this).closest('.prescription-medication-row').find('.number_of_days').val();
            var pres_line_unit =$(this).closest('.prescription-medication-row').find('.pres_line_unit').val();
            var el = $(this).closest('.prescription-medication-row').find('.total_number')
            h_pres.totalline(amount_m,amount_n,amount_a,amount_e,number_of_day,pres_line_unit,el)
        });

        $('#prescription-modal #prescription-medication-list').on('change','.pres-amount-a',function(){

            var amount_m =  $(this).closest('.prescription-medication-row').find('.pres-amount-m').val();
            var amount_n =  $(this).closest('.prescription-medication-row').find('.pres-amount-n').val();
            var amount_a =  $(this).closest('.prescription-medication-row').find('.pres-amount-a').val();
            var amount_e =  $(this).closest('.prescription-medication-row').find('.pres-amount-e').val();
            var number_of_day =$(this).closest('.prescription-medication-row').find('.number_of_days').val();
            var el = $(this).closest('.prescription-medication-row').find('.total_number')
            var pres_line_unit =$(this).closest('.prescription-medication-row').find('.pres_line_unit').val();
            h_pres.totalline(amount_m,amount_n,amount_a,amount_e,number_of_day,pres_line_unit,el)
        });

        $('#prescription-modal #prescription-medication-list').on('change','.pres-amount-e',function(){

            var amount_m =  $(this).closest('.prescription-medication-row').find('.pres-amount-m').val();
            var amount_n =  $(this).closest('.prescription-medication-row').find('.pres-amount-n').val();
            var amount_a =  $(this).closest('.prescription-medication-row').find('.pres-amount-a').val();
            var amount_e =  $(this).closest('.prescription-medication-row').find('.pres-amount-e').val();
            var number_of_day =$(this).closest('.prescription-medication-row').find('.number_of_days').val();
            var el = $(this).closest('.prescription-medication-row').find('.total_number')
            var pres_line_unit =$(this).closest('.prescription-medication-row').find('.pres_line_unit').val();
            h_pres.totalline(amount_m,amount_n,amount_a,amount_e,number_of_day,pres_line_unit,el)
        });

        $('#prescription-modal #prescription-medication-list').on('change','.number_of_days',function(){

            var amount_m =  $(this).closest('.prescription-medication-row').find('.pres-amount-m').val();
            var amount_n =  $(this).closest('.prescription-medication-row').find('.pres-amount-n').val();
            var amount_a =  $(this).closest('.prescription-medication-row').find('.pres-amount-a').val();
            var amount_e =  $(this).closest('.prescription-medication-row').find('.pres-amount-e').val();
            var number_of_day =$(this).closest('.prescription-medication-row').find('.number_of_days').val();
            var pres_line_unit =$(this).closest('.prescription-medication-row').find('.pres_line_unit').val();
            var el = $(this).closest('.prescription-medication-row').find('.total_number')
            h_pres.totalline(amount_m,amount_n,amount_a,amount_e,number_of_day,pres_line_unit,el)
        });

        $('#prescription-modal #prescription-diagnostic-code').change(function(){
            var diagnostic_code = $(this).find("option:selected").val();
            var diagnostic_name = $(this).find("option:selected").text();
            var code = $(this).find("option:selected").attr('code');
            var name1 = $(this).find("option:selected").attr('name1');

            var continuing = false;
            $('#prescription-modal #prescription-diagnostic-selected .pres-diagnostic').each(function(){
                var diagnostic_id =$(this).find('.pres-diagnostic-id').val();
                if(diagnostic_id ==diagnostic_code){
                    continuing = true;
                    return;
                }
            })
            if(!continuing){
                h_pres.add_diagnostic_row_pres(diagnostic_code,diagnostic_name,code,name1);
            }

        })

        /*$('#prescription-modal #prescription-diagnostic-name').change(function(){
            var diagnostic_id = $(this).find("option:selected").val();
            var diagnostic_name = $(this).find("option:selected").text();
            var code = $(this).find("option:selected").attr('code');
            var name1 = $(this).find("option:selected").attr('name1');
            h_pres.add_diagnostic_row_pres(diagnostic_id,diagnostic_name,code,name1);
        });*/

        $('#prescription-modal #prescription-diagnostic-selected').on('click','.pres-diagnostic-delete-row',function(){
            if(!window.location.pathname.includes('patient_appointment.php')){
                $(this).closest('.pres-diagnostic').remove();
            }
        })

        $("#pres-add-new").unbind("click").bind("click",function(){
            if(type_login =='Patient') return false

            $('#prescription-modal').modal('show')
            h_pres.reset_pres_modal()
            h_pres.show_prescription_add_new();
            if(type_login =='Doctor'){
                $('#prescription-modal #prescription-validation').css({"display":""})
            }

        });

        $("#tbl-prescription-content").on("click",'.open-modal-pres',function(){
            $('#prescription-modal').modal('show')
            h_pres.reset_pres_modal()
            h_pres.display_pres_modal($(this))

        });

        $('#prescription-modal #pres_pdf').unbind('click').bind('click',function(){
            var PrescriptionID= $('#prescription-modal #prescription-id').val()
            pdf_ex.prototype.export_prescription(PrescriptionID);
        });
        $('#prescription-modal #pres_print_pdf').unbind('click').bind('click',function(){
            var PrescriptionID= $('#prescription-modal #prescription-id').val()
            pdf_ex.prototype.print_prescription(PrescriptionID);
        });

        $('#prescription-validation').unbind('click').bind('click',function(){
            modal_validate.prototype.pres_validate_reset();
            $('#modal-pres-validate').modal('show')
            $('#modal-pres-validate #pres-modal_type_login').val(type_login)
        });


        $('#tbl-prescription-content').on('change','.pres-general-status',function(){
            var $me= $(this);
            //console.log($me.val())
            if($me.val()=="Complete"){
                $('#modal-alert .modal-alert-content').html("<div>Sau khi Toa thuốc này được chuyển sang trạng thái Hoàn thành, sẽ không thể chỉnh sửa nó nữa.</div><div>Bạn có muốn chuyển trạng thái không?</div>");
                $("#modal-alert .lab-status-btn").css({"display":"none"});
                $("#modal-alert .pres-status-btn").css({"display":""});
                $("#modal-alert .apt-status-btn").css({"display":"none"});
                $("#modal-alert").modal("show");
                $("#pres-confirm-change").unbind("click").bind("click",function(){
                    history_prescription.prototype.update_prescription_status($me)
                    $("#modal-alert").modal("hide");
                })
            }else{
                //confirm-change
                history_prescription.prototype.update_prescription_status($me)
            }

        })

    },

    show_prescription_add_new:function(){
        $('#prescription-modal #div-save-prescription').html('<button class="btn btn-succ w100" id="save-prescription">Lưu</button>');

        var patient_name = $('#patient-name').val()
        var patient_address = $('#patient-address').val()
        var patient_id = $('#patient-id').val()
        $('#prescription-modal #prescription-patient-name').text(patient_name);
        $('#prescription-modal #prescription-patient-address').text(patient_address);
        $('#prescription-modal #prescription-patient-id').val(patient_id);

        var appt_id = $('#appointment-id').val()
        var appt_name1 = $('#appt-name1').text()
        $('#prescription-modal #prescription-appt-id').val(appt_id);
        $('#prescription-modal #prescription-appt-text').text(appt_name1);

        var doctor_name =$('#doctor-assigned-name').val()
        var doctor_id =$('#doctor-id').val()
        $('#prescription-modal #prescription-doctor-assigned-name').text(doctor_name);
        $('#prescription-modal #prescription-doctor-id').val(doctor_id);

        //diagnostic
        getDiagnostic(appt_id,'#prescription-modal #prescription-diagnostic-selected','prescription')
        //add line
        h_pres.add_pres_line('','')
        //event
        $('#prescription-modal #save-prescription').unbind('click').bind('click',function(){
            $('#prescription-modal #save-prescription').prop("disabled",true)
            h_pres.save_update_prescription('','')
        })
    },

    get_pres_history:function(patient_user){
        var link3 =link._history_pres;

        var _data ={token:_token,limit:1,cursor:0,patient_user:patient_user,text_search:''}

        var $pagination = $('#pagination_history_prescription');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            data:_data,
            "method": "POST",
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (data) {
                var totalRecords = parseInt(data.row_cnt);
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
                        _data ={token:_token,limit:10,cursor:cursor,patient_user:patient_user,text_search:''}

                        var tr='';
                        //
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": link3,
                            data:_data,
                            "method": "POST",
                            dataType: 'json',

                            error : function (status,xhr,error) {
                            },
                            success: function (resPrescription) {
                                if(resPrescription.pres==undefined) return
                                var data=resPrescription.pres;
                                data.forEach(function (item) {
                                    tr += h_pres.getcontent_tr(item,'');
                                });//end for each

                                $('#tbl-prescription-content tbody').html(tr);
                                $('.pres-general-status').each(function(){
                                    if($(this).val()=="Complete"){
                                        $(this).prop("disabled",true)
                                        $(this).closest('tr').addClass('bg-l-r')
                                        $(this).closest('tr').find('.instruction-open').removeClass('open-modal-pres')
                                    }
                                })

                                if(window.location.pathname.includes('patient_appointment.php')){
                                    $('#tbl-prescription-content .pres-general-status').prop("disabled","true")
                                }
                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
                //
            }
        });
    },


    getcontent_tr:function(pres,new_line){
        var tr ='';
        var doctor_name =pres.orderedBy_display_name;
        if(doctor_name ==null && doctor_name !=''){
            var first_name_text =(pres.orderedBy_firstName==null && pres.orderedBy_firstName==undefined)?'':pres.apt.orderedBy_firstName
            var middle_name_text =(pres.orderedBy_middle_name==null && pres.orderedBy_middle_name==undefined)?'':pres.orderedBy_middle_name
            var family_name_text =(pres.orderedBy_familyName==null && pres.orderedBy_familyName==undefined)?'':pres.apt.orderedBy_familyName

            doctor_name=family_name_text+" "+middle_name_text+" "+first_name_text
        }

            //date
            var date_temp= pres.CreatedDate;

            var str_no_blank = pres.status_option_status;

            var option = selectBox(generalStatus,str_no_blank);

            var status ='<select class="pres-general-status form-control">'+option+'</select>'

            var instruction_html = '<td class="color_blue open-modal-pres instruction-open">Thêm ghi chú</td>';
            var instruction =''
            if(pres.notes_text !=null && pres.notes_text !=''){
                instruction =pres.notes_text;
                instruction_html = '<td class="instruction-open">'+instruction+'</td>' ;
            }

            var class_n ='class="bg-l-b"'
            if(new_line !='new'){
                class_n ='';
            }
            if($('#prescription-modal #modal-prescription-general-status').val() =='Complete'){
                class_n ='class="bg-l-r"'
                status ='<select class="pres-general-status form-control" disabled="disabled">'+option+'</select>'

            }

        var medication_name =''
            if(pres.pres_line.length >0){
                pres.pres_line.forEach(function(item){
                    medication_name +='<div class="row">'+item.m_name_text+'</div> '
                })
            }
           tr ='<tr '+class_n+'>' +
                '<td class="open-modal-pres"><i class="fa fa-edit color6676f2"></i>' +
                    '<input type="hidden" class="pres_id" value="'+pres.PrescriptionID+'">' +
                '</td>' +
                '<td style="max-width: 80px!important">'+date_temp+'</td>' +
                '<td class="medication_name" style="padding-left: 15px!important;">'+medication_name+'</td>' +
                    instruction_html+
                '<td class="doctor_name">'+doctor_name+'</td>' +
                '<td>'+status+'</td>' +
                '</tr>';

            return tr;
    },

    display_pres_modal:function($me){
        var PrescriptionID =  $me.closest('tr').find('.pres_id').val();

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link._pres_by_id,
            data:{token:_token,PrescriptionID:PrescriptionID},
            "method": "POST",
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (res) {

                if(res.Error =='' && res.pres.PrescriptionID !=''){
                    //pres line
                    if(res.pres.pres_line.length >0){
                        res.pres.pres_line.forEach(function(item){
                            h_pres.add_pres_line(item,"existing");
                        })
                    }
                    //add new line
                    h_pres.add_pres_line("","");

                    if(res.pres.signature_url_text !=null && res.pres.signature_url_text !=''){
                        $('#prescription-modal #pres-pdf-hide').css({"display":''})
                        $('#prescription-modal #pres-print-hide').css({"display":''})

                        $('#prescription-modal #prescription-validated-succ').css({"display":''})
                        $('#prescription-modal #prescription-validation').css({"display":'none'})

                        $('#modal-pres-validate #pres-modal-signature_url_text').val(res.pres.signature_url_text);
                        $('#modal-pres-validate #pres-modal-pin-code-after-validate').val('');
                    }

                    if(type_login =='Doctor' && (res.pres.signature_url_text ==null || res.pres.signature_url_text =='')){
                        $('#prescription-modal #prescription-validation').css({"display":""})
                    }

                    $('#prescription-modal #prescription-id').val(res.pres.PrescriptionID)
                    $('#prescription-modal #prescription-appt-id').val(res.pres.appointment_custom_appointment)

                    if(res.pres.status_option_status !='Complete'){
                        $('#prescription-modal #div-save-prescription').html('<button class="btn btn-danger w100" id="update-prescription">Lưu</button>');
                    }

                    if(res.pres.status_option_status =='Complete'){
                        $('#prescription-modal .class-disabled').prop("disabled",true);
                        $('#prescription-modal .read-only').prop("readonly",true);
                    }

                    $('#prescription-modal #prescription-date-time').text(res.pres.CreatedDate);
                    $('#prescription-modal #prescription-patient-name').text(res.pres.patient_display_name);
                    $('#prescription-modal #prescription-patient-address').text(res.pres.patient_address);
                    $('#prescription-modal #prescription-patient-id').val(res.pres.patient_user);
                    $('#prescription-modal #prescription-doctor-assigned-name').text(res.pres.orderedBy_display_name)
                    $('#prescription-modal #prescription-doctor-id').val(res.ordered_by_user)

                    $("#prescription-modal #modal-prescription-order-request-type option[value='"+res.pres.request_type_option_order_request_type +"']").prop("selected", "selected");
                    $("#prescription-modal #modal-prescription-general-status option[value='"+res.pres.status_option_status +"']").prop("selected", "selected");

                    $('#prescription-modal #prescription-Notes').val(res.pres.notes_text);
                    $('#prescription-modal #prescription-instructions').val(res.pres.instructions_text);

                    if(res.pres.location_custom_locations !='' && res.pres.location_custom_locations !=null){
                        $('#prescription-modal #prescription-location').html('<option value="'+res.pres.location_custom_locations+'" address="'+res.pres.location_address+'">'+res.pres.location_name_text+'</option>')
                        $('#prescription-modal #prescription-location').val(res.pres.location_custom_locations).trigger('change');
                    }

                    if(res.pres.delivered_by_user !='' && res.pres.delivered_by_user !=null){
                        $('#prescription-modal #prescription-delivered-by').html('<option value="'+res.pres.delivered_by_user+'">'+res.pres.deliveredBy_display_name+'</option>')
                        $('#prescription-modal #prescription-delivered-by').val(res.pres.delivered_by_user).trigger('change');
                    }

                    if(res.pres.fulfilled_by_user!=''){
                        $('#prescription-modal #prescription-completed-by').html('<option value="'+res.pres.fulfilled_by_user+'">'+res.pres.fulfilledBy_display_name+'</option>')
                        $('#prescription-modal #prescription-completed-by').val(res.pres.fulfilled_by_user).trigger('change');
                    }

                    var delivered_date='';
                    var delivered_hour='';

                    if(res.pres.delivered_date_date !='' && res.pres.delivered_date_date !=null){
                        var d = new Date(res.pres.delivered_date_date);
                        var date_t = d.toLocaleString();
                        var date_arr = date_t.split(',');
                        var date1_arr = date_arr[0].split('/');
                        delivered_date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);

                        var hour_t = date_arr[1].split(':');
                        var am_pm_t = hour_t[2].split(' ');
                        hour_t[0]= hour_t[0].trim();
                        var delivered_hour = ("0"+hour_t[0]).slice(-2)+':'+("0"+hour_t[1]).slice(-2)
                        if(am_pm_t[1].trim()=='PM'){
                            var h= parseInt(hour_t[0]) +12;
                            delivered_hour = h+':'+("0"+hour_t[1]).slice(-2)
                        }
                    }

                    $('#prescription-modal #modal-prescription-delivered-date').val(delivered_date);
                    $('#prescription-modal #modal-prescription-delivered-time').val(delivered_hour);

                    var fulfilled_date='';
                    var fulfilled_hour='';

                    if(res.pres.fulfilled_date_date !='' && res.pres.fulfilled_date_date !=null){
                        var d = new Date(res.pres.fulfilled_date_date);
                        var date_t = d.toLocaleString();
                        var date_arr = date_t.split(',');
                        var date1_arr = date_arr[0].split('/');
                        fulfilled_date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);

                        var hour_t = date_arr[1].split(':');
                        var am_pm_t = hour_t[2].split(' ');
                        hour_t[0]= hour_t[0].trim();
                        var fulfilled_hour = ("0"+hour_t[0]).slice(-2)+':'+("0"+hour_t[1]).slice(-2)
                        if(am_pm_t[1].trim()=='PM'){
                            var h= parseInt(hour_t[0]) +12;
                            fulfilled_hour = h+':'+("0"+hour_t[1]).slice(-2)
                        }
                    }

                    $('#prescription-modal #modal-prescription-date-completed').val(fulfilled_date);
                    $('#prescription-modal #modal-prescription-time-completed').val(fulfilled_hour);

                    var row ='';

                    if(res.pres.diagnostic_list_custom_diagnostic !=null && res.pres.diagnostic_list_custom_diagnostic !=''){
                        res.pres.diagnostic_list_custom_diagnostic.forEach(function(item){
                            row +='<div class="pres-diagnostic row col-12">' +
                                '<div class="col-2"></div>' +
                                '<div class="col-1 pres-diagnostic-delete-row" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div>' +
                                '<div class="col-9 pres-diagnostic-row padding_l">' +
                                '<input type="hidden" class="pres-diagnostic-id" value="'+item.code_text+'">' +
                                '<span>['+item.code_text+']</span><span class="diagnostic-text">'+item.name_text+'</span>' +
                                '</div>' +
                                '</div>'
                        });
                    }

                    $('#prescription-modal #prescription-diagnostic-selected').html(row)


                    //event
                    $('#prescription-modal #update-prescription').unbind('click').bind('click',function(){
                        $('#prescription-modal #update-prescription').prop("disabled",true)
                        h_pres.save_update_prescription(res.pres.PrescriptionID,$me);
                    })

                    //--------------------patient appointment----------------------
                    if(window.location.pathname.includes('patient_appointment.php')){
                        $('#prescription-modal').find('input').prop("disabled","true")
                        $('#prescription-modal').find('textarea').prop("disabled","true")
                        $('#prescription-modal').find('select').prop("disabled","true")
                        $('#prescription-modal').find('#div-save-prescription').closest('.row').css({"display":"none"})
                        $('#prescription-modal').find('#prescription-validated-succ').closest('.row').css({"display":"none"})
                    }

                    //
                }

            }
        });

        /////////////////////////
    },

    add_pres_line:function(presline,existing){
        //console.log("tét")
        var pres_id ='';
        var medication_custom=''
        var medication_custom ='';
        var morning_amount = ''
        var amount_noon='';
        var afternoon_amount ='';
        var evening_amount=''

        var number_of_days=''
        var total=''
        var instructions_text='';

        var usage_text='';
        var unit_text ='';

        if(presline !=''){
            pres_id =presline.PrescriptionLine_ID;
            var medication_custom='';
            if(presline.medication_custom_medication !=null){
                var m_name = presline.unit_text +"("+presline.m_active_ingredients_text +")"
                medication_custom ='<option value="'+presline.medication_custom_medication+'" unit_text="'+presline.unit_text+'" usage_text="'+presline.usage_text+'">'+m_name+'</option>'
            }

            if(presline.morning_amount_number !=null){
                morning_amount= presline.morning_amount_number
            }
            if(presline.noon_amount_number !=null){
                amount_noon= presline.amount_noon_number
            }
            if(presline.afternoon_amount_number !=null){
                afternoon_amount= presline.afternoon_amount_number
            }
            if(presline.evening_amount_number !=null){
                evening_amount= presline.evening_amount_number
            }

            if(presline.number_of_days_number !=null){
                number_of_days= presline.number_of_days_number
            }
            if(presline.total_number !=null){
                total= presline.total_number
            }
            if(presline.instructions_text !=null){
                instructions_text= presline.instructions_text
            }

            if(presline.usage_text !=null){
                usage_text= presline.usage_text
            }

            if(presline.unit_text !=null){
                unit_text= presline.unit_text
            }

           // console.log(usage_text)
            //
        }

        //console.log(presline);
       var i =$('#prescription-modal #prescription-medication-list >.prescription-medication-row').length +1

       var row_add ='<div class="col-12 padding_rl prescription-medication-row b-gray51">' +
           '<input type="hidden" class="prescription-line-id" value="'+pres_id+'">' +
           '<div class="row margin-top5">' +
               '<div class="col-11">' +
                 '<select class="prescription-medication-selected-name form-control">'+medication_custom+'</select>' +
               '</div>' +
               '<div class="col-1 delete middle-text" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div>' +
           '</div>' +
           '<div class="row margin-top5">' +
               '<div class="col-2 padding_l30"><strong>Sáng</strong></div>' +
               '<div class="col-2"><strong>Trưa</strong></div>' +
               '<div class="col-2"><strong>Chiều</strong></div>' +
               '<div class="col-2"><strong>Tối</strong></div>' +
               '<div class="col-2 "><strong>Cách dùng</strong></div>' +
               '<div class="col-2"> <strong>Số ngày</strong></div>' +
           '</div>' +
           '<div class="row margin-top5">' +
               '<div class="col-2"><input type="number" class="pres-amount-m form-control margin_l15" value="'+morning_amount+'"></div>' +
               '<div class="col-2"><input type="number" class="pres-amount-n form-control" value="'+amount_noon+'"></div>' +
               '<div class="col-2"><input type="number" class="pres-amount-a form-control" value="'+afternoon_amount+'"></div>' +
               '<div class="col-2"><input type="number" class="pres-amount-e form-control " value="'+evening_amount+'"></div>' +
               '<div class="col-2"><input type="text" class="form-control pres_line_usage" value="'+usage_text+'"></div>'+
                '<div class="col-2 p-r30"><input type="number" class=" number_of_days form-control" value="'+number_of_days+'"></div>' +
           '</div>' +

           '<div class="row margin-top5">' +
               '<div class="col-2 padding_l30">Số lượng</div>' +
               '<div class="col-2">Đơn vị</div>' +
               '<div class="col-8">Ghi chú</div>' +
           '</div>' +
           '<div class="row margin-top5 m_b5">' +
               '<div class="col-2"><input type="number" class="form-control total_number margin_l15" value="'+total+'"></div>' +
               '<div class="col-2"><input type="text" class="pres_line_unit form-control" value="'+unit_text+'"></div>' +
                '<div class="col-8 p-r30"><input type="text" class="presline_note form-control" value="'+instructions_text+'"></div>' +
           '</div>' +
       '</div> ' ;

        $('#prescription-modal #prescription-medication-list').append(row_add)

        if(existing==''){
            $('#prescription-modal #pres-pdf-hide').css({"display":'none'})
            $('#prescription-modal #pres-print-hide').css({"display":'none'})
            $('#prescription-modal #prescription-validation').css({"display":""});
            $('#prescription-modal #prescription-validated-succ').css({"display":"none"});
            modal_validate.prototype.pres_validate_reset();
            $('#modal-pres-validate #pres-modal_type_login').val(type_login)
        }

        var last = $('#prescription-modal #prescription-medication-list >.prescription-medication-row').last();

        last.find('.delete').unbind('click').bind('click',function(){
            if(!window.location.pathname.includes('patient_appointment.php')){
                if($('#prescription-modal #prescription-medication-list >.prescription-medication-row').length>1){
                    last.remove();
                    $('#prescription-modal #prescription-medication-list >.prescription-medication-row').each(function(index,item){
                        $(this).find('.number').text(index+1);
                    })

                    $('#prescription-modal #pres-pdf-hide').css({"display":'none'})
                    $('#prescription-modal #pres-print-hide').css({"display":'none'})
                    $('#prescription-modal #prescription-validation').css({"display":""});
                    $('#prescription-modal #prescription-validated-succ').css({"display":"none"});
                    modal_validate.prototype.pres_validate_reset();
                    $('#modal-pres-validate #pres-modal_type_login').val(type_login)
                }
            }

        });

        var link3 =link._medications;

        last.find('.prescription-medication-selected-name').select2({
            dropdownParent: $('#prescription-modal .modal-body'),
            placeholder: 'Tìm kiếm theo biệt dược hoặc tên thuốc',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Nhập tên biệt dược hoặc tên thuốc';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'POST',
                dataType: 'json',
                delay: 300,
                data: function (params) {
                    var _data ={
                        token:_token,text_search:params.term

                    }
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data) {
                        data = data.Medications;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: obj.name_text +'('+obj.active_ingredients_text+')',
                            id: obj.medication_id,
                            unit_text:obj.dosage_forms_text,
                            usage_text:obj.usage_text,
                            dosage_text:obj.dosage_text,
                            packaging_text:obj.packaging_text

                        };
                    });
                    //console.log(data1);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="row">' +
                        '<div class="col-7">' + item.text + '</div>' +
                        '<div class="col-1"> | ' + item.unit_text + '</div>' +
                        '<div class="col-2"> | ' + item.dosage_text + '</div>' +
                        '<div class="col-2"> | ' + item.packaging_text + '</div>' +
                    '</div>' +

                '</div>';
            },
            templateSelection: function (item, container) {
                if(item.usage_text ==undefined ) item.usage_text =''
                if(item.unit_text ==undefined ) item.unit_text =''

                last.find('.prescription-medication-selected-name option').attr('unit_text', item.unit_text);
                last.find('.prescription-medication-selected-name option').attr('usage_text', item.usage_text);
                if (item.text) return item.text;
                else return item.id;
            }
        }).on('change',function(){
                var medication_id = $(this).find("option:selected").val();
                var medication_name = $(this).find("option:selected").text();
                var unit_text = $(this).find("option:selected").attr('unit_text');
                var usage_text = $(this).find("option:selected").attr('usage_text');
                //console.log(usage_text)
                $(this).closest('.prescription-medication-row').find('.pres_line_usage').val(usage_text)
                $(this).closest('.prescription-medication-row').find('.pres_line_unit').val(unit_text)
                //append new row
                if($(this).closest(".prescription-medication-row").next().length <1 ){
                    h_pres.add_pres_line('','')
                }

            });

    },

    totalline:function(amount_m,amount_n,amount_a,amount_e,number_of_day,unit,el){
       if(unit != "Viên" && unit != "viên" && unit != "VIÊN") return;
       var amount_m =(amount_m=='')?0: parseFloat(amount_m);
       var amount_n =(amount_n=='')?0:parseFloat(amount_n);
       var amount_a =(amount_a=='')?0:parseFloat(amount_a);
       var amount_e =(amount_e=='')?0:parseFloat(amount_e);
       var number_of_day =(number_of_day=='')?0:parseInt(number_of_day);

       var total =(amount_m+amount_n+amount_a+amount_e)*number_of_day;

       $(el).val(total);
    },

    add_diagnostic_row_pres:function(diag_id,diag_name,code,name1){
        var row ='<div class="pres-diagnostic row col-12">' +
            '<div class="col-2"></div>' +
            '<div class="col-1 pres-diagnostic-delete-row" style="cursor: pointer">' +
            '<i class="fa fa-trash color-alert"></i>' +
            '</div>' +
            '<div class="col-9 pres-diagnostic-row padding_l">' +
            '<input type="hidden" class="pres-diagnostic-id" value="'+diag_id+'">' +
            '<span>['+code+']</span><span class="diagnostic-text">'+name1+'</span>' +
            '</div>' +
        '</div>'

        $('#prescription-modal #prescription-diagnostic-selected').append(row);

        /*$('#prescription-modal .pres-diagnostic-delete-row').unbind('click').bind('click',function(){
            $(this).closest('.pres-diagnostic').remove();
        })*/
    },

    save_update_prescription:function(pres_id,me,presline_arr){
        var apptID='';
        if(window.location.pathname.includes('appointment_edit.php')){
            apptID = getUrlParameter1('id');
        }

        if(apptID =='' && pres_id=='') return

        //prescription prescription-appt-id
        var appointment = $('#prescription-modal #prescription-appt-id').val()
        var delivered_by =$('#prescription-modal #prescription-delivered-by').val()
        if(delivered_by ==undefined) delivered_by=''

        var date =$('#prescription-modal #modal-prescription-delivered-date').val();
        var hour =$('#prescription-modal #modal-prescription-delivered-time').val();
        var delivered_date = date +' '+hour;
        var delivered_date_temp = delivered_date;

        delivered_date = new Date(delivered_date)
        var flag_delivered_date =false
        if(delivered_date !='Invalid Date'){
            flag_delivered_date =true
        }else{
            delivered_date=''
        }

        var fulfilled_by =$('#prescription-modal #prescription-completed-by').val()
        if(fulfilled_by ==undefined) fulfilled_by=''

        var date =$('#prescription-modal #modal-prescription-date-completed').val();
        var hour =$('#prescription-modal #modal-prescription-time-completed').val();
        var fulfilled_date = date +' '+hour;
        var fulfilled_date_temp = fulfilled_date;

        fulfilled_date = new Date(fulfilled_date)

        var flag_fulfilled_date =false
        if(fulfilled_date !='Invalid Date'){
            flag_fulfilled_date =true
        }else{
            fulfilled_date=''
        }

        var instructions= $('#prescription-modal #prescription-instructions').val()
        var location = $('#prescription-modal #prescription-location').val()
        var notes = $('#prescription-modal #prescription-Notes').val()
        var ordered_by = $('#prescription-modal #prescription-doctor-id').val()
        var patient = $('#prescription-modal #prescription-patient-id').val()
        var request_type = $('#prescription-modal #modal-prescription-order-request-type').val()
        var patient = $('#prescription-modal #prescription-patient-id').val()
        var status = $('#prescription-modal #modal-prescription-general-status').val()

        //signature_url
        var signature_url =$('#modal-pres-validate #pres-modal-signature_url_text').val();
        var validate_pin = $('#modal-pres-validate #pres-modal-pin-code-after-validate').val()
        var validate_doctor = user_login

        //pres
        var data_pres ={
            appointment_custom_appointment: appointment,
            delivered_by_user: delivered_by,
            fulfilled_by_user: fulfilled_by,
            instructions_text: instructions,
            notes_text: notes,
            ordered_by_user: ordered_by,
            patient_user: patient,
            request_type_option_order_request_type: request_type,
            signature_url_text: signature_url,
            status_option_status: status,
            location_custom_locations: location

        }

        Object.assign(data_pres, flag_delivered_date ? { "delivered_date_date": delivered_date_temp } : null,
            flag_fulfilled_date? { "fulfilled_date_date": fulfilled_date_temp } : null);

        //Pres line
        var medication_name_text ='';
        var medication_name =[];
        var data_pres_line =[];
        $('#prescription-modal #prescription-medication-list .prescription-medication-row').each(function(){
            var medication_id =$(this).find('.prescription-medication-selected-name').val()
            var medication_name_temp =$(this).find('.prescription-medication-selected-name option:selected').text()
            medication_name.push({m_name_text:medication_name_temp});
            medication_name_text +='<div class="row">'+medication_name_temp+'</div> '

            var usage_text =$(this).find('.pres_line_usage').val();
            var prescription_line_unit_text =$(this).find('.pres_line_unit').val();
            if(medication_id !=null && medication_id !=""){
                var afternoon_amount_number=0;
                if($(this).find('.pres-amount-a').val() !='') afternoon_amount_number=$(this).find('.pres-amount-a').val()

                var evening_amount_number=0;
                if($(this).find('.pres-amount-e').val() !='') evening_amount_number=$(this).find('.pres-amount-e').val()

                var morning_amount_number=0;
                if($(this).find('.pres-amount-m').val() !='') morning_amount_number=$(this).find('.pres-amount-m').val()

                var noon_amount_number=0;
                if($(this).find('.pres-amount-n').val() !='') noon_amount_number=$(this).find('.pres-amount-n').val()

                var number_of_days=0 //
                if($(this).find('.number_of_days').val() !='') number_of_days = $(this).find('.number_of_days').val()

                var total =0
                if($(this).find('.total_number').val() !='') total = $(this).find('.total_number').val()

                var line_notes =$(this).find('.presline_note').val();

                var _presline_temp ={
                    "afternoon_amount_number": afternoon_amount_number,
                    "evening_amount_number": evening_amount_number,
                    "medication_custom_medication": medication_id,
                    "morning_amount_number": morning_amount_number,
                    "noon_amount_number": noon_amount_number,
                    "number_of_days_number":number_of_days,
                    "total_number": total,
                    "instructions_text": line_notes,
                    "usage_text":usage_text,
                    "unit_text":prescription_line_unit_text
                }

                data_pres_line.push(_presline_temp)
            }
        })

        var diagnostic =[];

        $('#prescription-modal #prescription-diagnostic-selected > .pres-diagnostic').each(function(){
            diagnostic.push($(this).find('.pres-diagnostic-id').val());
        });

        //
        var data ={ "token":_token,
            PrescriptionID:pres_id,
            appointment_custom_appointment:appointment,
            validate_pin:validate_pin,
            validate_doctor:validate_doctor,
            diagnostic_list_custom_diagnostic:diagnostic,

            //prescript para
            data_pres:data_pres,
            //pres line para
            data_pres_line:data_pres_line

        }

        //console.log(data); return;
        //////////////

        var link3 =link._apt_add_update_prescription;
        var method_type ='POST'

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": method_type,
            data:data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                $('#history-prescription #tbl-prescription-content >tbody').find('.bg-l-b').removeClass('bg-l-b')
                if(res.Error==""){
                    if(pres_id =='' && res.PrescriptionID !=''){
                        pres_id = res.PrescriptionID;
                        $('#prescription-modal #prescription-id').val(pres_id);
                        $('#prescription-modal #div-save-prescription').html('');

                        if($('#prescription-modal #modal-prescription-general-status').val() !='Complete'){
                            $('#prescription-modal #div-save-prescription').html('<button class="btn btn-danger w100" id="update-prescription">Lưu</button>');

                            //bind save event
                            $('#prescription-modal #update-prescription').unbind('click').bind('click',function(){
                                $('#prescription-modal #update-prescription').prop("disabled",true)
                                h_pres.save_update_prescription(pres_id,'','');
                            });
                        }

                        //append row to history
                        var d = new Date();
                        var CreatedDate = d.getFullYear()+'-'+ d.getMonth() +'-'+ d.getDate()+', '+ d.getHours()+':'+ d.getMinutes()

                        var pres_paragram = {
                            PrescriptionID:pres_id ,
                            CreatedDate: CreatedDate,
                            status_option_status: status,
                            notes_text: notes,
                            asg_d_display_name:$('#prescription-modal #prescription-doctor-assigned-name').text(),
                            pres_line:medication_name
                        }

                        var tr = h_pres.getcontent_tr(pres_paragram,'new')


                        if($('#history-prescription #tbl-prescription-content > tbody tr').length >0){
                            $(tr).insertBefore($('#history-prescription #tbl-prescription-content > tbody >tr:first'))
                        }else{
                            $('#history-prescription #tbl-prescription-content > tbody').append(tr)
                        }

                    }else if(pres_id !='' && me !=''){
                        if(notes !=''){
                            me.closest('tr').find('.instruction-open').removeClass('open-modal-pres');
                            me.closest('tr').find('.instruction-open').removeClass('color_blue');
                            me.closest('tr').find('.instruction-open').text(notes);
                        }else{
                            if(!me.closest('tr').find('.instruction-open').hasClass('open-modal-pres')){
                                me.closest('tr').find('.instruction-open').addClass('open-modal-pres');
                            }

                            if(!me.closest('tr').find('.instruction-open').hasClass('color_blue')){
                                me.closest('tr').find('.instruction-open').addClass('color_blue');
                            }

                            me.closest('tr').find('.instruction-open').text('Thêm ghi chú');

                        }

                        me.closest('tr').find('.pres-general-status option[value="'+status+'"]').prop("selected","selected")

                        me.closest('tr').find('.medication_name').html(medication_name_text)
                        if($('#prescription-modal #modal-prescription-general-status').val() =='Complete'){
                            me.closest('tr').find('.pres-general-status').prop("disabled",true)
                            me.closest('tr').addClass('bg-l-r')
                            me.closest('tr').find('.instruction-open').removeClass('open-modal-pres');
                        }else{
                            me.closest('tr').addClass('bg-l-b')
                        }

                    }else if(pres_id !='' && me==''){
                        $('#history-prescription #tbl-prescription-content >tbody tr:first').remove();
                        //append row to history
                        var d = new Date();
                        var CreatedDate = d.getFullYear()+'-'+ d.getMonth() +'-'+ d.getDate()+', '+ d.getHours()+':'+ d.getMinutes()


                        var pres_paragram = {
                            PrescriptionID:pres_id ,
                            CreatedDate: CreatedDate,
                            status_option_status: status,
                            notes_text: notes,
                            asg_d_display_name:$('#prescription-modal #prescription-doctor-assigned-name').text(),
                            pres_line:medication_name
                        }

                        var tr = h_pres.getcontent_tr(pres_paragram,'new')
                        if($('#history-prescription #tbl-prescription-content > tbody tr').length >0){
                            $(tr).insertBefore($('#history-prescription #tbl-prescription-content > tbody >tr:first'))
                        }else{
                            $('#history-prescription #tbl-prescription-content > tbody').append(tr)
                        }

                    }
                    //send email
                   // pdf_ex.prototype.print_prescription('is_send_email')

                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');

                        /*if($('#prescription-modal #prescription-validation').css('display') == 'none')
                        {
                            $('#prescription-modal #pres-pdf-hide').css({"display":''})
                         $('#prescription-modal #pres-print-hide').css({"display":''})
                        }*/

                        if($('#prescription-modal #modal-prescription-general-status').val() !='Complete'){
                            $('#prescription-modal #update-prescription').prop('disabled',false);
                        }else{
                            $('#prescription-modal #div-save-prescription').html('');
                            $('#prescription-modal .class-disabled').prop("disabled",true);
                            $('#prescription-modal .read-only').prop("readonly",true);
                        }

                        //update
                        if(res.signature_url_text !='' && res.signature_url_text !=null){
                            $('#prescription-modal #pres-pdf-hide').css({"display":""})
                            $('#prescription-modal #pres-print-hide').css({"display":''})
                            $('#prescription-modal #prescription-validated-succ').css({"display":''})
                            $('#prescription-modal #prescription-validation').css({"display":"none"})

                            $('#modal-pres-validate #pres-modal-signature_url_text').val(res.signature_url_text);

                            $('#prescription-modal .display-sig-area').css({"display":""})
                            $('#prescription-modal #display-sig').attr("src",res.signature_url_display)
                            //send mail
                            var PrescriptionID= $('#prescription-modal #prescription-id').val()
                            pdf_ex.prototype.export_prescription(PrescriptionID,'is_send_email');
                        }

                    },3000);
                }
                //--------------------------------
            }

        });

    },

    reset_pres_modal:function(){
        $('#prescription-modal #prescription-id').val('');
        $('#prescription-modal #prescription-doctor-id').val('');
        $('#prescription-modal #prescription-doctor-assigned-name').text('');
        $('#prescription-modal #prescription-appt-id').val('');
        $('#prescription-modal #prescription-diagnostic-code').val('').trigger('change');
        $('#prescription-modal #prescription-diagnostic-name').val('').trigger('change');
        $('#prescription-modal #prescription-diagnostic-selected').html('');
        $('#prescription-modal #prescription-location').val('').trigger('change');
        //$('#prescription-modal #modal-prescription-order-request-type').val('');
        $('#prescription-modal #modal-prescription-general-status').html(generalStatusOption);
        $('#prescription-modal #modal-prescription-order-request-type').html(orderRequestType);

        $('#prescription-modal #prescription-instructions').val('')
        //$('#prescription-modal #modal-prescription-general-status').val('');
        $('#prescription-modal #prescription-Notes').val('')
        $('#prescription-modal #prescription-completed-by').val('').trigger('change');
        $('#prescription-modal #modal-prescription-date-completed').val('')
        $('#prescription-modal #modal-prescription-time-completed').val('')

        $('#prescription-modal #prescription-delivered-by').val('').trigger('change');
        $('#prescription-modal #modal-prescription-delivered-date').val('')
        $('#prescription-modal #modal-prescription-delivered-time').val('')

        $('#prescription-modal #prescription-medication-list').html('');

        $('#prescription-modal #div-save-prescription').html('')
        $('#prescription-modal #pres-pdf-hide').css({"display":"none"})
        $('#prescription-modal #pres-print-hide').css({"display":'none'})
        $('#prescription-modal #prescription-validation').css({"display":"none"})
        $('#prescription-modal #prescription-validated-succ').css({"display":'none'})


        $('#prescription-modal .class-disabled').prop("disabled",false);
        $('#prescription-modal .read-only').prop("readonly",false);
        $('#prescription-modal .display-sig-area').css({"display":'none'})


    },
    //
    //  SQL


    updatePrescription_status_sql:function(UniqueID,data){
        //console.log("test");
        var link3 =link._appointmentUp_New_Prescription_sql;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token":_token,UniqueID:UniqueID,data_post:data},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);

                //
            }
        });
    }
    //
}
var h_pres = new history_prescription();
$(function(){
    h_pres.init();
});