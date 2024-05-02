function invoice(){}
invoice.NAME         = "invoice";
invoice.VERSION      = "1.2";
invoice.DESCRIPTION  = "Class invoice";

invoice.prototype.constructor = invoice;
invoice.prototype = {
    init: function(){
        product_Consultation_Medication_Package= JSON.parse(localStorage.getItem('product_Consultation_Medication_Package'))
        //console.log(product_Consultation_Medication_Package)
        var apptID='';
        if(window.location.pathname.includes('invoice.php')){
             var id = getUrlParameter1('id');
            if(id==undefined){
                window.location.href = 'dashboard.php'
            }else{
                $('#inv-page-content #invoice_id').val(id)

                inv.getInv_id(id);

            }
        }

        //event
        $('#inv-page-content #pay-now').unbind('click').bind('click',function(){
            modal_inv.prototype.reset_inv_modal();

            var patient_id = $('#inv-page-content #patient-id').val();
            var appt_id = $('#appointment-id').val();
            var inv_id = getUrlParameter1('id');

            var inv_name = $('#inv-name1').text();
            var inv_balanceT =  $('#inv-page-content #invoice-balance').val();

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

            $('#invoice-modal #save-payment').unbind('click').bind('click',function(){
                modal_inv.prototype.payment_now("","")
            })
        });

        $('#inv-page-content #add-invoice-line').unbind('click').bind('click',function(){
            inv.add_line_invline();
        })

       /* $('#invline-detail').on('change','.invline_product',function(){
            inv.product_change($(this))
        })*/
        //
        var last_value;

        $('#invline-detail').on("click",".invline_product",function(){
            last_value = $(this).val();
        }).on("change",".invline_product",function(){
              var  select_val = $(this).val();
               /* hide option if it value was selected in other select box
                $('.invline .invline_product option[value="'+select_val+'"]').css({'display':'none'})
                $(this).find('option:selected').css({'display':''});

                $('.invline .invline_product option[value="'+last_value+'"]').css({'display':''})
                */
                inv.product_change($(this))
            });

        $('#invline-detail').on('change','.invline-quantity',function(){
            var quantity = $(this).val();
            var invline_id = $(this).closest('.invline').find('.invline_id').val()
            if(quantity=='') quantity=0
            var invoice_id = $('#inv-page-content #invoice_id').val();

            if(quantity >0){
                inv.update_invline_qty_change($(this),invoice_id,invline_id,quantity)
            }

        })

        $('#invline-detail').on('click','.delete',function(){
            var selected_val = $(this).closest('.invline').find('.invline_product option:selected').val();
            $('.invline .invline_product option[value="'+selected_val+'"]').css({'display':''})

            var invoice_id = $('#inv-page-content #invoice_id').val();
            inv.delete_ivnline_id($(this),invoice_id)
        });

        $("#invline-detail").on('keyup','.invline-price',function(e) {
            var l = $(this).val().length;
            var str = $(this).val()
            if(l ==2){
                str =parseInt(str);
                str ='"'+str+'"'
            }
             str = str.replace(/[^0-9]/g,'');
            var value = str.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            $(this).val(value)
        });
        ///
        var invline_price_change =0

        $("#invline-detail").on('keypress','.invline-price',function(e) {

            if(e.which==46) {
                return false;
            }
            if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
                //console.log('test')
                if(e.keyCode===13)
                {
                    invline_price_change =1;
                    var invline_id = $(this).closest('.invline').find('.invline_id').val()
                    var invline_price = $(this).closest('.invline').find('.invline-price').val()
                    invline_price =modal_inv.prototype.convert_str_number(invline_price)
                    var invoice_id = $('#inv-page-content #invoice_id').val();
                    inv.update_invline_price($(this),invline_id,invoice_id,invline_price)

                }
                return false;
            }
        });

        $("#invline-detail").on('change','.invline-price',function(e){
            var invline_id = $(this).closest('.invline').find('.invline_id').val()
            var invline_price = $(this).closest('.invline').find('.invline-price').val()
            invline_price =modal_inv.prototype.convert_str_number(invline_price)

            var invoice_id = $('#inv-page-content #invoice_id').val();
            if(invline_price_change ==1){
                invline_price_change =0;
                return;
            }

            inv.update_invline_price($(this),invline_id,invoice_id,invline_price)
        })
    },

    /*****************************/
    getInv_id: function(Inv_id){
        var link1 =link._inv_by_id;
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link1,
            "method": "POST",
            dataType: 'json',
            data:{ "token": _token,Inv_id:Inv_id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                if(res.Error !='') return;
                //display invoiceline
                inv.display_invoice_line(res.inv.invoiceLine)
                //dispaly payment
                common_f.prototype.display_payment(res.inv.payment,'#inv-page-content #paid-detail')

                $('#inv-page-content #patient-id').val(res.inv.patient_user)
                $('#inv-page-content #patient-name').val(res.inv.display_name_text)
                $('#inv-page-content #inv-patient-name').text(res.inv.display_name_text)

                if(user_type_option !='Patient'){
                    $('#inv-appt-id').html('<a href="appointment_edit.php?id='+res.inv.appointment_custom_appointment+'" ><button class="btn btn-succ"><strong>Xem lịch hẹn</strong></button></a>')
                }else{
                    $('#inv-appt-id').html('<a href="patient_appointment.php?id='+res.inv.appointment_custom_appointment+'" ><button class="btn btn-succ"><strong>Xem lịch hẹn</strong></button></a>')
                }

                $('#inv-page-content #appointment-id').val(res.inv.appointment_custom_appointment)
                $('#inv-name1').text(res.inv.aptid_text)

                //var invoice_total_number = res.inv.invoice_total_number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                var invoice_total_number = inv.convert_str_thousand(res.inv.invoice_total_number.toString()) +' VND'
                $('#inv-page-content #inv-total').text(invoice_total_number)

                var paid_amount = parseFloat(res.inv.invoice_total_number) -parseFloat(res.inv.balance_number)

                $('#inv-page-content #paid-amount').val(paid_amount)

                //paid_amout = paid_amout.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
                paid_amount = inv.convert_str_thousand(paid_amount.toString()) +' VND'

                $('#inv-page-content #paid-amount-text').text(paid_amount)
                var  balance_number = inv.convert_str_thousand(res.inv.balance_number.toString()) +' VND'
                if(parseFloat(res.inv.balance_number) <=0){
                    $('#inv-page-content #inv-balance').html('<strong class="color_green">Đã thanh toán</strong>');
                    $('#inv-page-content #pay-now').css({'display':'none'});
                    $('#inv-page-content #inv-balance-text').css({'display':'none'});
                }else{
                    $('#inv-page-content #invoice-balance').val(res.inv.balance_number);

                    $('#inv-page-content #inv-balance').html('<strong class="color-alert">'+balance_number+'</strong>')
                }
            }
        });
        //////////////

    },

    /******************************/
    display_user:function(data){
        //console.log(data)
        $('#inv-page-content #patient-id').val(data.User_id )
        $('#inv-page-content #patient-name').val(data.display_name_text)
        $('#inv-page-content #inv-patient-name').text(data.display_name_text)
    },

    /******************************/
    display_invoice_line:function(data){
        if(data.length <1)return;
        data.forEach(function(item){
            var delete_div=''
            var readonly ='readonly="true"'
            if(user_type_option !='Patient'){
                readonly =''
                delete_div =  '<div class="col-1 delete middle-text" style="cursor: pointer"><i class="fas fa-trash-alt color-alert"></i></div>'
            }

            item.retail_price_number = inv.convert_str_thousand(item.retail_price_number.toString())
            item.price_number =inv.convert_str_thousand(item.price_number.toString())
            item.line_total_number =inv.convert_str_thousand(item.line_total_number.toString())

            var row ='' +
                '<div class="row invline m-t10 m_b10">' +
                '<input type="hidden" class="invline_id" value="'+item.invline_id +'">' +
                '<div class="col-1 number middle-text"></div>' +
                '<div class="col-3 product-name">' +
                '<select class="form-control invline_product">' +
                    product_Consultation_Medication_Package +
                '</select>' +
                '</div>' +
                '<div class="col-1 padding_rl"><input type="number" class="invline-quantity form-control" '+readonly+' value="'+item.qty_number+'"></div>' +
                '<div class="col-2 product-retail middle-text">'+item.retail_price_number+'</div>' +
                '<div class="col-2"><input type="text" class="invline-price form-control" '+readonly+' value="'+item.price_number+'"></div>' +
                '<div class="col-2"><input type="text" class="invline-total form-control" readonly="true" value="'+item.line_total_number+'"></div>' +
                delete_div+
                '</div>'

            $('#inv-page-content #invline-detail').append(row);

            var last =$('#inv-page-content .invline').last();
            last.find('.invline_product option[value="'+item.product_custom_product+'"]').prop("selected","selected")
        })

        if(user_type_option=='Patient'){
            $('#inv-page-content .invline_product').prop("disabled",true)
        }else{
            var i = $('#invline-detail > .invline').length
            if(i >0){
                var first =$('#inv-page-content .invline').first();
                first.find('.delete').remove();
                first.find('.invline_product').attr("disabled",true);
                first.find('.invline-quantity').attr("disabled",true);
                first.find('.invline-price').attr("disabled",true);
            }
        }

        $('#invline-detail > .invline').each(function(index){
            $(this).find('.number').text(index+1)
        })
    },

    /*****************************/
    display_payment:function(data){
        var class1='class="row col-12 f-size11 m-t10 p-b15 paymentline border-b-c111 padding_rl"';
        var row ='<div '+class1+'>' +
            '<div class="payment-time col-2 f-bold">Ngày tạo</div>' +
            '<div class="payment-type col-2 f-bold">Hình thức thanh toán</div>' +
            '<div class="payment-card-type col-1 f-bold">Card</div>' +
            '<div class="payment-inv-note col-3 f-bold">Ghi chú</div>' +
            '<div class="payment-inv-amount col-1 padding_rl f-bold">Số tiền</div>' +
            '<div class="payment-status col-1 padding_r f-bold">Trạng thái</div>' +
            '<div class="payment-patient col-2 f-bold">Người thanh toán</div>' +
            '</div>';

        var i=1;

        if(data.length >0){
            data.forEach(function(item){
                var patient_name =item.display_name_text
                //console.log(item);
                if( i <data.length){
                    class1='class="row col-12 f-size11 m-t10 p-b15 paymentline  border-b-c111 padding_rl"';
                }else{
                    class1='class="row col-12 f-size11 m-t10 p-b15 paymentline  padding_rl"';
                }

                i=i+1;

                var create_date = item.CreatedDate;

                var amount_number = item.amount_number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});

                var payment_status=''
                if( item.status_option_payment_status=='Waiting to Confirm'){
                    payment_status ='<span class="color-alert">Ch? xác nh?n</span>'
                }else if(item.status_option_payment_status=='Successful'){
                    payment_status ='<span class="color_green">Thành công</span>'
                }

                if(item.card_type_option_credit_card_type ==null) item.card_type_option_credit_card_type=''

                item.type_option_payment_type =payment_typeOption_text(item.type_option_payment_type)

                row +='<div '+class1+'>' +
                    '<div class="payment-time col-2">'+create_date+'</div>' +
                    '<div class="payment-type col-2 ">'+item.type_option_payment_type+'</div>' +
                    '<div class="payment-card-type col-1">'+item.card_type_option_credit_card_type+'</div>' +
                    '<div class="payment-inv-note col-3">'+item.paymentNotes+'</div>' +
                    '<div class="payment-inv-amount col-1 padding_rl">'+amount_number+'</div>' +
                    '<div class="payment-status col-1 padding_r">'+payment_status+'</div>' +
                    '<div class="payment-patient col-2 padding_r">'+patient_name+'</div>' +
                    '</div>';

            });
        }

        //console.log(data.length)
        //console.log(i)

        $('#inv-page-content #paid-detail').html(row)
    },
    /******************************/
    add_line_invline:function(){

        var i = $('#invline-detail > .invline').length +1
        var border_t =''
        //if(i >1)  border_t ='padding_t10'
        var row ='' +
            '<div class="row  invline m-t10 m_b10 padding_t10">' +
            '<input type="hidden" class="invline_id" value="">' +
            '<div class="col-1 number middle-text">'+i+'</div>' +
            '<div class="col-3 product-name">' +
            '<select class="form-control invline_product">' +
            '<option value=""></option>'+
            product_Consultation_Medication_Package +
            '</select>' +
            '</div>' +
            '<div class="col-1 padding_rl"><input type="number" class="invline-quantity form-control" value="1"></div>' +
            '<div class="col-2 product-retail middle-text"></div>' +
            '<div class="col-2"><input type="text" class="invline-price form-control" value=""></div>' +
            '<div class="col-2"><input type="text" class="invline-total form-control" readonly="true" value=""></div>' +
            '<div class="col-1 delete middle-text" style="cursor: pointer"><i class="fas fa-trash-alt color-alert"></i></div>' +
            '</div>'

        $('#inv-page-content #invline-detail').append(row);

        var last =$('#inv-page-content .invline').last();

        /* hide option if its value is selected in other select box
        $('#invline-detail > .invline').each(function(){
            var select_value =$(this).find('.invline_product option:selected').val();

            last.find('option[value="'+select_value+'"]').css({'display':'none'})
        })
        */

    },
    /******************************/
    product_change:function($me){
        var sku_text =$me.closest('.invline').find(".invline_product option:selected").val();

        //call product
        var link3 =link._products_sku;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:{token:_token, sku_text:sku_text},

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error !='') return;
                var quantity =$me.closest('.invline').find('.invline-quantity').val();
                if(quantity=='') quantity=0
                var retail_price = res.product.retail_price_number
                var invline_price =retail_price;
                var line_total = parseFloat(invline_price) *quantity
                var invoice_id = $('#inv-page-content #invoice_id').val();
                var invline_id = $me.closest('.invline').find('.invline_id').val()

                inv.new_update_invoiceline($me,sku_text,invline_id,invoice_id,quantity,retail_price,invline_price,line_total)
                //
            }
        });
    },
    /******************************/
    new_update_invoiceline:function($me,product_sku,invline_id,invoice_id,quantity,retail_price,invline_price,line_total){

        var link3 =link._invline_new_update;
        var method ='POST'
        var _data ={
            invline_id:invline_id,
            invoice_custom_invoice: invoice_id,
            line_total_number: line_total,
            price_number: invline_price,
            product_custom_product: product_sku,
            qty_number: quantity,
            Creator: user_login,
            token:_token
        }

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": method,
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                //update line
                $me.closest('.invline').find('.invline_id').val(res.invline_id);

                invline_id=res.invline_id;
                retail_price =inv.convert_str_thousand(retail_price.toString())
                invline_price =inv.convert_str_thousand(invline_price.toString())
                line_total =inv.convert_str_thousand(line_total.toString())

                $me.closest('.invline').find('.product-retail').text(retail_price)
                $me.closest('.invline').find('.invline-price').val(invline_price)
                $me.closest('.invline').find('.invline-total').val(line_total)

                //display Invoice
                var invoice_total_number = inv.convert_str_thousand(res.invoice_total_number.toString()) +' VND'
                $('#inv-page-content #inv-total').text(invoice_total_number)

                $('#inv-page-content #paid-amount').val(res.total_paid)

                var paid_amount = inv.convert_str_thousand(res.total_paid.toString()) +' VND'

                $('#inv-page-content #paid-amount-text').text(paid_amount)
                $('#inv-page-content #invoice-balance').val(res.balance_number);

                if(parseFloat(res.balance_number) <=0){
                    $('#inv-page-content #inv-balance').html('<strong class="color_green">Đã thanh toán</strong>');
                    $('#inv-page-content #pay-now').css({'display':'none'});
                    $('#inv-page-content #inv-balance-text').css({'display':'none'});
                }else{
                    var  balance_number = inv.convert_str_thousand(res.balance_number.toString()) +' VND'
                    $('#inv-page-content #inv-balance').html('<strong class="color-alert">'+balance_number+'</strong>')

                    $('#inv-page-content #pay-now').css({"display":""})
                }
                //////////////
            }
        });

    },
    /******************************/
    update_invline_qty_change:function($me,invoice,invoiceLine,qty){
        if(invoiceLine ==''){
            return
        }

        var link3 =link._invline_update_qty;
        var method ='POST'

        var _data = {
            invoice_custom_invoice: invoice,
            invline_id: invoiceLine,
            qty_number: qty,
            Creator:user_login,
            token:_token
        }

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": method,
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error == ''){
                    if(res.invoice_data.payment.length >0){
                        //inv.display_payment(res.invoice_data.payment)
                        common_f.prototype.display_payment(res.invoice_data.payment,'#inv-page-content #paid-detail')
                    }

                    //display line
                    var invline_total= inv.convert_str_thousand(res.line_total_number.toString())
                    //console.log(invline_total);
                    $me.closest('.invline').find('.invline-total').val(invline_total)

                    //display Invoice
                    var invoice_total_number = inv.convert_str_thousand(res.invoice_total_number.toString()) +' VND'
                    $('#inv-page-content #inv-total').text(invoice_total_number)

                    $('#inv-page-content #paid-amount').val(res.total_paid)

                    var paid_amount = inv.convert_str_thousand(res.total_paid.toString()) +' VND'

                    $('#inv-page-content #paid-amount-text').text(paid_amount)
                    $('#inv-page-content #invoice-balance').val(res.balance_number);
                    // console.log(inv.convert_str_thousand(res.balance_number.toString()) +' VND')

                    if(parseFloat(res.balance_number) <=0){
                        $('#inv-page-content #inv-balance').html('<strong class="color_green">Đã thanh toán</strong>');
                        $('#inv-page-content #pay-now').css({'display':'none'});
                        $('#inv-page-content #inv-balance-text').css({'display':'none'});
                    }else{
                        var  balance_number = inv.convert_str_thousand(res.balance_number.toString()) +' VND'
                        $('#inv-page-content #inv-balance').html('<strong class="color-alert">'+balance_number+'</strong>')

                        $('#inv-page-content #pay-now').css({"display":""})
                    }
                    /////////////////////////////////////////////

                }

            }
        });
    },

    /******************************/
    update_invline_price:function($me,invline_id,invoice_id,invline_price){
       // console.log('test2');
        if(invline_id ==''){
            return
        }

        var link3 =link._invline_update_price;
        var method ='POST'

        var _data = {
            price_number: invline_price,
            invoice_custom_invoice: invoice_id,
            invline_id: invline_id,
            Creator: user_login,
            token:_token
        }

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": method,
            data:_data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error == ''){
                    if(res.invoice_data.payment.length >0){
                        //inv.display_payment(res.invoice_data.payment)
                        common_f.prototype.display_payment(res.invoice_data.payment,'#inv-page-content #paid-detail')
                    }

                    //display line
                    var invline_total= inv.convert_str_thousand(res.line_total_number.toString())
                    //console.log(invline_total);
                    $me.closest('.invline').find('.invline-total').val(invline_total)

                    //display Invoice
                    var invoice_total_number = inv.convert_str_thousand(res.invoice_total_number.toString()) +' VND'
                    $('#inv-page-content #inv-total').text(invoice_total_number)

                    $('#inv-page-content #paid-amount').val(res.total_paid)

                    var paid_amount = inv.convert_str_thousand(res.total_paid.toString()) +' VND'

                    $('#inv-page-content #paid-amount-text').text(paid_amount)
                    $('#inv-page-content #invoice-balance').val(res.balance_number);
                    // console.log(inv.convert_str_thousand(res.balance_number.toString()) +' VND')

                    if(parseFloat(res.balance_number) <=0){
                        $('#inv-page-content #inv-balance').html('<strong class="color_green">Đã thanh toán</strong>');
                        $('#inv-page-content #pay-now').css({'display':'none'});
                        $('#inv-page-content #inv-balance-text').css({'display':'none'});
                    }else{
                        var  balance_number = inv.convert_str_thousand(res.balance_number.toString()) +' VND'
                        $('#inv-page-content #inv-balance').html('<strong class="color-alert">'+balance_number+'</strong>')

                        $('#inv-page-content #pay-now').css({"display":""})
                    }
                    /////////////////////////////////////////////

                }
            }
        });

    },

    delete_ivnline_id:function($me,Inv_id){
       var invline_id = $me.closest('.invline').find('.invline_id').val()

        if(invline_id ==''){
            $me.closest('.invline').remove();
            return
        }

        var data ={
            token:_token,
            invline_id:invline_id,
            invoice_custom_invoice:Inv_id
        }
        //delete invoice line
        var link3 =link._ivnLine_delete_invline_id;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data:data,

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if(res.Error == ''){
                    //display line
                    $me.closest('.invline').remove();
                    //display Invoice
                    var invoice_total_number = inv.convert_str_thousand(res.invoice_total_number.toString()) +' VND'
                    $('#inv-page-content #inv-total').text(invoice_total_number)

                    $('#inv-page-content #paid-amount').val(res.total_paid)

                    var paid_amount = inv.convert_str_thousand(res.total_paid.toString()) +' VND'

                    $('#inv-page-content #paid-amount-text').text(paid_amount)
                    $('#inv-page-content #invoice-balance').val(res.balance_number);
                    // console.log(inv.convert_str_thousand(res.balance_number.toString()) +' VND')

                    if(parseFloat(res.balance_number) <=0){
                        $('#inv-page-content #inv-balance').html('<strong class="color_green">Đã thanh toán</strong>');
                        $('#inv-page-content #pay-now').css({'display':'none'});
                        $('#inv-page-content #inv-balance-text').css({'display':'none'});
                    }else{
                        var  balance_number = inv.convert_str_thousand(res.balance_number.toString()) +' VND'
                        $('#inv-page-content #inv-balance').html('<strong class="color-alert">'+balance_number+'</strong>')

                        $('#inv-page-content #pay-now').css({"display":""})
                    }
                    /////////////////////////////////////////////

                }
                //
            }
        });
    },

    convert_str_thousand:function(str){
       return str.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },

   //sql
    new_invline_sql:function(data){
        Object.assign(data,{ "token": _token});
        //console.log(data)
        var link3 =link._invAddIUpdatevnLine_sql;
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
               // console.log(res);

                //
            }
        });
    },


    update_invline_product_consultation_price_change_sql:function(data){
        Object.assign(data,{ "token": _token});
        //console.log(data)
        var link3 =link._ivnLineUpdate_PrdConsulPrice_sql;
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
                //console.log(res);

                //
            }
        });
    },

    delete_invline_sql:function(data){
        Object.assign(data,{ "token": _token});
        //console.log(data)
        var link3 =link._ivnLine_delete_invline_id_sql;
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
                //console.log(res);

                //
            }
        });
    }
}
var inv = new invoice();
$(function(){
    inv.init();
});