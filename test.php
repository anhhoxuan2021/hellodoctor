<?php

require_once 'init.php';

$_title = 'Xin Chào Bác Sĩ';
$_active_nav = 'test';
$_head = '<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/miscellaneous/reactions/reactions.css">
<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/miscellaneous/fullcalendar/fullcalendar.bundle.css">
<link rel="stylesheet" media="screen, print" href="'.ASSETS_URL.'/css/miscellaneous/jqvmap/jqvmap.bundle.css">
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css">

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
    <style>
            * {
                margin: 0;
                padding: 0
            }

            html {
                height: 100%
            }

            #grad1 {
                background-color: : #9C27B0;
                background-image: linear-gradient(120deg, #FF4081, #81D4FA)
            }

            #msform {
                text-align: center;
                position: relative;
                margin-top: 20px
            }

            #msform fieldset .form-card {
                background: white;
                border: 0 none;
                border-radius: 0px;
                box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
                padding: 20px 40px 30px 40px;
                box-sizing: border-box;
                width: 94%;
                margin: 0 3% 20px 3%;
                position: relative
            }

            #msform fieldset {
                background: white;
                border: 0 none;
                border-radius: 0.5rem;
                box-sizing: border-box;
                width: 100%;
                margin: 0;
                padding-bottom: 20px;
                position: relative
            }

            #msform fieldset:not(:first-of-type) {
                display: none
            }

            #msform fieldset .form-card {
                text-align: left;
                color: #9E9E9E
            }

            #msform input,
            #msform textarea {
                padding: 0px 8px 4px 8px;
                border: none;
                border-bottom: 1px solid #ccc;
                border-radius: 0px;
                margin-bottom: 25px;
                margin-top: 2px;
                width: 100%;
                box-sizing: border-box;
                font-family: montserrat;
                color: #2C3E50;
                font-size: 16px;
                letter-spacing: 1px
            }

            #msform input:focus,
            #msform textarea:focus {
                -moz-box-shadow: none !important;
                -webkit-box-shadow: none !important;
                box-shadow: none !important;
                border: none;
                font-weight: bold;
                border-bottom: 2px solid skyblue;
                outline-width: 0
            }

            #msform .action-button {
                width: 100px;
                background: skyblue;
                font-weight: bold;
                color: white;
                border: 0 none;
                border-radius: 0px;
                cursor: pointer;
                padding: 10px 5px;
                margin: 10px 5px
            }

            #msform .action-button:hover,
            #msform .action-button:focus {
                box-shadow: 0 0 0 2px white, 0 0 0 3px skyblue
            }

            #msform .action-button-previous {
                width: 100px;
                background: #616161;
                font-weight: bold;
                color: white;
                border: 0 none;
                border-radius: 0px;
                cursor: pointer;
                padding: 10px 5px;
                margin: 10px 5px
            }

            #msform .action-button-previous:hover,
            #msform .action-button-previous:focus {
                box-shadow: 0 0 0 2px white, 0 0 0 3px #616161
            }

            select.list-dt {
                border: none;
                outline: 0;
                border-bottom: 1px solid #ccc;
                padding: 2px 5px 3px 5px;
                margin: 2px
            }

            select.list-dt:focus {
                border-bottom: 2px solid skyblue
            }

            .card {
                z-index: 0;
                border: none;
                border-radius: 0.5rem;
                position: relative
            }

            .fs-title {
                font-size: 25px;
                color: #2C3E50;
                margin-bottom: 10px;
                font-weight: bold;
                text-align: left
            }

            #progressbar {
                margin-bottom: 30px;
                overflow: hidden;
                color: lightgrey
            }

            #progressbar .active {
                color: #000000
            }

            #progressbar li {
                list-style-type: none;
                font-size: 12px;
                width: 25%;
                float: left;
                position: relative
            }

            #progressbar #account:before {
                font-family: FontAwesome;
                content: "\f023"
            }

            #progressbar #personal:before {
                font-family: FontAwesome;
                content: "\f007"
            }

            #progressbar #payment:before {
                font-family: FontAwesome;
                content: "\f09d"
            }

            #progressbar #confirm:before {
                font-family: FontAwesome;
                content: "\f00c"
            }

            #progressbar li:before {
                width: 50px;
                height: 50px;
                line-height: 45px;
                display: block;
                font-size: 18px;
                color: #ffffff;
                background: lightgray;
                border-radius: 50%;
                margin: 0 auto 10px auto;
                padding: 2px
            }

            #progressbar li:after {
                content: '';
                width: 100%;
                height: 2px;
                background: lightgray;
                position: absolute;
                left: 0;
                top: 25px;
                z-index: -1
            }

            #progressbar li.active:before,
            #progressbar li.active:after {
                background: skyblue
            }

            .radio-group {
                position: relative;
                margin-bottom: 25px
            }

            .radio {
                display: inline-block;
                width: 204;
                height: 104;
                border-radius: 0;
                background: lightblue;
                box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
                cursor: pointer;
                margin: 8px 2px
            }

            .radio:hover {
                box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.3)
            }

            .radio.selected {
                box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1)
            }

            .fit-image {
                width: 100%;
                object-fit: cover
            }
    </style>
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
                            <li class="breadcrumb-item"><a href="home.php">Xin Chào Bác Sĩ</a></li>
                            <li class="breadcrumb-item">Trang Chủ</li>
                            <li class="position-absolute pos-top pos-right d-none d-sm-block"><span class="js-get-date"></span></li>
                        </ol>
                        <div class="subheader">
                            <h1 class="subheader-title">
                                <i class='icon fal fa-award'></i>  Chào mừng bạn đến với Tương lai của Chăm sóc Sức khỏe!
                            </h1>
                        </div>
                        <!-- MultiStep Form -->
                        <div class="container-fluid" id="grad1">
                            <div class="row justify-content-center mt-0">
                                <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                                    <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                                        <h2><strong>Sign Up Your User Account</strong></h2>
                                        <p>Fill all form field to go to next step</p>
                                        <div class="row">
                                            <div class="col-md-12 mx-0">
                                                <form id="msform">
                                                    <!-- progressbar -->
                                                    <ul id="progressbar">
                                                        <li class="active" id="account"><strong>Account</strong></li>
                                                        <li id="personal"><strong>Personal</strong></li>
                                                        <li id="payment"><strong>Payment</strong></li>
                                                        <li id="confirm"><strong>Finish</strong></li>
                                                    </ul> <!-- fieldsets -->
                                                    <fieldset>
                                                        <div class="form-card">
                                                            <h2 class="fs-title">Account Information</h2> <input type="email" name="email" placeholder="Email Id" /> <input type="text" name="uname" placeholder="UserName" /> <input type="password" name="pwd" placeholder="Password" /> <input type="password" name="cpwd" placeholder="Confirm Password" />
                                                        </div> <input type="button" name="next" class="next action-button" value="Next Step" />
                                                    </fieldset>
                                                    <fieldset>
                                                        <div class="form-card">
                                                            <h2 class="fs-title">Personal Information</h2> <input type="text" name="fname" placeholder="First Name" /> <input type="text" name="lname" placeholder="Last Name" /> <input type="text" name="phno" placeholder="Contact No." /> <input type="text" name="phno_2" placeholder="Alternate Contact No." />
                                                        </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> <input type="button" name="next" class="next action-button" value="Next Step" />
                                                    </fieldset>
                                                    <fieldset>
                                                        <div class="form-card">
                                                            <h2 class="fs-title">Payment Information</h2>
                                                            <div class="radio-group">
                                                                <div class='radio' data-value="credit"><img src="https://i.imgur.com/XzOzVHZ.jpg" width="200px" height="100px"></div>
                                                                <div class='radio' data-value="paypal"><img src="https://i.imgur.com/jXjwZlj.jpg" width="200px" height="100px"></div> <br>
                                                            </div> <label class="pay">Card Holder Name*</label> <input type="text" name="holdername" placeholder="" />
                                                            <div class="row">
                                                                <div class="col-9"> <label class="pay">Card Number*</label> <input type="text" name="cardno" placeholder="" /> </div>
                                                                <div class="col-3"> <label class="pay">CVC*</label> <input type="password" name="cvcpwd" placeholder="***" /> </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-3"> <label class="pay">Expiry Date*</label> </div>
                                                                <div class="col-9"> <select class="list-dt" id="month" name="expmonth">
                                                                        <option selected>Month</option>
                                                                        <option>January</option>
                                                                        <option>February</option>
                                                                        <option>March</option>
                                                                        <option>April</option>
                                                                        <option>May</option>
                                                                        <option>June</option>
                                                                        <option>July</option>
                                                                        <option>August</option>
                                                                        <option>September</option>
                                                                        <option>October</option>
                                                                        <option>November</option>
                                                                        <option>December</option>
                                                                    </select> <select class="list-dt" id="year" name="expyear">
                                                                        <option selected>Year</option>
                                                                    </select> </div>
                                                            </div>
                                                        </div> <input type="button" name="previous" class="previous action-button-previous" value="Previous" /> <input type="button" name="make_payment" class="next action-button" value="Confirm" />
                                                    </fieldset>
                                                    <fieldset>
                                                        <div class="form-card">
                                                            <h2 class="fs-title text-center">Success !</h2> <br><br>
                                                            <div class="row justify-content-center">
                                                                <div class="col-3"> <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image"> </div>
                                                            </div> <br><br>
                                                            <div class="row justify-content-center">
                                                                <div class="col-7 text-center">
                                                                    <h5>You Have Successfully Signed Up</h5>
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script>
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
