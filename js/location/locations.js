
function locations(){}
locations.NAME         = "locations";
locations.VERSION      = "1.2";
locations.DESCRIPTION  = "Class locations";

locations.prototype.constructor = locations;
locations.prototype = {
    init:function(){
        var type_list_option_locations =''
        if(window.location.pathname.includes('lab_list.php')){
            type_list_option_locations="Lab"
        }else if(window.location.pathname.includes('facility_list.php')){
            type_list_option_locations="Hospital"
        }else if(window.location.pathname.includes('pharmacy_list.php')){
            type_list_option_locations="Pharmacy"
        }
        locations.prototype.get_locations(type_list_option_locations);
        //event
        $('#btn-search').unbind('click').bind('click',function(){
            locations.prototype.get_locations(type_list_option_locations);
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                locations.prototype.get_locations(type_list_option_locations);
            }
        })
    },

    http_content:function(location,href_temp,i){
        var address='';
        if(location.address_geographic_address!=null){
            address=location.address_geographic_address

        }

        var phone='';
        if(location.phone_number_text!=null){
            phone= location.phone_number_text;
        }

        var email='';
        if(location.email_text!=null){
            email=location.email_text
        }

        var fax='';
        if(location.fax_text!=null){
            fax=location.fax_text
        }

        var type_list='';
        if(location.type_list_option_locations!=null){
            location.type_list_option_locations.forEach(function(item){
                type_list =(type_list=='')?item:type_list+', '+item;
            })
        }

        var img=''
        if(location.photo_image !=null && location.photo_image !=''){
            img ='<img src="'+location.photo_image+'" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'
        }else{
            img ='<img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589437844430x709489064698811900%2FHospital%2520No%2520Image.png?w=384&amp;h=285&amp;auto=compress&amp;dpr=1.25&amp; fit=max" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'
        }

        var location_name=''
        if(location.location_name_text !=null){
            location_name =location.location_name_text
        }

        var href ="facility_information.php?id="+ location.location_id
        if(count_session > 0){
            if(user_type_login !='Patient'){
                href =href_temp+ location.location_id
            }
        }

        var img1='<div style="height: 184px; left: 0px; width:100%; position: relative">' +
                '<div  style="position: absolute; box-sizing: border-box; z-index: 2; height: 184px; top: 0px; border-radius: 0px; cursor: pointer; width: 100%; left: 0px;"><a target="_self" href="'+href+'">'+img+'</a></div>' +
                '<a target="_self" href="'+href+'" style="position: absolute; box-sizing: border-box; z-index: 4;  top: 3px; white-space: pre-wrap; text-decoration: none!important; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: &quot;Open Sans&quot;; font-size: 18px; font-weight: bold; color: rgb(29, 73, 112); line-height: 1.5; border-radius: 0px; width: 100%; left: 5px;">' +
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

    get_locations: function(type_list_option_locations){
        var $pagination = '';
        var el =''
        var hrf='';
        if(type_list_option_locations =="Lab"){
            el = $('#lab-content')
            el.html("");
            $pagination = $('#lab-pagination')
            hrf="edit.php?id="
        }else if(type_list_option_locations =="Hospital"){
            el = $('#facility-content')
            el.html("");
            $pagination = $('#facility-pagination');
            hrf="edit.php?id="
        }else if(type_list_option_locations =="Pharmacy"){
            el = $('#pharmacy-content')
            el.html("");
            $pagination = $('#pharmacy-pagination');
            hrf="edit.php?id="
        }


        var _link = link._locations;
        var _data ={token:_token,
            limit:1,cursor:0,type_list_option_locations:type_list_option_locations,text_search:$('#search-text').val()}


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
                            limit:10,cursor:cursor,type_list_option_locations:type_list_option_locations,text_search:$('#search-text').val()}

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
                                    html += locations.prototype.http_content(item,hrf,i)
                                    i++;
                                })

                                if(i%2 !=0 || i==0){
                                    html +='</row> <!--end row-->';
                                }

                                el.html(html);


                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    }

}

var lct= new locations();
$(function(){
    lct.init();
});
