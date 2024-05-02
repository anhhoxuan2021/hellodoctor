
function modal_create_facility(){
    this.fileName=''
}
modal_create_facility.NAME         = "modal_create_facility";
modal_create_facility.VERSION      = "1.2";
modal_create_facility.DESCRIPTION  = "Class modal_create_facility";

modal_create_facility.prototype.constructor = modal_create_facility;
modal_create_facility.prototype = {
    init: function(){
        $('#open-modal-facility').unbind('click').bind('click',function(){
            modal_create_facility.prototype.reset_modal_location();
            $('#create-facility-modal').modal('show');
            if(window.location.pathname.includes('lab_list.php')){
                var key = "Lab";
                var name = "Phòng xét nghiệm";
                modal_create_facility.prototype.select_auto_location_type(key,name);
            }else if(window.location.pathname.includes('facility_list.php')){
                var key = "Hospital";
                var name = "Bệnh viện";
                modal_create_facility.prototype.select_auto_location_type(key,name);
            }else if(window.location.pathname.includes('pharmacy_list.php')){
                var key = "Pharmacy";
                var name = "Nhà thuốc";
                modal_create_facility.prototype.select_auto_location_type(key,name);
            }

        })
        $('#create-facility-modal #l-type').append(Location_type_option);

        $('#create-facility-modal #l-addr').change(function(){
            modal_create_facility.prototype.call_map()
        })

        $('#create-facility-modal #l-type').change(function(){
            var t_value = $(this).val();
            var t_text = $(this).find("option:selected").text();
            $(this).find("option:selected").css("display", "none");
            $(this).find("option[value='']").attr("selected", "selected");

            var row ='<div class="row type-selected m-t5">' +
                    '<input type="hidden" class="type_value" value="'+t_value+'">' +
                    '<div class="col-6">'+t_text+'</div>' +
                    '<div class="col-2 delete" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div>' +
                '</div>'
            $('#create-facility-modal #list-type').append(row)
        })

        $('#create-facility-modal #list-type').on('click','.delete',function(){
            var t_value =$(this).closest('.type-selected').find('.type_value').val();
            $(this).closest('.type-selected').remove();
            $('#create-facility-modal #l-type option[value="'+t_value+'"]').css("display", "");

        })

        $('#create-facility-modal #save-facility').unbind('click').bind('click',function(){
            modal_create_facility.prototype.call_new_local();
        })
    },
    /********************************/
    select_auto_location_type:function(key,name){
        $("#create-facility-modal #l-type").find("option[value='"+key+"']").css("display", "none");
        $("#create-facility-modal #l-type").find("option[value='']").attr("selected", "selected");
        var row ='<div class="row type-selected m-t5">' +
            '<input type="hidden" class="type_value" value="'+key+'">' +
            '<div class="col-6">'+name+'</div>' +
            '<div class="col-2 delete" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div>' +
            '</div>'
        $('#create-facility-modal #list-type').append(row)
    },
    /********************************/
    previewFile: function(event){
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('photo-img');
            output.src = reader.result;
        };
        modal_create_facility.fileName = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
    },
    /**************************/
    call_new_local:function( ){
        var location_name_text =$('#create-facility-modal #l-name').val();
        var email_text =$('#create-facility-modal #l-email').val();
        var phone_number_text =$('#create-facility-modal #l-phone').val();
        var fax_text =$('#create-facility-modal #l-fax').val();
        var address_geographic_address =$('#create-facility-modal #l-addr').val();

        var type_list_option_locations=[];
        $('#create-facility-modal #list-type .type-selected').each(function(){            ;
            type_list_option_locations.push($(this).find('.type_value').val())
        })

        var hours_list_date_range =[]
        hours_list_date_range.push({Sáng: '7AM-12 AM'},{Chiều: '1PM-5 PM'},{Tối: '6PM-9 PM'})

        var _data ={
            location_name_text:location_name_text,
            email_text: email_text,
            phone_number_text:phone_number_text,
            fax_text:fax_text,
            address_geographic_address:address_geographic_address,
            type_list_option_locations:type_list_option_locations,
            hours_list_date_range:hours_list_date_range
        }

        if($("#photo-input").val() == ''){
            var data1 = {
                token:_token,
                data_post:_data
            }

            modal_create_facility.prototype.create_location(data1)
        }else{
            var reader = new FileReader();
            reader.onload = function(){
                Object.assign(_data,{photo_image:modal_create_facility.fileName});
                var data1 = {
                    token:_token,
                    data_post:_data,
                    photo_data: reader.result
                }

                modal_create_facility.prototype.create_location(data1)
            };
            reader.readAsDataURL($("#photo-input").get(0).files[0]);
        }
    },

    /**************************/
    create_location:function(data ){
        var _link = link._locationAdd_Update
        //
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            data:data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error==''){
                    $('#modal-success').modal("show")
                    setTimeout(function(){
                        $('#modal-success').modal("hide");
                        $('#create-facility-modal').modal("hide");
                    },2000)
                }else{
                    $('#modal-error #err-message').text(res.Error);
                    $('#modal-error').modal("show")
                    setTimeout(function(){
                        $('#modal-error').modal("hide");
                        $('#modal-error #err-message').text('');
                    },2000)
                }
            }
        })
    },
    /********************************/
    call_map:function(){
        var geocoder = new google.maps.Geocoder();
        var address = $('#l-addr').val();

        geocoder.geocode( { 'address': address}, function(results, status) {
            var latitude = 0;
            var longitude = 0;
            if (status == google.maps.GeocoderStatus.OK) {
                 latitude = results[0].geometry.location.lat();
                 longitude = results[0].geometry.location.lng();

                //map
                map.setCenter({
                    lat: latitude,
                    lng: longitude
                });
                var infowindow = new google.maps.InfoWindow();
                var marker,

                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude, longitude),
                        map: map
                    });
                google.maps.event.addListener(marker, 'click', (function (marker) {
                    return function () {
                        infowindow.setContent(positions[i].content);
                        infowindow.open(map, marker);
                    }
                }) (marker));
            }
        });
    },
    /********************************/
    openFile:function(event){

        var input = event.target;

        var reader = new FileReader();
        var dataURL =''
        reader.onload = function(){
             dataURL = reader.result;
            var output = document.getElementById('appointment-attachement');
            output.src = dataURL;
        };
        //var data1 = dataURL.split("base64,")[1];
        //var data1 =  JSON.stringify(dataURL)
       // var data = {'photo_image': dataURL,location_name_text:"test"};
        //modal_create_facility.prototype.upload_img(data);

        reader.readAsDataURL(input.files[0]);

    },
    /********************************/
    reset_modal_location:function(){
        $('#create-facility-modal #l-name').val('');
        $('#create-facility-modal #l-email').val('');
        $('#create-facility-modal #l-phone').val('');
        $('#create-facility-modal #l-fax').val('');
        $('#create-facility-modal #l-addr').val('');


        $('#create-facility-modal #list-type').html('');
    }

}
var md_fac= new modal_create_facility();
$(function(){
    md_fac.init();
});