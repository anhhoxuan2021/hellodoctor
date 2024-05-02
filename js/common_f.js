
function common_f(){}
common_f.NAME         = "common_f";
common_f.VERSION      = "1.2";
common_f.DESCRIPTION  = "Class common_f";

common_f.prototype.constructor = common_f;
common_f.prototype = {
    add_facility_sql:function(data){
        Object.assign(data,{ "token": _token});
        //console.log(data);
        var link3 =link._locationAdd_Update_sql;
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
                //console.log(res);
                // window.location.href = "dashboard.php?id="+data.UID_UniqueID;
                //
            }
        });
    },
    /**************************/
    get_user_metas:function(user_meta_user,el_degree,el_specialty,el_university){
        var link3 =link._user_meta;

        var _data ={token:_token,user_meta_user:user_meta_user}
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data : _data,

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.user_meta.user_meta_id == undefined) return;

                var data = res.user_meta;
                //location
                if(data.affiliate_custom_locations !=null){
                    //locationSelect(data.affiliate_custom_locations,'#crendential-modal #cred-Affiliate');
                }

                if(data.university1_text !=null){
                    $(el_university).text(data.university1_text);
                }

                if(data.degree_text !=null){
                    $(el_degree).text(data.degree_text);
                }


                if(data.medical_license_text !=null){
                    // $('#crendential-modal #cred-Medical-License-Number').val(data.medical_license_text);
                }


                if(data.specialty_list_option_specialties !=null){
                    var specialty_txt ='';
                    data.specialty_list_option_specialties.forEach(function(item){
                        specialty_txt +=(specialty_txt=="")?find_name(Specialties_arr,item):", "+find_name(Specialties_arr,item)
                    })

                    $(el_specialty).text(specialty_txt);

                }

                //
            }
        });
    },


    /**************************/
    convert_str_thousand:function(str){
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },

    /*****************************/
    display_payment:function(data,el){
        var class1='class="row col-12 f-size11 m-t10 p-b15 paymentline border-b-c111 padding_rl"';
        var row ='<div '+class1+'>' +
            '<div class="payment-time col-2 f-bold">Ngày tạo</div>' +
            '<div class="payment-type col-2 f-bold">Hình thức thanh toán</div>' +
            '<div class="payment-card-type col-1 f-bold">Card</div>' +
            '<div class="payment-inv-note col-3 f-bold">Ghi chú</div>' +
            '<div class="payment-inv-amount col-1 padding_rl f-bold">Số tiền</div>' +
            '<div class="payment-status col-1 padding_r f-bold">Trạng thái</div>' +
            '<div class="payment-patient col-2 f-bold">Người thanh toán</div>' +
            '</div>';

        var i=1;

        if(data.length >0){
            data.forEach(function(item){
                var patient_name =item.display_name_text
                //console.log(item);
                if( i <data.length){
                    class1='class="row col-12 f-size11 m-t10 p-b15 paymentline  border-b-c111 padding_rl"';
                }else{
                    class1='class="row col-12 f-size11 m-t10 p-b15 paymentline  padding_rl"';
                }

                i=i+1;

                var create_date = item.CreatedDate;

                var amount_number = item.amount_number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

                var payment_status=''
                if( item.status_option_payment_status=='Waiting to Confirm'){
                    payment_status ='<span class="color-alert">Ch? xác nh?n</span>'
                }else if(item.status_option_payment_status=='Successful'){
                    payment_status ='<span class="color_green">Thành công</span>'
                }

                if(item.card_type_option_credit_card_type ==null) item.card_type_option_credit_card_type=''

                item.type_option_payment_type =payment_typeOption_text(item.type_option_payment_type)

                row +='<div '+class1+'>' +
                    '<div class="payment-time col-2">'+create_date+'</div>' +
                    '<div class="payment-type col-2 ">'+item.type_option_payment_type+'</div>' +
                    '<div class="payment-card-type col-1">'+item.card_type_option_credit_card_type+'</div>' +
                    '<div class="payment-inv-note col-3">'+item.paymentNotes+'</div>' +
                    '<div class="payment-inv-amount col-1 padding_rl">'+amount_number+'</div>' +
                    '<div class="payment-status col-1 padding_r">'+payment_status+'</div>' +
                    '<div class="payment-patient col-2 padding_r">'+patient_name+'</div>' +
                    '</div>';

            });
        }

        //console.log(data.length)
        //console.log(i)

        $(el).html(row)
    },
    /*****************************/
    update_appt_status_sql:function(UniqueID,data){
        var link3 =link._appointment_up_status_sql;
        $.ajax({
            "async": false,
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
    },
    /*****************************/
    invite_email:function(Appt_id){
        var link3 =link._email_invite;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,Appt_id:Appt_id},
            //contentType: 'application/json',
            error : function (status,xhr,error) {

            },
            success: function (res) {
                //console.log(res);
                // window.location.href = "dashboard.php?id="+data.UID_UniqueID;
                //
            }
        });
    },
    /*****************************/
    send_notification_apt:function(Appt_id){
        var link3 =link._email_notifcation;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,Appt_id:Appt_id},
            //contentType: 'application/json',
            error : function (status,xhr,error) {

            },
            success: function (res) {
                //console.log(res);
                if(res.to_email==res.email_sent){
                    //console.log("test");
                    webmeeting_link ="https://"+res.webmeeting_link
                    window.open(webmeeting_link, '_blank');
                }
                // window.location.href = ;
                //
            }
        });
    },

    /****************************/
    send_email:function(from_name,to_name,to_email,subject,body){
        var link3 =link._send_email;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,from_name:from_name,to_name:to_name,to_email:to_email,
                subject:subject,body:body},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {

                //
            }
        });
    },
    /****************************/
    http_content:function(user,i){
        //console.log(i);
        var uid=''
        if(user.uid_text!==null){
            uid = user.uid_text
        }

        var name= '';
        if(user.display_name_text !=null && user.display_name_text !=""){
            name= user.display_name_text
        }else{
            var first_name_text =(user.first_name_text==null)?'':user.first_name_text
            var middle_name_text =(user.middle_name_text==null)?'':user.middle_name_text
            var family_name_text =(user.family_name_text==null)?'':user.family_name_text

            name=family_name_text+" "+middle_name_text+" "+first_name_text
        }

        var brithday ='';
        if(user.birth_date_date !=null){
            var d = new Date(user.birth_date_date);
            brithday = d.toLocaleString();
        }


        var email='';
        if(user.Email!=null){
            email=user.Email
        }

        var primary_phone_number='';
        if(user.primary_phone_number_text!=null){
            primary_phone_number= user.primary_phone_number_text;
        }

        var address='';
        if(user.address_geographic_address!=null){
            address=user.address_geographic_address.address
        }

        var identification='';
        if(user.identification_number_text!=null){
            identification=user.identification_number_text
        }
        var img =''
        if(user.avatar_image !=null && user.avatar_image !=''){
            img ='<img src="'+user.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
        }

        //Affiliate
        var location_name = '';
        if(user.location_name_text !=null && user.location_name_text !=''){
            location_name = '<a class="color-green-l" href="facility_information.php?id='+user.um_affiliate_custom_locations+'">'+user.location_name_text+'</a>'
        }

        var href_physician="physician_infomation.php?id="+user.User_id;

        if($("#type-login").val()=="Doctor") href_physician="dashboard.php?id="+user.User_id;
        var approve =''
        if($("#type-login").val()=="Admin"){
            href_physician="dashboard.php?id="+user.User_id;

            approve = '<div class="change-approve" tabindex="27" style="position: absolute; box-sizing: border-box; z-index: 6; height: 83px; top: 0px; border-radius: 0px; cursor: pointer; width: 110px; left: 0px; transform: rotate(0deg);">' +
                '<img alt="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1599537054153x794623525881115400%2Fnotapproved.png?w=128&amp;h=97&amp;auto=compress&amp;fit=crop&amp;dpr=1.25" ' +
                'style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">' +
                '<input type="hidden" class="doctor_id" value="'+user.User_id+'">' +
                '</div>'

            if(user.um_approved_to_practice_boolean ==true){
                approve ='<div class="change-approve"  style="position: absolute; box-sizing: border-box; z-index: 6; height: 83px; top: 0px; border-radius: 0px; cursor: pointer; width: 110px; left: 0px; transform: rotate(0deg);">' +
                    '<img alt="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1599537041370x302622980783943800%2Fgreen-approved-stamp-1-1024x772.png?w=128&amp;h=97&amp;auto=compress&amp;fit=crop&amp;dpr=1.25" ' +
                    'style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">' +
                    '<input type="hidden" class="doctor_id" value="'+user.User_id+'">' +
                    '</div>'
            }
        }

        var degree='';
        var specialty =''
        var university1 =''
        var languages =''
        var description =''
        //console.log(user_meta);

        if(user.um_degree_text !=null) degree =user.um_degree_text
        if(user.um_medical_license_text !=null) degree = user.um_medical_license_text + ' '+ degree;

        if(user.um_specialty_list_option_specialties !=null && user.um_specialty_list_option_specialties !=''){
            if(user.um_specialty_list_option_specialties.length >0){
                user.um_specialty_list_option_specialties.forEach(function(item){
                    Specialties_arr[item];
                    specialty =(specialty !='')? specialty +', '+ Specialties_arr[item]:Specialties_arr[item]
                })
            }
        }

        if(user.um_university1_text !=null) university1 =user.um_university1_text

        if(user.um_languages_list_option_language !=null && user.um_languages_list_option_language !=''){
            if(user.um_languages_list_option_language.length >0){
                user.um_languages_list_option_language.forEach(function(item){
                    languages =(languages !='')? languages +', '+ item:item
                })
            }
        }

        if(user.um_description_text !=null){
            if(user.um_description_text.length >150){
                description = substring150(user.um_description_text) +
                    '<a class="color-green-l" href="dashboard.php?id='+user.User_id+'">...Xem thêm</a>'
            }else{
                description = user.um_description_text
            }

        }


        var row1='';
        if(i%2==0){
            row1 +='<div class="row">' +
                '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="height: 370px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' + approve +
                '<div class="col-12 middle">'+img+'</div>' +
                '</div>' +
                '<div class="row m-t10">' +
                '<div class="col-12 text-center"><a class="color-green-l f-size20" href="'+href_physician+'"><strong>'+uid+' <span class="doctor-name">' +name+'</span></strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-hospital col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 location-name-ph">'+location_name+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-graduation-cap col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 degree-ph">'+degree+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-medkit col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 specialty">'+specialty+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-calendar col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 university-ph">'+university1+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-language col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 lang-ph">'+languages+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row col-12 m-t15">' +
                '<div class="col-12 padding_l15 des-ph">'+description+'</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->'
        }else{
            row1 += '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="height: 370px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' + approve +
                '<div class="col-12 middle">'+img+'</div>' +
                '</div>' +
                '<div class="row m-t10">' +
                '<div class="col-12 text-center"><a class="color-green-l f-size20" href="'+href_physician+'"><strong>'+uid+'<span class="doctor-name">' +name+'</span></strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-hospital col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 location-name-ph">'+location_name+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-graduation-cap col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 degree-ph">'+degree+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-medkit col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 specialty">'+specialty+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-calendar col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 university-ph">'+university1+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-language col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5 lang-ph">'+languages+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row col-12 m-t15">' +
                '<div class="col-12 padding_l15 des-ph">'+description+'</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->' +
                '</div>' +
                '<!--end row-->'
        }

        return row1;
        //
    },
    /****************************/
    get_physician: function(User_id){
        $('#doctors-content').html('');
        $('#doctors-pagination .pagination-sm').html('');
        var user_type_option_user_type =user_type_option
        if(user_type_option == "Patient")  user_type_option_user_type ="Doctor"
        var method ="POST";
        var _link = link._users;
        var  _data ={
            token:_token,
            limit:1,cursor:0,
            text_search:$('#search-text').val(),
            um_specialty_list_option_specialties:$('#specialities').val(),
            user_type_option_user_type:user_type_option_user_type,
            User_id:User_id
        }

        var $pagination = $('#doctors-pagination');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": method,
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (data) {

                if(parseInt(data.user.row_cnt) <=0){
                    $('#doctors-content').html('');

                    return false
                }

                var totalRecords = parseInt(data.user.row_cnt);

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
                        _data ={
                            token:_token,
                            limit:10,
                            cursor:cursor,
                            text_search:$('#search-text').val(),
                            um_specialty_list_option_specialties:$('#specialities').val(),
                            user_type_option_user_type:user_type_option_user_type,
                            User_id:User_id
                        }

                        var html='';
                        //
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": _link,
                            "method": method,
                            data:_data,
                            dataType: 'json',
                            error : function (status,xhr,error) {
                            },
                            success: function (res) {
                                if(res.user.Error !="") return;
                                //console.log(res)
                                var data=res.user.results;
                                var i=0;
                                data.forEach(function (item) {
                                    html += common_f.prototype.http_content(item,i);
                                    i++
                                });//end for each
                                if(i%2 !=0 || i==0){
                                    html +='</row> <!--end row-->';
                                }

                                $('#doctors-content').html(html);
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    },
    /****************************/
    get_physician_cooperation: function(um_affiliate_custom_locations){
        $('#doctors-content').html('');
        $('#doctors-pagination .pagination-sm').html('');
        var method ="POST";
        var _link = link._users;
        var  _data ={
            token:_token,
            limit:1,cursor:0,
            um_affiliate_custom_locations:um_affiliate_custom_locations
        }

        var $pagination = $('#doctors-pagination');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": method,
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (data) {

                if(parseInt(data.user.row_cnt) <=0){
                    $('#doctors-content').html('');

                    return false
                }

                var totalRecords = parseInt(data.user.row_cnt);

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
                        _data ={
                            token:_token,
                            limit:10,
                            cursor:cursor,
                            um_affiliate_custom_locations:um_affiliate_custom_locations
                        }

                        var html='';
                        //
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": _link,
                            "method": method,
                            data:_data,
                            dataType: 'json',
                            error : function (status,xhr,error) {
                            },
                            success: function (res) {
                                if(res.user.Error !="") return;
                                //console.log(res)
                                var data=res.user.results;
                                var i=0;
                                data.forEach(function (item) {
                                    html += common_f.prototype.http_content(item,i);
                                    i++
                                });//end for each
                                if(i%2 !=0 || i==0){
                                    html +='</row> <!--end row-->';
                                }

                                $('#doctors-content').html(html);
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    },

    /******************************************/
    update_user:function(data,open_id,is_what_page){
        var link3 =link._profile_update;
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
                if(res.ERROR==''){
                    profile.prototype.was_changed =0
                    $(window).unbind('beforeunload');
                    $('#modal-success').modal("show")
                    setTimeout(function(){
                        $('#modal-success').modal("hide");
                    },2000)

                    if(user_login == $('#patient-id').val()){
                        if(is_what_page =='appointment_edit' || is_what_page =='invoice'){
                            common_f.prototype.updateSession(res.user,open_id,is_what_page);
                        }else{
                            login.prototype.saveSession(res.user);
                        }

                    }
                }else{
                    $('#modal-error #err-message').text(res.ERROR);
                    $('#modal-error').modal("show")
                    setTimeout(function(){
                        $('#modal-error').modal("hide");
                        $('#modal-error #err-message').text('');
                    },2000)
                }

            }
        });
    },

    /**********************************/
    updateSession: function (data,open_id,is_what_page) {
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
                if(is_what_page =='appointment_edit'){
                    document.location.href = host2 + 'appointment_edit.php?id='+open_id;
                }else if(is_what_page =='invoice'){
                    document.location.href = host2 + 'invoice.php?id='+open_id;
                }

            }
        });
    },
}
