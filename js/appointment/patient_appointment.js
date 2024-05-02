
function patient_appointment(){}
patient_appointment.NAME         = "patient_appointment";
patient_appointment.VERSION      = "1.2";
patient_appointment.DESCRIPTION  = "Class patient_appointment";

patient_appointment.prototype.constructor = patient_appointment;
patient_appointment.prototype = {
    init: function(){
        var id = getUrlParameter1('id');
        if(id==undefined) return;

        $('#patient-content #Type').html(appointment_types);
        $('#patient-content #Disposition').html(apt_disposition);
        $('#patient-content #ChiefComplaint').html(chief_complain);

        p_appt.patient_get_appointment_id(id);

        //get notes
        modal_note.prototype.get_note_by_attachmentto_attchmentID()
        //bind evend
        $('#patient-content #add-note').unbind('click').bind('click',function(){
            $('#note-modal').modal('show');
            modal_note.prototype.reset_modal_note('')
            modal_note.prototype.init_note('')
        });

        $('#patient-content #Notes-history').on('click','.edit',function(){
            $('#note-modal').modal('show');
            var note_id =$(this).find('.note-id').val()
            modal_note.prototype.reset_modal_note(note_id)
            modal_note.prototype.init_note(note_id,$(this))
        });

        $('#patient-content').on('click','.pay-now',function(){
            modal_inv.prototype.reset_inv_modal();

            var patient_id = $(this).closest('.row-inv').find('.patient_user').val();
            var appt_id = $(this).closest('.row-inv').find('.Appt_id').val();
            var inv_id = $(this).closest('.row-inv').find('.invoice_custom_invoice').val();

            var inv_name = $(this).closest('.row-inv').find('.inv_text').text();
            var inv_balance = $(this).closest('.row-inv').find('.balance_number').val();

            var inv_balance_text =common_f.prototype.convert_str_thousand(inv_balance.toString()) + " VND"
            var inv_note = 'Thanh toán cho Hóa đơn: '+inv_name
            $('#modal-invoice-patient-id').val(patient_id);
            $('#modal-invoice-appt-id').val(appt_id);
            $('#modal-invoice-id').val(inv_id);

            $('#modal-inv-text').text(inv_name);
            $('#modal-balance-text').text(inv_balance_text);
            $('#modal-inv-balance').val(inv_balance);
            $('#modal-inv-notes').val(inv_note)

            $('#invoice-modal').modal('show')

            var me =$(this)

            $('#invoice-modal #save-payment').unbind('click').bind('click',function(){
                modal_inv.prototype.payment_now(me,'#patient-content #appt-payment-detail')
            })

        });

        $("#patient-content #clinical_show").unbind("click").bind("click",function(){
            modal_clinical.prototype.get_vital_apptID(id);
            $('#clinical-modal-center #modal-clinical-save').remove()
            $('#clinical-modal-center').modal('show')
            getDiagnosticCodeSelect2('#clinical-modal-center #diagnostic-code','#clinical-modal-center .modal-body');
            //getDiagnosticNaneSelect2('#clinical-modal-center #diagnostic-name','#clinical-modal-center .modal-body');

        })

        $('#appt-lab-detail').on('click','.print-lab',function(){
            var lab_id = $(this).closest('.lab-row').find('.lab_id').val();
            pdf_ex.prototype.print_lab(lab_id);
        })

        $('#appt-lab-detail').on('click','.download-lab',function(){
            var lab_id = $(this).closest('.lab-row').find('.lab_id').val();
            pdf_ex.prototype.export_lab(lab_id);
        })

        $('#tbl-pres').on('click','.print-pres',function(){
            var pres_id = $(this).closest('.pres-row').find('.pres-id').val();
            pdf_ex.prototype.print_prescription(pres_id);
        })

        $('#tbl-pres').on('click','.download-pres',function(){
            var pres_id = $(this).closest('.pres-row').find('.pres-id').val();
            pdf_ex.prototype.export_prescription(pres_id);
        })

    },

    patient_get_appointment_id: function(id){
        //console.log("111111111111");
        //get appointment
        var link1 =link._apt_by_aptid_patient;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link1,
            "method": "post",
            dataType: 'json',
            data: {token:_token,Appt_id:id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
               //console.log(res);
                if(res.Error !='') return;
                var data=res.apt;

                var date='';
                var hour_t='';
                if(data.apt_date_date!=null){
                    var d = new Date(data.apt_date_date);
                    var date_t = d.toLocaleString();
                    var date_arr = date_t.split(',');
                    console.log(date_arr);
                    var date1_arr = date_arr[0].split('/');
                     date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);

                     hour_t = date_arr[1].split(':');
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
                $('#Disposition').find("option[value='"+data.disposition_option_apt_disposition+"']").attr("selected", "selected");
                $('#ChiefComplaint').find("option[value='"+data.chief_complaint_option_chief_complaint+"']").attr("selected", "selected");
                $('#Description').val(data.description_text);


                $('#patient-id').val(data.patient_user)
                $('#appointment-id').val(id);
                //call user
                var img ='';
                if(data.u_p_avatar_image !=null && data.u_p_avatar_image !=''){
                    img ='<img src="'+data.u_p_avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
                }

                var age ='';
                var date_t ='';
                var d =''
                if(data.u_p_birth_date_date !=null){
                    date_t =new Date(data.u_p_birth_date_date);

                    date_t=date_t.toLocaleString();
                    //console.log(date_t);
                    date_t=date_t.split(',');
                     d = date_t[0];
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

                $('#user-image').append(img);
                $('#user-name').html(name);
                $('#user-year').html(d);
                $('#user-age').html(age);
                $('#user-phone').html(phone);
                $('#patient-name').val(data.display_name_text);

                var address='';
                if(data.u_p_PatientAddress!=null){
                    if(data.u_p_PatientAddress!=null){
                        address =data.u_p_PatientAddress
                    }
                }

                $('#patient-address').val(address);
                //call user
               // patient_appointment.prototype.get_user_id(data.patient_user,'user',patient_appointment.prototype.display_user);
                //call doctor assiged
                if(data.assigned_doctor_user !=null){
                    $('#patient-content #has-doctor').css({"display":""})
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

                    common_f.prototype.get_user_metas(data.assigned_doctor_user,"#patient-content #doctor-degree","#patient-content #doctor-special","#patient-content #doctor-university")
                }
                //get invoice invoice_custom_invoice
                //date
                var create_date_inv= data.inv_CreatedDate;

                var inv_text =data.inv_text
                var inv_note =data.inv_notes_text
                var inv_total = common_f.prototype.convert_str_thousand(data.invoice_total_number.toString()) + " VND"
                var inv_balance = common_f.prototype.convert_str_thousand(data.balance_number.toString()) + " VND"

                var inv_paid_date=''
                if(parseFloat(data.balance_number) <=0){
                    var date_temp = data.paid_date_date;

                    inv_paid_date='<span class="color_green">Đã thanh toán ('+date_temp+')</span>'
                }

                var inv_btn =''
                var pay_now=''
                if(parseFloat(data.balance_number)>0){
                    inv_btn = '<a href="invoice.php?id='+data.invoice_custom_invoice+'"><button class="btn btn-danger"><strong>Thanh Toán</strong></button></a>'
                    pay_now = '<button class="btn btn-danger pay-now btn-sm"><strong>Pay now</strong></button>'
                }

                var row ='<div class="row middle-text p-tb5 row-inv">' +
                    '<input type="hidden" class="invoice_custom_invoice" value="'+data.invoice_custom_invoice+'">' +
                    '<input type="hidden" class="Appt_id" value="'+data.Appt_id+'">' +
                    '<input type="hidden" class="patient_user" value="'+data.patient_user+'">' +
                    '<input type="hidden" class="balance_number" value="'+data.balance_number+'">' +
                    '<div class="col-2">'+create_date_inv+'</div>'+
                    '<div class="col-1"><a href="invoice.php?id='+data.invoice_custom_invoice+'"><span class="inv_text">'+inv_text+'</span></a></div>'+
                    '<div class="col-2">'+inv_note+'</div>'+
                    '<div class="col-2">'+inv_total+'</div>'+
                    '<div class="col-2 inv-balance">'+inv_balance+'</div>'+
                    '<div class="col-1 inv-paid-date">'+inv_paid_date+'</div>'+
                    '<div class="col-2 text-right">'+pay_now+'</div>'+
                    '</div>'


                $('#appt-inv-id1').html(inv_btn)
                $('#appt-invoice-detail').html(row)

                //get lab
                var row ='<div class="row p-tb5 m-rl tbl_border_bottom">' +
                    '<div class="col-1 padding_r middle-text  light-blue f-bold">Xét nghiệm</div>' +
                    '<div class="col-3 padding_r middle-text light-blue f-bold">Tên Xét nghiệm</div>' +
                    '<div class="col-3 padding_r middle-text light-blue f-bold">Nơi xét nghiệm</div>' +
                    '<div class="col-3 padding_r middle-text light-blue f-bold">Kết quả</div>' +
                    '<div class="col-2 middle-text light-blue f-bold">Trạng thái</div>' +
                    '</div>'
                if(data.lab.length > 0){
                    $('#appt-lab-detail').html("");
                    $('#appt-lab').css({'display':''})

                    var length_lab = data.lab.length;
                    var j =0;

                    data.lab.forEach(function(item){
                        //console.log(item);
                        j++;
                        var border_button ='';
                        if(j<length_lab){
                            border_button ='border-b';
                        }
                        var product_name=''
                        var i=0;
                        var length=item.product_list_custom_product.length

                        if(item.product_list_custom_product.length > 0 ){
                            item.product_list_custom_product.forEach(function(product){
                                i++;
                                var  b_button='';
                                if(i<length) b_button='border-b-c111';
                                var pr_name=''
                                if(product.name_text !=null) pr_name=product.name_text

                                product_name +='<div class="row '+b_button+'">'+pr_name+'</div> ';
                            })
                        }

                        var local_name='';
                        if(item.location_name_text !=null) local_name = item.location_name_text
                        var lab_result='';
                        if(item.results_text !=null) lab_result = item.results_text
                        var doctor_name='';
                        if(item.orderedBy_display_name !=null) doctor_name = item.orderedBy_display_name
                        var status = generalStatus[item.status_option_status]

                        var div_sig=''
                        var div_print ='';
                        if(item.signature_url_text !='' && item.signature_url_text !=null){
                            div_print = '<div class="col-12 middle-text m-t10"><i class="fa fa-print print-lab  color_green" style="cursor: pointer" title="In lab"></i></div> ' +
                                        '<div class="col-12 middle-text m-t10"><i class="fa fa-download download-lab color6676f2" style="cursor: pointer" title="Xuất file"></i></div>'

                            div_sig = '<div class="row col-12 p-tb5 m-t10">' +
                                '<div class="col-9 padding_rl middle-text "></div>' +
                                '<div class="col-3 middle-text f-bold">' +
                                '<img style="height: 40px" src="'+item.signature_url_display+'">' +
                                '</div>' +
                                '</div>'
                        }

                        var date_temp = item.CreatedDate.split(" ");
                        date_temp =date_temp[0];
                        date_temp = date_temp.split("-");
                        var date = "Ngày "+date_temp[2]+'-'+date_temp[1]+'-'+date_temp[0]

                         row +='<div class=" '+border_button+'">' +
                                 '<div class="row lab-row p-tb5">' +
                                    '<input type="hidden" class="lab_id" value="'+item.Lab_id+'">' +
                                    '<div class="col-1 padding_rl middle-text">' +
                                       '<div class="row" >' +
                                            '<div class="col-12 middle-text m-t10 light-blue f-bold">'+j+'</div>' +div_print+
                                       '</div>'+
                                    '</div>' +
                                    '<div class="col-3 padding_r ">'+product_name+'</div>' +
                                    '<div class="col-3 padding_r">'+local_name+'</div>' +
                                    '<div class="col-3 padding_r">'+lab_result+'</div>' +
                                    '<div class="col-2 middle-text">'+status+'</div>' +
                                '</div>' +
                                '<div class="row col-12 p-tb5">' +
                                     '<div class="col-9 padding_rl middle-text"></div>' +
                                     '<div class="col-3 middle-text border-t-dash p-t5"> '+date+'</div>' +
                                 '</div>' +
                                 '<div class="row col-12">' +
                                     '<div class="col-9 padding_rl middle-text "></div>' +
                                     '<div class="col-3 middle-text">Bác sĩ chỉ định</div>' +
                                 '</div>' + div_sig +
                                 '<div class="row col-12 p-tb5 m-t10">' +
                                     '<div class="col-9 padding_rl middle-text "></div>' +
                                     '<div class="col-3 middle-text f-bold">'+doctor_name+'</div>' +
                                 '</div>' +
                          '</div>'
                        /*
                        var last_row = $('#appt-lab-detail >.lab-row').last()

                        last_row.find('.lab-status').find("option[value='"+item.status_option_status+"']").attr("selected", "selected");
                        last_row.find('.lab-status').attr('disabled','disabled')
                        */
                    })

                    $('#appt-lab-detail').append(row)
                }
                //get prescription
                if(data.pres.length > 0){
                    $('#appt-presctiption').css({'display':''})
                    $('#tbl-pres tbody').html('');
                    var i=0;
                    var l_pres=data.pres.length;
                    var row = ''
                    data.pres.forEach(function(item){
                        i++;
                        var k= i;
                        var div_print =''
                        var div_pres_sig=''
                        if(item.signature_url_text !='' && item.signature_url_text !=null){
                            div_print =  "<div class='row text-center'>" +
                                "<div class='col-12'>"+k+"</div>" +
                                "<i class='col-12 m-t10 fa fa-print print-pres  color_green' style='cursor:pointer' title='In'></i>" +
                                "<i class='col-12 m-t10 fa fa-download download-pres color6676f2' style='cursor: pointer' title='Xuất file'></i>" +
                                "</div>"

                            div_pres_sig = "<div class='col-12 m-t5'>" +
                                "<img style='height: 40px' src='"+item.signature_url_display+"'>" +
                                "</div>"

                        }

                        if(item.pres_line.length > 0){
                            var class1 = "tbl_border_top"
                            item.pres_line.forEach(function(presline){
                                var instructions_text = ''
                                if(presline.instructions_text !=null) instructions_text = presline.instructions_text

                                row +="<tr class='pres-row tbl_border_l tbl_border_r "+class1+"' >" +
                                    "<input type='hidden' class='pres-id' value='"+item.PrescriptionID+"'>"+
                                    "<td class='tbl_border_r'>"+div_print+"</td>" +
                                    "<td class='text-left'><strong>"+presline.m_name_text+"("+presline.m_active_ingredients_text+")</strong></td>" +
                                    "<td>"+presline.morning_amount_number+"</td>" +
                                    "<td>"+presline.noon_amount_number+"</td>" +
                                    "<td>"+presline.afternoon_amount_number+"</td>" +
                                    "<td>"+presline.evening_amount_number+"</td>" +
                                    "<td>"+presline.m_usage_text+"</td>" +
                                    "<td class='tbl_border_r'>"+presline.total_number +" "+ presline.m_unit_text+"</td>" +
                                "</tr>"
                                class1 ="";
                                k=''
                                div_print = ''
                                if(instructions_text !=""){
                                    row +="<tr class='tbl_border_l tbl_border_r'>" +
                                        "<td class='tbl_border_r'></td>" +
                                        "<td class='tbl_border_r text-left color-alert' colspan='7'><strong>Ghi chú:</strong> "+instructions_text+"</td>" +
                                        "</tr>"
                                }

                            })

                            if(item.notes_text !=null && item.notes_text !=""){
                                row +="<tr class='tbl_border_l tbl_border_r'>" +
                                    "<td class='tbl_border_r'></td>" +
                                    "<td class='tbl_border_r text-left color-alert' colspan='7'><strong>Lưu ý khác:</strong> "+item.notes_text +"</td>" +
                                    "</tr>"
                            }

                            var date_temp = item.CreatedDate.split(" ");
                            date_temp =date_temp[0];
                            date_temp = date_temp.split("-");
                            var date = "Ngày "+date_temp[2]+'-'+date_temp[1]+'-'+date_temp[0]

                            var doctor_name='';
                            if(item.orderedBy_display_name !=null) doctor_name = item.orderedBy_display_name

                            row +="<tr class='tbl_border_l tbl_border_r'>" +
                                "<td class='tbl_border_r'></td>" +
                                "<td  colspan='4'></td>" +
                                "<td class='tbl_border_r text-center' colspan='3'>" +
                                    "<div class='row text-center'>" +
                                        "<div class='col-12'>"+date+"</div>" +
                                        "<div class='col-12 m-t5'>Bác sĩ điều trị</div>" +div_pres_sig+
                                         "<div class='col-12 m-t10 f-bold'>"+doctor_name+"</div>" +
                                    "</div>" +
                                "</td>" +
                                "</tr>"

                        }

                    })

                    $('#tbl-pres tbody').append(row);
                }
                //payment
                common_f.prototype.display_payment(data.payment,'#patient-content #appt-payment-detail')
                //get history
                history_detail.prototype.get_history(data.patient_user);
                //get docs

            }
        });
    },


}

