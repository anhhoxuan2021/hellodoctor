<?php
session_start();
require_once 'init.php';

$_title = 'Thông Tin Lịch Hẹn - Xin chào bác sĩ';
$_active_nav = 'Patient list';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
';
$_description = 'Patient Information';

//if($_SESSION['user_type_option_user_type'] =='Patient'){
    //header("Location: dashboard.php");
//}
if(count($_SESSION) ==0){
    $input_hidden ='<input type="hidden" id="type-login" value="">';
    //$_SESSION['user_type_option_user_type']='';
}else{
    $input_hidden ='<input type="hidden" id="type-login" value="'.$_SESSION['user_type_option_user_type'].'">';
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
                    <?php include_once 'modal/modal_appointment.php'; ?>
                    <?php include_once 'modal/modal_relative.php'; ?>
                    <?php include_once 'modal/modal_success.php'; ?>
                    <?php include_once 'modal/modal_signup.php'; ?>
                    <?php include_once 'modal/modal_credentials.php'; ?>
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">DANH SÁCH BÁC SĨ</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> DANH SÁCH BÁC SĨ
                            </h1>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <div class="row" style="position: relative">
                                <div class="col-8" style="position: absolute; z-index: 2">
                                    <input class="form-control" id="search-text" type="text" placeholder="Nhập để tìm kiếm">
                                    <div id="btn-search" class="btn_search middle-text" >
                                        <i class="fa fa-search f-size20 color6676f2"></i>
                                    </div>
                                </div>
                                <div class="col-4" style="position: absolute; z-index:2; right: 0">
                                    <select class="form-control" id="specialities">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>

                            <br>
                            <?php
                            echo $input_hidden;
                            ?>

                            <div id="doctors-content" class="m-t35" style="width: 100%">

                            </div>

                            <ul id="doctors-pagination" class="pagination-sm"></ul>

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
            var patient_login='<?php echo $_SESSION['_id'];?>';
            var user_login='<?php echo $_SESSION['_id'];?>';
            var type_login='<?php echo $_SESSION['user_type_option_user_type'];?>';
            var user_type_option ='<?php echo $_SESSION["user_type_option_user_type"]; ?>'

            var count_session = <?php echo count($_SESSION); ?>;
            if(count_session ==0){
                login.prototype.get_option_set();
            }


        </script>

        <script src="<?= APP_URL; ?>/js/register_login/login.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/user/physician_list.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/modal/modal_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_relative.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_signup.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_credentials.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>
        <!--
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>
         <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
        -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>



        <script>
            var phy_list = new physician_list();
            $(function(){
                phy_list.init();
            });

           /* $(document).ready(function() {
                $("#myInput").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#myList li").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            });*/


        </script>
    </body>
</html>
