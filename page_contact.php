<?php

require_once 'init.php';

$_title = 'Liên Hệ - Xin chào bác sĩ';
$_active_nav = 'page_contact';
$_head = '	<!-- Optional: page related CSS-->
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
';
$_description = 'Contact Information';

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
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">Thông Tin Liên Hệ</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i style="color: black" class='subheader-icon fas fa-info'></i> Thông Tin Liên Hệ
                            </h1>
                        </div>
                        
                        <div class="container">
                            <p class="" style="color: black; font-size: 18px; font-weight: bold;">
                                Liên hệ với chúng tôi
                            </p>
                            <p class="" style="color: black; font-size: 16px;">
                                Imagine IT Solutions VN, Co, LTD.</br>
                                Tầng 3, Tòa nhà The Vista, 628C Xa Lộ Hà Nội,</br>
                                Phường An Phú, Quận 2,</br>
                                TP Hồ Chí Minh</br>
                                039.971.5437</br>
                            <a href="mailto:help@xinchaobacsi.vn" target="_blank">help@xinchaobacsi.vn</a>
                            </p>
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
        <script>
            $(document).ready(function() {
                $("#myInput").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#myList li").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });

        </script>
    </body>
</html>
