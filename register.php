<?php

require_once 'init.php';

$_title = 'Register account';
$_head = '<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
';

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
        <div class="page-wrapper auth">
            <div class="page-inner bg-brand-gradient">
                <div class="page-content-wrapper bg-transparent m-0">
                    <div class="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                        <div class="d-flex align-items-center container p-0">
                            <div class="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9 border-0">
                                <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                                    <img src="<?= ASSETS_URL ?>/img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                                    <span class="page-logo-text mr-1">Xin Chào Bác Sĩ</span>
                                </a>
                            </div>
                            <span class="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
                                Đã có tài khoản?
                            </span>
                            <a href="<?= APP_URL ?>/login.php" class="btn-link text-white ml-auto ml-sm-0">
                                Đăng Nhập
                            </a>
                        </div>
                    </div>
                    <div class="flex-1" style="background: url(<?= ASSETS_URL ?>/img/svg/pattern-1.svg) no-repeat center bottom fixed; background-size: cover;">
                        <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                            <div class="row">
                                <div class="col-xl-12">
                                    <h2 class="fs-xxl fw-500 mt-4 text-white text-center">
                                        Đăng kí ngay để có thể liên hệ với chúng tôi!
                                        <small class="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
                                        Xin Chào Bác Sĩ là nền tảng chăm sóc sức khỏe trực tuyến thông qua ứng dụng trên điện thoại thông minh hoặc qua website
                                        </small>
                                    </h2>
                                </div>
                                <div class="col-xl-6 ml-auto mr-auto">
                                    <div class="card p-4 rounded-plus bg-faded">
                                        <div class="alert alert-primary text-dark" role="alert">
                                            Điền đầy đủ các thông tin sẽ giúp ích cho các bác sĩ có thể làm việc nhanh hơn!
                                        </div>
                                        <form id="form_register" novalidate="" method="POST">
                                            <div class="form-group row">
                                                <label class="col-xl-12 form-label"  for="fname">Họ và tên</label>

                                                <div class="col-4 pr-1">
                                                    <input type="text" id="lname" name='FamilyName' class="form-control" placeholder="Họ" required>
                                                    <div class="invalid-feedback">Hãy nhập họ</div>
                                                </div>
                                                <div class="col-4 pl-1">
                                                    <input type="text" id="mname" name='MiddleName' class="form-control" placeholder="Tên đệm">
                                                    <div class="invalid-feedback">Hãy nhập tên đệm</div>
                                                </div>
                                                <div class="col-4 pl-1">
                                                    <input type="text" id="fname" name='FirstName' class="form-control" placeholder="Tên" required>
                                                    <div class="invalid-feedback">Hãy nhập tên</div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="emailverify">Email sẽ cần thiết để xác thực và khôi phục tài khoản</label>
                                                <input type="email" id="emailverify" name='Email' class="form-control" placeholder="Email để xác thực" required>
                                                <div class="invalid-feedback">Chọn một địa chỉ Email</div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="userpassword">Mật khẩu</label>
                                                <input type="password" id="userpassword" name='Password' class="form-control" placeholder="Tối thiểu 8 kí tự" required>
                                                <div class="invalid-feedback">Hãy nhập mật khẩu</div>
                                                <div class="help-block">
                                                    Mật khẩu của bạn phải dài 8-20 ký tự, chứa các chữ cái và số, đồng thời không được chứa dấu cách hoặc ký tự đặc biệt</div>
                                            </div>
                                            <div class="form-group">
                                                <label class="form-label" for="userpassword">Xác nhận mật khẩu</label>
                                                <input type="password" id="confirmpassword"  class="form-control" placeholder="Xác nhận mật khẩu" required>
                                                <div class="invalid-feedback">Hãy nhập lại mật khẩu</div>
                                            </div>

                                            <div class="form-group">
                                                <div style="text-align: center">
                                                    <label class="form-label" for="langue" style="float: left">Ngôn ngữ</label>
                                                    <div class="form-check-inline ml-auto">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" id="customRadio1" name="Language" class="custom-control-input" checked="checked">
                                                            <label class="custom-control-label" for="customRadio1">Tiếng việt</label>
                                                        </div>
                                                    </div>
                                                <div class="form-check-inline">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="Language" class="custom-control-input">
                                                        <label class="custom-control-label" for="customRadio2">Tiếng anh</label>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <label class="form-label" for="phonenumber">Số điện thoại</label>
                                                <input type="text" id="phonenumber" class="form-control" name='PrimaryPhoneNumber' placeholder="Số điện thoại của bạn"  required>
                                                <div class="invalid-feedback">Hãy nhập số điện thoại</div>
                                            </div>

                                            <div class="form-group demo">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="terms" required>
                                                    <label class="custom-control-label" for="terms"> Tôi đồng ý với Chính sách quyền riêng tư và Điều khoản dịch vụ.</label>
                                                    <div class="invalid-feedback">Bạn phải đồng ý với Chính sách quyền riêng tư và Điều khoản dịch vụ</div>
                                                </div>
                                            </div>

                                        </form>
                                        <div class="row no-gutters">
                                            <div class="col-md-4 ml-auto text-right">
                                                <button id="js-register-btn" type="button" class="btn btn-block btn-danger btn-lg mt-3">Đăng kí</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute pos-bottom pos-left pos-right p-3 text-center text-white">
                            2020 © SmartAdmin for PHP by&nbsp;<a href='https://smartadmin.lodev09.com' class='text-white opacity-40 fw-500' title='smartadmin.lodev09.com' target='_blank'>@lodev09</a>
                        </div>
                    </div>
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
        <script>
            /*
            $("#js-login-btn").click(function(event)
            {

                // Fetch form to apply custom Bootstrap validation
                var form = $("#form_register")

                if (form[0].checkValidity() === false)
                {
                    event.preventDefault()
                    event.stopPropagation()
                } else {

                }

                form.addClass('was-validated');
                // Perform ajax submit here...
            });
            */
        </script>
        <script src="<?= APP_URL; ?>/js/register_login/register.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/register_login/login.js" type="text/javascript"></script>
        <!--
        <script src="<?= APP_URL; ?>/js/jquery.mask.js" type="text/javascript"></script>
        -->
        <script src=
                "https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js">
        </script>
    </body>
</html>
