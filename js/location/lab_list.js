
function lab_list(){}
lab_list.NAME         = "lab_list";
lab_list.VERSION      = "1.2";
lab_list.DESCRIPTION  = "Class lab_list";

lab_list.prototype.constructor = lab_list;
lab_list.prototype = {
    init:function(){
        lab_list.prototype.get_lab();
        //event
        $('#btn-search').unbind('click').bind('click',function(){
            lab_list.prototype.get_lab();
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                lab_list.prototype.get_lab();
            }
        })
    },

    http_content:function(lab,i){
        var address='';
        if(lab.address_geographic_address!=undefined){
            address=lab.address_geographic_address.address
        }

        var phone='';
        if(lab.phone_number_text!=undefined){
            phone= lab.phone_number_text;
        }

        var email='';
        if(lab.email_text!=undefined){
            email=lab.email_text
        }

        var fax='';
        if(lab.fax_text!=undefined){
            fax=lab.fax_text
        }

        var type_list='';
        if(lab.type_list_option_locations!=undefined){
            lab.type_list_option_locations.forEach(function(item){
                type_list =(type_list=='')?item:type_list+', '+item;
            })
        }

        var img=''
        if(lab.photo_image !=undefined){
            img ='<img src="'+lab.photo_image+'" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'
        }else{
            img ='<img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589437844430x709489064698811900%2FHospital%2520No%2520Image.png?w=384&amp;h=285&amp;auto=compress&amp;dpr=1.25&amp; fit=max" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'
        }

        var location_name=''
        if(lab.location_name_text !=undefined){
            location_name =lab.location_name_text
        }

        var img1='<div style="height: 184px; left: 0px; width:100%; position: relative">' +
                '<div  style="position: absolute; box-sizing: border-box; z-index: 2; height: 184px; top: 0px; border-radius: 0px; cursor: pointer; width: 100%; left: 0px;">'+ img +'</div>' +
                '<a target="_self" href="edit.php?id='+lab._id+'" style="position: absolute; box-sizing: border-box; z-index: 4;  top: 3px; white-space: pre-wrap; text-decoration: none!important; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: &quot;Open Sans&quot;; font-size: 18px; font-weight: bold; color: rgb(29, 73, 112); line-height: 1.5; border-radius: 0px; width: 100%; left: 5px;">' +
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

}

var lab = new lab_list();
$(function(){
    lab.init();
});
