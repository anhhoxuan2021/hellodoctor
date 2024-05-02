
function modal_credentials(){
    this.file_tranfer = new DataTransfer()
}
modal_credentials.NAME         = "modal_credentials";
modal_credentials.VERSION      = "1.2";
modal_credentials.DESCRIPTION  = "Class modal_credentials";

modal_credentials.prototype.constructor = modal_credentials;
modal_credentials.prototype = {
    init: function(){
        getLocationService('#crendential-modal #cred-Affiliate','#crendential-modal .modal-body','#crendential-modal #cred-Affiliate','Nơi công tác');
        ////Specialties
        $('#crendential-modal #cred-speciality').append(Specialties);
        //event
        $("#show-credentials").unbind("click").bind("click",function(){
            var user_id = patient_login;

            if(window.location.pathname.includes('dashboard.php')){
                var id = getUrlParameter1('id');

                if(id!=undefined){
                    user_id =id
                }
            }

            modal_credentials.prototype.reset_modal_metaUser()
            modal_credentials.prototype.get_usermetas(user_id);

            $('#crendential-modal #user-doctor-id').val(user_id)
            $('#crendential-modal').modal("show");

            $('#crendential-modal #save-cre-div').unbind('click').bind('click',function(){
                modal_credentials.prototype.save_upadte_usermeta('');
            })

        });



        $('#crendential-modal #cred-language').change(function(){
            var item =$('#crendential-modal #cred-language').val();
            var laguage_text =$('#crendential-modal #cred-language option:selected').text();

            var flag=false;
            $('#crendential-modal #list-languages .row-language').each(function(){
                var value_language = $(this).find('.value_language').val();
                if(item == value_language || item==''){
                    flag =true;
                    return false;
                }
            })

            if(!flag){
                var row ='<div class="col-12 row padding_r m-t5 row-language">' +
                    '<div class="col-10 padding_rl"><input type="hidden" class="value_language" value="'+item+'"><span class="language_text">'+laguage_text+'</span></div>' +
                    '<div class="col-2 padding_rl text-right delete-language" style="cursor: pointer"><i class="fas fa-trash-alt color-alert"></i></div>' +
                '</div>'

                $('#crendential-modal #list-languages').append(row);
            }

        });

        $('#crendential-modal').on('click','.delete-language',function(){
            $(this).closest('.row-language').remove();
        })

        $('#crendential-modal #cred-speciality').change(function(){
            var item1 =$('#crendential-modal #cred-speciality').val();
            var text1 =$('#crendential-modal #cred-speciality option:selected').text();

            var flag = false;
            $('#crendential-modal #list-specialities .row-specialty').each(function(){
                var specialty = $(this).find('.specialty').val();
                if(item1 == specialty || item1=='') {
                    flag =true;
                    return false;
                }
            });

            if(!flag){
                var row ='<div class="col-12 row padding_r m-t5 row-specialty">' +
                    '<div class="col-10 padding_rl"><input type="hidden" class="specialty" value="'+item1+'"><span class="specialty-text">'+text1+'</span></div>' +
                    '<div class="col-2 padding_rl text-right delete-specialty" style="cursor: pointer"><i class="fas fa-trash-alt color-alert"></i></div>'+
                    '</div>'

                $('#crendential-modal #list-specialities').append(row);
            }

        });

        $('#crendential-modal').on('click','.delete-specialty',function(){
            $(this).closest('.row-specialty').remove();
        })

        //files
        $('#cre-Documents').on('click','.exsiting-file-delete',function(){
            $(this).closest('.row').remove();
        })

        $("#credential-document").on('change', function(e){
            var fileBloc ='';
            for(var i = 0; i < this.files.length; i++){
                fileBloc +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                    '<div class="col-9 file-name">'+this.files.item(i).name+'</div>' +
                    '<div class="col-3 file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                    '</div>'
            };
            $("#files-area").append(fileBloc);

            for (let file of this.files) {
                md_credentials.file_tranfer.items.add(file);
            }

            this.files = md_credentials.file_tranfer.files;

            $('#files-area .file-delete').click(function(){
                let name = $(this).closest('.row').find('.file-name').text();
                $(this).parent().remove();
                for(let i = 0; i < md_credentials.file_tranfer.items.length; i++){
                    // Correspondance du fichier et du nom
                    if(name === md_credentials.file_tranfer.items[i].getAsFile().name){
                        md_credentials.file_tranfer.items.remove(i);
                        continue;
                    }
                }
                document.getElementById('credential-document').files = md_credentials.file_tranfer.files;
            });
        });

    },
    /***********************************************/
    get_usermetas:function(user_meta_user){
        var link3 =link._user_meta;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{user_meta_user:user_meta_user,token:_token},
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.user_meta.user_meta_id !=null && res.user_meta.user_meta_id !=undefined){

                    var data = res.user_meta;
                    $('#crendential-modal #credentials-id').val(data.user_meta_id);

                    var doctor_name = $('#profile #full_name').val();
                    //var doctor_name =$('#profile #FamilyName').val() +' '+$('#profile #middle_name').val() +' '+$('#profile #first_name').val()
                    $('#crendential-modal #cred-doctor-name').text(doctor_name);
                    //location
                    if(data.affiliate_custom_locations !=null){
                        locationSelect(data.affiliate_custom_locations,'#crendential-modal #cred-Affiliate');
                    }

                    if(data.university1_text !=null){
                        $('#crendential-modal #cred-University').val(data.university1_text);
                    }

                    if(data.degree_text !=null){
                        $('#crendential-modal #cred-Degree').val(data.degree_text);
                    }

                    if(data.university_address_geographic_address !=null){
                        $('#crendential-modal #cred-University-Address').val(data.university_address_geographic_address);
                    }

                    if(data.medical_license_text !=null){
                        $('#crendential-modal #cred-Medical-License-Number').val(data.medical_license_text);
                    }

                    if(data.rx_number_text !=null){
                        $('#crendential-modal #cred-Rx-Number').val(data.rx_number_text);
                    }


                    if(data.specialty_list_option_specialties !=null){
                        var row ='';
                        data.specialty_list_option_specialties.forEach(function(item){
                            //console.log(Specialties_arr);
                            //console.log(find_name(Specialties_arr,item));
                            row +='<div class="col-12 row padding_r m-t5 row-specialty">' +
                                '<div class="col-10 padding_rl">' +
                                    '<input type="hidden" class="specialty" value="'+item+'">'+find_name(Specialties_arr,item)+
                                '</div>' +
                                '<div class="col-2 padding_rl text-right delete-specialty" style="cursor: pointer"><i class="fas fa-trash-alt color-alert"></i></div>'+

                                '</div>'
                        })

                        $('#crendential-modal #list-specialities').html(row);
                    }

                    if(data.description_text !=undefined){
                        $('#crendential-modal #cre-Description').val(data.description_text);
                    }

                    if(data.languages_list_option_language !=null){
                        var row ='';
                        data.languages_list_option_language.forEach(function(item){
                            var laguage_text = 'Tiếng Việt';
                            if(item =='english') laguage_text = 'Tiếng Anh';
                            row +='<div class="col-12 row padding_r m-t5 row-language">' +
                                '<div class="col-10 padding_rl">' +
                                    '<input type="hidden" class="value_language" value="'+item+'">'+laguage_text+
                                '</div>' +
                                '<div class="col-2 padding_rl text-right delete-language" style="cursor: pointer"><i class="fas fa-trash-alt color-alert"></i></div>'+
                                '</div>'
                        })

                        $('#crendential-modal #list-languages').html(row);
                    }

                    var exsting_file_area = '';
                    if(data.documents_list_file !='' && data.documents_list_file !=null){
                        data.documents_list_file.forEach(function(exsiting_file){
                            var temp = exsiting_file.split('/');
                            var index = temp.length;
                            var name_file = temp[index-1];
                            exsting_file_area +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                                '<div class="col-9"> <a href="'+exsiting_file+'" target="_blank" class="exsiting-file-name">'+name_file+'</a></div>' +
                                '<div class="col-3 exsiting-file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                                '</div>'
                        })
                        $('#crendential-modal #cre-Documents').html(exsting_file_area);
                    }

                    if(data.approved_to_practice_boolean !=null){
                        $('#crendential-modal #approved-to-practice').prop("checked",data.approved_to_practice_boolean);
                    }

                    ///
                }
            }
        });
    },
    /***********************************************/
    save_upadte_usermeta:function($this){

        var user_id = $('#crendential-modal #user-doctor-id').val()
        var credentials_id = $('#crendential-modal #credentials-id').val();
        var Affiliate = $('#crendential-modal #cred-Affiliate').val();
        var University = $('#crendential-modal #cred-University').val();
        var Degree = $('#crendential-modal #cred-Degree').val();
        var Medical_License = $('#crendential-modal #cred-Medical-License-Number').val();
        var Rx_Number = $('#crendential-modal #cred-Rx-Number').val();
        var Description = $('#crendential-modal #cre-Description').val();


        var specialities=[];
        $('#crendential-modal #list-specialities .row-specialty').each(function(){
            var specialty = $(this).find('.specialty').val();
            specialities.push(specialty)
        })

        var languages=[];
        $('#crendential-modal #list-languages .row-language').each(function(){
            var value_language = $(this).find('.value_language').val();
            languages.push(value_language)
        })



        var address = $('#crendential-modal #cred-University-Address').val();


        var type_login1 = ''
        if(window.location.pathname.includes('physician_list.php')){
            type_login1 = $("#type-login").val()
        }else{
            type_login1 =type_login
        }

        var documents_list_file = '';
        $('#cre-Documents .exsiting-file-name').each(function(){
            documents_list_file =(documents_list_file=='')? $(this).text():documents_list_file+','+$(this).text()
        })

        var data_post ={
            //token:_token,
            //user_meta_id:credentials_id,
            degree_text:Degree,
            description_text:Description,
            languages_list_option_language:languages,
            medical_license_text:Medical_License,
            rx_number_text:Rx_Number,
            specialty_list_option_specialties:specialities,
            university1_text:University,
            university_address_geographic_address:address,
            Creator:user_login,
            user_meta_user:user_id,
            rating_custom_user_ratings:'',
            affiliate_custom_locations: Affiliate,
            //type_login1:type_login1,
            documents_list_file:documents_list_file
            //location_affilitate_option_locations:,
        }

        if(type_login1 =="Admin"){
            var ApprovedToPractice =0;
            if($('#crendential-modal #approved-to-practice').is(':checked')){
                ApprovedToPractice=1
            }

            Object.assign(data_post, {approved_to_practice_boolean:ApprovedToPractice});

            var admin_notes = $('#crendential-modal #admin-list-notes').val();
            Object.assign(data_post, {admin_notes_text:admin_notes});
        }

        var data = new FormData();
        var imgData = document.getElementById('credential-document');
        if(imgData.files.length  > 0) {
            for (var i = 0; i < imgData.files.length; i++) {
                data.append('file[]', imgData.files[i], imgData.files[i].name);
            }
        }

        data.append('token', _token);
        data.append('user_meta_id', credentials_id);
        data.append('type_login1', type_login1);
        data.append('data_post',JSON.stringify(data_post));

        var link3 =link._usermetaNewUpdate_sql;
        //var link3 =link._onesignal_add_device;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.ERROR==''){
                    $('#crendential-modal #credentials-id').val(res.user_meta_id);
                    credentials_id=res.user_meta_id;
                    if(window.location.pathname.includes('physician_list.php')){
                        if($this !=''){
                            if(Affiliate !=''){                            ;
                                var location_name = '<a class="color-green-l" href="facility_information.php?id='+Affiliate+'">'+$('#crendential-modal #cred-Affiliate').find("option:selected").text()+'</a>'
                                $this.closest('.panel').find('.location-name-ph').html(location_name);
                            }

                            $this.closest('.panel').find('.degree-ph').text(Degree);

                            var specialities_text='';
                            $('#crendential-modal #list-specialities .row-specialty').each(function(){
                                specialities_text =(specialities_text=='')? $(this).find('.specialty-text').text():specialities_text+', '+$(this).find('.specialty-text').text();
                            })

                            $this.closest('.panel').find('.specialty').text(specialities_text);

                            var languages_text='';
                            $('#crendential-modal #list-languages .row-language').each(function(){
                                languages_text =(languages_text=='')? $(this).find('.language_text').text():languages_text+', '+$(this).find('.value_language').text();
                            })

                            $this.closest('.panel').find('.lang-ph').text(languages_text);
                            $this.closest('.panel').find('.university-ph').text(University);

                            $this.closest('.panel').find('.des-ph').text(Description);

                            if(type_login1 =="Admin"){
                                if($('#crendential-modal #approved-to-practice').is(':checked')){
                                    $this.find('img').attr("src","https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1599537041370x302622980783943800%2Fgreen-approved-stamp-1-1024x772.png?w=128&amp;h=97&amp;auto=compress&amp;fit=crop&amp;dpr=1.25")
                                }else{
                                    $this.find('img').attr("src","https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1599537054153x794623525881115400%2Fnotapproved.png?w=128&amp;h=97&amp;auto=compress&amp;fit=crop&amp;dpr=1.25")
                                }
                            }
                        }
                    }

                    $('#modal-success').modal("show")
                    setTimeout(function(){
                        $('#modal-success').modal("hide");
                        $('#crendential-modal').modal("hide");
                    },2000)


                }

                //
            }
        });

     //

    },
    /***********************************************/
    reset_modal_metaUser:function(){
        $('#crendential-modal #credentials-id').html('');
        $('#crendential-modal #files-area').html('');
        $('#crendential-modal #cred-doctor-name').text('');
        $('#crendential-modal #list-specialities').html('');
        $('#crendential-modal #list-languages').html('');
        $('#crendential-modal #cred-Affiliate').val('').trigger('change');
        $('#crendential-modal #cred-University').val('');
        $('#crendential-modal #cred-Degree').val('');
        $('#crendential-modal #cred-University-Address').val('');
        $('#crendential-modal #cred-Medical-License-Number').val('');
        $('#crendential-modal #cred-Rx-Number').val('');
        $('#crendential-modal #cre-Description').val('');
        $('#crendential-modal #cre-Documents').html('');
        $('#crendential-modal #admin-list-notes').html('');
        $('#crendential-modal #admin-list-notes').html('');
        $('#crendential-modal #approved-to-practice').prop("checked",false);
    },

    add_update_usermeta_sql:function(data){
        //console.log(data);
        Object.assign(data,{ "token": _token});

        var link3 =link._usermetaNewUpdate_sql;
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
                console.log(res);

                //
            }
        });

    }

}
var md_credentials = new modal_credentials();
$(function(){
    md_credentials.init();
});