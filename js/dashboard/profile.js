
function profile(){
    this.fileName=''
    this.was_changed =0
}
profile.NAME         = "profile";
profile.VERSION      = "1.2";
profile.DESCRIPTION  = "Class profile";

profile.prototype.constructor = profile;
profile.prototype = {
    init: function(){
        $("#js-profile-btn").unbind('click').bind('click',function(e){
            if($('#guardian_user').val() !=''){
                prof.updateUser_id(1);
            }else{
                if($('#patient-id').val() !=patient_login) return
                prof.updateUser_id('');
            }

        });
        //patient profile
        var id = getUrlParameter1('id');
        if(id !=undefined && user_login !=id){
            prof.get_user_profile_id(id);
        }

        history_lab.prototype.get_diagnostic_nane_select2()
        history_lab.prototype.get_diagnostic_code_select2();
        history_lab.prototype.get_location_service();
        history_lab.prototype.get_product_name();
        history_lab.prototype.get_completed_by();
        history_lab.prototype.get_completed_by_lab("#add-lab-result-modal .modal-body","#add-lab-result-modal .modal-body #m-lab-completed-by");

        //prescription
        getDiagnosticNaneSelect2('#prescription-modal #prescription-diagnostic-name','#prescription-modal .modal-body');
        getDiagnosticCodeSelect2('#prescription-modal #prescription-diagnostic-code','#prescription-modal .modal-body');
        getLocationService('#prescription-modal #prescription-location','#prescription-modal .modal-body','#prescription-modal #prescription-location option','Nhập nơi chỉ định');
        getCompletedBy('#prescription-modal #prescription-completed-by','#prescription-modal .modal-body','Nhập tên người hoàn tất');
        getCompletedBy('#prescription-modal #prescription-delivered-by','#prescription-modal .modal-body','Nhập tên người giao hàng');

        profile.prototype.displayMap('#profile',map)
        //event
        $('#profile #address').change(function(){
            profile.prototype.displayMap('#profile',map)
        })

        $('#profile #FamilyName').change(function(){
          var display_name =  $('#profile #FamilyName').val()+' '+$('#profile #middle_name').val()+' '+
             $('#profile #first_name').val()

            $('#profile #full_name').val(display_name);
        })

        $('#profile #middle_name').change(function(){
            var display_name =  $('#profile #FamilyName').val()+' '+$('#profile #middle_name').val()+' '+
                $('#profile #first_name').val()

            $('#profile #full_name').val(display_name);
        })

        $('#profile #first_name').change(function(){
            var display_name =  $('#profile #FamilyName').val()+' '+$('#profile #middle_name').val()+' '+
                $('#profile #first_name').val()

            $('#profile #full_name').val(display_name);
        })

        $("#profile #require-change-email").unbind('click').bind('click',function(){
            $("#modal-change-email").modal("show")
        })

        $("#modal-change-email #send-email-changed").unbind('click').bind('click',function(){
            var change_by = $("#modal-change-email #change-by-email").val();
            var current_email = $("#profile #Email").val();
            var received_name ="myHospital Admin";
            var to_email = "brandon@myhospital.vn";
            var subject ="Change Email";
            var uid_text = $("#uid_text").val()
            var body = '<div> Hello Admin</div>'+
                '<div style="margin-top: 20px">Please change the email for the following account: ' + uid_text +
                 'from email: ' + current_email + ' to '+ change_by+
                '</div>' +
                '<div style="margin-top: 20px">Thanks</div>'

            profile.prototype.changed_email("Admin",received_name,to_email,subject,body);
        })

        $("#profile #require-change-pass").unbind('click').bind('click',function(){
            //$("#modal-change-pass").modal("show")
            var to_email = $("#profile #Email").val();
            profile.prototype.require_change_password(to_email);
        })

        $("#modal-change-pass #password-require").unbind('click').bind('click',function(){
            //var to_email = $("#profile #Email").val();
           //profile.prototype.changed_email("Admin",received_name,to_email,subject,body);
        })
        //leave page
        $("#profile .was-changed").change(function(){
            profile.prototype.was_changed =1
        })
        /*
       $(document).bind("mouseleave", function(e) {
            if ((e.pageY - $(window).scrollTop() < 1) && (profile.prototype.was_changed ==1)) {
                $('#modal-leave-page').modal("show");
            }
        });
       */

        $(window).on('beforeunload', function(){
            if(profile.prototype.was_changed ==1){
                return "You haven't saved yet!";
            }

        });
    },

    /********************************/
    previewFile: function(event){
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('avatar-img');
            output.src = reader.result;
        };
        prof.fileName = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
    },
    /********************************/
    updateUser_id:function(guardiant_update,open_id,is_what_page){
        var display_name_text =$('#profile #full_name').val()

        var birth_date=$('#profile #birthday').val() ;
        var check_Date = new Date(birth_date)

        var flag_birth_date =false
        if(check_Date !='Invalid Date'){
            flag_birth_date =true
        }else{
            birth_date='';
        }

        var User_id =$('#profile #patient-id').val();

        var data ={
            birth_date_date:birth_date,
            city_text:$('#profile #city').val(),
            display_name_text:display_name_text,
            extension_number_text:'',
            facebook_text:$('#info_facebook').val(),
            family_name_text:$('#profile #FamilyName').val(),
            first_name_text:$('#profile #first_name').val(),
            middle_name_text:$('#profile #middle_name').val(),
            identification_number_text:$('#profile #govement_id').val(),
            identification_type_option_identification_type:$('#profile #ID_Type').val(),
            //identification_type_option_identification_type:$('#profile #ID_Type option:selected').val(),
            insurance_number_text:$('#profile #number_BHYT').val(),
            language_text:$('#profile #langguage_id').val(),
            //language_text:$('#profile #langguage_id option:selected').val(),
            meeting_link_text:'',

            nationality_option_nationality:$('#profile #Nationality').val(),
            //nationality_option_nationality:$('#profile #Nationality option:selected').val(),
            country_option_nationality:$('#profile #Country').val(),
            //country_option_nationality:$('#profile #Country option:selected').val(),
            postal_code_text:$('#profile #postal_code').val(),
            primary_phone_number_text:$('#profile #phone_number').val(),
            province_text:$('#profile #province').val(),
            residential_status_option_residential_status:$('#profile #Resident_Status').val(),
            //residential_status_option_residential_status:$('#profile #Resident_Status option:selected').val(),
            sex_option_sex:$('input[name="customRadio"]:checked').val(),
            skype_text:$('#info_skype').val(),

            viber_text:$('#info_viber').val(),
            zalo_text:$('#info_zalo').val(),
            guardian_user:$("#profile #guardian_user").val(),
            address_geographic_address:$('#profile #address').val(),

            Email:$('#profile #Email').val()
        }

        if($("#avatar-input").val() == ''){
            var data1 = {token:_token,
                user_login:user_login,
                User_id:User_id,
                data_post:data
            }
            common_f.prototype.update_user(data1,open_id,is_what_page)
        }else{
            var reader = new FileReader();
            reader.onload = function(){
                Object.assign(data,{avatar_image:prof.fileName});
               var data1 = {token:_token,
                   user_login:user_login,
                   User_id:User_id,
                   data_post:data,
                   avatar_data: reader.result
                   }

                common_f.prototype.update_user(data1,open_id,is_what_page)
            };
            reader.readAsDataURL($("#avatar-input").get(0).files[0]);
        }

    },


    /******************************************/
    get_user_profile_id:function(User_id){
        var link3 =link._user_by_id;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{"token": _token,User_id:User_id},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.user.User_id !=undefined){
                    var data=res.user;

                    if(data.avatar_image !=null && data.avatar_image !=''){
                        document.getElementById("avatar-img").src = data.avatar_image

                    }


                    var p_name = '';
                    if(data.display_name_text !=null){
                        p_name =  data.display_name_text
                    }else{
                        var first_name_text =(data.first_name_text==undefined)?'':data.first_name_text
                        var middle_name_text =(data.middle_name_text==undefined)?'':data.middle_name_text
                        var family_name_text =(data.family_name_text==undefined)?'':data.family_name_text
                        p_name = family_name_text+" "+middle_name_text+" "+first_name_text
                    }

                    var name = data.user_type_option_user_type+" "+p_name;
                    var address =""
                    if(data.address_geographic_address!=undefined){
                        address = data.address_geographic_address.address
                    }

                    $("#uid_text").val(data.uid_text)
                    $("#profile-name").html(name);
                    $("#profile-address").html(address);
                    $("#FamilyName").val(data.family_name_text);

                    var d = new Date(data.birth_date_date);
                    var date_t = d.toLocaleString();
                    var date_arr = date_t.split(',');
                    var date1_arr = date_arr[0].split('/');
                    var date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);
                    $("#birthday").val(date);
                    $("#middle_name").val(data.middle_name_text);
                    $("#first_name").val(data.first_name_text);
                    $("#full_name").val(data.display_name_text);

                    if(data.sex_option_sex =='Male'){
                        $("#radio_sex_male").prop("checked",true);
                    }else if(data.sex_option_sex =='Female'){
                        $("#radio_sex_female").prop("checked",true);
                    }else if(data.sex_option_sex =='Unknown'){
                        $("#radio_sex_other").prop("checked",true);
                    }

                    $('#langguage_id').find("option[value='"+data.language_text+"']").attr("selected", "selected");
                    $("#number_BHYT").val(data.insurance_number_text);
                    $("#govement_id").val(data.identification_number_text);


                    $('#ID_Type').find("option[value='"+data.identification_type_option_identification_type+"']").attr("selected", "selected");


                    $('#Resident_Status').find("option[value='"+data.residential_status_option_residential_status+"']").attr("selected", "selected");

                    var Nationality='';
                    if(data.nationality_option_nationality=='Vietnam'){
                        Nationality='Vietnam'
                    }else if(data.nationality_option_nationality=='United States'){
                        Nationality='United States'
                    }

                    var Country='';
                    if(data.country_option_nationality=='Vietnam'){
                        Country='Vietnam'
                    }else if(data.country_option_nationality=='United States'){
                        Country='United States'
                    }

                    $('#Nationality').find("option[value='"+Nationality+"']").attr("selected", "selected");
                    $('#Country').find("option[value='"+Country+"']").attr("selected", "selected");

                    $("#phone_number").val(data.primary_phone_number_text);
                    $("#Email").val(data.Email);

                    var address='';
                    if(data.address_geographic_address!=undefined){
                        address=data.address_geographic_address
                    }

                    $("#address").val(address);
                    $("#province").val(data.province_text);
                    $("#city").val(data.city_text);
                    $("#postal_code").val(data.postal_code_text);
                    $('#User_Type').find("option[value='"+data.user_type_option_user_type+"']").attr("selected", "selected");
                    $('#patient-id').val(data.User_id)

                    if(data.guardian_user ==undefined){
                        data.guardian_user=''
                    }else{
                        $('#app-modal-lg-center #show_dependent_patient').css({"display":"none"})
                    }

                    $('#guardian_user').val(data.guardian_user)
                    $('#patient-type').val(data.user_type_option_user_type)

                    $('#display-credential').css({"display":"none"});
                    $('#relative-show').css({"display":"none"});
                    $("#show-modal-apt #modal-open-appointment").unbind('click')
                    $("#show-modal-apt .class-disable").addClass('opacity_disabled')
                    //vital
                    $("#show-modal-vital #vital-sign").unbind('click')
                    $("#show-modal-vital .class-disable").addClass('opacity_disabled')

                    if(data.guardian_user ==user_login ){
                        //console.log("admin aadmin")
                        $("#show-modal-apt .class-disable").removeClass('opacity_disabled')
                        $("#modal-open-appointment").unbind("click").bind("click",function(){
                            $('#app-modal-lg-center').modal('show');
                            $('.app_buoc2').addClass('disabled')
                            $('.app_buoc3').addClass('disabled')
                            $('.app_buoc4').addClass('disabled')
                            $(".app_buoc1 ").click();
                            modal_appointment.prototype.reset_modal_appointment()

                        })

                        //vital
                        $("#show-modal-vital .class-disable").removeClass('opacity_disabled')
                        $("#vital-sign").unbind("click").bind("click",function(){
                            modal_vital.prototype.reset_modal_vital();
                            $('#vitalsign-modal-center').modal('show')
                        });

                    }

                    var page_user_type = $('#patient-type').val()
                    if((data.user_type_option_user_type =='Doctor' || data.user_type_option_user_type =='Admin') && (type_login =="Admin")){
                        $('#display-credential').css({"display":""});
                        $("#display-credential #show-credentials").bind('click')
                        $("#display-credential .class-disable").removeClass('opacity_disabled')
                    }

                    //create appointment, that step2 add a relative
                    var show_modal_apt_step2 =localStorage.getItemValue('show_modal_apt_step2');
                    if(show_modal_apt_step2 =='yes'){
                        localStorage.setItemValue('show_modal_apt_step2', '');
                        $("#modal-open-appointment").click();
                        $("#app-modal-lg-center #confirm-n").click();
                    }
                    //not permit update if
                    if($('#guardian_user').val() =='' && $('#patient-id').val() !=patient_login){
                        $("#js-profile-btn").attr("disabled",true)
                    }
                    //
                }
            }
        });
    },

    displayMap:function(el,map_item){
        var geocoder = new google.maps.Geocoder();

        var address = $('#profile #address').val() +', US';

        geocoder.geocode( { 'address': address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();

                //map
                map_item.setCenter({
                    lat: lat,
                    lng: lng
                });
                var infowindow = new google.maps.InfoWindow();
                var marker,

                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(lat, lng),
                        map: map_item
                    });
                google.maps.event.addListener(marker, 'click', (function (marker) {
                    return function () {
                        infowindow.setContent(positions[i].content);
                        infowindow.open(map_item, marker);
                    }
                }) (marker));
                /////////////

            }
        });
    },
    //SQL
    update_user_sql:function(data){
        Object.assign(data,{ "token": _token});
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

                //
            }
        });
    },
    /*************************************/
    changed_email:function(from_name,to_name,to_email,subject,body){
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
    /*************************************/
    require_change_password:function(email){
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
var prof = new profile();
$(function(){
    prof.init();
});