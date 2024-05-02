
function history_inv(){}
history_inv.NAME         = "history_inv";
history_inv.VERSION      = "1.2";
history_inv.DESCRIPTION  = "Class history_inv";

history_inv.prototype.constructor = history_inv;
history_inv.prototype = {
    init: function(){
        $("#tab-invoice-click").unbind("click").bind("click",function(){
            var patient_id = $("#patient-id").val();

            if(window.location.pathname.includes('dashboard.php')){
                var id = getUrlParameter1('id');

                if(id!=undefined){
                    patient_id =id
                }
            }

            h_inv.get_inv_history(patient_id);

        })

        $('#tbl-inv-content').on('click','.download-inv',function(){
            var inv_id = $(this).closest('td').find('.inv_id').val()
            //var patient_id = $(this).closest('tr').find('.patient_id').val();
            pdf_ex.prototype.export_inv(inv_id);
        })

        $('#tbl-inv-content').on('click','.print-inv',function(){
            var inv_id = $(this).closest('td').find('.inv_id').val()
            //var patient_id = $(this).closest('tr').find('.patient_id').val();
            pdf_ex.prototype.print_inv(inv_id);
        })

        $('#tbl-inv-content').on('click','.open-inv-id',function(){
            var was_changed = 0;
            if(window.location.pathname.includes('dashboard.php')){
                was_changed = profile.prototype.was_changed ;
            }else{
                if(type_login !="Patient"){
                    was_changed =  appointment_edit.prototype.was_changed ;
                }
            }

            var inv_id = $(this).closest('tr').find('.link_inv_id').val();
            if (was_changed ==1) {
                modal_leave_page.prototype.reset_model_leave_page();
                $('#modal-leave-page #what-page').val("invoice")
                $('#modal-leave-page #open-id').val(inv_id)
                $('#modal-leave-page').modal("show");
            }else{
                document.location.href = host2 + 'invoice.php?id='+inv_id;
            }
        })

    },

    get_inv_history:function(patient_user){

        var link3 =link._history_invs;
        var _data ={token:_token,limit:1,cursor:0,patient_user:patient_user}

        var $pagination = $('#pagination_history_invoice');
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
                        //fetch content and render here
                        var cursor = (page-1)*10
                        _data ={token:_token,limit:10,cursor:cursor,patient_user:patient_user}
                        var tr='';
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
                                // console.log(res);

                                if(res.invs.results==undefined) return
                                var data=res.invs.results;

                                data.forEach(function (item) {
                                     //console.log(item);
                                    tr +=h_inv.tr_content(item);

                                });//end for each

                                $('#tbl-inv-content tbody').html(tr);
                            }
                        });//end ajax get appointment at current page

                    } //end onPageClick
                }));
                //
            }
        });
    },

    tr_content:function(inv){
        var tr ='';
        //date
        var create_date = inv.CreatedDate;

        var date_paid ='';
        if(inv.paid_date_date !=null){
            var date_temp = convert_date_hour(inv.paid_date_date);
            date_paid = date_temp[0]+", "+date_temp[1];
        }

        var inv_id = inv.Inv_id;
        var appt_id = inv.appointment_custom_appointment
        var patient_id =inv.patient_user

        var inv_text = '<span class="color6676f2"><u>'+inv.inv_text+'</u></span>' +
            '<input class="link_inv_id" type="hidden" value="'+inv_id+'">'

        var inv_note = inv.notes_text
        var inv_total =inv.invoice_total_number
        inv_total = inv_total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

        var fa_money=''

        var inv_balance_number =inv.balance_number
        inv_balance_number = inv_balance_number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

        if(window.location.pathname.includes('dashboard.php')){
            if($('#patient-type').val()=='Patient'){
                fa_money ='<i class="fa fa-money-bill color6676f2 open-modal-inv" style="cursor: pointer" title="Thực thiện Thanh toán"></i>&nbsp;&nbsp;'
            }
        }

        if(inv.paid_boolean==1){
            inv_balance_number = '<span class="color_green">Đã thanh toán đủ</span>'
            fa_money=''
        }

        tr +='<tr>' +
            '<td>'+create_date+'</td>' +
            '<td class="open-inv-id" style="cursor: pointer">'+inv_text+'</td>' +
            '<td>'+inv_note+'</td>' +
            '<td>'+inv_total+'</td>' +
            '<td>'+inv_balance_number+'</td>' +
            '<td>'+date_paid+'</td>' +
            '<td>' +
            '<input type="hidden" class="inv_id" value="'+inv_id+'">' +
            '<input type="hidden" class="appt_id" value="'+appt_id+'">' +
            '<input type="hidden" class="patient_id" value="'+patient_id+'">' +
            '<input type="hidden" class="inv_text" value="'+inv.appid_text+'">' +
            '<input type="hidden" class="inv-balance" value="'+inv.balance_number+'">' +
            '<div class="row col-12">' +
            '<div class="col-4 p-l10 p-r10">'+fa_money+'</div> ' +
            '<div class="col-4 p-l10 p-r10"><i class="fa fa-print print-inv  color_green" style="cursor: pointer" title="In báo cáo"></i></div>' +
            '<div class="col-4 p-l10 p-r10"><i class="fa fa-download download-inv color6676f2" style="cursor: pointer" title="Xuất file"></i></div>' +
            '</div> ' +
            '</tr>';

        return tr;
    },

    show_modal_payment:function($me){

        modal_inv.prototype.reset_inv_modal();

        var patient_id = $me.closest('td').find('.patient_id').val();
        var appt_id = $me.closest('td').find('.appt_id').val();
        var inv_id = $me.closest('td').find('.inv_id').val();

        var inv_name = $me.closest('td').find('.inv_text').val();
        var inv_balanceT =  $me.closest('td').find('.inv-balance').val();

        inv_balanceT =parseFloat(inv_balanceT)

        var inv_balance_text = inv_balanceT.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

        var inv_balance1 = inv_balance_text.split('VND')

        var inv_balance = inv_balance1[0]

        var inv_note = 'Thanh toán cho Hóa đơn: '+inv_name
        $('#modal-invoice-patient-id').val(patient_id);
        $('#modal-invoice-appt-id').val(appt_id);
        $('#modal-invoice-id').val(inv_id);

        $('#modal-inv-text').text(inv_name);
        $('#modal-balance-text').text(inv_balance_text);
        $('#modal-inv-balance').val(inv_balance);
        $('#modal-inv-notes').val(inv_note)

        $('#invoice-modal').modal('show')

    },

    download_inv:function(Inv_id){
        let link3 =link._inv_by_id;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{ "token": _token,Inv_id:Inv_id},
            //contentType: application/json,
            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error ==''){
                    pdf_ex.prototype.pdf_inv(res.inv)
                }
            }
        });

    }

    //
}
var h_inv = new history_inv();
$(function(){
    h_inv.init();
});