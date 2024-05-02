<?php

require_once 'init.php';

$_title = 'Xin Chào Bác Sĩ';
$_active_nav = 'intel_analytics_dashboard';
$_head = '<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/miscellaneous/reactions/reactions.css">

<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/miscellaneous/fullcalendar/fullcalendar.bundle.css">
<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/miscellaneous/jqvmap/jqvmap.bundle.css">
<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/mutilStep.css">
<link rel="stylesheet" media="screen, print" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css">
';
session_start();
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
                            <li class="breadcrumb-item"><a href="home_page.php">Xin Chào Bác Sĩ</a></li>
                            <li class="breadcrumb-item">Trang Chủ</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class='icon fal fa-award'></i>  Chào mừng bạn đến với Tương lai của Chăm sóc Sức khỏe!
                            </h1>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div id="panel-1" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <div class="panel-content" style="padding: 5px; padding-top: 5px; padding-bottom: 0px; border: 1px; border-style: hidden;">
                                        <h2 style="font-size: 22px; text-align: center">
                                            Tham Khảo ý Kiến Bác Sĩ
                                        </h2>
                                    </div>
                                    <div class="panel-container show">
                                        <div class="panel-content p-0">
                                            <div class="row row-grid no-gutters">
                                                <a href="page_profile.php">
                                                    <img src="<?= ASSETS_URL ?>/img/home-img/home1.jpeg" class="" style="height: 176px;">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div id="panel-2" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <div class="panel-container show" style="background-color: rgb(39, 170, 225); height: 212.2px; padding: 32px 3px;">
                                        <div class="panel-content p-0">
                                            <div class="row no-gutters">
                                                <a href="page_profile.php" class="fs-xl mr-1" data-toggle="tooltip" data-original-title="Trang cá nhân" data-placement="top">
                                                        <img src="<?= ASSETS_URL ?>/img/demo/avatars/avatar-admin-lg.png" class="rounded-circle shadow-2 img-thumbnail fs-xl" alt="change img">
                                                </a>
                                                <h5 class="mb-0 fw-700 text-center mt-3" style="color: white;">
                                                         <?=$_SESSION['user_type_option_user_type'] ." ". $_SESSION['first_name_text']." ".$_SESSION['family_name_text']." ".$_SESSION['middle_name_text']; ?>
                                                        <small style="color: white !important;" class="text-muted mb-0 pb-3"><?=$_SESSION['address']; ?></small>
                                                        <button onclick="logout()" type="button" class="btn btn-warning pt-2">Thoát</button>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div id="panel-3" class="panel" data-panel-color="false">
                                    <a href="#" data-toggle="dropdown" title="Tạo Lịch Hẹn">
                                        <div class="panel-container show" style="background-color: rgb(245, 127, 63); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/1.PNG" style="height: 102px; width: 121px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Tạo lịch hẹn mới</div>
                                                
                                            </div>
                                        </div>
                                    </a>
                                    
                                    <div class="dropdown-menu" style="width: 1000px; margin-left: -205px;">
                                        <!-- MultiStep Form -->
                                        <div class="container-fluid" id="grad1">
                                            <div class="row justify-content-center mt-0">
                                                <div class="col-11 text-center p-0 mt-3 mb-2">
                                                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                                        
                                                        <div class="row">
                                                            <div class="col-md-12 mx-0">
                                                                <form id="msform">
                                                                    <!-- progressbar -->
                                                                    <ul id="progressbar">
                                                                        <li class="active" id="account"><strong>Bước 1</strong></li>
                                                                        <li id="personal"><strong>Bước 2</strong></li>
                                                                        <li id="payment"><strong>Bước 3</strong></li>
                                                                        <li id="confirm"><strong>Bước 4</strong></li>
                                                                    </ul> <!-- fieldsets -->
                                                                    <fieldset>
                                                                        <div class="form-card">
                                                                            <h2 class="fs-title">Bạn có đang bị những biểu hiện sau đây không?</h2>
                                                                            <div class="row">
                                                                                <div class="mr-5" style="height: 280px; width: 170px; background-color: rgb(191, 32, 32);">
                                                                                    <img class="pt-2" src="assets/img/home-img/heart.PNG" style="display: block; margin-left: auto; margin-right: auto; height: 88px; width: 96px;"></img>
                                                                                    <div class="pt-4" style="line-height: 1.5; text-align: center; color: white; font-size: 14px; font-weight: bold;">
                                                                                    <p>Đau ngực</br>
                                                                                        Hụt hơi</br>
                                                                                        Khó thở</br>
                                                                                        Chóng mặt hoặc</br>
                                                                                        nhẹ đầu</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="mr-5" style="height: 280px; width: 170px; background-color: rgb(35, 66, 194);">
                                                                                    <img class="pt-2" src="assets/img/home-img/car.PNG" style="display: block; margin-left: auto; margin-right: auto; height: 88px; width: 96px;"></img>
                                                                                    <div class="pt-4" style="line-height: 1.5; text-align: center; color: white; font-size: 14px; font-weight: bold;">
                                                                                    <p>Xương bị gãy</br>
                                                                                        Tai nạn ô tô / xe máy</br>
                                                                                        Tai nạn</br>
                                                                                        Nghẹt thở</br>
                                                                                        Nhức đầu hơn 24 giờ</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="mr-5" style="height: 280px; width: 170px; background-color: rgb(245, 218, 63);">
                                                                                    <img class="pt-2" src="assets/img/home-img/temple.PNG" style="display: block; margin-left: auto; margin-right: auto; height: 88px; width: 96px;"></img>
                                                                                    <div class="pt-4" style="line-height: 1.5; text-align: center; color: white; font-size: 14px; font-weight: bold;">
                                                                                    <p>Sốt cao hơn 40 C trong</br>
                                                                                        hơn 2 giờ</br>
                                                                                        Ho không kiểm soát</br>
                                                                                        Nôn</br>
                                                                                        Tiêu chảy trong hơn 2</br>
                                                                                        ngày</br>
                                                                                        Đang mang thai</p>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="" style="height: 280px; width: 170px; background-color: rgb(194, 63, 245);">
                                                                                    <img class="pt-2" src="assets/img/home-img/water.PNG" style="display: block; margin-left: auto; margin-right: auto; height: 88px; width: 96px;"></img>
                                                                                    <div class="pt-4" style="line-height: 1.5; text-align: center; color: white; font-size: 14px; font-weight: bold;">
                                                                                    <p>Chảy máu nghiêm trọng</br>
                                                                                        Máu trong nước tiểu</br>
                                                                                        Máu trong nhu động</br>
                                                                                        ruột</br>
                                                                                        Mất nước</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <input type="button" name="" class="next action-button" value="Có" />
                                                                        <input type="button" name="next" class="next action-button" value="Không" />
                                                                        
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <div class="form-card" style="height: 440px;">
                                                                        <div class="">
                                                                            <div class="row">
                                                                                <h2 class="fs-title">Xin vui lòng cung cấp cho chúng tôi một số thông tin sau đây</h2>
                                                                            </div>
                                                                            <div class="row mt-4">
                                                                                <div class="custom-control custom-radio mr-4">
                                                                                    <input type="radio" id="schedule" name="customRadio" class="custom-control-input">
                                                                                    <label class="custom-control-label" for="schedule">Đặt lịch hẹn cho bạn</label>
                                                                                </div>
                                                                                <div class="custom-control custom-radio">
                                                                                    <input type="radio" id="schedule_friends" name="customRadio" class="custom-control-input">
                                                                                    <label class="custom-control-label" for="schedule_friends">Đặt lịch hẹn cho Người thân</label>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <input type="text" id="full_name" class="form-control" playHolder="alo">
                                                                            </div>
                                                                            <div class="row">
                                                                                <p style="font-weight: bold; color: #2C3E50; font-size: 17px;">Hãy cho chúng tôi biết lí do khám của bạn</p>
                                                                            </div>
                                                                            <div class="row">
                                                                                <select class="list-dt" id="reason" name="expmonth" style="width: -webkit-fill-available;">
                                                                                                <option selected>Đau đầu</option>
                                                                                                <option>Đau Bụng</option>
                                                                                                <option>Đau dạ dày</option>
                                                                                                <option>Đau chân</option>
                                                                                                <option>Đau tay</option>
                                                                                                <option>Đau họng</option>
                                                                                                <option>Khám thai</option>
                                                                                                <option>Khác</option>
                                                                                </select>
                                                                            </div>
                                                                            <div class="row pt-3">
                                                                                <p style="font-weight: bold; color: #2C3E50; font-size: 17px;">
                                                                                    Mô tả
                                                                                </p>
                                                                            </div>
                                                                            <div class="row pt-2" style="width: -webkit-fill-available;">
                                                                                <textarea class="form-control" id="others_form_up" rows="5" cols="3" placeholder="Mô tả vấn đề của bạn ở đây..."></textarea>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
                                                                        <input type="button" name="next" class="next action-button" value="Next Step" />
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <div class="form-card">
                                                                            <h2 class="fs-title">Bệnh Sử</h2>
                                                                            <div class="row pt-2">
                                                                                <div class="col order-last">
                                                                                    <label style="color: black; font-weight: 500;" for="others_history">Những vấn đề khác, lưu ý</label>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 305px; position: absolute;" class="form-control" id="others_history" rows="5" cols="1" placeholder="Bạn có lưu ý nào khác không?"></textarea>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                            <input type="checkbox" class="custom-control-input" id="is_stomach">
                                                                                            <label style="color: black;" class="custom-control-label" for="is_stomach">Bạn có vấn đề về dạ dày?</label>
                                                                                    </div>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="stomach" rows="5" cols="1" placeholder="Vui lòng mô tả vấn đề dạ dày"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="is_surgeries">
                                                                                        <label style="color: black;" class="custom-control-label" for="is_surgeries">Bạn đã từng Phẫu thuật?</label>
                                                                                    </div>
                                                                                    <div class="pt-3 " style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="surgeries" rows="5" cols="1" placeholder="Vui lòng mô tả phẫu thuật trước đây"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div class="col order-first">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="is_smoke">
                                                                                        <label style="color: black;" class="custom-control-label" for="is_smoke">Bạn có hút thuốc không?</label>
                                                                                    </div>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="smoke" rows="5" cols="1" placeholder="Vui lòng mô tả thói quen hút thuốc"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </div>

                                                                            <div class="row pt-2" style="">
                                                                                <div class="col order-last">
                                                                                    
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                            <input type="checkbox" class="custom-control-input" id="is_diabetes">
                                                                                            <label style="color: black;" class="custom-control-label" for="is_diabetes">Bạn có Bệnh tiểu đường?</label>
                                                                                    </div>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="diabetes" rows="5" cols="1" placeholder="Vui lòng mô tả bệnh tiểu đường"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="is_consume_alcohol">
                                                                                        <label style="color: black;" class="custom-control-label" for="is_consume_alcohol">Bạn có uống Rượu?</label>
                                                                                    </div>
                                                                                    <div class="pt-3 " style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="consume_alcohol" rows="5" cols="1" placeholder="Vui lòng mô tả thói quen uống rượu bia"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div class="col order-first">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="is_heart_issues">
                                                                                        <label style="color: black;" class="custom-control-label" for="is_heart_issues">Bạn có vấn đề về Tim?</label>
                                                                                    </div>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="heart_issues" rows="5" cols="1" placeholder="Vui lòng mô tả vấn đề tim"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </div>

                                                                            <div class="row pt-2" style="">
                                                                                <div class="col order-last">
                                                                                    <button type="submit" style="font-size: 16px; padding: 9px 10px; width: 122px; margin-top: 60px; margin-left: 44px;" class="btn btn-primary btn-pills">Lưu</button>
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                            <input type="checkbox" class="custom-control-input" id="is_kidney_issues">
                                                                                            <label style="color: black;" class="custom-control-label" for="is_kidney_issues">Bạn có vấn đề về Thận?</label>
                                                                                    </div>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="kidney_issues" rows="5" cols="1" placeholder="Vui lòng mô tả vấn đề thận"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div class="col">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="is_lung_issues">
                                                                                        <label style="color: black;" class="custom-control-label" for="is_lung_issues">Bạn có vấn đề về Phổi?</label>
                                                                                    </div>
                                                                                    <div class="pt-3 " style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="lung_issues" rows="5" cols="1" placeholder="Vui lòng mô tả vấn đề phổi"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                                <div class="col order-first">
                                                                                    <div class="custom-control custom-checkbox">
                                                                                        <input type="checkbox" class="custom-control-input" id="is_eye_issues">
                                                                                        <label style="color: black;" class="custom-control-label" for="is_eye_issues">Bạn có vấn đề về Mắt?</label>
                                                                                    </div>
                                                                                    <div class="pt-3" style="width: 165px; float: left;">
                                                                                            <textarea style="height: 75px" class="form-control" id="eye_issues" rows="5" cols="1" placeholder="Vui lòng mô tả vấn đề mắt"></textarea>
                                                                                    </div>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div> 
                                                                        <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> 
                                                                        <input type="button" name="make_payment" class="next action-button" value="Confirm" />
                                                                    </fieldset>
                                                                    <fieldset>
                                                                        <div class="form-card">
                                                                            <div class="row">
                                                                                <div class="col order-first">
                                                                                <h2 class="fs-title text-left">Bệnh Sử</h2>
                                                                                </div>
                                                                                <div class="col order-last">
                                                                                <h2 class="fs-title text-left">Hướng Dẫn</h2>
                                                                                </div><br><br>
                                                                            </div>
                                                                            <div class="">
                                                                                <div class="row">
                                                                                    <div class="col order-first panel pt-2 pl-2" style="margin-right: 10px;">
                                                                                        <h3 style="font-weight: bold; color: #2C3E50;">APT-2021356</h3>
                                                                                        <h4 style="font-weight: bold; color: #2C3E50;">Your Name - giới tính</h4></br>
                                                                                        <div class="">
                                                                                            <p style="font-weight: bold; color: #2C3E50; font-size: 17px;">Hãy cho chúng tôi biết lí do khám của bạn</p>
                                                                                        </div>
                                                                                        <div class="">
                                                                                            <select class="list-dt" id="reason" name="expmonth" style="width: -webkit-fill-available;">
                                                                                                            <option selected>Đau đầu</option>
                                                                                                            <option>Đau Bụng</option>
                                                                                                            <option>Đau dạ dày</option>
                                                                                                            <option>Đau chân</option>
                                                                                                            <option>Đau tay</option>
                                                                                                            <option>Đau họng</option>
                                                                                                            <option>Khám thai</option>
                                                                                                            <option>Khác</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div class="pt-3">
                                                                                            <p style="font-weight: bold; color: #2C3E50; font-size: 17px;">
                                                                                                Mô tả
                                                                                            </p>
                                                                                        </div>
                                                                                        <div class="pt-2" style="width: -webkit-fill-available;">
                                                                                            <textarea class="form-control" id="others_form_up" rows="5" cols="3" placeholder="Mô tả vấn đề của bạn ở đây..."></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col order-last panel pt-2 pl-2">
                                                                                        <p id="check" style="font-weight: bold; color: #2C3E50; font-size: 17px;">  Bạn có thể nhấp vào icon sau để có thể trò chuyện, và để được tư vấn thêm ngay bây giờ.</p>
                                                                                        <button id="chatx" style="color: skyblue; font-size: 100px; text-align: center; border: none; background: none;"></button>
                                                                                        <p id="check" style="font-weight: bold; color: #2C3E50; font-size: 17px;">  Hoặc là bạn nhấp "Xem Lịch hẹn", bạn sẽ được chuyển tới trang Chi tiết Cuộc hẹn.</p>
                                                                                        <div class="row" style="text-align: center; display: block;">
                                                                                            <button type="button" href="/home_page.php" class="action-button-previous" value="Đóng">Đóng</button>
                                                                                            <button type="button" href="/appointment.php" class="action-button">Xem Lịch hẹn</button>
                                                                                        </div>
                                                                                    </div><br><br>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <!-- <div class="dropdown-header bg-trans-gradient d-flex justify-content-center align-items-center rounded-top">
                                            <h4 class="m-0 text-center color-white">
                                                Tạo lịch hẹn mới
                                            </h4>
                                        </div>
                                        <div class="h-100">
                                            <ul class="app-list">
                                                <li>
                                                    <a href="#" class="app-list-item hover-white">
                                                        <span class="icon-stack">
                                                            <i class="base-2 icon-stack-3x color-primary-600"></i>
                                                            <i class="base-3 icon-stack-2x color-primary-700"></i>
                                                            <i class="ni ni-settings icon-stack-1x text-white fs-lg"></i>
                                                        </span>
                                                        <span class="app-list-name">
                                                            Services
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" class="app-list-item hover-white">
                                                        <span class="icon-stack">
                                                            <i class="base-2 icon-stack-3x color-primary-400"></i>
                                                            <i class="base-10 text-white icon-stack-1x"></i>
                                                            <i class="ni md-profile color-primary-800 icon-stack-2x"></i>
                                                        </span>
                                                        <span class="app-list-name">
                                                            Account
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div> -->
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div id="panel-4" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="">
                                        <div class="panel-container show" style="border-style: solid; border-color: rgb(191, 32, 32); border-width: 1px; background-color: rgb(255, 255, 255); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/2.png" style="height: 102px; width: 121px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(191, 32, 32); text-align: center; line-height: 1; padding-top: 20px;">
                                                <div class="content">Cấp Cứu</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div id="panel-5" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_profile.php">
                                        <div class="panel-container show" style=" background-color: rgb(58, 203, 119); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/3.PNG" style="height: 102px; width: 130px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Theo dõi Sức khỏe</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div id="panel-6" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_doctor.php">
                                        <div class="panel-container show" style=" background-color: rgb(35, 66, 194); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/4.PNG" style="height: 115px; width: 125px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Tìm Bác Sĩ</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div id="panel-7" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_hospital.php">
                                        <div class="panel-container show" style=" background-color: rgb(245, 218, 63); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/5.PNG" style="height: 115px; width: 125px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Tìm Bệnh viện</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div id="panel-8" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_laboratory.php">
                                        <div class="panel-container show" style=" background-color: rgb(194, 63, 245); height: 212.2px; padding: 46px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/6.PNG" style="height: 102px; width: 130px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Tìm Phòng xét nghiệm</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div id="panel-9" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_pharmacy.php">
                                        <div class="panel-container show" style=" background-color: rgb(245, 127, 63); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/7.PNG" style="height: 115px; width: 125px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Tìm Nhà thuốc</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div id="panel-10" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_questions.php">
                                        <div class="panel-container show" style=" background-color: rgb(35, 66, 194); height: 212.2px; padding: 32px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/8.PNG" style="height: 115px; width: 125px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Các câu hỏi thường gặp</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div id="panel-11" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="page_login.php">
                                        <div class="panel-container show" style=" background-color: rgb(245, 218, 63); height: 212.2px; padding: 46px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/9.PNG" style="height: 102px; width: 130px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Trở thành Nhà cung cấp</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div id="panel-12" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="">
                                        <div class="panel-container show" style=" background-color: rgb(58, 203, 119); height: 212.2px; padding: 46px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/10.PNG" style="height: 102px; width: 130px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Hình ảnh</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div id="panel-13" class="panel" data-panel-color="false" data-i18n="drpdwn.lockpanel">
                                    <a href="">
                                        <div class="panel-container show" style=" background-color: rgb(39, 170, 225); height: 212.2px; padding: 46px 3px;">
                                            <div class="panel-content p-0">
                                                <img src="assets/img/home-img/11.PNG" style="height: 102px; width: 130px; display: block; margin-left: auto; margin-right: auto;"></img>
                                            </div>
                                            <div style="font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; padding-top: 20px;">
                                                <div class="content">Blogs</div>
                                            </div>
                                        </div>
                                    </a>
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
        <script type="text/javascript">
            /* Activate smart panels */
            $('#js-page-content').smartPanel();

        </script>
        <!-- The order of scripts is irrelevant. Please check out the plugin pages for more details about these plugins below: -->
        <script src="<?= ASSETS_URL ?>/js/dependency/moment/moment.js"></script>
        <script src="<?= ASSETS_URL ?>/js/miscellaneous/fullcalendar/fullcalendar.bundle.js"></script>
        <script src="<?= ASSETS_URL ?>/js/statistics/sparkline/sparkline.bundle.js"></script>
        <script src="<?= ASSETS_URL ?>/js/statistics/easypiechart/easypiechart.bundle.js"></script>
        <script src="<?= ASSETS_URL ?>/js/statistics/flot/flot.bundle.js"></script>
        <script src="<?= ASSETS_URL ?>/js/miscellaneous/jqvmap/jqvmap.bundle.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
        <script>
             function logout(){
                location.assign("http://localhost/smartadmin1/public/page_login.php");
            }

            $(document).ready(function(){
                var current_fs, next_fs, previous_fs; //fieldsets
                var opacity;

                $(".next").click(function(){

                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

                //Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                //show the next fieldset
                next_fs.show();
                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                'display': 'none',
                'position': 'relative'
                });
                next_fs.css({'opacity': opacity});
                },
                duration: 600
                });
                });

                $(".previous").click(function(){

                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();

                //Remove class active
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                //show the previous fieldset
                previous_fs.show();

                //hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                'display': 'none',
                'position': 'relative'
                });
                previous_fs.css({'opacity': opacity});
                },
                duration: 600
                });
                });

                $('.radio-group .radio').click(function(){
                $(this).parent().find('.radio').removeClass('selected');
                $(this).addClass('selected');
                });

                $(".submit").click(function(){
                return false;
                })

                });

        </script>
    </body>
</html>
