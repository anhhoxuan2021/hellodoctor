<?php
session_start();
require_once 'init.php';

$_title = 'Thông Tin Lịch Hẹn - Xin chào bác sĩ';
$_active_nav = 'invoice';
$_head = '	<!-- Optional: page related CSS-->

	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />

';
$_description = 'Appointment Information';
if(count($_SESSION) ==0){
    header("Location: login.php");
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
<html lang="en">
    <?php include_once APP_PATH.'/includes/head.php'; ?>
    <body class="mod-bg-1 mod-nav-link ">
        <?php include_once APP_PATH.'/includes/theme.php'; ?>
        <!-- BEGIN Page Wrapper -->
        <div class="page-wrapper">
            <div class="page-inner">
                <?php include_once APP_PATH.'/includes/nav.php'; ?>
                <div class="page-content-wrapper">
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <?php include_once 'modal/modal_inv.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active" >HÓA ĐƠN> <span id="inv-name"></span></li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> HÓA ĐƠN ><span id="inv-name1"></span>
                            </h1>
                            <div class="col-4 text-right" id="inv-appt-id">

                            </div>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <div id="inv-page-content">
                                <input type="hidden" id="patient-id">
                                <input type="hidden" id="patient-name">
                                <input type="hidden" id="appointment-id">
                                <input type="hidden" id='invoice-balance'>
                                <input type="hidden" id='paid-amount'>
                                <input type="hidden" id='invoice_id'>

                                <div class="row margin_b15">
                                    <div class="col-6" id="inv-patient-name"></div>
                                    <div class="col-6 text-right">

                                    </div>
                                </div>

                                <div class="row margin_b15">
                                    <div class="col-12 border-gray51">
                                        <div class="col-12 m-t10 padding_l f-size22"><strong>Chi tiết hóa đơn</strong></div>
                                        <div class="col-12 border-black m-t10" id="invline-detail">

                                        </div>
                                        <div class="col-12 row m-t10">
                                            <div class="col-3 padding_l">
                                                <?php
                                                if($_SESSION["user_type_option_user_type"] !='Patient'){
                                                   ?>
                                                    <button class="btn form-control btn-succ" id="add-invoice-line">Thêm invoice Line</button>
                                                <?php
                                                }
                                                ?>

                                            </div>
                                            <div class="col-5"></div>
                                            <div class="col-2 text-right">Tạm tính</div>
                                            <div class="col-2 color-alert"><strong id="inv-total"></strong></div>
                                        </div>
                                        <div class="col-12 row m-t10 m_b15">
                                            <div class="col-8"></div>
                                            <div class="col-2 text-right" id="payment-label">Số tiền đã thanh toán </div>
                                            <div class="col-2 color-alert"><strong id="paid-amount-text"></strong></div>
                                        </div>
                                    </div>

                                    <div class="col-12 border-gray51 m-t20">
                                        <div class="row col-12 m-t10 m_b10">
                                            <div class="col-2 padding_l"><button class="btn form-control btn-succ" id="pay-now">Thanh toán</button></div>
                                            <div class="col-6"></div>
                                            <div class="col-2 middle-text"><span id="inv-balance-text">Số dư cần thanh toán</span> </div>
                                            <div class="col-2 middle-text" id="inv-balance"></div>

                                        </div>
                                        <div class="col-12 border-black bg-light-gray m_b15 padding_r" id="paid-detail">
                                        </div>
                                    </div>
                                </div>


                            </div>
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
            var user_login='<?php echo $_SESSION['_id'];?>';
        </script>

        <script src="<?= APP_URL; ?>/js/invoice/invoice.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/modal/modal_inv.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/pdf/pdf_ex.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>


    </body>
</html>
