<?php
session_start();
require_once 'init.php';

$_title = 'ĐỊA ĐIỂM- Xin chào bác sĩ';
$_active_nav = 'THÔNG TIN ĐỊA ĐIỂM';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';
$_description = 'ĐỊA ĐIỂM';

if(count($_SESSION) ==0 || $_SESSION['user_type_option_user_type'] =='Patient'){
    header("Location: facility_information.php?id=".$_GET['id']);
}
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
                <?php include_once APP_PATH.'/includes/nav.php'; ?>
                <div class="page-content-wrapper">
                    <?php include_once APP_PATH.'/includes/header.php'; ?>
                    <!-- BEGIN Page Content -->
                    <?php include_once 'modal/modal_appointment.php'; ?>
                    <?php include_once 'modal/modal_relative.php'; ?>
                    <?php include_once 'modal/modal_success.php'; ?>
                    <?php include_once 'modal/modal_signup.php'; ?>
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">ĐỊA ĐIỂM</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> ĐỊA ĐIỂM
                            </h1>
                        </div>
                        
                        <div class="container" style="padding-right: 0;padding-left: 0;">
                            <div id="location-content">
                                <div class="row">
                                    <div class="col-5 middle" style="height: 184px; left: 0px; width:100%; position: relative">
                                        <div class="image-upload">
                                            <label for="photo-input">
                                                <img id="photo-img"  style="width: 100px; height: 100px; display: block; margin: 0px; border-radius: 0px;" alt="photo img" class="rounded-circle shadow-2 img-thumbnail fs-xl" />
                                            </label>

                                            <input id="photo-input" accept="image/*" type="file" onchange="facility_edit.prototype.previewFile(event);" style="display: none;" />
                                        </div>

                                    </div>
                                    <div class="col-7">
                                        <div class="row">
                                            <div class="col-1 middle-vertical"> <i class="fa fa-plus color-alert f-size16"></i></div>
                                            <div class="col-9 padding_l"><input class="form-control" type="text" id="location-name"></div>
                                        </div>
                                        <div class="row m-t5">
                                            <div class="col-1 middle-vertical"> <i class="fa fa-map-marker color6676f2 f-size16"></i></div>
                                            <div class="col-9 padding_l"><input class="form-control" type="text" id="adress"></div>
                                        </div>
                                        <div class="row m-t5">
                                            <div class="col-1 middle-vertical"> <i class="fa fa-phone fa-flip-horizontal color6676f2 f-size16"></i></div>
                                            <div class="col-9 padding_l"><input class="form-control" type="text" id="phone"></div>
                                        </div>
                                        <div class="row m-t5">
                                            <div class="col-1 middle-vertical"> <i class="fa fa-paper-plane color6676f2 f-size16"></i></div>
                                            <div class="col-9 padding_l"><input class="form-control" type="text" id="email"></div>
                                        </div>
                                        <div class="row m-t5">
                                            <div class="col-1 middle-vertical"> <i class="fa fa-fax  color6676f2 f-size16"></i></div>
                                            <div class="col-9 padding_l"><input class="form-control" type="text" id="fax"></div>
                                        </div>
                                        <div class="row m-t5">
                                            <div class="col-3 middle-vertical">Phân loại</div>
                                            <div class="col-7 padding_l"><select class="form-control" id="l-type">
                                                    <option value=""></option>
                                                </select></div>
                                            <div class="col-12" id="list-type"></div>
                                        </div>


                                    </div>
                                </div>
                                <div class="row m-t15 m-r10">
                                    <input class="form-control" type="text" id="l-addr">
                                </div>
                                <div class="row" id="map"  style="width:100%;height:400px; margin-top: 20px">

                                </div>

                                <div class="row m-t15 m-r10">
                                    <div class="col-9"></div>
                                    <div class="col-3"><button class="btn btn-succ w100" id="save-facility">Lưu</button></div>
                                </div>


                                <div class="row border-b-solid-c111 m-t15 m_b15"></div>

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

        <script src="<?= APP_URL; ?>/js/modal/modal_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_relative.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_signup.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>

        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>
        <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>

        <!--
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.googlemap/1.5/jquery.googlemap.js"></script>
        -->
        <script src="<?= APP_URL; ?>/js/location/facility_edit.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/user/physician_list.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>

        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDqqFUPT6qHW2hvTEfwLw6IaXs253qrlmU&callback=myMap"></script>
        <script>
            var user_login='<?php echo $_SESSION['_id'];?>';
            var type_login='<?php echo $_SESSION['user_type_option_user_type'];?>';
        </script>
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
