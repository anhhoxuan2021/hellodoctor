<?php
session_start();
require_once 'init.php';

$_title = 'DANH SÁCH NHÀ THUỐC - Xin chào bác sĩ';
$_active_nav = 'Pharmacy list';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';
$_description = 'DANH SÁCH NHÀ THUỐC';
$type_login =0;
if(count($_SESSION)>0){
    $type_login=$_SESSION['user_type_option_user_type'];
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
                    <?php include_once 'modal/modal_create_facility.php'; ?>
                    <?php include_once 'modal/modal_success.php'; ?>
                    <!-- BEGIN Page Content -->
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">DANH SÁCH NHÀ THUỐC</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> DANH SÁCH NHÀ THUỐC
                            </h1>
                            <?php
                            if($type_login !="Patient"){
                                ?>
                                <div class="col-4 text-right">
                                    <button class="btn btn-succ" id="open-modal-facility"><strong>Tạo mới</strong></button>
                                </div>
                            <?php
                            }
                            ?>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <div class="row" style="position: relative">
                                <div class="col-12" style="position: absolute; z-index: 2">
                                    <input class="form-control" id="search-text" type="text" placeholder="Nhập để tìm kiếm">
                                </div>
                                <div id="btn-search" class="btn_search middle-text" >
                                    <i class="fa fa-search f-size20 color6676f2"></i>
                                </div>
                            </div>

                            <br>
                            <div id="pharmacy-content" class="m-t35" style="width: 100%">

                            </div>

                            <ul id="pharmacy-pagination" class="pagination-sm"></ul>

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
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>
        <!--
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>
         <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
        -->
        <script src="<?= APP_URL; ?>/js/register_login/login.js" type="text/javascript"></script>
        <script type="text/javascript">
            var count_session = <?php echo count($_SESSION); ?>;
            var user_type_login= "<?php echo $type_login; ?>";
        </script>

        <script type="text/javascript">
            $(document).ready(function(){
                login.prototype.get_option_set();
                login.prototype.get_product_Consultation_Medication_Package()
            })
        </script>
        <script src="<?= APP_URL; ?>/js/modal/modal_create_facility.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/location/locations.js" type="text/javascript"></script>

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqqFUPT6qHW2hvTEfwLw6IaXs253qrlmU&callback=myMap"></script>

        <script>
            var map;
            function myMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    panControl: true,
                    zoomControl: true,
                    mapTypeControl: true,
                    scaleControl: true,
                    streetViewControl: true,
                    overviewMapControl: true,
                    rotateControl: true,
                    // you might set a center here or wait untill you have got some markers fetched via ajax, you can then use the first/last or some other marker respecetive it's position(lat,long) to set as "starting point"
                    //center: {lat: 10.1078316, lng: 106.3404925 }
                    //mapTypeId: google.maps.MapTypeId.ROADMAP
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
            }
        </script>

    </body>
</html>
