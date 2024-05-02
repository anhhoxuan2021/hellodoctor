<?php
session_start();
require_once 'init.php';

$_title = 'Thông Tin Lịch Hẹn - Xin chào bác sĩ';
$_active_nav = 'page_appointment';
$_head = '	<!-- Optional: page related CSS-->

	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />

';
$_description = 'Patient Information';
if(count($_SESSION) ==0){
    header("Location: login.php");
}

if($_SESSION['user_type_option_user_type'] !='Patient'){
    if(isset($_GET['id'])){
        header("Location: appointment_edit.php?id=".$_GET['id']);
        //echo "<script type='text/javascript'>window.top.location='login.php';</script>"; exit;
    }else{
        header("Location: dashboard.php");
    }
}

?>
<!DOCTYPE html>
<!-- 
Template Name:: SmartAdmin PHP 7 Responsive WebApp - Template built with Bootstrap 4 and PHP 7
Version: 4.5.3
Author: Jovanni Lo
Website: https://smartadmin.lodev09.com
Purchase: https://wrapbootstrap.com/theme/smartadmin-php-7-responsive-webapp-WB05M9585
License: You must have a valid license purchased only from wrapbootstrap.com (link above) in order to legally use this theme for your project.
-->
<style>
    .table td {
        border-top: none!important;
    }
</style>
<html lang="en">
    <?php include_once APP_PATH.'/includes/head.php'; ?>

    <call-us
        style="position: fixed; right: 50px; bottom: 50px;
         font-family: Arial;
         z-index: 99999;
         --call-us-form-header-background:#373737;
         --call-us-main-button-background:#0596d4;
         --call-us-client-text-color:#d4d4d4;
         --call-us-agent-text-color:#eeeeee;
         --call-us-form-height:330px;"
        id="wp-live-chat-by-3CX"
        channel-url="https://imagineitglobal.3cx.us"
        files-url="https://imagineitglobal.3cx.us"
        minimized="false"
        popout="false"
        animation-style="none"
        party="brandonhillman"
        minimized-style="BubbleRight"
        allow-call="true"
        allow-video="true"
        allow-soundnotifications="true"
        enable-mute="true"
        enable-onmobile="true"
        offline-enabled="true"
        enable="true"
        ignore-queueownership="false"
        authentication="name"
        operator-name="Support"
        show-operator-actual-name="true"
        channel="phone"
        aknowledge-received="true"
        gdpr-enabled="false"
        gdpr-message="I agree that my personal data to be processed and for the use of cookies in order to engage in a chat processed by COMPANY, for the purpose of Chat/Support for the time of  30 day(s) as per the GDPR."
        message-userinfo-format="both"
        message-dateformat="both"
        start-chat-button-text="Chat"
        window-title="Live Chat & Talk"
        button-icon-type="Default"
        invite-message="Hello! How can we help you today?"
        authentication-message="Could we have your name and email?"
        unavailable-message="We are away, leave us a message!"
        offline-finish-message="We received your message and we'll contact you soon."
        ending-message="Your session is over. Please feel free to contact us again!"
        greeting-visibility="none"
        greeting-offline-visibility="none"
        chat-delay="2000"
        offline-name-message="Could we have your name?"
        offline-email-message="Could we have your email?"
        offline-form-invalid-name="I'm sorry, the provided name is not valid."
        offline-form-maximum-characters-reached="Maximum characters reached"
        offline-form-invalid-email="I'm sorry, that doesn't look like an email address. Can you try again?"
        enable-direct-call="true"
        enable-ga="false"
        >
    </call-us>


    <script defer src="https://cdn.3cx.com/livechat/v1/callus.js" id="tcx-callus-js"></script>


    <body class="mod-bg-1 mod-nav-link ">
        <?php include_once APP_PATH.'/includes/theme.php'; ?>
        <!-- BEGIN Page Wrapper -->
        <div class="page-wrapper">
            <div class="page-inner">
                <?php include_once APP_PATH.'/includes/nav.php'; ?>
                <div class="page-content-patient page-content-wrapper">
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <?php include_once 'modal/modal_patient_lab.php'; ?>
                    <?php include_once 'modal/modal_clinical.php'; ?>
                    <?php include_once 'modal/modal_note.php'; ?>
                    <?php include_once 'modal/modal_inv.php'; ?>
                    <?php include_once 'modal/modal_history_detail.php'; ?>
                    <?php include_once 'modal/modal_add_lab_result.php'; ?>
                    <?php include_once 'modal/modal_lab.php'; ?>
                    <?php include_once 'modal/modal_prescription.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active" >CUỘC HẸN > <span id="appt-name"></span></li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title col-8 padding_l">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> CUỘC HẸN ><span id="appt-name1"></span>
                            </h1>
                            <div class="col-4 text-right" id="appt-inv-id1"></div>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <div id="patient-content">
                                <input type="hidden" id="patient-id">
                                <input type="hidden" id="patient-name">
                                <input type="hidden" id="patient-address">
                                <input type="hidden" id="doctor-id">
                                <input type="hidden" id="doctor-assigned-name">
                                <input type="hidden" id="appointment-id">
                                <input type="hidden" id="diagnostic_list">
                                <div class="row margin_b15">
                                    <div class="col-5">
                                        <div class="col-12 border-gray51" style="height: 140px!important;">
                                            <div class="row">
                                                <div class="col-4 padding_l" id="user-image">

                                                </div>
                                                <div class="col-8 padding_l">
                                                    <div class="col-12 padding_rl" id="user-name"></div>
                                                    <div class="col-12 padding_rl" id="user-year"></div>
                                                    <div class="col-12 padding_rl" id="user-age"></div>
                                                    <div class="col-12 padding_rl" id="user-phone"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4 padding_l text-center">Bệnh nhân</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="col-12 border-gray51" id="has-doctor" style="height: 140px!important;display: none">
                                            <div class="row">
                                                <div class="col-4 padding_l" id="doctor-image">

                                                </div>
                                                <div class="col-8 padding_l">
                                                    <div class="col-12 padding_rl" id="doctor-name"></div>
                                                    <div class="col-12 padding_rl" id="doctor-degree"></div>
                                                    <div class="col-12 padding_rl" id="doctor-special"></div>
                                                    <div class="col-12 padding_rl" id="doctor-university"></div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4 padding_l text-center">Bác sĩ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row margin_b15">
                                    <div class="col-6">
                                        <div class="row margin_b10">
                                            <div class="col-5">
                                                <div class="form-group">
                                                    <label for="Type">Loại lịch hẹn</label>
                                                    <select class="form-control class-disabled" id="Type" disabled="disabled">
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-4  padding_l">
                                                <div class="form-group">
                                                    <label  for="date">Date</label>
                                                    <input class="form-control" id="date" type="date" name="date"  readonly="true">
                                                </div>
                                            </div>
                                            <div class="col-3 padding_rl">
                                                <div class="form-group">
                                                    <label  for="time-2">Time</label>
                                                    <input class="form-control" id="time-2" type="time" name="time" readonly="true">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row margin_b10">
                                            <div class="col-12 padding_r">
                                                <div class="form-group">
                                                    <label  for="Disposition">Vị trí cuộc hẹn</label>
                                                    <select class="form-control class-disabled" id="Disposition" disabled="disabled">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row margin_b10">
                                            <div class="col-12 padding_r">
                                                <div class="form-group">
                                                    <label  for="ChiefComplaint">Khám bệnh gì</label>
                                                    <select class="form-control class-disabled" id="ChiefComplaint" disabled="true">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row margin_b10">
                                            <div class="col-12 padding_r">
                                                <div class="form-group">
                                                    <label  for="Description">Mô tả</label>
                                                    <textarea class="form-control" id="Description" rows="2" readonly="true"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row margin_b10">
                                            <div class="col-12 padding_r">
                                                <div class="form-group">
                                                    <label  for="Notes">Ghi chú</label>
                                                    <textarea class="form-control" id="vital-notes" rows="3" readonly=""></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <!--end col-6-->
                                    <div class="col-6">
                                        <div class="row margin_b10 margin_b10">
                                            <div class="col-12 ">
                                                <div class="form-group">
                                                    <label  for="Notes">File đính kèm</label>
                                                    <div class="col-12 b-gray51" id="attachment-file" style="min-height: 100px"></div>

                                                </div>
                                            </div>
                                        </div>

                                        <div class="row margin_b10">
                                            <div class="col-12 padding_r">
                                                <div class="form-group">
                                                    <label  for="Notes">Lịch sử Ghi chú</label>
                                                    <div class="col-12 b-gray51 padding_r" id="Notes-history" style="height:200px;overflow-y:auto;overflow-x: hidden;"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row margin_b30">
                                            <div class="col-5">
                                                <button class="btn btn-succ w100" id="add-note"><strong>Thêm ghi chú</strong></button>
                                            </div>
                                            <div class="col-7">
                                                <button class="btn btn-succ" id="clinical_show">KHÁM LÂM SÀNG VÀ CẬN LÂM SÀN</button>
                                            </div>
                                        </div>

                                    </div>
                                    <!--end col-6-->
                                </div>

                                <div class="row margin_b15 m-t10" id='appt-lab' style="display: none">
                                    <div class="col-12 f-size18 f-bold">Xét nghiệm</div>
                                    <div class="col-12">
                                        <div class="b-gray51" id='appt-lab-detail'>

                                        </div>
                                    </div>
                                </div>

                                <div class="row margin_b15 m-t10" id='appt-presctiption' style="display: none">
                                    <div class="col-12 f-size18 f-bold">Toa thuốc</div>
                                    <div class="col-12">
                                        <div class="col-12 b-gray51 padding_rl" id='appt-presctiption-detail'>
                                            <table class="table tbl-display-midle m-0 t-normal" id="tbl-pres">
                                                <thead>
                                                <tr class=" tbl_border_lr">
                                                    <th class="w100px">Đơn thuốc</th>
                                                    <th>Tên thuốc</th>
                                                    <th class="w100px">Sáng</th>
                                                    <th class="w100px">Trưa</th>
                                                    <th class="w100px">Chiều</th>
                                                    <th class="w100px">Tối</th>
                                                    <th class="w100px">Cách dùng</th>
                                                    <th class="w100px">Số lượng</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="row margin_b15 m-t10" >
                                    <div class="col-12 f-size18 f-bold">Hóa Đơn</div>
                                    <div class="col-12">
                                        <div class="col-12 b-gray51" id='appt-invoice-detail'>

                                        </div>
                                    </div>
                                </div>

                                <div class="row margin_b15 m-t10" >
                                    <div class="col-12 f-size18 f-bold">Thanh toán</div>
                                    <div class="col-12">
                                        <div class="col-12 b-gray51" id='appt-payment-detail'>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row margin_b15 m-t10 col-12" ><u><strong class=" f-size18">Tab</strong></u></div>
                            <!--tab-->
                            <ul class="nav nav-pills nav-justified" style="border-bottom: 1px solid rgba(0,0,0,.07);" role="tablist">
                                <li class="nav-item" ><a class="nav-link active" data-toggle="pill" href="#nav_1" style="font-size: 13px">Tiền sử</a></li>
                                <li class="nav-item" id="tab-appt-click"><a class="nav-link" data-toggle="pill" href="#nav_2" style="font-size: 13px">Lịch hẹn</a></li>
                                <li class="nav-item" id="tab-lab-click"><a class="nav-link" data-toggle="pill" href="#nav_3" style="font-size: 13px">Xét nghiệm</a></li>
                                <li class="nav-item" id="tab-prescription-click"><a class="nav-link" data-toggle="pill" href="#nav_4" style="font-size: 13px">Toa thuốc</a></li>
                                <li class="nav-item" id="tab-docs-click"><a class="nav-link" data-toggle="pill" href="#nav_5" style="font-size: 13px">Tài liệu</a></li>
                                <li class="nav-item" id="tab-note-click"><a class="nav-link" data-toggle="pill" href="#nav_6" style="font-size: 13px">Ghi chú</a></li>
                                <li class="nav-item" id="tab-invoice-click"><a class="nav-link" data-toggle="pill" href="#nav_7" style="font-size: 13px">Thanh toán</a></li>
                            </ul>
                            <div class="tab-content py-3">
                                <div class="tab-pane fade show active" id="nav_1" role="tabpanel">
                                    <?php include_once 'tab/history.php'; ?>
                                </div>
                                <div style="min-height: 500px;" class="tab-pane fade" id="nav_2" role="tabpanel">
                                    <?php include_once 'tab/history_appointment.php'; ?>
                                </div>
                                <div style="min-height: 500px;" class="tab-pane fade" id="nav_3" role="tabpanel">
                                    <?php include_once 'tab/history_lab.php'; ?>
                                </div>
                                <div style="min-height: 500px;" class="tab-pane fade" id="nav_4" role="tabpanel">
                                    <?php include_once 'tab/history_prescription.php'; ?>
                                </div>
                                <div style="min-height: 500px;" class="tab-pane fade" id="nav_5" role="tabpanel">
                                    <?php include_once 'tab/history_doc.php'; ?>
                                </div>
                                <div style="min-height: 500px;" class="tab-pane fade" id="nav_6" role="tabpanel">
                                    <?php include_once 'tab/history_note.php'; ?>
                                </div>
                                <div style="min-height: 500px;" class="tab-pane fade" id="nav_7" role="tabpanel">
                                    <?php include_once 'tab/history_inv.php'; ?>
                                </div>
                            </div>
                            <!--endtab-->
                            <!--end panel-->
                        </div>

                    </main>
                    <!-- END Page Content -->
                    <?php include_once APP_PATH.'/includes/footer.php'; ?>
                </div>
            </div>
        </div>
        <!-- END Page Wrapper -->
        <?php include_once APP_PATH.'/includes/extra.php'; ?>
        <?php include_once APP_PATH.'/includes/js.php'; ?>
        <script type="text/javascript">
            var user_type_option ='<?php echo $_SESSION["user_type_option_user_type"]; ?>'
            var type_login ='<?php echo $_SESSION["user_type_option_user_type"]; ?>'
            var user_login='<?php echo $_SESSION['_id'];?>';
        </script>

        <script src="<?= APP_URL; ?>/js/appointment/patient_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/modal/modal_patient_lab.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_clinical.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_note.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_inv.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_validate.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/pdf/pdf_ex.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>


        <script type="text/javascript">
            var p_appt = new patient_appointment();
            $(function(){
                p_appt.init();
            });
        </script>

        <script src="<?= APP_URL; ?>/js/modal/modal_history_detail.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_detail.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_lab.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_prescription.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_inv.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_note.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_doc.js" type="text/javascript"></script>
    </body>
</html>
