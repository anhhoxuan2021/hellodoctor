
function facility_list(){}
facility_list.NAME         = "facility_list";
facility_list.VERSION      = "1.2";
facility_list.DESCRIPTION  = "Class facility_list";

facility_list.prototype.constructor = facility_list;
facility_list.prototype = {
    init:function(){
        facility_list.prototype.get_facility();
        //event
        $('#btn-search').unbind('click').bind('click',function(){
            facility_list.prototype.get_facility();
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                facility_list.prototype.get_facility();
            }
        })
    },

    http_content:function(facility,i){
        var address='';
        if(facility.address_geographic_address!=null){
            address=facility.address_geographic_address
        }

        var phone='';
        if(facility.phone_number_text!=null){
            phone= facility.phone_number_text;
        }

        var email='';
        if(facility.email_text!=null){
            email=facility.email_text
        }

        var fax='';
        if(facility.fax_text!=null){
            fax=facility.fax_text
        }

        var type_list='';
        if(facility.type_list_option_locations!=null){
            facility.type_list_option_locations.forEach(function(item){
                type_list =(type_list=='')?item:type_list+', '+item;
            })
        }

        var img=''
        if(facility.photo_image !=null && facility.photo_image !=''){
            img ='<img src="'+facility.photo_image+'" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'
        }else{
            img ='<img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589437844430x709489064698811900%2FHospital%2520No%2520Image.png?w=384&amp;h=285&amp;auto=compress&amp;dpr=1.25&amp; fit=max" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'
        }

        var location_name=''
        if(facility.location_name_text !=null){
            location_name =facility.location_name_text
        }

        var href ="facility_information.php?id="+ facility.location_id
        if(count_session > 0){
            if(user_type_login !='Patient'){
                href ="edit.php?id="+ facility.location_id
            }
        }

        var img1='<div style="height: 184px; left: 0px; width:100%; position: relative">' +
                '<div  style="position: absolute; box-sizing: border-box; z-index: 2; height: 184px; top: 0px; border-radius: 0px; cursor: pointer; width: 100%; left: 0px;"><a target="_self" href="'+href+'">'+img+'</a></div>' +
                '<a target="_self" href="'+href+'"  style="position: absolute; box-sizing: border-box; z-index: 4;  top: 3px; white-space: pre-wrap; text-decoration: none!important; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: &quot;Open Sans&quot;; font-size: 18px; font-weight: bold; color: rgb(29, 73, 112); line-height: 1.5; border-radius: 0px; width: 100%; left: 5px;">' +
                    '<div class="content">'+location_name+'.</div>' +
                '</a>' +
            '</div>'

        var row1='';
        if(i%2==0){
            row1 +='<div class="row">' +
                '<!--col-6-->' +
            '<div class="col-6">' +
              '<div class="panel" style="height: 220px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' +
                    '<div class="col-5 padding_r">'+img1+'</div>' +
                    '<div class="col-7">' +
                        '<div class="col-12 m-t5">' +
                            '<div class="row">' +
                                '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-map-marker color6676f2 m-t2 padding_rl "></i></div>'+
                                '<div class="col-10 padding_rl">'+address+'</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 m-t5">' +
                            '<div class="row">' +
                                '<i class="col-1 fa fa-phone fa-flip-horizontal color6676f2 m-t2"></i>' +
                                '<div class="col-10 padding_rl">'+phone+'</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 m-t5">' +
                            '<div class="row">' +
                                '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-paper-plane color6676f2 m-t2 padding_rl "></i></div>'+
                                '<div class="col-10 padding_rl">'+email+'</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 m-t5">' +
                            '<div class="row">' +
                                '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-fax color6676f2 m-t2 padding_rl "></i></div>'+
                                '<div class="col-10 padding_rl">'+fax+'</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="col-12 m-t5">' +
                            '<div class="row">' +
                                '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-location-arrow color6676f2 m-t2 padding_rl "></i></div>'+
                                '<div class="col-10 padding_rl f-bold">'+type_list+'</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
            '<!--end col-6-->'
        }else{
            row1 += '<!--col-6-->' +
                '<div class="col-6">' +
                    '<div class="panel" style="height: 220px!important; border: #ff5e39 solid 1px">' +
                        '<div class="row m-t15">' +
                            '<div class="col-5 middle">'+img1+'</div>' +
                            '<div class="col-7">' +
                                '<div class="col-12 m-t5">' +
                                    '<div class="row">' +
                                        '<div class="col-1 text-left padding_rl"><i class="col-1 fa fa-map-marker color6676f2 m-t2 padding_rl"></i></div>'+
                                        '<div class="col-10 padding_rl">'+address+'</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-12 m-t5">' +
                                    '<div class="row">' +
                                        '<i class="col-1 fa fa-phone fa-flip-horizontal color6676f2 m-t2"></i>' +
                                        '<div class="col-10 padding_rl">'+phone+'</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-12 m-t5">' +
                                    '<div class="row">' +
                                        '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-paper-plane color6676f2 m-t2 padding_rl "></i></div>'+
                                        '<div class="col-10 padding_rl">'+email+'</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-12 m-t5">' +
                                    '<div class="row">' +
                                        '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-fax color6676f2 m-t2 padding_rl "></i></div>'+
                                        '<div class="col-10 padding_rl">'+fax+'</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-12 m-t5">' +
                                    '<div class="row">' +
                                        '<div class="col-1 padding_rl text-left"><i class="col-1 fa fa-location-arrow color6676f2 m-t2 padding_rl "></i></div>'+
                                        '<div class="col-10 padding_rl f-bold">'+type_list+'</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
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

    get_facility: function(){
        $('#facility-content').html();
        var _link = link._locations;
        var _data ={token:_token,
            limit:1,cursor:0,type_list_option_locations:"Hospital",text_search:$('#search-text').val()}

        var $pagination = $('#facility-pagination');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (data) {
                var totalRecords = parseInt(data.row_cnt);
                if(totalRecords <=0){
                    return false;
                }
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
                        var _data ={token:_token,
                            limit:10,cursor:cursor,type_list_option_locations:"Hospital",text_search:$('#search-text').val()}

                        var html='';
                        //
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": _link,
                            "method": "POST",
                            data:_data,
                            dataType: 'json',

                            error : function (status,xhr,error) {
                            },
                            success: function (res) {
                                //console.log(res);
                                //return
                                //
                                var data=res.locations;
                                var i=0;
                                data.forEach(function(item){
                                    html += facility_list.prototype.http_content(item,i)
                                    i++;
                                })

                                if(i%2 !=0 || i==0){
                                    html +='</row> <!--end row-->';
                                }

                                $('#facility-content').html(html);


                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    }

}

var fac = new facility_list();
$(function(){
    fac.init();
});
