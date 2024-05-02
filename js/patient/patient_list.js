
function patient_list(){}
patient_list.NAME         = "patient_list";
patient_list.VERSION      = "1.2";
patient_list.DESCRIPTION  = "Class patient_list";

patient_list.prototype.constructor = patient_list;
patient_list.prototype = {
    init:function(){
        patient_list.prototype.get_patients();
        //event
        $('#modal-open-signup').unbind('click').bind('click',function(){
            modal_signup.prototype.reset_modal_signup()
            $('#signup-modal').modal("show")
        })

        $('#patient-for-doctor').unbind('click').bind('click',function(){
            patient_list.prototype.get_patients();
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                patient_list.prototype.get_patients();
            }
        })
    },


    http_content:function(user,i){
        var uid=''
        if(user.uid_text!==null){
            uid = user.uid_text
        }
        var name =''
        if(user.display_name_text !=null){
            name =  user.display_name_text
        }else{
            var first_name_text =(user.first_name_text==null)?'':user.first_name_text
            var middle_name_text =(user.middle_name_text==null)?'':user.middle_name_text
            var family_name_text =(user.family_name_text==null)?'':user.family_name_text

            name=family_name_text+" "+middle_name_text+" "+first_name_text
        }

        var brithday ='';
        if(user.birth_date_date !=null && user.birth_date_date !=''){
            //var d = new Date(user.birth_date_date);
           // brithday = d.toLocaleString();
            var date_temp = user.birth_date_date.split(' ');
            date_temp = date_temp[0].split('-')
            brithday = date_temp[2]+'-'+date_temp[1]+'-'+date_temp[0];
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
            address=user.address_geographic_address
        }

        var identification='';
        if(user.identification_number_text!=null){
            identification=user.identification_number_text
        }

        var img =''
        if(user.avatar_image !=null && user.avatar_image !=''){
            img ='<img src="'+user.avatar_image+'" class="rounded-circle shadow-2 fs-xl" alt="change img">'
        }

        var row_inv='';
        if(user.balance <=0){
            row_inv= '<div class="col-12 margin-r15 f-bold color_green">Đã thanh toán</div>'
        }else{
            var inv_balance_text = common_f.prototype.convert_str_thousand(user.balance.toString()) +' VND'
            row_inv= '<div class="col-12 margin-r15 f-bold color-alert">'+inv_balance_text+'</div>'
        }


        var row1='';
        if(i%2==0){
            row1 +='<div class="row">' +
                '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="min-height: 330px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' +
                '<div class="col-12 middle">'+img+'</div>' +
                '</div>' +
                '<div class="row m-t10">' +
                '<div class="col-12 text-center"><a class="color-green-l f-size20" href="dashboard.php?id='+user.User_id +'"><strong>'+uid+' - '+name+'</strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-map-marker col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+address+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+primary_phone_number+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-paper-plane col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+email+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-calendar col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+brithday+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-id-card col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+identification+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t15">' +
                '<div class="col-12 text-right">'+row_inv+'</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->'
        }else{
            row1 += '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="min-height: 330px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' +
                '<div class="col-12 middle">'+img+'</div>' +
                '</div>' +
                '<div class="row m-t10">' +
                '<div class="col-12 text-center"><a class="color-green-l f-size20" href="dashboard.php?id='+user.User_id +'"><strong>'+uid+' - '+name+'</strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-map-marker col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+address+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+primary_phone_number+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-paper-plane col_table p-r10 color6676f2"></i>' +
                '<div class="col_table margin-left5">'+email+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-calendar col_table p-r10 color6676f2"></i>' +
                '<div class="col_table  margin-left5">'+brithday+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                '<div class="col-12 margin_l15 row_table">' +
                '<i class="fa fa-id-card col_table p-r10 color6676f2"></i>' +
                '<div class="col_table  margin-left5">'+identification+'</div>' +
                '</div>' +
                '</div>' +
                '<div class="row m-t15">' +
                '<div class="col-12 text-right">'+row_inv+'</div>' +
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

    get_patients: function(){
        var method ="POST";
        var _link = link._users;

        var  _data ={
            token:_token,
            limit:1,cursor:0,
            text_search:$('#search-text').val(),
            user_type_option_user_type:"Patient"
        }

        if($('#patient-for-doctor').is(":checked")){
            Object.assign(_data,{ "patient_for_doctor": 1,"assigned_doctor_user":user_login});
        }

        var $pagination = $('#patient-pagination');
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
                    $('#patient-content').html('');
                    return false
                }else{
                    $('#user-record').text(data.user.row_cnt);
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
                            limit:10,cursor:cursor,
                            text_search:$('#search-text').val(),
                            user_type_option_user_type:"Patient"
                        }

                        if($('#patient-for-doctor').is(":checked")){
                            Object.assign(_data,{ "patient_for_doctor": 1,"assigned_doctor_user":user_login});
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
                                //console.log(res);
                                var data=res.user.results;
                                var j=0;
                                data.forEach(function (item) {
                                    html += patient_list.prototype.http_content(item,j);
                                    j++;
                                });//end for each

                                if(j%2 !=0 || j==0){
                                    html +='</row><!--end row-->';
                                }

                                $('#patient-content').html(html);
                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    },


}
var p_list = new patient_list();
$(function(){
    p_list.init();
});