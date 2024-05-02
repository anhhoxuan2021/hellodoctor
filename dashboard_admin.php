<?php
session_start();
require_once 'init.php';

$_title = 'Admin Report';
$_active_nav = 'dashboard_admin';
$_head = '	<!-- Optional: page related CSS-->

	<link id="appbundle" rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/app.bundle.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-brands.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/fa-solid.css">
	<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css1/bacsi.css">

';
$_description = 'Appointment Information';
if(count($_SESSION) ==0){
    header("Location: login.php");
}

if($_SESSION['user_type_option_user_type'] !="Admin"){
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
                    <?php include_once 'modal/modal_success.php'; ?>
                    <!-- the #js-page-content id is needed for some plugins to initialize -->
                    <main id="js-page-content" role="main" class="page-content">
                        <ol class="breadcrumb page-breadcrumb">
                            <li class="breadcrumb-item"><a href="home.php">Xin chào bác sĩ</a></li>
                            
                            <li class="breadcrumb-item active">Admin Report</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader row">
                            <h1 class="subheader-title col-8">
                                <i style="color: black" class='subheader-icon fas fa-calendar-check'></i> Admin Report
                            </h1>
                        </div>
                        
                        <div class="container1" style="padding-right: 0;padding-left: 0;">
                            <!--appointment report-->
                            <div class="row f-bold col-12 under-line">Appointment List</div>
                            <div class="row m-t5" id="admin-apt">
                                <div class="col-3">
                                    <label class ="row col-12">
                                        <div class="col-6 custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="apt-doctor">
                                            <label class="custom-control-label" for="apt-doctor">Bác sĩ</label>
                                        </div>
                                        <div class="col-6 custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="apt-patient">
                                            <label class="custom-control-label" for="apt-patient">Bệnh nhân</label>
                                        </div>
                                    </label>
                                    <input class="form-control" id="apt-text-search" type="text" placeholder="Tên">
                                </div>
                                <div class="col-2">
                                    <label for="aptsearchtype">Tình trạng cuộc hẹn</label>
                                    <select class="form-control" id="apt-search-type">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-2 padding_r">
                                    <label for="aptdatefrom"> Ngày tạo cuộc hẹn</label>
                                    <input type="date" id="apt-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                                <div class="col-2 padding_r">
                                    <label  for="aptdateto"> Đến ngày</label>
                                    <input type="date" id="apt-date-to" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                            </div>

                            <div class="row m-t5">
                                <div class="col-2">
                                    <label  for="aptsearch">&nbsp</label>
                                    <button class="btn btn-success form-control" id="apt-search">Tìm kiếm</button>
                                </div>
                                <div class="col-2">
                                    <label  for="aptsearch">&nbsp</label>
                                    <button class="btn btn-success form-control" id="apt-export">Xuất File</button>
                                </div>
                                <div class="col-2">
                                    <label  for="aptsearch">&nbsp</label>
                                    <button class="btn btn-success form-control" id="apt-print">In Báo Cáo</button>
                                </div>
                                <div class="col-2">
                                    <label  for="apt-reset">&nbsp</label>
                                    <button class="btn btn-success form-control" id="apt-reset">Reset</button>
                                </div>
                            </div>

                            <div class="row margin_b10 m-t5">
                                <div class="table-responsive-lg col-12">
                                    <table class="table table-bordered m-0 t-normal" id="apt-list">
                                        <thead>
                                        <tr>
                                            <th style="width:30px"></th>
                                            <th width="115px">Cuộc hẹn</th>
                                            <th width="160px">Trạng thái cuộc hẹn</th>
                                            <th>Bác sĩ</th>
                                            <th>Bệnh nhân</th>
                                            <th>Khám bệnh</th>
                                            <th >Ngày tạo</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="apt-record"></span> Appointments</div>
                                </div>

                                <div class="col-12 margin-top20">
                                    <ul id="apt-list-pagination" class="pagination-sm"></ul>
                                </div>
                            </div>
                            <!--user report-->
                            <div class="row f-bold col-12 under-line">User List</div>
                            <div class="row m-t5" id="admin-users-list">
                                <div class="col-2">
                                    <label for="user-search-type">User Type</label>
                                    <select class="form-control" id="user-search-type">
                                        <option value=""></option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label> Tên </label>
                                    <input class="form-control" id="user-text-search" type="text" placeholder="Tên">
                                </div>
                                <div class="col-2 padding_r">
                                    <label for="user-date-from"> Ngày đăng ký</label>
                                    <input type="date" id="user-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                                <div class="col-2 padding_r">
                                    <label  for="user-date-to"> Đến ngày</label>
                                    <input type="date" id="user-date-to" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                            </div>
                            <div class="row m-t5">
                                <div class="col-2">
                                    <label  for="user-search">&nbsp</label>
                                    <button class="btn btn-success form-control" id="user-search">Tìm kiếm</button>
                                </div>
                                <div class="col-2">
                                    <label>&nbsp</label>
                                    <button class="btn btn-success form-control" id="user-export">Xuất File</button>
                                </div>
                                <div class="col-2">
                                    <label>&nbsp</label>
                                    <button class="btn btn-success form-control" id="user-print">In Báo Cáo</button>
                                </div>
                                <div class="col-2">
                                    <label  for="user-reset">&nbsp</label>
                                    <button class="btn btn-success form-control" id="user-reset">Reset</button>
                                </div>
                            </div>

                            <div class="row margin_b10 m-t5">
                                <div class="table-responsive-lg col-12">
                                    <table class="table table-bordered m-0 t-normal" id="users-list">
                                        <thead>
                                        <tr>
                                            <th width="30px"></th>
                                            <th width="150px">Họ tên</th>
                                            <th width="100px">Số điện thoại</th>
                                            <th width="80px">Loại</th>
                                            <th width="150px">Ngày tạo</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="user-record"></span> users</div>
                                </div>

                                <div class="col-12 margin-top20">
                                    <ul id="users-list-pagination" class="pagination-sm"></ul>
                                </div>
                            </div>
                            <!--invoice report-->
                            <div class="row f-bold col-12 under-line">Invoice List</div>
                            <div class="row m-t5">
                                <div class="col-2">
                                    <label for="inv-search-type">Paid</label>
                                    <select class="form-control" id="inv-paid">
                                        <option value=""></option>
                                        <option value="1">Đã thanh toán</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label> Tên </label>
                                    <input class="form-control" id="inv-text-search" type="text" placeholder="Tên">
                                </div>
                                <div class="col-2 padding_r">
                                    <label for="inv-date-from"> Ngày đăng ký</label>
                                    <input type="date" id="inv-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                                <div class="col-2 padding_r">
                                    <label  for="inv-date-to"> Đến ngày</label>
                                    <input type="date" id="inv-date-to" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                            </div>

                            <div class="row m-t5">
                                <div class="col-2 padding_r">
                                    <label for="inv-date-from"> Ngày thanh toán</label>
                                    <input type="date" id="inv-paid-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                                <div class="col-2 padding_r">
                                    <label  for="inv-date-to"> Đến ngày</label>
                                    <input type="date" id="inv-paid-date-to" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                                <div class="col-2">
                                    <label  for="inv-search">&nbsp</label>
                                    <button class="btn btn-success form-control" id="inv-search">Tìm kiếm</button>
                                </div>
                                <div class="col-2">
                                    <label >&nbsp</label>
                                    <button class="btn btn-success form-control" id="inv-export">Xuất File</button>
                                </div>
                                <div class="col-2">
                                    <label >&nbsp</label>
                                    <button class="btn btn-success form-control" id="inv-print">In Báo Cáo</button>
                                </div>
                                <div class="col-2">
                                    <label  for="inv-reset">&nbsp</label>
                                    <button class="btn btn-success form-control" id="inv-reset">Reset</button>
                                </div>
                            </div>

                            <div class="row margin_b10 m-t5">
                                <div class="table-responsive-lg col-12">
                                    <table class="table table-bordered m-0 t-normal" id="inv-list">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Invoice</th>
                                            <th >Appointment</th>
                                            <th>Số tiền</th>
                                            <th>Còn lại</th>
                                            <th>Đã thanh toán</th>
                                            <th>Ngày tạo</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    <div class="col-12 bg-light-gray">Total: <span class="f-bold" id="inv-record"></span> invoices</div>
                                </div>
                                <div class="col-12 margin-top20">
                                    <ul id="inv-list-pagination" class="pagination-sm"></ul>
                                </div>
                            </div>
                            <!---Payment report--->
                            <div class="row f-bold col-12 under-line">Payment report</div>
                            <div class="row m-t5" id="admin-payment-list">
                                <div class="col-2">
                                    <label for="payment-search-type">Status</label>
                                    <select class="form-control" id="payment-search-type">
                                        <option value=""></option>
                                        <option value="Successful">Thanh toán thành công</option>
                                        <option value="Waiting to Confirm">Chờ xác nhận</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label> Tên </label>
                                    <input class="form-control" id="payment-text-search" type="text" placeholder="Tên">
                                </div>
                                <div class="col-2 padding_r">
                                    <label for="payment-date-from"> Ngày đăng ký</label>
                                    <input type="date" id="payment-date-from" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                                <div class="col-2 padding_r">
                                    <label  for="payment-date-to"> Đến ngày</label>
                                    <input type="date" id="payment-date-to" class="form-control" data-date-format="DD MMMM YYYY" value="">
                                </div>
                            </div>
                            <div class="row m-t5">
                                <div class="col-2">
                                    <label >&nbsp</label>
                                    <button class="btn btn-success form-control" id="payment-search">Tìm kiếm</button>
                                </div>
                                <div class="col-2">
                                    <label  >&nbsp</label>
                                    <button class="btn btn-success form-control" id="payment-export">Xuất File</button>
                                </div>
                                <div class="col-2">
                                    <label >&nbsp</label>
                                    <button class="btn btn-success form-control" id="payment-print">In Báo Cáo</button>
                                </div>
                                <div class="col-2">
                                    <label >&nbsp</label>
                                    <button class="btn btn-success form-control" id="payment-reset">Reset</button>
                                </div>
                            </div>

                            <div class="row margin_b10 m-t5">
                                <div class="table-responsive-lg col-12">
                                    <table class="table table-bordered m-0 t-normal" id="payment-list">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th>Mã giao dịch</th>
                                            <th>Mã Invoice</th>
                                            <th>Số tiền đã trả</th>
                                            <th>Phương thức thanh toán</th>
                                            <th>Trạng thái</th>
                                            <th>Ngày tạo</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
                                    <div class="col-12">
                                        <div class="row bg-light-gray">
                                            <div class="col-6">Total: <span class="f-bold" id="payment-record"></span> Payments</div>
                                            <div class="col-6 text-right padding_r">
                                                Success: <span class="f-bold color_green" id="payment-success"></span>
                                                - Not Success: <span class="f-bold color-alert" id="payment-not-success"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-12 margin-top20">
                                    <ul id="payment-list-pagination" class="pagination-sm"></ul>
                                </div>
                            </div>
                            <!--end-->
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
            var user_login='<?php echo $_SESSION['_id'];?>';
            var type_login='<?php echo $_SESSION['user_type_option_user_type'];?>';
        </script>

        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
        <script src="<?= APP_URL; ?>/js/jquery.twbsPagination.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/dashboard/dashboard_admin.js" type="text/javascript"></script>

        <script src="<?= APP_URL; ?>/js/pdf/pdf_ex.js" type="text/javascript"></script>
        <script src="<?= APP_URL; ?>/js/common_f.js" type="text/javascript"></script>

    </body>
</html>
