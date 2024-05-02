
function physician_infomation(){}
physician_infomation.NAME         = "physician_infomation";
physician_infomation.VERSION      = "1.2";
physician_infomation.DESCRIPTION  = "Class physician_infomation";

physician_infomation.prototype.constructor = physician_infomation;
physician_infomation.prototype = {
    init:function(){
        var id = getUrlParameter1('id');
        if(id ==undefined ) return;
        physician_infomation.prototype.physician(id);
        common_f.prototype.get_physician(id);
        //event
    },


    http_content:function(user){
        var uid=''
        if(user.uid_text!==null){
            uid = user.uid_text
        }

        var name = user.display_name_text

        if(name != null && name !=''){
            var first_name_text =(user.first_name_text !=null && user.first_name_text !='')?user.first_name_text :''
            var middle_name_text =(user.middle_name_text !=null && user.middle_name_text !='')?user.middle_name_text:''
            var family_name_text =(user.family_name_text !=null && user.family_name_text !='')?user.family_name_text:''

            name=family_name_text+" "+middle_name_text+" "+first_name_text
        }

        var brithday ='';
        if(user.birth_date_date !=null){
            var d = new Date(user.birth_date_date);
            brithday = d.toLocaleString();
        }


        var email='';
        if(user.authentication!=null){
            email=user.authentication.email.email
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

        var img = ''
        if(user.avatar_image !=null && user.avatar_image !='')
        img ='<img src="'+user.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'

        //Affiliate
        var location_name = '';
        if(user.location_name_text !='' && user.location_name_text !=null){
            location_name = '<a class="color-green-l" href="facility_information.php?id='+user.um_location_affilitate_option_locations+'">'+user.location_name_text+'</a>'
        }

        var degree='';
        var specialty =''
        var university1 =''
        var languages =''
        var description =''

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
                    '<a class="color-green-l" href="dashboard.php?id='+user._id+'">...Xem thêm</a>'
            }else{
                description = user.um_description_text
            }

        }


        $('#doctor-content #doctor').val(user.User_id)

        $('#doctor-content #image').html(img)
        $('#doctor-content #doctor-name').text(name)
        $('#doctor-content #location').html(location_name)
        $('#doctor-content #degree').text(degree)
        $('#doctor-content #speciality').text(specialty)
        $('#doctor-content #university').text(university1)
        $('#doctor-content #Languges').text(languages)
        $('#doctor-content #description').text(description)
        //
    },
    /********************************************************/
    physician:function(user_id){
        var link3 =link._user_by_id;
        //Object.assign(data,{ "token": _token});
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:{token:_token,User_id:user_id},
            dataType: 'json',
            //contentType: application/json,
            error : function (status,xhr,error) {
            },
            success: function (res) {
                physician_infomation.prototype.http_content(res.user);
            }
        });

    }

}
var physician = new physician_infomation();
$(function(){
    physician.init();
});