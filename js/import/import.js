
function importfile(){}
importfile.NAME         = "importfile";
importfile.VERSION      = "1.2";
importfile
importfile.prototype.constructor = importfile;
importfile.prototype = {
    init:function(){
        $('#import-content #import-user').unbind('click').bind('click',function(e){
            imp.user_import(e)
        })

    },

    user_import:function(e){
        e.preventDefault();
        var formData= new FormData($('#import-content form#form-user')[0]);

        var _link = link._import_user;

        $.ajax({
            url: _link,
            type: 'POST',
            data: formData,
            async: false,
            success: function (xhr) {


                return
            },error:function(xhr){
                return;
            },
            cache: false,
            contentType: false,
            processData: false
        });
    }

}
var imp = new importfile();
$(function(){
    imp.init();
});