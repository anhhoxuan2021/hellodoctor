<?php
session_start();
require_once 'init.php';

$_title = 'THÔNG TIN BÁC SĨ - Xin chào bác sĩ';
$_active_nav = 'THÔNG TIN BÁC SĨ';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';
$_description = 'THÔNG TIN BÁC SĨ';

//if($_SESSION['user_type_option_user_type'] =='Patient'){
    //header("Location: dashboard.php");
//}

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
                    <?php include_once 'modal/modal_login.php'; ?>
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">THÔNG TIN BÁC SĨ</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> THÔNG TIN BÁC SĨ
                            </h1>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <div id="doctor-content">
                                <input type="hidden" id="count-sesion" value="<?=count($_SESSION)?>">
                                <input type="hidden" id="doctor">
                                <input type="hidden" id="patient-id" value="<?=$_SESSION['_id']?>">
                                <input type="hidden" id="guardian_user" value="<?=$_SESSION['guardian_user']?>">
                                <input type="hidden" id="FamilyName" name="FamilyName" class="form-control" value="<?=$_SESSION['family_name_text']?>">
                                <input type="hidden" id="middle_name"  value="<?=$_SESSION['middle_name_text']?>">
                                <input type="hidden" id="first_name"  value="<?=$_SESSION['first_name_text']?>" >
                                <div class="row">
                                    <div class="col-4 middle" id="image"></div>
                                    <div class="col-3">
                                        <div class="col-12">Họ và Tên</div>
                                        <div class="col-12 m-t5">Nơi công tác</div>
                                        <div class="col-12 m-t5">Bằng cấp</div>
                                        <div class="col-12 m-t5">Chuyên khoa</div>
                                        <div class="col-12 m-t5">Tên trường đại học</div>
                                        <div class="col-12 m-t5">Ngôn ngữ</div>
                                    </div>
                                    <div class="col-5">
                                        <div class="col-12" id="doctor-name"></div>
                                        <div class="col-12 m-t5" id="location"></div>
                                        <div class="col-12 m-t5" id="degree"></div>
                                        <div class="col-12 m-t5" id="speciality"></div>
                                        <div class="col-12 m-t5" id="university"></div>
                                        <div class="col-12 m-t5" id="Languges"></div>
                                        <div class="col-12 m-t5" id="description"></div>

                                        <div class="col-12 margin-top10">
                                            <button id="show-apt" type="button" class="btn btn-block btn-succ btn-lg">Tạo cuộc hẹn</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row border-b-solid-c111 m-t15 m_b15"></div>
                                <div class="row">
                                    <h1 class="subheader-title col-8">
                                        <i style="color: black" class="subheader-icon fas fa-calendar-check"></i> CỘNG SỰ
                                    </h1>
                                </div>
                                <div class="row m-t15">
                                    <div id="doctors-content" class="m-t35" style="width: 100%">>

                                    </div>

                                    <ul id="doctors-pagination" class="pagination-sm"></ul>
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

        <script src="<?= APP_URL; ?>/js/modal/modal_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_relative.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_signup.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>
        <!--
        <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js"></script>
         <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.min.js"></script>
        -->
        <script src="<?= APP_URL; ?>/js/register_login/login.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/user/physician_infomation.js" type="text/javascript"></script>
        <!--
        <script src="<?= APP_URL; ?>/js/user/physician_list.js" type="text/javascript"></script>
        -->
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>
        <script>
            var count_session = <?php echo count($_SESSION); ?>;
            var patient_login='<?php echo $_SESSION['_id'];?>';
            var user_login='<?php echo $_SESSION['_id'];?>';
            var type_login='<?php echo $_SESSION['user_type_option_user_type'];?>';
            var user_type_option ='<?php echo $_SESSION["user_type_option_user_type"]; ?>'

            $("#show-apt").unbind("click").bind("click",function(){
                if(count_session==0){
                    var lgin = new login();
                    $(function(){
                        lgin.init();
                    });
                    $('#login-modal').modal('show')
                }else{
                    $("#app-modal-lg-center #show_dependent_patient").remove();
                    $('#app-modal-lg-center').modal('show');
                    $('.app_buoc2').addClass('disabled')
                    $('.app_buoc3').addClass('disabled')
                    $('.app_buoc4').addClass('disabled')
                    $(".app_buoc1 ").removeClass('disabled')
                    $(".app_buoc1 ").click();
                    modal_appointment.prototype.reset_modal_appointment()
                }
            })

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
