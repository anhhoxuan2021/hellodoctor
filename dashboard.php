<?php
/*
require_once 'php/http-request.php';
if(isset($_GET['id']) && $_GET['id'] != '' && $_GET['id'] != '0' && $_GET['id'] != 'undefined'){
    $_url='obj/user/'.$_GET['id'];
   $res = HTTPMethod::httpGet($_url);
    $data = (array)$res->response;
    print_r($data);
}*/

session_start();
require_once 'init.php';

$_title = 'Profile - Page Views';
$_active_nav = 'page_profile';
$_head = '	<!-- Optional: page related CSS-->
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/css/select2.min.css" rel="stylesheet" />
';
$_description = 'Profile layout';
if(count($_SESSION)==0)  header("Location: login.php");
//print_r($_SESSION);
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
                    <?php include_once 'modal/modal_vital.php'; ?>
                    <?php include_once 'modal/modal_history_detail.php'; ?>
                    <?php include_once 'modal/modal_lab.php'; ?>
                    <?php include_once 'modal/modal_add_lab_result.php'; ?>
                    <?php include_once 'modal/modal_prescription.php'; ?>
                    <?php include_once 'modal/modal_inv.php'; ?>
                    <?php include_once 'modal/modal_note.php'; ?>
                    <?php include_once 'modal/modal_credentials.php'; ?>
                    <?php include_once 'modal/modal_relative.php'; ?>
                    <?php include_once 'modal/modal_success.php'; ?>
                    <?php include_once 'modal/modal_validate.php'; ?>
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main role="main" class="page-content" id="dashboard-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            <li class="breadcrumb-item active">Trang cá nhân</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class='subheader-icon fal fa-plus-circle'></i> Thông tin cá nhân
                            </h1>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-xl-6 order-lg-1 order-xl-1">
                                <!-- profile summary -->
                                <div class="card mb-g rounded-top">
                                    <div class="row no-gutters row-grid">
                                        <div class="col-12">
                                            <div class="d-flex flex-column align-items-center justify-content-center p-4">

                                                <div class="image-upload">
                                                    <label for="avatar-input">
                                                        <?php
                                                          if($_SESSION['avatar_image'] !=''){
                                                              $avatar_image = $_SESSION['avatar_image'];
                                                          }else{
                                                              $avatar_image ="//s3.amazonaws.com/appforest_uf/f1584376106762x402033725538128100/avatar.png";
                                                          }
                                                        ?>
                                                        <img id="avatar-img" src="<?=$avatar_image?>" style="width: 149px; height: 149px;" alt="Profile" class="rounded-circle shadow-2 img-thumbnail fs-xl" />
                                                    </label>

                                                    <input class="was-changed" id="avatar-input" accept="image/*" type="file" onchange="profile.prototype.previewFile(event);" style="display: none;" />
                                                </div>
                                                <!--
                                                <a href="javascript:void(0);" id="profile-image" class="btn fs-xl mr-1" data-toggle="tooltip" data-original-title="Change photo" data-placement="top">
                                                    <img src="//s3.amazonaws.com/appforest_uf/f1584376106762x402033725538128100/avatar.png" class="rounded-circle shadow-2 img-thumbnail fs-xl" alt="change img">
                                                </a>
                                                -->
                                                
                                                <h5 class="mb-0 fw-700 text-center mt-3">
                                                    <div id="profile-name"><?=$_SESSION['user_type_option_user_type'] ." ". $_SESSION['family_name_text']." ".$_SESSION['middle_name_text']." ".$_SESSION['first_name_text']; ?></div>
                                                    <small class="text-muted mb-0" id="profile-address"><?=$_SESSION['address']; ?></small>
                                                </h5>
                                                <div class="mt-2 text-center demo">
                                                    <!--<a href="javascript:void(0);" class="fs-xl" style="color:#3b5998" data-toggle="tooltip" data-original-title="Facebook" data-placement="top">
                                                        <i class="fab fa-facebook"></i>
                                                    </a>-->
                                                    <div class="btn-group dropup">
                                                        <button style="color:#3b5998;" type="button" class="btn btn-icon fs-xl" data-offset="0,30" data-placement="top" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fab fa-facebook"></i>
                                                        </button>
                                                        <div class="dropdown-menu" style="width: 220px;">
                                                            <div style="display: block; text-align: center;">
                                                                <label style="padding: 5px" class="form-label" for="info_facebook">Link liên kết tới Facebook của bạn</label>
                                                                <input type="text" id="info_facebook" name="infoFacebook" class="form-control was-changed">
                                                                <button type="submit" class="mt-2 mb-2 btn btn-primary waves-effect waves-themed">Lưu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group dropup">
                                                        <button style="color:#38A1F3" type="button" class="btn btn-icon fs-xl" data-offset="-45,30" data-placement="top" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fab fa-cc-apple-pay"></i>
                                                        </button>
                                                        <div class="dropdown-menu" style="width: 220px;">
                                                            <div style="display: block; text-align: center;">
                                                                <label style="padding: 5px" class="form-label" for="info_zalo">Link liên kết tới Zalo của bạn</label>
                                                                <input type="text" id="info_zalo" name="infoZalo" class="form-control was-changed">
                                                                <button type="submit" class="mt-2 mb-2 btn btn-primary waves-effect waves-themed">Lưu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group dropup">
                                                        <button style="color:#db3236" type="button" class="btn btn-icon fs-xl" data-offset="-90,30" data-placement="top" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fab fa-skype"></i>
                                                        </button>
                                                        <div class="dropdown-menu" style="width: 220px;">
                                                            <div style="display: block; text-align: center;">
                                                                <label style="padding: 5px" class="form-label" for="info_skype">Link liên kết tới Skype của bạn</label>
                                                                <input type="text" id="info_skype" name="infoSkype" class="form-control was-changed">
                                                                <button type="submit" class="mt-2 mb-2 btn btn-primary waves-effect waves-themed">Lưu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group dropup">
                                                        <button style="color:#0077B5" type="button" class="btn btn-icon fs-xl" data-offset="-135,30" data-placement="top" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fab fa-viber"></i>
                                                        </button>
                                                        <div class="dropdown-menu" style="width: 220px;">
                                                            <div style="display: block; text-align: center;">
                                                                <label style="padding: 5px" class="form-label" for="info_whatapps">Link liên kết tới Whatapps của bạn</label>
                                                                <input type="text" id="info_whatapps" name="infoWhatapps" class="form-control was-changed">
                                                                <button type="submit" class="mt-2 mb-2 btn btn-primary waves-effect waves-themed">Lưu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="btn-group dropup">
                                                        <button style="color:#00AFF0" type="button" class="btn btn-icon fs-xl" data-offset="-180,30" data-placement="top" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i class="fab fa-whatsapp"></i>
                                                        </button>
                                                        <div class="dropdown-menu" style="width: 220px;">
                                                            <div style="display: block; text-align: center;">
                                                                <label style="padding: 5px" class="form-label" for="info_viber">Link liên kết tới Viber của bạn</label>
                                                                <input type="text" id="info_viber" name="infoViber" class="form-control was-changed">
                                                                <button type="submit" class="mt-2 mb-2 btn btn-primary waves-effect waves-themed">Lưu</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="col-12 bp-1" style="padding-bottom: 3px;">
                                            <div class="p-3 text-left">
                                                <label class="form-label" for="date_register">Ngày đăng ký: </label>
                                                <!-- Thêm ngày đăng ký vào đây -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- contacts -->
                                
                            </div>

                            <!-- post comment -->
                            <?php
                            $modal_appt = ($_SESSION['user_type_option_user_type']=='Patient')?'id="modal-open-appointment"':'';
                            $vital_sign = ($_SESSION['user_type_option_user_type']=='Patient')?'id="vital-sign"':'';
                            $credentials = ($_SESSION['user_type_option_user_type']=='Doctor' || $_SESSION['user_type_option_user_type']=='Admin')?'id="show-credentials"':'';
                            $display = ($_SESSION['user_type_option_user_type']=='Patient')?'style="display:none"':'';
                            $relative = ($_SESSION['guardian_user'] !='')?'style="display:none"':'';
                            ?>
                            <div class="col-lg-6 col-xl-6 order-lg-2 order-xl-3">
                                <div class="card mb-1" id="show-modal-apt">
                                    <div class="card-body">
                                        <div id="modal-open-appointment"  class="d-flex flex-row align-items-center" style="cursor: pointer">
                                            <div class='icon-stack display-3 flex-shrink-0'>
                                                <i class="fal fa-circle icon-stack-3x opacity-100 color-danger-400 class-disable"></i>
                                                <i class="fas fa-calendar-plus icon-stack-1x opacity-100 color-danger-500 class-disable"></i>
                                            </div>
                                            <div class="ml-3">
                                                <strong>
                                                    Đặt Lịch hẹn
                                                </strong>
                                                <br>
                                                Không cần chờ đợi, không lo mệt mỏi. Đặt lịch ngay!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card mb-1" id="show-modal-vital">
                                    <div class="card-body">
                                        <a href="javascript:void(0);" id="vital-sign" class="d-flex flex-row align-items-center">
                                            <div class='icon-stack display-3 flex-shrink-0'>
                                                <i class="fal fa-circle icon-stack-3x opacity-100 color-warning-400 class-disable"></i>
                                                <i class="fas fa-user-md icon-stack-1x opacity-100 color-warning-500 class-disable"></i>
                                            </div>
                                            <div class="ml-3">
                                                <strong>
                                                    Tình trạng sức khỏe
                                                </strong>
                                                <br>
                                                Hãy cho chúng tôi biết tình trạng sức khỏe của bạn
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="card mb-1" style="display: <?=$relative?>" id="relative-show">
                                    <div class="card-body">
                                        <a href="javascript:void(0);" class="d-flex flex-row align-items-center" id="display-modal-relative">
                                            <div class='icon-stack display-3 flex-shrink-0'>
                                                <i class="fal fa-circle icon-stack-3x opacity-100 color-success-400 class-disable"></i>
                                                <i class="fas fa-user-friends icon-stack-1x opacity-100 color-success-500 class-disable"></i>
                                            </div>
                                            <div class="ml-3">
                                                <strong>
                                                    Người thân
                                                </strong>
                                                <br>
                                                Thêm vào danh sách người thân
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="card mb-1" <?=$display?> id="display-credential">
                                    <div class="card-body">
                                        <a href="javascript:void(0);" <?=$credentials?> class="d-flex flex-row align-items-center">
                                            <div class='icon-stack display-3 flex-shrink-0'>
                                                <i class="fal fa-circle icon-stack-3x opacity-100 color-info-400 class-disable"></i>
                                                <i class="fas fa-key icon-stack-1x opacity-100 color-info-500 class-disable"></i>
                                            </div>
                                            <div class="ml-3">
                                                <strong>
                                                     Chứng chỉ, Bằng cấp
                                                </strong>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-xl-12 order-lg-3 order-xl-2">
                                <div class="card border mb-g">
                                    <div class="card-body pl-4 pt-4 pr-4 pb-0">
                                        <div class="d-flex flex-column">
                                            <div id='profile' novalidate="">
                                                <input type="hidden" id="UniqueID" value="<?=$_SESSION['_id']?>">
                                                <input type="hidden" id="id_id" value="">
                                                <input type="hidden" id="patient-id" value="<?=$_SESSION['_id']?>">
                                                <input type="hidden" id="guardian_user" value="<?=$_SESSION['guardian_user']?>">
                                                <input type="hidden" id="patient-type" value="<?=$_SESSION['user_type_option_user_type']?>">
                                                <input type="hidden" id="uid_text" value="<?=$_SESSION['uid_text']?>">
                                                <div class="row">
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="last_name">Họ</label>
                                                        <input type="text" id="FamilyName" name="FamilyName" class="form-control was-changed" value="<?=$_SESSION['family_name_text']?>" required>
                                                    </div>
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="birthday"> Ngày tháng năm sinh</label>
                                                        <input type="date" id="birthday" class="form-control was-changed" data-date-format="DD MMMM YYYY" value="<?= date("Y-m-d", strtotime($_SESSION['birth_date_date']))?>">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="middle_name">Tên đệm</label>
                                                        <input type="text" id="middle_name" class="form-control was-changed" value="<?=$_SESSION['middle_name_text']?>">
                                                    </div>
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label style="margin-bottom: 12px" class="form-label" for="langue">Giới tính</label></br>
                                                        <div class="form-check-inline">
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" id="radio_sex_male" name="customRadio" class="custom-control-input was-changed" value="Male"
                                                                    <?=($_SESSION['sex_option_sex']=='Male')?'checked':'' ?>>
                                                                <label class="custom-control-label" for="radio_sex_male">Nam</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check-inline">
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" id="radio_sex_female" name="customRadio" class="custom-control-input was-changed" value="Female"
                                                                    <?=($_SESSION['sex_option_sex']=='Female')?'checked':'' ?>>
                                                                <label class="custom-control-label" for="radio_sex_female">Nữ</label>
                                                            </div>
                                                        </div>
                                                        <div class="form-check-inline">
                                                            <div class="custom-control custom-radio">
                                                                <input type="radio" id="radio_sex_other" name="customRadio" class="custom-control-input was-changed" value="Unknown"
                                                                    <?=($_SESSION['sex_option_sex']=='Unknown')?'checked':'' ?>>
                                                                <label class="custom-control-label" for="radio_sex_other">Khác</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="first_name">Tên</label>
                                                        <input type="text" id="first_name" class="form-control was-changed" value="<?=$_SESSION['first_name_text']?>" required>
                                                    </div>
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="langue">Ngôn ngữ</label></br>
                                                        <Select id='langguage_id' class="form-control was-changed">
                                                            <option class="dropdown-item" type="button" value="vi_vn"
                                                                <?= ($_SESSION['language_text']=='vi_vn')?'selected':'' ?>>Tiếng Việt</option>
                                                            <option class="dropdown-item" type="button" value="en_us"
                                                                <?= ($_SESSION['language_text']=='en_us')?'selected':'' ?>>Tiếng Anh</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div class="row" style="padding-bottom: 9px;">
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="full_name">Họ và tên</label>
                                                        <input type="text" id="full_name" class="form-control was-changed"
                                                               value="<?= $_SESSION['family_name_text']." ".$_SESSION['middle_name_text'] ." ".$_SESSION['first_name_text']; ?>">
                                                    </div>
                                                    <div class="col-6 pr-4 pb-4">
                                                        <label class="form-label" for="age">Tuổi</label>
                                                        <!-- them tuổi vao day -->
                                                    </div>
                                                </div>
                                                <!---->
                                                <div class="row pb-3">
                                                    <div class="col-3">
                                                        <label class="form-label" for="number_BHYT">Mã số thẻ BHYT</label>
                                                        <input type="text" id="number_BHYT" class="form-control was-changed" value="<?=$_SESSION['insurance_number_text']?>">
                                                    </div>
                                                    <div class="col-3">
                                                        <label class="form-label" for="govement_id">Số chứng minh thư</label>
                                                        <input type="text" id="govement_id" class="form-control was-changed" value="<?=$_SESSION['identification_number_text']?>">
                                                    </div>
                                                    <div class="col-3">
                                                        <label class="form-label" for="ID_Type">Loại giấy tờ tùy thân</label></br>
                                                        <Select id="ID_Type" class="form-control was-changed">
                                                            <option  value=""
                                                                <?= ($_SESSION['identification_type_option_identification_type']=='')?'selected="selected"':'' ?>></option>
                                                            <option value="Government ID"
                                                                <?= ($_SESSION['identification_type_option_identification_type']=='Resident Card')?'selected="selected"':'' ?>>Số CMND</option>
                                                            <option value="Driver License"
                                                                <?= ($_SESSION['identification_type_option_identification_type']=='Driver License')?'selected="selected"':'' ?>>Bằng lái xe</option>
                                                            <option  value="Passport"
                                                                <?= ($_SESSION['identification_type_option_identification_type']=='Passport')?'selected="selected"':'' ?>>Hộ chiếu</option>
                                                            <option  value="Resident Card"
                                                                <?= ($_SESSION['identification_type_option_identification_type']=='Government ID')?'selected="selected"':'' ?>>Thẻ căn cước</option>
                                                        </Select>
                                                    </div>
                                                    <div class="col-3">
                                                        <label class="form-label" for="Resident_Status">Thông tin thường trú</label></br>
                                                        <Select id="Resident_Status" class="form-control was-changed" >
                                                            <option  value=""  <?= ($_SESSION['residential_status_option_residential_status']=='')?'selected ="selected"':'' ?>></option>
                                                            <option value="Citizen" <?= ($_SESSION['residential_status_option_residential_status']=='Citizen')?'selected="selected"':'' ?>>Công dân</option>
                                                            <option value="Temporary Resident" <?= ($_SESSION['residential_status_option_residential_status']=='Temporary Resident')?'selected="selected"':'' ?>>Tạm trú</option>
                                                            <option  value="Permanent Resident"  <?= ($_SESSION['residential_status_option_residential_status']=='Permanent Resident')?'selected="selected"':'' ?>>Thường trú</option>
                                                            <option value="Work Permit"  <?= ($_SESSION['residential_status_option_residential_status']=='Work Permit')?'selected="selected"':'' ?>>Work Permit</option>
                                                            <option value="Tourist" <?= ($_SESSION['residential_status_option_residential_status']=='Tourist')?'selected="selected"':'' ?>>Khách du lịch</option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div class="row pb-3">
                                                    <div class="col-3">
                                                        <label class="form-label" for="Nationality">Quốc tịch</label></br>
                                                        <Select id="Nationality" class="form-control was-changed" >
                                                            <option value="" <?= ($_SESSION['nationality_option_nationality']=='')?'selected="selected"':'' ?>></option>
                                                            <option value="Vietnam" <?= ($_SESSION['nationality_option_nationality']=='Vietnam')?'selected="selected"':'' ?>>Việt Nam</option>
                                                            <option value="United States" <?= ($_SESSION['nationality_option_nationality']=='United States')?'selected="selected"':'' ?>>Hoa Kỳ</option>

                                                        </Select>
                                                    </div>
                                                    <div class="col-3">
                                                        <label class="form-label" for="phone_number">Số điện thoại</label>
                                                        <input type="tel" id="phone_number" class="form-control was-changed" value="<?=$_SESSION['primary_phone_number_text']?>" required>
                                                    </div>
                                                    <div class="col-3">
                                                        <label class="form-label" for="Email">Email</label>
                                                        <input type="text" id="Email" class="form-control was-changed" readonly="true" value="<?=$_SESSION['email']?>" required>
                                                    </div>
                                                    <?php
                                                        if($_SESSION['user_type_option_user_type'] =="Admin"){
                                                    ?>
                                                            <div class="col-3" >
                                                                <label>&nbsp</label>
                                                                <div class="row">
                                                                    <div class="col-6 padding_r">
                                                                        <button id="require-change-email" class="btn btn-danger">Thay Email khác</button>
                                                                    </div>
                                                                    <div class="col-6">
                                                                        <button id="require-change-pass" class="btn btn-danger">Đổi mật khẩu</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    <?php
                                                        }
                                                    ?>

                                                </div>
                                                <div class="row pb-3">
                                                    <div class="col-12">
                                                        <label class="form-label" for="address" >Địa chỉ</label>
                                                        <input type="text" id="address" class="form-control was-changed" value="<?=$_SESSION['address']?>">
                                                    </div>
                                                </div>
                                                <div class="row pb-3">
                                                    <div class="col-md-9" id="map" style="width:100%;height:355px; margin-top: 20px; right: 10px"></div>
                                                    <div class="col-md-3">
                                                        <div class="row pb-3">
                                                            <label class="form-label" for="province">Tỉnh</label >
                                                            <input type="text" id="province" class="form-control was-changed" value="<?=$_SESSION['province_text']?>">
                                                        </div>
                                                        <div class="row pb-3">
                                                            <label class="form-label" for="city">Thành phố</label>
                                                            <input type="text" id="city" class="form-control was-changed" value="<?=$_SESSION['city_text']?>">
                                                        </div>
                                                        <div class="row pb-3">
                                                            <label class="form-label" for="postal_code">Mã bưu điện</label>
                                                            <input type="text" id="postal_code" class="form-control was-changed" value="<?=$_SESSION['postal_code_text']?>">
                                                        </div>
                                                        <div class="row pb-3">
                                                            <label class="form-label" for="Country">Quốc gia</label></br>
                                                            <Select id="Country" class="form-control was-changed" >
                                                                <option value="" <?= ($_SESSION['country_option_nationality']=='')?'selected="selected"':'' ?>></option>
                                                                <option value="Vietnam" <?= ($_SESSION['country_option_nationality']=='Vietnam')?'selected="selected"':'' ?>>Việt Nam</option>
                                                                <option value="United States" <?= ($_SESSION['country_option_nationality']=='United States')?'selected="selected"':'' ?>>Hoa Kỳ</option>

                                                            </Select>
                                                        </div>
                                                        <div class="row pb-3">
                                                            <label class="form-label" for="User_Type">Loại người dùng</label></br>
                                                            <Select id="User_Type" class="form-control was-changed" disabled="disabled">
                                                                <option value="Patient" <?= ($_SESSION['user_type_option_user_type']=='Patient')?'selected="selected"':'' ?>>Bệnh nhân</option>
                                                                <option value="Admin" <?= ($_SESSION['user_type_option_user_type']=='Admin')?'selected="selected"':'' ?>>Admin</option>
                                                                <option value="Doctor" <?= ($_SESSION['user_type_option_user_type']=='Doctor')?'selected="selected"':'' ?>>Bác sĩ</option>
                                                                <option value="Nurse" <?= ($_SESSION['user_type_option_user_type']=='Nurse')?'selected="selected"':'' ?>>Y tá</option>
                                                                <option value="Office" <?= ($_SESSION['user_type_option_user_type']=='Office')?'selected="selected"':'' ?>>Văn phòng</option>
                                                                <option value="Lab" <?= ($_SESSION['user_type_option_user_type']=='Lab')?'selected="selected"':'' ?>>Phòng xét nghiệm</option>
                                                                <option value="Pharmacy" <?= ($_SESSION['user_type_option_user_type']=='Pharmacy')?'selected="selected"':'' ?>>Nhà thuốc</option>
                                                                <option value="Delivery" <?= ($_SESSION['user_type_option_user_type']=='Delivery')?'selected="selected"':'' ?>>Giao hàng</option>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                            <div class="row no-gutters margin_b15">
                                                <div class="col-md-3 ml-auto text-right">
                                                    <button id="js-profile-btn" type="button" class="btn btn-block btn-succ btn-lg">Lưu</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- rating -->
                        <div class="row">
                            <div id="panel-7" class="col-lg-12">
                                <div class="panel panel-container show ">
                                    <div class="panel-content" >
                                    
                                        <ul class="nav nav-pills nav-justified" style="border-bottom: 1px solid rgba(0,0,0,.07);" role="tablist">
                                            <li class="nav-item"><a class="nav-link active" data-toggle="pill" href="#nav_1" style="font-size: 13px">Tiền sử</a></li>
                                            <li class="nav-item" id="tab-appt-click"><a class="nav-link" data-toggle="pill" href="#nav_2" style="font-size: 13px">Lịch hẹn</a></li>
                                            <li class="nav-item" id="tab-lab-click"><a class="nav-link" data-toggle="pill" href="#nav_3" style="font-size: 13px">Xét nghiệm</a></li>
                                            <li class="nav-item" id="tab-prescription-click"><a class="nav-link" data-toggle="pill" href="#nav_4" style="font-size: 13px">Toa thuốc</a></li>
                                            <li class="nav-item" id="tab-docs-click"><a class="nav-link" data-toggle="pill" href="#nav_5" style="font-size: 13px">Tài liệu</a></li>
                                            <li class="nav-item" id="tab-note-click"><a class="nav-link" data-toggle="pill" href="#nav_6" style="font-size: 13px">Ghi chú</a></li>
                                            <li class="nav-item" id="tab-invoice-click"><a class="nav-link" data-toggle="pill" href="#nav_7" style="font-size: 13px">Thanh toán</a></li>
                                        </ul>
                                        <div class="tab-content py-3">
                                            <div class="tab-pane fade show active pt-3 pl-3 pr-3" id="nav_1" role="tabpanel">
                                                <?php include_once 'tab/history.php'; ?>
                                            </div>
                                            <div style="min-height: 500px;" class="tab-pane fade" id="nav_2" role="tabpanel">
                                                <?php include_once 'tab/history_appointment.php'; ?>
                                            </div>

                                            <div style="min-height: 500px;" class="tab-pane fade" id="nav_3" role="tabpanel">
                                                <?php include_once 'tab/history_lab.php'; ?>
                                            </div>
                                            <div style="min-height: 500px;" class="tab-pane fade pt-3" id="nav_4" role="tabpanel">
                                                <?php include_once 'tab/history_prescription.php'; ?>
                                            </div>
                                            <div style="min-height: 500px;" class="tab-pane fade pt-3" id="nav_5" role="tabpanel">
                                                <?php include_once 'tab/history_doc.php'; ?>
                                            </div>
                                            <div style="min-height: 500px;" class="tab-pane fade pt-3" id="nav_6" role="tabpanel">
                                                <?php include_once 'tab/history_note.php'; ?>
                                            </div>
                                            <div style="min-height: 500px;" class="tab-pane fade pt-3" id="nav_7" role="tabpanel">
                                                <?php include_once 'tab/history_inv.php'; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div id="panel-8" class="col-lg-12">
                                <div class="panel pt-4 pl-4 pr-4">
                                    <div class="row" style="text-align: center">
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="form-label text-muted" for="Heart_Rate">Nhịp tim (BPM)</label>
                                                <div id="Heart_Rate" style="height: 370px; width: 100%;"></div>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="form-label text-muted" for="glucose_display">Đường huyết</label>
                                                <div id="glucose_display" style="height: 370px; width: 100%;"></div>
                                            </div>
                                        </div>
                                        <div class="col ">
                                            <div class="form-group">
                                                <label class="form-label text-muted" for="blood_pressure">Huyết áp</label>
                                                <div id="blood_pressure" style="height: 370px; width: 100%;"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row pt-4 pb-4" style="text-align: center">
                                        <div class="col">
                                            <div class="form-group">
                                                <label class="form-label text-muted" for="Weight">Cân nặng</label>
                                                <div id="weight-times" style="height: 370px; width: 100%;"></div>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="form-group">
                                                <label class="form-label text-muted" for="BMI">BMI (Chỉ số khối cơ thể)</label>
                                                <div id="bmi-times" style="height: 370px; width: 100%;"></div>
                                            </div>
                                        </div>

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

        <script type="text/javascript">
            var generalStatusOption = JSON.parse(localStorage.getItem('generalStatusOption'))
            var generalStatus = JSON.parse(localStorage.getItem('generalStatus'))

        </script>

        <script type="text/javascript">
            var patient_login='<?php echo $_SESSION['_id'];?>';
            var user_login='<?php echo $_SESSION['_id'];?>';
            var type_login='<?php echo $_SESSION['user_type_option_user_type'];?>';
            var user_type_option ='<?php echo $_SESSION["user_type_option_user_type"]; ?>'

        </script>

        <script type="text/javascript">
            var user_type_option ='<?php echo $_SESSION["user_type_option_user_type"]; ?>'
        </script>

        <script src="<?= APP_URL; ?>/js/dashboard/profile.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/register_login/login.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/modal/modal_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_vital.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_history_detail.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_clinical.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_inv.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_note.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_credentials.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_relative.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_validate.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/modal/modal_leave_page.js" type="text/javascript"></script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/tab/history_detail.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_appointment.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_lab.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_prescription.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_inv.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_note.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/tab/history_doc.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/appointment/patient_appointment.js" type="text/javascript"></script>


        <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.10/js/select2.min.js"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/pdf/pdf_ex.js" type="text/javascript"></script>
        <script>
            $("#modal-open-appointment").unbind("click").bind("click",function(){
                $('#app-modal-lg-center').modal('show');
                $('.app_buoc2').addClass('disabled')
                $('.app_buoc3').addClass('disabled')
                $('.app_buoc4').addClass('disabled')
                $(".app_buoc1 ").removeClass('disabled')
                $(".app_buoc1 ").click();
                modal_appointment.prototype.reset_modal_appointment()

            })

            $("#vital-sign").unbind("click").bind("click",function(){
                modal_vital.prototype.reset_modal_vital();
                $('#vitalsign-modal-center').modal('show')
            });

            $("#display-modal-relative").unbind('click').bind('click',function(e){
                modal_relative.prototype.relative_list(user_login)
                $('#relative-modal #show-save-relative1').css({"display":""})
                $('#relative-modal #show-save-relative2').css({"display":"none"})
                $('#relative-modal').modal("show");
                $('#relative-modal #guardian-id').val(user_login);
                $('#relative-modal #guardian-address').val($('#dashboard-content #address').val());
                $('#relative-modal #guardian-city').val($('#dashboard-content #city').val());
                $('#relative-modal #guardian-country').val($('#dashboard-content #Country').val());
                $('#relative-modal #guardian-family-name').val($('#dashboard-content #FamilyName').val());
                $('#relative-modal #guardian-language').val($('#dashboard-content #langguage_id').val());
                $('#relative-modal #guardian-nationality').val($('#dashboard-content #Nationality').val());
                $('#relative-modal #guardian-postcode').val($('#dashboard-content #postal_code').val());
                $('#relative-modal #guardian-phone').val($('#dashboard-content #phone_number').val());
                $('#relative-modal #guardian-province').val($('#dashboard-content #province').val());
            });

            $('#app-modal-lg-center #show_dependent_patient').unbind("click").bind("click",function(){
                modal_relative.prototype.relative_list(user_login)
                $('#relative-modal #show-save-relative1').css({"display":"none"})
                $('#relative-modal #show-save-relative2').css({"display":""})
                $('#relative-modal').modal("show");
                $('#relative-modal #guardian-id').val(user_login);
            })

            /*if(type_login =="Admin"){
                $("#show-modal-apt #modal-open-appointment").unbind('click')
                $("#show-modal-apt .class-disable").addClass('opacity_disabled')
                //vital
                $("#show-modal-vital #vital-sign").unbind('click')
                $("#show-modal-vital .class-disable").addClass('opacity_disabled')
                //relative
                $("#relative-show #display-modal-relative").unbind('click')
                $("#relative-show .class-disable").addClass('opacity_disabled')
            }*/

        </script>
        <script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>

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
