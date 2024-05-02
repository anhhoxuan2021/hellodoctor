<?php
session_start();
require_once 'init.php';

$_title = 'Reset Password';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';


/*
if($_SESSION['user_type_option_user_type'] =='Patient'){
    header("Location: facility_information.php?id=".$_GET['id']);
}*/

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
                <div class="page-content-wrapper">
                    <?php include_once 'modal/modal_success.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active"></li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div style="display: none">
                            <input type="hidden" id="email" value = "<?=$_GET["id"];?>">
                        </div>
                        <div class="row">
                            <div class="col-3"></div>
                            <div class="col-5">
                                <div class="row">
                                    <label class="col-3 m-t7">Password mới</label>
                                    <div class="col-9">
                                        <input class="form-control" id ="new-pass" type="password">
                                    </div>
                                </div>
                                <div class="row m-t5">
                                    <label class="col-3 m-t7">Nhập lại password</label>
                                    <div class="col-9">
                                        <input class="form-control" id ="confirm-pass" type="password">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-t10">
                            <div class="col-3"> </div>
                            <div class="col-5">
                               <div class="row">
                                   <div class="col-3"></div>
                                   <div class="col-9 text-center">
                                       <button class="btn btn-danger" id="reset-pass">Xác nhận</button>
                                   </div>
                               </div>
                            </div>
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

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/register_login/reset_pass.js" type="text/javascript"></script>

    </body>
</html>
