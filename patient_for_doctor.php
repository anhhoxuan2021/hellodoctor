<?php
session_start();
require_once 'init.php';

$_title = 'PHÒNG CHỜ BÁC SĨ - Xin chào bác sĩ';
$_active_nav = 'page_appointment';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';
$_description = 'Appointment Information';
if(count($_SESSION) ==0){
    header("Location: login.php");
}
if($_SESSION['user_type_option_user_type'] =='Patient'){
    header("Location: dashboard.php");
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
                <div class="page-content-wrapper" >
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <?php include_once 'modal/modal_claim.php'; ?>
                    <?php include_once 'modal/modal_success.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">PHÒNG CHỜ BÁC SĨ</a></li>
                            
                            <li class="breadcrumb-item active">PHÒNG CHỜ BÁC SĨ</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> Thông Tin Lịch Hẹn
                            </h1>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <div class="row">
                                <div class="col-12 padding_r">
                                    <input class="form-control" id="search-text" type="text" placeholder="Nhập để tìm kiếm">
                                    <div id="btn-search" class="btn_search middle-text" >
                                        <i class="fa fa-search f-size20 color6676f2"></i>
                                    </div>
                                </div>
                                <!--
                                <div class="col-3 padding_l">
                                    <select class="form-control" id="search-type">
                                        <option value="1">Tìm kiếm theo thông tin người dùng</option>
                                        <option value="2">Tìm kiếm theo thông tin cuộc hẹn</option>
                                    </select>
                                </div>-->
                            </div>
                            <br>
                            <div id="page-content" class="waiting-physician-list">

                            </div>

                            <ul id="pagination" class="pagination-sm"></ul>

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
            var user_login='<?php echo $_SESSION['_id'];?>';
            var type_login='<?php echo $_SESSION['user_type_option_user_type'];?>';
        </script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/appointment/appointment_list.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_claim.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>
        <script>

            $(document).ready(function() {
               /* $("#myInput").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#myList li").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });*/
            });

        </script>
    </body>
</html>
