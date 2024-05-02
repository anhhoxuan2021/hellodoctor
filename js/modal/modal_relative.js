
function modal_relative(){}
modal_relative.NAME         = "modal_relative";
modal_relative.VERSION      = "1.2";
modal_relative.DESCRIPTION  = "Class modal_relative";

modal_relative.prototype.constructor = modal_relative;
modal_relative.prototype = {
    init: function(){
        $('#relative-modal #save-relative').unbind('click').bind('click',function(){
            localStorage.setItemValue('show_modal_apt_step2', '');
            modal_relative.prototype.new_relative()

        })

        $('#relative-modal #save-relative-from-modal-apt').unbind('click').bind('click',function(){
            //console.log("test");
            //localStorage.setItemValue('show_modal_apt_step2', 'yes');
            localStorage.setItemValue('show_modal_apt_step2', '');
            modal_relative.prototype.new_relative()

        })
    },

    relative_list:function(guardian_user){
        var link3 =link._dependent;
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
                var data = res.results;
                if(data.length >0 ){
                    var tr ='';
                    for(var i =0; i<data.length;i++){
                        var clss = "";
                        if(i+1<data.length) clss ="border-b-c111";

                        tr +=modal_relative.prototype.row_content(data[i],clss);

                    }

                    $('#relative-modal #modal-content').html(tr);
                }
            }
        });

    },

    row_content:function(user,border_b){
        var uid=''
        if(user.uid_text!==null){
            uid = user.uid_text
        }

        if(user.display_name_text !=null){
            var name =  user.display_name_text
        }else{
            var first_name_text =(user.first_name_text==null)?'':user.first_name_text
            var middle_name_text =(user.middle_name_text==null)?'':user.middle_name_text
            var family_name_text =(user.family_name_text==null)?'':user.family_name_text

            var name=family_name_text+" "+middle_name_text+" "+first_name_text
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

        if(user.avatar_image ==null) user.avatar_image=''
        var img = '<a href="dashboard.php?id='+user.User_id+'"><img src="'+user.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img"></a>'

        var row_inv='';
        if(user.balance <=0){
            row_inv= '<div class="col-12 padding_rl f-bold color_green">Đã thanh toán đủ</div>'
        }else{
            user.balance = parseFloat(user.balance)
            var inv_balance_text = user.balance.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
            row_inv= '<div class="col-12 padding_rl f-bold color-alert">'+inv_balance_text+'</div>'
        }

        var row = '';
        row +='<div class="row margin_b10 '+border_b+'">' +
            '<div class="col-3 middle">'+img+'</div>' +
            //left
            '<div class="col-9">' +
                '<div class="row">' +
                    '<div class="col-7">' +
                        '<div class="col-12 row f-bold m_b5 c_0c4570">'+uid+' - '+name+'</div>' +
                        '<div class="row m_b5">' +
                            '<div class="col-12 row_table">' +
                                '<i class="fa fa-paper-plane col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+email+'</div>' +
                            '</div>' +
                        '</div>'+
                        '<div class="row m_b5">' +
                            '<div class="col-12 row_table">' +
                                '<i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i><div class="col_table margin-left5">'+primary_phone_number+'</div>' +
                            '</div>' +
                        '</div>'+

                        '<div class="row m_b5">' +
                            '<div class="col-12 row_table">' +
                                '<i class="fa fa-calendar col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+brithday+'</div>' +
                            '</div>' +
                        '</div>'+
                        '<div class="row m_b5">' +
                            '<div class="col-12 row_table">' +
                                '<i class="fa fa-map-marker col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+address+'</div>' +
                            '</div>' +
                        '</div>'+

                        '<div class="row ">' +
                            '<div class="col-12 row_table">' +
                                '<i class="fa fa-id-card col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+identification+'</div>' +
                            '</div>' +
                        '</div>'+

                    '</div>' +
                    //invoice
                    '<div class="col-5">' +
                        '<div class="col-12">'+row_inv+'</div>' +
                        '<div class="col-12"><a href="dashboard.php?id='+user.User_id+'"><button class="btn btn-danger"><strong>Cập nhật</strong></button></a></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            //right
        '</div>'

      return row;
    },

    new_relative:function(){
       var guardian_user = $('#relative-modal #guardian-id').val();
        var address = $('#relative-modal #guardian-address').val();
        var city = $('#relative-modal #guardian-city').val();
        var country = $('#relative-modal #guardian-country').val();
        var family_name = $('#relative-modal #guardian-family-name').val();
        var language1 = $('#relative-modal #guardian-language').val();
        var nationality = $('#relative-modal #guardian-nationality').val();
        var postcode = $('#relative-modal #guardian-postcode').val();
        var primary_phone = $('#relative-modal #guardian-phone').val();
        var province = $('#relative-modal #guardian-province').val();

        var data ={
            //dependent table
            guardian_user:guardian_user,
            //user table
            Address:address,
            City:city,
            Country:country,
            FamilyName:family_name,
            Language:language1,
            NationalityID:nationality,
            PostalCode:postcode,
            PrimaryPhoneNumber:primary_phone,
            ProvinceID:province,
            //ResidentialStatusID:ResidentialStatusID,
            user_type:'Patient',
            token: _token
        }

        var link3 =link._relativeAddNew;
        $.ajax({
            "async": false,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
                // window.location.href = "dashboard.php?id="+data.UID_UniqueID;
            },
            success: function (res) {
                if(res.User_id !=undefined){
                    window.location.href = "dashboard.php?id="+res.User_id;
                }

            }
        });

    },

  reset_modal_relative:function(relative_id){


    },

    //SQL
    add_relative_sql:function(data){
        Object.assign(data,{ "token": _token});
        //console.log(data);
        var link3 =link._relativeAddNew;
        $.ajax({
            "async": false,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
               // window.location.href = "dashboard.php?id="+data.UID_UniqueID;
            },
            success: function (res) {
                //console.log(res);
               // window.location.href = "dashboard.php?id="+data.UID_UniqueID;
                //
            }
        });
    },

}
var md_relative= new modal_relative();
$(function(){
    md_relative.init();
});