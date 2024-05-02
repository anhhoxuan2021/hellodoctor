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
$_description = 'Appointment Information';

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
                <div class="page-content-wrapper">
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="dashboard.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active" >Import data > <span id="appt-name"></span></li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> Import data >
                            </h1>
                        </div>
                        
                        <div class="container" style="padding-right: 0;padding-left: 0;">
                            <div id="import-content">
                                <div class="margin_b15 row" >

                                    <form id="form-user" class="col-10" method="POST" enctype="multipart/form-data">
                                        <label class="form-label col-12 padding_l">Import User</label>
                                        <div class="custom-file col-12">
                                            <input type="file" class="custom-file-input form-control" name="user_data" id="user-data">
                                            <label class="custom-file-label" for="user-data"> Select file</label>
                                        </div>
                                    </form>
                                    <div class="col-2">
                                        <label class="form-label col-12">&nbsp;</label>
                                        <button class="btn btn-danger form-control col-12" id="import-user">Save</button>
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

        <script src="<?= APP_URL; ?>/js/import/import.js" type="text/javascript"></script>

    </body>
</html>
