var host, host2;

String.prototype.includes = function (string) {
    return this.indexOf(string) >= 0;
}

String.prototype.upperCaseFirst = function () {
    if(!this.split('')[0]) return '';
    return this.split('')[0].toUpperCase() + this.substring(1);
}

Storage.prototype.setItemValue = function (key, value) {
    value = encodeURIComponent(value).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    });
    localStorage.setItem(btoa(key), btoa(value));
}


Storage.prototype.getItemValue = function (key) {
    if (localStorage.getItem(btoa(key))) {
        return atob(localStorage.getItem(btoa(key)));
    } else {
        return null;
    }
}

if (document.location.href.includes('localhost/')) {
    host = 'http://localhost/bacsi-api/';
    //host = 'https://api.dev.at1ts.com/';
   host2 = 'http://localhost/bacsi/public/';
    // debugState = true;
} else if (document.location.href.includes('dev.at1ts.com')) {
    host = 'https://api.dev.at1ts.com/';
    host2 = 'https://dev.at1ts.com/';
}
    //swagger_host='https://xinchaobacsi.vn/api/1.1/';
    swagger_host='https://xinchaobacsi.vn/version-domain-deploy/api/1.1/';

var link = {
    /**-----------create user----------------------------*/
    _saveSession: host2 + 'php/request.setSession.php',
    _clearSession: host2 + 'php/clearSession.php',
    exit_page: host2 +'php/exit_page.php',

    /*----------------PDF---------------------------------*/
    _inv_pdf: host2 + 'php/inv_pdf.php',
    _lab_pdf: host2 + 'php/lab_pdf.php',
    _pres_pdf: host2 + 'php/pres_pdf.php',
    _delete_pdf: host2 + 'php/delete_file.php',
    medical_apt_card_pdf: host2 + 'php/medical_apt_card_pdf.php',
    _note_pdf: host2 + 'php/note_pdf.php',
    _apt_report: host2 + 'php/apt_report.php',
    _user_report: host2 + 'php/user_report.php',
    _inv_report: host2 + 'php/inv_report.php',
    _payment_report: host2 +'php/payment_report.php',

    _vital_pdf_print: host2 +'php/vital_pdf.php',

    _print_lab_by_id:host +'_print_lab_by_id.php',
    _print_pres_by_id: host +'_print_pres_by_id.php',
    _print_inv_by_id: host +'_print_inv_by_id.php',
    _print_note_by_id: host + '_print_note_by_id.php',
    _print_medical_apt_card: host +'_print_medical_apt_card.php',
    _print_apt_report: host + '_print_apt_report.php',
    _print_users_report: host + '_print_users_report.php',
    _print_inv_report: host + '_print_inv_report.php',
    __print_payment_report: host +'_print_payment_report.php',

    _paymentList: host + '_paymentList.php',


    //////////////////////SQL//////////////////////////////////
    /*----------------import---------------------------------*/
    _import_user: host + '_import_user.php',
    //------------------login------------------
    _register: host + '_register.php',
    _login: host + '_login.php',
    _requied_reset: host + '_requied_reset.php',
    _confirmed_reset:host +'_confirmed_reset.php',

    _relativeAddNew: host +'_relativeAddNew.php',

    _options: host +'_options.php',

    //------------------diadnostic------------------
    _diagnostic_code:host + '_diagnostic_code.php',
    _diagnostics:host +'_diagnostics.php ',
    _diagnostic_apt:host +'_diagnostic_apt.php',
    //------------------profile------------------
    _profile_update:host + '_dashboardUpdateProfile.php',
    _dashboardAddAppointment_sql: host +'_dashboardAddAppointment.php',
    _appointmentUpdateApoinment: host +'_appointmentUpdateApoinment.php',

    //------------------Appointment------------------
    _apt_new_apt_history: host +'_apt_new_apt_history.php',
    _apt_by_aptid: host +'_apt_by_aptid.php',
    _apt_by_aptid_patient: host +'_apt_by_aptid_patient.php',

    //------------------lab------------------
    _apt_up_new_lab:host + '_apt_up_new_lab.php',
    _lab_by_id:host +'_lab_by_id.php',

    //------------------prescription------------------
    _apt_add_update_prescription:host +'_apt_add_update_prescription.php',
    _appointmentUp_New_Prescription_sql:host +'_appointmentUp_New_Prescription.php',
    _appointment_up_status_sql:host +'_appointment_up_status.php',

    _pres_by_id:host +'_pres_by_id.php',

    //------------------history------------------
    _dasboardSaveUpdateHistory_sql:host +'_dasboardSaveUpdateHistory.php',

    _history_user:host +'_history_user.php',
    _history_apts:host +'_history_apts.php',
    _history_labs:host +'_history_labs.php',
    _history_pres:host +'_history_pres.php',
    _history_invs:host +'_history_invs.php',
    _history_notes:host +'_history_notes.php',
    _history_doc:host +'_history_doc.php',

    //------------------Invoice------------------
    _inv_by_id:host +'_inv_by_id.php',
    _invline_new_update:host +'_invline_new_update.php',
    _payment_new_update:host +'_payment_new_update.php',
    _check_package_code:host +'_check_package_code.php',
    _invline_update_qty:host +'_invline_update_qty.php',
    _invline_update_price:host +'_invline_update_price.php',
    _ivnLine_delete_invline_id:host +'_ivnLine_delete_invline_id.php',

    //------------------note------------------
    _noteAddOrUpdate_sql:host +'_noteAddOrUpdate.php',
    _notes:host +'_notes.php',

    //------------------usermeta------------------
    _usermetaNewUpdate_sql:host +'_usermetaNewUpdate.php',

    //------------------location------------------
    _locationAdd_Update:host +'_locationAdd_Update.php',
    _locations:host +'_locations.php',
    _locations_by_id:host +'_locations_by_id.php',

    //------------------product------------------
    _product_for_invline:host +'_product_for_invline.php',
    _products:host +'_products.php',
    _products_sku:host +'_products_sku.php',
    //------------------user------------------
    _dependent:host +'_dependent.php',
    //------------------vitals------------------
    _vitals_user:host +'_vitals_user.php',
    _vitals_id:host +'_vitals_id.php',
    _appointmentNewUpdateVital_basic_sql:host +'_appointmentNewUpdateVital_basic.php',
    _appointmentNewUpdateVital_sql:host +'_appointmentNewUpdateVital.php',

    //------------------user------------------
    _user_by_id:host +'_user_by_id.php',
    _user_meta:host +'_user_meta.php',
    _users_by_type:host +'_users_by_type.php',
    _user_meta_approved:host +'_user_meta_approved.php',
    _users_by_pin:host +'_users_by_pin.php',
    _users:host +'_users.php',
    //------------------Medication------------------
    _medications:host +'_medications.php',

    //-------------------upload file --------------
    _load_file:host +'_load_file.php',

    //-------------------email --------------
    _email_invite:host +'_email_invite.php',
    _email_notifcation:host +'_email_notifcation.php',
    _send_email:host +'_send_email.php',
    _onesignal_add_device:host +'_onesignal_add_device.php',
};

    var _token = 'd2FycmFudHlfYnJhbmRvbl9wcm9qZWN0';
    localStorage.setItemValue('token', _token);


var getUrlParameter1 = function getUrlParameter1(sParam) {
    var sPageURL = document.location.href.substring(document.location.href.indexOf('?') + 1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            var tmp = sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            if (tmp == '0' || tmp == '' || tmp == 'undefined') return undefined;
            else return tmp;
        }
    }
}

var noBlank =function(str){
    var myArr = str.split(" ");
    var value='';
    for(i=0; i<myArr.length;i++){
        value +=myArr[i]
    }

    return value;
}

var selectBox=function(arr,str){
    var option = "";
    for (let x in arr) {
        if(x==str){
            option +='<option value="'+x+'" selected="selected">'+arr[x]+'</option>'
        }else{
            option +='<option value="'+x+'">'+arr[x]+'</option>'
        }
    }

    return option;
}

var find_name=function(arr,str){
    var option_name = "";

    for (let x in arr) {
        if(x==str){
            option_name = arr[x];
            break;
        }
    }

    return option_name;
}

var convert_date_hour =function(dateStr){
    var d = new Date(dateStr);
    var date_t = d.toLocaleString();
    var date_arr = date_t.split(',');
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

    return [date,hour]
}

var get_str_date =function(obj,str){
    let createDate=[];
    for (let x in obj) {
        if(x==str){
            createDate =convert_date_hour(obj[x]);
            break;
        }
    }

    return createDate;
}


var getDiagnosticNaneSelect2=function(element,modal_id){
    //'?limit=100&cursor=0'
    var link3 =link._diagnostics;

    $(element).select2({
        dropdownParent: $(modal_id),
        placeholder: 'Nhập tên hoặc mã code chuẩn đoán để tìm kiếm',
        minimumInputLength: 1,
        language: {
            inputTooShort: function () {
                return 'Nhập tên chuẩn đoán';
            },
        },
        ajax: {
            "async": true,
            "crossDomain": true,
            url: link3,
            type: 'POST',
            dataType: 'json',
            delay: 300,
            data: function (params) {
                var _data = {token:_token,text_search:params.term}
                return _data;
            },
            processResults: function (data, params) {
                if (data && data.diags) {
                    data = data.diags;
                }

                data1 = $.map(data, function (obj) {
                    return {
                        text: '['+obj.code_text+']' +obj.name_text,
                        code:obj.code_text,
                        name1:obj.name_text
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
                '<div class="">' + item.text +
                '</div>' +
                '</div>';
        },
        templateSelection: function (item) {
            $(element).find('option').attr('code', item.code);
            $(element).find('option').attr('name1', item.name1);
            if (item.text) return item.text;
            else return item.code;
        }
    });
}

var getDiagnosticCodeSelect2=function(element,modal_id){
    var link3 =link._diagnostics;

    $(element).select2({
        dropdownParent: $(modal_id),
        placeholder: 'Nhập tên hoặc mã code để tìm kiếm',
        minimumInputLength: 1,
        language: {
            inputTooShort: function () {
                return 'Nhập mã chuẩn đoán';
            }
        },
        ajax: {
            "async": true,
            "crossDomain": true,
            url: link3,
            type: 'post',
            dataType: 'json',
            delay: 300,
            data: function (params) {
                var _data = {token:_token,text_search:params.term}
                return _data;
            },
            processResults: function (data, params) {
                if (data && data.diags) {
                    data = data.diags;
                }

                data1 = $.map(data, function (obj) {
                    return {
                        text: '['+obj.code_text+']' +obj.name_text,
                        code:obj.code_text,
                        name1:obj.name_text,
                        id:obj.code_text
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
                '<div class="">' + item.text +
                '</div>' +
                '</div>';
        },
        templateSelection: function (item) {
            $(element).find('option').attr('code', item.code);
            $(element).find('option').attr('name1', item.name1);
            if (item.code) return item.code;
            else return item.id;
        }
    });
}

var getLocationService=function(element,modal_id,locationOption,place){
    var link3 =link._locations;
    //console.log(modal_id);
    $(element).select2({
        dropdownParent: $(modal_id),
        placeholder: place,
        minimumInputLength: 1,
        language: {
            inputTooShort: function () {
                return place;
            },
        },
        ajax: {
            "async": true,
            "crossDomain": true,
            url: link3,
            type: 'POST',
            dataType: 'json',
            delay: 300,
           // contentType: 'application/json',
            data: function (params) {
                var _data = {text_search:params.term,token:_token}
                return _data;
            },
            processResults: function (data, params) {
                if (data && data.locations) {
                    data = data.locations;
                }

                data1 = $.map(data, function (obj) {
                    return {
                        text: obj.location_name_text,
                        id: obj.location_id,
                        address:obj.address_geographic_address
                    };
                });

                return { results: data1 }

            },
            cache: true
        },
        escapeMarkup: function (markup) { return markup; },
        templateResult: function (item) {

            return '<div class="padding-5">' +
                '<div class="col-12">' + item.text + '</div>' +
                '<div class="col-12">' + item.address + '</div>' +
                '</div>';
        },
        templateSelection: function (item, container) {
            $(locationOption).attr('address', item.address);
            if (item.text) return item.text || item.address;
            else return item.id;
        }
    })
}

var getCompletedBy=function(elememt,modal_id,text_hold,type){
    var link3 =link._users_by_type;

    $(elememt).select2({
        dropdownParent: $(modal_id),
        placeholder: text_hold,
        minimumInputLength: 1,
        language: {
            inputTooShort: function () {
                return text_hold;
            },
        },
        ajax: {
            "async": true,
            "crossDomain": true,
            url: link3,
            type: 'post',
            dataType: 'json',
            delay: 300,
            data: function (params) {
                var _data = {token:_token,user_type_option_user_type:type,
                    text_search:params.term}
                return _data;
            },
            processResults: function (data, params) {
                if (data && data.users) {
                    data = data.users.results;
                }

                data1 = $.map(data, function (obj) {
                    return {
                        text: obj.display_name_text,
                        id: obj.User_id,
                        address:obj.address_geographic_address
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
                '<div class="col-12">' + item.text + '</div>' +
                '</div>';
        },
        templateSelection: function (item, container) {
            $('#lab-location option').attr('address', item.address);
            if (item.text) return item.text;
            else return item.id;
        }
    })
}


var getDiagnostic =function(Appt_id,el_diagnostic_s,type_call){

    var link3 =link._diagnostic_apt;
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": link3,
        "method": "POST",
        dataType: 'json',
        data:{token:_token,Appt_id:Appt_id},

        error : function (status,xhr,error) {
        },
        success: function (res) {
            if(res.diagnostic.length >0){
                var row ='';
                if(type_call=='prescription'){
                    res.diagnostic.forEach(function(item){
                        row +='<div class="pres-diagnostic row col-12">' +
                                '<div class="col-2"></div>' +
                                '<div class="col-1 pres-diagnostic-delete-row" style="cursor: pointer">' +
                                    '<i class="fa fa-trash color-alert"></i>' +
                                '</div>' +
                                '<div class="col-9 pres-diagnostic-row padding_l">' +
                                    '<input type="hidden" class="pres-diagnostic-id" value="'+item.code_text+'">' +
                                    '<span>['+item.code_text+']</span><span class="diagnostic-text">'+item.name_text+'</span>' +
                                '</div>' +
                            '</div>'
                    });
                } else  if(type_call=='clinical'){
                    row ='';
                    res.diagnostic.forEach(function(item){
                        row +='<div class="diagnostic row col-12 m_b10">' +
                                '<div class="col-1 diagnostic-delete-row" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div> ' +
                                '<div class="col-9 diagnostic-row padding_l">' +
                                    '<input type="hidden" class="diagnostic-id" value="'+item.code_text+'">' +
                                    '<span>['+item.code_text+']'+item.name_text+'</span>' +
                                '</div>' +
                            '</div>';
                    });
                }else  if(type_call=='lab'){
                    res.diagnostic.forEach(function(item){
                        row +='<div class="diagnostic row col-12">' +
                                '<div class="col-2"></div>' +
                                '<div class="col-1 diagnostic-delete-row" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div> ' +
                                '<div class="col-9 diagnostic-row padding_l">' +
                                     '<input type="hidden" class="diagnostic-id" value="'+item.code_text+'">' +
                                     '<span>['+item.code_text+']</span><span class="diagnostic-text">'+item.name_text+'</span>' +
                                '</div>' +
                            '</div>';
                    })

                }

                $(el_diagnostic_s).html(row)
            }
        }
    });
}


var locationSelect =function(id, el){
    var link3 =link._locations_by_id
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": link3,
        "method": "POST",
        dataType: 'json',
        data:{token:_token,location_id:id},
        //contentType: 'application/json',
        error : function (status,xhr,error) {
        },
        success: function (res) {
            var data=res.location;
            $(el).html('<option value="'+data.location_id+'" address="'+data.address_geographic_address+'">'+data.location_name_text+'</option>')
            $(el).val(data.location_id).trigger('change');
            //
        }
    });
}

var userSelect =function(User_id, el){
    var link3 =link._user_by_id
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": link3,
        "method": "POST",
        dataType: 'json',
        data: {token:_token,User_id:User_id},
        error : function (status,xhr,error) {
        },
        success: function (res) {
            var data=res.user;
            $(el).html('<option value="'+data.User_id+'">'+data.display_name_text+'</option>')
            $(el).val(data.User_id).trigger('change');
            //
        }
    });
}



var substring150 =function (str) {
    if (!str) return '';
    let sub_temp = str.substring(0, 151);
    let n_blank = sub_temp.lastIndexOf(" ");
    let n_dot = sub_temp.lastIndexOf(".");
    let n_comma = sub_temp.lastIndexOf(",");
     let n =(n_blank > n_dot)?n_blank:n_dot;
       n = (n > n_comma)?n:n_comma;
    let sub_temp1 = sub_temp.substring(0, n);

    return sub_temp1
}

//------------------------------------------------------------------------
//defined list
user_type = JSON.parse(localStorage.getItem('user_type'))
 generalStatusOption = JSON.parse(localStorage.getItem('generalStatusOption'))
 generalStatus = JSON.parse(localStorage.getItem('generalStatus'))
//console.log(generalStatus)

orderRequestType= JSON.parse(localStorage.getItem('order_request_type'))

RxUsage=  JSON.parse(localStorage.getItem('RxUsage'))
rx_usage_arr=  JSON.parse(localStorage.getItem('rx_usage_arr'))

DosageUnits=JSON.parse(localStorage.getItem('DosageUnits'))

note_type_option= JSON.parse(localStorage.getItem('note_type_option'))
note_type_option_str = JSON.parse(localStorage.getItem('note_type_option_str'))

//chief_complain
chief_complain = JSON.parse(localStorage.getItem('chief_complain'))
chieft_complain_arr = JSON.parse(localStorage.getItem('chieft_complain_arr'))
//payment_type
payment_type= JSON.parse(localStorage.getItem('payment_type'))
payment_type_arr= JSON.parse(localStorage.getItem('payment_type_arr'))

//ayment status
payment_satatus= JSON.parse(localStorage.getItem('payment_satatus'))
payment_satatus_arr= JSON.parse(localStorage.getItem('payment_satatus_arr'))


credit_card_type= JSON.parse(localStorage.getItem('credit_card_type'))
//appointment_types
appointment_types= JSON.parse(localStorage.getItem('appointment_types'))
//apt_disposition
apt_disposition= JSON.parse(localStorage.getItem('apt_disposition'))
apt_disposition_arr = JSON.parse(localStorage.getItem('apt_disposition_arr'))
//Specialties
Specialties = JSON.parse(localStorage.getItem('Specialties'))

//console.log(Specialties);
Specialties_arr = JSON.parse(localStorage.getItem('Specialties_arr'))
//Location type
Location_type_option= JSON.parse(localStorage.getItem('Location_type'))
Location_type_arr = JSON.parse(localStorage.getItem('Location_type_arr'))
//document type
document_type_option= JSON.parse(localStorage.getItem('document_type'))
document_type_arr = JSON.parse(localStorage.getItem('document_type_arr'))

payment_typeOption_text = function(v){
    switch (v){
        case "Cash":
            return 'Tiền mặt';
            break
        case "Credit Card":
            return 'Thẻ tín dụng';
            break
        case "Bank Transfer":
            return 'Chuyển khoản';
            break
        case "Package Code":
            return 'Package Code';
            break
        case "Check":
            return 'Check';
            break
        case "Insurance":
            return 'Bảo hiểm';
            break
        case "Adjustment":
            return 'Điều chỉnh';
            break
        case "Payment Later":
            return 'Thanh toán sau';
            break
        case "Other":
            return 'Khác';
            break
        default :
            return ''
    }
}