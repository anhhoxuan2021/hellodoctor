
function modal_inv(){}
modal_inv.NAME         = "modal_inv";
modal_inv.VERSION      = "1.2";
modal_inv.DESCRIPTION  = "Class modal_inv";

modal_inv.prototype.constructor = modal_inv;
modal_inv.prototype = {
    init: function(){
        $("#inv-payment-type").change(function(e){
            md_inv.payment_type_info($(this))
        });

        //bind option payment_type
        $("#invoice-modal #inv-payment-type").html(payment_type)

        if(user_type_option=='Patient'){
            $('#inv-payment-type option[value="Cash"]').css({'display':'none'})
            $('#inv-payment-type option[value="Check"]').css({'display':'none'})
            $('#inv-payment-type option[value="Insurance"]').css({'display':'none'})
            $('#inv-payment-type option[value="Payment Later"]').css({'display':'none'})
            $('#inv-payment-type option[value="Other"]').css({'display':'none'})
        }

        //bind event
        $('#invoice-modal').on('change','#package-code',function(){
            md_inv.check_package_code()
        })

        $("#invoice-modal #modal-inv-balance").keyup(function(e){
            var l = $(this).val().length;
            var str = $(this).val()
            if(l ==2){
                str =parseInt(str);
                str ='"'+str+'"'
            }
            str = str.replace(/[^0-9]/g,'');
            var value = str.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            $(this).val(value)
        })

        $("#invoice-modal #modal-inv-balance").keypress(function(e) {

            if(e.which==46) {
                return false;
            }
            if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
                //console.log('test')
                if(e.keyCode===13)
                {
                    //console.log('test')

                }
                return false;
            }

        });

        $('#invoice-modal').on('change','#payment_date_expect',function(){
            $('#invoice-modal #save-payment').prop('disabled',true)
            var expectedpayment_date = $(this).val()
            //console.log(expectedpayment_date)
            expectedpayment_date = new Date(expectedpayment_date);
            if(expectedpayment_date !='Invalid Date'){
                var today =  new Date().getFullYear()+'/'+("0"+(new Date().getMonth()+1)).slice(-2)+'/'+("0"+new Date().getDate()).slice(-2)
                today = new Date(today)

                if(expectedpayment_date >=today){
                    $('#invoice-modal #save-payment').prop('disabled',false)
                }

            }
        });

    },

    payment_type_info:function(me){
        $('#invoice-modal #packetcode-info').html('')

        var val= me.find('option:selected').val();
        if(val=='Credit Card'){
            $('#invoice-modal #save-payment').prop('disabled',false)

            var creditcard ='<div class="row">' +
                '<div class="col-12">Lo?i th?</div>' +
                '<div class="col-12">' +
                    '<select class="form-control" id="credit-card-type">' + credit_card_type+
                    '</select>'
                '</div>' +
            '</div> ';

            $('#transfer-info').css({'display':'none'});
            $('#type-pay-append').html(creditcard);

        }else if(val=='Bank Transfer'){
            $('#invoice-modal #save-payment').prop('disabled',false)

            var inv_name = $('#inv-name1').text();

            if(window.location.pathname.includes('dashboard.php')){
                inv_name = $('#modal-inv-text').text();
            }

            var information ='<div class="col-12 b-gray51">' +
                'Quý khách có thể chuyển tiền thanh toán tới tài khoản sau với nội dung </br>' +
                'chuyển khoản : <strong> Chuyển khoản cho Hóa đơn <span class="f-size16">'+inv_name+'</span></strong></br></br>'+
                'Chủ tài khoản: CT TNHH IMAGINE IT SOLUTIONS VN </br>' +
                'Số tài khoản:0071001205755 </br>' +
                'Ngân hàng: <strong class="color_green">Vietcombank</strong></br>' +
                'Chi nhánh: Hồ Chí Minh'+
                '</div>'

            $('#transfer-information').html(information);

            $('#transfer-info').css({'display':''})

            $('#type-pay-append').html('');
        }else if(val=='Package Code'){
            $('#invoice-modal #save-payment').prop('disabled',true)

            var packagecode ='<div class="row">' +
                '<div class="col-12">Package Code</div>' +
                '<div class="col-12">' +
                    '<input type="text" class="form-control" id="package-code" >' +
                '</div>' +
            '</div> ';

            $('#transfer-info').css({'display':'none'});
            $('#type-pay-append').html(packagecode);
        }else if(val=='Payment Later'){
            $('#invoice-modal #save-payment').prop('disabled',true)
            var paylater ='<div class="row">' +
                '<div class="col-12">Ngày thanh toán dự kiến</div>' +
                '<div class="col-12">' +
                '<input class="form-control" id="payment_date_expect" type="date" name="date" value="">' +
                '</div>' +
                '</div> ';

            $('#transfer-info').css({'display':'none'});
            $('#type-pay-append').html(paylater);
        }else{
            $('#invoice-modal #save-payment').prop('disabled',false)
            $('#type-pay-append').html('');
            $('#transfer-info').css({'display':'none'});
        }

    },

    check_package_code:function(){
        var package_code =  $('#invoice-modal #package-code').val()
        if(package_code !=''){
            var link3 =link._check_package_code;
            var _data = {token:_token,
                user_user:user_login,
                code_text:package_code}

            $.ajax({
                "async": true,
                "crossDomain": true,
                "url": link3,
                "method": "POST",
                data:_data,
                dataType: 'json',
                error : function (status,xhr,error) {
                },
                success: function (res) {
                    if(res){
                        $('#invoice-modal #packetcode-info').html(
                            '<div class="col-12">'+
                                '<div class="col-12 border-r-a8f0b8">'+
                                    '<div class="col-12 padding_l">'+
                                        '<div class="col-12 m-t10 m_b10">Mã khám bệnh hợp lệ.</div>'+
                                    '</div>'+
                                '</div>' +
                            '</div>');

                        $('#invoice-modal #save-payment').prop('disabled',false)
                    }else{
                        $('#invoice-modal #packetcode-info').html(
                        '<div class="col-12">' +
                            '<div class="col-12 border-r-f6bd57">'+
                                '<div class="col-12 padding_l">'+
                                    '<div class="col-12 m-t5">Mã khám bệnh không hợp lệ.</div>'+
                                    '<div class="col-12 m-t5 m_b10">(Mã chỉ được dùng cho Tư vấn khám bệnh)</div>'+
                                '</div>'+
                            '</div>' +
                        '</div>')

                        $('#invoice-modal #save-payment').prop('disabled',true)
                    }

                }
            });

        }
    },

    payment_now:function($me,el){
        var invoice =$('#invoice-modal #modal-invoice-id').val()
        var profile =$('#invoice-modal #modal-invoice-patient-id').val()
        var appointment =$('#invoice-modal #modal-invoice-appt-id').val()
        var amount =$('#invoice-modal #modal-inv-balance').val()
        amount = md_inv.convert_str_number(amount)

        var note = $('#invoice-modal #modal-inv-notes').val()

        var refund =false
        if($('#invoice-modal #inv-refund').is(':checked')) refund =true

        var payment_type =$('#invoice-modal #inv-payment-type').val()

        var  _data = {invoice_custom_invoice:invoice,
            profile_user:profile,
            Appt_id:appointment,
            amount_number:amount,
            notes_text:note,
            refund_boolean:refund,
            type_option_payment_type:payment_type
        }

        if(payment_type=='Package Code'){
            //return;
            var packge_code= $('#invoice-modal #package-code').val()

            _data = {invoice_custom_invoice:invoice,
                profile_user:profile,
                Appt_id:appointment,
                notes_text:note,
                refund_boolean:refund,
                type_option_payment_type:payment_type,
                package_code_text:packge_code
            }

        }else if(payment_type=='Payment Later'){
            var expectedpayment_date = $('#invoice-modal #payment_date_expect').val();

            _data = {invoice_custom_invoice:invoice,
                profile_user:profile,
                Appt_id:appointment,
                amount_number:amount,
                notes_text:note,
                refund_boolean:refund,
                type_option_payment_type:payment_type,
                expected_payment_date_date:expectedpayment_date
            }

        }else if(payment_type=='Credit Card'){
            var card_type =$('#invoice-modal #credit-card-type').val()

            _data = {invoice_custom_invoice:invoice,
                profile_user:profile,
                Appt_id:appointment,
                amount_number:amount,
                notes_text:note,
                refund_boolean:refund,
                type_option_payment_type:payment_type,
                card_type_option_credit_card_type:card_type
            }

            return;
        }

        Object.assign(_data,{user_login:user_login},{token:_token});

        var link3 =link._payment_new_update;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                if(res.Error==''){
                    console.log(res);
                    $('#invoice-modal').modal('hide');
                    if(res.invoice_data.payment.length >0){
                        if($me==''){
                            common_f.prototype.display_payment(res.invoice_data.payment,'#inv-page-content #paid-detail')
                        }else{
                            common_f.prototype.display_payment(res.invoice_data.payment,el)
                        }
                    }

                    if($me==''){
                        md_inv.display_balance(res.invoice_data);
                    }else{
                        //console.log(res.invoice_data);
                       // console.log("balace="+res.invoice_data.balance_number)
                        $me.closest('.row-inv').find('.balance_number').val(res.invoice_data.balance_number);
                        var inv_balance_text =common_f.prototype.convert_str_thousand(res.invoice_data.balance_number.toString()) + " VND"

                        var paid_date=''
                        if(res.invoice_data.paid_date_date !=null){
                            paid_date = res.invoice_data.paid_date_date
                            $me.closest('.row-inv').find('.inv-paid-date').text(paid_date);
                        }

                        if(parseFloat(res.invoice_data.balance_number) <=0){
                            inv_balance_text='<strong class="color_green">Đã thanh toán</strong>'
                            $me.closest('.row-inv').find('.inv-balance').html(inv_balance_text);
                            $me.closest('.row-inv').find('.pay-now').remove();
                        }else{
                            $me.closest('.row-inv').find('.inv-balance').text(inv_balance_text);
                        }
                    }
                    //////////////
                    pdf_ex.prototype.export_inv(invoice,"is_send_email");
                }
            }
        });
    },

    convert_str_number:function(str){
        /*var number =str;
        if(str.indexOf('.')){
            var str_temp = str.split('.');
            number =0;
            str_temp.forEach(function(item){
                number =number+item
            })
        }*/

       return  parseFloat(str.replaceAll('.', ''))
    },

    display_balance: function(data){
        var invoice_total_number = invoice.prototype.convert_str_thousand(data.invoice_total_number.toString()) +' VND'

        var paid_amout = parseFloat(data.invoice_total_number) -parseFloat(data.balance_number)
        //console.log('p=='+paid_amout)
        $('#inv-page-content #paid-amount').val(paid_amout)

        paid_amout = invoice.prototype.convert_str_thousand(paid_amout.toString()) +' VND'
        $('#inv-page-content #paid-amount-text').text(paid_amout)
        $('#inv-page-content #invoice-balance').val(data.balance_number);

        var balance_number =  invoice.prototype.convert_str_thousand(data.balance_number.toString()) +' VND'

        if(parseFloat(data.balance_number) <=0){
            $('#inv-page-content #inv-balance').html('<strong class="color_green">Đã thanh toán</strong>');
            $('#inv-page-content #pay-now').css({'display':'none'});
            $('#inv-page-content #inv-balance-text').css({'display':'none'});
        }else{
            $('#inv-page-content #inv-balance').html('<strong class="color-alert">'+balance_number+'</strong>')

        }
        //////////////


    },

    reset_inv_modal:function(){
        $('#modal-invoice-id').val('');
        $('#modal-invoice-patient-id').val('');
        $('#modal-invoice-appt-id').val('');
        $('#modal-inv-text').html('');
        $('#modal-balance-text').html('');
        $('#modal-inv-balance').val('');
        $('#inv-payment-type option[value="Cash"]').prop('selected','true');
        /*
         var packagecode ='<div class="row">' +
         '<div class="col-12">Package Code</div>' +
         '<div class="col-12">' +
         '<input type="text" class="form-control" id="package-code" >' +
         '</div>' +
         '</div> ';

         $('#type-pay-append').html(packagecode);
         */
        $('#type-pay-append').html('');

        $('#transfer-info').css({'display':'none'});

        $('#modal-inv-notes').val('')
        $('#invoice-modal #packetcode-info').html('')
        $('#invoice-modal #save-payment').prop('disabled',false)
    },

    //For SQL
    new_payment_sql:function(data){
        console.log(data)
        var link3 =link._payment_new_update;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,
            //contentType: 'application/json',
            error : function (status,xhr,error) {
            },
            success: function (res) {
                console.log(res);

                //
            }
        });
    },

}
var md_inv = new modal_inv();
$(function(){
    md_inv.init();
});