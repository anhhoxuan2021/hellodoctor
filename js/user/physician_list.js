
function physician_list(){}
physician_list.NAME         = "physician_list";
physician_list.VERSION      = "1.2";
physician_list.DESCRIPTION  = "Class physician_list";

physician_list.prototype.constructor = physician_list;
physician_list.prototype = {
    init:function(){
        common_f.prototype.get_physician();

        $('.container1 #specialities').append(Specialties);
        //event
        $('#btn-search').unbind('click').bind('click',function(){
            common_f.prototype.get_physician();
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                common_f.prototype.get_physician();
            }
        })

        $("#doctors-content").on('click','.change-approve',function(){
            modal_credentials.prototype.reset_modal_metaUser();
            var me = $(this)
            var user_id = $(this).find('.doctor_id').val();

            modal_credentials.prototype.get_usermetas(user_id);

            var doctor_name = $(this).closest('.panel').find('.doctor-name').text();
            $('#cred-doctor-name').text(doctor_name)
            $('#crendential-modal #user-doctor-id').val(user_id)
            $('#crendential-modal').modal("show");

            $('#crendential-modal #save-cre-div').unbind('click').bind('click',function(){
                modal_credentials.prototype.save_upadte_usermeta(me);
            })

        });

        $('.container1 #specialities').change(function(){
            common_f.prototype.get_physician();
        })

    },

}
