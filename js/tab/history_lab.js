
function history_lab(){
    this.lab_file_tranfer = new DataTransfer()
}
history_lab.NAME         = "history_lab";
history_lab.VERSION      = "1.2";
history_lab.DESCRIPTION  = "Class history_lab";

history_lab.prototype.constructor = history_lab;
history_lab.prototype = {
    init: function(){
        $("#lab #tbl-lab-content").on("click",".add-new-result-lab",function(){
            if(!window.location.pathname.includes('patient_appointment.php')){
                history_lab.prototype.show_modal_lab_result($(this));
            }

        })

        $("#tab-lab-click").unbind("click").bind("click",function(){
            var patient_id = $("#patient-id").val();

            if(window.location.pathname.includes('dashboard.php')){
                var id = getUrlParameter1('id');

                if(id!=undefined){
                    patient_id =id
                }
            }

            $('#tbl-lab-content tbody').html('');

            h_lab.get_lab_history(patient_id);

        })

        /*$('#lab-diagnostic-name').change(function(){
            var diagnostic_id = $(this).find("option:selected").val();
            var diagnostic_name = $(this).find("option:selected").text();
            var code = $(this).find("option:selected").attr('code');
            var name1 = $(this).find("option:selected").attr('name');
            h_lab.add_diagnostic_row(diagnostic_id,diagnostic_name,code,name1);

        });*/

        $('#lab-diagnostic-code').change(function(){
            var diagnostic_code = $(this).find("option:selected").val();
            var diagnostic_name = $(this).find("option:selected").text();
            var code = $(this).find("option:selected").attr('code');
            var name1 = $(this).find("option:selected").attr('name1');

            var continuing = false;
            $('#lab-diagnostic-selected .diagnostic-row').each(function(){
                var diagnostic_id =$(this).find('.diagnostic-id').val();
                if(diagnostic_id ==diagnostic_code){
                    continuing = true;
                }
            })

            if(!continuing){
                h_lab.add_diagnostic_row(diagnostic_code,diagnostic_name,code,name1);
            }

        });

        //bind event
        $('#lab-modal #tbl-product-assigned-list tbody').on('click','.delete-modal-lab-product-id',function(){
            if(!window.location.pathname.includes('patient_appointment.php')){
                $(this).closest('tr').remove();
                $('#lab-modal #tbl-product-assigned-list >tbody >tr').each(function(index,item){
                    $(this).find('.number').text(index+1);
                });

                $('#lab-modal #lab-pdf-hide').css({"display":'none'})
                $('#lab-modal #lab-print-hide').css({"display":'none'})
                $('#lab-modal #lab-validation').css({"display":""});
                $('#lab-modal #validated-succ').css({"display":"none"});

                modal_validate.prototype.lab_validate_reset();
                $('#modal-lab-validate #modal_type_login').val(type_login)
            }

        });

        $('#lab-modal #lab-diagnostic-selected').on('click','.diagnostic-delete-row',function(){
            if(!window.location.pathname.includes('patient_appointment.php')){
                $(this).closest('.diagnostic').remove();
            }
        })

        $('#lab #tbl-lab-content').on('click','.open-modal-lab',function(){
            $('#lab-modal').modal('show')
            var $me=$(this);
            h_lab.reset_lab_modal();
            h_lab.show_modal_lab($me)
        })

        $('#lab-modal #lab-pdf').unbind('click').bind('click',function(){
            var Lab_id = $('#lab-modal #lab-id').val();
            pdf_ex.prototype.export_lab(Lab_id);
        });
        $('#lab-modal #lab-print-pdf').unbind('click').bind('click',function(){
            var Lab_id = $('#lab-modal #lab-id').val();
            pdf_ex.prototype.print_lab(Lab_id);
        });

        $('#lab-validation').unbind('click').bind('click',function(){
            modal_validate.prototype.lab_validate_reset();
            $('#modal-lab-validate').modal('show')
            $('#modal-lab-validate #modal_type_login').val(type_login)
        });

        $('#lab #tbl-lab-content').on('change','.lab-general-status',function(){
            var $me= $(this);
            //console.log($me.val())
            if($me.val()=="Complete"){
                $('#modal-alert .modal-alert-content').html("<div>Sau khi Xét nghiệm này được chuyển sang trạng thái Hoàn thành, sẽ không thể chỉnh sửa nó nữa.</div><div>Bạn có muốn chuyển trạng thái không?</div>");
                $("#modal-alert .lab-status-btn").css({"display":""});
                $("#modal-alert .pres-status-btn").css({"display":"none"});
                $("#modal-alert .apt-status-btn").css({"display":"none"});
                $("#modal-alert").modal("show");
                $("#lab-confirm-change").unbind("click").bind("click",function(){
                    history_lab.prototype.update_lab_changeStatus($me);
                    $("#modal-alert").modal("hide");
                })
            }else{
                //confirm-change
                history_lab.prototype.update_lab_changeStatus($me);
            }

        })

        $("#lab-modal #lab-file-select").on('change', function(e){
            var fileBloc ='';
            for(var i = 0; i < this.files.length; i++){
                fileBloc +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                    '<div class="col-9 file-name">'+this.files.item(i).name+'</div>' +
                    '<div class="col-3 file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                    '</div>'
            };
            $("#lab-modal #lab-files-area").append(fileBloc);

            for (let file of this.files) {
                h_lab.lab_file_tranfer.items.add(file);
            }

            this.files = h_lab.lab_file_tranfer.files;

            $('#lab-modal #lab-files-area .file-delete').click(function(){
                let name = $(this).closest('.row').find('.file-name').text();
                $(this).parent().remove();
                for(let i = 0; i < h_lab.lab_file_tranfer.items.length; i++){
                    // Correspondance du fichier et du nom
                    if(name === h_lab.lab_file_tranfer.items[i].getAsFile().name){
                        h_lab.lab_file_tranfer.items.remove(i);
                        continue;
                    }
                }

                $('#lab-modal #lab-file-select').files = h_lab.lab_file_tranfer.files;
            });
        });

        $('#lab-modal #lab-attachement').on('click','.lab-exsiting-file-delete',function(){
            $(this).closest('.row').remove();
        })

    },

    get_lab_history:function(patient_user){
        link3 =link._history_labs;
        var _data ={token:_token,limit:1,cursor:0,patient_user:patient_user}

        var $pagination = $('#pagination_history_lab');
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
                var totalRecords = parseInt(data.labs.row_cnt);
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
                                //console.log("test test");
                                //console.log(res.response.results);

                                if(data=res.labs.results==undefined) return
                                var data=res.labs.results;
                                var list_length=0;
                                var list ={};
                                var key=[];

                                data.forEach(function (item) {
                                    tr+=  h_lab.tr_content(patient_user,item);

                                });//end for each

                                $('#tbl-lab-content tbody').html(tr);

                                $('.lab-general-status').each(function(){
                                    if($(this).val()=="Complete"){
                                        $(this).prop("disabled",true)
                                        $(this).closest('tr').addClass('bg-l-r')
                                        $(this).closest('tr').find('.add-new-result-lab').removeClass('add-new-result-lab')
                                    }
                                })
                                if(window.location.pathname.includes('patient_appointment.php')){
                                    $('#lab .lab-general-status').prop("disabled","true")
                                }
                                //
                            }
                        });//end ajax get appointment at current page


                    } //end onPageClick
                }));
                //
            }
        });
    },

    tr_content:function(patient_id,lab){
        //console.log(lab);
        var tr ='';
        //date
        var create_date_lab= lab.CreatedDate;

        var option = selectBox(generalStatus,lab.status_option_status);

        var status ='<select class="lab-general-status form-control">'+option+'</select>'

        var assignedDoctor=''
        var doctor_name ='';
        var doctor_id='';
        if(lab.ordered_by_user !=null && lab.ordered_by_user !=''){
            assignedDoctor=lab.orderedBy_display_name
            doctor_id=lab.ordered_by_user
        }

        var productName=''
            if(lab.product_list_custom_product.length){
                lab.product_list_custom_product.forEach(function(item){
                    productName +='<div class="row">'+item.name_text+'</div> ';
                })
            }

        var results_lab = "<td style='cursor: pointer' class='result-lab color_blue add-new-result-lab'>Thêm kết quả</td>"
        if(lab.results_text !=null && lab.results_text !='') {
            results_lab ="<td style='cursor: pointer' class='result-lab'>"+lab.results_text+"</td>" ;
        }


        tr +='<tr>' +
            '<td class="open-modal-lab" style="cursor: pointer"><i class="fa fa-edit color6676f2"></i>' +
            '<input type="hidden" class="lab_id" value="'+lab.Lab_id+'">' +
            '</td>' +
            '<td>'+create_date_lab+'</td>' +
            '<td class="product-name">'+productName+'</td>' +
             results_lab+
            '<td>'+assignedDoctor+'</td>' +
            '<td>'+status+'</td>' +
            '</tr>';

        return tr;
    },

    show_modal_lab:function($me){
        var lab_id =  $me.find('.lab_id').val();
        $('#lab-modal #lab-id').val(lab_id);

        var link3 =link._lab_by_id;

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": "POST",
            dataType: 'json',
            data: {token:_token,Lab_id:lab_id},
            error : function (status,xhr,error) {
            },
            success: function (res) {
                //console.log(res);
                if(res.Error==''){
                    var lab=res.lab;
                    $('#lab-modal #lab-id').val(lab.Lab_id);
                    //var option = generalStatusOption;
                    $('#lab-modal #modal-lab-general-status').html(generalStatusOption);
                    $('#lab-modal #modal-lab-general-status option[value="'+lab.status_option_status+'"]').attr("selected","selected")

                    if(lab.status_option_status !='Complete' && type_login !='Patient'){
                        //console.log(type_login)
                        $('#lab-modal #save-lab-div').html('<button class="btn btn btn-danger w100" id="update-lab">Lưu</button>')

                        //bind save event
                        $('#lab-modal #update-lab').unbind('click').bind('click',function(){
                            $('#lab-modal #update-lab').prop("disabled",true)
                            history_lab.prototype.save_update_lab(lab_id,$me);
                        });
                    }

                    if(lab.status_option_status =='Complete'){
                        $('#lab-modal .class-disabled').prop("disabled",true);
                        $('#lab-modal .read-only').prop("readonly",true);
                    }

                    //date complete
                    var date='';
                    var hour='';

                    if(lab.completed_date_date !=null){
                        var d = new Date(lab.completed_date_date);
                        var date_t = d.toLocaleString();
                        var date_arr = date_t.split(',');
                        var date1_arr = date_arr[0].split('/');
                        date=date1_arr[2]+"-"+("0"+date1_arr[0]).slice(-2)+"-"+("0"+date1_arr[1]).slice(-2);

                        var hour_t = date_arr[1].split(':');
                        var am_pm_t = hour_t[2].split(' ');
                        hour_t[0]= hour_t[0].trim();
                        var hour = ("0"+hour_t[0]).slice(-2)+':'+("0"+hour_t[1]).slice(-2)
                        if(am_pm_t[1].trim()=='PM'){
                            var h= parseInt(hour_t[0]) +12;
                            hour = h+':'+("0"+hour_t[1]).slice(-2)
                        }
                    }

                    $('#lab-modal #modal-lab-date-completed').val(date);
                    $('#lab-modal #modal-lab-time-completed').val(hour);

                    $('#lab-modal #lab-instructions').val(lab.notes_text);
                    $('#lab-modal #lab-result').val(lab.results_text);
                    //

                    if(lab.signature_url_text !=null && lab.signature_url_text !=''){
                        $('#lab-modal #lab-pdf-hide').css({"display":''})
                        $('#lab-modal #lab-print-hide').css({"display":''})

                        $('#lab-modal #validated-succ').css({"display":''})
                        $('#lab-modal #lab-validation').css({"display":'none'})

                        //$('#modal-lab-validate #lab-modal-signature_image').val(lab.signature_image);
                        $('#modal-lab-validate #lab-modal-signature_url_text').val(lab.signature_url_text);
                        $('#lab-modal .display-sig-area').css({"display":""})
                        $('#lab-modal #display-sig').attr("src",lab.signature_url_display)
                    }

                    if(type_login =='Doctor' && (lab.signature_url_text ==null || lab.signature_url_text =='')){
                        $('#lab-modal #lab-validation').css({"display":""})
                    }

                    if(lab.completed_by_user !=null && lab.completed_by_user !=''){
                        userSelect(lab.completed_by_user,'#lab-modal #lab-completed-by');
                    }


                    if(lab.facility_custom_locations !=null && lab.facility_custom_locations !=''){
                        locationSelect(lab.facility_custom_locations,'#lab-modal #lab-location');
                    }


                    $('#lab-modal #lab-appt-text').text(lab.aptid_text);
                    $('#lab-modal #lab-date-time').text(lab.CreatedDate);
                    $('#lab-modal #lab-display-patient-name').text(lab.patient_display_name);
                    $('#lab-modal #lab-patient-address').text(lab.patient_Address);
                    $('#lab-modal #lab-doctor-assigned-name').text(lab.orderedBy_display_name);
                    $('#lab-modal #lab-appt-id').val(lab.appoinment_custom_appointment)
                    $('#lab-modal #lab-patient-id').val(lab.patient_user)
                    $('#lab-modal #lab-doctor-id').val(lab.ordered_by_user)

                    if(lab.product_list_custom_product.length >0){
                        var tr ='';
                        var i=0;
                        lab.product_list_custom_product.forEach(function(item){
                            i++
                            tr +='<tr>' +
                                '<td><span class="number">'+i+'</span> <input type="hidden" value="'+item["sku_text"]+'" class="modal-lab-product-id" </td>' +
                                '<td class="name">'+item["name_text"]+'</td>' +
                                '<td class="sale-price">'+item["sales_price_number"]+'</td>' +
                                '<td class="sku">'+item["sku_text"]+'</td>' +
                                '<td class="delete-modal-lab-product-id" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></td>' +
                                '</tr>';
                        })

                        $('#lab-modal #tbl-product-assigned-list tbody').html(tr);

                    }

                    if(lab.diagnostic_list_custom_diagnostic.length >0){
                        var row =''
                        lab.diagnostic_list_custom_diagnostic.forEach(function(item){
                            row +='<div class="diagnostic row col-12">' +
                                '<div class="col-2"></div>' +
                                '<div class="col-1 diagnostic-delete-row" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div> ' +
                                '<div class="col-9 diagnostic-row padding_l">' +
                                '<input type="hidden" class="diagnostic-id" value="'+item.code_text+'">' +
                                '<span>['+item.code_text+']</span><span class="diagnostic-text">'+item.name_text+'</span>' +
                                '</div>' +
                                '</div>';
                        })

                        $('#lab-modal #lab-diagnostic-selected').html(row)

                    }

                    var exsting_file_area = '';
                    if(lab.attachments1_list_file !='' && lab.attachments1_list_file !=null){
                        lab.attachments1_list_file.forEach(function(exsiting_file){
                            var temp = exsiting_file.split('/');
                            var index = temp.length;
                            var name_file = temp[index-1];
                            exsting_file_area +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                                '<div class="col-9"> <a href="'+exsiting_file+'" target="_blank" class="exsiting-file-name">'+name_file+'</a></div>' +
                                '<div class="col-3 lab-exsiting-file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                                '</div>'
                        })

                        $('#lab-modal #lab-attachement').append(exsting_file_area);
                    }

                    /////////////////////////////
                    //--------------------patient appointment----------------------
                    if(window.location.pathname.includes('patient_appointment.php')){
                        $('#lab-modal').find('input').prop("disabled","true")
                        $('#lab-modal').find('textarea').prop("disabled","true")
                        $('#lab-modal').find('select').prop("disabled","true")
                        $('#lab-modal').find('#save-lab-div').closest('.row').css({"display":"none"})
                        $('#lab-modal').find('#lab-validation').closest('.row').css({"display":"none"})
                    }
                }
            }
        }); /////////////////////////////

        //getDiagnostic(appt_id,'#lab-modal #lab-diagnostic-selected','lab')
    },

    get_product_line:function(arr,i){
      var arr_item =arr.split(';');
      var tr='<tr>' +
          '<td><span class="number">'+i+'</span> <input type="hidden" value="'+arr_item[0]+'" class="modal-lab-product-id" </td>' +
          '<td class="name">'+arr_item[1]+'</td>' +
          '<td class="sale-price">'+arr_item[2]+'</td>' +
          '<td class="sku">'+arr_item[3]+'</td>' +
          '<td class="delete-modal-lab-product-id" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></td>' +
          '</tr>';
        return tr;
    },

    get_diagnostic_nane_select2:function(){
        //'?limit=100&cursor=0'
        var link3 =link._diagnostics;

        $('#lab-modal #lab-diagnostic-name').select2({
            dropdownParent: $('#lab-modal .modal-body'),
            placeholder: 'Nhập tên hoặc mã code để tìm kiếm',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Nhập tên hoặc mã code';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'POST',
                dataType: 'json',
                delay: 300,
                data: function (params) {
                    var _data = {token:_token,text_search:params.term}

                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.diags) {
                        data = data.diags;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: '['+obj.code_text+']' +obj.name_text,
                            code:obj.code_text,
                            name1:obj.name_text
                        };
                    });
                    //console.log(data1);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="">' + item.text +
                    '</div>' +
                    '</div>';
            },
            templateSelection: function (item) {
                $('#lab-modal #lab-diagnostic-name').find('option').attr('code', item.code);
                $('#lab-modal #lab-diagnostic-name').find('option').attr('name1', item.name1);
                if (item.text) return item.text;
                else return item.code;
            }
        });
    },

    get_diagnostic_code_select2:function(){
        //'?limit=100&cursor=0'
        var link3 =link._diagnostics;

        $('#lab-modal #lab-diagnostic-code').select2({
            dropdownParent: $('#lab-modal .modal-body'),
            placeholder: 'Nhập tên hoặc mã code để tìm kiếm',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Nhập tên hoặc mã code';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'POST',
                dataType: 'json',
                delay: 300,
                data: function (params) {
                    var _data = {token:_token,text_search:params.term}
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.diags) {
                        data = data.diags;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: '['+obj.code_text+']' +obj.name_text,
                            code:obj.code_text,
                            name1:obj.name_text,
                            id:obj.code_text
                        };
                    });
                    //console.log(data1);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="">' + item.text +
                    '</div>' +
                    '</div>';
            },
            templateSelection: function (item) {
                $('#lab-modal #lab-diagnostic-code').find('option').attr('code', item.code);
                $('#lab-modal #lab-diagnostic-code').find('option').attr('name1', item.name1);
                if (item.text) return item.text;
                else return item.id;
            }
        });
    },

    add_diagnostic_row:function(id,name,code,name1){
        var row ='<div class="diagnostic row col-12">' +
            '<div class="col-2"></div>' +
            '<div class="col-1 diagnostic-delete-row" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></div> ' +
            '<div class="col-9 diagnostic-row padding_l">' +
                '<input type="hidden" class="diagnostic-id" value="'+code+'">' +
                '<span>'+code+'</span><span class="diagnostic-text">'+name1+'</span>' +
            '</div>' +
            '</div>';

        $('#lab-modal #lab-diagnostic-selected').append(row);

        /*$('#lab-modal .diagnostic-delete-row').unbind('click').bind('click',function(){
            $(this).closest('.diagnostic').remove();
        })*/


    },

    get_location_service:function(){
        //'?limit=100&cursor=0'
        var link3 =link._locations;

        $('#lab-modal #lab-location').select2({
            dropdownParent: $('#lab-modal .modal-body'),
            placeholder: 'Nhập nơi xét nghiệm',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Nơi xét nghiệm';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'POST',
                dataType: 'json',
                delay: 300,
                data: function (params) {
                    var _data = {text_search:params.term,token:_token}
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.locations) {
                        data = data.locations;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: obj.location_name_text,
                            id: obj.location_id,
                            address:obj.address_geographic_address
                        };
                    });

                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="col-12">' + item.text + '</div>' +
                    '<div class="col-12">' + item.address + '</div>' +
                    '</div>';
            },
            templateSelection: function (item, container) {
                $('#lab-location option').attr('address', item.address);
                if (item.text) return item.text || item.address;
                else return item.id;
            }
        })
    },

    get_product_name:function(){
        var link3 =link._products;

        $('#lab-modal #lab-name').select2({
            dropdownParent: $('#lab-modal .modal-body'),
            placeholder: 'Tên xét nghiệm',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Tên xét nghiệm';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'post',
                dataType: 'json',
                delay: 300,
                data: function (params) {
                    var _data = {token:_token,text_search:params.term}
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.products) {
                        data = data.products;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: obj.name_text,
                            id: obj.product_id,
                            sku:obj.sku_text,
                            price:obj.retail_price_number
                        };
                    });
                    //console.log(data1);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="col-12">' + item.text + '</div>' +
                    '<div class="col-12">' + item.sku + '-'+item.price+'</div>' +
                    '</div>';
            },
            templateSelection: function (item) {
                $('#lab-name option').attr('sku', item.sku);
                $('#lab-name option').attr('price', item.price);

                if (item.text) return item.text;
                else return item.id;
            }
        }).on('change',function(e){
               var sku = $(this).find(':selected').attr('sku');
                var price = $(this).find(':selected').attr('price');
                var name = $(this).find(':selected').text();
                var id = $(this).find(':selected').val();

                var continuing = false;
                $('#tbl-product-assigned-list tbody tr').each(function(){
                    var sku_existing =$(this).find('.sku').text();
                    if(sku ==sku_existing){
                        continuing = true;
                    }
                })

                if(!continuing){
                    var tr = h_lab.join_tr_to_product_list(id,name,price,sku);
                    $('#lab-modal #tbl-product-assigned-list >tbody').append(tr);

                    $('#lab-modal #lab-pdf-hide').css({"display":'none'})
                    $('#lab-modal #lab-print-hide').css({"display":'none'})
                    $('#lab-modal #lab-validation').css({"display":""});
                    $('#lab-modal #validated-succ').css({"display":"none"});



                    modal_validate.prototype.lab_validate_reset();
                    $('#modal-lab-validate #modal_type_login').val(type_login)
                }


                //Show validate
                if($('#lab-modal #lab-validation').css('display') == 'none')
                {
                    //$('#lab-modal #lab-validation').css({"display":""});
                    //$('#lab-modal #validated-succ').css({"display":"none"});

                   // var pres_id = $("#prescription-modal #prescription-id").val()
                    //var doctor_id = $('#prescription-modal #prescription-doctor-id').val()

                   // modal_validate.prototype.clear_Pres_Validate(pres_id,user_login,doctor_id);
                }
                //console.log(id +'--'+name + '--'+price +'--'+sku);
            });
    },

    join_tr_to_product_list:function(id,name,price,sku){
        var rowCount = $('#lab-modal #tbl-product-assigned-list >tbody >tr').length +1;

        var tr='<tr>' +
            '<td><span class="number">'+rowCount+'</span> <input type="hidden" value="'+sku+'" class="modal-lab-product-id" </td>' +
            '<td class="name">'+name+'</td>' +
            '<td class="sale-price">'+price+'</td>' +
            '<td class="sku">'+sku+'</td>' +
            '<td class="delete-modal-lab-product-id" style="cursor: pointer"><i class="fa fa-trash color-alert"></i></td>' +
            '</tr>';
        return tr;
    },

    get_completed_by:function(){
        var link3 =link._users_by_type;

        $('#lab-modal #lab-completed-by').select2({
            dropdownParent: $('#lab-modal .modal-body'),
            placeholder: 'Nhập tên người hoàn tất',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Nhập tên người hoàn tất';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'post',
                dataType: 'json',
                delay: 300,
                data: function (params) {

                    var _data = {token:_token,user_type_option_user_type:'Lab',
                        text_search:params.term}
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.users) {
                        data = data.users.results;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: obj.display_name_text,
                            id: obj.User_id,
                            address:obj.address_geographic_address
                        };
                    });
                    //console.log(data1);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="col-12">' + item.text + '</div>' +
                    '</div>';
            },
            templateSelection: function (item, container) {
                $('#lab-location option').attr('address', item.address);
                if (item.text) return item.text;
                else return item.id;
            }
        })
    },

    get_completed_by_lab:function(modal_id, field_id){
        var link3 =link._users_by_type;

        $(field_id).select2({
            dropdownParent: $(modal_id),
            placeholder: 'Nhập tên người hoàn tất',
            minimumInputLength: 1,
            language: {
                inputTooShort: function () {
                    return 'Nhập tên người hoàn tất';
                }
            },
            ajax: {
                "async": true,
                "crossDomain": true,
                url: link3,
                type: 'post',
                dataType: 'json',
                delay: 300,
                data: function (params) {
                    var _data = {token:_token,user_type_option_user_type:'Lab',
                        text_search:params.term}
                    return _data;
                },
                processResults: function (data, params) {
                    if (data && data.users) {
                        data = data.users.results;
                    }

                    data1 = $.map(data, function (obj) {
                        return {
                            text: obj.display_name_text,
                            id: obj.User_id,
                            address:obj.address_geographic_address
                        };
                    });
                    //console.log(data1);
                    return { results: data1 }

                },
                cache: true
            },
            escapeMarkup: function (markup) { return markup; },
            templateResult: function (item) {

                return '<div class="padding-5">' +
                    '<div class="col-12">' + item.text + '</div>' +
                    '</div>';
            },
            templateSelection: function (item, container) {
                if (item.text) return item.text;
                else return item.id;
            }
        })
    },

    save_update_lab:function(labID,$me)
    {
        var apptID='';
        if(window.location.pathname.includes('appointment_edit.php')){
            apptID = getUrlParameter1('id');
        }else{
            apptID = $('#lab-modal #lab-appt-id').val();
        }

        if(apptID =='' && labID=='') return

        var completed_by_user= $('#lab-modal #lab-completed-by').val();
        if(completed_by_user ==undefined) completed_by_user=''

        var date =$('#lab-modal #modal-lab-date-completed').val();
        var hour =$('#lab-modal #modal-lab-time-completed').val();
        var completed_date_temp = date +' '+hour

        var completed_date_date = new Date(completed_date_temp)

        var completed_date_date_flag =true;
        if(completed_date_date=='Invalid Date'){
            completed_date_date_flag=false;
        }

        var facility_custom_locations = $('#lab-modal #lab-location').val();
        if(facility_custom_locations ==undefined) facility_custom_locations=''

        var notes_text= $('#lab-modal #lab-instructions').val();
        var ordered_by_user = $('#lab-modal #lab-doctor-id').val();
        var patient_user = $('#lab-modal #lab-patient-id').val();
        var results_text = $('#lab-modal #lab-result').val();
        var status_option_status = $('#lab-modal #modal-lab-general-status').val();
        var product_list_custom_product =[];
        var product=''
        $('#lab-modal #tbl-product-assigned-list >tbody>tr').each(function(){
            product_list_custom_product.push($(this).find('.modal-lab-product-id').val());
        });

        var diagnostic =[];

        $('#lab-modal .diagnostic > .diagnostic-row').each(function(){
            diagnostic.push($(this).find('.diagnostic-id').val());
        });

        var signature_url =$('#modal-lab-validate #lab-modal-signature_url_text').val();
        var validate_pin = $('#modal-lab-validate #lab-pin-code-after-validate').val()
        var validate_doctor = user_login //$('#modal-lab-validate #doctor_unique_id').val()

        var attachments1_list_file = '';
        $('#lab-modal #lab-attachement .exsiting-file-name').each(function(){
            attachments1_list_file =(attachments1_list_file=='')? $(this).text():attachments1_list_file+','+$(this).text()
        })

        var data_lab ={
            appoinment_custom_appointment: apptID,
            completed_by_user: completed_by_user,
            facility_custom_locations: facility_custom_locations,
            notes_text: notes_text,
            ordered_by_user: ordered_by_user,
            patient_user: patient_user,
            results_text: results_text,
            status_option_status: status_option_status,
            product_list_custom_product:product_list_custom_product,
            signature_url_text: signature_url,
            attachments1_list_file:attachments1_list_file
        }

        Object.assign(data_lab, completed_date_date_flag ? { "completed_date_date": completed_date_temp } : null)
        //file
        var _data = new FormData();
        //var imgData =  $('#lab-modal #lab-file-select');
        var imgData = document.getElementById('lab-file-select');
        if(imgData.files.length  > 0) {
            for (var i = 0; i < imgData.files.length; i++) {
                _data.append('file[]', imgData.files[i], imgData.files[i].name);
            }
        }

        _data.append('token', _token);
        _data.append('Lab_id', labID);
        _data.append('Appt_id', apptID);
        _data.append('diagnostic_list_custom_diagnostic', JSON.stringify(diagnostic));
        _data.append('validate_pin', validate_pin);
        _data.append('validate_doctor', validate_doctor);
        _data.append('data_lab',JSON.stringify(data_lab));

        /*var _data ={
            token:_token,
            Lab_id:labID,
            Appt_id:apptID,
            diagnostic_list_custom_diagnostic:diagnostic,
            validate_pin:validate_pin,
            validate_doctor:validate_doctor,
            data_lab:data_lab
        }*/

        var link3 =link._apt_up_new_lab;
        var method_type ='POST'

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": method_type,
            data:_data,
            dataType: 'json',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            error : function (status,xhr,error) {
            },
            success: function (res) {
                var productName=''
                $('#lab-modal #tbl-product-assigned-list >tbody>tr').each(function(){
                    productName +='<div class="row">'+$(this).find('.name').text()+'</div> ';
                });

                $('.tab-pane #tbl-lab-content >tbody').find('.bg-l-b').removeClass('bg-l-b')
                var class_n ='class="bg-l-b"'

                if(res.Error ==''){
                    //display file
                    if(res.files_save_success.length >0){
                        var exsting_file_area = ''
                        res.files_save_success.forEach(function(exsiting_file){
                            var temp = exsiting_file.split('/');
                            var index = temp.length;
                            var name_file = temp[index-1];
                            exsting_file_area +='<div class="row padding_l15 m-t5" style="width: 100%">' +
                                '<div class="col-9"> <a href="'+exsiting_file+'" target="_blank" class="exsiting-file-name">'+name_file+'</a></div>' +
                                '<div class="col-3 lab-exsiting-file-delete text-right" style="cursor: pointer"><fa class="fa fa-trash color-alert"></fa></div>' +
                                '</div>'
                        })

                        $('#lab-modal #lab-attachement').append(exsting_file_area);
                    }

                    h_lab.lab_file_tranfer.clearData()
                    $("#lab-modal #lab-files-area").html("");

                    if(labID =='' && res.Lab_id !=""){
                        //add new sucess
                        var patient_name =$('#lab-modal #lab-display-patient-name').text();
                        var address =$('#lab-modal #lab-patient-address').text();

                        //date
                        var d = new Date();
                        var create_date_lab = d.getFullYear()+'-'+ d.getMonth() +'-'+ d.getDate()+', '+ d.getHours()+':'+ d.getMinutes()

                        var doctor_name=$('#lab-modal #lab-doctor-assigned-name').text();

                        var results_lab = "<td style='cursor: pointer' class='result-lab color_blue add-new-result-lab'>Thêm kết quả</td>"
                        var results_text1=''
                        if(results_text !=undefined && results_text !="") {
                            results_lab ="<td style='cursor: pointer' class='result-lab'>"+results_text+"</td>" ;
                            results_text1 = results_text
                        }


                        var option = selectBox(generalStatus,status_option_status);
                        var status ='<select class="lab-general-status form-control">'+option+'</select>'
                        if($('#lab-modal #modal-lab-general-status').val() =='Complete'){
                            class_n ='class="bg-l-r"'
                            var status ='<select class="lab-general-status form-control" disabled="disabled">'+option+'</select>'
                            results_lab = "<td style='cursor: pointer' class='result-lab color_blue'>"+results_text1+"</td>"
                        }

                        var tr ='<tr '+class_n+'>' +
                            '<td class="open-modal-lab" style="cursor: pointer"><i class="fa fa-edit color6676f2"></i>' +
                            '<input type="hidden" class="lab_id" value="'+res.Lab_id+'">' +
                            '</td>' +
                            '<td>'+create_date_lab+'</td>' +
                            '<td class="product-name">'+productName+'</td>' +results_lab+
                            '<td>'+doctor_name+'</td>' +
                            '<td>'+status+'</td>' +
                            '</tr>';


                        if($('.tab-pane #tbl-lab-content >tbody tr').length > 0 ){
                            $(tr).insertBefore($('.tab-pane #tbl-lab-content >tbody >tr:first'))
                        }else{
                            $('.tab-pane #tbl-lab-content >tbody').append(tr)

                        }


                        labID =res.Lab_id

                        $("#lab-modal #lab-id").val(labID);
                        $('#lab-modal #save-lab-div').html('');


                        if($('#lab-modal #modal-lab-general-status').val() !='Complete'){
                            $('#lab-modal #save-lab-div').html('<button class="btn btn btn-danger w100" id="update-lab">Lưu</button>')

                            //bind save event
                            $('#lab-modal #update-lab').unbind('click').bind('click',function(){
                                $('#lab-modal #update-lab').prop("disabled",true)
                                history_lab.prototype.save_update_lab(labID,'');
                            });
                        }
                    }else if(labID !='' && $me !=''){
                        //update sucess
                        $me.closest('tr').find('.product-name').html(productName);

                        $me.closest('tr').find(".lab-general-status option").attr("selected", false);
                        $me.closest('tr').find('.lab-general-status option[value="'+status_option_status+'"]').prop("selected", true);

                        //.find("option[value='"+status_option_status+"']")
                        if(results_text !='' && results_text !=null){
                            $me.closest('tr').find('.add-new-result-lab').text(results_text);
                            $me.closest('tr').find('.add-new-result-lab').removeClass('add-new-result-lab');
                            $me.closest('tr').find('.color_blue').removeClass('color_blue');
                        }else{
                            if(!$me.closest('tr').find('.result-lab').hasClass('add-new-result-lab')){
                                $me.closest('tr').find('.result-lab').addClass('add-new-result-lab');
                            }

                            if(!$me.closest('tr').find('.result-lab').hasClass('color_blue')){
                                $me.closest('tr').find('.result-lab').addClass('color_blue');
                            }

                            $me.closest('tr').find('.result-lab').text('Thêm kết quả');
                        }

                        if($('#lab-modal #modal-lab-general-status').val() =='Complete'){
                            $me.closest('tr').find(".lab-general-status").prop("disabled",true)
                            $me.closest('tr').addClass('bg-l-r')
                            $me.closest('tr').find('.add-new-result-lab').removeClass('add-new-result-lab');
                        }else{
                            $me.closest('tr').addClass('bg-l-b')
                        }

                    }else if(labID !='' && $me ==''){
                        //console.log("app1="+apptID)
                        var patient_name =$('#lab-modal #lab-display-patient-name').text();
                        var address =$('#lab-modal #lab-patient-address').text();

                        //date
                        var d = new Date();
                        var create_date_lab = d.getFullYear()+'-'+ d.getMonth() +'-'+ d.getDate()+', '+ d.getHours()+':'+ d.getMinutes()

                        var doctor_name=$('#lab-modal #lab-doctor-assigned-name').text();
                        var aptid_text=$('#lab-modal #lab-appt-text').text();

                        var apptID1 = $('#lab-modal #lab-appt-id').val();

                        var results_lab = "<td style='cursor: pointer' class='color_blue add-new-result-lab'>Thêm kết quả</td>"
                        var results_text1='';
                        if(results_text !=undefined && results_text !="") {
                            results_lab ="<td >"+results_text+"</td>" ;
                            results_text1 = results_text
                        }

                        var option = selectBox(generalStatus,status_option_status);

                        var status ='<select class="lab-general-status form-control">'+option+'</select>'
                        if($('#lab-modal #modal-lab-general-status').val() =='Complete'){
                            class_n ='class="bg-l-r"'
                            var status ='<select class="lab-general-status form-control" disabled="disabled">'+option+'</select>'
                            results_lab = "<td style='cursor: pointer' class='color_blue'>"+results_text1+"</td>"
                        }

                        var tr ='<tr '+class_n+'>' +
                            '<td class="open-modal-lab" style="cursor: pointer"><i class="fa fa-edit color6676f2"></i>' +
                            '<input type="hidden" class="lab_id" value="'+labID+'">' +
                            '</td>' +
                            '<td>'+create_date_lab+'</td>' +
                            '<td class="product-name">'+productName+'</td>' +results_lab+
                            '<td>'+doctor_name+'</td>' +
                            '<td>'+status+'</td>' +
                            '</tr>';

                        $('.tab-pane #tbl-lab-content >tbody tr:first').remove();

                        if($('.tab-pane #tbl-lab-content >tbody tr').length > 0 ){
                            $(tr).insertBefore($('.tab-pane #tbl-lab-content >tbody >tr:first'))
                        }else{
                            $('.tab-pane #tbl-lab-content >tbody').append(tr)

                        }
                    }

                    //send email
                    //pdf_ex.prototype.print_lab('is_send_email')

                    $('#modal-success').modal('show')
                    setTimeout(function(){
                        $('#modal-success').modal('hide');


                        $('#lab-modal #update-lab').prop("disabled",false)
                        $('#lab-modal #save-lab').prop("disabled",false)

                        if($('#lab-modal #modal-lab-general-status').val() =='Complete'){
                            $('#lab-modal .class-disabled').prop("disabled",true);
                            $('#lab-modal .read-only').prop("readonly",true);

                            $('#lab-modal #save-lab-div').html('');
                        }

                        if(res.signature_url_text !=null && res.signature_url_text !=''){
                            $('#lab-modal #lab-pdf-hide').css({"display":''})
                            $('#lab-modal #lab-print-hide').css({"display":''})

                            $('#lab-modal #validated-succ').css({"display":''})
                            $('#lab-modal #lab-validation').css({"display":"none"})

                            //$('#modal-lab-validate #lab-modal-signature_image').val(lab.signature_image);
                            $('#modal-lab-validate #lab-modal-signature_url_text').val(res.signature_url_text);

                            $('#lab-modal .display-sig-area').css({"display":""})
                            $('#lab-modal #display-sig').attr("src",res.signature_url_display)
                            //send email
                            var Lab_id = $('#lab-modal #lab-id').val();
                            pdf_ex.prototype.export_lab(Lab_id,"is_send_email");
                        }

                    },3000)

                    //
                }

            }
        });
    },

    update_lab_changeStatus:function($me)
    {
        var labID = $me.closest('tr').find('.lab_id').val();
        if(labID=='') return

        var link3 =link._apt_up_new_lab;
        var method_type='POST'
        var status_option_status = $me.val();

        var data_lab ={
            "status_option_status": status_option_status
        }

        var data={token:_token,Lab_id:labID,data_lab:data_lab}

        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": link3,
            "method": method_type,
            data:data,
            dataType: 'json',

            error : function (status,xhr,error) {
            },
            success: function (res) {
                if($me.val()=="Complete"){
                    $me.prop("disabled",true);
                    $me.closest('tr').addClass('bg-l-r')
                    $me.closest('tr').find('.add-new-result-lab').removeClass('add-new-result-lab')
                }
                ///////////////
            }
        });
    },

    save_lab_modal_result:function($me){
        var labID=$('#add-lab-result-modal #m-lab-id').val()
        var date =$('#add-lab-result-modal #m-modal-lab-date-completed').val()
        var hour =$('#add-lab-result-modal #m-modal-lab-time-completed').val()
        var completed_date_temp = date +' '+hour
        var completed_date_date = new Date(completed_date_temp)

        var flag_completeddate =false
        if(completed_date_date !='Invalid Date'){
            flag_completeddate =true
        }

        var results_text = $('#add-lab-result-modal #m-lab-result').val()
        var completed_by_user= $('#add-lab-result-modal #m-lab-completed-by').val()
        if(completed_by_user ==undefined) completed_by_user=''

        var status_option_status= $('#add-lab-result-modal #m-modal-lab-general-status').val()

        var data_lab ={
            completed_by_user: completed_by_user,
            status_option_status: status_option_status,
            results_text: results_text
        }

        Object.assign(data_lab, flag_completeddate ? { "completed_date_date": completed_date_temp } : null)

        var _data ={
            token:_token,
            Lab_id:labID,
            data_lab:data_lab
        }

        var link3 =link._apt_up_new_lab;

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
                    //update sucess
                if(results_text !='' && results_text !=undefined){
                    $me.closest('tr').find('.add-new-result-lab').text(results_text);
                    $me.closest('tr').find('.add-new-result-lab').removeClass('add-new-result-lab');
                    $me.closest('tr').find('.color_blue').removeClass('color_blue');
                }

                    $me.closest('tr').find('.completed_by').val(completed_by_user);

                    $me.closest('tr').find(".lab-general-status option").attr("selected", false);
                    $me.closest('tr').find('.lab-general-status option[value="'+status_option_status+'"]').prop("selected", true);

                if($me.closest('tr').find(".lab-general-status").val()=="Complete"){
                    $me.closest('tr').find(".lab-general-status").prop("disabled",true);
                    $me.closest('tr').addClass('bg-l-r')
                    $me.closest('tr').find('.add-new-result-lab').removeClass('add-new-result-lab')
                }
                ///////////////
                $('#modal-success').modal('show')
                setTimeout(function(){
                    $('#modal-success').modal('hide');
                    //$('#lab-modal').modal('hide');

                },3000)
                //
            }
        });
    },

    show_modal_lab_result:function(me){
        history_lab.prototype.reset_lab_result_modal();
        var labid = me.closest("tr").find(".lab_id").val();
        var created_date= me.closest("tr").find(".lab_date").val();
        var lab_status = me.closest("tr").find(".lab-general-status").val();

        $('#add-lab-result-modal #m-lab-id').val(labid);
        $('#add-lab-result-modal #m-lab-date-time').text(created_date);

        var option = selectBox(generalStatus,lab_status);
        $('#add-lab-result-modal #m-modal-lab-general-status').html(option);

        $("#add-lab-result-modal").modal("show")

        $(".btn-modal-add-lab-result").unbind("click").bind("click",function(){
            history_lab.prototype.save_lab_modal_result(me)
        })
    },

    reset_lab_modal:function(){
        $('#lab-modal #lab-diagnostic-code').val('').trigger('change');
        $('#lab-modal #lab-diagnostic-name').val('').trigger('change');
        $('#lab-modal #lab-location').val('').trigger('change');
        //$('#lab-modal #modal-lab-general-status').val('');
        $('#lab-modal #modal-lab-general-status').attr("selected", false);
        $('#lab-modal #modal-lab-general-status option[value="New"]').attr("selected","selected")
        $('#lab-modal #lab-name').val('').trigger('change');
        $('#lab-modal #tbl-product-assigned-list >tbody').html('');
        $('#lab-modal #lab-instructions').val('')
        $('#lab-modal #lab-result').val('')
        $('#lab-modal #lab-completed-by').val('').trigger('change');
        $('#lab-modal #modal-lab-date-completed').val('')
        $('#lab-modal #modal-lab-time-completed').val('')
        $('#lab-modal #lab-diagnostic-selected').html('');

        $('#lab-modal #lab-id').val('')
        $('#lab-modal #lab-appt-id').val('')
        $('#lab-modal #lab-doctor-id').val('')
        $('#lab-modal #lab-patient-id').val('')

        $('#lab-modal #save-lab-div').html('')
        $('#lab-modal #lab-pdf-hide').css({"display":"none"})
        $('#lab-modal #lab-print-hide').css({"display":'none'})
        $('#lab-modal #lab-validation').css({"display":"none"})
        $('#lab-modal #validated-succ').css({"display":'none'})

        $('#lab-modal #lab-attachement').html("");
        /*if(window.location.pathname.includes('appointment_edit.php')){
            var id = getUrlParameter1('id');

            if(id!=undefined){
                //$('#lab-modal #lab-appt-id').val(id)

                //$('#lab-modal #lab-doctor-id').val($('.appointment-edit #doctor-id').val())
                //$('#lab-modal #lab-patient-id').val($('.appointment-edit #patient-id').val())
            }
        }*/

        $('#lab-modal .class-disabled').prop("disabled",false);
        $('#lab-modal .read-only').prop("readonly",false);
        $('#lab-modal .display-sig-area').css({"display":"none"})

    },

    reset_lab_result_modal:function(){
        $('#add-lab-result-modal #m-lab-id').val('')
        $('#add-lab-result-modal #m-lab-date-time').val('')
        $('#add-lab-result-modal #m-modal-lab-date-completed').val('')
        $('#add-lab-result-modal #m-modal-lab-time-completed').val('')
        $('#add-lab-result-modal #m-lab-result').val('')
        $('#add-lab-result-modal #m-lab-completed-by').val('').trigger('change');

    }

}
var h_lab = new history_lab();
$(function(){
    h_lab.init();
});