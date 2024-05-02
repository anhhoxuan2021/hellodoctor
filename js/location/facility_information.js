
function facility_information(){}
facility_information.NAME         = "facility_information";
facility_information.VERSION      = "1.2";
facility_information.DESCRIPTION  = "Class facility_information";

facility_information.prototype.constructor = facility_information;
facility_information.prototype = {
    init:function(){
        var id = getUrlParameter1('id');
        if(id ==undefined ) return;
        facility_information.prototype.location(id);

        //getlist doctor
        if(login_ready >0){
            common_f.prototype.get_physician_cooperation(id)
        }
        //event
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

                $('#location-content #location-name').text(l_name)
                $('#location-content #adress').text(address)
                $('#location-content #phone').text(phone)
                $('#location-content #fax').text(fax)
                $('#location-content #email').text(mail)
                $('#location-content #list-type').html(row)
                $('#location-content #l-addr').text(address)

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


}
var facility = new facility_information();
$(function(){
    facility.init();
});