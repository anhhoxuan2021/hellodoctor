
function history_docs(){}
history_docs.NAME         = "history_docs";
history_docs.VERSION      = "1.2";
history_docs.DESCRIPTION  = "Class history_docs";

history_docs.prototype.constructor = history_docs;
history_docs.prototype = {
    init: function(){
        $("#tab-docs-click").unbind("click").bind("click",function(){
            var patient_id = $("#patient-id").val();

            if(window.location.pathname.includes('dashboard.php')){
                var id = getUrlParameter1('id');

                if(id!=undefined){
                    patient_id =id
                }
            }
            $('#tbl-doc-content tbody').html('');
            h_docs.get_docs_history(patient_id);

        });

    },

    get_docs_history:function(profile_user){
        //get relatives
        var link3 =link._history_doc;
        var _data ={token:_token,limit:1,cursor:0,profile_user:profile_user}

        var $pagination = $('#pagination_history_doc');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:_data,
            dataType: 'json',
            error : function (status,xhr,error) {
            },
            success: function (data) {
                var totalRecords = parseInt(data.row_cnt);
                //console.log("totalRecords= "+totalRecords);
                if(totalRecords == 0) return;
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
                        _data ={token:_token,limit:10,cursor:cursor,profile_user:profile_user}

                        var tr='';
                        // console.log
                        $.ajax({
                            "async": true,
                            "crossDomain": true,
                            "url": link3,
                            data:_data,
                            "method": "POST",
                            dataType: 'json',

                            error : function (status,xhr,error) {
                            },
                            success: function (res) {
                                // console.log(res);
                                if(res.documents==undefined) return
                                var data=res.documents;
                                var i=1;
                                data.forEach(function (item) {
                                    tr += h_docs.tr_content(item,i)
                                    i++
                                });//end for each

                                $('#tbl-doc-content tbody').html(tr);
                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
                //
            }
        });
    },

    tr_content:function(docs,i){
        //console.log(lab);
        var tr ='';
        //date
        var DocumentID = docs.DocumentID;
        var date_time = ''
        if(docs.renew_date_date !=null) date_time = docs.renew_date_date

        var docs_type =''
        console.log(document_type_arr);
        if(docs.type_option_document_type !=null && docs.type_option_document_type !='')
        {
            docs_type =  document_type_arr[docs.type_option_document_type]

        }

        var list_files ='';
        if(docs.file_list_file !=null && docs.file_list_file !='')
        {
            docs.file_list_file.forEach(function(item){
                var image_temp = item.split("/");
                var index = image_temp.length -1;
                list_files +='<div class="m_b10 w100 col-12 margin_l15 text-left">' +
                    '<a href="'+item+'" target = "blank">'+image_temp[index]+'</a></div>'
            })
        }

        var display_name =''
        if(docs.display_name_text !=null && docs.display_name_text !='')
        {
            display_name =  docs.display_name_text
        }

        tr +='<tr>' +
            '<td>'+i+'</td>' +
            '<td>'+date_time+'</td>' +
            '<td>'+list_files+'</td>' +
            '<td class="text-left margin_l15">'+docs_type+'</td>' +
            '<td>'+display_name+'</td>' +
            '</tr>';

        return tr;
    }


}
var h_docs = new history_docs();
$(function(){
    h_docs.init();
});