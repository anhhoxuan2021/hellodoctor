
function login(){
    this.signature_text=''
    this.user_id_login ='';
}
login.NAME         = "login";
login.VERSION      = "1.2";
login.DESCRIPTION  = "Class login";

login.prototype.constructor = login;
login.prototype = {

    init: function(){
        $('.login-modal-show').unbind('click').bind('click',function(){
            $('#login-modal').modal('show')
        })

        $("#btn-login").unbind('click').bind('click',function(e){
            login.prototype.login1(e);
        });

        $("#btn-reset").unbind('click').bind('click',function(e){
            login.prototype.reset(e);
        });

        login.prototype.get_option_set();
        login.prototype.get_product_Consultation_Medication_Package()

        //pin and signature
        $("#modal-pin-page #no-save-siganture").unbind("click").bind("click",function(){
            $("#login-hide").css({"display":""});
            $("#modal-pin-page").modal("hide")
        })

    },

    /**********************************/
    login1:function(event){
        //verify empty input
        // Fetch form to apply custom Bootstrap validation
        var form = $("#js-login")

        if (form[0].checkValidity() === false)
        {
            event.preventDefault()
            event.stopPropagation()
        }

        form.addClass('was-validated');
        var token=localStorage.getItemValue('token');
        var Email = $("#js-login #username").val();
        var Password = $("#js-login #password").val();

        //verify form empty
        if(Email.length==0 || Password.length==0){
            return
        }

        login.prototype.login_sql(Email,Password)

    },
    /**********************************/
    saveSession: function (data) {
        var _id=data.User_id;
        var email=data.Email;
        var address=data.address_geographic_address

        var avatar_image='';
        if(data.avatar_image !=null && data.avatar_image !=''){
            avatar_image=data.avatar_image
        }

        var birth_date_date='';
        if(data.birth_date_date !=null){
            birth_date_date=data.birth_date_date
        }

        var city_text='';
        if(data.city_text!=null){
            city_text=data.city_text
        }

        var country_option_nationality='';
        if(data.country_option_nationality!=null){
            country_option_nationality=data.country_option_nationality
        }

        var display_name_text='';
        if(data.display_name_text!=null){
            display_name_text=data.display_name_text
        }

        var extension_number_text='';
        if(data.extension_number_text!=null){
            extension_number_text=data.extension_number_text
        }

        var facebook_text='';
        if(data.facebook_text!=null){
            facebook_text=data.facebook_text
        }

        var family_name_text='';
        if(data.family_name_text!=null){
            family_name_text=data.family_name_text
        }

        var first_name_text='';
        if(data.first_name_text!=null){
            first_name_text=data.first_name_text
        }

        var guardian_user='';
        if(data.guardian_user!=null){
            guardian_user=data.guardian_user
        }

        var identification_number_text='';
        if(data.identification_number_text!=null){
            identification_number_text=data.identification_number_text
        }

        var identification_type_option_identification_type='';
        if(data.identification_type_option_identification_type!=null){
            identification_type_option_identification_type=data.identification_type_option_identification_type
        }

        var insurance_number_text='';
        if(data.insurance_number_text!=null){
            insurance_number_text=data.insurance_number_text
        }

        var language_text='';
        if(data.language_text!=null){
            language_text=data.language_text
        }

        var meeting_link_text='';
        if(data.meeting_link_text!=null){
            meeting_link_text=data.meeting_link_text
        }

        var middle_name_text='';
        if(data.middle_name_text!=null){
            middle_name_text=data.middle_name_text
        }

        var nationality_option_nationality='';
        if(data.nationality_option_nationality!=null){
            nationality_option_nationality=data.nationality_option_nationality
        }

        var postal_code_text='';
        if(data.postal_code_text!=null){
            postal_code_text=data.postal_code_text
        }

        var primary_phone_number_text='';
        if(data.primary_phone_number_text!=null){
            primary_phone_number_text=data.primary_phone_number_text
        }

        var province_text='';
        if(data.province_text!=null){
            province_text=data.province_text
        }

        var residential_status_option_residential_status='';
        if(data.residential_status_option_residential_status!=null){
            residential_status_option_residential_status=data.residential_status_option_residential_status
        }

        var sex_option_sex='';
        if(data.sex_option_sex!=null){
            sex_option_sex=data.sex_option_sex
        }

        var signature_image='';
        if(data.signature_image!=null){
            signature_image=data.signature_image
        }

        var signature_url_text='';
        if(data.signature_url_text!=null){
            signature_url_text=data.signature_url_text
        }

        var skype_text='';
        if(data.skype_text!=null){
            skype_text=data.skype_text
        }

        var uid_text='';
        if(data.uid_text!=null){
            uid_text=data.uid_text
        }

        var viber_text='';
        if(data.viber_text!=null){
            viber_text=data.viber_text
        }

        var zalo_text='';
        if(data.zalo_text!=null){
            zalo_text=data.zalo_text
        }

        var user_type_option_user_type='';
        if(data.user_type_option_user_type!=null){
            user_type_option_user_type=data.user_type_option_user_type
        }


        var _data ={
            address:address,email:email,
            avatar_image:avatar_image,
            birth_date_date:birth_date_date,
            city_text:city_text,
            country_option_nationality:country_option_nationality,
            display_name_text:display_name_text,
            extension_number_text:extension_number_text,
            facebook_text:facebook_text,
            family_name_text:family_name_text,
            first_name_text:first_name_text,
            identification_number_text:identification_number_text,
            identification_type_option_identification_type:identification_type_option_identification_type,
            insurance_number_text:insurance_number_text,
            language_text:language_text,
            meeting_link_text:meeting_link_text,
            middle_name_text:middle_name_text,
            nationality_option_nationality:nationality_option_nationality,
            postal_code_text:postal_code_text,
            primary_phone_number_text:primary_phone_number_text,
            province_text:province_text,
            residential_status_option_residential_status:residential_status_option_residential_status,
            sex_option_sex:sex_option_sex,skype_text:skype_text,
            uid_text:uid_text,
            viber_text:viber_text,
            zalo_text:zalo_text,
            _id:_id,
            user_type_option_user_type:user_type_option_user_type,
            guardian_user:guardian_user,
            signature_image:signature_image,
            signature_url_text:signature_url_text
        }
        return $.ajax({
            url: link._saveSession,
            type: 'post',
            data: { data: _data },
            success: function (response) {
                var _path = host2 + 'dashboard.php'
                if(user_type_option_user_type =="Admin"){
                   // _path = host2 + 'dashboard_admin.php'
                }
                //console.log(user_type_option_user_type);
                document.location.href = _path;
            }
        });
    },
    /**********************************/
    login_sql:function(Email,Password,password_ignore){

        var link3 =link._login;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token":_token,Email:Email,Password:Password,password_ignore:password_ignore},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.ERROR !=''){
                    alert(res.ERROR)
                }else{
                    var res_data = res.login
                    if(res_data.user_type_option_user_type == 'Doctor' &&
                        ((res_data.signature_image == '' || res_data.signature_image == null) ||
                         (res_data.pin_text == '' || res_data.pin_text == null ))){
                        $("#login-hide").css({"display":"none"});
                        $("#modal-pin-page").modal("show")
                        login.prototype.user_id_login=res_data.User_id

                        //bind
                        $("#modal-pin-page #save-siganture").unbind("click").bind("click",function(){
                            if($("#modal-pin-page #pin").val() ==''){
                                $("#modal-pin-page #pin").addClass('boder-alert')
                                return
                            }

                            if($("#modal-pin-page #signature").val()  ==''){
                                $("#modal-pin-page #signature").addClass('boder-alert')
                                return
                            }

                            var data ={
                                pin_text:$("#modal-pin-page #pin").val()
                            }

                            var reader = new FileReader();
                            reader.onload = function(){
                                Object.assign(data,{signature_image:login.prototype.signature_text});
                                var data1 = {
                                    token:_token,
                                    User_id:res_data.User_id,
                                    signature_data: reader.result,
                                    data_post:data
                                }
                                login.prototype.update_signature(data1,res_data);
                            };
                            reader.readAsDataURL($("#signature").get(0).files[0]);
                        })

                    }else{
                        login.prototype.saveSession(res_data);
                    }

                }

                //
            }
        });

    },
    /**********************************/
    get_product_Consultation_Medication_Package:function(){
        var link3 =link._product_for_invline;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token":_token},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                var option=''
                if(res.products.length >0){
                    res.products.forEach(function(item){
                        option +='<option value="'+item.sku_text+'" >'+item.name_text+'</option>';
                    })
                }

                localStorage.setItem('product_Consultation_Medication_Package',JSON.stringify(option));
                //
            }
        });

        ///
    },
    /**********************************/
    get_option_set:function(){
        var link3 =link._options;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token":_token},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                //general status
                var option=''
                var generalStatus={}
                for(let i=0;i<res.options.general_status.length;i++){
                    option +='<option value="'+res.options.general_status[i]['en_us']+'">'+res.options.general_status[i]['vi_vn']+'</option>';

                    let key =res.options.general_status[i]['en_us']
                    generalStatus[key] = res.options.general_status[i]['vi_vn'];

                }

                localStorage.setItem('generalStatusOption',JSON.stringify(option));
                localStorage.setItem('generalStatus',JSON.stringify(generalStatus));

                //chief complain
                var option=''
                var chieft_complain_arr={}
                for(let i=0;i<res.options.chiefComplaint.length;i++){
                    option +='<option value="'+res.options.chiefComplaint[i]['en_us']+'">'+res.options.chiefComplaint[i]['vi_vn']+'</option>';
                    let key =res.options.chiefComplaint[i]['en_us']
                    chieft_complain_arr[key] = res.options.chiefComplaint[i]['vi_vn'];
                }

                localStorage.setItem('chief_complain',JSON.stringify(option));
                localStorage.setItem('chieft_complain_arr',JSON.stringify(chieft_complain_arr));

                //appointments
                var option=''
                for(let i=0;i<res.options.appointments.length;i++){
                    option +='<option value="'+res.options.appointments[i]['en_us']+'">'+res.options.appointments[i]['vi_vn']+'</option>';

                }

                localStorage.setItem('appointment',JSON.stringify(option));
                //appointment_types
                var option=''
                for(let i=0;i<res.options.apt_types.length;i++){
                    option +='<option value="'+res.options.apt_types[i]['en_us']+'">'+res.options.apt_types[i]['vi_vn']+'</option>';

                }

                localStorage.setItem('appointment_types',JSON.stringify(option));

                //


                //apt_disposition
                var option=''
                var apt_disposition_arr ={};
                for(let i=0;i<res.options.apt_disposition.length;i++){
                    option +='<option value="'+res.options.apt_disposition[i]['en_us']+'">'+res.options.apt_disposition[i]['vi_vn']+'</option>';

                    let key =res.options.apt_disposition[i]['en_us']
                    apt_disposition_arr[key] = res.options.apt_disposition[i]['vi_vn'];
                }

                localStorage.setItem('apt_disposition',JSON.stringify(option));
                localStorage.setItem('apt_disposition_arr',JSON.stringify(apt_disposition_arr));
                //credit_card_type
                var option=''
                for(let i=0;i<res.options.creditcardtype.length;i++){
                    option +='<option value="'+res.options.creditcardtype[i]['nameCard']+'">'+res.options.creditcardtype[i]['nameCard']+'</option>';

                }

                localStorage.setItem('credit_card_type',JSON.stringify(option));


                //dosage_units
                var option=''
                for(let i=0;i<res.options.dosage_units.length;i++){
                    option +='<option value="'+res.options.dosage_units[i]['en_us']+'">'+res.options.dosage_units[i]['vi_vn']+'</option>';

                }

                localStorage.setItem('DosageUnits',JSON.stringify(option));

                //note_type
                var type_string={}
                var option=''
                for(let i=0;i<res.options.note_type.length;i++){
                    option +='<option value="'+res.options.note_type[i]['en_us']+'">'+res.options.note_type[i]['vi_vn']+'</option>';

                    let key =res.options.note_type[i]['en_us']
                    type_string[key] = res.options.note_type[i]['vi_vn'];
                }

                localStorage.setItem('note_type_option',JSON.stringify(option));
                localStorage.setItem('note_type_option_str',JSON.stringify(type_string));
                //order_request_type
                var option=''
                for(let i=0;i<res.options.orderrequesttype.length;i++){
                    option +='<option value="'+res.options.orderrequesttype[i]['en_us']+'">'+res.options.orderrequesttype[i]['vi_vn']+'</option>';

                }

                localStorage.setItem('order_request_type',JSON.stringify(option));


                //payment_satatus
                var option=''
                var payment_satatus_arr ={}
                for(let i=0;i<res.options.paymentstatus.length;i++){
                    option +='<option value="'+res.options.paymentstatus[i]['en_us']+'">'+res.options.paymentstatus[i]['vi_vn']+'</option>';
                    let key =res.options.paymentstatus[i]['en_us']
                    payment_satatus_arr[key] = res.options.paymentstatus[i]['vi_vn'];
                }

                localStorage.setItem('payment_satatus',JSON.stringify(option));
                localStorage.setItem('payment_satatus_arr',JSON.stringify(payment_satatus_arr));

                //payment_type
                var option=''
                var payment_type_arr ={}
                for(let i=0;i<res.options.paymenttype.length;i++){
                    option +='<option value="'+res.options.paymenttype[i]['en_us']+'">'+res.options.paymenttype[i]['vi_vn']+'</option>';
                    let key =res.options.paymenttype[i]['en_us']
                    payment_type_arr[key] = res.options.paymenttype[i]['vi_vn'];
                }

                localStorage.setItem('payment_type',JSON.stringify(option));
                localStorage.setItem('payment_type_arr',JSON.stringify(payment_type_arr));

                //rx_usage
                var option=''
                var rx_usage_arr ={}
                for(let i=0;i<res.options.rx_usage.length;i++){
                    option +='<option value="'+res.options.rx_usage[i]['en_us']+'">'+res.options.rx_usage[i]['vi_vn']+'</option>';

                    let key =res.options.rx_usage[i]['en_us']
                    rx_usage_arr[key] = res.options.rx_usage[i]['vi_vn'];
                }

                localStorage.setItem('RxUsage',JSON.stringify(option));
                localStorage.setItem('rx_usage_arr',JSON.stringify(rx_usage_arr));

                //user_type
                var option=''
                for(let i=0;i<res.options.usertype.length;i++){
                    option +='<option value="'+res.options.usertype[i]['en_us']+'">'+res.options.usertype[i]['vi_vn']+'</option>';

                }

                localStorage.setItem('user_type',JSON.stringify(option));

                //Specialties
                var option=''
                var Specialties_arr ={};
                for(let i=0;i<res.options.specialties.length;i++){
                    option +='<option value="'+res.options.specialties[i]['en_us']+'">'+res.options.specialties[i]['vi_vn']+'</option>';

                    let key =res.options.specialties[i]['en_us']
                    Specialties_arr[key] = res.options.specialties[i]['vi_vn'];
                }
                //console.log(Specialties_arr);
                localStorage.setItem('Specialties',JSON.stringify(option));
                localStorage.setItem('Specialties_arr',JSON.stringify(Specialties_arr));
                //console.log("option="+option);
                //location type
                var option=''
                var Location_type_arr ={};
                for(let i=0;i<res.options.locationtype.length;i++){
                    option +='<option value="'+res.options.locationtype[i]['en_us']+'">'+res.options.locationtype[i]['vi_vn']+'</option>';

                    let key =res.options.locationtype[i]['en_us']
                    Location_type_arr[key] = res.options.locationtype[i]['vi_vn'];
                }
                //console.log(Specialties_arr);
                localStorage.setItem('Location_type',JSON.stringify(option));
                localStorage.setItem('Location_type_arr',JSON.stringify(Location_type_arr));
                //DocumentType
                var option=''
                var documnet_type_arr ={};
                for(let i=0;i<res.options.document_type.length;i++){
                    option +='<option value="'+res.options.document_type[i]['en_us']+'">'+res.options.document_type[i]['vi_vn']+'</option>';

                    let key =res.options.document_type[i]['en_us']
                    documnet_type_arr[key] = res.options.document_type[i]['vi_vn'];
                }
                //console.log(Specialties_arr);
                localStorage.setItem('document_type',JSON.stringify(option));
                localStorage.setItem('document_type_arr',JSON.stringify(documnet_type_arr));
            }
        });


    },
    /**********************************/
    get_relative_list:function(guardian_user){
        //console.log(user_id);
       let link3 =link._dependent;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token":_token,guardian_user:guardian_user},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                var relatives= [];
                relatives.push(guardian_user);
                if(res.results.length >0){
                    res.results.forEach(function(item){
                        relatives.push(item.User_id);
                    })
                }
                //console.log(relatives);
                localStorage.setItem('relatives',JSON.stringify([]));
                localStorage.setItem('relatives',JSON.stringify(relatives));
                //
            }
        });

    },

    /********************************/
    preview_file: function(event){
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('signature-img');
            output.src = reader.result;
        };
        login.prototype.signature_text = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
    },
    /******************************/
    update_signature:function(data1,data_login){
        var link3 =link._profile_update;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data1,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.ERROR=='') login.prototype.saveSession(data_login);
            }
        });
    },

    /**********************************/
    reset:function(e){
        var email = $('#username').val();
        var _link = link._requied_reset;
        $.ajax({
            "crossDomain": true,
            asyn:true,
            url: _link,
            type: 'POST',
            dataType: 'json',
            data: {Email:email, token:_token},
            cache: false,

            error : function (status,xhr,error) {
            },
            success: function(res){
                if(res.email_sent ==1){
                    $('#modal-success .modal-title').text('Một email vừa được gởi cho bạn')
                    $('#modal-success').modal('show')

                    setTimeout(function(){
                        $('#modal-success').modal('hide')
                        $('#modal-success .modal-title').text('Lưu thành công')
                    },2000)
                }
            }
        });
    }
}

