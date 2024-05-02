function invoice_list(){}
invoice_list.NAME         = "invoice_list";
invoice_list.VERSION      = "1.2";
invoice_list.DESCRIPTION  = "Class invoice_list";

invoice_list.prototype.constructor = invoice_list;
invoice_list.prototype = {
    init:function(){
        inv_l.get_invoice_list();

        $('#btn-search').unbind('click').bind('click',function(){
            inv_l.get_invoice_list();
        })

        $('#search-text').keydown(function(e){
            if(e.keyCode==13){
                inv_l.get_invoice_list();
            }
        })
    },

    get_invoice_list: function(){
        var text_search = $('#search-text').val();
        var link3 =link._history_invs;
        var _data ={token:_token,limit:1,cursor:0,patient_user:user_login,text_search:text_search,user_type:type_login}
        if(type_login == "Doctor"){
            _data ={token:_token,limit:1,cursor:0,text_search:text_search}
        }
        var $pagination = $('#pagination-inv');
        var defaultOpts = {
            totalPages: 20
        };
        $pagination.twbsPagination(defaultOpts);
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            data:_data,
            "method": "POST",
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (data) {
                if(data.invs.row_cnt <=0){
                    $('#page-content').html('');
                    return false
                }
                var totalRecords = parseInt(data.invs.row_cnt);
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
                        var cursor = (page-1)*10
                        _data ={token:_token,limit:10,cursor:cursor,patient_user:user_login,text_search:text_search,
                            user_type:type_login}

                        if(type_login == "Doctor"){
                            _data ={token:_token,limit:10,cursor:cursor,text_search:text_search}
                        }
                        var tr='';
                        var html='';
                        //
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
                                //console.log(res);
                                if(res.invs.results==undefined) return
                                var data=res.invs.results;
                                var i=0;
                                data.forEach(function (item) {
                                    html += inv_l.http_content(item,i)
                                    i++;

                                });//end for each
                                $('#page-content').html(html);
                                if(1%2 !=0){
                                    html +='</row>';
                                }
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
            }
        });
    },

    http_content:function(data,i){
        var inv_link ='<a href="invoice.php?id='+data.Inv_id+'"><strong><u>'+data.aptid_text+'</u></strong></a>'
        //console.log(inv);
        //console.log(inv.balance_number)
        var inv_balance_n = '0 VND';
        if(data.balance_number !=null){
            //console.log(data.balance_number)
            inv_balance_n = invoice.prototype.convert_str_thousand(data.balance_number.toString()) +' VND'
           // inv_balance_n = inv.balance_number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        }
        var inv_balance =''
        if(data.balance_number <=0){
            inv_balance ='<strong class="color_green">Đã thanh toán</strong>'
        }else{
            inv_balance ='<strong class="color-alert">'+inv_balance_n+'</strong>'
        }

        //date
        var create_date= data.CreatedDate;
        var inv_total = '0 VND';
        if(data.invoice_total_number !=null){
            inv_total = invoice.prototype.convert_str_thousand(data.invoice_total_number.toString()) +' VND'
        }

        var inv_paid_date=''
        if(data.paid_date_date !=null){
            var d = data.paid_date_date
        }

       var goto_inv =' <a href="invoice.php?id='+data.Inv_id+'" style="margin-top: 30px" class="form-control btn btn-succ">Thanh toán</a>';
        //patient
        var uid=data.display_name_text
        if(data.uid_text!==null){
            uid = data.uid_text+ '-' +data.display_name_text
        }

        var patient_email =data.Email

        var patient_phone =''
        if(data.primary_phone_number_text !=null){
           patient_phone =data.primary_phone_number_text
        }

        var address =''
        if(data.primary_phone_number_text !=null){
            address =data.primary_phone_number_text
        }

        var http='';
        if(i%2==0){
            http +='<div class="row">' +
                '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="height: 265px!important; border: #ff5e39 solid 1px">' +
                '<div class="row m-t15">' +
                    '<div class="col-4 padding-rl020">'+inv_link+'</div>' +
                    '<div class="col-8"><a href="dashboard.php?id='+data.patient_user+'"><strong>'+uid+'</strong></a></div>' +
                '</div>' +
                '<div class="row m-t5">' +
                    '<div class="col-4 padding-rl020">'+inv_balance+'</div>' +
                    '<div class="col-8">' +
                        '<div class="row m-t5">' +
                            '<div class="col-12 row_table"><i class="fa fa-paper-plane col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+patient_email+'</div></div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="row m-t5">' +
                    '<div class="col-4 padding-rl020"><strong>'+create_date+'</strong></div>' +
                    '<div class="col-8">' +
                        ' <div class="row m-t5">' +
                                '<div class="col-12 row_table"><i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i><div class="col_table margin-left5">'+patient_phone+'</div></div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div class="row ">' +
                    '<div class="col-4 padding-rl020">' +
                     goto_inv +
                    '</div>' +
                    '<div class="col-8">' +
                        '<div class="row m-t5">' +
                            '<div class="col-12 row_table"><i class="fa fa-calendar col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+inv_paid_date+'</div></div>' +
                        '</div>' +
                        '<div class="row m-t5">' +
                            '<div class="col-12 m-t5 row_table"><i class="fa fa-money-bill col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+inv_total+'</div></div>' +
                        '</div>' +
                        '<div class="row m-t5">' +
                            '<div class="col-12 row_table"><i class="fa fa-map-marker col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+address+'</div></div>' +
                        '</div>' +

                    '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->'
        }else{
            http += '<!--col-6-->' +
                '<div class="col-6">' +
                '<div class="panel" style="height: 265px!important; border: #ff5e39 solid 1px">' +
                    '<div class="row m-t15">' +
                        '<div class="col-4 padding-rl020">'+inv_link+'</div>' +
                        '<div class="col-8"><a href="dashboard.php?id='+data.patient_user+'"><strong>'+uid+'</strong></a></div>' +
                    '</div>' +
                    '<div class="row m-t5">' +
                        '<div class="col-4 padding-rl020">'+inv_balance+'</div>' +
                        '<div class="col-8">' +
                            ' <div class="row m-t5">' +
                                '<div class="col-12 row_table"><i class="fa fa-paper-plane col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+patient_email+'</div></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row m-t5">' +
                        '<div class="col-4 padding-rl020"><strong>'+create_date+'</strong></div>' +
                        '<div class="col-8">' +
                            ' <div class="row m-t5">' +
                                '<div class="col-12 row_table"><i class="fa fa-phone fa-flip-horizontal col_table p-l10 color6676f2"></i><div class="col_table margin-left5">'+patient_phone+'</div></div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="row">' +
                        '<div class="col-4 padding-rl020">' +
                            goto_inv+
                        '</div>' +
                        '<div class="col-8">' +
                            '<div class="row m-t5">' +
                                '<div class="col-12 row_table"><i class="fa fa-calendar  col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+inv_paid_date+'</div></div>' +
                            '</div>' +
                            '<div class="row m-t5">' +
                                '<div class="col-12 m-t5 row_table"><i class="fa fa-money-bill col_table p-r10 color6676f2"></i><div class="col_table  margin-left5">'+inv_total+'</div></div>' +
                            '</div>' +
                            '<div class="row m-t5">' +
                                '<div class="col-12 row_table"><i class="fa fa-map-marker col_table p-r10 color6676f2"></i><div class="col_table margin-left5">'+address+'</div></div>' +
                            '</div>' +

                        '</div>' +
                    '</div>' +
                '</div>' +
                '</div>' +
                '<!--end col-6-->' +
                '</div>' +
                '<!---->'
       }

        return http;
        //
    }
}
var inv_l = new invoice_list();
$(function(){
    inv_l.init();
});