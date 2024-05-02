
function facility_edit(){
    this.fileName=''
}
facility_edit.NAME         = "facility_edit";
facility_edit.VERSION      = "1.2";
facility_edit.DESCRIPTION  = "Class facility_edit";

facility_edit.prototype.constructor = facility_edit;
facility_edit.prototype = {
    init:function(){
        var id = getUrlParameter1('id');
        if(id ==undefined ) {
            var _path = host2 + 'facility_list.php'
            document.location.href = _path;
        }

        $('#location-content #l-type').append(Location_type_option);

        facility_edit.prototype.location(id);
        common_f.prototype.get_physician_cooperation(id)
        //event
        $('#location-content #l-type').change(function(){
            var t_value = $(this).val();
            var t_text = $(this).find("option:selected").text();
            $(this).find("option:selected").css("display", "none");
            $(this).find("option[value='']").attr("selected", "selected");

            var row ='<div class="row type-selected m-t5">' +
                '<input type="hidden" class="type_value" value="'+t_value+'">' +
                '<div class="col-6">'+t_text+'</div>' +
                '<div class="col-2 delete" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div>' +
                '</div>'
            $('#location-content #list-type').append(row)
        })

        $('#location-content #list-type').on('click','.delete',function(){
            var t_value =$(this).closest('.type-selected').find('.type_value').val();
            $(this).closest('.type-selected').remove();
            $('#location-content #l-type option[value="'+t_value+'"]').css("display", "");

        });

        $('#location-content #l-addr').change(function(){
            facility_edit.prototype.call_map()
        });

        $('#location-content #save-facility').unbind('click').bind('click',function(){
            facility_edit.prototype.call_new_update_facility(id);
        })
    },

    location:function(location_id){
        var _link = link._locations_by_id;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": _link,
            "method": "POST",
            dataType: 'json',
            data:{token:_token,location_id:location_id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
                var data = res.location
                if(data.length <=0) return false;
                //console.log(data)
                var l_name =''
                if(data.location_name_text !=undefined && data.location_name_text !=null) l_name = data.location_name_text
                var address =''
                var lat=0;
                var lng=0;
                if(data.address_geographic_address !='' && data.location_name_text !=null){
                    address = data.address_geographic_address
                }

                var phone =''
                if(data.phone_number_text !=null) phone = data.phone_number_text
                var fax =''
                if(data.fax !=null) fax = data.fax
                var mail =''
                if(data.email_text !=null) mail = data.email_text

                var row =''
                if(data.type_list_option_locations !=null){
                    data.type_list_option_locations.forEach(function(t_value){
                        var t_text = Location_type_arr[t_value]
                        row +='<div class="row type-selected m-t5">' +
                            '<input type="hidden" class="type_value" value="'+t_value+'">' +
                            '<div class="col-6">'+t_text+'</div>' +
                            '<div class="col-2 delete" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div>' +
                            '</div>';

                        $("#location-content #l-type option[value='"+t_value+"']").css("display", "none");

                    })
                }

                $('#location-content #location-name').val(l_name)
                $('#location-content #adress').val(address)
                $('#location-content #phone').val(phone)
                $('#location-content #fax').val(fax)
                $('#location-content #email').val(mail)
                $('#location-content #list-type').html(row)
                $('#location-content #l-addr').val(address)

                var img=''
                if(data.photo_image !=null && data.photo_image !=''){
                    document.getElementById("photo-img").src = data.photo_image
                    //img ='<img src="'+data.photo_image+'" alt="change img" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">'

                }else{
                    document.getElementById("photo-img").src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589437844430x709489064698811900%2FHospital%2520No%2520Image.png?w=384&amp;h=285&amp;auto=compress&amp;dpr=1.25&amp; fit=max"
                    //img ='<img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589437844430x709489064698811900%2FHospital%2520No%2520Image.png?w=384&amp;h=285&amp;auto=compress&amp;dpr=1.25&amp; fit=max" alt="change img" style="display: block; margin: 0px; border-radius: 0px;width: 100%; height: 100%; ">'
                }

                //map
                //address +=', US';
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode( { 'address': address}, function(results, status) {

                    if (status == google.maps.GeocoderStatus.OK) {
                        var lat = results[0].geometry.location.lat();
                        var lng = results[0].geometry.location.lng();

                        //map
                        map.setCenter({
                            lat: lat,
                            lng: lng
                        });
                        var infowindow = new google.maps.InfoWindow();
                        var marker,

                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(lat, lng),
                                map: map
                            });
                        google.maps.event.addListener(marker, 'click', (function (marker) {
                            return function () {
                                infowindow.setContent(positions[i].content);
                                infowindow.open(map, marker);
                            }
                        }) (marker));
                        /////////////

                    }
                });
                //////////
            }
        })

    },

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
    previewFile: function(event){
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('photo-img');
            output.src = reader.result;
        };
        facility_edit.fileName = event.target.files[0].name;
        reader.readAsDataURL(event.target.files[0]);
    },

    /**************************/
    call_new_update_facility:function(location_id ){
        if(location_id ==undefined ) return false

        var location_name_text =$('#location-content #location-name').val();
        var email_text =$('#location-content #email').val();
        var phone_number_text =$('#location-content #phone').val();
        var fax_text =$('#location-content #fax').val();
        var address_geographic_address =$('#location-content #adress').val();

        var type_list_option_locations=[];
        $('#location-content #list-type .type-selected').each(function(){            ;
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
                location_id:location_id,
                data_post:_data
            }

            facility_edit.prototype.update_facility(data1)
        }else{
            var reader = new FileReader();
            reader.onload = function(){
                Object.assign(_data,{photo_image:facility_edit.fileName});
                var data1 = {
                    token:_token,
                    location_id:location_id,
                    data_post:_data,
                    photo_data: reader.result
                }

                facility_edit.prototype.update_facility(data1)
            };
            reader.readAsDataURL($("#photo-input").get(0).files[0]);
        }
    },
    /**************************/
    update_facility:function(data ){
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

}
var fac_edit = new facility_edit();
$(function(){
    fac_edit.init();
});