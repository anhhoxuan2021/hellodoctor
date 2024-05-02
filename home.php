<?php
session_start();
require_once 'init.php';

$_title = 'Xin Chao  Bac si';
$_head = '<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">';

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
    <body>
        <div class="page-wrapper auth" >
        <?php include_once 'modal/modal_login.php'; ?>
        <?php include_once 'modal/modal_appointment.php'; ?>
        <?php include_once 'modal/modal_success.php'; ?>

            <div class="page-inner bg-brand-gradient">
            <input type="hidden" id="doctor">
            <input type="hidden" id="patient-id" value="<?=$_SESSION['_id']?>">
            <input type="hidden" id="guardian_user" value="<?=$_SESSION['guardian_user']?>">
            <input type="hidden" id="FamilyName" name="FamilyName" class="form-control" value="<?=$_SESSION['family_name_text']?>">
            <input type="hidden" id="middle_name"  value="<?=$_SESSION['middle_name_text']?>">
            <input type="hidden" id="first_name"  value="<?=$_SESSION['first_name_text']?>" >

                <div class="page-content-wrapper1 bg-transparent1 index-content m-0" style="background: #fff!important;">
                <!--header-->
                <div class="bubble-element FloatingGroup floating-group" style="position: fixed; z-index: 1509; width: 1200px; height: 70px; top: 0px; left: 50%; margin-left: -600px; background-color: rgb(255, 255, 255); border-radius: 0px; box-sizing: border-box;">
                    <div class="bubble-r-line" style="margin-top: 0px; height: 70px;">
                        <div class="bubble-r-box" style="height: 70px; left: 0px; width: 1200px;">
                            <div class="bubble-element CustomElement" style="position: absolute; box-sizing: border-box; z-index: 2; height: 70px; width: 1200px; left: 0px; top: 0px; background-color: rgb(255, 255, 255); border-radius: 0px;">
                                <div class="bubble-r-line" style="margin-top: 0px; height: 87px;">
                                    <div class="bubble-r-box" style="height: 87px; left: 0px; width: 1200px;">
                                        <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 2; height: 70px; width: 1200px; left: 0px; top: 0px; border-radius: 0px;">
                                            <div class="bubble-r-line" style="margin-top: 0px; height: 70px;">
                                                <div class="bubble-r-box" style="height: 70px; left: 0px; width: 1200px;">
                                                    <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 0; height: 70px; width: 1200px; left: 0px; top: 0px; background-color: rgb(255, 255, 255); border-radius: 0px;">
                                                        <div class="bubble-r-line" style="margin-top: 0px; height: 70px;">
                                                            <div class="bubble-r-box" style="height: 70px; left: 30px; width: 169px;">
                                                                <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 4; height: 70px; width: 169px; left: 0px; top: 0px; border-radius: 0px;">
                                                                    <div class="bubble-r-line" style="margin-top: 11px; height: 55px;">
                                                                        <div class="bubble-r-box" style="height: 46px; left: 0px; width: 46px;">
                                                                            <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 2; height: 46px; width: 46px; left: 0px; top: 0px; border-radius: 0px;">
                                                                                <div class="bubble-r-line" style="margin-top: 0px; height: 46px;">
                                                                                    <div class="bubble-r-box" style="height: 46px; left: 0px; width: 46px;">
                                                                                        <div class="bubble-element Image" style="position: absolute; box-sizing: border-box; z-index: 2; height: 46px; width: 42px; left: 0px; top: 10px; border-radius: 0px;">
                                                                                            <img alt="" src="https://dd7tel2830j4w.cloudfront.net/f1594010975281x878303450150892400/XCBS_Lt%20Blue.svg" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">
                                                                                        </div>
                                                                                        <a class="bubble-element Link clickable-element" target="_self" href="https://xinchaobacsi.vn/version-domain-deploy/" style="position: absolute; box-sizing: border-box; z-index: 3; height: 46px; width: 46px; left: 0px; top: 0px; white-space: pre-wrap; text-decoration: none!important; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: Lato; font-size: 14px; color: rgb(64, 131, 169); line-height: 1; border-radius: 0px; font-weight: normal; font-style: normal; text-align: left;">
                                                                                            <div class="content"></div>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bubble-r-box" style="height: 55px; left: 46px; width: 119px;">
                                                                            <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 3; height: 20px; width: 119px; left: 0px; top: 14px; border-radius: 0px;">
                                                                                <div class="bubble-r-line" style="margin-top: 0px; height: 20px;">
                                                                                    <div class="bubble-r-box" style="height: 20px; left: 0px; width: 119px;">
                                                                                        <a class="bubble-element Link clickable-element" target="_self" href="http://dev.at1ts.com" style="position: absolute; box-sizing: border-box; z-index: 0; height: 20px; width: 119px; left: 0px; top: -34px; white-space: pre-wrap; text-decoration: none!important; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: Montserrat; font-size: 14px; font-weight: 600; color: rgb(39, 170, 225); line-height: 1.4; border-radius: 0px;">
                                                                                            <div class="content">Xin Chào Bác Sĩ</div>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="bubble-element 1579142663191x584695513456836600-AAC" style="display: none;"></div>
                                                                            <div class="bubble-element 1579142663191x584695513456836600-AAC" style="display: none;"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="bubble-r-box" style="height: 70px; left: 227px; width: 680px;">
                                                                <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 24; height: 70px; width: 680px; left: 0px; top: 0px; border-radius: 0px;">
                                                                    <div class="bubble-r-line" style="margin-top: 0px; height: 70px;">
                                                                        <div class="bubble-r-box" style="height: 70px; left: 0px; width: 211px;">
                                                                            <a class="bubble-element Link clickable-element" target="_self" href="covid.php" style="position: absolute; box-sizing: border-box; z-index: 8; height: 70px; width: 95px; left: 0px; top: 0px; white-space: pre-wrap; text-decoration: none!important; word-break: break-word; user-select: none; cursor: pointer; pointer-events: auto; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; display: none;">
                                                                                <div class="content">COVID</div>
                                                                            </a>
                                                                            <a class="bubble-element Link clickable-element" target="_self" href="dashboard.php" style="position: absolute; box-sizing: border-box; z-index: 5; height: 70px; width: 130px; left: 81px; top: 0px; white-space: pre-wrap; text-decoration: none!important; cursor: pointer; pointer-events: auto; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; display: none; word-break: break-word; user-select: none;"></a>
                                                                        </div>
                                                                        <div class="bubble-r-box" style="height: 70px; left: 213px; width: 120px;">
                                                                            <div class="bubble-element Text clickable-element" style="position: absolute; box-sizing: border-box; z-index: 4; height: 70px; width: 120px; left: 0px; top: 0px; overflow: visible; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; cursor: pointer; display: none; padding-bottom: 0px;" tabindex="5"></div>
                                                                        </div><div class="bubble-r-box" style="height: 70px; left: 335px; width: 120px;">
                                                                            <a class="bubble-element Link clickable-element" target="_self" href="invoice_list.php" style="position: absolute; box-sizing: border-box; z-index: 3; height: 70px; width: 120px; left: 0px; top: 0px; white-space: pre-wrap; text-decoration: none!important; cursor: pointer; pointer-events: auto; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; display: none; word-break: break-word; user-select: none;"></a>
                                                                        </div>
                                                                        <div class="bubble-r-box" style="height: 70px; left: 457px; width: 112px;">
                                                                            <a class="bubble-element Link clickable-element" target="_self" href="physician_list.php" style="position: absolute; box-sizing: border-box; z-index: 6; height: 70px; width: 112px; left: 0px; top: -34px; white-space: pre-wrap; text-decoration: none!important; cursor: pointer; pointer-events: auto; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; word-break: break-word; user-select: none;">
                                                                                <div class="content">Bác sĩ</div>
                                                                            </a>
                                                                        </div>
                                                                        <div class="bubble-r-box" style="height: 70px; left: 571px; width: 106px;">
                                                                            <a class="bubble-element Link clickable-element" target="_self" href="patient_list.php" style="position: absolute; box-sizing: border-box; z-index: 2; height: 70px; width: 106px; left: 0px; top: 0px; white-space: pre-wrap; text-decoration: none!important; cursor: pointer; pointer-events: auto; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; display: none; word-break: break-word; user-select: none;"></a>
                                                                            <a class="bubble-element Link clickable-element" target="_self" href="facility_list.php" style="position: absolute; box-sizing: border-box; z-index: 7; height: 70px; width: 106px; left: 0px; top: -34px; white-space: pre-wrap; text-decoration: none!important; cursor: pointer; pointer-events: auto; font-family: Arial; font-size: 14px; color: rgba(51, 51, 51, 0.93); text-align: center; line-height: 1.2; padding-top: 26px; border-radius: 0px; transition: color 200ms ease 0s; word-break: break-word; user-select: none;">
                                                                                <div class="content">Bệnh viện</div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="bubble-r-box" style="height: 70px; left: 932px; width: 107px;">
                                                                <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 30; height: 70px; width: 107px; left: 0px; top: 0px; background-color: rgb(255, 255, 255); border-radius: 6px;">
                                                                    <div class="bubble-r-line" style="margin-top: 22px; height: 47px;">
                                                                        <div class="bubble-r-box" style="height: 24px; left: 0px; width: 24px;">
                                                                            <div class="bubble-element Image clickable-element" tabindex="3" style="position: absolute; box-sizing: border-box; z-index: 27; height: 24px; width: 24px; left: 0px; top: 20px; border-radius: 0px; cursor: pointer;">
                                                                                <img alt="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589357818390x385258586465496700%2FVietnam-icon.png?w=32&amp;h=32&amp;auto=compress&amp;fit=crop&amp;dpr=1.25" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">
                                                                            </div>
                                                                        </div>
                                                                        <div class="bubble-r-box" style="height: 47px; left: 26px; width: 48px;">
                                                                            <div class="bubble-element Image clickable-element" tabindex="4" style="position: absolute; box-sizing: border-box; z-index: 26; height: 24px; width: 24px; left: 24px; top: 20px; border-radius: 0px; cursor: pointer;">
                                                                                <img alt="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589357909874x233987955320237300%2FUnited-Kingdom-icon.png?w=32&amp;h=32&amp;auto=compress&amp;fit=crop&amp;dpr=1.25" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">
                                                                            </div>
                                                                            <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 28; height: 43px; width: 29px; left: 0px; top: 25px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 12px; color: rgb(0, 0, 0); line-height: 1.5; border-radius: 0px;">
                                                                                <div class="content">VN</div></div></div><div class="bubble-r-box" style="height: 41px; left: 78px; width: 29px;">
                                                                            <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 29; height: 37px; width: 29px; left: 0px; top: 25px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 12px; color: rgb(0, 0, 0); line-height: 1.5; border-radius: 0px;">
                                                                                <div class="content">ENG</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="bubble-r-box" style="height: 70px; left: 1085px; width: 97px;">
                                                                <div class="bubble-element Group" style="position: absolute; box-sizing: border-box; z-index: 4; height: 70px; width: 97px; left: 0px; top: 0px; border-radius: 0px;">
                                                                    <div class="bubble-r-line" style="margin-top: 0px; height: 70px;">
                                                                        <div class="bubble-r-box" style="height: 70px; left: 0px; width: 97px;">
                                                                            <div class="bubble-element Text clickable-element login-modal-show" tabindex="1" style="position: absolute; box-sizing: border-box; z-index: 0; height: 70px; width: 88px; left: 0px; top: 0px; overflow: visible; font-family: Poppins; font-size: 14px; font-weight: 600; color: rgb(0, 0, 0); text-align: right; line-height: 1; padding-top: 26px; border-radius: 0px; cursor: pointer; padding-bottom: 0px;">
                                                                                <div class="content">Đăng nhập</div>
                                                                            </div>
                                                                            <div class="bubble-element Text clickable-element" tabindex="2" style="display: none;"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="bubble-element jpanelmenu-SlidebarMenu fa-reorder" style="position: absolute; box-sizing: border-box; z-index: 21; height: 35px; width: 38px; left: 52px; top: 17px; padding: 0px; text-align: center; font-family: FontAwesome; color: rgb(0, 0, 0); font-size: 35px; cursor: pointer; border-radius: 0px; display: none;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end header-->
                    <div class="outer">
                        <div class="row" style="width: 1200px!important; height: 176px!important;position: relative">
                            <div class="bubble-element Group clickable-element" style="width: 1200px; left: 0px; position: absolute; box-sizing: border-box; z-index: 17; height: 176px; top: 0px; background-color: rgba(255, 255, 255, 0); background-repeat: no-repeat; background-position: center center; background-size: cover; border-radius: 0px; cursor: pointer; background-image: url(&quot;https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589269352415x484429314723244540%2Fpexels-photo-3758759.jpeg?w=1536&amp;h=225&amp;auto=compress&amp;fit=crop&amp;dpr=1.25&quot;);" tabindex="23"><div class="bubble-r-line" style="margin-top: 9px; height: 30px;"><div class="bubble-r-box" style="height: 30px; left: 7px; width: 1145px;"><div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 2; height: 30px; width: 1145px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;"><div class="content">Tham khảo Ý kiến Bác sĩ</div></div></div></div><div class="bubble-r-line" style="margin-top: 7px; height: 30px;"><div class="bubble-r-box" style="height: 30px; left: 910px; width: 55px;"><div class="bubble-element 1558278792469x166115970149515260-ABC" style="position: absolute; box-sizing: border-box; z-index: 3; height: 30px; width: 55px; left: 0px; top: 0px;"></div></div></div></div>
                        </div>

                    </div>
                    <div class="row h176">
                        <div class="col-3">
                            <div  class="register" tabindex="7" style="position: absolute; box-sizing: border-box; z-index: 19; height: 85px; width: 100%; left: 0px; top: 0px; background-color: rgb(245, 218, 63); border-radius: 0px; cursor: pointer;">
                                <div class="" style="margin-top: 30px; height: 25px;">
                                    <div class="" style="height: 25px; left: 0px; width: 300px; position: relative">
                                        <div class="Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 25px; width: 300px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; line-height: 1; border-radius: 0px;">
                                            <div class="content">Đăng ký</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="login-modal-show" tabindex="8" style="position: absolute; box-sizing: border-box; z-index: 19; height: 85px; width: 100%; left: 0px; top: 91px; background-color: rgb(39, 170, 225); border-radius: 0px; cursor: pointer;">
                                <div  style="margin-top: 36px; height: 25px;">
                                    <div style="height: 25px; left: 0px; width: 300px;position: relative">
                                        <div class=" Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 25px; width: 300px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; line-height: 1; border-radius: 0px;">
                                            <div class="content">Đăng nhập</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="show-apt" tabindex="9" style="position: absolute; box-sizing: border-box; z-index: 20; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(245, 127, 63); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 20px; height: 102px;">
                                    <div class="bubble-r-box" style="height: 102px; left: 162px; width: 121px;">
                                        <button class="fa fa-calendar-check inner-element bubble-element clickable-element" tabindex="6" style="position: absolute; box-sizing: border-box; z-index: 6; height: 102px; width: 121px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: pointer; color: rgb(255, 255, 255); font-size: 102px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 11px; height: 33px;position: relative">
                                    <div class="bubble-r-box" style="height: 33px; left: 4px; width: 271px;">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 5; height: 33px; width: 271px; left: 0px; top: 0px; overflow: visible; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px; padding-bottom: 0px;">
                                            <div class="content">Tạo lịch hẹn mới</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="show-apt" tabindex="10" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(255, 255, 255); border-style: solid; border-width: 1px; border-color: rgb(191, 32, 32); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 19px; height: 102px;">
                                    <div class="bubble-r-box" style="height: 102px; left: 166px; width: 100px;">
                                        <div class="bubble-element Image" style="position: absolute; box-sizing: border-box; z-index: 2; height: 102px; width: 100px; left: 0px; top: 15px; border-radius: 0px;">
                                            <img alt="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1588305104938x577886523354257400%2FPIXNIO-376250-927x900.png?w=128&amp;h=131&amp;auto=compress&amp;fit=crop&amp;dpr=1.25" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 9px; height: 44px;position: relative">
                                    <div class="bubble-r-box" style="height: 44px; left: 6px; width: 260px;">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 44px; width: 260px; left: 0px; top: 0px; overflow: visible; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(191, 32, 32); text-align: right; line-height: 1; border-radius: 0px; padding-bottom: 0px;">
                                            <div class="content">Cấp Cứu</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="vital-show" tabindex="11" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(58, 203, 119); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line"   style="margin-top: 20px; height: 102px;">
                                    <div class="bubble-r-box"  style="height: 102px; left: 147px; width: 128px;">
                                        <button class="fa fa-heartbeat inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 6; height: 102px; width: 128px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 102px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div style="margin-top: 12px; height: 37px;position: relative">
                                    <div  style="height: 37px; left: 1px; width: 274px;">
                                        <div class="Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 37px; width: 274px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div >Theo dõi Sức khỏe</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end row-->
                    <div class="row m-t5 h176">
                        <div class="col-4">
                            <div id="find-doctor" tabindex="12" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(35, 66, 194); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 13px; height: 116px;">
                                    <div class="bubble-r-box" style="height: 116px; left: 249px; width: 146px;">
                                        <button class="fa fa-user-md inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 5; height: 116px; width: 146px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 116px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div style="margin-top: 8px; height: 39px;">
                                    <div  style="height: 39px; left: 0px; width: 370px; position: relative">
                                        <div class="Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 39px; width: 370px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div>Tìm Bác Sĩ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div id="facility-list" tabindex="13" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 395px; left: 0px; top: 0px; background-color: rgb(245, 218, 63); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 13px; height: 116px;">
                                    <div class="bubble-r-box" style="height: 116px; left: 249px; width: 146px;">
                                        <button class="fa fa-hospital inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 6; height: 116px; width: 146px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 116px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 8px; height: 39px;">
                                    <div class="bubble-r-box" style="height: 39px; left: 1px; width: 367px;position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 39px; width: 367px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div class="content">Tìm Bệnh viện</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div id="find-lab" tabindex="14" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(194, 63, 245); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 13px; height: 116px;">
                                    <div class="bubble-r-box" style="height: 116px; left: 242px; width: 146px;">
                                        <button class="fa fa-tint inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 7; height: 116px; width: 146px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 116px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 6px; height: 41px;">
                                    <div class="bubble-r-box" style="height: 41px; left: 0px; width: 378px; position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 41px; width: 378px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div class="content">Tìm Phòng xét nghiệm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end row-->
                    <div class="row m-t5 h176">
                        <div class="col-4">
                            <div id="find-pharmacy" tabindex="15" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(245, 127, 63); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 15px; height: 106px;">
                                    <div class="bubble-r-box" style="height: 106px; left: 266px; width: 106px;">
                                        <div class="bubble-element Image" style="position: absolute; box-sizing: border-box; z-index: 4; height: 106px; width: 106px; left: 0px; top: 15px; border-radius: 0px;">
                                            <img alt="" src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1589273646936x597892052217730700%2Fclipart2066434.png?w=128&amp;h=128&amp;auto=compress&amp;fit=crop&amp;dpr=1.25" style="display: block; margin: 0px; width: 100%; height: 100%; border-radius: 0px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 18px; height: 37px;">
                                    <div class="bubble-r-box" style="height: 37px; left: 0px; width: 370px; position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 37px; width: 370px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div class="content">Tìm Nhà thuốc</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div id="faq" tabindex="16" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(35, 66, 194); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 16px; height: 101px;">
                                    <div class="bubble-r-box" style="height: 101px; left: 267px; width: 128px;">
                                        <button class="fa fa-question-circle inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 8; height: 101px; width: 128px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 101px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 20px; height: 39px;">
                                    <div class="bubble-r-box" style="height: 39px; left: 53px; width: 317px;position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 39px; width: 317px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div class="content">Các câu hỏi thường gặp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div tabindex="17" style="position: absolute; box-sizing: border-box; z-index: 19; height: 176px; width: 100%; left: 0px; top: 0px; background-color: rgb(245, 218, 63); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 15px; height: 102px;">
                                    <div class="bubble-r-box" style="height: 102px; left: 267px; width: 128px;">
                                        <button class="fa fa-pen-square inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 7; height: 102px; width: 128px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 102px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 20px; height: 39px;">
                                    <div class="bubble-r-box" style="height: 39px; left: 0px; width: 378px; position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 39px; width: 378px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: right; line-height: 1; border-radius: 0px;">
                                            <div class="content">Trở thành Nhà cung cấp</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end row-->
                    <div class="row m-t5 h176">
                        <div class="col-4">
                            <div tabindex="18" style="position: absolute; box-sizing: border-box; z-index: 23; height: 176px; width:100%; left: 0px; top: 0px; background-color: rgb(58, 203, 119); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 27px; height: 89px;">
                                    <div class="bubble-r-box" style="height: 89px; left: 269px; width: 103px;">
                                        <button class="fa fa-image inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 8; height: 89px; width: 103px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 89px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 14px; height: 39px;">
                                    <div class="bubble-r-box" style="height: 39px; left: 243px; width: 151px;position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 39px; width: 151px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; line-height: 1; border-radius: 0px;">
                                            <div class="content">Hình ảnh</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-8">
                            <div tabindex="19" style="position: absolute; box-sizing: border-box; z-index: 23; height: 176px; width:100%; left: 0px; top: 0px; background-color: rgb(39, 170, 225); border-radius: 0px; cursor: pointer;">
                                <div class="bubble-r-line" style="margin-top: 20px; height: 92px;">
                                    <div class="bubble-r-box" style="height: 92px; left: 350px; width: 108px;">
                                        <button class="fa fa-book inner-element bubble-element" style="position: absolute; box-sizing: border-box; z-index: 8; height: 92px; width: 108px; left: 0px; top: 15px; padding: 0px; text-align: center; background: none; border: none; cursor: inherit; color: rgb(255, 255, 255); font-size: 92px; border-radius: 4px;"></button>
                                    </div>
                                </div>
                                <div class="bubble-r-line" style="margin-top: 18px; height: 39px;">
                                    <div class="bubble-r-box" style="height: 39px; left: 294px; width: 207px;position: relative">
                                        <div class="bubble-element Text" style="position: absolute; box-sizing: border-box; z-index: 3; height: 39px; width: 207px; left: 0px; top: 0px; overflow: visible; padding-bottom: 0px; font-family: Arial; font-size: 18px; font-weight: bold; color: rgb(255, 255, 255); text-align: center; line-height: 1; border-radius: 0px;">
                                            <div class="content">Blogs</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!--end row-->

                    <!-- END Page Content -->
                    <?php include_once APP_PATH.'/includes/footer.php'; ?>
                </div>
            </div>
        </div>

        <!-- BEGIN Colors -->
        <!-- BEGIN Color profile -->
        <!-- this area is hidden and will not be seen on screens or screen readers -->
        <!-- we use this only for CSS color refernce for JS stuff -->
        <p id="js-color-profile" class="d-none">
            <span class="color-primary-50"></span>
            <span class="color-primary-100"></span>
            <span class="color-primary-200"></span>
            <span class="color-primary-300"></span>
            <span class="color-primary-400"></span>
            <span class="color-primary-500"></span>
            <span class="color-primary-600"></span>
            <span class="color-primary-700"></span>
            <span class="color-primary-800"></span>
            <span class="color-primary-900"></span>
            <span class="color-info-50"></span>
            <span class="color-info-100"></span>
            <span class="color-info-200"></span>
            <span class="color-info-300"></span>
            <span class="color-info-400"></span>
            <span class="color-info-500"></span>
            <span class="color-info-600"></span>
            <span class="color-info-700"></span>
            <span class="color-info-800"></span>
            <span class="color-info-900"></span>
            <span class="color-danger-50"></span>
            <span class="color-danger-100"></span>
            <span class="color-danger-200"></span>
            <span class="color-danger-300"></span>
            <span class="color-danger-400"></span>
            <span class="color-danger-500"></span>
            <span class="color-danger-600"></span>
            <span class="color-danger-700"></span>
            <span class="color-danger-800"></span>
            <span class="color-danger-900"></span>
            <span class="color-warning-50"></span>
            <span class="color-warning-100"></span>
            <span class="color-warning-200"></span>
            <span class="color-warning-300"></span>
            <span class="color-warning-400"></span>
            <span class="color-warning-500"></span>
            <span class="color-warning-600"></span>
            <span class="color-warning-700"></span>
            <span class="color-warning-800"></span>
            <span class="color-warning-900"></span>
            <span class="color-success-50"></span>
            <span class="color-success-100"></span>
            <span class="color-success-200"></span>
            <span class="color-success-300"></span>
            <span class="color-success-400"></span>
            <span class="color-success-500"></span>
            <span class="color-success-600"></span>
            <span class="color-success-700"></span>
            <span class="color-success-800"></span>
            <span class="color-success-900"></span>
            <span class="color-fusion-50"></span>
            <span class="color-fusion-100"></span>
            <span class="color-fusion-200"></span>
            <span class="color-fusion-300"></span>
            <span class="color-fusion-400"></span>
            <span class="color-fusion-500"></span>
            <span class="color-fusion-600"></span>
            <span class="color-fusion-700"></span>
            <span class="color-fusion-800"></span>
            <span class="color-fusion-900"></span>
        </p>
        <!-- END Color profile -->
        <!-- END Colors -->
        <?php include_once APP_PATH.'/includes/js.php'; ?>
        <script src="<?= APP_URL; ?>/js/modal/modal_appointment.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/register_login/login.js" type="text/javascript"></script>
        <script type="text/javascript">
            var count_session = <?php echo count($_SESSION); ?>;
            var lgin = new login();
            $(function(){
                lgin.init();
            });

            $('.register').unbind('click').bind('click',function(){
                window.location.href = "register.php";
            })

            $('#find-doctor').unbind('click').bind('click',function(){
                window.location.href = "physician_list.php";
            })

            $(".show-apt").unbind("click").bind("click",function(){
                if(count_session==0){
                    $('#login-modal').modal('show')
                }else{
                    $("#app-modal-lg-center #show_dependent_patient").remove();
                    $('#app-modal-lg-center').modal('show');
                    $('.app_buoc2').addClass('disabled')
                    $('.app_buoc3').addClass('disabled')
                    $('.app_buoc4').addClass('disabled')
                    $(".app_buoc1 ").click();
                    modal_appointment.prototype.reset_modal_appointment()
                }
            })

            $(".vital-show").unbind("click").bind("click",function(){
                if(count_session==0){
                    $('#login-modal').modal('show')
                }else{
                    window.location.href = "dashboard.php";
                }
            })

            $('#faq').unbind('click').bind('click',function(){
                window.location.href = "faq.php";
            })

            $('#find-lab').unbind('click').bind('click',function(){
                window.location.href = "lab_list.php";
            })

            $('#facility-list').unbind('click').bind('click',function(){
                window.location.href = "facility_list.php";
            })

            $('#find-pharmacy').unbind('click').bind('click',function(){
                window.location.href = "pharmacy_list.php";
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
